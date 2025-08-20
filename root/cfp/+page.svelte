<script>
  import { Presentation } from '@lucide/svelte';
  import { UsersRound } from '@lucide/svelte';
  import { GraduationCap } from '@lucide/svelte';
  import { Lightbulb } from '@lucide/svelte';
</script>

<style>
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
      <dt><a href="#present">Present <Presentation /></a></dt>
      <dd>
        Structured sessions where speakers community members share knowledge,
        experiences, or new ideas in a traditional one-to-many format.
      </dd>
      <dt><a href="#organize">Organize <UsersRound /></a></dt>
      <dd>
        Interactive Community Discussion Sessions on Postgres development and
        community building topics where participants discuss systemic community
        and technical challenges and brainstorm solutions.
      </dd>
      <dt><a href="#educate">Educate <GraduationCap /></a></dt>
      <dd>
        From workshops to panels, these sessions focus on enrichment and growing
        future Postgres contributors.
      </dd>
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

<h2 id="present">PRESENT</h2>

<p style="margin-block: 1rem; text-align: center;">
  <a
    href="https://www.pgevents.ca/events/pgconfdev2025/callforpapers/"
    role="button">Submit a Presentation</a
  >
</p>

<p>
  Presentations are structured sessions where community members share knowledge,
  experiences, or new ideas with the PostgreSQL community. They come in three
  main formats:
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
  <li>
    <strong>Poster Sessions</strong> – Informal sessions where presenters display
    their work on posters and engage in one-on-one or small-group discussions with
    attendees who circulate through the session.
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

<p>See our schedule last year for more</p>

<h2 id="organize">ORGANIZE</h2>

<p style="margin-block: 1rem; text-align: center;">
  <a
    href="https://www.pgevents.ca/events/pgconfdev2025/callforpapers/"
    role="button">Submit a Community Discussion Session</a
  >
</p>

<p>
  The goal of community discussion sessions are to engage with the most active
  areas of Postgres development and community efforts and with the people
  working on them!
</p>

<p>
  We offer three session types to accommodate diverse topics and preferences of
  the hackers and community organizers proposing them:
</p>

<article>
  <header>
    <h4>Open Discussion Sessions</h4>
  </header>

  <p>
    These sessions are designed for everyone to participate. Share your
    perspectives, challenge ideas, and connect with fellow attendees on topics
    that matter most to you. No invitation needed – just bring your curiosity
    and passion.
  </p>
  <p><em>Example: The future of pg_stat_statements</em></p>
</article>

<article>
  <header>
    <h4>Working Groups</h4>
  </header>

  <p>
    Curious how the Postgres community decides on key topics? Join the working
    groups to be a fly on the wall in the conversation. These sessions bring
    together invited participants for focused discussions on key initiatives and
    challenges. While the core discussion is among the invited, others are
    welcome to attend and observe the collaborative process unfold. It's a
    unique opportunity to gain insight into the dedicated work shaping our
    community's future.
  </p>
  <p><em>Example: Can the community support additional batch executors?</em></p>
</article>

<article>
  <header>
    <h4>Closed Sessions</h4>
  </header>

  <p>
    These sessions are for invited participants only and meant to create a
    focused, productive and private discussion among hackers already involved in
    the topic, and who collaborated online leading up to the conversation.
    Please list invitees in submission.
  </p>
  <p>
    <em>Example: Security committee discussing the impact of recent CVE</em>
  </p>
</article>

<h2 id="educate">EDUCATE</h2>

<p style="margin-block: 1rem; text-align: center;">
  <a
    href="https://www.pgevents.ca/events/pgconfdev2025/callforpapers/"
    role="button">Submit a Workshop or Panel</a
  >
</p>

<article>
  <header>
    <h4>Workshops</h4>
  </header>

  <p>
    Have an idea for how to educate current and future Postgres hackers and
    extension developers? Submit a proposal for a hands-on practical training or
    collaborative workshop.
  </p>
  <p><em>Example: Advanced Patch Feedback Session</em></p>
</article>

<article>
  <header>
    <h4>Panel Discussions</h4>
  </header>

  <p>
    Want to bring together experts to weigh in on an important community topic?
    From getting developers perspectives on how to push a part of the project
    forward to sharing learnings about community organizing, panels are a great
    way to learn from the experienced members of the community and grew new
    leaders.
  </p>
  <p><em>Example: Extension upgrades framework proposal evaluations</em></p>
</article>

<h2 id="other">OTHER IDEAS?</h2>

<p style="margin-block: 1rem; text-align: center;">
  <a
    href="https://www.pgevents.ca/events/pgconfdev2025/callforpapers/"
    role="button">Submit Another Idea</a
  >
</p>

<p>
  From Community Office Hours to a group run, submit your ideas for enriching
  and connecting the community.
</p>

<h2>Submission Notes</h2>

<p>
  A talk may be proposed as both a 50 minute talk and 25 minute talk. Submit one
  copy of the proposal under the 50 minute track and another copy under the 25
  minute track. In the body of the proposal, explain which length you prefer.
  Alternative content may only be proposed to the alternative content track.
</p>
<p>
  While you may propose content with multiple speakers, 50 minute talks receive,
  at most, two complimentary registrations. 25 minute talks receive one
  complimentary registration. And alternative content creators will receive
  subsidized registration on a case-by-case basis.
</p>
<h3>Tips</h3>

<ul>
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
    summit or microconference is more likely to be accepted if it is co-proposed
    by individuals from multiple companies.
  </li>
  <li>
    Check out the PGConf.dev 2024
    <a
      href="https://www.pgevents.ca/events/pgconfdev2024/schedule/"
      target="_blank">schedule</a
    >
    to see what we accepted and for more inspiration.
  </li>
</ul>

<hr />

<h2>Program Committee</h2>
