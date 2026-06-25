// 初始化 Socket.io 連線
const socket = io();

// 遊戲狀態變數
let roomCode = "";
let nickname = "";
let isAdmin = false;
let gameMode = 1;
let selectedTeam = "GSW";
let currentCategory = "nba"; // 預設為 NBA
let myScore = 0;
let gameplayTimer = null;
let currentDuration = 20;

// DOM 元素 - 畫面切換
const screenEntry = document.getElementById("screen-entry");
const screenWait = document.getElementById("screen-wait");
const screenPlay = document.getElementById("screen-play");
const screenReveal = document.getElementById("screen-reveal");
const screenRoundEnd = document.getElementById("screen-round-end");
const screenEnd = document.getElementById("screen-end");

// DOM 元素 - 入口引導
const tabJoin = document.getElementById("tab-join");
const tabCreate = document.getElementById("tab-create");
const formJoin = document.getElementById("form-join");
const formCreate = document.getElementById("form-create");
const inputRoomCode = document.getElementById("input-room-code");
const inputNicknamePlayer = document.getElementById("input-nickname-player");
const inputNicknameAdmin = document.getElementById("input-nickname-admin");
const btnJoinRoom = document.getElementById("btn-join-room");
const btnCreateRoom = document.getElementById("btn-create-room");
const entryError = document.getElementById("entry-error");

// DOM 元素 - 房長關卡選項
const modeCards = document.querySelectorAll(".mode-card-mini");
const teamSelectorMini = document.getElementById("team-selector-mini");
const teamBtns = document.querySelectorAll("#team-selector-mini .team-btn-mini");
const nbaModeGroup = document.getElementById("nba-mode-group");
const catNba = document.getElementById("cat-nba");

// DOM 元素 - 關卡結束暫時排行
const btnNextRound = document.getElementById("btn-next-round");
const roundEndTitle = document.getElementById("round-end-title");
const roundEndSubtitle = document.getElementById("round-end-subtitle");
const roundProgressDots = document.getElementById("round-progress-dots");
const roundEndLeaderboard = document.getElementById("round-end-leaderboard");
const adminRoundEndControls = document.getElementById("admin-round-end-controls");
const playerRoundEndWait = document.getElementById("player-round-end-wait");

// DOM 元素 - 大廳等待
const waitRoomCode = document.getElementById("wait-room-code");
const adminConnectionArea = document.getElementById("admin-connection-area");
const waitJoinUrl = document.getElementById("wait-join-url");
const waitPlayerCount = document.getElementById("wait-player-count");
const waitPlayersPills = document.getElementById("wait-players-pills");
const btnStartGameAdmin = document.getElementById("btn-start-game-admin");
const playerWaitText = document.getElementById("player-wait-text");
const btnLeaveLobby = document.getElementById("btn-leave-lobby");

// DOM 元素 - 遊戲進行中
const playProgress = document.getElementById("play-progress");
const playNickname = document.getElementById("play-nickname");
const playScore = document.getElementById("play-score");
const playProgressBar = document.getElementById("play-progress-bar");
const playerImg = document.getElementById("player-img");
const playTimer = document.getElementById("play-timer");
const playQtypeBadge = document.getElementById("play-qtype-badge");
const playModeChoice = document.getElementById("play-mode-choice");
const playModeText = document.getElementById("play-mode-text");
const inputTextGuess = document.getElementById("input-text-guess");
const btnSubmitTextGuess = document.getElementById("btn-submit-text-guess");
const playSubmittedOverlay = document.getElementById("play-submitted-overlay");
const playAnsweredRatio = document.getElementById("play-answered-ratio");
const adminPlayControls = document.getElementById("admin-play-controls");
const btnRevealAdmin = document.getElementById("btn-reveal-admin");
const choiceBtns = document.querySelectorAll(".choice-btn-mini");

