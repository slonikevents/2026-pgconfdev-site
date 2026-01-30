import moment from 'moment';
import schedule from './schedule.json';

export async function load() {
  // To ignore a session altogether, add its id to this set.
  const ignore = new Set([
    438, // PostgreSQL Community Booth
  ]);

  return {
    schedule: schedule.days.map((item) => {
      const date = new Date(item.day);

      const rooms = item.rooms.sort((a, b) => a.sortkey - b.sortkey);
      const layout = rooms.map((room) => room.name);

      const roster = [
        {
          starttime: '2025-05-14T01:00:00-04:00',
          endtime: '2025-05-14T02:00:00-04:00',
          id: 0,
          title: 'A',
          room: { name: 'Regence B2C' },
          room_id: 10,
        },
        {
          starttime: '2025-05-14T01:00:00-04:00',
          endtime: '2025-05-14T02:00:00-04:00',
          id: 0,
          title: 'B',
          room: { name: 'Cartier A' },
          room_id: 7,
        },
        {
          starttime: '2025-05-14T01:00:00-04:00',
          endtime: '2025-05-14T02:00:00-04:00',
          id: 0,
          title: 'C',
          room: { name: 'Cartier B' },
          room_id: 8,
        },
        {
          starttime: '2025-05-14T01:00:00-04:00',
          endtime: '2025-05-14T03:00:00-04:00',
          id: 0,
          title: 'D',
          room: { name: 'Bonsecours' },
          room_id: 11,
        },
        ...item.sessions,
      ]
        .filter((session) => !ignore.has(session.id))
        .map((session) => {
          const offset = rooms.findIndex((room) => room.id == session.room_id);

          const lower = moment(session.starttime).format('HH:mm');
          const upper = moment(session.endtime).format('HH:mm');

          return {
            id: session.id,
            slot: `${lower} ${upper}`,
            span: [offset, offset],
            room: session.room.name,
            name: session.title,
          };
        })
        .sort((a, b) => a.slot.localeCompare(b.slot));

      return { date, layout, roster };
    }),
  };
}
