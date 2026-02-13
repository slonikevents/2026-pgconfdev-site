<script>
  let { on = $bindable(), children, ...rest } = $props();
</script>

<!-- @component A simple toggle button -->
<button aria-pressed={on} onclick={() => (on = !on)} {...rest}>
  {@render children()}
</button>
