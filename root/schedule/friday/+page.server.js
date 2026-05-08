export async function load({ parent }) {
  const data = await parent();
  const schedule = data.schedule.find(({ date }) => date.dayOfWeek == 5);

  let roster = schedule.roster;

  roster.find(({ name }) => name == 'Breakfast').span = [0, 3];
  roster.find(({ name }) => name == 'Coffee').span = [0, 3];
  roster.find(({ name }) => name.startsWith('Lunch')).span = [0, 3];
  roster.find(({ name }) => name == 'Tea').span = [0, 3];
  roster.find(({ name }) => name == 'Closing').span = [0, 3];

  return { ...schedule, roster };
}
