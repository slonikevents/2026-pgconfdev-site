<script>
  import { Presentation } from '@lucide/svelte';
  import { UsersRound } from '@lucide/svelte';
  import { GraduationCap } from '@lucide/svelte';
  import { Lightbulb } from '@lucide/svelte';
  import { Megaphone } from '@lucide/svelte';
</script>

<style>
  h2 {
    text-transform: uppercase;
  }

  dd {
    margin-inline-start: 1.5rem;
  }

  .side-by-side {
    display: grid;
    grid-template-columns: none;
    gap: 2rem;
  }

  @media (min-width: 768px) {
    .side-by-side {
      align-items: start;
      grid-template-columns: 1fr auto;
    }
  }
</style>

<h1>Call For Proposals</h1>

<p class="lead">
  We are now accepting proposals for many kinds of content for PGConf.dev 2026.
</p>

<p style="margin-block: 2rem; text-align: center;">
  <a
    href="https://www.pgevents.ca/events/pgconfdev2025/callforpapers/"
    role="button">My Proposals</a
  >
</p>

<section class="side-by-side grid">
  <div>
    <p><strong>Wondering what you should propose?</strong></p>

    <dl>
      <dt><a href="#present">Presentation<Presentation /></a></dt>
      <dd>
        Structured sessions where speakers share knowledge, experiences, or new
        ideas in a traditional one-to-many format.
      </dd>
      <dt><a href="#organize">Community Discussion<UsersRound /></a></dt>
      <dd>
        Interactive sessions where participants discuss systemic community and
        technical challenges and brainstorm solutions.
      </dd>
      <dt><a href="#educate">Workshop<GraduationCap /></a></dt>
      <dd>
        Educational sessions focused on enrichment and growing future Postgres
        contributors.
      </dd>
      <dt><a href="#present">Panel<Megaphone /></a></dt>
      <dd>Experts weigh in on community topics.</dd>
      <dt><a href="#other">Other Ideas <Lightbulb /></a></dt>
      <dd>
        From Community Office Hours to a group run, submit your ideas for
        enriching and connecting the community.
      </dd>
    </dl>
  </div>

  <aside>
    <header>
      <h6>
        <span style="float: right;"><i class="fa-solid fa-calendar"></i></span>
        Important Dates
      </h6>
    </header>

    <dl>
      <dt><time datetime="2025-09-1">September 1st, 2025</time></dt>
      <dd>CFP Opens</dd>

      <dt><time datetime="2026-01-16">January 16th, 2026</time></dt>
      <dd>CFP Closes (Proposals Due)</dd>

      <dt><time datetime="2026-02-02">February 2nd, 2026</time></dt>
      <dd>CFP Responses Sent</dd>

      <dt><time datetime="2026-05-19">May 19th, 2026</time></dt>
      <dd>Conference Begins</dd>
    </dl>
  </aside>
</section>

<div
  style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;"
>
  <h2 id="present" style="margin: 0;">Presentation Sessions</h2>
  <a
    href="https://www.pgevents.ca/events/pgconfdev2025/callforpapers/"
    role="button">Submit</a
  >
</div>

<p>
  Presentations are structured sessions where community members share knowledge,
  experiences, or new ideas with the PostgreSQL community. They come in two main
  formats:
</p>

<ul>
  <li>
    <strong>25-Minute Talks</strong> – Short overviews highlighting specific contributions,
    proof-of-concept work, demos, and investigations or concise summaries and insights
  </li>
  <li>
    <strong>50-Minute Talks</strong> – Deeper explorations, narratives, or educational
    content with a clear story arc used to present research, lessons learned, or
    systemic analysis
  </li>
</ul>

<p>Presentations are meant to:</p>
<ul>
  <li>Showcase technical contributions and research.</li>
  <li>Share lessons learned, both from successes and failures.</li>
  <li>Highlight community initiatives and needs.</li>
  <li>
    Educate and inspire discussion by surfacing new perspectives or practical
    techniques.
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

<div class="examples">
  <p><strong>For example:</strong></p>
  <ul>
    <li>How your open source community solved a systemic problem</li>
    <li>Improving PostgreSQL's analytic workload support</li>
    <li>Debugging a specific kind of performance issue with eBPF</li>
  </ul>
</div>

<p>
  A talk may be proposed as both a 50 minute talk and 25 minute talk. Submit one
  copy of the proposal under the 50 minute track and another copy under the 25
  minute track. In the body of the proposal, specify which length you prefer.
</p>

<div
  style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;"
