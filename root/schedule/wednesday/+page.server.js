import { Slot } from '$lib/slot';

export async function load({ parent }) {
  const data = await parent();
  const schedule = data.schedule.find(({ date }) => date.dayOfWeek == 3);

  let roster = schedule.roster.concat(
    {
      slot: new Slot(
        schedule.date.toPlainDateTime('07:30'),
        schedule.date.toPlainDateTime('08:30'),
      ),
      name: 'Breakfast',
      room: 'Concourse',
      span: [0, 1],
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
        schedule.date.toPlainDateTime('12:00'),
        schedule.date.toPlainDateTime('13:00'),
      ),
      name: 'Lunch',
      room: 'Concourse',
      span: [0, 2],
    },
    {
      slot: new Slot(
        schedule.date.toPlainDateTime('15:00'),
        schedule.date.toPlainDateTime('15:30'),
      ),
      name: 'Tea',
      room: 'Concourse',
      span: [0, 2],
    },
    {
      slot: new Slot(
        schedule.date.toPlainDateTime('18:00'),
        schedule.date.toPlainDateTime('21:00'),
      ),
      name: 'Social',
      room: 'Rogue',
      span: [0, 2],
    },
  );

  roster.find(({ name }) => name == 'Opening').span = [0, 2];
  roster.find(({ name }) => name.startsWith('Group Photo')).span = [0, 2];
  roster.find(({ name }) => name.startsWith('30 Years')).span = [0, 2];

  return { ...schedule, roster };
}
