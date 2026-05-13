<script>
  import { resolve } from '$app/paths';
  import Side from './Side.svelte';
  import {
    Beer,
    CalendarDays,
    Coffee,
    Footprints,
    Images,
    MapPinned,
    MessageCircleMore,
    MessagesSquare,
    Mic,
    Utensils,
    Wifi,
    Wine,
  } from '@lucide/svelte';

  const socialPage = resolve('/attend/social');

  import mapImage from './map.png?enhanced';
  import rogueBanner from './attend/social/rogue.jpg?enhanced';
  import bbBanner from './attend/social/butcher.jpg?enhanced';
</script>

<style>
  :is(h3, h5).iconic {
    gap: 0.5em;
  }

  .indent {
    margin-inline: 2.625rem;
  }
</style>

<svelte:head>
  <title>PGConf.dev 2026</title>
  <meta
    name="description"
    content="PGConf.dev 2026 will be held on May 19–22 in Vancouver, BC to bring users, developers, and organizers together to advance PostgreSQL development."
  />
</svelte:head>

<main style="flex-basis: 56rem;">
  <h1>PGConf.dev 2026</h1>

  <!-- prettier-ignore -->
  <h2 style="text-align: center;">
    May <time datetime="2026-05-19">19</time>–<time datetime="2026-05-22">22</time>, 2026
  </h2>

  <hgroup style="text-align: center;">
    <h3>Simon Fraser University—Vancouver Campus</h3>
    <h4>Vancouver, BC, Canada</h4>
  </hgroup>

  <p style="text-align: center;">
    <a role="button" href={resolve('/about/registration')}>
      Register (Only a Few Tickets Left!)
    </a>
  </p>

  <section>
    <h3 class="iconic">
      <MessagesSquare />
      <a href="https://discord.gg/GEfxA2ahQG" target="_blank">Discord</a>
    </h3>

    <div class="indent">
      <p>
        Join the official conference Discord server to chat with other
        attendees, find a group for lunch or the run, and keep up with
        announcements during the week.
      </p>

      <figure style="text-align: center;">
        <a href="https://discord.gg/GEfxA2ahQG" target="_blank">
          <img
            src="https://discord.com/api/guilds/1250217814422454303/widget.png?style=banner3"
            alt="Join Server"
          />
        </a>
      </figure>
    </div>
  </section>

  <section>
    <h3 class="iconic"><MapPinned /><span>Venue Map</span></h3>

    <div class="indent">
      <p>
        The conference is held at the SFU Vancouver Harbour Centre campus,
        between Hastings Street and Cordova Street in downtown Vancouver.
        Registration is on the main concourse, just inside the main entrance on
        Hastings Street.
      </p>

      <figure>
        <enhanced:img src={mapImage} alt="SFU Harbour Centre venue map" />
      </figure>
    </div>
  </section>

  <section>
    <h3 class="iconic">
      <CalendarDays />
      <a href={resolve('/schedule/tuesday')}>Tuesday, May 19</a>
    </h3>

    <div class="indent">
      <p>
        Opening day, with keynotes and the first day of conference sessions.
      </p>

      <h5 class="iconic">
        <Coffee />
        <a href="{socialPage}#breakfast">Newcomer Welcome Breakfast</a>
      </h5>

      <p>
        New to the Postgres community? Meet other newcomers and experienced
        members at 07:30 in the Xerox Room (1500). No sign-up required.
      </p>

      <h5 class="iconic">
        <Footprints />
        <a href="{socialPage}#run">Group Social Run</a>
      </h5>

      <p>
        Stay in shape while exploring Stanley Park, one of the largest urban
        parks in the world. The group meets at 17:30 at 712 Lost Lagoon Path;
        pace and distance are chosen to suit whoever turns up.
      </p>

      <h5 class="iconic">
        <Utensils />
        <a href="{socialPage}#meet">Meet &amp; Eat</a>
      </h5>

      <p>
        Have dinner with a small group of fellow Postgres community members.
        Sign-up is required in advance; on the day, meet your group leader at
        17:00 in the concourse by Registration, then walk together to the
        restaurant. Dinner is self-pay.
      </p>
    </div>

    <h3 class="iconic">
      <CalendarDays />
      <a href={resolve('/schedule/wednesday')}>Wednesday, May 20</a>
    </h3>

    <div class="indent">
      <p>
        Conference sessions, alongside the start of the in-person commitfest in
        Xerox (Room 1500).
      </p>

      <h5 class="iconic">
        <MessageCircleMore />
        <a href={resolve('/schedule/community-office-hours')}>
          Community Office Hours
        </a>
      </h5>

      <p>
        The Community Booth is a dedicated space where you can meet with various
        PostgreSQL community members and participate in informal sessions
        throughout the conference. If you are working on something Postgres (a
        patch, a community effort, some other kind of project), you can reserve
        a time slot at the booth for people to meet you and ask questions,
        exchange ideas, volunteer to help, etc.
      </p>

      <p>
        This is the perfect chance for you to share your project with the
        attendees, and for attendees to have time with the people making
        Postgres happen!
      </p>

      <p>
        You can reserve a time on this <a
          href="https://tinyurl.com/communitybooth2026"
          target="_blank">worksheet</a
        >.
      </p>

      <h5 class="iconic">
        <Wine />
        <a href="{socialPage}#reception">Social Reception</a>
      </h5>

      <p>
        The Gala Reception is held at 18:00 at Rogue Kitchen and Wet Bar, just
        across the street from the venue. Expect reception-style food, two
        drinks from the bar, and good conversation. The reception is included in
        your conference registration, so please bring your badge.
      </p>

      <figure>
        <enhanced:img src={rogueBanner} alt="Rogue Kitchen and Wet Bar" />
      </figure>

      <h5 class="iconic">
        <Mic />
        <a href="{socialPage}#sing">Karaoke</a>
      </h5>

      <p>
        Unwind and loosen those vocal cords at a Postgres karaoke session, from
        22:00 to midnight at Switch Vancouver, 1339 Robson Street.
      </p>
    </div>

    <h3 class="iconic">
      <CalendarDays />
      <a href={resolve('/schedule/thursday')}>Thursday, May 21</a>
    </h3>

    <div class="indent">
      <p>
        Another day of conference sessions, with the in-person commitfest
        continuing in Xerox (Room 1500).
      </p>

      <h5 class="iconic">
        <MessageCircleMore />
        <a href={resolve('/schedule/community-office-hours')}>
          Community Office Hours
        </a>
      </h5>

      <p>
        The Community Booth is a dedicated space where you can meet with various
        PostgreSQL community members and participate in informal sessions
        throughout the conference. If you are working on something Postgres (a
        patch, a community effort, some other kind of project), you can reserve
        a time slot at the booth for people to meet you and ask questions,
        exchange ideas, volunteer to help, etc.
      </p>

      <p>
        This is the perfect chance for you to share your project with the
        attendees, and for attendees to have time with the people making
        Postgres happen!
      </p>

      <p>
        You can reserve a time on this <a
          href="https://tinyurl.com/communitybooth2026"
          target="_blank">worksheet</a
        >.
      </p>

      <h5 class="iconic">
        <Images />
        <a href={resolve('/posters')}>Poster Session</a>
      </h5>

      <p>
        Over lunch, browse posters showcasing PostgreSQL-related projects,
        research, and community work. The physical posters are on display at the
        venue; the same posters are also available online.
      </p>

      <h5 class="iconic">
        <Utensils />
        <a href="{socialPage}#meet">Meet &amp; Eat</a>
      </h5>

      <p>
        A second round of small-group dinners, organized the same way as on
        Tuesday.
      </p>
    </div>

    <h3 class="iconic">
      <CalendarDays />
      <a href={resolve('/schedule/friday')}>Friday, May 22</a>
    </h3>

    <div class="indent">
      <p>
        The conference closes with the unconference — an attendee-driven day of
        discussions, with the schedule built collaboratively from topics
        proposed by attendees.
      </p>
    </div>
  </section>

  <section>
    <h3 class="iconic">
      <Beer />
      <a href="{socialPage}#beer">Conference Pub</a>
    </h3>

    <div class="indent">
      <p>
        Dinner is over, and you still want to mix it up with other Postgres
        people? Head to the Butcher &amp; Bullock Pub, at 911 West Pender
        Street, any night of the week. It's the easy answer to the question,
        “where should we meet up?”
      </p>

      <figure>
        <enhanced:img src={bbBanner} alt="Butcher &amp; Bullock Pub" />
      </figure>
    </div>
  </section>

  <section>
    <h3 class="iconic"><Wifi /><span>Wi-Fi</span></h3>

    <ol class="indent" style="padding-inline-start: 1.375rem;">
      <li>
        Join the <kbd>SFUNET-SECURE</kbd> network (or
        <kbd>SFUNET</kbd> if your device doesn't support it).
      </li>
      <li>
        Open a browser; it should redirect you to
        <a href="https://www.sfu.ca" target="_blank">www.sfu.ca</a>.
      </li>
      <li>
        Sign in with account <kbd>LW6579</kbd> and password
        <kbd>HCwifi2026</kbd>.
      </li>
    </ol>
  </section>
</main>

<Side --flex-size="16rem" />
