<script>
  import DateHead from '../DateHead.svelte';
  import Schedule from '../Schedule.svelte';

  const { data } = $props();
</script>

<DateHead date={data.date} />
<p>
  The schedule below shows only a subset of what will be happening on Tuesday!
</p>
<p>
  Tuesday will feature a large number of community discussion sessions, many of
  which will be open to all conference attendees. These will gradually be added
  to this schedule as we get closer to the event.
</p>

<Schedule layout={data.layout} roster={data.roster} />
