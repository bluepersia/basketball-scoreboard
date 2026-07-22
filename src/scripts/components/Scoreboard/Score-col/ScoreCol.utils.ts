import type { ScoreColState } from "./ScoreCol.types";

function incrementBy(state: ScoreColState, by: number): ScoreColState {
  if (state.isFrozen) return state;

  return {
    ...state,
    score: state.score + by,
  };
}

function unfreezeState(state: ScoreColState): ScoreColState {
  return {
    ...state,
    isFrozen: false,
    score: 0,
  };
}

export { incrementBy, unfreezeState };
