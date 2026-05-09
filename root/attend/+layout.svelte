<script>
  import Menu from '../Menu.svelte';
  import MenuItem from '../MenuItem.svelte';

  import Side from '../Side.svelte';

  import {
    Building,
    HandHelping,
    Navigation,
    partyPopper,
  } from '@lucide/svelte';

  let { children } = $props();
</script>

<style>
  @media (width >= 768px) {
    main {
      flex-basis: 40rem;
    }
  }
</style>

<Menu --flex-size="12rem">
  <MenuItem Icon={Building} href="/attend">Conference Venue</MenuItem>
  <MenuItem Icon={partyPopper} href="/attend/social">Social Events</MenuItem>
  <MenuItem Icon={Navigation} href="/attend/travel">
    Travel Information
  </MenuItem>
  <!--
  <MenuItem Icon={HandCoins} href="/attend/travel-grant">Travel Grant</MenuItem>
  -->
  <MenuItem Icon={HandHelping} href="/attend/volunteer">Volunteer</MenuItem>
</Menu>

<main>
  {@render children()}
</main>

<Side --flex-size="16rem" />
