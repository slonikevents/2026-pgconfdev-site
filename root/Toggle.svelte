<script>
  let { on = $bindable(), children, ...rest } = $props();
</script>

<button aria-pressed={on} onclick={() => (on = !on)} {...rest}>
  {@render children()}
</button>
