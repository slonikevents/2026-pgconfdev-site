import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter(),
    appDir: 'svelte',
    files: {
      appTemplate: 'template.html',
      lib: 'common',
      routes: 'root',
    },
  },
};
