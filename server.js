const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');
const fs = require('fs');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
  }
});

const PORT = process.env.PORT || 3000;

// 載入球員資料庫
let PLAYERS = [];
try {
  PLAYERS = JSON.parse(fs.readFileSync(path.join(__dirname, 'nba_players.json'), 'utf-8'));
  console.log(`成功載入球員資料庫，共 ${PLAYERS.length} 位球員。`);
} catch (error) {
  console.error("無法讀取 nba_players.json 檔案！", error);
}

// 根網址重導向至手機/房長合一頁面
app.get('/', (req, res) => {
  res.redirect('/play');
});

// 託管靜態檔案
app.use(express.static(__dirname));

// 路由設定：手機玩家與房長合併頁面
app.get('/play', (req, res) => {
  res.sendFile(path.join(__dirname, 'player.html'));
});

// 遊戲房間暫存
// roomCode -> { 
//   adminId, 
//   players: { socketId: { nickname, score, lastAnswerCorrect, lastAnswerPoints, answered } }, 
//   gamePlayers: [],
//   totalRounds: 0,
//   currentIndex: 0,
//   currentQuestion: { type, choices, correctNameCn, correctNameEn, startTime, duration }, 
//   status: 'lobby',
//   gameMode,
//   selectedTeam
// }
const rooms = {};

// 產生隨機四位數字房號
function generateRoomCode() {
  let code;
  do {
    code = Math.floor(1000 + Math.random() * 9000).toString();
  } while (rooms[code]);
  return code;
}

