import { Pitch } from './datatype-pitch';

let p: Pitch;

describe('Pitch class', () => {
  describe('getters and setters', () => {
    beforeEach(() => {
      p = new Pitch(0, 4);
    });
    it('returns the pitchClass it is initialized with', () => {
      expect(p.pitchClass).toBe(0);
    });
    it('returns the register it is initialized with', () => {
      expect(p.register).toBe(4);
    });
  });

  describe('fromString factory method', () => {
    it.each([
      ['C4', 0, 4],
      ['Eb3', 3, 3],
      ['Cb4', 11, 3],
    ])('fromString("%s") has a pitchClass of %d and a register of %d.', (input, expectedPitchClass, expectedRegister) => {
      const p = Pitch.fromString(input);
      expect(p.pitchClass).toBe(expectedPitchClass);
      expect(p.register).toBe(expectedRegister);
    });
  });
});
