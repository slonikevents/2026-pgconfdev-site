<script>
  import { resolve } from '$app/paths';

  import { Menu, User } from '@lucide/svelte';
  import { PGConf } from '$lib/logo';

  import Toggle from './Toggle.svelte';

  let main = $state();

  const register = 'https://www.pgevents.ca/events/pgconfdev2026/register';
</script>

<style>
  header {
    line-height: 2;
  }

  nav {
    flex-wrap: wrap;
    margin-bottom: 0;
    row-gap: 0;
  }

  menu {
    width: 100%;

    &:where(:not([data-open='true'])) {
      display: none;
    }

    @media (width >= 768px) {
      display: flex;
      width: auto;
    }

    > li {
      margin-block-end: 0;
    }
  }

  header :global(:is(a, button)) {
    background-color: unset;
    color: inherit;
    display: block;
    font-family: inherit;
    font-size: inherit;
    margin: 0.25rem 0.25rem;
    outline-offset: 0;
    padding: 0.5rem 0.75rem;
    text-decoration: none;

    :global(&:is(:active, :focus, :hover)) {
      background-color: rgba(255 255 255 / 70%);
      color: #033c6b;
    }
  }
</style>

<header>
  <nav class="matter">
    <a href={resolve('/')}><PGConf size="1.75rem" /></a>

    <div class="flex narrow">
      <a href={register} target="_blank">
        <User
          size="1.75rem"
          title="My Registration"
          style="vertical-align: middle;"
        />
      </a>

      <Toggle
        bind:on={main}
        style="padding-inline: 0.625rem"
        aria-label="Main Menu"
      >
        <Menu size="1.75rem" style="vertical-align: middle;" />
      </Toggle>
    </div>

    <menu data-open={main}>
      <li>
        <a href={resolve('/about')}>
          About <span class="narrow">the Conference</span>
        </a>
      </li>
      <li>
        <a href={resolve('/cfp')}>
          <span class="narrow">Call for Proposals</span>
          <span class="wide">CFP</span>
        </a>
      </li>
      <li>
        <a href={resolve('/attend')}>
          Attend <span class="narrow">PGConf.dev 2026</span>
        </a>
      </li>
      <li>
        <a href={resolve('/sponsor')}> Sponsors </a>
      </li>
      <li class="wide">
        <a href={register} target="_blank">
          <User
            size="1.5rem"
            title="My Registration"
            style="vertical-align: text-bottom;"
          />
        </a>
      </li>
    </menu>
  </nav>
</header>
