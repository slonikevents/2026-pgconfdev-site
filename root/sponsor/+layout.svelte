<script>
  import Menu from '../Menu.svelte';
  import MenuItem from '../MenuItem.svelte';
  import Side from '../Side.svelte';

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
  <MenuItem href="/sponsor/levels">Sponsorship Levels</MenuItem>
</Menu>

<main>
  {@render children()}
</main>

<Side --flex-size="16rem" />
