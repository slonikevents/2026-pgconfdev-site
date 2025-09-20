//
// sponsorlevels.json comes from the conference system
// and can be refeshed with
// https://www.pgevents.ca/events/admin/pgconfdev2026/tokendata/$TOKEN/sponsorlevels.json
// where TOKEN is an access token setup at https://www.pgevents.ca/events/admin/pgconfdev2026/accesstokens/
import jsonfile from './sponsorlevels.json';

import rehypeDocument from 'rehype-document';
import rehypeFormat from 'rehype-format';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

export const load = async () => {
  const benefitMarkdown = {};
  let id = 1;
  for await (const level of jsonfile.sponsorlevels) {
    for await (const benefit of level.benefits) {
      const processed = await unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeDocument)
        .use(rehypeFormat)
        .use(rehypeStringify)
        .process(benefit.description);
      benefitMarkdown[id] = String(processed);
      benefit.id = id++;
    }
  }
  return {
    sponsorLevels: jsonfile.sponsorlevels,
    benefits: benefitMarkdown,
  };
};
