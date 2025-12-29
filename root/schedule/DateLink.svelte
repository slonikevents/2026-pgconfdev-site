<script>
  import { page } from '$app/state';
  import { CalendarDays } from '@lucide/svelte';

  const { href, children, ...rest } = $props();
</script>

<style>
  a {
    text-decoration: none;

    &[aria-current]:where(
        :not([aria-current='false'], :active, :focus, :hover)
      ) {
      color: var(--mute-color);
    }
  }
</style>

<a
  class="iconic"
  {href}
  aria-current={page.url.pathname == href ? 'date' : undefined}
  {...rest}
>
  <CalendarDays class="wide" />

  <div>
    {@render children()}
  </div>
</a>
