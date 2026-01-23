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

  @media (width < 768px) {
    .gold {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      justify-content: space-around;
    }

    .gold > * {
      flex: 0 0 calc(50% - 0.5rem);
      margin: 0;
    }
  }

  @media (width < 480px) {
    .gold > * {
      flex: 0 1 100%;
    }
  }
</style>

<div id="side">
  <h4 style="color: #b78800;">Gold Sponsors</h4>

  {#each SPONSOR_LIST.GOLD as sponsor (sponsor.NAME)}
    <div class="gold">
      <p>
        <a
          href={sponsor.URL}
          target="_blank"
          style="text-decoration: none; border: none; outline: none;"
        >
          <img src={sponsor.LOGO} alt={sponsor.NAME} />
        </a>
      </p>
    </div>
  {/each}
  <h4 style="color: #707070;">Silver Sponsors</h4>

  {#each SPONSOR_LIST.SILVER as sponsor (sponsor.NAME)}
    <div class="silver">
      <p>
        <a
          href={sponsor.URL}
          target="_blank"
          style="text-decoration: none; border: none; outline: none;"
        >
          <img src={sponsor.LOGO} alt={sponsor.NAME} />
        </a>
      </p>
    </div>
  {/each}
</div>
