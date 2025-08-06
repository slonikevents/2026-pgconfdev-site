<script>
  import { base } from '$app/paths';
  import { page } from '$app/state';

  import { Menu } from '@lucide/svelte';
  import { PGConf } from '$lib/logo';

  import Banner from './Banner.svelte';
  import Toggle from './Toggle.svelte';

  let about = $state();
  let attend = $state();
  let main = $state();
</script>

<style>
  header {
    line-height: 2;
  }

  #static {
    display: flex;
    gap: 1rem;
    justify-content: space-between;
  }

  menu {
    padding-inline: 1rem;
  }

  #main-menu {
    padding-inline: 0;
  }

  @media (max-width: 767px) {
    #main-menu:not([data-open='true']) {
      display: none;
    }
  }

  @media (min-width: 768px) {
    [name='main-menu'] > menu {
      padding-inline: 0;
    }
  }

  ul {
    display: flex;
    margin: 0;
    padding: 0;
  }

  li {
    list-style-type: none;
    margin: 0;
  }

  header :global(:is(a, button, summary)) {
    background-color: unset;
    border-radius: var(--border-radius);
    color: inherit;
    display: block;
    font-family: inherit;
    font-size: inherit;
    margin: 0.5rem 0.25rem;
    outline-offset: 0;
    padding: 0.5rem 0.75rem;
    text-decoration: none;

    :global(&[aria-pressed='true']),
    :global([open] > &) {
      background-color: rgba(255 255 255 / 15%);
    }

    :global(&:is(:active, :focus, :hover)) {
      background-color: rgba(255 255 255 / 70%);
      color: #033c6b;
    }
  }

  header summary {
    padding-inline-end: 2.25rem;
  }
</style>

<header>
  {#if page.route.id == '/'}<Banner />{/if}

  <nav class="matter">
    <div id="static">
      <a class="logo" href={base}><PGConf size="1.75rem" /></a>

      <ul class="wide" role="list">
        <li><Toggle bind:on={about}>About</Toggle></li>
        <li><Toggle bind:on={attend}>Attend</Toggle></li>
      </ul>

      <Toggle
        bind:on={main}
        class="narrow"
        style="padding-inline: 0.625rem"
        aria-label="Main Menu"
      >
        <Menu size="1.75rem" />
      </Toggle>
    </div>

    <menu id="main-menu" data-open={main}>
      <li>
        <details name="main-menu" bind:open={about}>
          <summary class="narrow">About the Conference</summary>

          <menu>
            <li><a href="{base}/about">What is PGConf.dev?</a></li>
            <li><a href="{base}/contact">Contact Us</a></li>
          </menu>
        </details>
      </li>

      <li>
        <details name="main-menu" bind:open={attend}>
          <summary class="narrow">Attend PGConf.dev 2026</summary>

          <menu>
            <li><a href="{base}/venue">Conference Venue</a></li>
            <li><a href="{base}/travel">Travel Information</a></li>
          </menu>
        </details>
      </li>
    </menu>
  </nav>
</header>
