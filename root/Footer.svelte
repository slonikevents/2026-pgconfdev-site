<script>
  import { Github, LinkedIn, Mastodon } from '$lib/link';
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
      Follow us on <LinkedIn /> or <Mastodon /> for the latest news on PGConf.dev
      2026
    </p>

    <p>Fork this site on <Github /></p>
  </div>
</footer>
