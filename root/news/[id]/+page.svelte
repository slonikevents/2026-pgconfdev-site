<script>
  import { Calendar } from '@lucide/svelte';

  const { data } = $props();
  const { Component, title, description, date } = data;
</script>

<svelte:head>
  <title>{title} - PGConf.dev</title>
  <meta name="description" content={description} />
</svelte:head>

<main>
  <hgroup>
    <h2>{title}</h2>
    <p>
      <Calendar size="0.875rem" />
      <date datetime={date.format('YYYY-MM-DD')}>{date.format('LL')}</date>
    </p>
  </hgroup>

  <Component />
</main>
