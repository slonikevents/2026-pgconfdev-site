import { Slot } from '$lib/slot';

export const transport = {
  Slot: {
    encode: (slot) => slot instanceof Slot && [slot.lower, slot.upper],
    decode: ([lower, upper]) => new Slot(lower, upper),
  },
};
