<script lang="ts">
  let { data } = $props();
  const formatAmount = function (v) {
    const num = Number(v.replace('CAD ', ''));
    return Intl.NumberFormat('en-CA', {
      style: 'currency',
      currency: 'CAD',
      minimumFractionDigits: 0,
    }).format(num);
  };
</script>

<svelte:head>
  <title>Sponsorship Opportunities - PGConf.dev 2026</title>
  <meta name="description" content="Call for Sponsors." />
</svelte:head>
<h1>Sponsorship levels</h1>

<p>
  PGConf.dev is an annual event where users, developers, and community
  organizers come together to focus on PostgreSQL development and community
  growth. This event is a strategic gathering of the PostgreSQL community that
  takes place before development begins.
</p>

<p>
  Wondering what you should sponsor? Here are some questions to get you started:
</p>
<ul>
  <li>PGConf.dev is not your typical PostgreSQL event!</li>

  <li>
    Your sponsorship directly impacts ongoing development of PostgreSQL,
    allowing of the PostgreSQL community leaders to meet in a single location
    and plan future releases.
  </li>
  <li>
    Your sponsorship helps the PostgreSQL community to grow future community
    leaders and help them take on new roles in the community!
  </li>
</ul>

<article>
  <header>Important Dates</header>

  <dl>
    <dt><time datetime="2026-03-23">March 23, 2026</time></dt>
    <dd>Deadline physical signage/item benefits</dd>

    <dt><time datetime="2026-05-19">May 19th, 2026</time></dt>
    <dd>Conference Begins</dd>
  </dl>
</article>

<p style="margin-block-start: 2rem; text-align: center;">
  <a
    href="https://www.pgevents.ca/events/sponsor/signup/pgconfdev2026/"
    role="button">Signup</a
  >
</p>

{#each data.sponsorLevels as level (level.name)}
  <h2>{level.name} {formatAmount(level.cost)} CAD</h2>
  <ul>
    {#each level.benefits as benefit (benefit.name)}
      <li>
        <strong>{benefit.name}</strong>
        {@html data.benefits[benefit.id]}
      </li>
    {/each}
  </ul>
{/each}