// 模糊比對名字
function isCorrectAnswer(guess, correctNameCn, correctNameEn) {
  if (!guess) return false;
  
  const cleanStr = (s) => s.toLowerCase().replace(/[\s·\-\.\']/g, '');
  const cleanGuess = cleanStr(guess.trim());
  const cleanNameCn = cleanStr(correctNameCn);
  const cleanNameEn = cleanStr(correctNameEn);
  
  // 1. 完全符合
  if (cleanGuess === cleanNameCn || cleanGuess === cleanNameEn) {
    return true;
  }
  
  // 2. 英文姓或名符合（長度需大於 2）
  const enParts = correctNameEn.toLowerCase().split(/[\s·\-\.\']/);
  if (enParts.some(part => part.length > 2 && cleanStr(part) === cleanGuess)) {
    return true;
  }
  
  // 3. 中文名拆分符合（如「詹姆斯」符合「勒布朗·詹姆斯」，長度需大於等於 2）
  const cnParts = correctNameCn.split('·');
  if (cnParts.some(part => part.length >= 2 && cleanStr(part) === cleanGuess)) {
    return true;
  }

  // 4. 模糊包含（長度需大於等於 2）
  if (cleanGuess.length >= 2 && (cleanNameCn.includes(cleanGuess) || cleanNameEn.includes(cleanGuess))) {
    return true;
  }
  
  return false;
}

// 發送下一道題目給房間內的所有人
function sendNextQuestion(roomCode) {
  const room = rooms[roomCode];
  if (!room) return;

  if (room.currentIndex >= room.totalRounds) {
    // 遊戲結束
    const leaderboard = Object.keys(room.players).map(pId => ({
      nickname: room.players[pId].nickname,
      score: room.players[pId].score
    })).sort((a, b) => b.score - a.score);

    io.to(`room-${roomCode}`).emit('game_finished', { leaderboard });
    room.status = 'ended';
    return;
  }

  const player = room.gamePlayers[room.currentIndex];
  // 奇數題選擇題、偶數題輸入題
  const qType = (room.currentIndex % 2 === 0) ? 'choice' : 'text';
  const duration = 20;

  // 產生四選一選項
  let choices = [];
  if (qType === 'choice') {
    const incorrects = PLAYERS
      .filter(p => p.name !== player.name)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
    choices = [player.name, ...incorrects.map(p => p.name)].sort(() => 0.5 - Math.random());
  }

  // 設定當前題目
  room.currentQuestion = {
    type: qType,
    choices,
    correctNameCn: player.name,
    correctNameEn: player.en_name,
    playerData: {
      id: player.id,
      pts: player.pts,
      reb: player.reb,
      ast: player.ast,
      team: player.team,
      career_teams: player.career_teams || [player.team]
    },
    startTime: Date.now(),
    duration
  };

  // 重設玩家的答題狀態
  Object.keys(room.players).forEach(pId => {
    room.players[pId].answered = false;
    room.players[pId].lastAnswerCorrect = false;
    room.players[pId].lastAnswerPoints = 0;
  });

  console.log(`房間 ${roomCode} 發送題目 [${room.currentIndex + 1}/${room.totalRounds}]: ${player.en_name} (型態: ${qType})`);

  // 廣播給房間內所有玩家 (不含答案答案名字，但包含頭像 ID 與數據以供手機顯示)
  io.to(`room-${roomCode}`).emit('new_question', {
    currentIndex: room.currentIndex,
    totalRounds: room.totalRounds,
    type: qType,
    choices,
    duration,
    playerId: player.id, // 用於載入頭像
    pts: player.pts,
    reb: player.reb,
    ast: player.ast,
    team: player.team,
    gameMode: room.gameMode // 用於決定是否顯示某些提示
  });
}

io.on('connection', (socket) => {
  console.log(`Socket 連線成功: ${socket.id}`);

  // 房長建立房間 (在手機端點擊建立)
  socket.on('create_room', (data) => {
    const { nickname } = data;
    const roomCode = generateRoomCode();
    
    rooms[roomCode] = {
      adminId: socket.id,
      players: {},
      gamePlayers: [],
      totalRounds: 0,
      currentIndex: 0,
      currentQuestion: null,
      status: 'lobby',
      gameMode: 1,
      selectedTeam: ''
    };
    
    socket.join(`room-${roomCode}`);
    socket.roomCode = roomCode;
    socket.isAdmin = true;
    
    // 房長同時也是遊戲玩家
    rooms[roomCode].players[socket.id] = {
      nickname: nickname || "房長",
      score: 0,
      lastAnswerCorrect: false,
      lastAnswerPoints: 0,
      answered: false
    };

    console.log(`房間建立成功: ${roomCode} (房長 Admin: ${socket.id}, 暱稱: ${nickname})`);
    
    socket.emit('room_created', { 
      roomCode,
      nickname: nickname || "房長"
    });

    // 推送目前玩家列表給自己
    const playerList = Object.values(rooms[roomCode].players).map(p => p.nickname);
    socket.emit('update_players', { players: playerList });
  });

  // 玩家加入房間
  socket.on('join_room', (data) => {
    const { roomCode, nickname } = data;
    
    if (!rooms[roomCode]) {
      return socket.emit('join_error', { message: '找不到此房間，請確認房號是否正確！' });
    }
    
    if (rooms[roomCode].status !== 'lobby') {
      return socket.emit('join_error', { message: '遊戲已經開始，無法加入！' });
    }
    
    const players = rooms[roomCode].players;
    const nameExists = Object.values(players).some(p => p.nickname === nickname);
    if (nameExists) {
      return socket.emit('join_error', { message: '暱稱已被使用，請換一個名字！' });
    }
    
    // 加入房間
    socket.join(`room-${roomCode}`);
    socket.roomCode = roomCode;
    socket.isAdmin = false;
    
    rooms[roomCode].players[socket.id] = {
      nickname: nickname,
      score: 0,
      lastAnswerCorrect: false,
      lastAnswerPoints: 0,
      answered: false
    };
    
    console.log(`玩家 ${nickname} 加入了房間 ${roomCode} (${socket.id})`);
    
    socket.emit('join_success', { roomCode, nickname });
    
    // 通知房間所有人更新玩家名單
    const playerList = Object.values(rooms[roomCode].players).map(p => p.nickname);
    io.to(`room-${roomCode}`).emit('update_players', { players: playerList });
  });

  // 房長開始遊戲
  socket.on('start_game', (data) => {
    const roomCode = socket.roomCode;
    const room = rooms[roomCode];
    if (!room || room.adminId !== socket.id) return;
    
    const { gameMode: mode, selectedTeam: team } = data;
    room.gameMode = parseInt(mode);
    room.selectedTeam = team;

    // 篩選關卡球員
    let selectedPlayers = [];
    if (room.gameMode === 1) {
      selectedPlayers = [...PLAYERS].sort(() => 0.5 - Math.random()).slice(0, 15);
    } 
    else if (room.gameMode === 2) {
      const filtered = PLAYERS.filter(p => p.team.toUpperCase() === team.toUpperCase());
      if (filtered.length === 0) {
        return socket.emit('game_error', { message: `找不到該隊球員。` });
      }
      selectedPlayers = filtered.sort(() => 0.5 - Math.random()).slice(0, 15);
    } 
    else if (room.gameMode === 3) {
      selectedPlayers = [...PLAYERS].sort(() => 0.5 - Math.random()).slice(0, 10);
    }

    room.gamePlayers = selectedPlayers;
    room.totalRounds = selectedPlayers.length;
    room.currentIndex = 0;
    room.status = 'playing';

    io.to(`room-${roomCode}`).emit('game_started');
    
    // 發送第一題
    sendNextQuestion(roomCode);
  });

  // 玩家提交答案
  socket.on('submit_answer', (data) => {
    const roomCode = socket.roomCode;
    const room = rooms[roomCode];
    if (!room) return;
    
    const player = room.players[socket.id];
    const qInfo = room.currentQuestion;
    
    if (!player || !qInfo || player.answered) return;
    
    const { guess } = data;
    player.answered = true;
    
    const elapsed = (Date.now() - qInfo.startTime) / 1000;
    const isCorrect = isCorrectAnswer(guess, qInfo.correctNameCn, qInfo.correctNameEn);
    
    let pointsEarned = 0;
    if (isCorrect) {
      const timeRatio = Math.max(0, 1 - (elapsed / qInfo.duration));
      pointsEarned = Math.round(500 + 500 * timeRatio);
      player.score += pointsEarned;
      player.lastAnswerCorrect = true;
      player.lastAnswerPoints = pointsEarned;
    } else {
      player.lastAnswerCorrect = false;
      player.lastAnswerPoints = 0;
    }
    
    socket.emit('answer_received', { isCorrect, pointsEarned });
    
    // 統計已回答人數
    const playerIds = Object.keys(room.players);
    const answeredCount = playerIds.filter(id => room.players[id].answered).length;
    
    // 通知房間內所有人答題進度 (幾個人答了)
    io.to(`room-${roomCode}`).emit('player_submitted_update', {
      answeredCount,
      totalPlayers: playerIds.length
    });
    
    // 如果全體答完，且時間還沒到，自動揭曉
    if (answeredCount === playerIds.length) {
      revealAnswer(roomCode);
    }
  });

  // 房長手動點擊揭曉答案
  socket.on('reveal_answer', () => {
    const roomCode = socket.roomCode;
    const room = rooms[roomCode];
    if (!room || room.adminId !== socket.id) return;
    
    revealAnswer(roomCode);
  });

  // 房長點擊下一題
  socket.on('next_question', () => {
    const roomCode = socket.roomCode;
    const room = rooms[roomCode];
    if (!room || room.adminId !== socket.id) return;
    
    room.currentIndex++;
    sendNextQuestion(roomCode);
  });

  // 房長結束遊戲返回大廳
  socket.on('terminate_game', () => {
    const roomCode = socket.roomCode;
    if (!roomCode || !rooms[roomCode]) return;
    if (rooms[roomCode].adminId === socket.id) {
      io.to(`room-${roomCode}`).emit('room_closed', { message: '房長終止了遊戲。' });
      delete rooms[roomCode];
    }
  });

  // 斷線處理
  socket.on('disconnect', () => {
    const roomCode = socket.roomCode;
    if (!roomCode || !rooms[roomCode]) return;
    
    const room = rooms[roomCode];
    
    if (socket.isAdmin) {
      console.log(`房長斷線，關閉房間 ${roomCode}`);
      socket.to(`room-${roomCode}`).emit('room_closed', { message: '房長已中斷連線，遊戲結束。' });
      delete rooms[roomCode];
    } else {
      const player = room.players[socket.id];
      if (player) {
        console.log(`玩家 ${player.nickname} 斷線離開房間 ${roomCode}`);
        delete room.players[socket.id];
        
        // 廣播最新玩家名單
        const playerList = Object.values(room.players).map(p => p.nickname);
        io.to(`room-${roomCode}`).emit('update_players', { players: playerList });
        
        // 如果正在答題，檢查是否因有人退出導致答題完畢
        if (room.status === 'playing' && room.currentQuestion) {
          const playerIds = Object.keys(room.players);
          const answeredCount = playerIds.filter(id => room.players[id].answered).length;
          io.to(`room-${roomCode}`).emit('player_submitted_update', {
            answeredCount,
            totalPlayers: playerIds.length
          });
          if (playerIds.length > 0 && answeredCount === playerIds.length) {
            revealAnswer(roomCode);
          }
        }
      }
    }
  });
});

// 揭曉答案的核心函數
function revealAnswer(roomCode) {
  const room = rooms[roomCode];
  if (!room || room.status !== 'playing') return;

  const qInfo = room.currentQuestion;
  if (!qInfo) return;

  // 整理排行榜與結果
  const playerResults = Object.keys(room.players).map(pId => {
    const p = room.players[pId];
    return {
      socketId: pId,
      nickname: p.nickname,
      score: p.score,
      lastAnswerCorrect: p.lastAnswerCorrect,
      lastAnswerPoints: p.lastAnswerPoints
    };
  });

  const leaderboard = playerResults.sort((a, b) => b.score - a.score);

  // 廣播給所有人 (包含正確解答、排行榜、球員詳細數據與生涯效力)
  io.to(`room-${roomCode}`).emit('answer_revealed', {
    correctNameCn: qInfo.correctNameCn,
    correctNameEn: qInfo.correctNameEn,
    playerData: qInfo.playerData, // 含 id、pts、reb、ast、team、career_teams
    leaderboard,
    playerResults: room.players // 各個玩家細節
  });
}

server.listen(PORT, () => {
  console.log(`NBA Multiplayer Game Server is running on port ${PORT}`);
});
