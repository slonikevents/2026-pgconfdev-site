<script>
  let { name, source, children, ...rest } = $props();
</script>

<style>
  figure {
    border-radius: var(--border-radius);
    border: var(--border-width) solid var(--border-color);
    overflow: hidden;
  }

  figcaption {
    font-family: var(--header-font);
    margin: 0.5rem;
    text-align: start;
  }
</style>

<figure {...rest}>
  {#if source}
    <enhanced:img src={source} alt={name} />
  {/if}
  <figcaption>
    {name}
    {#if children}
      <br />
      <small>{@render children()}</small>
    {/if}
  </figcaption>
</figure>
