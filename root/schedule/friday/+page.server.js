import { Temporal } from '@js-temporal/polyfill';
import { Slot } from '$lib/slot';

export async function load() {
  const date = Temporal.PlainDate.from('2026-05-22');
  const layout = ['Room 1', 'Room 2', 'Room 3'];
  const roster = [
    {
      slot: new Slot(
        date.toPlainDateTime('08:00'),
        date.toPlainDateTime('09:00'),
      ),
      name: 'Breakfast',
      span: [0, 2],
    },
    {
      slot: new Slot(
        date.toPlainDateTime('09:00'),
        date.toPlainDateTime('10:00'),
      ),
      name: 'Unconference Organizing',
      span: [0, 2],
    },
    {
      slot: new Slot(
        date.toPlainDateTime('10:00'),
        date.toPlainDateTime('10:30'),
      ),
      name: 'Coffee',
      span: [0, 2],
    },
    {
      slot: new Slot(
        date.toPlainDateTime('10:30'),
        date.toPlainDateTime('11:30'),
      ),
      name: 'Unconference Session',
      span: [0, 0],
    },
    {
      slot: new Slot(
        date.toPlainDateTime('10:30'),
        date.toPlainDateTime('11:30'),
      ),
      name: 'Unconference Session',
      span: [1, 1],
    },
    {
      slot: new Slot(
        date.toPlainDateTime('10:30'),
        date.toPlainDateTime('11:30'),
      ),
      name: 'Unconference Session',
      span: [2, 2],
    },
    {
      slot: new Slot(
        date.toPlainDateTime('11:30'),
        date.toPlainDateTime('12:30'),
      ),
      name: 'Unconference Session',
      span: [0, 0],
    },
    {
      slot: new Slot(
        date.toPlainDateTime('11:30'),
        date.toPlainDateTime('12:30'),
      ),
      name: 'Unconference Session',
      span: [1, 1],
    },
    {
      slot: new Slot(
        date.toPlainDateTime('11:30'),
        date.toPlainDateTime('12:30'),
      ),
      name: 'Unconference Session',
      span: [2, 2],
    },
    {
      slot: new Slot(
        date.toPlainDateTime('12:30'),
        date.toPlainDateTime('13:30'),
      ),
      name: 'Lunch',
      span: [0, 2],
    },
    {
      slot: new Slot(
        date.toPlainDateTime('13:30'),
        date.toPlainDateTime('14:30'),
      ),
      name: 'Unconference Session',
      span: [0, 0],
    },
    {
      slot: new Slot(
        date.toPlainDateTime('13:30'),
        date.toPlainDateTime('14:30'),
      ),
      name: 'Unconference Session',
      span: [1, 1],
    },
    {
      slot: new Slot(
        date.toPlainDateTime('13:30'),
        date.toPlainDateTime('14:30'),
      ),
      name: 'Unconference Session',
      span: [2, 2],
    },
    {
      slot: new Slot(
        date.toPlainDateTime('14:30'),
        date.toPlainDateTime('15:30'),
      ),
      name: 'Unconference Session',
      span: [0, 0],
    },
    {
      slot: new Slot(
        date.toPlainDateTime('14:30'),
        date.toPlainDateTime('15:30'),
      ),
      name: 'Unconference Session',
      span: [1, 1],
    },
    {
      slot: new Slot(
        date.toPlainDateTime('14:30'),
        date.toPlainDateTime('15:30'),
      ),
      name: 'Unconference Session',
      span: [2, 2],
    },
    {
      slot: new Slot(
        date.toPlainDateTime('15:30'),
        date.toPlainDateTime('16:00'),
      ),
      name: 'Closing',
      span: [0, 2],
    },
    {
      slot: new Slot(
        date.toPlainDateTime('16:00'),
        date.toPlainDateTime('16:30'),
      ),
      name: 'Coffee',
      span: [0, 2],
    },
  ];

  return { date, layout, roster };
}