// DOM 元素 - 答案揭曉
const revealFeedbackIcon = document.getElementById("reveal-feedback-icon");
const revealFeedbackText = document.getElementById("reveal-feedback-text");
const revealAddedPoints = document.getElementById("reveal-added-points");
const revealNameCn = document.getElementById("reveal-name-cn");
const revealNameEn = document.getElementById("reveal-name-en");
const revealTeam = document.getElementById("reveal-team");
const revealPts = document.getElementById("reveal-pts");
const revealReb = document.getElementById("reveal-reb");
const revealAst = document.getElementById("reveal-ast");
const revealCareer = document.getElementById("reveal-career");
const revealCareerPath = document.getElementById("reveal-career-path");
const revealLeaderboardList = document.getElementById("reveal-leaderboard-list");
const adminRevealControls = document.getElementById("admin-reveal-controls");
const btnNextAdmin = document.getElementById("btn-next-admin");
const playerRevealWaitText = document.getElementById("player-reveal-wait-text");

// DOM 元素 - 結算畫面
const endPodium = document.getElementById("end-podium");
const endLeaderboardList = document.getElementById("end-leaderboard-list");
const btnRestartAdmin = document.getElementById("btn-restart-admin");
const btnRestartPlayer = document.getElementById("btn-restart-player");

// === 初始化與 Tab 切換 ===
function showScreen(targetScreen) {
  [screenEntry, screenWait, screenPlay, screenReveal, screenRoundEnd, screenEnd].forEach(s => {
    if (s) s.classList.add("hidden");
  });
  if (targetScreen) targetScreen.classList.remove("hidden");
}

function switchTab(role) {
  if (role === "join") {
    tabJoin.classList.add("active");
    tabCreate.classList.remove("active");
    formJoin.classList.remove("hidden");
    formCreate.classList.add("hidden");
    entryError.style.display = "none";
  } else {
    tabJoin.classList.remove("active");
    tabCreate.classList.add("active");
    formJoin.classList.add("hidden");
    formCreate.classList.remove("hidden");
    entryError.style.display = "none";
  }
}

tabJoin.addEventListener("click", () => switchTab("join"));
tabCreate.addEventListener("click", () => switchTab("create"));

// 自動填充 URL 房號
const urlParams = new URLSearchParams(window.location.search);
const roomParam = urlParams.get("room");
if (roomParam) {
  inputRoomCode.value = roomParam;
  switchTab("join");
}

// === 房長關卡選項設定 ===
modeCards.forEach(card => {
  card.addEventListener("click", () => {
    modeCards.forEach(c => c.classList.remove("selected"));
    card.classList.add("selected");
    
    const mode = parseInt(card.dataset.mode);
    gameMode = mode;
    
    if (mode === 2) {
      teamSelectorMini.classList.remove("hidden");
    } else {
      teamSelectorMini.classList.add("hidden");
    }
  });
});

teamBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    teamBtns.forEach(b => b.classList.remove("selected"));
    btn.classList.add("selected");
    selectedTeam = btn.dataset.team;
  });
});

// 勾選框變更事件：切換 NBA 設定顯示
if (catNba) {
  catNba.addEventListener("change", () => {
    if (catNba.checked) {
      nbaModeGroup.classList.remove("hidden");
      if (gameMode === 2) {
        teamSelectorMini.classList.remove("hidden");
      }
    } else {
      nbaModeGroup.classList.add("hidden");
      teamSelectorMini.classList.add("hidden");
    }
  });
}

// 頭像載入出錯處理
playerImg.onerror = () => {
  const currentSrc = playerImg.src;
  // 若是代理路由失敗，直接顯示預設頭像（不再重試）
  if (currentSrc.includes("/api/nba-image/")) {
    playerImg.src = "https://upload.wikimedia.org/wikipedia/commons/7/7b/Basketball_silhouette.svg";
    playerImg.onerror = null; // 防止無限迴圈
  } else if (currentCategory === "nba") {
    playerImg.src = "https://upload.wikimedia.org/wikipedia/commons/7/7b/Basketball_silhouette.svg";
    playerImg.onerror = null;
  } else {
    playerImg.src = "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png";
    playerImg.onerror = null;
  }
};

// === 錯誤訊息顯示 ===
function showEntryError(msg) {
  entryError.textContent = msg;
  entryError.style.display = "block";
}

