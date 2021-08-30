/**
 * There are 12 half-steps in an octave -- we're not concerned with
 * microtonality (for now). 0 is C.
 */
const NUM_PITCH_CLASSES = 12;

export class Pitch {
  private _pitchClass: number;
  private _register: number;

  constructor(pitchClass: number, register: number) {
    this._pitchClass = pitchClass;
    this._register = register;
  }

  public get pitchClass() {
    return this._pitchClass;
  }

  public get register() {
    return this._register;
  }
}
