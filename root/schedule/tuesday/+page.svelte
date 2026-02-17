<script>
  import DateHead from '../DateHead.svelte';
  import Schedule from '../Schedule.svelte';

  const { data } = $props();
</script>

<DateHead date={data.date} />

<Schedule layout={data.layout} roster={data.roster} />
