/**
 * There are 12 half-steps in an octave -- we're not concerned with
 * microtonality (for now). 0 is C.
 */
const NUM_PITCH_CLASSES = 12;

/**
 * Matches, for e.g., C#4 or Eb3.
 */
const PITCH_REGEXP = /^([ABCDEFG])(#|B)?(\d+)$/;

/**
 * Man, what I would give to make this just 12 letters in a row with
 * no sharps and flats.
 */
const NATURAL_INDICES = {
  C: 0,
  D: 2,
  E: 4,
  F: 5,
  G: 7,
  A: 9,
  B: 11,
};

const MODIFIER_VALUES = {
  B: -1,
  '#': 1,
};

/**
 * JS does modular arithmetic weirdly in the presence of negative numbers.
 */
function mod(n: number, m: number) {
  return ((n % m) + m) % m;
}

export class Pitch {
  private _pitchClass: number;
  private _register: number;

  static fromString(pitchSpec: string): Pitch {
    const groups = pitchSpec.toUpperCase().match(PITCH_REGEXP);

    if (!groups) {
      throw new Error(`Cannot build Pitch from "${pitchSpec}".`);
    }

    const [_input, note, modifier, register] = groups;
    const baseNoteValue = NATURAL_INDICES[note as keyof typeof NATURAL_INDICES];
    const modifierValue =
      MODIFIER_VALUES[modifier as keyof typeof MODIFIER_VALUES] || 0;
    const sum = baseNoteValue + modifierValue;
    let registerValue = parseInt(register);

    if (sum < 0) {
      --registerValue;
    } else if (sum > NUM_PITCH_CLASSES) {
      ++registerValue;
    }

    const pitchClass = mod(sum, NUM_PITCH_CLASSES);

    return new this(pitchClass, registerValue);
  }

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
