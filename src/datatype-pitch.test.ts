import { Pitch } from './datatype-pitch';

let p: Pitch;

describe('Pitch class', () => {
  describe('getters and setters', () => {
    beforeEach(() => {
      p = new Pitch(0, 4);
    })
    it('returns the pitchClass it is initialized with', () => {
      expect(p.pitchClass).toBe(0);
    })
    it('returns the register it is initialized with', () => {
      expect(p.register).toBe(4);
    })
  })
})
