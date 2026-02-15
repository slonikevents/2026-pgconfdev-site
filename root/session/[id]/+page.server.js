import { Temporal } from '@js-temporal/polyfill';
import { error } from '@sveltejs/kit';
import { TIMEZONE, markdownToHtml, pgeuData } from '$lib/pgeu';
import { Slot } from '$lib/slot';

const schedule = await pgeuData('schedule.json');

const DATABASE = new Map(
  schedule.days.flatMap((day) =>
    day.sessions.map(({ id, ...rest }) => [id, rest]),
  ),
);

export async function load({ params }) {
  const id = Number(params.id);

  if (!Number.isInteger(id) || String(id) !== params.id)
    throw error(404, 'Not Found');

  const target = DATABASE.get(id);
  if (target === undefined) throw error(404, 'Not Found');

  const { starttime, endtime, abstract, ...result } = target;

  const lower = Temporal.Instant.from(starttime)
    .toZonedDateTimeISO(TIMEZONE)
    .toPlainDateTime();
  const upper = Temporal.Instant.from(endtime)
    .toZonedDateTimeISO(TIMEZONE)
    .toPlainDateTime();
  result.slot = new Slot(lower, upper);

  result.abstract = markdownToHtml(abstract);

  return result;
}
