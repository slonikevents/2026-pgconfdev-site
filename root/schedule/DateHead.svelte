<script>
  const { date } = $props();
</script>

<style>
  h1 {
    margin-block: 2rem;
  }
</style>

<h1>
  <time datetime={date.toString()}>
    {date.toLocaleString('en-CA', { dateStyle: 'full' })}
  </time>
</h1>
