import { Slot } from '$lib/slot';

export async function load({ parent }) {
  const data = await parent();
  const schedule = data.schedule.find(({ date }) => date.dayOfWeek == 5);

  let roster = schedule.roster.concat(
    {
      slot: new Slot(
        schedule.date.toPlainDateTime('08:00'),
        schedule.date.toPlainDateTime('09:00'),
      ),
      name: 'Breakfast',
      room: 'Concourse',
      span: [0, 2],
    },
    {
      slot: new Slot(
        schedule.date.toPlainDateTime('10:00'),
        schedule.date.toPlainDateTime('10:30'),
      ),
      name: 'Coffee',
      room: 'Concourse',
      span: [0, 2],
    },
    {
      slot: new Slot(
        schedule.date.toPlainDateTime('12:30'),
        schedule.date.toPlainDateTime('13:30'),
      ),
      name: 'Lunch',
      room: 'Concourse',
      span: [0, 2],
    },
    {
      slot: new Slot(
        schedule.date.toPlainDateTime('16:00'),
        schedule.date.toPlainDateTime('16:30'),
      ),
      name: 'Tea',
      room: 'Concourse',
      span: [0, 2],
    },
  );

  return { ...schedule, roster };
}
