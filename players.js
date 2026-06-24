// NBA 300位球員資料庫 (2010-2016)
const PLAYERS = [
  {
    "id": 201939,
    "name": "斯蒂芬·庫里",
    "en_name": "Stephen Curry",
    "team": "GSW",
    "pts": 22.4,
    "reb": 4.3,
    "ast": 6.9,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201939.png",
    "career_teams": [
      "GSW"
    ]
  },
  {
    "id": 202691,
    "name": "克萊·湯普森",
    "en_name": "Klay Thompson",
    "team": "GSW",
    "pts": 19.5,
    "reb": 3.5,
    "ast": 2.3,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202691.png",
    "career_teams": [
      "GSW"
    ]
  },
  {
    "id": 203110,
    "name": "德雷蒙德·格林",
    "en_name": "Draymond Green",
    "team": "GSW",
    "pts": 10.0,
    "reb": 7.5,
    "ast": 5.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203110.png",
    "career_teams": [
      "GSW"
    ]
  },
  {
    "id": 2738,
    "name": "安德烈·伊格達拉",
    "en_name": "Andre Iguodala",
    "team": "GSW",
    "pts": 10.5,
    "reb": 4.2,
    "ast": 4.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/2738.png",
    "career_teams": [
      "GSW"
    ]
  },
  {
    "id": 101106,
    "name": "安德魯·博古特",
    "en_name": "Andrew Bogut",
    "team": "GSW",
    "pts": 7.2,
    "reb": 8.8,
    "ast": 2.1,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/101106.png",
    "career_teams": [
      "GSW"
    ]
  },
  {
    "id": 203084,
    "name": "哈里森·巴恩斯",
    "en_name": "Harrison Barnes",
    "team": "GSW",
    "pts": 11.5,
    "reb": 4.6,
    "ast": 1.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203084.png",
    "career_teams": [
      "GSW"
    ]
  },
  {
    "id": 2733,
    "name": "肖恩·利文斯頓",
    "en_name": "Shaun Livingston",
    "team": "GSW",
    "pts": 7.0,
    "reb": 2.5,
    "ast": 3.0,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/2733.png",
    "career_teams": [
      "GSW"
    ]
  },
  {
    "id": 201578,
    "name": "馬利斯·斯貝茨",
    "en_name": "Marreese Speights",
    "team": "GSW",
    "pts": 8.5,
    "reb": 3.8,
    "ast": 0.7,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201578.png",
    "career_teams": [
      "GSW"
    ]
  },
  {
    "id": 203105,
    "name": "費斯圖斯·艾澤里",
    "en_name": "Festus Ezeli",
    "team": "GSW",
    "pts": 4.5,
    "reb": 4.0,
    "ast": 0.2,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203105.png",
    "career_teams": [
      "GSW"
    ]
  },
  {
    "id": 101135,
    "name": "大衛·李",
    "en_name": "David Lee",
    "team": "GSW",
    "pts": 16.5,
    "reb": 9.3,
    "ast": 2.8,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/101135.png",
    "career_teams": [
      "GSW"
    ]
  },
  {
    "id": 2571,
    "name": "雷安德羅·巴博薩",
    "en_name": "Leandro Barbosa",
    "team": "GSW",
    "pts": 7.5,
    "reb": 1.7,
    "ast": 1.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/2571.png",
    "career_teams": [
      "GSW"
    ]
  },
  {
    "id": 977,
    "name": "科比·布萊恩特",
    "en_name": "Kobe Bryant",
    "team": "LAL",
    "pts": 25.0,
    "reb": 5.0,
    "ast": 4.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/977.png",
    "career_teams": [
      "LAL"
    ]
  },
  {
    "id": 2200,
    "name": "保羅·加索爾",
    "en_name": "Pau Gasol",
    "team": "LAL",
    "pts": 16.8,
    "reb": 10.0,
    "ast": 3.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/2200.png",
    "career_teams": [
      "MEM",
      "LAL",
      "CHI",
      "SAS",
      "MIL",
      "ESP-BARCELONA"
    ]
  },
  {
    "id": 1885,
    "name": "拉瑪爾·奧多姆",
    "en_name": "Lamar Odom",
    "team": "LAL",
    "pts": 12.5,
    "reb": 8.5,
    "ast": 3.0,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1885.png",
    "career_teams": [
      "LAL"
    ]
  },
  {
    "id": 101115,
    "name": "安德魯·拜納姆",
    "en_name": "Andrew Bynum",
    "team": "LAL",
    "pts": 15.0,
    "reb": 10.0,
    "ast": 1.3,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/101115.png",
    "career_teams": [
      "LAL"
    ]
  },
  {
    "id": 965,
    "name": "德里克·費舍爾",
    "en_name": "Derek Fisher",
    "team": "LAL",
    "pts": 7.0,
    "reb": 2.0,
    "ast": 2.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/965.png",
    "career_teams": [
      "LAL"
    ]
  },
  {
    "id": 1897,
    "name": "慈世平",
    "en_name": "Metta World Peace",
    "team": "LAL",
    "pts": 10.5,
    "reb": 4.0,
    "ast": 2.0,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1897.png",
    "career_teams": [
      "LAL"
    ]
  },
  {
    "id": 202391,
    "name": "林書豪",
    "en_name": "Jeremy Lin",
    "team": "LAL",
    "pts": 11.5,
    "reb": 2.5,
    "ast": 4.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202391.png",
    "career_teams": [
      "GSW",
      "NYK",
      "HOU",
      "LAL",
      "CHA",
      "BKN",
      "ATL",
      "TOR",
      "CBA-BEIJING",
      "CBA-GUANGZHOU",
      "TPE-STEELERS",
      "TPE-KINGS"
    ]
  },
  {
    "id": 203944,
    "name": "朱利葉斯·蘭德爾",
    "en_name": "Julius Randle",
    "team": "LAL",
    "pts": 11.3,
    "reb": 8.0,
    "ast": 1.8,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203944.png",
    "career_teams": [
      "LAL"
    ]
  },
  {
    "id": 203903,
    "name": "喬丹·克拉克森",
    "en_name": "Jordan Clarkson",
    "team": "LAL",
    "pts": 13.5,
    "reb": 3.0,
    "ast": 2.8,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203903.png",
    "career_teams": [
      "LAL"
    ]
  },
  {
    "id": 201156,
    "name": "尼克·楊",
    "en_name": "Nick Young",
    "team": "LAL",
    "pts": 12.0,
    "reb": 2.2,
    "ast": 1.0,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201156.png",
    "career_teams": [
      "LAL"
    ]
  },
  {
    "id": 2544,
    "name": "勒布朗·詹姆斯",
    "en_name": "LeBron James",
    "team": "MIA",
    "pts": 26.5,
    "reb": 7.2,
    "ast": 6.9,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/2544.png",
    "career_teams": [
      "CLE",
      "MIA",
      "CLE",
      "LAL"
    ]
  },
  {
    "id": 2548,
    "name": "德維恩·韋德",
    "en_name": "Dwyane Wade",
    "team": "MIA",
    "pts": 21.0,
    "reb": 4.8,
    "ast": 4.7,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/2548.png",
    "career_teams": [
      "MIA",
      "CHI",
      "CLE",
      "MIA"
    ]
  },
  {
    "id": 2547,
    "name": "克里斯·波什",
    "en_name": "Chris Bosh",
    "team": "MIA",
    "pts": 17.5,
    "reb": 7.0,
    "ast": 1.8,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/2547.png",
    "career_teams": [
      "TOR",
      "MIA"
    ]
  },
  {
    "id": 951,
    "name": "雷·阿倫",
    "en_name": "Ray Allen",
    "team": "MIA",
    "pts": 12.0,
    "reb": 2.8,
    "ast": 2.0,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/951.png",
    "career_teams": [
      "MIL",
      "SEA",
      "BOS",
      "MIA"
    ]
  },
  {
    "id": 201596,
    "name": "馬里奧·查爾默斯",
    "en_name": "Mario Chalmers",
    "team": "MIA",
    "pts": 9.0,
    "reb": 2.5,
    "ast": 3.8,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201596.png",
    "career_teams": [
      "MIA"
    ]
  },
  {
    "id": 2203,
    "name": "肖恩·巴蒂爾",
    "en_name": "Shane Battier",
    "team": "MIA",
    "pts": 6.5,
    "reb": 3.0,
    "ast": 1.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/2203.png",
    "career_teams": [
      "MIA"
    ]
  },
  {
    "id": 2617,
    "name": "烏杜尼斯·哈斯勒姆",
    "en_name": "Udonis Haslem",
    "team": "MIA",
    "pts": 6.0,
    "reb": 6.0,
    "ast": 0.7,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/2617.png",
    "career_teams": [
      "MIA"
    ]
  },
  {
    "id": 202708,
    "name": "諾里斯·科爾",
    "en_name": "Norris Cole",
    "team": "MIA",
    "pts": 6.5,
    "reb": 1.8,
    "ast": 2.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202708.png",
    "career_teams": [
      "MIA"
    ]
  },
  {
    "id": 2365,
    "name": "克里斯·安德森",
    "en_name": "Chris Andersen",
    "team": "MIA",
    "pts": 5.5,
    "reb": 4.5,
    "ast": 0.4,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/2365.png",
    "career_teams": [
      "MIA"
    ]
  },
  {
    "id": 202355,
    "name": "哈桑·懷特塞德",
    "en_name": "Hassan Whiteside",
    "team": "MIA",
    "pts": 12.0,
    "reb": 11.0,
    "ast": 0.4,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202355.png",
    "career_teams": [
      "MIA"
    ]
  },
  {
    "id": 201142,
    "name": "凱文·杜蘭特",
    "en_name": "Kevin Durant",
    "team": "OKC",
    "pts": 28.5,
    "reb": 7.4,
    "ast": 3.9,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201142.png",
    "career_teams": [
      "SEA/OKC",
      "GSW",
      "BKN",
      "PHX"
    ]
  },
  {
    "id": 201566,
    "name": "拉塞爾·威斯布魯克",
    "en_name": "Russell Westbrook",
    "team": "OKC",
    "pts": 23.0,
    "reb": 6.0,
    "ast": 8.0,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201566.png",
    "career_teams": [
      "OKC",
      "HOU",
      "WAS",
      "LAL",
      "LAC",
      "DEN"
    ]
  },
  {
    "id": 201935,
    "name": "詹姆斯·哈登",
    "en_name": "James Harden",
    "team": "OKC",
    "pts": 16.0,
    "reb": 3.5,
    "ast": 3.0,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201935.png",
    "career_teams": [
      "OKC",
      "HOU",
      "BKN",
      "PHI",
      "LAC"
    ]
  },
  {
    "id": 201586,
    "name": "賽爾吉·伊巴卡",
    "en_name": "Serge Ibaka",
    "team": "OKC",
    "pts": 12.0,
    "reb": 7.5,
    "ast": 0.8,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201586.png",
    "career_teams": [
      "OKC"
    ]
  },
  {
    "id": 200757,
    "name": "薩博·塞福羅沙",
    "en_name": "Thabo Sefolosha",
    "team": "OKC",
    "pts": 7.5,
    "reb": 4.0,
    "ast": 1.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/200757.png",
    "career_teams": [
      "CHI",
      "OKC",
      "ATL",
      "UTA",
      "HOU"
    ]
  },
  {
    "id": 2570,
    "name": "肯德里克·帕金斯",
    "en_name": "Kendrick Perkins",
    "team": "OKC",
    "pts": 4.5,
    "reb": 5.5,
    "ast": 1.0,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/2570.png",
    "career_teams": [
      "BOS",
      "OKC",
      "CLE",
      "NOP"
    ]
  },
  {
    "id": 202704,
    "name": "雷吉·傑克遜",
    "en_name": "Reggie Jackson",
    "team": "OKC",
    "pts": 10.5,
    "reb": 3.0,
    "ast": 3.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202704.png",
    "career_teams": [
      "OKC"
    ]
  },
  {
    "id": 203500,
    "name": "史蒂文·亞當斯",
    "en_name": "Steven Adams",
    "team": "OKC",
    "pts": 7.5,
    "reb": 6.5,
    "ast": 0.7,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203500.png",
    "career_teams": [
      "OKC"
    ]
  },
  {
    "id": 202683,
    "name": "埃內斯·坎特",
    "en_name": "Enes Kanter",
    "team": "OKC",
    "pts": 12.5,
    "reb": 7.5,
    "ast": 0.7,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202683.png",
    "career_teams": [
      "OKC"
    ]
  },
  {
    "id": 2555,
    "name": "尼克·科里森",
    "en_name": "Nick Collison",
    "team": "OKC",
    "pts": 5.0,
    "reb": 4.5,
    "ast": 1.2,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/2555.png",
    "career_teams": [
      "OKC"
    ]
  },
  {
    "id": 1495,
    "name": "蒂姆·鄧肯",
    "en_name": "Tim Duncan",
    "team": "SAS",
    "pts": 14.2,
    "reb": 9.0,
    "ast": 2.8,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1495.png",
    "career_teams": [
      "SAS"
    ]
  },
  {
    "id": 2225,
    "name": "托尼·帕克",
    "en_name": "Tony Parker",
    "team": "SAS",
    "pts": 16.5,
    "reb": 2.5,
    "ast": 6.0,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/2225.png",
    "career_teams": [
      "SAS",
      "CHA"
    ]
  },
  {
    "id": 1938,
    "name": "馬努·吉諾比利",
    "en_name": "Manu Ginobili",
    "team": "SAS",
    "pts": 13.0,
    "reb": 3.0,
    "ast": 4.3,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1938.png",
    "career_teams": [
      "SAS"
    ]
  },
  {
    "id": 202695,
    "name": "科懷·倫納德",
    "en_name": "Kawhi Leonard",
    "team": "SAS",
    "pts": 14.3,
    "reb": 6.3,
    "ast": 2.0,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202695.png",
    "career_teams": [
      "SAS",
      "TOR",
      "LAC"
    ]
  },
  {
    "id": 201980,
    "name": "丹尼·格林",
    "en_name": "Danny Green",
    "team": "SAS",
    "pts": 9.5,
    "reb": 3.5,
    "ast": 1.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201980.png",
    "career_teams": [
      "CLE",
      "SAS",
      "TOR",
      "LAL",
      "PHI",
      "MEM",
      "CLE",
      "PHI"
    ]
  },
  {
    "id": 2564,
    "name": "波里斯·迪奧",
    "en_name": "Boris Diaw",
    "team": "SAS",
    "pts": 8.0,
    "reb": 4.0,
    "ast": 2.8,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/2564.png",
    "career_teams": [
      "PHX",
      "CHA",
      "SAS",
      "UTA"
    ]
  },
  {
    "id": 201168,
    "name": "蒂亞戈·斯普利特",
    "en_name": "Tiago Splitter",
    "team": "SAS",
    "pts": 8.5,
    "reb": 5.0,
    "ast": 1.2,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201168.png",
    "career_teams": [
      "SAS"
    ]
  },
  {
    "id": 201988,
    "name": "帕特里克·米爾斯",
    "en_name": "Patty Mills",
    "team": "SAS",
    "pts": 8.5,
    "reb": 1.5,
    "ast": 2.0,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201988.png",
    "career_teams": [
      "SAS"
    ]
  },
  {
    "id": 2588,
    "name": "馬特·邦納",
    "en_name": "Matt Bonner",
    "team": "SAS",
    "pts": 5.0,
    "reb": 2.0,
    "ast": 0.8,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/2588.png",
    "career_teams": [
      "SAS"
    ]
  },
  {
    "id": 201158,
    "name": "馬可·貝里納利",
    "en_name": "Marco Belinelli",
    "team": "SAS",
    "pts": 10.5,
    "reb": 2.2,
    "ast": 1.8,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201158.png",
    "career_teams": [
      "SAS"
    ]
  },
  {
    "id": 202681,
    "name": "凱里·歐文",
    "en_name": "Kyrie Irving",
    "team": "CLE",
    "pts": 21.0,
    "reb": 3.4,
    "ast": 5.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202681.png",
    "career_teams": [
      "CLE",
      "BOS",
      "BKN",
      "DAL"
    ]
  },
  {
    "id": 201567,
    "name": "凱文·樂福",
    "en_name": "Kevin Love",
    "team": "CLE",
    "pts": 17.5,
    "reb": 10.0,
    "ast": 2.2,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201567.png",
    "career_teams": [
      "MIN",
      "CLE",
      "MIA"
    ]
  },
  {
    "id": 2747,
    "name": "J.R. 史密斯",
    "en_name": "J.R. Smith",
    "team": "CLE",
    "pts": 11.5,
    "reb": 3.0,
    "ast": 1.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/2747.png",
    "career_teams": [
      "CLE"
    ]
  },
  {
    "id": 202697,
    "name": "伊曼·香珀特",
    "en_name": "Iman Shumpert",
    "team": "CLE",
    "pts": 7.5,
    "reb": 3.2,
    "ast": 1.8,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202697.png",
    "career_teams": [
      "CLE"
    ]
  },
  {
    "id": 202684,
    "name": "特里斯坦·湯普森",
    "en_name": "Tristan Thompson",
    "team": "CLE",
    "pts": 9.0,
    "reb": 8.5,
    "ast": 0.8,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202684.png",
    "career_teams": [
      "CLE"
    ]
  },
  {
    "id": 202389,
    "name": "蒂莫菲·莫茲戈夫",
    "en_name": "Timofey Mozgov",
    "team": "CLE",
    "pts": 8.0,
    "reb": 5.0,
    "ast": 0.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202389.png",
    "career_teams": [
      "NYK",
      "DEN",
      "CLE",
      "LAL",
      "BKN",
      "ORL"
    ]
  },
  {
    "id": 203521,
    "name": "馬修·德拉維多瓦",
    "en_name": "Matthew Dellavedova",
    "team": "CLE",
    "pts": 6.5,
    "reb": 1.8,
    "ast": 3.8,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203521.png",
    "career_teams": [
      "CLE"
    ]
  },
  {
    "id": 2760,
    "name": "安德森·瓦萊喬",
    "en_name": "Anderson Varejao",
    "team": "CLE",
    "pts": 7.5,
    "reb": 7.0,
    "ast": 1.2,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/2760.png",
    "career_teams": [
      "CLE"
    ]
  },
  {
    "id": 2590,
    "name": "莫·威廉姆斯",
    "en_name": "Mo Williams",
    "team": "CLE",
    "pts": 11.0,
    "reb": 2.2,
    "ast": 3.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/2590.png",
    "career_teams": [
      "UTA",
      "MIL",
      "CLE",
      "LAC",
      "POR",
      "MIN",
      "CLE"
    ]
  },
  {
    "id": 2210,
    "name": "理查德·傑斐遜",
    "en_name": "Richard Jefferson",
    "team": "CLE",
    "pts": 8.0,
    "reb": 2.5,
    "ast": 1.2,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/2210.png",
    "career_teams": [
      "CLE"
    ]
  },
  {
    "id": 101108,
    "name": "克里斯·保羅",
    "en_name": "Chris Paul",
    "team": "LAC",
    "pts": 18.0,
    "reb": 4.0,
    "ast": 9.8,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/101108.png",
    "career_teams": [
      "NOH",
      "LAC",
      "HOU",
      "OKC",
      "PHX",
      "GSW",
      "SAS"
    ]
  },
  {
    "id": 201933,
    "name": "布雷克·格里芬",
    "en_name": "Blake Griffin",
    "team": "LAC",
    "pts": 21.5,
    "reb": 9.5,
    "ast": 4.0,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201933.png",
    "career_teams": [
      "LAC",
      "DET",
      "BKN",
      "BOS"
    ]
  },
  {
    "id": 201599,
    "name": "德安德魯·喬丹",
    "en_name": "DeAndre Jordan",
    "team": "LAC",
    "pts": 10.5,
    "reb": 12.5,
    "ast": 0.7,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201599.png",
    "career_teams": [
      "LAC",
      "DAL",
      "LAL",
      "PHI",
      "DEN"
    ]
  },
  {
    "id": 2037,
    "name": "賈馬爾·克勞福德",
    "en_name": "Jamal Crawford",
    "team": "LAC",
    "pts": 16.0,
    "reb": 2.0,
    "ast": 2.8,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/2037.png",
    "career_teams": [
      "CHI",
      "NYK",
      "ATL",
      "LAC",
      "POR",
      "MIN",
      "PHX",
      "BKN"
    ]
  },
  {
    "id": 200755,
    "name": "J.J. 雷迪克",
    "en_name": "J.J. Redick",
    "team": "LAC",
    "pts": 15.0,
    "reb": 2.0,
    "ast": 1.6,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/200755.png",
    "career_teams": [
      "LAC",
      "PHI",
      "DAL",
      "NOP"
    ]
  },
  {
    "id": 2440,
    "name": "馬特·巴恩斯",
    "en_name": "Matt Barnes",
    "team": "LAC",
    "pts": 9.5,
    "reb": 4.5,
    "ast": 1.8,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/2440.png",
    "career_teams": [
      "LAC",
      "MEM",
      "SAC",
      "GSW"
    ]
  },
  {
    "id": 201162,
    "name": "賈里德·杜德利",
    "en_name": "Jared Dudley",
    "team": "LAC",
    "pts": 8.0,
    "reb": 3.5,
    "ast": 1.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201162.png",
    "career_teams": [
      "CHA",
      "PHX",
      "LAC",
      "MIL",
      "WAS",
      "LAL",
      "DAL"
    ]
  },
  {
    "id": 2045,
    "name": "希達耶特·特克格魯",
    "en_name": "Hedo Turkoglu",
    "team": "LAC",
    "pts": 6.0,
    "reb": 2.5,
    "ast": 1.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/2045.png",
    "career_teams": [
      "SAC",
      "ORL",
      "TOR",
      "PHX",
      "LAC"
    ]
  },
  {
    "id": 201954,
    "name": "達倫·科里森",
    "en_name": "Darren Collison",
    "team": "LAC",
    "pts": 11.5,
    "reb": 2.5,
    "ast": 3.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201954.png",
    "career_teams": [
      "NOH",
      "IND",
      "SAC",
      "LAC",
      "DAL"
    ]
  },
  {
    "id": 201565,
    "name": "德里克·羅斯",
    "en_name": "Derrick Rose",
    "team": "CHI",
    "pts": 20.0,
    "reb": 3.5,
    "ast": 6.0,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201565.png",
    "career_teams": [
      "CHI",
      "NYK",
      "CLE",
      "MIN",
      "DET",
      "NYK",
      "MEM"
    ]
  },
  {
    "id": 201149,
    "name": "喬金·諾阿",
    "en_name": "Joakim Noah",
    "team": "CHI",
    "pts": 10.5,
    "reb": 10.0,
    "ast": 4.0,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201149.png",
    "career_teams": [
      "CHI"
    ]
  },
  {
    "id": 2430,
    "name": "卡洛斯·布澤爾",
    "en_name": "Carlos Boozer",
    "team": "CHI",
    "pts": 15.5,
    "reb": 9.0,
    "ast": 1.8,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/2430.png",
    "career_teams": [
      "UTA",
      "CHI",
      "LAL"
    ]
  },
  {
    "id": 2736,
    "name": "羅爾·鄧",
    "en_name": "Luol Deng",
    "team": "CHI",
    "pts": 15.5,
    "reb": 6.0,
    "ast": 2.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/2736.png",
    "career_teams": [
      "CHI"
    ]
  },
  {
    "id": 202710,
    "name": "吉米·巴特勒",
    "en_name": "Jimmy Butler",
    "team": "CHI",
    "pts": 16.0,
    "reb": 5.0,
    "ast": 3.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202710.png",
    "career_teams": [
      "CHI"
    ]
  },
  {
    "id": 201959,
    "name": "泰·吉布森",
    "en_name": "Taj Gibson",
    "team": "CHI",
    "pts": 9.5,
    "reb": 6.0,
    "ast": 1.0,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201959.png",
    "career_teams": [
      "CHI"
    ]
  },
  {
    "id": 2594,
    "name": "凱爾·科爾弗",
    "en_name": "Kyle Korver",
    "team": "CHI",
    "pts": 8.5,
    "reb": 2.5,
    "ast": 1.8,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/2594.png",
    "career_teams": [
      "CHI"
    ]
  },
  {
    "id": 201228,
    "name": "C.J. 沃森",
    "en_name": "C.J. Watson",
    "team": "CHI",
    "pts": 8.0,
    "reb": 2.0,
    "ast": 2.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201228.png",
    "career_teams": [
      "CHI"
    ]
  },
  {
    "id": 1888,
    "name": "理查德·漢密爾頓",
    "en_name": "Richard Hamilton",
    "team": "CHI",
    "pts": 10.5,
    "reb": 2.0,
    "ast": 2.4,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1888.png",
    "career_teams": [
      "CHI"
    ]
  },
  {
    "id": 2550,
    "name": "柯克·辛里奇",
    "en_name": "Kirk Hinrich",
    "team": "CHI",
    "pts": 8.0,
    "reb": 2.2,
    "ast": 3.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/2550.png",
    "career_teams": [
      "CHI"
    ]
  },
  {
    "id": 101126,
    "name": "內特·羅賓遜",
    "en_name": "Nate Robinson",
    "team": "CHI",
    "pts": 11.0,
    "reb": 2.0,
    "ast": 3.0,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/101126.png",
    "career_teams": [
      "CHI"
    ]
  },
  {
    "id": 201571,
    "name": "D.J. 奧古斯汀",
    "en_name": "D.J. Augustin",
    "team": "CHI",
    "pts": 11.5,
    "reb": 2.0,
    "ast": 4.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201571.png",
    "career_teams": [
      "CHI"
    ]
  },
  {
    "id": 202703,
    "name": "尼古拉·米羅蒂奇",
    "en_name": "Nikola Mirotic",
    "team": "CHI",
    "pts": 10.0,
    "reb": 5.2,
    "ast": 1.2,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202703.png",
    "career_teams": [
      "CHI"
    ]
  },
  {
    "id": 203926,
    "name": "道格·麥克德莫特",
    "en_name": "Doug McDermott",
    "team": "CHI",
    "pts": 8.5,
    "reb": 2.2,
    "ast": 0.7,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203926.png",
    "career_teams": [
      "CHI"
    ]
  },
  {
    "id": 203503,
    "name": "托尼·斯內爾",
    "en_name": "Tony Snell",
    "team": "CHI",
    "pts": 6.0,
    "reb": 2.2,
    "ast": 0.9,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203503.png",
    "career_teams": [
      "CHI"
    ]
  },
  {
    "id": 201166,
    "name": "亞倫·布魯克斯",
    "en_name": "Aaron Brooks",
    "team": "CHI",
    "pts": 9.5,
    "reb": 1.8,
    "ast": 3.0,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201166.png",
    "career_teams": [
      "CHI"
    ]
  },
  {
    "id": 202734,
    "name": "伊托萬·摩爾",
    "en_name": "E'Twaun Moore",
    "team": "CHI",
    "pts": 6.5,
    "reb": 1.8,
    "ast": 1.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202734.png",
    "career_teams": [
      "CHI"
    ]
  },
  {
    "id": 1626171,
    "name": "鮑比·波蒂斯",
    "en_name": "Bobby Portis",
    "team": "CHI",
    "pts": 7.0,
    "reb": 5.4,
    "ast": 0.8,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1626171.png",
    "career_teams": [
      "CHI"
    ]
  },
  {
    "id": 1718,
    "name": "保羅·皮爾斯",
    "en_name": "Paul Pierce",
    "team": "BOS",
    "pts": 16.0,
    "reb": 4.5,
    "ast": 3.2,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1718.png",
    "career_teams": [
      "BOS",
      "BKN",
      "WAS",
      "LAC"
    ]
  },
  {
    "id": 708,
    "name": "凱文·加內特",
    "en_name": "Kevin Garnett",
    "team": "BOS",
    "pts": 11.5,
    "reb": 7.5,
    "ast": 2.4,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/708.png",
    "career_teams": [
      "MIN",
      "BOS",
      "BKN"
    ]
  },
  {
    "id": 200765,
    "name": "拉簡·朗多",
    "en_name": "Rajon Rondo",
    "team": "BOS",
    "pts": 11.0,
    "reb": 4.8,
    "ast": 9.8,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/200765.png",
    "career_teams": [
      "BOS",
      "DAL",
      "SAC",
      "CHI",
      "NOP",
      "LAL",
      "ATL",
      "LAC",
      "LAL",
      "CLE"
    ]
  },
  {
    "id": 201175,
    "name": "格倫·戴維斯",
    "en_name": "Glen Davis",
    "team": "BOS",
    "pts": 10.0,
    "reb": 5.0,
    "ast": 1.0,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201175.png",
    "career_teams": [
      "BOS"
    ]
  },
  {
    "id": 201145,
    "name": "傑弗·格林",
    "en_name": "Jeff Green",
    "team": "BOS",
    "pts": 14.5,
    "reb": 4.5,
    "ast": 1.8,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201145.png",
    "career_teams": [
      "SEA/OKC",
      "BOS",
      "MEM",
      "LAC",
      "ORL",
      "CLE",
      "WAS",
      "UTA",
      "HOU",
      "BKN",
      "DEN"
    ]
  },
  {
    "id": 202340,
    "name": "艾弗里·布拉德利",
    "en_name": "Avery Bradley",
    "team": "BOS",
    "pts": 11.5,
    "reb": 2.8,
    "ast": 1.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202340.png",
    "career_teams": [
      "BOS"
    ]
  },
  {
    "id": 203096,
    "name": "賈里德·薩林格",
    "en_name": "Jared Sullinger",
    "team": "BOS",
    "pts": 10.5,
    "reb": 7.5,
    "ast": 1.8,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203096.png",
    "career_teams": [
      "BOS"
    ]
  },
  {
    "id": 202738,
    "name": "伊賽亞·托馬斯",
    "en_name": "Isaiah Thomas",
    "team": "BOS",
    "pts": 19.5,
    "reb": 2.2,
    "ast": 5.8,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202738.png",
    "career_teams": [
      "SAC",
      "PHX",
      "BOS",
      "CLE",
      "LAL",
      "DEN",
      "WAS",
      "NOP",
      "LAL",
      "DAL",
      "CHA",
      "PHX"
    ]
  },
  {
    "id": 2546,
    "name": "卡梅隆·安東尼",
    "en_name": "Carmelo Anthony",
    "team": "NYK",
    "pts": 25.2,
    "reb": 6.8,
    "ast": 3.1,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/2546.png",
    "career_teams": [
      "DEN",
      "NYK",
      "OKC",
      "HOU",
      "POR",
      "LAL"
    ]
  },
  {
    "id": 2405,
    "name": "阿瑪雷·斯塔德邁爾",
    "en_name": "Amar'e Stoudemire",
    "team": "NYK",
    "pts": 15.0,
    "reb": 6.5,
    "ast": 1.2,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/2405.png",
    "career_teams": [
      "NYK"
    ]
  },
  {
    "id": 2199,
    "name": "泰森·錢德勒",
    "en_name": "Tyson Chandler",
    "team": "NYK",
    "pts": 9.5,
    "reb": 10.0,
    "ast": 0.8,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/2199.png",
    "career_teams": [
      "NYK"
    ]
  },
  {
    "id": 201163,
    "name": "威爾森·錢德勒",
    "en_name": "Wilson Chandler",
    "team": "NYK",
    "pts": 13.5,
    "reb": 5.0,
    "ast": 1.8,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201163.png",
    "career_teams": [
      "NYK"
    ]
  },
  {
    "id": 101109,
    "name": "雷蒙德·費爾頓",
    "en_name": "Raymond Felton",
    "team": "NYK",
    "pts": 12.0,
    "reb": 3.0,
    "ast": 5.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/101109.png",
    "career_teams": [
      "NYK"
    ]
  },
  {
    "id": 200779,
    "name": "史蒂夫·諾瓦克",
    "en_name": "Steve Novak",
    "team": "NYK",
    "pts": 6.5,
    "reb": 2.0,
    "ast": 0.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/200779.png",
    "career_teams": [
      "NYK"
    ]
  },
  {
    "id": 467,
    "name": "傑森·基德",
    "en_name": "Jason Kidd",
    "team": "NYK",
    "pts": 7.0,
    "reb": 4.0,
    "ast": 5.0,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/467.png",
    "career_teams": [
      "NYK"
    ]
  },
  {
    "id": 1717,
    "name": "德克·諾維茨基",
    "en_name": "Dirk Nowitzki",
    "team": "DAL",
    "pts": 19.5,
    "reb": 6.2,
    "ast": 2.2,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1717.png",
    "career_teams": [
      "DAL"
    ]
  },
  {
    "id": 1891,
    "name": "傑森·特里",
    "en_name": "Jason Terry",
    "team": "DAL",
    "pts": 14.5,
    "reb": 2.0,
    "ast": 3.8,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1891.png",
    "career_teams": [
      "DAL"
    ]
  },
  {
    "id": 200826,
    "name": "J.J. 巴里亞",
    "en_name": "J.J. Barea",
    "team": "DAL",
    "pts": 9.0,
    "reb": 2.0,
    "ast": 3.8,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/200826.png",
    "career_teams": [
      "DAL"
    ]
  },
  {
    "id": 1890,
    "name": "肖恩·馬里昂",
    "en_name": "Shawn Marion",
    "team": "DAL",
    "pts": 11.5,
    "reb": 7.0,
    "ast": 1.8,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1890.png",
    "career_teams": [
      "DAL"
    ]
  },
  {
    "id": 2052,
    "name": "德肖恩·史蒂文森",
    "en_name": "DeShawn Stevenson",
    "team": "DAL",
    "pts": 5.5,
    "reb": 1.8,
    "ast": 1.2,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/2052.png",
    "career_teams": [
      "DAL"
    ]
  },
  {
    "id": 101145,
    "name": "蒙塔·埃利斯",
    "en_name": "Monta Ellis",
    "team": "DAL",
    "pts": 19.0,
    "reb": 3.0,
    "ast": 5.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/101145.png",
    "career_teams": [
      "DAL"
    ]
  },
  {
    "id": 202718,
    "name": "錢德勒·帕森斯",
    "en_name": "Chandler Parsons",
    "team": "DAL",
    "pts": 14.0,
    "reb": 4.8,
    "ast": 2.8,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202718.png",
    "career_teams": [
      "DAL"
    ]
  },
  {
    "id": 201976,
    "name": "派屈克·貝弗利",
    "en_name": "Patrick Beverley",
    "team": "HOU",
    "pts": 9.0,
    "reb": 3.5,
    "ast": 3.4,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201976.png",
    "career_teams": [
      "HOU",
      "LAC",
      "MIN",
      "LAL",
      "CHI",
      "PHI",
      "MIL"
    ]
  },
  {
    "id": 2772,
    "name": "特雷沃·阿里扎",
    "en_name": "Trevor Ariza",
    "team": "HOU",
    "pts": 12.5,
    "reb": 5.0,
    "ast": 2.2,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/2772.png",
    "career_teams": [
      "NYK",
      "ORL",
      "LAL",
      "HOU",
      "NOH",
      "WAS",
      "HOU",
      "PHX",
      "WAS",
      "SAC",
      "POR",
      "MIA",
      "LAL"
    ]
  },
  {
    "id": 202700,
    "name": "多納塔斯·莫泰尤納斯",
    "en_name": "Donatas Motiejunas",
    "team": "HOU",
    "pts": 8.0,
    "reb": 4.0,
    "ast": 1.2,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202700.png",
    "career_teams": [
      "HOU"
    ]
  },
  {
    "id": 203093,
    "name": "泰倫斯·瓊斯",
    "en_name": "Terrence Jones",
    "team": "HOU",
    "pts": 10.5,
    "reb": 5.8,
    "ast": 1.0,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203093.png",
    "career_teams": [
      "HOU"
    ]
  },
  {
    "id": 203991,
    "name": "克林特·卡佩拉",
    "en_name": "Clint Capela",
    "team": "HOU",
    "pts": 8.5,
    "reb": 7.0,
    "ast": 0.6,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203991.png",
    "career_teams": [
      "HOU"
    ]
  },
  {
    "id": 200746,
    "name": "拉馬庫斯·阿爾德里奇",
    "en_name": "LaMarcus Aldridge",
    "team": "POR",
    "pts": 22.0,
    "reb": 9.0,
    "ast": 2.0,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/200746.png",
    "career_teams": [
      "POR",
      "SAS",
      "BKN"
    ]
  },
  {
    "id": 203081,
    "name": "達米安·利拉德",
    "en_name": "Damian Lillard",
    "team": "POR",
    "pts": 21.4,
    "reb": 3.8,
    "ast": 6.3,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203081.png",
    "career_teams": [
      "POR",
      "MIL"
    ]
  },
  {
    "id": 201587,
    "name": "尼古拉斯·巴圖姆",
    "en_name": "Nicolas Batum",
    "team": "POR",
    "pts": 11.5,
    "reb": 5.2,
    "ast": 4.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201587.png",
    "career_teams": [
      "POR",
      "CHA",
      "LAC",
      "PHI"
    ]
  },
  {
    "id": 202083,
    "name": "馬修斯",
    "en_name": "Wesley Matthews",
    "team": "POR",
    "pts": 14.5,
    "reb": 3.0,
    "ast": 2.0,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202083.png",
    "career_teams": [
      "POR",
      "DAL",
      "MIL",
      "LAL"
    ]
  },
  {
    "id": 201577,
    "name": "羅賓·洛佩茲",
    "en_name": "Robin Lopez",
    "team": "POR",
    "pts": 10.0,
    "reb": 7.0,
    "ast": 0.8,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201577.png",
    "career_teams": [
      "POR"
    ]
  },
  {
    "id": 203468,
    "name": "C.J. 麥科勒姆",
    "en_name": "C.J. McCollum",
    "team": "POR",
    "pts": 15.5,
    "reb": 2.8,
    "ast": 2.8,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203468.png",
    "career_teams": [
      "POR",
      "NOP"
    ]
  },
  {
    "id": 203486,
    "name": "梅森·普拉姆利",
    "en_name": "Mason Plumlee",
    "team": "POR",
    "pts": 9.0,
    "reb": 7.0,
    "ast": 2.0,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203486.png",
    "career_teams": [
      "BKN",
      "POR",
      "DEN",
      "DET",
      "CHA",
      "LAC"
    ]
  },
  {
    "id": 202331,
    "name": "保羅·喬治",
    "en_name": "Paul George",
    "team": "IND",
    "pts": 18.1,
    "reb": 6.3,
    "ast": 3.2,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202331.png",
    "career_teams": [
      "IND",
      "OKC",
      "LAC",
      "PHI"
    ]
  },
  {
    "id": 201579,
    "name": "羅伊·希伯特",
    "en_name": "Roy Hibbert",
    "team": "IND",
    "pts": 11.0,
    "reb": 6.8,
    "ast": 1.2,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201579.png",
    "career_teams": [
      "IND",
      "CHA",
      "DEN"
    ]
  },
  {
    "id": 2561,
    "name": "大衛·韋斯特",
    "en_name": "David West",
    "team": "IND",
    "pts": 13.5,
    "reb": 6.5,
    "ast": 2.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/2561.png",
    "career_teams": [
      "NOH",
      "IND",
      "SAS",
      "GSW"
    ]
  },
  {
    "id": 201588,
    "name": "喬治·希爾",
    "en_name": "George Hill",
    "team": "IND",
    "pts": 11.8,
    "reb": 3.2,
    "ast": 3.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201588.png",
    "career_teams": [
      "IND"
    ]
  },
  {
    "id": 202362,
    "name": "蘭斯·史蒂芬森",
    "en_name": "Lance Stephenson",
    "team": "IND",
    "pts": 9.5,
    "reb": 5.0,
    "ast": 3.2,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202362.png",
    "career_teams": [
      "IND"
    ]
  },
  {
    "id": 101122,
    "name": "丹尼·格蘭傑",
    "en_name": "Danny Granger",
    "team": "IND",
    "pts": 18.5,
    "reb": 4.5,
    "ast": 1.8,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/101122.png",
    "career_teams": [
      "IND",
      "LAC"
    ]
  },
  {
    "id": 101133,
    "name": "伊安·馬辛米",
    "en_name": "Ian Mahinmi",
    "team": "IND",
    "pts": 6.0,
    "reb": 4.4,
    "ast": 0.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/101133.png",
    "career_teams": [
      "IND"
    ]
  },
  {
    "id": 201144,
    "name": "邁克·康利",
    "en_name": "Mike Conley",
    "team": "MEM",
    "pts": 14.5,
    "reb": 2.8,
    "ast": 5.8,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201144.png",
    "career_teams": [
      "MEM",
      "UTA",
      "MIN"
    ]
  },
  {
    "id": 201188,
    "name": "馬克·加索爾",
    "en_name": "Marc Gasol",
    "team": "MEM",
    "pts": 15.0,
    "reb": 8.0,
    "ast": 3.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201188.png",
    "career_teams": [
      "MEM",
      "TOR",
      "LAL",
      "ESP-GIRONA"
    ]
  },
  {
    "id": 2216,
    "name": "扎克·蘭多夫",
    "en_name": "Zach Randolph",
    "team": "MEM",
    "pts": 16.8,
    "reb": 10.2,
    "ast": 1.8,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/2216.png",
    "career_teams": [
      "MEM"
    ]
  },
  {
    "id": 2754,
    "name": "托尼·阿倫",
    "en_name": "Tony Allen",
    "team": "MEM",
    "pts": 8.5,
    "reb": 4.0,
    "ast": 1.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/2754.png",
    "career_teams": [
      "MEM"
    ]
  },
  {
    "id": 1713,
    "name": "文斯·卡特",
    "en_name": "Vince Carter",
    "team": "MEM",
    "pts": 8.5,
    "reb": 2.2,
    "ast": 1.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1713.png",
    "career_teams": [
      "MEM"
    ]
  },
  {
    "id": 201585,
    "name": "科斯塔·庫佛斯",
    "en_name": "Kosta Koufos",
    "team": "MEM",
    "pts": 6.5,
    "reb": 5.2,
    "ast": 0.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201585.png",
    "career_teams": [
      "MEM"
    ]
  },
  {
    "id": 200768,
    "name": "凱勒·洛瑞",
    "en_name": "Kyle Lowry",
    "team": "TOR",
    "pts": 16.0,
    "reb": 4.5,
    "ast": 6.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/200768.png",
    "career_teams": [
      "TOR"
    ]
  },
  {
    "id": 201942,
    "name": "德馬爾·德羅贊",
    "en_name": "DeMar DeRozan",
    "team": "TOR",
    "pts": 18.5,
    "reb": 4.0,
    "ast": 2.8,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201942.png",
    "career_teams": [
      "TOR"
    ]
  },
  {
    "id": 202685,
    "name": "約納斯·瓦蘭丘納斯",
    "en_name": "Jonas Valanciunas",
    "team": "TOR",
    "pts": 11.5,
    "reb": 8.0,
    "ast": 0.7,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202685.png",
    "career_teams": [
      "TOR"
    ]
  },
  {
    "id": 203082,
    "name": "泰倫斯·羅斯",
    "en_name": "Terrence Ross",
    "team": "TOR",
    "pts": 9.5,
    "reb": 2.5,
    "ast": 0.8,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203082.png",
    "career_teams": [
      "TOR"
    ]
  },
  {
    "id": 202335,
    "name": "派屈克·帕特森",
    "en_name": "Patrick Patterson",
    "team": "TOR",
    "pts": 8.0,
    "reb": 4.2,
    "ast": 1.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202335.png",
    "career_teams": [
      "TOR"
    ]
  },
  {
    "id": 202687,
    "name": "俾斯麥·比永博",
    "en_name": "Bismack Biyombo",
    "team": "TOR",
    "pts": 5.0,
    "reb": 6.5,
    "ast": 0.3,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202687.png",
    "career_teams": [
      "TOR"
    ]
  },
  {
    "id": 101161,
    "name": "阿米爾·強森",
    "en_name": "Amir Johnson",
    "team": "TOR",
    "pts": 9.0,
    "reb": 6.0,
    "ast": 1.2,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/101161.png",
    "career_teams": [
      "TOR"
    ]
  },
  {
    "id": 101181,
    "name": "何塞·卡爾德隆",
    "en_name": "Jose Calderon",
    "team": "TOR",
    "pts": 10.0,
    "reb": 2.5,
    "ast": 7.2,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/101181.png",
    "career_teams": [
      "TOR"
    ]
  },
  {
    "id": 201143,
    "name": "阿爾·霍福德",
    "en_name": "Al Horford",
    "team": "ATL",
    "pts": 15.8,
    "reb": 8.5,
    "ast": 3.0,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201143.png",
    "career_teams": [
      "ATL"
    ]
  },
  {
    "id": 200794,
    "name": "保羅·米爾薩普",
    "en_name": "Paul Millsap",
    "team": "ATL",
    "pts": 16.5,
    "reb": 8.0,
    "ast": 3.0,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/200794.png",
    "career_teams": [
      "ATL"
    ]
  },
  {
    "id": 201952,
    "name": "傑夫·蒂格",
    "en_name": "Jeff Teague",
    "team": "ATL",
    "pts": 14.0,
    "reb": 2.5,
    "ast": 5.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201952.png",
    "career_teams": [
      "ATL"
    ]
  },
  {
    "id": 201960,
    "name": "德馬雷·卡羅爾",
    "en_name": "DeMarre Carroll",
    "team": "ATL",
    "pts": 10.5,
    "reb": 4.5,
    "ast": 1.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201960.png",
    "career_teams": [
      "ATL"
    ]
  },
  {
    "id": 203471,
    "name": "丹尼斯·施羅德",
    "en_name": "Dennis Schroder",
    "team": "ATL",
    "pts": 10.0,
    "reb": 2.2,
    "ast": 4.4,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203471.png",
    "career_teams": [
      "ATL"
    ]
  },
  {
    "id": 203145,
    "name": "肯特·貝茲莫爾",
    "en_name": "Kent Bazemore",
    "team": "ATL",
    "pts": 8.8,
    "reb": 3.5,
    "ast": 1.8,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203145.png",
    "career_teams": [
      "ATL"
    ]
  },
  {
    "id": 201937,
    "name": "里奇·盧比奧",
    "en_name": "Ricky Rubio",
    "team": "MIN",
    "pts": 10.0,
    "reb": 4.2,
    "ast": 8.2,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201937.png",
    "career_teams": [
      "MIN"
    ]
  },
  {
    "id": 201593,
    "name": "尼古拉·佩科維奇",
    "en_name": "Nikola Pekovic",
    "team": "MIN",
    "pts": 12.5,
    "reb": 6.8,
    "ast": 0.7,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201593.png",
    "career_teams": [
      "MIN"
    ]
  },
  {
    "id": 2755,
    "name": "凱文·馬丁",
    "en_name": "Kevin Martin",
    "team": "MIN",
    "pts": 17.5,
    "reb": 2.5,
    "ast": 1.8,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/2755.png",
    "career_teams": [
      "MIN"
    ]
  },
  {
    "id": 203952,
    "name": "安德魯·威金斯",
    "en_name": "Andrew Wiggins",
    "team": "MIN",
    "pts": 18.5,
    "reb": 4.0,
    "ast": 2.0,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203952.png",
    "career_teams": [
      "MIN"
    ]
  },
  {
    "id": 203897,
    "name": "扎克·拉文",
    "en_name": "Zach LaVine",
    "team": "MIN",
    "pts": 12.0,
    "reb": 2.5,
    "ast": 2.2,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203897.png",
    "career_teams": [
      "MIN"
    ]
  },
  {
    "id": 1626157,
    "name": "卡爾-安東尼·唐斯",
    "en_name": "Karl-Anthony Towns",
    "team": "MIN",
    "pts": 18.3,
    "reb": 10.5,
    "ast": 2.0,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1626157.png",
    "career_teams": [
      "MIN"
    ]
  },
  {
    "id": 203476,
    "name": "格爾吉·吉昂",
    "en_name": "Gorgui Dieng",
    "team": "MIN",
    "pts": 8.5,
    "reb": 7.0,
    "ast": 1.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203476.png",
    "career_teams": [
      "MIN"
    ]
  },
  {
    "id": 202322,
    "name": "約hn·牆",
    "en_name": "John Wall",
    "team": "WAS",
    "pts": 18.0,
    "reb": 4.5,
    "ast": 9.0,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202322.png",
    "career_teams": [
      "WAS",
      "HOU",
      "LAC"
    ]
  },
  {
    "id": 203078,
    "name": "布拉德利·比爾",
    "en_name": "Bradley Beal",
    "team": "WAS",
    "pts": 16.5,
    "reb": 3.5,
    "ast": 3.0,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203078.png",
    "career_teams": [
      "WAS"
    ]
  },
  {
    "id": 2403,
    "name": "內內",
    "en_name": "Nene",
    "team": "WAS",
    "pts": 12.0,
    "reb": 5.8,
    "ast": 2.0,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/2403.png",
    "career_teams": [
      "DEN",
      "WAS",
      "HOU"
    ]
  },
  {
    "id": 101162,
    "name": "馬爾欽·戈塔特",
    "en_name": "Marcin Gortat",
    "team": "WAS",
    "pts": 12.5,
    "reb": 8.5,
    "ast": 1.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/101162.png",
    "career_teams": [
      "ORL",
      "PHX",
      "WAS",
      "LAC"
    ]
  },
  {
    "id": 203490,
    "name": "奧托·波特",
    "en_name": "Otto Porter Jr.",
    "team": "WAS",
    "pts": 9.5,
    "reb": 4.4,
    "ast": 1.2,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203490.png",
    "career_teams": [
      "WAS"
    ]
  },
  {
    "id": 201951,
    "name": "泰·勞森",
    "en_name": "Ty Lawson",
    "team": "DEN",
    "pts": 14.5,
    "reb": 2.8,
    "ast": 6.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201951.png",
    "career_teams": [
      "DEN"
    ]
  },
  {
    "id": 201568,
    "name": "達尼洛·加里納利",
    "en_name": "Danilo Gallinari",
    "team": "DEN",
    "pts": 15.0,
    "reb": 4.8,
    "ast": 2.0,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201568.png",
    "career_teams": [
      "DEN"
    ]
  },
  {
    "id": 202702,
    "name": "肯尼斯·法里德",
    "en_name": "Kenneth Faried",
    "team": "DEN",
    "pts": 11.5,
    "reb": 8.5,
    "ast": 1.0,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202702.png",
    "career_teams": [
      "DEN"
    ]
  },
  {
    "id": 201580,
    "name": "賈維爾·麥基",
    "en_name": "JaVale McGee",
    "team": "DEN",
    "pts": 7.8,
    "reb": 5.0,
    "ast": 0.4,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201580.png",
    "career_teams": [
      "WAS",
      "DEN",
      "PHI",
      "DAL",
      "GSW",
      "LAL",
      "CLE",
      "PHX",
      "SAC"
    ]
  },
  {
    "id": 201167,
    "name": "阿隆·阿法拉羅",
    "en_name": "Arron Afflalo",
    "team": "DEN",
    "pts": 13.5,
    "reb": 3.2,
    "ast": 2.0,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201167.png",
    "career_teams": [
      "DEN"
    ]
  },
  {
    "id": 201581,
    "name": "J.J. 希克森",
    "en_name": "J.J. Hickson",
    "team": "DEN",
    "pts": 9.5,
    "reb": 7.0,
    "ast": 1.0,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201581.png",
    "career_teams": [
      "DEN"
    ]
  },
  {
    "id": 201589,
    "name": "達雷爾·亞瑟",
    "en_name": "Darrell Arthur",
    "team": "DEN",
    "pts": 6.8,
    "reb": 3.0,
    "ast": 0.8,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201589.png",
    "career_teams": [
      "DEN"
    ]
  },
  {
    "id": 201147,
    "name": "科里·布魯爾",
    "en_name": "Corey Brewer",
    "team": "DEN",
    "pts": 10.0,
    "reb": 2.8,
    "ast": 1.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201147.png",
    "career_teams": [
      "DEN"
    ]
  },
  {
    "id": 202330,
    "name": "海沃德",
    "en_name": "Gordon Hayward",
    "team": "UTA",
    "pts": 16.0,
    "reb": 4.0,
    "ast": 3.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202330.png",
    "career_teams": [
      "UTA"
    ]
  },
  {
    "id": 202324,
    "name": "德里克·費佛斯",
    "en_name": "Derrick Favors",
    "team": "UTA",
    "pts": 12.5,
    "reb": 7.2,
    "ast": 1.2,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202324.png",
    "career_teams": [
      "UTA"
    ]
  },
  {
    "id": 203497,
    "name": "魯迪·戈貝爾",
    "en_name": "Rudy Gobert",
    "team": "UTA",
    "pts": 9.0,
    "reb": 10.0,
    "ast": 1.2,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203497.png",
    "career_teams": [
      "UTA"
    ]
  },
  {
    "id": 203918,
    "name": "羅德尼·胡德",
    "en_name": "Rodney Hood",
    "team": "UTA",
    "pts": 11.5,
    "reb": 2.8,
    "ast": 1.8,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203918.png",
    "career_teams": [
      "UTA"
    ]
  },
  {
    "id": 203504,
    "name": "特雷·伯克",
    "en_name": "Trey Burke",
    "team": "UTA",
    "pts": 11.0,
    "reb": 2.0,
    "ast": 3.8,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203504.png",
    "career_teams": [
      "UTA",
      "WAS",
      "NYK",
      "PHI",
      "DAL"
    ]
  },
  {
    "id": 202692,
    "name": "亞歷克·伯克斯",
    "en_name": "Alec Burks",
    "team": "UTA",
    "pts": 11.0,
    "reb": 2.8,
    "ast": 1.8,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202692.png",
    "career_teams": [
      "UTA"
    ]
  },
  {
    "id": 204060,
    "name": "喬·英格爾斯",
    "en_name": "Joe Ingles",
    "team": "UTA",
    "pts": 6.5,
    "reb": 2.5,
    "ast": 2.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/204060.png",
    "career_teams": [
      "UTA"
    ]
  },
  {
    "id": 202326,
    "name": "德馬庫斯·考辛斯",
    "en_name": "DeMarcus Cousins",
    "team": "SAC",
    "pts": 21.0,
    "reb": 11.0,
    "ast": 3.0,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202326.png",
    "career_teams": [
      "SAC",
      "NOP",
      "GSW",
      "HOU",
      "LAC",
      "MIL",
      "DEN",
      "PUR-GUAYNABO",
      "TPE-BEERLEOPARDS"
    ]
  },
  {
    "id": 200752,
    "name": "魯迪·蓋伊",
    "en_name": "Rudy Gay",
    "team": "SAC",
    "pts": 17.5,
    "reb": 6.0,
    "ast": 2.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/200752.png",
    "career_teams": [
      "SAC"
    ]
  },
  {
    "id": 203463,
    "name": "本·麥克萊默",
    "en_name": "Ben McLemore",
    "team": "SAC",
    "pts": 9.0,
    "reb": 2.5,
    "ast": 1.2,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203463.png",
    "career_teams": [
      "SAC"
    ]
  },
  {
    "id": 201977,
    "name": "馬庫斯·索頓",
    "en_name": "Marcus Thornton",
    "team": "SAC",
    "pts": 13.0,
    "reb": 2.8,
    "ast": 1.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201977.png",
    "career_teams": [
      "SAC"
    ]
  },
  {
    "id": 201574,
    "name": "傑森·湯普森",
    "en_name": "Jason Thompson",
    "team": "SAC",
    "pts": 9.0,
    "reb": 7.5,
    "ast": 1.0,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201574.png",
    "career_teams": [
      "SAC"
    ]
  },
  {
    "id": 201171,
    "name": "卡爾·蘭德里",
    "en_name": "Carl Landry",
    "team": "SAC",
    "pts": 10.8,
    "reb": 4.8,
    "ast": 0.7,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201171.png",
    "career_teams": [
      "SAC"
    ]
  },
  {
    "id": 203492,
    "name": "雷·麥卡倫",
    "en_name": "Ray McCallum",
    "team": "SAC",
    "pts": 6.0,
    "reb": 2.0,
    "ast": 2.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203492.png",
    "career_teams": [
      "SAC"
    ]
  },
  {
    "id": 203112,
    "name": "昆西·埃希",
    "en_name": "Quincy Acy",
    "team": "SAC",
    "pts": 5.2,
    "reb": 3.5,
    "ast": 0.6,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203112.png",
    "career_teams": [
      "SAC"
    ]
  },
  {
    "id": 201956,
    "name": "歐米·卡斯比",
    "en_name": "Omri Casspi",
    "team": "SAC",
    "pts": 8.8,
    "reb": 4.2,
    "ast": 1.2,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201956.png",
    "career_teams": [
      "SAC"
    ]
  },
  {
    "id": 202328,
    "name": "格雷格·門羅",
    "en_name": "Greg Monroe",
    "team": "DET",
    "pts": 14.5,
    "reb": 9.0,
    "ast": 2.2,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202328.png",
    "career_teams": [
      "DET"
    ]
  },
  {
    "id": 203083,
    "name": "安德烈·德拉蒙德",
    "en_name": "Andre Drummond",
    "team": "DET",
    "pts": 13.5,
    "reb": 12.8,
    "ast": 0.6,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203083.png",
    "career_teams": [
      "DET"
    ]
  },
  {
    "id": 2746,
    "name": "約什·史密斯",
    "en_name": "Josh Smith",
    "team": "DET",
    "pts": 13.5,
    "reb": 6.5,
    "ast": 3.0,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/2746.png",
    "career_teams": [
      "DET"
    ]
  },
  {
    "id": 201943,
    "name": "布蘭登·詹寧斯",
    "en_name": "Brandon Jennings",
    "team": "DET",
    "pts": 15.5,
    "reb": 3.0,
    "ast": 6.0,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201943.png",
    "career_teams": [
      "DET"
    ]
  },
  {
    "id": 203484,
    "name": "肯塔維奧斯·卡德維爾-波普",
    "en_name": "Kentavious Caldwell-Pope",
    "team": "DET",
    "pts": 11.5,
    "reb": 3.0,
    "ast": 1.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203484.png",
    "career_teams": [
      "DET"
    ]
  },
  {
    "id": 202713,
    "name": "凱爾·辛格勒",
    "en_name": "Kyle Singler",
    "team": "DET",
    "pts": 8.0,
    "reb": 3.0,
    "ast": 1.0,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202713.png",
    "career_teams": [
      "DET"
    ]
  },
  {
    "id": 201973,
    "name": "約納斯·傑雷布科",
    "en_name": "Jonas Jerebko",
    "team": "DET",
    "pts": 7.0,
    "reb": 4.0,
    "ast": 1.0,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201973.png",
    "career_teams": [
      "DET"
    ]
  },
  {
    "id": 201155,
    "name": "羅德尼·斯塔基",
    "en_name": "Rodney Stuckey",
    "team": "DET",
    "pts": 12.5,
    "reb": 3.0,
    "ast": 3.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201155.png",
    "career_teams": [
      "DET"
    ]
  },
  {
    "id": 202688,
    "name": "布蘭登·奈特",
    "en_name": "Brandon Knight",
    "team": "MIL",
    "pts": 15.0,
    "reb": 3.2,
    "ast": 4.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202688.png",
    "career_teams": [
      "MIL"
    ]
  },
  {
    "id": 202336,
    "name": "拉里·桑德斯",
    "en_name": "Larry Sanders",
    "team": "MIL",
    "pts": 7.5,
    "reb": 7.0,
    "ast": 0.8,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202336.png",
    "career_teams": [
      "MIL"
    ]
  },
  {
    "id": 203114,
    "name": "克里斯·米德爾頓",
    "en_name": "Khris Middleton",
    "team": "MIL",
    "pts": 14.5,
    "reb": 3.8,
    "ast": 3.0,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203114.png",
    "career_teams": [
      "MIL"
    ]
  },
  {
    "id": 203953,
    "name": "賈巴里·帕克",
    "en_name": "Jabari Parker",
    "team": "MIL",
    "pts": 11.8,
    "reb": 5.0,
    "ast": 1.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203953.png",
    "career_teams": [
      "MIL"
    ]
  },
  {
    "id": 101141,
    "name": "艾森·伊利亞索瓦",
    "en_name": "Ersan Ilyasova",
    "team": "MIL",
    "pts": 11.5,
    "reb": 6.0,
    "ast": 1.0,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/101141.png",
    "career_teams": [
      "MIL"
    ]
  },
  {
    "id": 2585,
    "name": "扎扎·帕楚里亞",
    "en_name": "Zaza Pachulia",
    "team": "MIL",
    "pts": 7.2,
    "reb": 6.0,
    "ast": 1.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/2585.png",
    "career_teams": [
      "MIL"
    ]
  },
  {
    "id": 203089,
    "name": "約hn·亨森",
    "en_name": "John Henson",
    "team": "MIL",
    "pts": 8.0,
    "reb": 5.5,
    "ast": 1.0,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203089.png",
    "career_teams": [
      "MIL"
    ]
  },
  {
    "id": 201564,
    "name": "O.J. 梅奧",
    "en_name": "O.J. Mayo",
    "team": "MIL",
    "pts": 11.0,
    "reb": 2.5,
    "ast": 2.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201564.png",
    "career_teams": [
      "MEM",
      "DAL",
      "MIL",
      "TPE-DACINTIGERS",
      "TPE-FUBONBRAVES",
      "CBA-LIAONING",
      "RUS-UNICS",
      "EGY-ZAMALEK"
    ]
  },
  {
    "id": 201573,
    "name": "傑里米·貝勒斯",
    "en_name": "Jerryd Bayless",
    "team": "MIL",
    "pts": 8.5,
    "reb": 2.2,
    "ast": 3.0,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201573.png",
    "career_teams": [
      "MIL"
    ]
  },
  {
    "id": 202339,
    "name": "埃里克·布萊索",
    "en_name": "Eric Bledsoe",
    "team": "PHX",
    "pts": 16.5,
    "reb": 4.0,
    "ast": 5.8,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202339.png",
    "career_teams": [
      "PHX"
    ]
  },
  {
    "id": 200782,
    "name": "P.J. 塔克",
    "en_name": "P.J. Tucker",
    "team": "PHX",
    "pts": 8.0,
    "reb": 5.8,
    "ast": 1.6,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/200782.png",
    "career_teams": [
      "PHX"
    ]
  },
  {
    "id": 202693,
    "name": "馬基夫·莫里斯",
    "en_name": "Markieff Morris",
    "team": "PHX",
    "pts": 11.5,
    "reb": 5.4,
    "ast": 1.8,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202693.png",
    "career_teams": [
      "PHX"
    ]
  },
  {
    "id": 202694,
    "name": "馬庫斯·莫里斯",
    "en_name": "Marcus Morris",
    "team": "PHX",
    "pts": 10.0,
    "reb": 4.0,
    "ast": 1.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202694.png",
    "career_teams": [
      "PHX"
    ]
  },
  {
    "id": 101112,
    "name": "錢寧·弗萊",
    "en_name": "Channing Frye",
    "team": "PHX",
    "pts": 9.5,
    "reb": 4.8,
    "ast": 1.2,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/101112.png",
    "career_teams": [
      "PHX"
    ]
  },
  {
    "id": 203101,
    "name": "邁爾斯·普拉姆利",
    "en_name": "Miles Plumlee",
    "team": "PHX",
    "pts": 7.5,
    "reb": 6.0,
    "ast": 0.7,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203101.png",
    "career_teams": [
      "PHX"
    ]
  },
  {
    "id": 101123,
    "name": "傑拉德·格林",
    "en_name": "Gerald Green",
    "team": "PHX",
    "pts": 10.5,
    "reb": 2.5,
    "ast": 1.0,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/101123.png",
    "career_teams": [
      "PHX"
    ]
  },
  {
    "id": 203458,
    "name": "亞歷克斯·萊恩",
    "en_name": "Alex Len",
    "team": "PHX",
    "pts": 7.0,
    "reb": 6.0,
    "ast": 0.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203458.png",
    "career_teams": [
      "PHX"
    ]
  },
  {
    "id": 1626164,
    "name": "德文·布克",
    "en_name": "Devin Booker",
    "team": "PHX",
    "pts": 13.8,
    "reb": 2.5,
    "ast": 2.6,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1626164.png",
    "career_teams": [
      "PHX"
    ]
  },
  {
    "id": 2730,
    "name": "德懷特·霍華德",
    "en_name": "Dwight Howard",
    "team": "ORL",
    "pts": 17.5,
    "reb": 12.7,
    "ast": 1.8,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/2730.png",
    "career_teams": [
      "ORL",
      "LAL",
      "HOU",
      "ATL",
      "CHA",
      "WAS",
      "LAL",
      "PHI",
      "LAL",
      "TPE-LEOPARDS"
    ]
  },
  {
    "id": 2749,
    "name": "賈米爾·尼爾森",
    "en_name": "Jameer Nelson",
    "team": "ORL",
    "pts": 12.5,
    "reb": 3.0,
    "ast": 5.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/2749.png",
    "career_teams": [
      "ORL"
    ]
  },
  {
    "id": 1740,
    "name": "拉沙德·劉易斯",
    "en_name": "Rashard Lewis",
    "team": "ORL",
    "pts": 13.0,
    "reb": 5.0,
    "ast": 1.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1740.png",
    "career_teams": [
      "ORL"
    ]
  },
  {
    "id": 202696,
    "name": "尼古拉·武切維奇",
    "en_name": "Nikola Vucevic",
    "team": "ORL",
    "pts": 16.0,
    "reb": 10.4,
    "ast": 2.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202696.png",
    "career_teams": [
      "ORL"
    ]
  },
  {
    "id": 203506,
    "name": "維克托·奧拉迪波",
    "en_name": "Victor Oladipo",
    "team": "ORL",
    "pts": 16.0,
    "reb": 4.2,
    "ast": 4.0,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203506.png",
    "career_teams": [
      "ORL"
    ]
  },
  {
    "id": 203901,
    "name": "埃爾弗里德·佩頓",
    "en_name": "Elfrid Payton",
    "team": "ORL",
    "pts": 9.0,
    "reb": 4.2,
    "ast": 6.0,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203901.png",
    "career_teams": [
      "ORL"
    ]
  },
  {
    "id": 203095,
    "name": "埃文·富尼耶",
    "en_name": "Evan Fournier",
    "team": "ORL",
    "pts": 12.0,
    "reb": 2.8,
    "ast": 2.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203095.png",
    "career_teams": [
      "ORL"
    ]
  },
  {
    "id": 203932,
    "name": "阿隆·戈登",
    "en_name": "Aaron Gordon",
    "team": "ORL",
    "pts": 9.5,
    "reb": 5.5,
    "ast": 1.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203932.png",
    "career_teams": [
      "ORL"
    ]
  },
  {
    "id": 203124,
    "name": "凱爾·奧奎因",
    "en_name": "Kyle O'Quinn",
    "team": "ORL",
    "pts": 5.8,
    "reb": 4.5,
    "ast": 1.2,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203124.png",
    "career_teams": [
      "ORL"
    ]
  },
  {
    "id": 203090,
    "name": "莫里斯·哈克萊斯",
    "en_name": "Maurice Harkless",
    "team": "ORL",
    "pts": 7.0,
    "reb": 3.5,
    "ast": 0.8,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203090.png",
    "career_teams": [
      "ORL"
    ]
  },
  {
    "id": 203094,
    "name": "安德魯·尼科爾森",
    "en_name": "Andrew Nicholson",
    "team": "ORL",
    "pts": 6.0,
    "reb": 3.2,
    "ast": 0.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203094.png",
    "career_teams": [
      "ORL"
    ]
  },
  {
    "id": 101131,
    "name": "傑森·馬克希爾",
    "en_name": "Jason Maxiell",
    "team": "ORL",
    "pts": 5.0,
    "reb": 4.2,
    "ast": 0.3,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/101131.png",
    "career_teams": [
      "ORL"
    ]
  },
  {
    "id": 2584,
    "name": "威利·格林",
    "en_name": "Willie Green",
    "team": "ORL",
    "pts": 6.8,
    "reb": 1.5,
    "ast": 1.0,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/2584.png",
    "career_teams": [
      "ORL"
    ]
  },
  {
    "id": 2744,
    "name": "艾爾·傑佛森",
    "en_name": "Al Jefferson",
    "team": "CHA",
    "pts": 17.5,
    "reb": 9.0,
    "ast": 1.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/2744.png",
    "career_teams": [
      "CHA"
    ]
  },
  {
    "id": 201945,
    "name": "傑拉德·亨德森",
    "en_name": "Gerald Henderson",
    "team": "CHA",
    "pts": 12.5,
    "reb": 3.2,
    "ast": 2.0,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201945.png",
    "career_teams": [
      "CHA"
    ]
  },
  {
    "id": 203077,
    "name": "米高·基特-吉爾克里斯特",
    "en_name": "Michael Kidd-Gilchrist",
    "team": "CHA",
    "pts": 9.0,
    "reb": 5.8,
    "ast": 1.2,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203077.png",
    "career_teams": [
      "CHA"
    ]
  },
  {
    "id": 101107,
    "name": "馬文·威廉姆斯",
    "en_name": "Marvin Williams",
    "team": "CHA",
    "pts": 9.5,
    "reb": 5.0,
    "ast": 1.2,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/101107.png",
    "career_teams": [
      "CHA"
    ]
  },
  {
    "id": 203469,
    "name": "科迪·澤勒",
    "en_name": "Cody Zeller",
    "team": "CHA",
    "pts": 8.5,
    "reb": 5.4,
    "ast": 1.2,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203469.png",
    "career_teams": [
      "CHA"
    ]
  },
  {
    "id": 1626163,
    "name": "法蘭克·卡明斯基",
    "en_name": "Frank Kaminsky",
    "team": "CHA",
    "pts": 9.0,
    "reb": 4.0,
    "ast": 1.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1626163.png",
    "career_teams": [
      "CHA"
    ]
  },
  {
    "id": 201150,
    "name": "斯賓塞·霍伊斯",
    "en_name": "Spencer Hawes",
    "team": "CHA",
    "pts": 8.5,
    "reb": 5.2,
    "ast": 1.8,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201150.png",
    "career_teams": [
      "CHA"
    ]
  },
  {
    "id": 203087,
    "name": "傑里米·蘭姆",
    "en_name": "Jeremy Lamb",
    "team": "CHA",
    "pts": 10.0,
    "reb": 3.5,
    "ast": 1.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203087.png",
    "career_teams": [
      "CHA"
    ]
  },
  {
    "id": 202390,
    "name": "蓋瑞·尼爾",
    "en_name": "Gary Neal",
    "team": "CHA",
    "pts": 10.0,
    "reb": 2.0,
    "ast": 1.8,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202390.png",
    "career_teams": [
      "SAS",
      "CHA",
      "WAS"
    ]
  },
  {
    "id": 201177,
    "name": "喬什·麥克羅伯茨",
    "en_name": "Josh McRoberts",
    "team": "CHA",
    "pts": 8.5,
    "reb": 4.8,
    "ast": 4.0,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201177.png",
    "career_teams": [
      "CHA"
    ]
  },
  {
    "id": 201196,
    "name": "拉蒙·塞申斯",
    "en_name": "Ramon Sessions",
    "team": "CHA",
    "pts": 10.5,
    "reb": 2.5,
    "ast": 4.0,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201196.png",
    "career_teams": [
      "CHA"
    ]
  },
  {
    "id": 2732,
    "name": "本·戈登",
    "en_name": "Ben Gordon",
    "team": "CHA",
    "pts": 11.0,
    "reb": 2.0,
    "ast": 1.8,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/2732.png",
    "career_teams": [
      "CHA"
    ]
  },
  {
    "id": 201957,
    "name": "拜倫·穆倫斯",
    "en_name": "Byron Mullens",
    "team": "CHA",
    "pts": 9.0,
    "reb": 5.0,
    "ast": 1.0,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201957.png",
    "career_teams": [
      "CHA"
    ]
  },
  {
    "id": 200748,
    "name": "泰魯斯·托馬斯",
    "en_name": "Tyrus Thomas",
    "team": "CHA",
    "pts": 7.5,
    "reb": 4.5,
    "ast": 0.8,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/200748.png",
    "career_teams": [
      "CHA"
    ]
  },
  {
    "id": 202323,
    "name": "橫文·特納",
    "en_name": "Evan Turner",
    "team": "PHI",
    "pts": 11.5,
    "reb": 4.8,
    "ast": 3.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202323.png",
    "career_teams": [
      "PHI"
    ]
  },
  {
    "id": 1882,
    "name": "埃爾頓·布蘭德",
    "en_name": "Elton Brand",
    "team": "PHI",
    "pts": 9.0,
    "reb": 6.0,
    "ast": 1.2,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1882.png",
    "career_teams": [
      "PHI"
    ]
  },
  {
    "id": 201152,
    "name": "賽迪斯·楊",
    "en_name": "Thaddeus Young",
    "team": "PHI",
    "pts": 13.8,
    "reb": 5.5,
    "ast": 1.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201152.png",
    "career_teams": [
      "PHI",
      "MIN",
      "BKN",
      "SAS"
    ]
  },
  {
    "id": 203487,
    "name": "麥可·卡特-威廉斯",
    "en_name": "Michael Carter-Williams",
    "team": "PHI",
    "pts": 14.5,
    "reb": 5.5,
    "ast": 6.0,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203487.png",
    "career_teams": [
      "PHI"
    ]
  },
  {
    "id": 203457,
    "name": "內倫斯·諾艾爾",
    "en_name": "Nerlens Noel",
    "team": "PHI",
    "pts": 10.0,
    "reb": 8.0,
    "ast": 1.8,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203457.png",
    "career_teams": [
      "PHI"
    ]
  },
  {
    "id": 203496,
    "name": "羅伯特·考文頓",
    "en_name": "Robert Covington",
    "team": "PHI",
    "pts": 12.8,
    "reb": 5.5,
    "ast": 1.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203496.png",
    "career_teams": [
      "PHI"
    ]
  },
  {
    "id": 203924,
    "name": "傑拉米·格蘭特",
    "en_name": "Jerami Grant",
    "team": "PHI",
    "pts": 9.5,
    "reb": 4.0,
    "ast": 1.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203924.png",
    "career_teams": [
      "PHI"
    ]
  },
  {
    "id": 1626143,
    "name": "賈利爾·奧卡福",
    "en_name": "Jahlil Okafor",
    "team": "PHI",
    "pts": 14.5,
    "reb": 6.0,
    "ast": 1.0,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1626143.png",
    "career_teams": [
      "PHI"
    ]
  },
  {
    "id": 202397,
    "name": "伊斯·史密斯",
    "en_name": "Ish Smith",
    "team": "PHI",
    "pts": 9.0,
    "reb": 2.5,
    "ast": 5.2,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202397.png",
    "career_teams": [
      "PHI"
    ]
  },
  {
    "id": 201975,
    "name": "喬迪·米克斯",
    "en_name": "Jodie Meeks",
    "team": "PHI",
    "pts": 10.5,
    "reb": 2.2,
    "ast": 1.2,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201975.png",
    "career_teams": [
      "PHI"
    ]
  },
  {
    "id": 101150,
    "name": "路·威廉姆斯",
    "en_name": "Lou Williams",
    "team": "PHI",
    "pts": 13.0,
    "reb": 2.0,
    "ast": 3.2,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/101150.png",
    "career_teams": [
      "PHI"
    ]
  },
  {
    "id": 203102,
    "name": "阿內特·穆特里",
    "en_name": "Arnett Moultrie",
    "team": "PHI",
    "pts": 5.5,
    "reb": 3.0,
    "ast": 0.2,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203102.png",
    "career_teams": [
      "PHI"
    ]
  },
  {
    "id": 202730,
    "name": "拉沃伊·阿倫",
    "en_name": "Lavoy Allen",
    "team": "PHI",
    "pts": 5.5,
    "reb": 4.8,
    "ast": 1.0,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202730.png",
    "career_teams": [
      "PHI"
    ]
  },
  {
    "id": 2767,
    "name": "皇家·埃維",
    "en_name": "Royal Ivey",
    "team": "PHI",
    "pts": 4.0,
    "reb": 1.2,
    "ast": 1.0,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/2767.png",
    "career_teams": [
      "PHI"
    ]
  },
  {
    "id": 1905,
    "name": "安德烈·基里連科",
    "en_name": "Andrei Kirilenko",
    "team": "BKN",
    "pts": 7.5,
    "reb": 3.8,
    "ast": 1.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1905.png",
    "career_teams": [
      "BKN"
    ]
  },
  {
    "id": 101187,
    "name": "阿蘭·安德森",
    "en_name": "Alan Anderson",
    "team": "BKN",
    "pts": 8.0,
    "reb": 2.2,
    "ast": 1.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/101187.png",
    "career_teams": [
      "BKN"
    ]
  },
  {
    "id": 101154,
    "name": "安德雷·布拉奇",
    "en_name": "Andray Blatche",
    "team": "BKN",
    "pts": 11.5,
    "reb": 5.8,
    "ast": 1.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/101154.png",
    "career_teams": [
      "BKN"
    ]
  },
  {
    "id": 203141,
    "name": "米爾扎·泰勒托維奇",
    "en_name": "Mirza Teletovic",
    "team": "BKN",
    "pts": 8.5,
    "reb": 3.2,
    "ast": 0.8,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203141.png",
    "career_teams": [
      "BKN"
    ]
  },
  {
    "id": 203115,
    "name": "威爾·巴頓",
    "en_name": "Will Barton",
    "team": "DEN",
    "pts": 11.5,
    "reb": 4.0,
    "ast": 2.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203115.png",
    "career_teams": [
      "DEN"
    ]
  },
  {
    "id": 202332,
    "name": "科爾·阿爾德里奇",
    "en_name": "Cole Aldrich",
    "team": "MIN",
    "pts": 5.0,
    "reb": 4.3,
    "ast": 0.7,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202332.png",
    "career_teams": [
      "MIN"
    ]
  },
  {
    "id": 201936,
    "name": "泰瑞克·埃文斯",
    "en_name": "Tyreke Evans",
    "team": "NOP",
    "pts": 15.5,
    "reb": 4.5,
    "ast": 4.8,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201936.png",
    "career_teams": [
      "NOP"
    ]
  },
  {
    "id": 203382,
    "name": "阿隆·貝恩斯",
    "en_name": "Aron Baynes",
    "team": "DET",
    "pts": 6.0,
    "reb": 4.6,
    "ast": 0.8,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203382.png",
    "career_teams": [
      "DET"
    ]
  },
  {
    "id": 203939,
    "name": "德懷特·鮑威爾",
    "en_name": "Dwight Powell",
    "team": "DAL",
    "pts": 7.6,
    "reb": 4.5,
    "ast": 1.0,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203939.png",
    "career_teams": [
      "DAL"
    ]
  },
  {
    "id": 203552,
    "name": "賽斯·庫里",
    "en_name": "Seth Curry",
    "team": "SAC",
    "pts": 11.0,
    "reb": 2.1,
    "ast": 2.0,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203552.png",
    "career_teams": [
      "SAC"
    ]
  },
  {
    "id": 203200,
    "name": "賈斯汀·霍樂迪",
    "en_name": "Justin Holiday",
    "team": "ATL",
    "pts": 8.5,
    "reb": 2.8,
    "ast": 1.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203200.png",
    "career_teams": [
      "ATL"
    ]
  },
  {
    "id": 203210,
    "name": "傑米查·格林",
    "en_name": "JaMychal Green",
    "team": "DEN",
    "pts": 7.8,
    "reb": 5.6,
    "ast": 0.9,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203210.png",
    "career_teams": [
      "DEN"
    ]
  },
  {
    "id": 203473,
    "name": "戴達蒙",
    "en_name": "Dewayne Dedmon",
    "team": "SAS",
    "pts": 5.8,
    "reb": 6.0,
    "ast": 0.3,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203473.png",
    "career_teams": [
      "SAS"
    ]
  },
  {
    "id": 203937,
    "name": "凱爾·安德森",
    "en_name": "Kyle Anderson",
    "team": "SAS",
    "pts": 6.8,
    "reb": 3.8,
    "ast": 2.3,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203937.png",
    "career_teams": [
      "SAS"
    ]
  },
  {
    "id": 202711,
    "name": "博揚·博格達諾維奇",
    "en_name": "Bojan Bogdanovic",
    "team": "BKN",
    "pts": 15.0,
    "reb": 3.6,
    "ast": 1.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202711.png",
    "career_teams": [
      "BKN"
    ]
  },
  {
    "id": 203501,
    "name": "小蒂姆·哈達威",
    "en_name": "Tim Hardaway Jr.",
    "team": "ATL",
    "pts": 14.0,
    "reb": 2.8,
    "ast": 1.8,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203501.png",
    "career_teams": [
      "ATL"
    ]
  },
  {
    "id": 203994,
    "name": "尤素夫·努爾基奇",
    "en_name": "Jusuf Nurkic",
    "team": "DEN",
    "pts": 12.0,
    "reb": 8.5,
    "ast": 2.2,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203994.png",
    "career_teams": [
      "DEN"
    ]
  },
  {
    "id": 203933,
    "name": "TJ·沃倫",
    "en_name": "T.J. Warren",
    "team": "PHX",
    "pts": 14.5,
    "reb": 4.0,
    "ast": 1.2,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203933.png",
    "career_teams": [
      "PHX"
    ]
  },
  {
    "id": 204020,
    "name": "泰勒·約翰遜",
    "en_name": "Tyler Johnson",
    "team": "MIA",
    "pts": 9.8,
    "reb": 3.0,
    "ast": 2.3,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/204020.png",
    "career_teams": [
      "MIA"
    ]
  },
  {
    "id": 203915,
    "name": "斯賓塞·丁威迪",
    "en_name": "Spencer Dinwiddie",
    "team": "DET",
    "pts": 13.8,
    "reb": 3.0,
    "ast": 5.3,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203915.png",
    "career_teams": [
      "DET"
    ]
  },
  {
    "id": 203914,
    "name": "加里·哈里斯",
    "en_name": "Gary Harris",
    "team": "DEN",
    "pts": 11.5,
    "reb": 2.5,
    "ast": 2.0,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203914.png",
    "career_teams": [
      "DEN"
    ]
  },
  {
    "id": 203935,
    "name": "馬庫斯·斯馬特",
    "en_name": "Marcus Smart",
    "team": "BOS",
    "pts": 10.6,
    "reb": 3.5,
    "ast": 4.6,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203935.png",
    "career_teams": [
      "BOS"
    ]
  },
  {
    "id": 2222,
    "name": "傑拉德·華萊士",
    "en_name": "Gerald Wallace",
    "team": "BOS",
    "pts": 8.5,
    "reb": 5.0,
    "ast": 1.8,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/2222.png",
    "career_teams": [
      "BOS"
    ]
  },
  {
    "id": 200745,
    "name": "安德里亞·巴尼亞尼",
    "en_name": "Andrea Bargnani",
    "team": "TOR",
    "pts": 15.0,
    "reb": 4.8,
    "ast": 1.2,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/200745.png",
    "career_teams": [
      "TOR"
    ]
  },
  {
    "id": 200750,
    "name": "布蘭登·羅伊",
    "en_name": "Brandon Roy",
    "team": "POR",
    "pts": 18.5,
    "reb": 4.0,
    "ast": 4.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/200750.png",
    "career_teams": [
      "POR"
    ]
  },
  {
    "id": 201563,
    "name": "麥可·比斯利",
    "en_name": "Michael Beasley",
    "team": "MIN",
    "pts": 12.5,
    "reb": 4.5,
    "ast": 1.2,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201563.png",
    "career_teams": [
      "MIN"
    ]
  },
  {
    "id": 2030,
    "name": "肯揚·馬丁",
    "en_name": "Kenyon Martin",
    "team": "NYK",
    "pts": 9.8,
    "reb": 5.5,
    "ast": 1.3,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/2030.png",
    "career_teams": [
      "NYK"
    ]
  },
  {
    "id": 948,
    "name": "馬庫斯·坎比",
    "en_name": "Marcus Camby",
    "team": "NYK",
    "pts": 5.2,
    "reb": 8.5,
    "ast": 1.2,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/948.png",
    "career_teams": [
      "NYK"
    ]
  },
  {
    "id": 1884,
    "name": "巴朗·戴維斯",
    "en_name": "Baron Davis",
    "team": "NYK",
    "pts": 10.5,
    "reb": 2.5,
    "ast": 5.2,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1884.png",
    "career_teams": [
      "NYK"
    ]
  },
  {
    "id": 2449,
    "name": "路易斯·斯科拉",
    "en_name": "Luis Scola",
    "team": "IND",
    "pts": 12.0,
    "reb": 6.5,
    "ast": 1.8,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/2449.png",
    "career_teams": [
      "IND"
    ]
  },
  {
    "id": 201946,
    "name": "泰勒·漢斯布魯",
    "en_name": "Tyler Hansbrough",
    "team": "IND",
    "pts": 8.8,
    "reb": 4.5,
    "ast": 0.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201946.png",
    "career_teams": [
      "IND"
    ]
  },
  {
    "id": 203142,
    "name": "克里斯·科普蘭",
    "en_name": "Chris Copeland",
    "team": "IND",
    "pts": 6.8,
    "reb": 2.2,
    "ast": 0.8,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203142.png",
    "career_teams": [
      "IND"
    ]
  },
  {
    "id": 201584,
    "name": "考特尼·李",
    "en_name": "Courtney Lee",
    "team": "BOS",
    "pts": 9.6,
    "reb": 2.4,
    "ast": 1.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201584.png",
    "career_teams": [
      "BOS"
    ]
  },
  {
    "id": 203507,
    "name": "揚尼斯·阿德托昆博",
    "en_name": "Giannis Antetokounmpo",
    "team": "MIL",
    "pts": 12.5,
    "reb": 6.2,
    "ast": 2.5,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203507.png",
    "career_teams": [
      "MIL"
    ]
  },
  {
    "id": 202689,
    "name": "肯巴·沃克",
    "en_name": "Kemba Walker",
    "team": "CHA",
    "pts": 17.5,
    "reb": 3.8,
    "ast": 5.2,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202689.png",
    "career_teams": [
      "CHA",
      "BOS",
      "NYK",
      "DAL",
      "FRA-MONACO"
    ]
  },
  {
    "id": 201609,
    "name": "戈蘭·德拉季奇",
    "en_name": "Goran Dragic",
    "team": "PHX",
    "pts": 13.5,
    "reb": 2.8,
    "ast": 4.6,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201609.png",
    "career_teams": [
      "PHX"
    ]
  },
  {
    "id": 201572,
    "name": "布魯克·洛佩茲",
    "en_name": "Brook Lopez",
    "team": "BKN",
    "pts": 18.0,
    "reb": 7.0,
    "ast": 1.4,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201572.png",
    "career_teams": [
      "BKN",
      "LAL",
      "MIL",
      "POR"
    ]
  },
  {
    "id": 201583,
    "name": "萊恩·安德森",
    "en_name": "Ryan Anderson",
    "team": "NOP",
    "pts": 14.5,
    "reb": 5.2,
    "ast": 1.0,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201583.png",
    "career_teams": [
      "NOP"
    ]
  },
  {
    "id": 201569,
    "name": "埃里克·戈登",
    "en_name": "Eric Gordon",
    "team": "NOP",
    "pts": 15.5,
    "reb": 2.5,
    "ast": 3.0,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201569.png",
    "career_teams": [
      "NOP"
    ]
  },
  {
    "id": 202329,
    "name": "阿爾-法魯克·阿米努",
    "en_name": "Al-Farouq Aminu",
    "team": "NOP",
    "pts": 7.5,
    "reb": 5.8,
    "ast": 1.0,
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202329.png",
    "career_teams": [
      "NOP"
    ]
  }
];