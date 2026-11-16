/* ============================================================
   ROOMMATE PICK'EM — PICKS FILE
   This is the only file you need to edit each week.

   Scores, winners and live updates come from ESPN automatically.
   You only add the matchups and everyone's picks.

   HOW TO ADD A WEEK
   Copy a whole week block (from { week: ... to the matching },)
   paste it at the end of the WEEKS list, change the week number,
   and list each game like this:

     {t1:"BUF", t2:"MIA", picks:{D:1, E:2, C:1, M:1}},

   t1 = first team on the whiteboard, t2 = second team
   picks: 1 = picked t1, 2 = picked t2
   Odds are filled in from ESPN automatically if you leave out ml1/ml2.
   Use standard abbreviations: ARI ATL BAL BUF CAR CHI CIN CLE DAL DEN
   DET GB HOU IND JAX KC LAC LAR LV MIA MIN NE NO NYG NYJ PHI PIT SEA
   SF TB TEN WAS
   ============================================================ */

const SEASON = 2026;

const PLAYERS = [
  {id:"D", name:"Danny", color:"#f472b6"},
  {id:"E", name:"Ethan", color:"#38bdf8"},
  {id:"C", name:"Chris", color:"#fbbf24"},
  {id:"M", name:"Mike",  color:"#4ade80"}
];

const WEEKS = [
  {
    week: 10,
    note: "Missed Thursday night (WAS @ NYG) and the Munich game (NE @ DET).",
    odds: "bet365 moneylines via FOX Sports, Nov 15, 2026",
    games: [
      {t1:"MIN", t2:"GB",  ml1: 125, ml2:-150, picks:{D:1,E:1,C:1,M:1}},
      {t1:"BUF", t2:"NYJ", ml1:-460, ml2: 355, picks:{D:1,E:1,C:2,M:1}},
      {t1:"KC",  t2:"ATL", ml1:-180, ml2: 150, picks:{D:1,E:2,C:1,M:2}},
      {t1:"HOU", t2:"CLE", ml1:-230, ml2: 185, picks:{D:1,E:1,C:1,M:2}},
      {t1:"JAX", t2:"TEN", ml1:-650, ml2: 475, picks:{D:1,E:1,C:1,M:2}},
      {t1:"MIA", t2:"IND", ml1: 180, ml2:-220, picks:{D:1,E:1,C:2,M:1}},
      {t1:"CAR", t2:"NO",  ml1:-105, ml2:-115, picks:{D:2,E:2,C:2,M:2}},
      {t1:"SEA", t2:"LV",  ml1:-280, ml2: 230, picks:{D:2,E:2,C:1,M:1}},
      {t1:"LAR", t2:"ARI", ml1:-525, ml2: 390, picks:{D:1,E:1,C:1,M:1}},
      {t1:"SF",  t2:"DAL", ml1:-220, ml2: 180, picks:{D:2,E:1,C:2,M:1}},
      {t1:"PIT", t2:"CIN", ml1: 162, ml2:-194, picks:{D:2,E:1,C:1,M:1}},
      {t1:"LAC", t2:"BAL", ml1: 185, ml2:-230, picks:{D:1,E:2,C:1,M:2}}
    ]
  }

  /* Week 11 example — remove the slash-star lines around it and fill in picks:
  ,{
    week: 11,
    games: [
      {t1:"IND", t2:"HOU", picks:{D:2,E:2,C:2,M:2}},
    ]
  }
  */
];
