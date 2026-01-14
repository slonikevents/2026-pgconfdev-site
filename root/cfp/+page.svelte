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

  .categories {
    list-style-type: none;
    padding-inline: 0;

    > li {
      background-position: left 0 top 0.25rem;
      background-repeat: no-repeat;
      padding-inline-start: 1.25rem;
    }
  }

  .bullet-graduation-cap {
    background-image: url('./graduation-cap.svg?inline');
  }

  .bullet-lightbulb {
    background-image: url('./lightbulb.svg?inline');
  }

  .bullet-megaphone {
    background-image: url('./megaphone.svg?inline');
  }

  .bullet-presentation {
    background-image: url('./presentation.svg?inline');
  }

  .bullet-users-round {
    background-image: url('./users-round.svg?inline');
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
    We are now accepting content proposals for PGConf.dev 2026. PGConf.dev is an
    event for PostgreSQL hackers, ecosystem developers, and everyone who
    contributes to Postgres. We are focused on creating a fun and constructive
    environment for PostgreSQL contributors to meet, collaborate, and learn from
    each other.
  </p>

  <p style:margin-block="2rem" style:text-align="center">
    <a
      href="https://www.pgevents.ca/events/pgconfdev2026/callforpapers/"
      role="button"
      target="_blank">My Proposals</a
    >
  </p>

  <div class="side-by-side">
    <section>
      <h6>Wondering what you should propose?</h6>

      <ul class="categories">
        <li class="bullet-presentation">
          <a href="#present">Presentations</a> are structured sessions where speakers
          share knowledge, experiences, or new ideas in a traditional one-to-many
          format.
        </li>

        <li class="bullet-users-round">
          <a href="#organize">Community Discussions</a> are interactive sessions
          where participants discuss systemic community and technical challenges
          and brainstorm solutions.
        </li>

        <li class="bullet-graduation-cap">
          <a href="#educate">Workshops</a> are educational sessions focused on enrichment
          and growing future Postgres contributors.
        </li>

        <li class="bullet-megaphone">
          Propose a <a href="#panel">Panel</a> to have experts weigh in on community
          topics.
        </li>

        <li class="bullet-lightbulb">
          <a href="#other">Other Ideas</a> include Community Office Hours to a group
          run, submit your ideas for enriching and connecting the community.
        </li>
      </ul>
    </section>

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
        <dt><time datetime="2025-09-1">September 1st, 2025</time></dt>
        <dd>CFP Opens</dd>

        <dt><time datetime="2026-01-16">January 16th, 2026</time></dt>
        <dd>CFP Closes (Proposals Due)</dd>

        <dt><time datetime="2026-02-02">February 2nd, 2026</time></dt>
        <dd>CFP Responses Sent</dd>

        <dt><time datetime="2026-04-14">April 14th, 2026</time></dt>
        <dd>Community Discussion CFP Closes (Batch 2)</dd>

        <dt><time datetime="2026-05-19">May 19th, 2026</time></dt>
        <dd>Conference Begins</dd>
      </dl>
    </aside>
  </div>

  <section>
    <hgroup>
      <h2 id="present">Presentation Sessions</h2>
      <p><a href={submit} role="button">Submit</a></p>
    </hgroup>

    <p style:text-align="center;">
      <em>Submission Deadline: January 16, 2026</em>
    </p>

    <p>
      Presentations are structured sessions where community members share
      knowledge, experiences, or new ideas with the PostgreSQL community. They
      come in two main formats:
    </p>

    <ul>
      <li>
        <strong>25-Minute Talks</strong> &mdash; Short overviews highlighting specific
        contributions, proof-of-concept work, investigations, or concise summaries
        and insights
      </li>
      <li>
        <strong>50-Minute Talks</strong> &mdash; Deeper explorations, narratives,
        or educational content with a clear story arc used to present research, lessons
        learned, or systemic analysis
      </li>
    </ul>

    <p>Presentations are meant to:</p>
    <ul>
      <li>Showcase technical contributions and research.</li>
      <li>Share lessons learned, both from successes and failures.</li>
      <li>Highlight community initiatives and needs.</li>
      <li>
        Educate and inspire discussion by surfacing new perspectives or
        practical techniques.
      </li>
    </ul>

    <p>Some of the high level categories:</p>
    <ul>
      <li>Failed PostgreSQL projects and what you learned from them</li>
      <li>Proof-of-concept features and performance improvements</li>
      <li>Academic database research</li>
      <li>Long-form surveys and analyses of PostgreSQL problems</li>
      <li>Architectural issues in PostgreSQL and how to fix them</li>
      <li>New perspectives on systemic community concerns</li>
      <li>Educational content and how-tos</li>
      <li>Missing features and user needs</li>
    </ul>

    <h6>Submission Notes &mdash;</h6>
    <div class="note">
      <ul>
        <li>
          Accepted talks confer at most two complimentary registrations.
          25-minute talks with multiple speakers are unlikely to be accepted.
        </li>
        <li>
          Please propose your presentation as either a 50-minute or 25-minute
          talk. Do not submit the same proposal to both tracks.
        </li>
      </ul>
    </div>
  </section>

  <section>
    <hgroup>
      <h2 id="organize" style="margin: 0;">Community Discussion Sessions</h2>
      <p><a href={submit} role="button">Submit</a></p>
    </hgroup>

    <p style:text-align="center">
      <em>Deadline Batch 1: January 16, 2026, Batch 2: April 14th, 2026</em>
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
          There are two CFP rounds for Community Discussion Sessions. Round one
          closes January 16, with most sessions chosen then. Round two closes
          April 14 to allow for late-breaking issues. Proposals not accepted in
          round one automatically roll over, so early submission improves your
          chances.
        </li>
        <li>No Community Discussion Sessions will be recorded.</li>
      </ul>
    </div>
  </section>

  <section>
    <hgroup>
      <h2 id="educate" style="margin: 0;">Workshops</h2>
      <p><a href={submit} role="button">Submit</a></p>
    </hgroup>

    <p style:text-align="center">
      <em>Submission Deadline: January 16, 2026</em>
    </p>

    <p>
      Have an idea for how to educate current and future Postgres hackers and
      extension developers? Submit a proposal for a hands-on practical training
      or collaborative workshop.
    </p>
    <p>
      <em
        >Example: <a
          href="https://www.pgevents.ca/events/pgconfdev2025/schedule/session/265-advanced-patch-feedback-session-invite-only/"
          target="_blank">Advanced Patch Feedback Session</a
        ></em
      >
    </p>

    <h6>Submission Notes</h6>
    <div class="note">
      <p>Accepted workshops confer at most two complimentary registrations.</p>
    </div>
  </section>

  <section>
    <hgroup>
      <h2 id="panel" style="margin: 0;">Panels</h2>
      <p><a href={submit} role="button">Submit</a></p>
    </hgroup>

    <p style:text-align="center">
      <em>Submission Deadline: January 16, 2026</em>
    </p>

    <p>
      Want to bring together experts to weigh in on an important community
      topic? From getting developers' perspectives on how to push a part of the
      project forward to sharing learnings about community organizing, panels
      are a great way to learn from the experienced members of the community and
      grow new leaders.
    </p>

    <p><em>Example: Extension upgrades framework proposal evaluations</em></p>

    <h6>Submission Notes</h6>
    <div class="note">
      <ul>
        <li>Accepted panels do not confer complimentary registration.</li>
        <li>
          Please list proposed panel members in the proposal. The list does not
          have to be finalized at submission, however you should ensure that all
          proposed members are open to participation.
        </li>
      </ul>
    </div>
  </section>

  <section>
    <hgroup>
      <h2 id="other" style="margin: 0;">Other Ideas?</h2>
      <p><a href={submit} role="button">Submit</a></p>
    </hgroup>

    <p style:text-align="center">
      <em>Submission Deadline: January 16, 2026</em>
    </p>

    <p>
      From Community Office Hours to a group run, submit your ideas for
      enriching and connecting the community.
    </p>

    <p>
      Don’t feel limited to previous formats or subjects — we’re eager to see
      new ideas that expand the conversation and enhance the experience.
    </p>
  </section>

  <h2>Submission Rules and Tips</h2>

  <ul>
    <li>
      Disclose if any portion of your session concerns closed source code.
    </li>
    <li>
      Proposed talks about your company's product are unlikely to be accepted
      unless they focus on how PostgreSQL could be modified to make it easier to
      extend and support.
    </li>
    <li>
      Describe in your bio what makes you uniquely positioned to deliver the
      content you are proposing.
    </li>
    <li>
      Community Discussion Sessions and Panels should feature individuals from
      multiple companies.
    </li>
    <li>
      Check out the PGConf.dev 2025
      <a href="https://2025.pgconf.dev/schedule.html" target="_blank"
        >schedule</a
      >
      to see what we accepted and for more inspiration.
    </li>
  </ul>

  <hr />

  <h2>Program Committee</h2>

  <li>Melanie Plageman (Microsoft)</li>
  <li>Dilip Kumar (Google)</li>
  <li>Jonathan Katz (Databricks)</li>
  <li>Paul Ramsey (Snowflake)</li>
  <li>Jacob Champion (EDB)</li>
</main>

<Side --flex-size="16rem" />
