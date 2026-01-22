import ScoreCol from "./ScoreCol.js";

const scoreColHome = document.getElementById('home');
const scoreColGuest = document.getElementById ('guest');

new ScoreCol(scoreColHome);
new ScoreCol(scoreColGuest);
