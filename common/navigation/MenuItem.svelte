<script>
  import { resolve } from '$app/paths';
  import { page } from '$app/state';

  const { href, children, ...rest } = $props();
</script>

<li>
  <a
    href={resolve(href)}
    aria-current={page.url.pathname == href ? 'page' : undefined}
    {...rest}
  >
    {@render children()}
  </a>
</li>
