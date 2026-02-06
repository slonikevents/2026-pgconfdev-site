<script>
  import moment from 'moment';
  import { ArrowBigLeft, ArrowBigRight } from '@lucide/svelte';

  // Return the name of the grid (row) line that corresponds to the time.
  function timeId(time) {
    return `time-${time.replace(/:/g, '')}`;
  }

  const { data } = $props();
  const { date, layout, roster } = data;

  const base = 'https://www.pgevents.ca/events/pgconfdev2025/schedule/session/';

  // Group sessions in the roster into objects with the schema {
  //   slot: "{lower} {upper}", sessions: [...],
  // }, where each object is a cohort of sessions with the same slot. Then,
  // remove the `slot` attribute from each session so that we don't access it
  // by accident.
  const schedule = [...Map.groupBy(roster, ({ slot }) => slot)].map(
    ([slot, sessions]) => ({
      slot,
      sessions: sessions.map(({ slot, ...session }) => session),
    }),
  );

  // Loop through each cohort and mark it as "narrow-slot" if we wouldn't label
  // its slot in the wide (grid) view. We always label the first slot. Then,
  // each subsequent slot is labeled if it doesn't overlap an already labeled
  // slot.
  let [, latest] = schedule[0].slot.split(' ');
  for (const item of schedule.slice(1)) {
    if (item.slot.split(' ')[0] < latest) item.kind = 'narrow-slot';
    else [, latest] = item.slot.split(' ');
  }

  // Generate the timeline, i.e. each time, in order, that's either a slot's
  // lower bound or upper bound.
  const timeline = Array.from(
    new Set(schedule.flatMap(({ slot }) => slot.split(' '))),
  ).sort();

  // For each synthetic slot, i.e. a slot that must be labeled in the wide
  // (grid) view, despite the fact that no session corresponds to that slot,
  // append an element { slot: ..., kind: 'wide-slot' }.
  schedule.push(
    // Create a list of atomic slots, i.e. an Array in the format [lower,
    // upper], where lower and upper are the lower and upper time bounds of the
    // slot, and each slot can't be subdivided.
    ...timeline
      .slice(1)
      .map((time, i) => [timeline[i], time])
      // It must overlap some session (don't label a period of time that's
      // insignificant).
      .filter(([lower, upper]) =>
        schedule.some(
          ({ slot }) =>
            lower >= slot.split(' ')[0] && upper <= slot.split(' ')[1],
        ),
      )
      // It can't be a slot that already appears in the wide (grid) view
      .filter(
        ([lower, upper]) =>
          !schedule.find(
            ({ slot, kind }) => !kind && slot == `${lower} ${upper}`,
          ),
      )
      // And lastly, it must be greater than or equal to 15 minutes in duration
      .filter(
        ([lower, upper]) =>
          moment.duration(upper) - moment.duration(lower) >= 15 * 60 * 1000,
      )
      .map(([lower, upper]) => ({
        slot: `${lower} ${upper}`,
        kind: 'wide-slot',
      })),
  );
</script>

<style>
  h1 {
    align-items: baseline;
    display: flex;
    gap: 1rem;
    justify-content: space-between;
  }

  .slot {
    grid-column: time;
    margin-bottom: 1rem;
    padding: 0.5rem;
    text-align: center;
    white-space: nowrap;
  }

  .room {
    text-align: center;
  }

  @media (width >= 1200px) {
    .schedule {
      column-gap: 1rem;
      display: grid;
    }

    .narrow-slot {
      display: none;
    }
  }

  @media (width < 1200px) {
    .room {
      display: none;
    }

    .wide-slot {
      display: none;
    }
  }

  li {
    border-radius: var(--border-radius);
    border: var(--border-width) solid var(--border-color);
    list-style: none;
    margin-bottom: 1rem;
    padding: 0.5rem;

    a:not(:is(:hover, :active, :focus)) {
      text-decoration: none;
    }
  }
</style>

<h1>
  <ArrowBigLeft />

  <time datetime={date.toLocaleDateString('en-CA')}>
    {date.toLocaleDateString('en-CA', { dateStyle: 'full' })}
  </time>

  <ArrowBigRight />
</h1>

<!-- prettier-ignore -->
<div class="schedule"
  style:grid-template-areas="&quot;time {
    layout.map((_, i) => `room-${i}`).join(' ')
  }&quot;"
  style:grid-template-columns="auto {
    '1fr '.repeat(layout.length).trimEnd()
  }"
  style:grid-template-rows="auto {
    timeline.flatMap((time) => [`[${timeId(time)}]`, 'auto']).join(' ')
  }"
>
  {#each layout as name, i}
    <h4 class="room" style:grid-area="room-{i}">{name}</h4>
  {/each}

  {#each schedule as {slot, kind, sessions}}
    {@const [lower, upper] = slot.split(' ')}

    <div
      class={['slot', kind]}
      style:grid-row="{timeId(lower)} / {timeId(upper)}"
    >
      <time>{lower}</time>–<time>{upper}</time>
    </div>

    {#each sessions as {id, name, span}}
      <li
        style:grid-column="room-{span[0]} / room-{span[1]}"
        style:grid-row="{timeId(lower)} / {timeId(upper)}"
      >
        <a href={new URL(id, base)} target="_blank">{name}</a>
      </li>
    {/each}
  {/each}
</div>
