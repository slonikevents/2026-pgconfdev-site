<script>
  import { resolve } from '$app/paths';
  import { LinkedIn, Mastodon } from '$lib/link';

  import Carousel from './Carousel.svelte';
  import Person from './Person.svelte';

  import gwen_shapira from './Gwen Shapira.jpeg?enhanced&w=120;240;360';
  import jonathan_katz from './Jonathan Katz.png?enhanced&w=120;240;360';
  import kaiting_chen from './Kaiting Chen.jpeg?enhanced&w=120;240;360';
  import melanie_plageman from './Melanie Plageman.jpeg?enhanced&w=120;240;360';
  import paul_ramsey from './Paul Ramsey.jpeg?enhanced&w=120;240;360';
  import robert_haas from './Robert Haas.jpeg?enhanced&w=120;240;360';
  import steve_singer from './Steve Singer.jpeg?enhanced&w=120;240;360';

  const postgresql = 'https://www.postgresql.org';
  const pgcon = 'https://www.pgcon.org';
  const ccr = 'https://www.postgresql.org/about/policies/conferences/';
  const gpdc =
    'https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#data-collection';
  const ggps =
    'https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement';
  const cwa = 'https://www.cloudflare.com/web-analytics/';
  const seca = 'https://www.pgevents.ca/';
  const secapp = 'https://www.pgevents.ca/about/privacypolicy/';
  const bylaws =
    'https://www.pgevents.ca/media/local/pdf/slonik-events-bylaws-2023.pdf';
</script>

<svelte:head>
  <title>About PGConf.dev 2026</title>
  <meta
    name="description"
    content="PGConf.dev 2026 brings users, developers, and community organizers together to advance PostgreSQL development and community growth."
  />
</svelte:head>

<h1>About</h1>

<p>
  The PostgreSQL Development Conference, aka “<abbr>PGConf.dev</abbr>”, is where
  users, developers, and community organizers come together to focus on
  <a href={postgresql} target="_blank">PostgreSQL</a> development and community growth.
</p>

<p>
  PGConf.dev is the successor to <a href={pgcon} target="_blank">PGCon</a>, and
  focuses on creating a fun and constructive environment for PostgreSQL
  contributors to meet, collaborate, and learn from each other.
</p>

<p>
  PGConf.dev is made possible by the generous support of our sponsors, the
  amazing content from our speakers, the volunteers who help to organize and run
  the event, and the participation of the PostgreSQL contributor community.
</p>

<p>
  Follow us on <LinkedIn /> or <Mastodon /> for the latest news.
</p>

<h2>Organizing Committee</h2>

<p>
  PGConf.dev 2026 is organized in cooperation with
  <a href={seca} target="_blank">Slonik Events Canada</a> by the following people:
</p>

<Carousel>
  <Person name="Gwen Shapira" source={gwen_shapira}>Nile</Person>
  <Person name="Jonathan Katz" source={jonathan_katz}>Databricks</Person>
  <Person name="Kaiting Chen" source={kaiting_chen}>Domino Data Lab</Person>
  <Person name="Melanie Plageman" source={melanie_plageman}>Microsoft</Person>
  <Person name="Paul Ramsey" source={paul_ramsey}>Crunchy Data</Person>
  <Person name="Robert Haas" source={robert_haas}>EDB</Person>
  <Person name="Steve Singer" source={steve_singer}>Nav Technologies</Person>
</Carousel>

<h2>Volunteering</h2>

<p>
  Please <a href={resolve('/about/contact-us')}>contact us</a> if you’d like to help
  organize, or volunteer at, the conference. Volunteering is a great way to get more
  involved in the community, and we’d be happy to have you.
</p>

<h2>Policies</h2>

<ul>
  <li>
    This conference is a
    <a href={ccr} target="_blank">PostgreSQL Community Event</a>.
  </li>
</ul>

<h2>Privacy</h2>

<p>
  This site is hosted on <a href={gpdc} target="_blank">GitHub Pages</a>. Please
  refer to the
  <a href={ggps} target="_blank">GitHub General Privacy Statement</a> for more information.
</p>

<p>
  We use <a href={cwa} target="_blank">Cloudflare Web Analytics</a> to measure our
  outreach. Cloudflare Web Analytics does not use any client-side state, such as
  cookies or localStorage, to collect usage metrics. We also don’t "fingerprint"
  individuals via their IP address, User Agent string, or any other data for the
  purpose of displaying analytics.
</p>

<p>Our emails don’t use any form of tracking.</p>

<p>
  The PostgreSQL Development conference is organized by
  <a href={seca} target="_blank">Slonik Events Canada</a> which follows the
  <a href={secapp} target="_blank">Slonik Events Canada Privacy Policy</a>.
</p>

<h2>Financial Disclosure</h2>

<p>
  PGConf.dev is financially supported by our generous sponsors and is
  underwritten by <a href={seca} target="_blank">Slonik Events Canada</a>, a
  Canadian non-profit organization incorporated expressly to organize this
  conference. All proceeds belong to Slonik Events Canada and will be used in
  accordance with its <a href={bylaws} target="_blank">by-laws</a> to support the
  PostgreSQL community.
</p>

<p>
  Organizers and volunteers receive no remuneration except free attendance to
  the conference.
</p>
