import { Slot } from '$lib/slot';

export async function load({ parent }) {
  const data = await parent();
  const schedule = data.schedule.find(({ date }) => date.dayOfWeek == 4);

  let roster = schedule.roster.concat(
    {
      slot: new Slot(
        schedule.date.toPlainDateTime('08:30'),
        schedule.date.toPlainDateTime('09:30'),
      ),
      name: 'Breakfast',
      room: 'Concourse',
      span: [0, 3],
    },
    {
      slot: new Slot(
        schedule.date.toPlainDateTime('10:30'),
        schedule.date.toPlainDateTime('11:00'),
      ),
      name: 'Coffee',
      room: 'Concourse',
      span: [0, 3],
    },
    {
      slot: new Slot(
        schedule.date.toPlainDateTime('13:45'),
        schedule.date.toPlainDateTime('14:00'),
      ),
      name: "Major Contributors' Group Photo",
      room: 'Fletcher',
      span: [0, 0],
    },
    {
      slot: new Slot(
        schedule.date.toPlainDateTime('12:30'),
        schedule.date.toPlainDateTime('14:00'),
      ),
      name: 'Lunch',
      room: 'Concourse',
      span: [1, 1],
    },
    {
      slot: new Slot(
        schedule.date.toPlainDateTime('12:30'),
        schedule.date.toPlainDateTime('13:45'),
      ),
      name: 'Poster Session Showcase',
      room: 'Segal',
      span: [2, 2],
    },
    {
      slot: new Slot(
        schedule.date.toPlainDateTime('15:30'),
        schedule.date.toPlainDateTime('16:15'),
      ),
      name: 'Coffee + Cake Cutting',
      room: 'Concourse',
      span: [0, 3],
    },
    {
      slot: new Slot(
        schedule.date.toPlainDateTime('18:15'),
        schedule.date.toPlainDateTime('21:15'),
      ),
      name: 'Meet + Eat',
      room: 'Concourse',
      span: [0, 3],
    },
  );

  roster.find(({ name }) => name == 'Lightning Talks').span = [0, 3];

  return { ...schedule, roster };
}
