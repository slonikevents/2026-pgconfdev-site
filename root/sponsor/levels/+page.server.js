import rehypeFormat from 'rehype-format';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

import { pgeu_data } from '$lib';

function markdownToHtml(markdown) {
  const processed = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeFormat)
    .use(rehypeStringify)
    .processSync(markdown);
  return String(processed);
}

export const load = async () => {
  const jsonfile = await pgeu_data('sponsorlevels.json');

  let sponsorLevels = [];
  for (const { benefits, ...rest } of jsonfile.sponsorlevels) {
    const render = benefits.map(({ description, ...rest }) => {
      return { description: markdownToHtml(description), ...rest };
    });
    sponsorLevels.push({ benefits: render, ...rest });
  }
  return { sponsorLevels };
};