// === 建立房間 (房長) ===
btnCreateRoom.addEventListener("click", () => {
  nickname = inputNicknameAdmin.value.trim();
  if (!nickname) {
    showEntryError("請輸入您的暱稱！");
    return;
  }
  
  isAdmin = true;
  entryError.style.display = "none";
  socket.emit("create_room", { nickname });
});

// === 加入房間 (普通玩家) ===
btnJoinRoom.addEventListener("click", () => {
  roomCode = inputRoomCode.value.trim();
  nickname = inputNicknamePlayer.value.trim();
  
  if (!roomCode || roomCode.length !== 4) {
    showEntryError("請輸入正確的 4 位數房號！");
    return;
  }
  if (!nickname) {
    showEntryError("請輸入您的暱稱！");
    return;
  }
  
  isAdmin = false;
  entryError.style.display = "none";
  socket.emit("join_room", { roomCode, nickname });
});

// 退出/離開大廳
btnLeaveLobby.addEventListener("click", () => {
  if (isAdmin) {
    if (confirm("您是房長，離開房間將會關閉此房間。確定嗎？")) {
      socket.emit("terminate_game");
      window.location.href = "/play";
    }
  } else {
    window.location.reload();
  }
});

// === 大廳相關 Socket 監聽 ===
socket.on("room_created", (data) => {
  roomCode = data.roomCode;
  nickname = data.nickname;
  
  waitRoomCode.textContent = `房號：${roomCode}`;
  
  // 房長連線網址與 QR Code
  adminConnectionArea.classList.remove("hidden");
  btnStartGameAdmin.classList.remove("hidden");
  playerWaitText.classList.add("hidden");
  
  const playUrl = `${window.location.origin}/play`;
  waitJoinUrl.textContent = `${playUrl}?room=${roomCode}`;
  
  const qrDiv = document.getElementById("wait-qrcode");
  qrDiv.innerHTML = "";
  new QRCode(qrDiv, {
    text: `${playUrl}?room=${roomCode}`,
    width: 130,
    height: 130,
    colorDark : "#0f172a",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.M
  });
  
  showScreen(screenWait);
});

socket.on("join_success", (data) => {
  roomCode = data.roomCode;
  nickname = data.nickname;
  
  waitRoomCode.textContent = `房號：${roomCode}`;
  
  adminConnectionArea.classList.add("hidden");
  btnStartGameAdmin.classList.add("hidden");
  playerWaitText.classList.remove("hidden");
  
  showScreen(screenWait);
});

socket.on("join_error", (data) => {
  showEntryError(data.message);
});

socket.on("update_players", (data) => {
  const players = data.players;
  waitPlayerCount.textContent = players.length;
  
  waitPlayersPills.innerHTML = "";
  players.forEach(p => {
    const pill = document.createElement("span");
    pill.className = "player-pill";
    pill.textContent = `🏃‍♂️ ${p}`;
    waitPlayersPills.appendChild(pill);
  });
  
  // 房長在有一位玩家（包含自己）時即可啟動
  if (isAdmin) {
    btnStartGameAdmin.disabled = players.length === 0;
  }
});

// === 房長開始遊戲 ===
btnStartGameAdmin.addEventListener("click", () => {
  const selectedCategories = [];
  if (document.getElementById("cat-nba").checked) selectedCategories.push("nba");
  if (document.getElementById("cat-male").checked) selectedCategories.push("male_celebrity");
  if (document.getElementById("cat-female").checked) selectedCategories.push("female_celebrity");

  if (selectedCategories.length === 0) {
    alert("請至少選擇一個關卡！");
    return;
  }

  socket.emit("start_game", {
    gameMode,
    selectedTeam,
    categories: selectedCategories
  });
});

socket.on("game_started", () => {
  myScore = 0;
  playScore.textContent = `0 pt`;
  playNickname.textContent = nickname;
  showScreen(screenPlay);
});

