<script>
  import Badge, { regTypes } from './Badge/index.js';

  let firstname = $state('');
  let lastname = $state('');
  let company = $state('');
  let regtype = $state(regTypes[0]);
  let fullpublictoken = $state('');
  let showOutline = $state(true);
</script>

<style>
  :is(input:not([type='checkbox']), select) {
    border-radius: var(--border-radius);
    border: var(--border-width) solid var(--border-color);
    font-size: inherit;
    padding: 0.5rem;
    width: 100%;
  }
</style>

<svelte:head>
  <title>Badge Preview</title>
  <meta
    name="description"
    content="Preview your conference badge for PGConf.dev 2026"
  />
</svelte:head>

<h1>Badge Preview</h1>

<form onsubmit={(e) => e.preventDefault()}>
  <p>
    <label>
      First Name
      <br />
      <input type="text" bind:value={firstname} placeholder="John" />
    </label>
  </p>

  <p>
    <label>
      Last Name
      <br />
      <input type="text" bind:value={lastname} placeholder="Doe" />
    </label>
  </p>

  <p>
    <label>
      Company
      <br />
      <input type="text" bind:value={company} placeholder="Acme Corp" />
    </label>
  </p>

  <p>
    <label>
      Registration Type
      <br />
      <select bind:value={regtype}>
        {#each regTypes as type (type)}
          <option value={type}>{type}</option>
        {/each}
      </select>
    </label>
  </p>

  <p>
    <label>
      Full Public Token
      <br />
      <input
        type="text"
        bind:value={fullpublictoken}
        placeholder="https://www.pgevents.ca/t/at/.../"
      />
    </label>
  </p>

  <p>
    <label class="flex" style:justify-content="space-between">
      Show Outline
      <input type="checkbox" bind:checked={showOutline} />
    </label>
  </p>
</form>

<article>
  <Badge
    {firstname}
    {lastname}
    {company}
    {fullpublictoken}
    {regtype}
    {showOutline}
  />
</article>
