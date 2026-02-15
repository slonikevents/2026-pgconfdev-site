import rehypeFormat from 'rehype-format';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

export const TIMEZONE = 'America/Vancouver';

export function markdownToHtml(markdown) {
  const processed = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeFormat)
    .use(rehypeStringify)
    .processSync(markdown);
  return String(processed);
}

export async function pgeuData(name) {
  const root =
    'https://www.pgevents.ca/events/admin/pgconfdev2026/tokendata/6a28e5f09fa47669593ec44f4723cc244ffa8fa26ea2c70cfaed841c179822e4/';

  const response = await fetch(root + '/' + name);
  if (!response.ok) {
    throw new Error(`HTTP Status: ${response.status}`);
  }
  return await response.json();
}
