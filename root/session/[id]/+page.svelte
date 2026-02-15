<script>
  import { Building, Presentation, UserRound } from '@lucide/svelte';
  import { resolve } from '$app/paths';

  const { data } = $props();

  const DAYS = ['', '', 'tuesday', 'wednesday', 'thursday', 'friday'];

  const locale = 'en-CA';
  const dateFormat = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const timeFormat = { hour: 'numeric', minute: 'numeric' };
</script>

<style>
  .slot {
    text-align: center;
  }

  ul {
    justify-content: space-evenly;
    list-style-type: none;
    padding-inline: 0;
  }

  li > a {
    gap: 1rem;
    transition-property:
      background-color, color, outline-color, text-decoration-color;

    &:not(:active, :focus, :hover) {
      text-decoration-color: transparent;
    }

    :is(img, :global(svg)) {
      aspect-ratio: 1 / 1;
      border-radius: 2rem;
      border: var(--border-width) solid currentColor;
      color: var(--border-color);
      display: block;
      height: 4rem;
      object-fit: cover;
      overflow: hidden;
      width: 4rem;
    }
  }
</style>

<h1>{data.title}</h1>

{#if data.slot !== undefined}
  <p class="slot">
    <time datetime={data.slot.lower}>
      <a href={resolve(`/schedule/${DAYS[data.slot.lower.dayOfWeek]}`)}>
        {data.slot.lower.toLocaleString(locale, dateFormat)}
      </a>
      at {data.slot.lower.toLocaleString(locale, timeFormat)}
    </time>
    &ndash;
    <time datetime={data.slot.upper}>
      {data.slot.upper.toLocaleString(locale, timeFormat)}
    </time>
  </p>
{/if}

<ul class="flex">
  {#each data.speakers as { id, name, company, hasphoto512, hasphoto } (id)}
    <li>
      <a
        class="iconic"
        href={`https://www.pgevents.ca/events/pgconfdev2026/schedule/speaker/${id}`}
      >
        {#if hasphoto512}
          <img
            src={`https://www.pgevents.ca/events/speaker/${id}/photo/5/`}
            alt={name}
          />
        {:else if hasphoto}
          <img
            src={`https://www.pgevents.ca/events/speaker/${id}/photo/`}
            alt={name}
          />
        {:else}
          <UserRound />
        {/if}

        <p>{name} <br /> <small>{company}</small></p>
      </a>
    </li>
  {/each}
</ul>

<article>
  <header class="flex" style:justify-content="space-between">
    <p class="iconic">
      <Building /> <span>{data.room.roomname}</span>
    </p>

    <p class="iconic">
      <Presentation /> <span>{data.track.trackname}</span>
    </p>
  </header>

  {@html data.abstract}
</article>
