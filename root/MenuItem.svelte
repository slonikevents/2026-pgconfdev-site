<script>
  import { resolve } from '$app/paths';
  import { page } from '$app/state';

  const { Icon, href, children, ...rest } = $props();
</script>

<li class="iconic">
  {#if Icon !== undefined}
    <Icon class="narrow" />
  {/if}

  <a
    href={resolve(href)}
    aria-current={page.url.pathname == href ? 'page' : undefined}
    {...rest}
  >
    {@render children()}
  </a>
</li>
