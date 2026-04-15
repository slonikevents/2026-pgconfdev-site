<script>
  import { Calendar } from '@lucide/svelte';

  import Side from '../Side.svelte';
</script>

<style>
  @media (width >= 768px) {
    main {
      flex-basis: 56rem;
    }
  }

  .side-by-side {
    @media (688px <= width < 768px), (width >= 992px) {
      align-items: start;
      display: flex;
      gap: 2rem;
    }
  }

  dd {
    margin-inline: 0;
  }

  main > section {
    margin-block: 2rem;
  }

  .note {
    border-inline-start: 0.25rem solid var(--border-color);
    margin-inline: 0;
    padding-inline: 1rem;

    > ul {
      padding-inline-start: 1.25rem;
    }
  }
</style>

<main>
  <h1>Call For Proposals</h1>

  <p>
    PGConf.dev is an event for PostgreSQL hackers, ecosystem developers, and
    everyone who contributes to Postgres. We are focused on creating a fun and
    constructive environment for PostgreSQL contributors to meet, collaborate,
    and learn from each other.
  </p>

  <p style:margin-block="2rem" style:text-align="center">
    <a
      href="https://www.pgevents.ca/events/pgconfdev2026/callforpapers/"
      role="button"
      target="_blank">My Proposals</a
    >
  </p>

  <div class="side-by-side">
    <aside style:flex="0 0 16rem">
      <header class="iconic" style:justify-content="space-between">
        <span>Important Dates</span>
        <Calendar />
      </header>

      <dl>
        <dt><time datetime="2026-04-14">April 14th, 2026</time></dt>
        <dd>Community Discussion &amp; Poster Session CFP Closes</dd>

        <dt><time datetime="2026-04-30">April 30th, 2026</time></dt>
        <dd>Poster Final PDF Deadline</dd>

        <dt><time datetime="2026-05-19">May 19th, 2026</time></dt>
        <dd>Conference Begins</dd>
      </dl>
    </aside>

    <p>The call for papers for PGConf.dev 2026 is now closed.</p>
  </div>

  <hr />

  <h2>Program Committee</h2>

  <li>Melanie Plageman (Microsoft)</li>
  <li>Dilip Kumar (Google)</li>
  <li>Jonathan Katz (Databricks)</li>
  <li>Paul Ramsey (Snowflake)</li>
  <li>Jacob Champion (EDB)</li>

  <h2>Tuesday Planning Committee</h2>

  <li>Claire Giordano (Microsoft)</li>
  <li>Corey Hunker (Apple)</li>
  <li>Matthias van de Meent (Databricks)</li>
  <li>Paul Jungwirth (Illuminated Computing)</li>
  <li>Robert Haas (EDB)</li>

  <h2>Postermaster</h2>

  <li>Andrey Borodin (Yandex Cloud)</li>
</main>

<Side --flex-size="16rem" />