>
  <h2 id="discuss" style="margin: 0;">Community Discussion Sessions</h2>
  <a
    href="https://www.pgevents.ca/events/pgconfdev2025/callforpapers/"
    role="button">Submit</a
  >
</div>

<p>
  Community discussion sessions are interactive sessions where you can discuss
  issues related to Postgres and the community in a meeting format. These
  sessions will be scheduled for Tuesday and are a replacement for what was
  called the Developer Meeting in previous years.
</p>

<p>
  Community Discussion Sessions may concern any topic related to the community
  and their format should fall under one of the three following categories:
</p>

<article>
  <header>
    <h4>Open Discussion Sessions</h4>
  </header>

  <p>
    All seats are are open to anyone. Meeting size is subject only to room size.
  </p>
  <p><em>Example: The future of pg_stat_statements</em></p>
</article>

<article>
  <header>
    <h4>Working Groups</h4>
  </header>

  <p>
    A small number of seats are reserved for invited members of the working
    group. The remaining slots are open to all conference attendees but seating
    will be organized to maximize collaboration amongst invited attendees.
    Please list invitees in submission.
  </p>
  <p>
    Please secure invitees' consent prior to submitting your proposal.
    Organizers will do their best to avoid conflicts between meetings with
    overlapping key attendees.
  </p>
  <p><em>Example: Can the community support additional batch executors?</em></p>
</article>

<article>
  <header>
    <h4>Closed Sessions</h4>
  </header>

  <p>
    These sessions are for invited participants only and meant to create a
    focused, productive and private discussion among those already involved in
    the topic.
  </p>
  <p>
    Please list invitees in submission. Please secure invitees' consent prior to
    submitting your proposal.
  </p>
  <p>
    <em>Example: Security committee discussing the impact of recent CVE</em>
  </p>
</article>

<div
  style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;"
>
  <h2 id="workshops" style="margin: 0;">Workshops</h2>
  <a
    href="https://www.pgevents.ca/events/pgconfdev2025/callforpapers/"
    role="button">Submit</a
  >
</div>
<p>
  Have an idea for how to educate current and future Postgres hackers and
  extension developers? Submit a proposal for a hands-on practical training or
  collaborative workshop.
</p>
<p><em>Example: Advanced Patch Feedback Session</em></p>

<div
  style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;"
>
  <h2 id="panels" style="margin: 0;">Panels</h2>
  <a
    href="https://www.pgevents.ca/events/pgconfdev2025/callforpapers/"
    role="button">Submit</a
  >
</div>

<p>
  Want to bring together experts to weigh in on an important community topic?
  From getting developers perspectives on how to push a part of the project
  forward to sharing learnings about community organizing, panels are a great
  way to learn from the experienced members of the community and grew new
  leaders.
</p>
<p><em>Example: Extension upgrades framework proposal evaluations</em></p>

<div
  style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;"
>
  <h2 id="other" style="margin: 0;">Other Ideas?</h2>
  <a
    href="https://www.pgevents.ca/events/pgconfdev2025/callforpapers/"
    role="button">Submit</a
  >
</div>

<p>
  From Community Office Hours to a group run, submit your ideas for enriching
  and connecting the community.
</p>

<h2>Submission Notes</h2>

<p>
  50 minute talks and workshops receive, at most, two complimentary
  registrations. 25 minute talks receive one complimentary registration.
  Community Discussion sessions receive no complimentary registrations. Panels
  and other ideas will receive subsidized registration on a case-by-case basis.
</p>
<h3>Tips</h3>

<ul>
  <li>
    If any portion of your talk covers closed source code, that must be
    disclosed in your submission.
  </li>
  <li>
    Proposed talks about your company's product are unlikely to be accepted
    unless they discuss issues encountered and how PostgreSQL could be modified
    to make it easier to extend and support.
  </li>
  <li>
    Be sure to focus your bio on what makes you uniquely positioned to deliver
    the content you are proposing.
  </li>
  <li>
    Proposed content with a goal of creating consensus around a topic like a
    Community Discussion Session or panel is more likely to be accepted if its
    proposers and/or invited attendees are individuals from multiple companies.
  </li>
  <li>
    Check out the PGConf.dev 2025
    <a href="https://2025.pgconf.dev/schedule.html" target="_blank">schedule</a>
    to see what we accepted and for more inspiration.
  </li>
</ul>

<hr />

<h2>Program Committee</h2>
<li>Melanie Plageman (Microsoft)</li>
<li>Dilip Kumar (Google)</li>
<li>Jonathan Katz (Amazon)</li>
<li>Paul Ramsey (Snowflake)</li>
<li>Jacob Champion (EDB)</li>
