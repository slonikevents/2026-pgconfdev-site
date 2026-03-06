<script>
  import { resolve } from '$app/paths';
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

<DateHead date={data.date} />
<p>
  The schedule below shows only a subset of what will be happening on Tuesday!
</p>
<p>
  More community discussions will be added to this schedule closer to the event!
  You can still propose additional community discussion sessions to the <a
    href={resolve('/cfp')}>call for papers</a
  > until April 14, 2026!
</p>

<Schedule layout={data.layout} roster={data.roster} />
