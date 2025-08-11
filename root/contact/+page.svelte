<script>
  import { Mastodon, X } from '$lib/icon';

  const mastodon = 'https://mastodon.social/@pgconfdev';
  const x = 'https://x.com/pgconfdev';
</script>

<svelte:head>
  <title>Contact Us - PGConf.dev 2026</title>
  <meta
    name="description"
    content="Contact the PGConf.dev 2026 team for questions, sponsorship, or to get involved with the conference."
  />
</svelte:head>

<h1>Contact Us</h1>

<p style="text-align: center;">We'd love to hear from you!</p>

<p>
  If you have any questions, comments, or just want to say hi, feel free to
  contact us at <a href="mailto:contact@pgconf.dev">contact@pgconf.dev</a>. You
  can also follow us on <a href={x} target="_blank"><X /></a> or
  <a href={mastodon} target="_blank"><Mastodon /></a> for updates about the event.
</p>
