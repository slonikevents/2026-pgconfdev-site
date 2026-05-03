import { load as layoutLoad } from '../schedule/+layout.server.js';

export const prerender = true;

export async function GET() {
  const roster = [];
  for (const day of ['tuesday', 'wednesday', 'thursday', 'friday']) {
    const { load } = await import(`../schedule/${day}/+page.server.js`);
    const data = await load({ parent: layoutLoad });
    roster.push(...data.roster.map((i) => ({ ...i, date: data.date })));
  }

  roster.sort((a, b) => a.slot.compare(b.slot));

  return new Response(JSON.stringify(roster), {
    headers: { 'Content-Type': 'application/json' },
  });
}
