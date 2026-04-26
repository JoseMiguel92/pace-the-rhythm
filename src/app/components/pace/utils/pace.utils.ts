export function paceToBpm(minutes: number, seconds: number): number {
  const decimalPace = minutes + seconds / 60;
  const speed = 60 / decimalPace;
  return parseFloat((speed * 3 + 140).toFixed(2));
}

export function bpmToPace(bpm: number): { minutes: number; seconds: number } {
  const speed = parseFloat(((bpm - 140) / 3).toFixed(2));
  const decimalPace = 60 / speed;
  const minutes = Math.floor(decimalPace);
  const seconds = Math.round((decimalPace - minutes) * 60);
  return { minutes, seconds };
}
