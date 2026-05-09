export async function load({ parent }) {
  const data = await parent();
  const schedule = data.schedule.find(({ date }) => date.dayOfWeek == 5);

  let roster = schedule.roster;

  roster.find(({ name }) => name == 'Breakfast').span = [0, 2];
  delete roster.find(({ name }) => name == 'Breakfast').id;

  roster.find(({ name }) => name.endsWith('Organizing')).span = [0, 2];

  roster.find(({ name }) => name == 'Coffee').span = [0, 2];
  delete roster.find(({ name }) => name == 'Coffee').id;

  roster.find(({ name }) => name.startsWith('Lunch')).span = [0, 2];
  delete roster.find(({ name }) => name.startsWith('Lunch')).id;

  roster.find(({ name }) => name == 'Tea').span = [0, 2];
  delete roster.find(({ name }) => name == 'Tea').id;

  roster.find(({ name }) => name == 'Closing').span = [0, 2];

  return { ...schedule, roster };
}
