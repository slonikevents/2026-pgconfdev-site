<script>
  import { base } from '$app/paths';
  import Side from '../Side.svelte';
</script>

<style>
  @media (width >= 768px) {
    main {
      flex-basis: 56rem;
    }
  }

  .posters {
    display: grid;
    gap: 1.5rem;
    list-style: none;
    padding-inline-start: 0;

    @media (width >= 540px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (width >= 900px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .posters > li {
    margin-bottom: 0;
  }

  article {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 0;
    overflow: hidden;

    .thumb {
      /* A1 portrait ratio: 594 × 841 mm */
      aspect-ratio: 594 / 841;
      background: var(--stripe-background-color);
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      border-block-end: var(--border-width) solid var(--region-border-color);

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top;
        display: block;
        transition-property: opacity;

        &:hover {
          opacity: 0.85;
        }
      }
    }

    .body {
      display: flex;
      flex-direction: column;
      flex: 1;
      padding: 0.75rem;
      gap: 0.25rem;
    }

    h4 {
      font-size: 1rem;
      margin: 0;
      flex: 1;
    }

    a[role='button'] {
      align-self: flex-start;
      font-size: 0.8rem;
      padding: 0.3rem 0.6rem;
      margin-top: 0.5rem;
    }
  }
</style>

<svelte:head>
  <title>Poster Session – PGConf.dev 2026</title>
  <meta
    name="description"
    content="PGConf.dev 2026 Poster Session: explore posters showcasing PostgreSQL-related projects, research, and community work."
  />
</svelte:head>

<main>
  <h1>Poster Session</h1>

  <p>
    Welcome to the PGConf.dev 2026 Poster Session! Here you can explore posters
    showcasing PostgreSQL-related work, projects, and community initiatives.
    This is the online version — the physical posters will be on display at the
    conference venue throughout the event.
  </p>

  <ul class="posters">
    <li>
      <article>
        <a class="thumb" href="{base}/posters/dbconform.pdf" target="_blank">
          <img
            src="{base}/posters/thumbs/dbconform-1.jpg"
            alt="DBConform poster preview"
          />
        </a>
        <div class="body">
          <h4>DBConform</h4>
          <a role="button" href="{base}/posters/dbconform.pdf" target="_blank"
            >View PDF</a
          >
        </div>
      </article>
    </li>

    <li>
      <article>
        <a class="thumb" href="{base}/posters/dns-poster.pdf" target="_blank">
          <img
            src="{base}/posters/thumbs/dns-poster-1.jpg"
            alt="1 cluster == 1 DNS record poster preview"
          />
        </a>
        <div class="body">
          <h4>1 cluster == 1 DNS record</h4>
          <a role="button" href="{base}/posters/dns-poster.pdf" target="_blank"
            >View PDF</a
          >
        </div>
      </article>
    </li>

    <li>
      <article>
        <a class="thumb" href="{base}/posters/hackorum.png" target="_blank">
          <img
            src="{base}/posters/thumbs/hackorum-1.jpg"
            alt="Hackorum poster preview"
          />
        </a>
        <div class="body">
          <h4>Hackorum</h4>
          <a role="button" href="{base}/posters/hackorum.png" target="_blank"
            >View</a
          >
        </div>
      </article>
    </li>

    <li>
      <article>
        <a class="thumb" href="{base}/posters/oidc.png" target="_blank">
          <img
            src="{base}/posters/thumbs/oidc-1.jpg"
            alt="OIDC poster preview"
          />
        </a>
        <div class="body">
          <h4>OIDC</h4>
          <a role="button" href="{base}/posters/oidc.png" target="_blank"
            >View</a
          >
        </div>
      </article>
    </li>

    <li>
      <article>
        <a class="thumb" href="{base}/posters/tde.png" target="_blank">
          <img src="{base}/posters/thumbs/tde-1.jpg" alt="TDE poster preview" />
        </a>
        <div class="body">
          <h4>TDE</h4>
          <a role="button" href="{base}/posters/tde.png" target="_blank">View</a
          >
        </div>
      </article>
    </li>

    <li>
      <article>
        <a class="thumb" href="{base}/posters/ivm.pdf" target="_blank">
          <img
            src="{base}/posters/thumbs/ivm-1.jpg"
            alt="Incremental View Maintenance poster preview"
          />
        </a>
        <div class="body">
          <h4>Incremental View Maintenance</h4>
          <a role="button" href="{base}/posters/ivm.pdf" target="_blank"
            >View PDF</a
          >
        </div>
      </article>
    </li>

    <li>
      <article>
        <a class="thumb" href="{base}/posters/jimus.pdf" target="_blank">
          <img
            src="{base}/posters/thumbs/jimus-1.jpg"
            alt="RDF Foreign Data Wrapper poster preview"
          />
        </a>
        <div class="body">
          <h4>RDF Foreign Data Wrapper</h4>
          <a role="button" href="{base}/posters/jimus.pdf" target="_blank"
            >View PDF</a
          >
        </div>
      </article>
    </li>

    <li>
      <article>
        <a class="thumb" href="{base}/posters/oape.pdf" target="_blank">
          <img
            src="{base}/posters/thumbs/oape-1.jpg"
            alt="OAPE poster preview"
          />
        </a>
        <div class="body">
          <h4>OAPE</h4>
          <a role="button" href="{base}/posters/oape.pdf" target="_blank"
            >View PDF</a
          >
        </div>
      </article>
    </li>

    <li>
      <article>
        <a class="thumb" href="{base}/posters/pgperffarm.pdf" target="_blank">
          <img
            src="{base}/posters/thumbs/pgperffarm-1.jpg"
            alt="PG Performance Farm poster preview"
          />
        </a>
        <div class="body">
          <h4>PG Performance Farm</h4>
          <a role="button" href="{base}/posters/pgperffarm.pdf" target="_blank"
            >View PDF</a
          >
        </div>
      </article>
    </li>

    <li>
      <article>
        <a class="thumb" href="{base}/posters/posette.pdf" target="_blank">
          <img
            src="{base}/posters/thumbs/posette-1.jpg"
            alt="POSETTE poster preview"
          />
        </a>
        <div class="body">
          <h4>POSETTE: An Event for Postgres</h4>
          <a role="button" href="{base}/posters/posette.pdf" target="_blank"
            >View PDF</a
          >
        </div>
      </article>
    </li>

    <li>
      <article>
        <a
          class="thumb"
          href="{base}/posters/postgres-contrib.pdf"
          target="_blank"
        >
          <img
            src="{base}/posters/thumbs/postgres-contrib-1.jpg"
            alt="postgres-contrib.org poster preview"
          />
        </a>
        <div class="body">
          <h4>postgres-contrib.org</h4>
          <a
            role="button"
            href="{base}/posters/postgres-contrib.pdf"
            target="_blank">View PDF</a
          >
        </div>
      </article>
    </li>

    <li>
      <article>
        <a class="thumb" href="{base}/posters/review.pdf" target="_blank">
          <img
            src="{base}/posters/thumbs/review-1.jpg"
            alt="Review poster preview"
          />
        </a>
        <div class="body">
          <h4>Patch Review Framework</h4>
          <a role="button" href="{base}/posters/review.pdf" target="_blank"
            >View PDF</a
          >
        </div>
      </article>
    </li>

    <li>
      <article>
        <a class="thumb" href="{base}/posters/rpr.pdf" target="_blank">
          <img src="{base}/posters/thumbs/rpr-1.jpg" alt="RPR poster preview" />
        </a>
        <div class="body">
          <h4>RPR</h4>
          <a role="button" href="{base}/posters/rpr.pdf" target="_blank"
            >View PDF</a
          >
        </div>
      </article>
    </li>

    <li>
      <article>
        <a class="thumb" href="{base}/posters/stir.pdf" target="_blank">
          <img
            src="{base}/posters/thumbs/stir-1.jpg"
            alt="STIR poster preview"
          />
        </a>
        <div class="body">
          <h4>STIR</h4>
          <a role="button" href="{base}/posters/stir.pdf" target="_blank"
            >View PDF</a
          >
        </div>
      </article>
    </li>

    <li>
      <article>
        <a
          class="thumb"
          href="{base}/posters/talking-postgres.pdf"
          target="_blank"
        >
          <img
            src="{base}/posters/thumbs/talking-postgres-1.jpg"
            alt="Talking Postgres Podcast poster preview"
          />
        </a>
        <div class="body">
          <h4>Talking Postgres Podcast</h4>
          <a
            role="button"
            href="{base}/posters/talking-postgres.pdf"
            target="_blank">View PDF</a
          >
        </div>
      </article>
    </li>
  </ul>

  <hr />

  <p>
    <small>
      If you would like to remove your poster from this page or correct
      something, please contact
      <a href="mailto:contact@pgconf.dev">contact@pgconf.dev</a>.
    </small>
  </p>
</main>

<Side --flex-size="16rem" />
