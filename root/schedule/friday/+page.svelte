<script>
  import DateHead from '../DateHead.svelte';
  import Schedule from '../Schedule.svelte';

  const { data } = $props();
</script>

<svelte:head>
  <title>Friday Schedule - PGConf.dev 2026</title>
  <meta
    name="description"
    content="PGConf.dev 2026 Friday schedule - May 22nd, 2026 in Vancouver, BC."
  />
</svelte:head>

<DateHead date={data.date} />

<p style:text-align="center">Tentative Unconference Schedule</p>

<Schedule layout={data.layout} roster={data.roster} />
