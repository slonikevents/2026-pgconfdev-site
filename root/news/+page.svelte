<script>
  import { index } from '$news';
  import News from './News.svelte';
</script>

<svelte:head>
  <title>News - PGConf.dev 2026</title>
  <meta name="description" content="Latest news from PGConf.dev 2026" />
</svelte:head>

<News {index} />
