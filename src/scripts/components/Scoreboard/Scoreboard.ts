import ScoreCol from "./Score-col/ScoreCol.js";
import { MAX_TIME } from "./Scoreboard.consts.js";
import type { ScoreboardState } from "./Scoreboard.types.js";
import { determineWinner } from "./Scoreboard.utils.js";

export default function Scoreboard(): void {
  const state: ScoreboardState = {
    time: MAX_TIME,
    timer: undefined,
  };

  const home = ScoreCol(document.getElementById("home")!);
  const guest = ScoreCol(document.getElementById("guest")!);

  const announcementEl = document.getElementById("announcement")!;
  const newGameBtn = document.getElementById("new-game-btn")!;

  newGameBtn.addEventListener("click", newGame);

  newGame();
  function newGame(): void {
    home.unfreeze();
    guest.unfreeze();
    state.time = MAX_TIME;
    clearInterval(state.timer);
    state.timer = setInterval(() => {
      state.time--;
      if (state.time <= 0) {
        home.freeze();
        guest.freeze();
      }
      renderAnnouncement();
    }, 1000);
    renderAnnouncement();
  }

  function renderAnnouncement(): void {
    if (state.time > 0) {
      announcementEl.textContent = `Time left: ${state.time} seconds`;
    } else {
      const winner = determineWinner(home.getScore(), guest.getScore());
      announcementEl.textContent = winner;
    }
  }
}
