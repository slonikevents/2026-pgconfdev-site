<script>
  import EDB from './logo/EDB.svg';
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
    .cohort {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      justify-content: space-around;
    }

    .cohort > * {
      flex: 0 0 calc(50% - 0.5rem);
      margin: 0;
    }
  }

  @media (width < 480px) {
    .cohort > * {
      flex: 0 1 100%;
    }
  }
</style>

<div id="side">
  <h4 style="color: #b78800;">Gold Sponsors</h4>

  <div class="cohort">
    <p><img src={EDB} alt="EDB" /></p>
  </div>
</div>
