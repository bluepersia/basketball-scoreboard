function determineWinner(
  homeScore: number,
  guestScore: number,
): "Home Won!" | "Guest Won!" | "Draw!" {
  if (homeScore > guestScore) return "Home Won!";
  if (guestScore > homeScore) return "Guest Won!";
  return "Draw!";
}

export { determineWinner };
