<script>
  import { Temporal } from '@js-temporal/polyfill';
  import { Slot } from '$lib/slot';

  // Return the time of the datetime in HH:mm format
  function asTime(datetime) {
    return datetime.toPlainTime().toString({ smallestUnit: 'minute' });
  }

  // Return the row grid line to locate the datetime
  function timeId(datetime) {
    return `time-${asTime(datetime).replace(/:/g, '')}`;
  }

  const { layout, roster } = $props();

  // const base = 'https://www.pgevents.ca/events/pgconfdev2025/schedule/session/';

  // Group sessions in the roster into objects with the schema {
  //   slot: "{lower} {upper}", sessions: [...],
  // }, where each object is a cohort of sessions with the same slot. Then,
  // remove the `slot` attribute from each session so that we don't access it
  // by accident.
  const [schedule, timeline] = (function (roster) {
    const schedule = [];

    let lastSlot = undefined;
    for (const { slot, ...rest } of roster) {
      if (schedule.length && schedule.at(-1).slot.equals(slot)) {
        schedule.at(-1).sessions.push(rest);
        continue;
      }

      if (lastSlot && slot.overlaps(lastSlot)) {
        schedule.push({ slot, narrow: true, sessions: [rest] });
        continue;
      }

      schedule.push({ slot: (lastSlot = slot), sessions: [rest] });
    }

    // Generate the timeline, i.e. each time, in order, that's either a slot's
    // lower bound or upper bound.
    const timeline = Array.from(
      new Set(schedule.flatMap(({ slot }) => slot.toStringCouple())),
    )
      .map((string) => Temporal.PlainDateTime.from(string))
      .sort((a, b) => Temporal.PlainDateTime.compare(a, b));

    const atomic = timeline
      .slice(1)
      .map((time, i) => new Slot(timeline[i], time));
    for (const slot of atomic) {
      // Don't emit a slot that's shorter than 15 minutes
      if (slot.length().total('minutes') < 15) continue;

      // Don't emit a slot that overlaps another slot
      if (schedule.some((item) => !item.narrow && slot.overlaps(item.slot)))
        continue;

      // Don't emit a slot that doesn't overlap any session
      if (!schedule.some((item) => slot.overlaps(item.slot))) continue;

      schedule.push({ slot, sessions: [] });
    }

    return [schedule.sort((a, b) => a.slot.compare(b.slot)), timeline];
  })(roster.sort((a, b) => a.slot.compare(b.slot)));
</script>

<style>
  li {
    margin-block: 1rem 0;
  }

  ul {
    color: var(--mute-color);
    list-style-type: none;
    padding-inline-start: 0;

    @media (width >= 768px) {
      column-gap: 1rem;
      display: grid;
    }
  }

  :is(:where(li).room, .slot) {
    color: var(--h6-color);
    font-family: var(--header-font);
    text-align: center;
    white-space: nowrap;
  }

  li.room {
    margin-block-start: 0;
  }

  li.slot {
    margin-block-start: calc(1.5rem + var(--border-width));
  }

  .item {
    border-radius: var(--border-radius);
    border: var(--border-width) solid var(--border-color);
    padding: 0.5rem;

    a {
      color: inherit;
    }

    a:not(:is(:hover, :active, :focus)) {
      text-decoration: none;
    }
  }

  :not(li).room {
    border-radius: var(--border-radius);
    border: var(--border-width) solid currentColor;
    float: right;
    margin-inline-start: 1rem;
    padding-inline: 0.25rem;
    user-select: none;
  }
</style>

<!--
  Generate the grid using grid-template-{areas-columns,rows}. The leftmost
  column is reserved for the slot label; each subsequent column is a room:

    grid-template-areas: slot room-0 room-1 ...
    grid-template-columns: auto 1fr 1fr ...

  The topmost row is reserved for room names. Subsequently, there is one named
  grid line for each time and one grid row for each slot:

    grid-template-rows: auto [time-0800] auto [time-0850] auto ...
-->

<!-- prettier-ignore -->
<ul
  style:grid-template-areas="&quot;slot {
    layout.map((_, i) => `room-${i}`).join(' ')
  }&quot;"
  style:grid-template-columns="auto {
    Array(layout.length).fill('1fr').join(' ')
  }"
  style:grid-template-rows="auto {
    timeline.map((datetime) => `[${timeId(datetime)}]`).join(' auto ')
  }"
>
  {#each layout as name, i (name)}
    <li class="room wide" style:grid-area="room-{i}">{name}</li>
  {/each}

  <!-- eslint-disable-next-line svelte/require-each-key -->
  {#each schedule as { slot, narrow, sessions }}
    {@const { lower, upper } = slot}

    <li
      class={{ slot: true, narrow: narrow, wide: !sessions.length }}
      style:grid-column="slot"
      style:grid-row="{timeId(lower)} / {timeId(upper)}"
    >
      <time>{asTime(lower)}</time>–<time>{asTime(upper)}</time>
    </li>

    <!-- eslint-disable-next-line svelte/require-each-key -->
    {#each sessions as { name, note, span, room, style = {} }}
      <li
        class="item"
        style:grid-column="room-{span[0]} / room-{span[1]}"
        style:grid-row="{timeId(lower)} / {timeId(upper)}"
        style:background-color={style['background-color']}
        style:color={style.color}
      >
        {#if room !== undefined}
          <span
            class={{
              room: true,
              narrow: span[0] == span[1] && room == layout[span[0]],
            }}
          >
            {room}
          </span>
        {/if}

        {name}

        {#if note}
          <br /> <small>({note})</small>
        {/if}
      </li>
    {/each}
  {/each}
</ul>
