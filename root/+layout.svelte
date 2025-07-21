<script>
  import font from '@fontsource-variable/montserrat/files/montserrat-latin-wght-normal.woff2?url';

  import '@csstools/normalize.css';
  import '@fontsource-variable/montserrat';
  import './main.css';
  import './site.css';

  import Header from './Header.svelte';
  import Side from './Side.svelte';
  import Footer from './Footer.svelte';

  let { children } = $props();
</script>

<style>
  .matter {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 2rem;
    padding: 2rem;

    @media (min-width: 768px) {
      flex-direction: row;
    }
  }

  :global(main) {
    hyphens: auto;
    text-align: justify;
  }

  :global(h1) {
    text-align: center;
  }

  :global(h1 + p, .lead) {
    font-size: 1.25em;
    font-weight: 300;
  }
</style>

<svelte:head>
  <link rel="preload" as="font" type="font/woff2" href={font} crossorigin />

  <meta name="author" content="Slonik Events Canada" />
  <meta name="description" content="PGConf.dev 2026" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@pgconfdev" />

  <link href="https://mastodon.social/@pgconfdev" rel="me" />
</svelte:head>

<Header />

<div class="matter">
  <main>{@render children()}</main>
  <Side />
</div>

<Footer />
