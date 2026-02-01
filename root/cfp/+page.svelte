<script>
  import { Calendar } from '@lucide/svelte';

  import Side from '../Side.svelte';

  const submit =
    'https://www.pgevents.ca/events/pgconfdev2026/callforpapers/new/';
</script>

<style>
  @media (width >= 768px) {
    main {
      flex-basis: 56rem;
    }
  }

  .side-by-side {
    @media (688px <= width < 768px), (width >= 992px) {
      align-items: start;
      display: flex;
      gap: 2rem;
    }
  }

  dd {
    margin-inline: 0;
  }

  main > section {
    margin-block: 2rem;
  }

  hgroup {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: space-between;

    [role='button'] {
      color: #ffffff;
    }
  }

  .note {
    border-inline-start: 0.25rem solid var(--border-color);
    margin-inline: 0;
    padding-inline: 1rem;

    > ul {
      padding-inline-start: 1.25rem;
    }
  }
</style>

<main>
  <h1>Call For Proposals</h1>

  <p>
    PGConf.dev is an event for PostgreSQL hackers, ecosystem developers, and
    everyone who contributes to Postgres. We are focused on creating a fun and
    constructive environment for PostgreSQL contributors to meet, collaborate,
    and learn from each other.
  </p>

  <p style:margin-block="2rem" style:text-align="center">
    <a
      href="https://www.pgevents.ca/events/pgconfdev2026/callforpapers/"
      role="button"
      target="_blank">My Proposals</a
    >
  </p>

  <div class="side-by-side">
    <aside style:flex="0 0 16rem">
      <header
        style:align-items="center"
        style:display="flex"
        style:justify-content="space-between"
      >
        <span>Important Dates</span>
        <Calendar size="1em" />
      </header>

      <dl>
        <dt><time datetime="2026-04-14">April 14th, 2026</time></dt>
        <dd>Community Discussion CFP Closes (Batch 2)</dd>

        <dt><time datetime="2026-05-19">May 19th, 2026</time></dt>
        <dd>Conference Begins</dd>
      </dl>
    </aside>

    <p>
      PGConf.dev 2026 is still accepting proposals for Community Discussion
      Sessions.
    </p>
  </div>

  <section>
    <hgroup>
      <h2 id="organize" style="margin: 0;">Community Discussion Sessions</h2>
      <p><a href={submit} role="button">Submit</a></p>
    </hgroup>

    <p style:text-align="center">
      <em>Deadline: April 14th, 2026</em>
    </p>

    <p>
      Community discussion sessions are interactive sessions where you can
      discuss issues related to Postgres and the community in a meeting format.
    </p>
    <p>
      These sessions will be scheduled for Tuesday and are a replacement for
      last year's interactive Tuesday content, including the
      <a
        href="https://www.pgevents.ca/events/pgconfdev2025/schedule/session/314-developer-meeting-invite-only/"
        target="_blank">Developer Meeting</a
      >, the
      <a
        href="https://www.pgevents.ca/events/pgconfdev2025/schedule/session/404-postgres-community-summit/"
        target="_blank">Community Summit</a
      >, and the
      <a
        href="https://www.pgevents.ca/events/pgconfdev2025/schedule/session/241-extension-ecosystem-summit/"
        target="_blank">Extension Ecosystem Summit</a
      >.
    </p>

    <p>
      Community Discussion Sessions may concern any topic related to the
      Postgres community and Postgres ecosystem. While these sessions build on
      last year’s content, don't feel limited to previous topics. We’re eager to
      see new ideas that expand the conversation.
    </p>
    <p>Their format should fall under one of the three following categories:</p>

    <article>
      <header><h6>Open Discussion Sessions</h6></header>

      <p>
        All seats are open to anyone. Meeting size is subject only to room size.
      </p>

      <p><em>Example: The future of pg_stat_statements</em></p>
    </article>

    <article>
      <header><h6>Working Groups</h6></header>

      <p>
        A small number of seats are reserved for invited members of the working
        group. The remaining slots are open to all conference attendees but
        seating will be organized to maximize collaboration amongst invited
        attendees. Please list invited participants in the body of your
        submission.
      </p>

      <p>
        <em>Example: Can the community support additional batch executors?</em>
      </p>
    </article>

    <article>
      <header><h6>Closed Sessions</h6></header>

      <p>
        These sessions are for invited participants only and meant to create a
        focused, productive, and private discussion among those already involved
        in the topic. Please list invited participants in the body of your
        submission.
      </p>

      <p>
        <em>Example: Security committee discussing the impact of recent CVE</em>
      </p>
    </article>

    <h6>Submission Notes &mdash;</h6>
    <div class="note">
      <ul>
        <li>
          Community discussion sessions do not confer complimentary
          registration.
        </li>
        <li>
          All invited attendees must be listed in the body of your proposal.
          Please secure invitees' consent prior to submitting your proposal.
          Organizers will do their best to avoid conflicts between meetings with
          overlapping key attendees.
        </li>
        <li>
          Proposals not accepted in round one automatically roll over, so early
          submission improves your chances.
        </li>
        <li>No Community Discussion Sessions will be recorded.</li>
      </ul>
    </div>
  </section>

  <hr />

  <h2>Program Committee</h2>

  <li>Melanie Plageman (Microsoft)</li>
  <li>Dilip Kumar (Google)</li>
  <li>Jonathan Katz (Databricks)</li>
  <li>Paul Ramsey (Snowflake)</li>
  <li>Jacob Champion (EDB)</li>
</main>

<Side --flex-size="16rem" />
