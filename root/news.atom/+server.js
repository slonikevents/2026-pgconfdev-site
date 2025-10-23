import { resolve } from '$app/paths';
import { render } from 'svelte/server';

import { JSDOM } from 'jsdom';
import moment from 'moment';

import { index } from '$news';
import template from './template.xml?raw';

export const prerender = true;

export function GET({ route }) {
  // Create an XML DOM from the Atom template
  const mimeType = 'application/atom+xml';
  const { window } = new JSDOM(template, { contentType: mimeType });
  const { document } = window;
  const ns = document.documentElement.namespaceURI;

  // Latest item (index is in reverse chronological order)
  const latest = index.values().next().value;

  // <updated>{latest.date}</updated>
  let node = document.createElementNS(ns, 'updated');
  const date = latest ? latest.date : moment.utc();
  node.textContent = date.format('YYYY-MM-DD[T]HH:MM:SS[Z]');
  document.documentElement.appendChild(node);

  // <link rel="self" href="/news.atom" />
  node = document.createElementNS(ns, 'link');
  node.setAttribute('rel', 'self');
  node.setAttribute('href', resolve(route.id));
  document.documentElement.appendChild(node);

  for (const [id, item] of index) {
    // <entry>...</entry>
    let root = document.createElementNS(ns, 'entry');
    document.documentElement.appendChild(root);

    const href = resolve('/news/[id]', { id });

    // <id>https://2026.pgconf.dev/news/{id}</id>
    node = root.appendChild(document.createElementNS(ns, 'id'));
    node.textContent = 'https://2026.pgconf.dev' + href;

    // <updated>{item.date}</updated>
    node = root.appendChild(document.createElementNS(ns, 'updated'));
    node.textContent = item.date.format('YYYY-MM-DD[T]HH:MM:SS[Z]');

    // <author><name>{item.author}</name></author>
    node = root.appendChild(document.createElementNS(ns, 'author'));
    node = node.appendChild(document.createElementNS(ns, 'name'));
    node.textContent = item.author;

    // <title>{item.title}</title>
    node = root.appendChild(document.createElementNS(ns, 'title'));
    node.textContent = item.title;

    // <content><item.Component /></content>
    node = root.appendChild(document.createElementNS(ns, 'content'));
    node.textContent = render(item.Component).body;

    // <link rel="alternate" href="/news/{id}" />
    node = root.appendChild(document.createElementNS(ns, 'link'));
    node.setAttribute('ref', 'alternate');
    node.setAttribute('href', href);

    // <summary>{item.description}</summary>
    node = root.appendChild(document.createElementNS(ns, 'summary'));
    node.textContent = item.description;
  }

  const atom = new window.XMLSerializer().serializeToString(document);
  const text = '<?xml version="1.0" encoding="utf-8"?>' + atom;

  return new Response(text, { headers: { 'Content-Type': mimeType } });
}
