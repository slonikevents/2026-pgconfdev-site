<script>
  import Menu from '../Menu.svelte';
  import MenuItem from '../MenuItem.svelte';

  import Side from '../Side.svelte';

  import { Building, Navigation, Tickets } from '@lucide/svelte';

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
  <MenuItem Icon={Tickets} href="/attend">Registration</MenuItem>
  <MenuItem Icon={Building} href="/attend/venue">Conference Venue</MenuItem>
  <MenuItem Icon={Navigation} href="/attend/travel">
    Travel Information
  </MenuItem>
</Menu>

<main>
  {@render children()}
</main>

<Side --flex-size="16rem" />
