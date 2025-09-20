<script>
  import Menu from '../Menu.svelte';
  import MenuItem from '../MenuItem.svelte';
  import Side from '../Side.svelte';

  import { CircleQuestionMark, Mail, Scale } from '@lucide/svelte';

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
  <MenuItem Icon={CircleQuestionMark} href="/about">
    What is PGConf.dev?
  </MenuItem>
  <MenuItem Icon={Scale} href="/about/code-of-conduct">
    Code of Conduct
  </MenuItem>
  <MenuItem Icon={Mail} href="/about/contact-us">Contact Us</MenuItem>
</Menu>

<main>
  {@render children()}
</main>

<Side --flex-size="16rem" />
