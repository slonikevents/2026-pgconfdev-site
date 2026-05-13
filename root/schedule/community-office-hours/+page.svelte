<script>
  import Schedule from '../Schedule.svelte';

  const { data } = $props();
</script>

<style>
  :global(.schedule) {
    @media (width >= 768px) {
      display: block !important;
    }

    :global(.wide) {
      display: none !important;
    }

    :global(.narrow) {
      display: revert !important;
    }
  }
</style>

<svelte:head>
  <title>Community Office Hours - PGConf.dev 2026</title>
  <meta
    name="description"
    content="PGConf.dev 2026 Community Office Hours schedule"
  />
</svelte:head>

<h1>Community Office Hours</h1>

<p>
  Community Office Hours are located near the main entrance to the conference
  venue. Sign up for a session through our <a
    href="https://tinyurl.com/communitybooth2026"
    target="_blank">schedule spreadsheet</a
  >.
</p>

<h2 style="text-align: center;">
  <time datetime="2026-05-20">Wednesday, May 20, 2026</time>
</h2>

<Schedule layout={data.layout} roster={data.wednesday} />

<h2 style="text-align: center;">
  <time datetime="2026-05-21">Thursday, May 21, 2026</time>
</h2>

<Schedule layout={data.layout} roster={data.thursday} />
