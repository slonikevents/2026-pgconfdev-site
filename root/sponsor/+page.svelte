<script>
  import EDB from '../logo/EDB.svg';
  import CYBERTEC from '../logo/CYBERTEC.svg';
  import { SPONSOR_URLS } from '$lib/link/sponsors';
</script>

<svelte:head>
  <title>Sponsors of PGConf.dev 2026</title>
  <meta
    name="description"
    content="PGConf.dev is an annual event where users, developers, and community organizers come together to focus on PostgreSQL development and community growth. This event is a strategic gathering of the PostgreSQL community that takes place before development begins."
  />
</svelte:head>

<h1 style="color: #b78800;">Gold Sponsors</h1>

<h2 id="edb">
  <a
    href={SPONSOR_URLS.EDB}
    target="_blank"
    style="text-decoration: none; border: none; outline: none;"
    ><img src={EDB} alt="EDB" /></a
  >
</h2>
<p>
  As the leading contributor to PostgreSQL, EDB is committed to building the
  next generation of Postgres for operators, developers, data engineers, and AI
  builders. EDB provides a modern Postgres data platform for transactional,
  analytical, and new AI workloads powered by an enhanced Postgres engine.
</p>

<h1 style="color: #707070;">Silver Sponsors</h1>
<p></p>

<h1 style="color: #8B4513;">Bronze Sponsors</h1>

<a
  href={SPONSOR_URLS.CYBERTEC}
  target="_blank"
  style="text-decoration: none; border: none; outline: none;"
>
  <img
    src={CYBERTEC}
    alt="CYBERTEC"
    style="padding-top: 1.5rem; display: block;"
  />
</a>
