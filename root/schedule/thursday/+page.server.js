import { Slot } from '$lib/slot';

export async function load({ parent }) {
  const data = await parent();
  const schedule = data.schedule.find(({ date }) => date.dayOfWeek == 4);

  let roster = schedule.roster.concat({
    slot: new Slot(
      schedule.date.toPlainDateTime('12:30'),
      schedule.date.toPlainDateTime('14:00'),
    ),
    name: 'Lunch',
    span: [0, 2],
  });

  roster.find(({ name }) => name == 'Lightning Talks').span = [0, 3];

  return { ...schedule, roster };
}
