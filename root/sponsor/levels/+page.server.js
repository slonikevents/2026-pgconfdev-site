import { markdownToHtml, pgeuData } from '$lib/pgeu';

export const load = async () => {
  const jsonfile = await pgeuData('sponsorlevels.json');

  let sponsorLevels = [];
  for (const { benefits, ...rest } of jsonfile.sponsorlevels) {
    const render = benefits.map(({ description, ...rest }) => {
      return { description: markdownToHtml(description), ...rest };
    });
    sponsorLevels.push({ benefits: render, ...rest });
  }
  return { sponsorLevels };
};
