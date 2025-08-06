<script>
  import { base } from '$app/paths';
  import { Plane, Train } from '@lucide/svelte';

  const visa_tool = 'https://ircc.canada.ca/english/visit/visas.asp';
</script>

<style>
  article > header {
    align-items: center;
    color: var(--h6-color);
    display: flex;
    font-family: var(--header-font);
    font-size: 1rem;
    font-weight: 700;
    gap: 1rem;
    justify-content: space-between;
    letter-spacing: 0.0625rem;
    line-height: 1.25;
    text-transform: uppercase;
  }
</style>

<svelte:head>
  <title>Travel - PGConf.dev 2026</title>
</svelte:head>

<h1>Travel</h1>

<p>
  If you have any questions or require any assistance with your travel
  arrangements, please don't hesitate to
  <a href="{base}/contact">contact us</a>.
</p>

<article>
  <header>
    <span>By Plane</span>
    <Plane />
  </header>

  <p>
    Vancouver International Airport (YVR) is the closest airport and has flights
    to many international destinations.
  </p>

  <p>
    The best way to get from Vancouver International Airport to the Conference
    is to take the
    <a href="http://thecanadaline.com" target="_blank">
      Canada Line (Skytrain)
    </a> from the airport to Waterfront station. The Harbour Centre is directly across
    the street from the Waterfront train station.
  </p>
</article>

<article>
  <header>
    <span>By Train</span>
    <Train />
  </header>

  <p>
    <a href="https://www.viarail.ca">VIA Rai</a> (Toronto-Vancouver Line) and
    <a href="https://www.amtrak.com">Amtrak</a> (Cascades line) have train
    service into Vancouver arriving at the
    <a
      href="https://www.viarail.ca/en/explore-our-destinations/stations/rockies-and-pacific/vancouver"
      >Pacific Central Station</a
    >. You can take board the Skytrain nearby at the Main Street-Science World
    station and take the Expo Line to Waterfront Station[ The Harbour Centre is
    directly across the street from Waterfront train station.
  </p>
</article>

<h2>Visa Information</h2>

<p>
  Most international travellers need either a visitor visa or an Electronic
  Travel Authorization (<abbr>eTA</abbr>) to enter Canada. This
  <a href={visa_tool} target="_blank">visa tool</a> will help you determine which
  applies to you.
</p>

<article>
  <details>
    <summary>U.S. Residents &#127482;&#127480;</summary>
    <p>
      Citizens and permanent residents of the U.S. may enter Canada visa-free.
      U.S. Citizens must have a valid passport while lawful permanent residents
      must have the documents listed
      <a
        href="https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/entry-requirements-country.html#lawful-pr-us"
        >here</a
      >.
    </p>
  </details>

  <hr />

  <details>
    <summary>Electronic Travel Authorization (eTA)</summary>
    <p>
      Visitors from
      <a href="https://ircc.canada.ca/english/visit/visas.asp"
        >visa-exempt countries</a
      >
      should apply for an eTA
      <a
        href="https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/eta/apply.html"
        >here</a
      >. Most applications are approved quickly.
    </p>
  </details>

  <hr />

  <details>
    <summary>Visitor Visa</summary>
    <p>
      Procedures for obtaining a visitor visa are available
      <a
        href="https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/about-visitor-visa.html"
        >here</a
      >. This process can be lengthy and we advise that you start it as soon as
      you have decided that you will be attending the conference.
    </p>
  </details>
</article>
