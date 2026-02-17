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
          Tu / 19<sup>th</sup>
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

      <!-- <li> -->
      <!--   <DateLink href={resolve('/schedule/friday')}> -->
      <!--     Fri / 22<sup>th</sup> -->
      <!--   </DateLink> -->
      <!-- </li> -->
    </ul>
  </nav>

  {@render children()}
</main>