// === 倒數計時與除霧模糊 (手機端) ===
function startQuestionTimer(duration) {
  if (gameplayTimer) clearInterval(gameplayTimer);
  
  let timeLeft = duration;
  playTimer.textContent = timeLeft;
  playTimer.classList.remove("low-time");
  playProgressBar.style.width = "100%";
  
  const step = 100;
  const totalSteps = (duration * 1000) / step;
  let currentStep = 0;
  
  // 頭像直接清晰顯示（無模糊效果）
  playerImg.style.filter = "none";
  playerImg.style.transform = "scale(1)";

  gameplayTimer = setInterval(() => {
    currentStep++;
    
    // 平滑遞減進度條
    const percent = 100 - (currentStep / totalSteps) * 100;
    playProgressBar.style.width = `${Math.max(0, percent)}%`;
    
    // 每 1000ms 更新文字計時器
    if (currentStep % 10 === 0) {
      timeLeft--;
      playTimer.textContent = Math.max(0, timeLeft);
      
      if (timeLeft <= 5) {
        playTimer.classList.add("low-time");
      }
      
      if (timeLeft <= 0) {
        clearInterval(gameplayTimer);
        // 普通玩家時間到，強制停止，等待伺服器廣播 reveal
        disableAnswering();
        // 房長端若時間到，呼叫伺服器揭曉答案
        if (isAdmin) {
          socket.emit("reveal_answer");
        }
      }
    }
  }, step);
}

function stopQuestionTimer() {
  if (gameplayTimer) {
    clearInterval(gameplayTimer);
    gameplayTimer = null;
  }
}

function disableAnswering() {
  choiceBtns.forEach(btn => btn.classList.add("disabled"));
  inputTextGuess.disabled = true;
  btnSubmitTextGuess.disabled = true;
}

// === 答題中狀態處理 ===
socket.on("new_question", (data) => {
  const { currentIndex, totalRounds, type, choices, duration, playerId, imageUrl, pts, reb, ast, team, labels, category, gameMode: roomMode } = data;
  currentDuration = duration;
  
  // 更新本題主題類別暫存
  if (category) currentCategory = category;

  const isCelebrity = (currentCategory && currentCategory !== "nba");

  // 1. 基本進度 UI 重置
  playProgress.textContent = `${isCelebrity ? '人物' : '球員'}：${currentIndex + 1} / ${totalRounds}`;
  playSubmittedOverlay.classList.add("hidden");
  playAnsweredRatio.textContent = `0/${waitPlayerCount.textContent}`;
  
  // 2. 判斷房長管理控制台顯示
  if (isAdmin) {
    adminPlayControls.classList.remove("hidden");
  } else {
    adminPlayControls.classList.add("hidden");
  }
  
  // 3. 設定頭像圖片 (直接使用伺服器回傳之 imageUrl)
  playerImg.src = imageUrl || `https://cdn.nba.com/headshots/nba/latest/260x190/${playerId}.png`;
  
  // 4. 設定答題類型 UI
  if (type === "choice") {
    playQtypeBadge.textContent = "四選一選擇題 📝";
    playQtypeBadge.className = "qtype-tag-mini badge-choice";
    playModeChoice.classList.remove("hidden");
    playModeText.classList.add("hidden");
    
    // 設定選項按鈕
    choices.forEach((choice, idx) => {
      const btn = choiceBtns[idx];
      btn.textContent = choice;
      btn.className = `choice-btn-mini choice-${idx}`; // 重置 class
    });
  } else {
    playQtypeBadge.textContent = "名字輸入填空題 ⌨️";
    playQtypeBadge.className = "qtype-tag-mini badge-text";
    playModeChoice.classList.add("hidden");
    playModeText.classList.remove("hidden");
    
    // 修改輸入提示文字
    const labelText = document.querySelector("#play-mode-text label");
    if (labelText) {
      labelText.textContent = isCelebrity ? "請輸入該人物的姓名（中英文皆可）" : "請輸入該球員的姓名（中英文皆可）";
    }
    
    inputTextGuess.value = "";
    inputTextGuess.disabled = false;
    btnSubmitTextGuess.disabled = false;
  }
  
  showScreen(screenPlay);
  startQuestionTimer(duration);
});

// 普通按鈕作答
choiceBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("disabled")) return;
    
    choiceBtns.forEach(b => {
      b.classList.add("disabled");
      if (b === btn) b.classList.add("selected");
    });
    
    submitMyAnswer(btn.textContent);
  });
});

