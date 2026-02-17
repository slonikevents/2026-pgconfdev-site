<script>
  import DateHead from '../DateHead.svelte';
  import Schedule from '../Schedule.svelte';

  const { data } = $props();
</script>

<DateHead date={data.date} />

<p>In-person commitfest in Xerox (Room 1500)</p>

<Schedule layout={data.layout} roster={data.roster} />
