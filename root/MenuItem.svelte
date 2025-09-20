<script>
  import { resolve } from '$app/paths';
  import { page } from '$app/state';

  const { Icon, href, children, ...rest } = $props();
</script>

<li>
  {#if Icon !== undefined}
    <Icon class="narrow" size="0.875em" />
  {/if}
  <a
    href={resolve(href)}
    aria-current={page.url.pathname == href ? 'page' : undefined}
    {...rest}
  >
    {@render children()}
  </a>
</li>
