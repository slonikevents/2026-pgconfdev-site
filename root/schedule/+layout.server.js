import { Temporal } from '@js-temporal/polyfill';
import { pgeu_data } from '$lib';
import { Slot } from '$lib/slot';

const TIMEZONE = 'America/Vancouver';

export async function load() {
  const data = await pgeu_data('schedule.json');

  const schedule = data.days.map((item) => {
    const rooms = item.rooms.sort((a, b) => a.sortkey - b.sortkey);
    const layout = rooms.map((room) => room.name);

    const roster = item.sessions.map(function ({
      endtime,
      id,
      room: { roomname: room },
      room_id,
      speakers,
      starttime,
      title: name,
      track: { color: background_color, fgcolor: color },
    }) {
      const lower = Temporal.Instant.from(starttime)
        .toZonedDateTimeISO(TIMEZONE)
        .toPlainDateTime();
      const upper = Temporal.Instant.from(endtime)
        .toZonedDateTimeISO(TIMEZONE)
        .toPlainDateTime();
      const slot = new Slot(lower, upper);

      const offset = rooms.findIndex((room) => room.id == room_id);
      const span = [offset, offset];

      const note = speakers.map(({ name }) => name).join(', ');

      const style = { 'background-color': background_color, color };
      return { id, name, note, slot, span, room, style };
    });

    const date = Temporal.PlainDate.from(item.day);
    return { date, layout, roster };
  });

  return { schedule };
}
