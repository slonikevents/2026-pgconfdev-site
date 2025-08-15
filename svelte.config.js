import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';

export default {
  extensions: ['.mdsvex', '.svelte'],
  kit: {
    adapter: adapter(),
    alias: { $news: 'root/news' },
    appDir: 'svelte',
    files: {
      appTemplate: 'template.html',
      lib: 'common',
      routes: 'root',
    },
  },
  preprocess: [mdsvex({ extensions: ['.mdsvex'] })],
};
