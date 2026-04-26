import { paceToBpm, bpmToPace } from "./pace.utils";

describe('paceToBpm', () => {
  it('should convert 6:00 to 170 bpm', () => {
    expect(paceToBpm(6, 0)).toBe(170);
  });
});

describe('bpmToPace', () => {
  it('should convert 170 bpm to 6:00', () => {
    expect(bpmToPace(170)).toEqual({ minutes: 6, seconds: 0 });
  });
});
