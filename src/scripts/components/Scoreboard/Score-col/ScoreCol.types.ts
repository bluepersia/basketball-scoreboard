type ScoreColState = {
  score: number;
  isFrozen: boolean;
};

type ScoreColReturn = {
  getScore: () => number;
  freeze: () => void;
  unfreeze: () => void;
};

export type { ScoreColState, ScoreColReturn };
