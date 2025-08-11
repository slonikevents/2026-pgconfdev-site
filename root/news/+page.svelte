<script>
  import { base } from '$app/paths';
  import { Calendar, Rss } from '@lucide/svelte';
  import { index } from '$news';
</script>

<style>
  article {
    margin-block-start: 2rem;
  }

  hgroup {
    margin-block-start: 0.25rem;
  }
</style>

<svelte:head>
  <title>News - PGConf.dev 2026</title>
  <meta name="description" content="Latest news from PGConf.dev 2026" />
</svelte:head>

<h1>Latest News <a href="{base}/news.atom"><Rss size="0.875em" /></a></h1>

{#each index as [id, { Component, title, date }] (id)}
  <article>
    <header>
      <hgroup>
        <h4><a href="{base}/news/{id}">{title}</a></h4>
        <p>
          <Calendar size="0.875em" />
          <date datetime={date.format('YYYY-MM-DD')}>{date.format('LL')}</date>
        </p>
      </hgroup>
    </header>

    <Component />
  </article>
{/each}
