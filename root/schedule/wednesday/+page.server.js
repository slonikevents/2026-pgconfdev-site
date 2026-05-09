export async function load({ parent }) {
  const data = await parent();
  const schedule = data.schedule.find(({ date }) => date.dayOfWeek == 3);

  let roster = schedule.roster;

  roster.find(({ name }) => name == 'Breakfast').span = [0, 1];
  delete roster.find(({ name }) => name == 'Breakfast').id;

  roster.find(({ name }) => name == 'Opening').span = [0, 2];

  roster.find(({ name }) => name == 'Lunch').span = [0, 2];
  delete roster.find(({ name }) => name == 'Lunch').id;

  roster.find(({ name }) => name == 'Coffee').span = [0, 2];
  delete roster.find(({ name }) => name == 'Coffee').id;

  roster.find(({ name }) => name == 'Tea').span = [0, 2];
  delete roster.find(({ name }) => name == 'Tea').id;

  roster
    .filter(({ name }) => name.startsWith('Group Photo'))
    .forEach((item) => (item.span = [0, 2]));

  roster.find(({ name }) => name.startsWith('30 Years')).span = [0, 2];

  roster.find(({ name }) => name == 'Social').span = [0, 2];

  roster.find(
    ({ name }) => name == '[advance signup required] pgkaraoke',
  ).span = [0, 2];

  return { ...schedule, roster };
}
