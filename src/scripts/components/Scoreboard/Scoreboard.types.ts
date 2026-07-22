type ScoreboardState = {
  time: number;
  timer: ReturnType<typeof setInterval> | undefined;
};

export type { ScoreboardState };
