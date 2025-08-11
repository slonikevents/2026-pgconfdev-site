<script>
  import { base } from '$app/paths';
  import { Calendar, Rss } from '@lucide/svelte';
  const { index } = $props();
</script>

<style>
  hgroup {
    margin-block-start: 0.25rem;
  }
</style>

{#if index.size}
  <h1>Latest News <a href="{base}/news.atom"><Rss size="0.875em" /></a></h1>
{/if}

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
