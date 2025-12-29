import { Temporal } from '@js-temporal/polyfill';

export class Slot {
  constructor(lower, upper) {
    this.lower = lower;
    this.upper = upper;
  }

  length() {
    return this.lower.until(this.upper);
  }

  compare(other) {
    return (
      Temporal.PlainDateTime.compare(this.lower, other.lower) ||
      Temporal.PlainDateTime.compare(this.upper, other.upper)
    );
  }

  equals(other) {
    return this.compare(other) == 0;
  }

  overlaps(other) {
    if (Temporal.PlainDateTime.compare(this.upper, other.lower) <= 0)
      return false;

    if (Temporal.PlainDateTime.compare(this.lower, other.upper) >= 0)
      return false;

    return true;
  }

  toStringCouple() {
    return [this.lower.toString(), this.upper.toString()];
  }
}
