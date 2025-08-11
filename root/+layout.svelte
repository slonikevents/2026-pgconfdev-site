<script>
  import { base } from '$app/paths';

  import font from '@fontsource-variable/montserrat/files/montserrat-latin-wght-normal.woff2?url';

  import '@csstools/normalize.css';
  import '@fontsource-variable/montserrat';
  import './main.css';
  import './site.css';

  import Header from './Header.svelte';
  import Footer from './Footer.svelte';

  let { children } = $props();

  const atom = `${base}/news.atom`;
</script>

<style>
  .matter {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 1rem;
    justify-content: space-between;
    padding: 1rem;

    @media (min-width: 768px) {
      flex-direction: row;
      gap: 2rem;
      padding: 2rem;
    }
  }
</style>

<svelte:head>
  <link rel="preload" as="font" type="font/woff2" href={font} crossorigin />

  <meta name="author" content="Slonik Events Canada" />

  <link rel="alternate" type="application/atom+xml" title="News" href={atom} />

  <meta property="og:image" content="https://2026.pgconf.dev/og.png" />
  <meta property="og:type" content="website" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image" content="https://2026.pgconf.dev/twitter.png" />
  <meta name="twitter:site" content="@pgconfdev" />

  <link href="https://mastodon.social/@pgconfdev" rel="me" />
</svelte:head>

<Header />

<div class="matter">
  {@render children()}
</div>

<Footer />
