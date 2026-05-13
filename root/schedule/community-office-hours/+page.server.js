import { Slot } from '$lib/slot';
import { Temporal } from '@js-temporal/polyfill';

const wednesdayRoster = [
  {
    name: 'Open Slot',
    slot: new Slot(
      Temporal.PlainDateTime.from('2026-05-20T07:30:00'),
      Temporal.PlainDateTime.from('2026-05-20T08:30:00'),
    ),
  },
  {
    name: 'Release Contributor Gifts',
    note: 'Mark Wong',
    slot: new Slot(
      Temporal.PlainDateTime.from('2026-05-20T10:00:00'),
      Temporal.PlainDateTime.from('2026-05-20T11:30:00'),
    ),
    style: {
      'background-color': '#2F4F6E',
      color: '#FFFFFF',
    },
  },
  {
    name: 'Open Slot',
    slot: new Slot(
      Temporal.PlainDateTime.from('2026-05-20T11:30:00'),
      Temporal.PlainDateTime.from('2026-05-20T13:00:00'),
    ),
  },
  {
    name: 'Open Slot',
    slot: new Slot(
      Temporal.PlainDateTime.from('2026-05-20T13:00:00'),
      Temporal.PlainDateTime.from('2026-05-20T14:30:00'),
    ),
  },
  {
    name: 'PostgreSQL Community Volunteer Recruiting',
    note: 'Stacey Haysler',
    slot: new Slot(
      Temporal.PlainDateTime.from('2026-05-20T14:30:00'),
      Temporal.PlainDateTime.from('2026-05-20T16:00:00'),
    ),
    style: {
      'background-color': '#2F4F6E',
      color: '#FFFFFF',
    },
  },
  {
    name: 'PostgreSQL Exhibition Efforts',
    note: 'Mark Wong',
    slot: new Slot(
      Temporal.PlainDateTime.from('2026-05-20T16:00:00'),
      Temporal.PlainDateTime.from('2026-05-20T17:30:00'),
    ),
    style: {
      'background-color': '#2F4F6E',
      color: '#FFFFFF',
    },
  },
];

const thursdayRoster = [
  {
    name: 'Open Slot',
    slot: new Slot(
      Temporal.PlainDateTime.from('2026-05-21T08:30:00'),
      Temporal.PlainDateTime.from('2026-05-21T09:30:00'),
    ),
  },
  {
    name: 'Release Contributor Gifts',
    note: 'Mark Wong',
    slot: new Slot(
      Temporal.PlainDateTime.from('2026-05-21T09:30:00'),
      Temporal.PlainDateTime.from('2026-05-21T11:00:00'),
    ),
    style: {
      'background-color': '#2F4F6E',
      color: '#FFFFFF',
    },
  },
  {
    name: 'Open Slot',
    slot: new Slot(
      Temporal.PlainDateTime.from('2026-05-21T11:00:00'),
      Temporal.PlainDateTime.from('2026-05-21T12:30:00'),
    ),
  },
  {
    name: 'Open Slot',
    slot: new Slot(
      Temporal.PlainDateTime.from('2026-05-21T12:30:00'),
      Temporal.PlainDateTime.from('2026-05-21T13:45:00'),
    ),
  },
  {
    name: 'Open Slot',
    slot: new Slot(
      Temporal.PlainDateTime.from('2026-05-21T13:45:00'),
      Temporal.PlainDateTime.from('2026-05-21T15:15:00'),
    ),
  },
  {
    name: 'Open Slot',
    slot: new Slot(
      Temporal.PlainDateTime.from('2026-05-21T15:15:00'),
      Temporal.PlainDateTime.from('2026-05-21T16:45:00'),
    ),
  },
];

export async function load() {
  return {
    layout: ['Community Desk'],
    wednesday: wednesdayRoster.map((item) => ({ span: [0, 0], ...item })),
    thursday: thursdayRoster.map((item) => ({ span: [0, 0], ...item })),
  };
}
