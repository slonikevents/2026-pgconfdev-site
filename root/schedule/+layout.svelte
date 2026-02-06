<script>
  import Side from '../Side.svelte';

  let { children } = $props();
</script>

<style>
  @media (width >= 768px) {
    main {
      flex-basis: 56rem;
    }
  }
</style>

<main>
  {@render children()}
</main>

<Side --flex-size="16rem" />