// 輸入框作答
btnSubmitTextGuess.addEventListener("click", () => {
  const guess = inputTextGuess.value.trim();
  if (!guess) return;
  
  inputTextGuess.disabled = true;
  btnSubmitTextGuess.disabled = true;
  
  submitMyAnswer(guess);
});

inputTextGuess.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    btnSubmitTextGuess.click();
  }
});

function submitMyAnswer(guess) {
  stopQuestionTimer();
  socket.emit("submit_answer", { guess });
  
  playSubmittedOverlay.classList.remove("hidden");
}

// 接收已回答人數比例更新
socket.on("player_submitted_update", (data) => {
  const { answeredCount, totalPlayers } = data;
  playAnsweredRatio.textContent = `${answeredCount}/${totalPlayers}`;
});

// 房長點擊提前揭曉
btnRevealAdmin.addEventListener("click", () => {
  socket.emit("reveal_answer");
});

// === 揭曉答案階段 ===
socket.on("answer_revealed", (data) => {
  stopQuestionTimer();
  
  const { correctNameCn, correctNameEn, playerData, labels, leaderboard, playerResults } = data;
  const myResult = playerResults[socket.id];
  
  const isCelebrity = (currentCategory && currentCategory !== "nba");
  
  // 1. 確保頭像清晰顯示
  playerImg.style.filter = "none";
  playerImg.style.transform = "scale(1)";
  
  // 2. 顯示個人答題反饋
  if (myResult) {
    myScore = myResult.score;
    playScore.textContent = `${myScore} pt`;
    
    if (myResult.lastAnswerCorrect) {
      revealFeedbackIcon.textContent = "🎉";
      revealFeedbackText.textContent = "答對了！";
      revealFeedbackText.className = "fb-tag fb-correct";
      revealAddedPoints.textContent = `+${myResult.lastAnswerPoints} pt`;
      revealAddedPoints.style.display = "block";
    } else {
      revealFeedbackIcon.textContent = "😢";
      revealFeedbackText.textContent = "答錯了！";
      revealFeedbackText.className = "fb-tag fb-incorrect";
      revealAddedPoints.style.display = "none";
    }
  }
  
  // 更新動態數據標籤
  if (labels) {
    document.getElementById("label-stat1").textContent = labels.stat1;
    document.getElementById("label-stat2").textContent = labels.stat2;
    document.getElementById("label-stat3").textContent = labels.stat3;
  }
  
  // 3. 填入球員答案與數據詳情
  revealNameCn.textContent = correctNameCn;
  revealNameEn.textContent = correctNameEn;
  revealTeam.textContent = isCelebrity ? `代表作品：${playerData.team}` : `主要球隊：${playerData.team}`;
  revealPts.textContent = playerData.pts.toFixed(1);
  revealReb.textContent = playerData.reb.toFixed(1);
  revealAst.textContent = playerData.ast.toFixed(1);
  
  // 關卡三生涯效力軌跡 或 藝人標籤榮譽顯示
  if (isCelebrity || gameMode === 3) {
    revealCareer.classList.remove("hidden");
    
    const careerTitle = document.querySelector("#reveal-career p");
    if (careerTitle) {
      careerTitle.textContent = isCelebrity ? "人物標籤/榮譽：" : "生涯效力軌跡：";
    }
    
    revealCareerPath.innerHTML = "";
    
    playerData.career_teams.forEach((t, i) => {
      const badge = document.createElement("span");
      badge.className = "career-pill";
      
      if (isCelebrity) {
        badge.classList.add("tpe-team"); // 藝人金黃色標籤
      } else {
        if (t.startsWith("TPE-")) badge.classList.add("tpe-team");
        else if (t.startsWith("CBA-")) badge.classList.add("cba-team");
        else if (t.includes("-")) badge.classList.add("overseas-team");
      }
      badge.textContent = t;
      revealCareerPath.appendChild(badge);
      
      // 僅 NBA 畫箭頭
      if (!isCelebrity && i < playerData.career_teams.length - 1) {
        const arrow = document.createElement("span");
        arrow.style.color = "var(--text-secondary)";
        arrow.textContent = "➔";
        revealCareerPath.appendChild(arrow);
      }
    });
  } else {
    revealCareer.classList.add("hidden");
  }
  
  // 4. 渲染本題即時排行榜 (前5名)
  revealLeaderboardList.innerHTML = "";
  leaderboard.slice(0, 5).forEach((p, idx) => {
    const item = document.createElement("div");
    item.className = "leaderboard-item-mini animate-pop";
    
    const rankClass = idx === 0 ? "rb-1" : (idx === 1 ? "rb-2" : (idx === 2 ? "rb-3" : "rb-other"));
    const correctIndicator = p.lastAnswerCorrect ? `<span style="color:#10b981;font-weight:800;margin-right:8px;">+${p.lastAnswerPoints}</span>` : `<span style="color:#ef4444;margin-right:8px;">❌</span>`;
    
    item.innerHTML = `
      <div>
        <span class="rank-badge-mini ${rankClass}">${idx + 1}</span>
        <span style="font-weight: 700; color:#fff;">${p.nickname}</span>
      </div>
      <div>
        ${correctIndicator}
        <span style="color:var(--accent-color);font-weight:800;">${p.score} 分</span>
      </div>
    `;
    revealLeaderboardList.appendChild(item);
  });
  
  // 5. 房長與玩家控制鍵切換
  if (isAdmin) {
    adminRevealControls.classList.remove("hidden");
    playerRevealWaitText.classList.add("hidden");
  } else {
    adminRevealControls.classList.add("hidden");
    playerRevealWaitText.classList.remove("hidden");
  }
  
  showScreen(screenReveal);
});

