<script>
  import { resolve } from '$app/paths';
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
  <meta
    name="description"
    content="PGConf.dev 2026 is accessible to YVR airport via SkyTrain and to Pacific Central Station. Most international travellers need either a visitor visa or an eTA."
  />
</svelte:head>

<h1>Travel</h1>

<p>
  If you have any questions or require any assistance with your travel
  arrangements, please don't hesitate to
  <a href={resolve('/about/contact-us')}>contact us</a>.
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

<h2>Hotels</h2>

<p>
  We recommend attendees book a hotel early. Hotels in the downtown Vancouver
  can be expensive and we expect prices to go up closer to the event. We have
  negotiated discount codes with the following hotels.
</p>

<article>
  <details>
    <summary>The St. Regis Hotel</summary>
    <p>
      <a href="https://www.stregishotel.com">The St. Regis Hotel</a> is a 100%
      Canadian owned, independent and heritage property, it is
      <strong>NOT</strong>
      affiliated with the International St Regis hotel chain. The hotel is at
      <a href="https://www.openstreetmap.org/#map=19/49.28299/-123.11589">
        602 Dunsmuir Street</a
      >
      You must call <tel>+1604-681-1135</tel> or <tel>1-800-770-7929</tel> or
      email
      <a href="mailto:info@stregishotel.com">info@stregishotel.com</a>
      to make a reservation with this rate. Tell them you want the "PostgreSQL Developer
      Conference rate". The rate can not be booked on the website and bookings must
      be made before <strong>March 18 2026</strong>
    </p>
  </details>
</article>

<article>
  <details>
    <summary>The Exchange Hotel</summary>
    <p>
      <a href="https://www.exchangehotelvan.com">The Exchange Hotel Vancouver</a
      >
      at
      <a href="https://www.openstreetmap.org/#map=19/49.28499/-123.11478"
        >475 Howe St
      </a>
      is located in the former Vancouver Stock Exchange building is offering a rate
      of $429(CAD) plus taxes and fees(20.68%). The hotel is a 5 minute walk from
      the conference venue. You can book
      <a
        href="https://be.synxis.com/?adult=1&arrive=2026-05-18&chain=6278&child=0&currency=CAD&depart=2026-05-19&hotel=2974&level=hotel&locale=en-US&productcurrency=CAD&promo=PostgreSQL&rooms=1"
        >online</a
      >
      with the code group "PostgreSQL" by calling
      <tel>+1604-563-4693</tel> or emailing
      <a href="mailto:reservations@exchangehotelvan.com"
        >reservations@exchangehotelvan.com</a
      >. The rate is available until April 18 2026.
    </p>
  </details>
</article>

<article>
  <details>
    <summary>Sheraton Vancouver Wall Centre</summary>
    <p>
      <a
        href="https://www.marriott.com/hotels/travel/yvrws-sheraton-vancouver-wall-centre"
        >The Sheraton Vancouver Wall Centre</a
      >
      is part of the Marriott chain and is located
      <a href="https://www.openstreetmap.org/?#map=19/49.280311/-123.126604">
        1000 Burrard Street</a
      >. The hotel is 20 minute walk from the conference venue. You can book
      online and get 15% off the posted room rate with this booking
      <a
        href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1736196741892&key=CORP&guestreslink2=true&app=resvlink"
        >link</a
      >
    </p>
  </details>
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
