<script>
  import { resolve } from '$app/paths';
  import DateHead from '../DateHead.svelte';

  const { data } = $props();

  function asTime(datetime) {
    return datetime.toPlainTime().toString({ smallestUnit: 'minute' });
  }

  // Group sessions by slot
  const schedule = (function (roster) {
    const groups = [];

    for (const { slot, ...rest } of roster) {
      const existing = groups.find((g) => g.slot.equals(slot));
      if (existing) {
        existing.sessions.push(rest);
      } else {
        groups.push({ slot, sessions: [rest] });
      }
    }

    return groups.sort((a, b) => a.slot.compare(b.slot));
  })(data.roster.sort((a, b) => a.slot.compare(b.slot)));
</script>

<style>
  .schedule {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .timeslot {
    border: var(--border-width) solid var(--border-color);
    border-radius: var(--border-radius);
    overflow: hidden;
  }

  .timeslot-header {
    color: var(--h6-color);
    font-family: var(--header-font);
    padding: 0.5rem 0.75rem;
    border-bottom: var(--border-width) solid var(--border-color);
    background: var(--bg-mute-color, var(--bg-color));
  }

  .sessions {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  .session {
    padding: 0.5rem 0.75rem;
  }

  .session + .session {
    border-top: var(--border-width) solid var(--border-color);
  }

  .session a {
    color: inherit;
  }

  .session a:not(:is(:hover, :active, :focus)) {
    text-decoration: none;
  }

  .room-label {
    border-radius: var(--border-radius);
    border: var(--border-width) solid currentColor;
    color: var(--h6-color);
    font-family: var(--header-font);
    font-size: 0.85em;
    padding-inline: 0.25rem;
    margin-inline-end: 0.5rem;
    user-select: none;
    white-space: nowrap;
  }

  .session small {
    color: var(--mute-color);
  }
</style>

<DateHead date={data.date} />
<p>
  The schedule below shows only a subset of what will be happening on Tuesday!
</p>
<p>
  Tuesday will feature a large number of community discussion sessions, many of
  which will be open to all conference attendees. These will gradually be added
  to this schedule as we get closer to the event.
</p>

<div class="schedule">
  <!-- eslint-disable-next-line svelte/require-each-key -->
  {#each schedule as { slot, sessions }}
    <div class="timeslot">
      <div class="timeslot-header">
        <time>{asTime(slot.lower)}</time>–<time>{asTime(slot.upper)}</time>
      </div>

      <ul class="sessions">
        <!-- eslint-disable-next-line svelte/require-each-key -->
        {#each sessions as { id, name, note, room, style = { } }}
          <li
            class="session"
            style:background-color={style['background-color']}
            style:color={style.color}
          >
            {#if room}
              <span class="room-label">{room}</span>
            {/if}

            <svelte:element
              this={id ? 'a' : 'span'}
              href={id && resolve(`/session/${id}`)}
            >
              {name}
            </svelte:element>

            {#if note}
              <br /> <small>({note})</small>
            {/if}
          </li>
        {/each}
      </ul>
    </div>
  {/each}
</div>
