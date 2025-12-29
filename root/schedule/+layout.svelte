<script>
  import { resolve } from '$app/paths';
  import DateLink from './DateLink.svelte';

  const { children } = $props();
</script>

<main>
  <nav style:justify-content="center">
    <ul>
      <!-- <li> -->
      <!--   <DateLink href={resolve('/schedule/tuesday')}> -->
      <!--     Tue / 13<sup>th</sup> -->
      <!--   </DateLink> -->
      <!-- </li> -->

      <li>
        <DateLink href={resolve('/schedule/wednesday')}>
          Wed / 14<sup>th</sup>
        </DateLink>
      </li>

      <li>
        <DateLink href={resolve('/schedule/thursday')}>
          Thu / 15<sup>th</sup>
        </DateLink>
      </li>

      <!-- <li> -->
      <!--   <DateLink href={resolve('/schedule/friday')}> -->
      <!--     Fri / 16<sup>th</sup> -->
      <!--   </DateLink> -->
      <!-- </li> -->
    </ul>
  </nav>

  {@render children()}
</main>
