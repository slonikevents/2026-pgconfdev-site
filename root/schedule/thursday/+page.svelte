<script>
  import DateHead from '../DateHead.svelte';
  import Schedule from '../Schedule.svelte';

  const { data } = $props();
</script>

<svelte:head>
  <title>Thursday Schedule - PGConf.dev 2026</title>
  <meta
    name="description"
    content="PGConf.dev 2026 Thursday schedule - May 21st, 2026 in Vancouver, BC."
  />
</svelte:head>

<DateHead date={data.date} />

<p>In-person commitfest in Xerox (Room 1500)</p>

<Schedule layout={data.layout} roster={data.roster} />
