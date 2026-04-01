<script>
  import { SPONSOR_LIST } from '../sponsors';
</script>

<svelte:head>
  <title>Sponsors of PGConf.dev 2026</title>
  <meta
    name="description"
    content="PGConf.dev is an annual event where users, developers, and community organizers come together to focus on PostgreSQL development and community growth. This event is a strategic gathering of the PostgreSQL community that takes place before development begins."
  />
</svelte:head>

<style>
  section:where(:not(:last-child)) {
    margin-block-end: 2rem;
  }

  hr {
    margin-block-end: 2rem;
  }

  h1 {
    margin-block-end: 2rem;
  }

  h2 {
    text-align: center;
  }

  ul {
    list-style-type: none;
    padding-inline-start: 0;
    text-align: center;
  }

  li {
    margin-bottom: 1rem;
  }

  a {
    border-radius: var(--border-radius);
    display: block;
    padding: 1rem;
  }

  .gold {
    h1 {
      color: var(--gold-color);
    }

    img {
      max-height: 12rem;
    }
  }

  .silver {
    h1 {
      color: var(--silver-color);
    }

    img {
      max-height: 8rem;
    }
  }

  .bronze {
    h1 {
      color: var(--bronze-color);
    }

    ul {
      align-items: center;
      display: grid;
      gap: 1rem;
      grid-template-columns: repeat(2, 1fr);
    }

    img {
      max-height: 4rem;
    }
  }
</style>

<section class="gold">
  <h1>Gold Sponsors</h1>

  {#each SPONSOR_LIST.GOLD as {NAME, LOGO, URL, DESCRIPTION} (NAME)}
    <h2 id={NAME}>
      <a href={URL} target="_blank"><img src={LOGO} alt={NAME} /></a>
    </h2>
    <p>{DESCRIPTION}</p>
  {/each}
</section>

<hr />

<section class="silver">
  <h1>Silver Sponsors</h1>

  <ul>
    {#each SPONSOR_LIST.SILVER as {NAME, LOGO, URL} (NAME)}
      <li>
        <a href={URL} target="_blank" ><img src={LOGO} alt={NAME} /></a>
      </li>
    {/each}
  </ul>
</section>

<hr />

<section class="bronze">
  <h1>Bronze Sponsors</h1>

  <ul>
    {#each SPONSOR_LIST.BRONZE as {NAME, LOGO, URL} (NAME)}
      <li>
        <a href={URL} target="_blank"><img src={LOGO} alt={NAME} /></a>
      </li>
    {/each}
  </ul>
</section>
