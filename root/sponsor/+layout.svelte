<script>
  import Menu from '../Menu.svelte';
  import MenuItem from '../MenuItem.svelte';
  import Side from '../Side.svelte';

  import { ChartBarDecreasing, List } from '@lucide/svelte';

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
  <MenuItem Icon={List} href="/sponsor">List of Sponsors</MenuItem>
  <MenuItem Icon={ChartBarDecreasing} href="/sponsor/levels">
    Sponsorship Levels
  </MenuItem>
</Menu>

<main>
  {@render children()}
</main>

<Side --flex-size="16rem" />
