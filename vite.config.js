import { defineConfig } from 'vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import lucidePreprocess from 'vite-plugin-lucide-preprocess';
import { sveltekit } from '@sveltejs/kit/vite';
import Sonda from 'sonda/sveltekit';
import postcssPresetEnv from 'postcss-preset-env';

export default defineConfig({
  build: { sourcemap: true },
  plugins: [
    enhancedImages(),
    lucidePreprocess(),
    sveltekit(),
    Sonda({ open: false }),
  ],
  css: {
    postcss: {
      plugins: [
        postcssPresetEnv({
          features: {
            'custom-selectors': true,
          },
        }),
      ],
    },
  },
});
