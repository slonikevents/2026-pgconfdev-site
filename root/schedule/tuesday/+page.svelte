<script>
  import DateHead from '../DateHead.svelte';
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
  <title>Tuesday Schedule - PGConf.dev 2026</title>
  <meta
    name="description"
    content="PGConf.dev 2026 Tuesday schedule - May 19th, 2026 in Vancouver, BC."
  />
</svelte:head>

<DateHead date={data.date} />

<Schedule layout={data.layout} roster={data.roster} />
