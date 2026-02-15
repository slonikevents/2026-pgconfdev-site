import { Slot } from '$lib/slot';

export async function load({ parent }) {
  const data = await parent();
  const schedule = data.schedule.find(({ date }) => date.dayOfWeek == 3);

  let roster = schedule.roster.concat({
    slot: new Slot(
      schedule.date.toPlainDateTime('12:00'),
      schedule.date.toPlainDateTime('13:00'),
    ),
    name: 'Lunch',
    span: [0, 3],
  });

  roster.find(({ name }) => name == 'Wednesday Opening').span = [0, 3];
  roster.find(({ name }) => name.startsWith('Group Photo')).span = [0, 3];

  return { ...schedule, roster };
}
