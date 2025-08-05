<script>
  let { children, ...rest } = $props();
</script>

<style>
  div {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: space-evenly;
  }

  div > :global(*) {
    flex-basis: calc(100% / 2 - 1rem);
    margin-block-end: 0;

    @media (min-width: 480px) {
      flex-basis: calc(100% / 3 - 1rem);
    }

    @media (min-width: 1200px) {
      flex-basis: calc(100% / 4 - 1rem);
    }
  }
</style>

<div {...rest}>{@render children?.()}</div>
