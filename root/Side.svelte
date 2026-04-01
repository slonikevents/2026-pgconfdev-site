<script>
  import { SPONSOR_LIST } from './sponsors';
</script>

<style>
  #side {
    background-color: var(--code-background-color);
    border-radius: var(--border-radius);
    padding: 1rem;
    text-align: center;

    @media (width >= 768px) {
      flex-basis: var(--flex-size);
    }
  }

  section:where(:not(:last-child)) {
    margin-block-end: 2rem;
  }

  a {
    border-radius: var(--border-radius);
    display: block;
    padding: 1rem;
  }

  .gold {
    h4 {
      color: var(--gold-color);
    }

    img {
      max-height: 8rem;
    }
  }

  .silver {
    h4 {
      color: var(--silver-color);
    }

    img {
      max-height: 4rem;
    }

    ul {
      align-items: center;
      display: grid;
      gap: 1rem;
      list-style-type: none;
      padding-inline-start: 0;

      @media (width < 768px) {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }
</style>

<div id="side">
  <section class="gold">
    <h4>Gold Sponsors</h4>

    {#each SPONSOR_LIST.GOLD as {NAME, LOGO, URL} (NAME)}
      <p>
        <a href={URL} target="_blank"><img src={LOGO} alt={NAME} /></a>
      </p>
    {/each}
  </section>

  <section class="silver">
    <h4>Silver Sponsors</h4>

    <ul>
      {#each SPONSOR_LIST.SILVER as {NAME, LOGO, URL} (NAME)}
        <li>
          <a href={URL} target="_blank"><img src={LOGO} alt={NAME} /></a>
        </li>
      {/each}
    </ul>
  </section>
</div>
