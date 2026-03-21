import { Slot } from '$lib/slot';

export async function load({ parent }) {
  const data = await parent();
  const schedule = data.schedule.find(({ date }) => date.dayOfWeek == 2);

  let roster = schedule.roster.concat(
    {
      slot: new Slot(
        schedule.date.toPlainDateTime('07:30'),
        schedule.date.toPlainDateTime('08:30'),
      ),
      name: 'Breakfast',
      room: 'Concourse',
      span: [0, 0],
    },
    {
      slot: new Slot(
        schedule.date.toPlainDateTime('10:00'),
        schedule.date.toPlainDateTime('10:30'),
      ),
      name: 'Coffee',
      room: 'Concourse',
      span: [0, 1],
    },
    {
      slot: new Slot(
        schedule.date.toPlainDateTime('12:30'),
        schedule.date.toPlainDateTime('13:30'),
      ),
      name: 'Lunch',
      room: 'Concourse/Segal',
      span: [0, 1],
    },
    {
      slot: new Slot(
        schedule.date.toPlainDateTime('15:30'),
        schedule.date.toPlainDateTime('16:00'),
      ),
      name: 'Tea',
      room: 'Concourse',
      span: [0, 1],
    },
  );
  roster.find(({ name }) => name.startsWith('Meet')).span = [0, 1];
  return { ...schedule, roster };
}
