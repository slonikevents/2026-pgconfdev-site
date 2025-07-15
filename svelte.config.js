import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter(),
    files: {
      appTemplate: 'template.html',
      lib: 'common',
      routes: 'root',
    },
    paths: {
      base: '/2026-pgconfdev-site',
    },
  },
};
