import ScoreCol from "./ScoreCol.js";

const scoreColHome = document.getElementById('home');
const scoreColGuest = document.getElementById ('guest');

const home = new ScoreCol(scoreColHome);
const guest = new ScoreCol(scoreColGuest);

home.scoreChanged.push(onScoreChanged);
guest.scoreChanged.push(onScoreChanged);

function onScoreChanged ()
{
    home.el.classList.remove('score-col--leading')
    guest.el.classList.remove('score-col--leading')

    if(home.score > guest.score)
    {
        home.el.classList.add('score-col--leading')
    }
    else if (guest.score > home.score)
    {
        guest.el.classList.add('score-col--leading')
    }


}