<script>
  import News from './news/News.svelte';
  import Side from './Side.svelte';
  import { headlineIndex } from '$news';

  const postgresql = 'https://www.postgresql.org/';
</script>

<svelte:head>
  <title>PGConf.dev 2026</title>
  <meta
    name="description"
    content="PGConf.dev 2026 will be held on May 19–22 in Vancouver, BC to bring users, developers, and organizers together to advance PostgreSQL development."
  />
</svelte:head>

<main style="flex-basis: 56rem;">
  <h1>PGConf.dev 2026</h1>

  <!-- prettier-ignore -->
  <h2 style="text-align: center;">
    May <time datetime="2026-05-19">19</time>–<time datetime="2026-05-22">22</time>, 2026
  </h2>

  <hgroup style="text-align: center;">
    <h3>Simon Fraser University—Vancouver Campus</h3>
    <h4>Vancouver, BC, Canada</h4>
  </hgroup>

  <p style="text-align: center;">
    <a role="button" href="/attend">Register</a>
  </p>

  <p>We're headed back to Vancouver in 2026!</p>

  <p>
    PGConf.dev is where users, developers, and community organizers come
    together to focus on <a href={postgresql} target="_blank">PostgreSQL</a> development
    and community growth.
  </p>

  <p>
    Meet PostgreSQL contributors, learn about upcoming features, and discuss
    development problems with PostgreSQL enthusiasts.
  </p>

  <News index={headlineIndex} />
</main>

<Side --flex-size="16rem" />
