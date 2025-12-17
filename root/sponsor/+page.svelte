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

<h1 style="color: #b78800;">Gold Sponsors</h1>

{#each SPONSOR_LIST.GOLD as sponsor (sponsor.NAME)}
  <h2 id={sponsor.NAME}>
    <a
      href={sponsor.URL}
      target="_blank"
      style="text-decoration: none; border: none; outline: none;"
      ><img src={sponsor.LOGO} alt={sponsor.NAME} /></a
    >
  </h2>
  <p>{sponsor.DESCRIPTION}</p>
{/each}

<h1 style="color: #707070;">Silver Sponsors</h1>
{#each SPONSOR_LIST.SILVER as sponsor (sponsor.NAME)}
  <h2 id={sponsor.NAME}>
    <a
      href={sponsor.URL}
      target="_blank"
      style="text-decoration: none; border: none; outline: none;"
      ><img src={sponsor.LOGO} alt={sponsor.NAME} /></a
    >
  </h2>
  <p>{sponsor.DESCRIPTION}</p>
{/each}

<h1 style="color: #8B4513;">Bronze Sponsors</h1>

<div
  style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; align-items: center;"
>
  {#each SPONSOR_LIST.BRONZE as sponsor (sponsor.NAME)}
    <h2 id={sponsor.NAME} style="margin: 0;">
      <a
        href={sponsor.URL}
        target="_blank"
        style="display: block; padding: 0.5rem;"
        ><img
          src={sponsor.LOGO}
          alt={sponsor.NAME}
          style="max-width: 100%; height: auto; max-height: 120px; object-fit: contain;"
        /></a
      >
    </h2>
  {/each}
</div>