// 房長點擊下一題
btnNextAdmin.addEventListener("click", () => {
  socket.emit("next_question");
});

// === 遊戲結束/最終總排行榜 ===
socket.on("game_finished", (data) => {
  stopQuestionTimer();
  const { leaderboard } = data;
  
  // 1. 渲染前三名頒獎台
  endPodium.innerHTML = "";
  const podiumList = [];
  if (leaderboard[1]) podiumList.push({ rank: 2, ...leaderboard[1] });
  if (leaderboard[0]) podiumList.push({ rank: 1, ...leaderboard[0] });
  if (leaderboard[2]) podiumList.push({ rank: 3, ...leaderboard[2] });
  
  podiumList.forEach(p => {
    const col = document.createElement("div");
    col.className = `podium-col-mini pc-${p.rank}`;
    col.innerHTML = `
      <div class="name">${p.nickname}</div>
      <div style="font-size:0.7rem;color:var(--accent-color);margin-bottom:3px;">${p.score} pt</div>
      <div class="step">${p.rank}</div>
    `;
    endPodium.appendChild(col);
  });
  
  if (leaderboard.length === 0) {
    endPodium.innerHTML = `<div style="color:rgba(255,255,255,0.4)">無玩家參賽</div>`;
  }
  
  // 2. 渲染完整名單
  endLeaderboardList.innerHTML = "";
  leaderboard.forEach((p, idx) => {
    const item = document.createElement("div");
    item.className = "leaderboard-item-mini";
    const rankClass = idx === 0 ? "rb-1" : (idx === 1 ? "rb-2" : (idx === 2 ? "rb-3" : "rb-other"));
    
    item.innerHTML = `
      <div>
        <span class="rank-badge-mini ${rankClass}">${idx + 1}</span>
        <span style="font-weight: 700; color:#fff;">${p.nickname}</span>
      </div>
      <span style="color:var(--accent-color);font-weight:800;">${p.score} 分</span>
    `;
    endLeaderboardList.appendChild(item);
  });
  
  // 3. 房長與普通玩家重啟控制
  if (isAdmin) {
    btnRestartAdmin.classList.remove("hidden");
  } else {
    btnRestartAdmin.classList.add("hidden");
  }
  
  showScreen(screenEnd);
});

// 重啟遊戲
btnRestartAdmin.addEventListener("click", () => {
  window.location.reload();
});

btnRestartPlayer.addEventListener("click", () => {
  window.location.reload();
});

