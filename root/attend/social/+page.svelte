<script>
  import { resolve } from '$app/paths';
  import { Plane, Train } from '@lucide/svelte';

  const meateat_form = 'https://docs.google.com/forms/d/e/1FAIpQLSfCDRRFlapvY7tgMpgsKgVvGjVDw6usj3YVAcl6Po8DU7Jgsw/viewform?usp=publish-editor';

  import rogueBanner from './rogue.jpg'
  import bbBanner from './butcher.jpg'

</script>

<svelte:head>
  <title>Social Events - PGConf.dev 2026</title>
  <meta
    name="description"
    content="In addition to technical content and presentations, PGConf.dev 2026 is a place to meet and get to know your fellow PostgreSQL community members. Over dinner, over a beer, over a board game, on a run or on a walk, building community is what this conference is about."
  />
</svelte:head>

<h1>Social Events</h1>

<p>
  If you have any questions about social events, please do not hesitate to
  <a href={resolve('/about/contact-us')}>contact us</a>.
</p>

<a name="meet" />
<h2>Meet &amp Eat (Tuesday &amp; Thursday)</h2>

<p>Don’t stay home and order room service, come out and meet your fellow community members for dinner at the classic <b>Meat &amp; Eat</b> event! Since its inception, this event has become one of our most popular, a small group (about 8 people) experience to get to know your Postgres people in a relaxed, un-hurried way.</p>

<ol>
<li>Sign up using <a href={meateat_form} target="_blank">this form</a>.</li>
<li>We will email you with your group number, restaurant and group leader contact information.</li>
<li>On the day, at 5:30PM look for your group leader in the concourse by Registration.</li>
<li>Walk together to your restaurant, have dinner, conversation and a great time.</li>
<li>Pay for your meal <b>individually</b>. This is a <b>self-pay dinner</b>, so do not forget your credit card!</li>
</ol>


<a name="gala" />
<h2>Gala Reception (Wednesday)</h2>

<p>
At the <a href="https://roguewetbar.com" target="_blank">Rogue Kitchen and Wet Bar</a>, just across the street from the SFU Harbour Center, the Gala Reception starts at 6PM on Wednesday, and includes lots of reception style food for dinner and two drinks from the bar.
</p>

<p><enhanced:img src={rogueBanner} alt="Rogue Kitchen and Wet Bar" /></p>

<p>
The Reception is included in your conference registration, so make sure you bring your registration badge when you head to the event. If the crowds are getting a bit overwhelming, maybe slip to the upstairs gaming area to try out some classic board games.
</p>

<a name="run" />
<h2>Group Fun Run</h2>
<p>
Downtown Vancouver is right next to one of the largest urban parks in the world, <a>Stanley Park</a>, and the group fun run will take you through as much or as little of it as you like.
<p>

<p>
<b>Watch this space for start times and meet-up points!</b>
</p>

<a name="sing" />
<h2>Karaoke</h2>
<p>
Unwind and loosen those vocal chords with a Postgres Karaoke session!
</p>
<p>
<b>Watch this space for meet-up time and location.</b>
</p>


<a name="beer" />
<h2>Conference Pub</h2>

<p>Dinner is over, and you still want to mix it up with other Postgres people? Head to the <a href="https://maps.app.goo.gl/u1ZRSaNi6VFpGUVN9" target="_blank">Butcher &amp; Bulluck Pub</a>, at 911 West Pender Street, for after-hours carousing. The Butcher &amp; Bulluck is the easy answer to the question “where should we meet up”.

<p><enhanced:img src={bbBanner} alt="Butcher &amp; Bulluck Pub" /></p>

