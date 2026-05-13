<script>
  import { resolve } from '$app/paths';
  import DateLink from './DateLink.svelte';

  const { children } = $props();
</script>

<main>
  <nav style:justify-content="center">
    <ul>
      <li>
        <DateLink href={resolve('/schedule/tuesday')}>
          Tue / 19<sup>th</sup>
        </DateLink>
      </li>

      <li>
        <DateLink href={resolve('/schedule/wednesday')}>
          Wed / 20<sup>th</sup>
        </DateLink>
      </li>

      <li>
        <DateLink href={resolve('/schedule/thursday')}>
          Thu / 21<sup>th</sup>
        </DateLink>
      </li>

      <li>
        <DateLink href={resolve('/schedule/friday')}>
          Fri / 22<sup>th</sup>
        </DateLink>
      </li>

      <li>
        <DateLink href={resolve('/schedule/community-office-hours')}>
          Community Office Hours
        </DateLink>
      </li>
    </ul>
  </nav>

  {@render children()}
  <footer>
    <p>
      This schedule is also available in <a
        href="https://www.pgevents.ca/events/pgconfdev2026/schedule/ical/"
        >ICalendar</a
      >
      format as well as an
      <a href="https://www.pgevents.ca/events/pgconfdev2026/schedule.xml">XML</a
      > format suitable for scheduling apps.
    </p>
  </footer>
</main>
