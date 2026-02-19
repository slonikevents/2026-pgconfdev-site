<script>
  import { resolve } from '$app/paths';
  import {
    CalendarDays,
    CircleQuestionMark,
    HandCoins,
    Menu,
    StickyNote,
    Tickets,
    User,
  } from '@lucide/svelte';
  import { PGConf } from '$lib/logo';

  import Toggle from './Toggle.svelte';

  let main = $state();

  const register = 'https://www.pgevents.ca/events/pgconfdev2026/register';
</script>

<style>
  header {
    line-height: 2;

    :global(svg) {
      height: 1.75rem;
      vertical-align: middle;
    }
  }

  nav {
    flex-wrap: wrap;
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

    .iconic {
      column-gap: 0.5em;
      display: flex;
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
    <a href={resolve('/')}><PGConf /></a>

    <ul class="narrow" style:gap="0">
      <li>
        <a href={register} target="_blank">
          <User title="My Registration" />
        </a>
      </li>

      <li>
        <Toggle bind:on={main} aria-label="Main Menu">
          <Menu />
        </Toggle>
      </li>
    </ul>

    <menu data-open={main}>
      <li>
        <a class="iconic" href={resolve('/about')}>
          <CircleQuestionMark class="narrow" />
          <span>
            About <span class="narrow">the Conference</span>
          </span>
        </a>
      </li>

      <li>
        <a class="iconic" href={resolve('/cfp')}>
          <StickyNote class="narrow" />
          <span class="narrow">Call for Proposals</span>
          <span class="wide">CFP</span>
        </a>
      </li>

      <li>
        <a class="iconic" href={resolve('/attend')}>
          <Tickets class="narrow" />
          <span>
            Attend <span class="narrow">PGConf.dev 2026</span>
          </span>
        </a>
      </li>

      <li>
        <a class="iconic" href={resolve('/schedule/tuesday')}>
          <CalendarDays class="narrow" />
          <span class="narrow">View the</span> Schedule
        </a>
      </li>

      <li>
        <a class="iconic" href={resolve('/sponsor')}>
          <HandCoins class="narrow" />
          <span class="narrow">Sponsor the Conference</span>
          <span class="wide">Sponsors</span>
        </a>
      </li>

      <li class="wide">
        <a href={register} target="_blank">
          <User title="My Registration" />
        </a>
      </li>
    </menu>
  </nav>
</header>
