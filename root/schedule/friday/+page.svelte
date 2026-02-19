<script>
  import DateHead from '../DateHead.svelte';
  import Schedule from '../Schedule.svelte';

  const { data } = $props();
</script>

<DateHead date={data.date} />

<p style:text-align="center">Tentative Unconference Schedule</p>

<Schedule layout={data.layout} roster={data.roster} />
