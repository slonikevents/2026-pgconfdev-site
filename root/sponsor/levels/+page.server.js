//
// sponsorlevels.json comes from the conference system
// and can be refeshed with
// https://www.pgevents.ca/events/admin/pgconfdev2026/tokendata/$TOKEN/sponsorlevels.json
// where TOKEN is an access token setup at https://www.pgevents.ca/events/admin/pgconfdev2026/accesstokens/
import jsonfile from './sponsorlevels.json';

import rehypeFormat from 'rehype-format';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

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
  let sponsorLevels = [];
  for (const { benefits, ...rest } of jsonfile.sponsorlevels) {
    const render = benefits.map(({ description, ...rest }) => {
      return { description: markdownToHtml(description), ...rest };
    });
    sponsorLevels.push({ benefits: render, ...rest });
  }
  return { sponsorLevels };
};
