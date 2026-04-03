<script>
  import { generate } from 'lean-qr';
  import { toSvgPath } from 'lean-qr/extras/svg';

  const { text, ...rest } = $props();

  const code = $derived(generate(text));
</script>

<style>
  svg {
    shape-rendering: crispEdges;
  }
</style>

<svg viewBox="0 0 {code.size} {code.size}" {...rest}>
  <path d={toSvgPath(code)} />
</svg>
