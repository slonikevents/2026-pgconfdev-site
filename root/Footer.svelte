<script>
  import { Github, Mastodon, X } from '$lib/icon';

  const github = 'https://github.com/slonikevents/2026-pgconfdev-site';
  const mastodon = 'https://mastodon.social/@pgconfdev';
  const x = 'https://x.com/pgconfdev';
</script>

<style>
  footer {
    font-size: 0.875rem;
    text-align: center;
  }

  .matter {
    padding: 1rem;

    @media (min-width: 768px) {
      display: flex;
      justify-content: space-between;

      > * {
        margin: 0;
      }
    }
  }
</style>

<footer>
  <div class="matter">
    <p>
      Follow us on <a href={x} target="_blank"><X /></a> or
      <a href={mastodon} target="_blank"><Mastodon /></a>
      for the latest news on PGConf.dev 2026
    </p>

    <p>Fork this site on <a href={github} target="_blank"><Github /></a></p>
  </div>
</footer>
