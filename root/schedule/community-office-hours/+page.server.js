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
    description: 'Did you report a bug?  Contribute a patch?  Update documentation?  Maybe you are mentioned in the release notes.  See <a href="https://wiki.postgresql.org/wiki/Contributor_Gifts">https://wiki.postgresql.org/wiki/Contributor_Gifts</a> for details.',
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
    description: 'Interested in volunteering with the PostgreSQL Project, but don\'t know where to start? Meet us at the Community Booth to find out the many opportunities we have for becoming involved, and sign up!',
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
    description: 'PostgreSQL can sometimes be seen in the exhibition halls of various events networking with other communities and passing out swag. This session covers the volunteer effort that makes this happen including:\n<ul>\n<li>planning & scheduling\n<li>staffing\n<li>budgeting\n<li>swag\n</ul>\nPlease come to help us do better, discuss any of these topics, and get involved!',
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
    description: 'Did you report a bug?  Contribute a patch?  Update documentation?  Maybe you are mentioned in the release notes.  See <a href="https://wiki.postgresql.org/wiki/Contributor_Gifts">https://wiki.postgresql.org/wiki/Contributor_Gifts</a> for details.',
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
    name: 'PGNexus Community Hub',
    note: 'Cary Huang',
    description: 'PGNexus is a WIP platform aimed to bring PostgreSQL developers, users, students and communities from all over the world together in one collaborative hub that:\n<ul>\n<li>Curates PG news, blogs, posts\n<li>Explains hacker discussions emails\n<li>Analyzes patches\n<li>Maintains active contributor profile\n<li>Offers a sandbox to play with PostgreSQL\n<li>Connects PostgreSQL people\n</ul>\nCome help us make it more friendly and beneficial for everyone',
    slot: new Slot(
      Temporal.PlainDateTime.from('2026-05-21T13:45:00'),
      Temporal.PlainDateTime.from('2026-05-21T15:15:00'),
    ),
    style: {
      'background-color': '#2F4F6E',
      color: '#FFFFFF',
    },
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
