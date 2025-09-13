<script>
  let { children } = $props();
</script>

<style>
  nav {
    margin-block-end: 0;

    @media (width >= 768px) {
      flex-basis: var(--flex-size);
    }
  }

  ul {
    width: 100%;

    @media (width < 768px) {
      border-block-end: var(--border-width) solid var(--border-color);
      column-gap: 2rem;
      justify-content: space-evenly;
      padding-block-end: 2rem;
    }

    @media (width >= 768px) {
      border-inline-end: var(--border-width) solid var(--border-color);
      display: unset;
      padding-inline-end: 2rem;

      :global(> li:where(:not(:last-child))) {
        margin-block-end: 1rem;
      }

      :global(:--link) {
        display: block;
      }

      :global(:--button) {
        text-align: left;
        width: 100%;
      }
    }
  }
</style>

<nav><ul>{@render children()}</ul></nav>
