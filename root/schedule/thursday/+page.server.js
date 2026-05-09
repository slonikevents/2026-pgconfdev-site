export async function load({ parent }) {
  const data = await parent();
  const schedule = data.schedule.find(({ date }) => date.dayOfWeek == 4);

  let roster = schedule.roster;

  roster.find(({ name }) => name == 'Breakfast').span = [0, 2];
  delete roster.find(({ name }) => name == 'Breakfast').id;

  roster.find(({ name }) => name == 'Coffee').span = [0, 2];
  delete roster.find(({ name }) => name == 'Coffee').id;

  roster.find(({ name }) => name.startsWith('Lunch')).span = [0, 2];
  roster.find(({ name }) => name.startsWith('Lunch')).room = 'Concourse/Segal';
  roster.find(({ name }) => name.startsWith('Lunch')).href = '/posters';

  roster.find(({ name }) => name == 'Lightning Talks').span = [0, 3];

  roster.find(({ name }) => name == 'Tea + Cake Cutting').span = [0, 3];

  roster.find(({ name }) => name.startsWith('Meet + Eat')).span = [0, 3];
  return { ...schedule, roster };
}
