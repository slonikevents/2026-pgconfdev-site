<script>
  let { data } = $props();
</script>

<style>
  section {
    margin-block-start: 2rem;

    &:where(:not(:last-child)) {
      margin-block-end: 2rem;
    }
  }

  section + section {
    border-block-start: var(--border-width) solid var(--border-color);
    padding-block-start: 2rem;
  }

  h2 {
    text-align: center;
  }
</style>

<svelte:head>
  <title>Sponsor Job Listings - PGConf.dev 2026</title>
  <meta
    name="description"
    content="Job listings from PGConf.dev 2026 sponsors."
  />
</svelte:head>

<h1>Job Listings</h1>

{#each data.sponsors as { sponsor, jobClaims } (sponsor.name)}
  <section>
    <h2>
      <a href={sponsor.url} target="_blank">
        {#if sponsor.logo}
          <img src={sponsor.logo} alt={sponsor.name} />
        {:else}
          {sponsor.name}
        {/if}
      </a>
    </h2>
    {#each jobClaims as claim, i (i)}
      <article>{@html claim}</article>
    {/each}
  </section>
{/each}
