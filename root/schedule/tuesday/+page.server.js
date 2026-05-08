export async function load({ parent }) {
  const data = await parent();
  const schedule = data.schedule.find(({ date }) => date.dayOfWeek == 2);

  let roster = schedule.roster;
  roster.find(({ name }) => name.startsWith('Meet')).span = [0, 1];
  return { ...schedule, roster };
}
