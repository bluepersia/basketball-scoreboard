import type { ScoreColReturn, ScoreColState } from "./ScoreCol.types";
import { incrementBy, unfreezeState } from "./ScoreCol.utils.js";

export default function ScoreCol(root: HTMLElement): ScoreColReturn {
  let state: ScoreColState = {
    score: 0,
    isFrozen: false,
  };

  const scoreEl = root.querySelector("[data-score]")!;
  const addOneBtn = root.querySelector("[data-add-one]")!;
  const addTwoBtn = root.querySelector("[data-add-two]")!;
  const addThreeBtn = root.querySelector("[data-add-three]")!;

  addOneBtn.addEventListener("click", handleAddOneClick);
  addTwoBtn.addEventListener("click", handleAddTwoClick);
  addThreeBtn.addEventListener("click", handleAddThreeClick);

  function handleAddOneClick(): void {
    state = incrementBy(state, 1);
    renderScore();
  }

  function handleAddTwoClick(): void {
    state = incrementBy(state, 2);
    renderScore();
  }

  function handleAddThreeClick(): void {
    state = incrementBy(state, 3);
    renderScore();
  }

  function renderScore(): void {
    scoreEl.textContent = state.score.toString();
  }

  function getScore(): number {
    return state.score;
  }

  function freeze(): void {
    state.isFrozen = true;
  }

  function unfreeze(): void {
    state = unfreezeState(state);
    renderScore();
  }

  return {
    getScore,
    freeze,
    unfreeze,
  };
}
