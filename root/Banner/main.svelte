<script>
  import banner from './banner.svg';
</script>

<style>
  header {
    background-color: var(--header-background-color);
    text-align: center;
  }

  img {
    max-height: 67vh;
    min-height: 34vh;
    object-fit: cover;
  }
</style>

<!--
  @component
  Banner that should appear on the main page (with the Vancouver skyline)
-->

<header>
  <img src={banner} fetchpriority="high" alt="Banner with Vancouver Skyline" />
</header>