// === 關卡結束與切換 Socket 監聽 ===
socket.on("round_finished", (data) => {
  const { categoryIndex, totalCategories, categoryName, leaderboard } = data;

  // 1. 設定標題與副標題
  if (roundEndTitle) roundEndTitle.textContent = `🎉 ${categoryName} 關卡結束！`;
  if (roundEndSubtitle) roundEndSubtitle.textContent = `已完成 ${categoryIndex} / ${totalCategories} 關卡`;

  // 2. 繪製關卡進度小圓點
  if (roundProgressDots) {
    roundProgressDots.innerHTML = "";
    for (let i = 1; i <= totalCategories; i++) {
      const dot = document.createElement("div");
      dot.className = "round-dot";
      if (i < categoryIndex) {
        dot.classList.add("done");
      } else if (i === categoryIndex) {
        dot.classList.add("current");
      }
      roundProgressDots.appendChild(dot);
    }
  }

  // 3. 渲染暫時排行榜
  if (roundEndLeaderboard) {
    roundEndLeaderboard.innerHTML = "";
    leaderboard.forEach((p, idx) => {
      const item = document.createElement("div");
      item.className = "leaderboard-item-mini animate-pop";
      const rankClass = idx === 0 ? "rb-1" : (idx === 1 ? "rb-2" : (idx === 2 ? "rb-3" : "rb-other"));
      
      item.innerHTML = `
        <div>
          <span class="rank-badge-mini ${rankClass}">${idx + 1}</span>
          <span style="font-weight: 700; color:#fff;">${p.nickname}</span>
        </div>
        <div style="text-align: right;">
          <span style="font-size: 0.75rem; color: var(--text-secondary); margin-right: 8px;">本關: +${p.roundScore || 0}</span>
          <span style="color: var(--accent-color); font-weight: 800;">${p.score} 分</span>
        </div>
      `;
      roundEndLeaderboard.appendChild(item);
    });
  }

  // 4. 房長與玩家控制鍵切換
  if (isAdmin) {
    if (adminRoundEndControls) adminRoundEndControls.classList.remove("hidden");
    if (playerRoundEndWait) playerRoundEndWait.classList.add("hidden");
  } else {
    if (adminRoundEndControls) adminRoundEndControls.classList.add("hidden");
    if (playerRoundEndWait) playerRoundEndWait.classList.remove("hidden");
  }

  showScreen(screenRoundEnd);
});

socket.on("round_started", (data) => {
  currentCategory = data.category;
  console.log(`關卡開始: ${data.categoryName} (${data.categoryIndex}/${data.totalCategories})`);
});

if (btnNextRound) {
  btnNextRound.addEventListener("click", () => {
    socket.emit("next_round");
  });
}

// 監聽房間關閉 (例如房長退出)
socket.on("room_closed", (data) => {
  stopQuestionTimer();
  alert(data.message);
  window.location.reload();
});

// === 中斷/離開遊戲功能 ===
function quitGame() {
  if (isAdmin) {
    const confirmed = confirm("⚠️ 您是房長！\n離開遊戲將會關閉整個房間，所有玩家都會被踢出。\n\n確定要結束遊戲嗎？");
    if (confirmed) {
      stopQuestionTimer();
      socket.emit("terminate_game");
      window.location.reload();
    }
  } else {
    const confirmed = confirm("確定要離開遊戲嗎？\n\n（您的分數將不會被保存，但其他玩家仍可繼續遊玩）");
    if (confirmed) {
      stopQuestionTimer();
      window.location.reload();
    }
  }
}

// 綁定三個離開按鈕（答題中、揭曉後、關卡結束畫面）
const btnQuitPlay = document.getElementById("btn-quit-play");
const btnQuitReveal = document.getElementById("btn-quit-reveal");
const btnQuitRoundEnd = document.getElementById("btn-quit-round-end");

if (btnQuitPlay) btnQuitPlay.addEventListener("click", quitGame);
if (btnQuitReveal) btnQuitReveal.addEventListener("click", quitGame);
if (btnQuitRoundEnd) btnQuitRoundEnd.addEventListener("click", quitGame);
