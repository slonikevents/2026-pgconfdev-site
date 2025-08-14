<script>
  import { Github, LinkedIn, Mastodon } from '$lib/icon';

  const github = 'https://github.com/slonikevents/2026-pgconfdev-site';
  const linkedin = 'https://www.linkedin.com/company/pgconf-dev/';
  const mastodon = 'https://mastodon.social/@pgconfdev';
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
      Follow us on <a href={linkedin} target="_blank"><LinkedIn /></a> or
      <a href={mastodon} target="_blank"><Mastodon /></a>
      for the latest news on PGConf.dev 2026
    </p>

    <p>Fork this site on <a href={github} target="_blank"><Github /></a></p>
  </div>
</footer>
