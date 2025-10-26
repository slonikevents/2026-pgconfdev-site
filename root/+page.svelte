<script>
  import News from './news/News.svelte';
  import Side from './Side.svelte';
  import { headlineIndex } from '$news';

  import hackers1 from './hackers1.png?enhanced';
  import extension1 from './extension1.png?enhanced';
  import community1 from './community1.png?enhanced';
  import closing1 from './closing1.png?enhanced';
  import video1 from './video1.png?enhanced';
  const postgresql = 'https://www.postgresql.org/';
</script>

<style>
  .promo {
    display: flex;
  }
  .promo-image {
    flex: 50%;
  }
  .promo-blurb {
    flex: 50%;
  }
</style>

<svelte:head>
  <title>PGConf.dev 2026</title>
  <meta
    name="description"
    content="PGConf.dev 2026 will be held on May 19–22 in Vancouver, BC to bring users, developers, and organizers together to advance PostgreSQL development."
  />
</svelte:head>
<main>
  <h1>PGConf.dev 2026</h1>

  <!-- prettier-ignore -->
  <h2 style="text-align: center;">
    May <time datetime="2026-05-19">19</time>–<time datetime="2026-05-22">22</time>, 2026
  </h2>

  <hgroup style="text-align: center;">
    <h3>Simon Fraser University—Vancouver Campus</h3>
    <h4>Vancouver, BC, Canada</h4>
  </hgroup>

  <p>We're headed back to Vancouver in 2026!</p>

  <p>
    PGConf.dev is where users, developers, and community organizers come
    together to focus on <a href={postgresql} target="_blank">PostgreSQL</a> development
    and community growth.
  </p>

  <p>
    Meet PostgreSQL contributors, learn about upcoming features, and discuss
    development problems with PostgreSQL enthusiasts.
  </p>

  <div class="promo">
    <section class="promo-image">
      <enhanced:img
        src={hackers1}
        class="topic-promo-image"
        alt="backend development sessions from 2025"
      />
    </section>
    <section class="promo-blurb">
      <h5>PostgreSQL Hackers</h5>
      <p>
        PGConf.dev is the largest annual gathering of PostgreSQL committers,
        hackers and core contributors. Our 2024 conference was so well attended
        and engaging that there were no commits to the core source code during
        the 6 days around the event.
      </p>
      <p>
        Attend PGConf.dev to learn about PostgreSQL internals, how many features
        were developed and what future versions of PostgreSQL might contain
      </p>
    </section>
  </div>
  <hr />
  <div class="promo">
    <section class="promo-image">
      <enhanced:img
        src={extension1}
        alt="Extension related speakers from PGConf.dev 2025"
      />
    </section>
    <section class="promo-blurb">
      <h5>PostgreSQL Extension authors</h5>
      <p>
        The flexibility of PostgreSQL's extension system have made PostgreSQL
        the leading database for many fields from GeoSpatial(Postgis) to
        AI(pg_vector). PGConf.dev is where extension developers from different
        projects come together to collaborate on extension infrastructure and
        techniques. This year the Extension Ecosystem Summit is being included
        as part of our call for papers.
      </p>
    </section>
  </div>
  <hr />
  <div class="promo">
    <section class="promo-image">
      <enhanced:img src={community1} alt="Community topic presenters" />
    </section>
    <section class="promo-blurb">
      <h5>Open Source Community Leaders</h5>
      <p>
        PGConf.dev isn't just geared towards software developers but is also a
        forum for open source community development. Tuesday will feature
        community discussion sessions providing an interactive forum to discuss
        important topics in open source community.
      </p>
    </section>
  </div>
  <hr />
  <div class="promo">
    <section class="promo-image">
      <enhanced:img src={closing1} alt="Closing day activities" />
    </section>
    <section class="promo-blurb">
      <h5>Unconference</h5>
      <p>
        The Unconference sessions on Friday provides an opportunity to to
        discuss emerging issues and to interact with other attendees.
      </p>
    </section>
  </div>
  <hr />
  <div class="promo">
    <section class="promo-image">
      <enhanced:img src={video1} alt="Our Youtube channel" />
    </section>
    <section class="promo-blurb">
      <h5>Videos of past sessions</h5>
      <p>
        You can view videos of past sessions on our <a
          href="https://www.youtube.com/@pgconfdev"
          >@PGConfdev Youtube channel</a
        >
      </p>
    </section>
  </div>
  <News index={headlineIndex} />
  <hr />
</main>

<Side />
