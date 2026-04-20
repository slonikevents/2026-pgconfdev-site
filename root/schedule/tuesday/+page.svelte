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

<DateHead date={data.date} />

<Schedule layout={data.layout} roster={data.roster} />
