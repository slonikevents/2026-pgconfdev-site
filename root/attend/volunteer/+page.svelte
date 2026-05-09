<script>
  import sfu_map from '../pgconf_map.png?enhanced&w=567;545;360';
  import open_link from './open_link.png?enhanced&w=360';
  import scan from './scan.png?enhanced&w=650;325';
  import checkin_not_confirmed from './checkin_not_confirmed.png?enhanced&w=640;320';
  import checkin_confirmed from './checkin_confirmed.png?enhanced&w=675;320';
  import checkedin from './checkedin.png?enhanced&w=561;280';
  import badgescanned from './badgescanned.png?enhanced&w=378;189';
</script>

<svelte:head>
  <title>Volunteer - PGConf.dev 2026</title>
  <meta name="description" content="Volunteer at PGConf.dev 2026" />
</svelte:head>

<h1>Volunteer</h1>

<p>
  PGConf.dev would not be possible without the support of a dedicated group of
  volunteers! Volunteering is a great way to get more involved in the community,
  and we'd be happy to have you. Currently, our greatest need for 2026 is people
  willing to work at the registration desk and as room hosts on site in
  Vancouver. We are also interested in hearing from people who are willing to
  help with organizing work in advance of the conference either for this year or
  future years. If interested, please contact us at
  <a href="mailto:contact@pgconf.dev">contact@pgconf.dev</a> and let us know how you
  would like to help. Directions for volunteers can be found below.
</p>

<h2>Registration Desk</h2>

<p>
  Thank you for volunteering at the registration desk during PGConf.dev 2026.
  The conference would not be possible without the support of a dedicated group
  of volunteers.
</p>
<p>
  The registration desk is the main point of contact for attendees seeking
  assistance during the conference. The desk is located next to the escalators
  across from security. We ask that all registration desk volunteers review
  these instructions prior to your shift.
</p>

<h3>Showing up for your shift</h3>
<p>
  You can see a list of your volunteer slots at <a
    href="https://www.pgevents.ca/events/pgconfdev2026/volunteer/"
    >https://www.pgevents.ca/events/pgconfdev2026/volunteer/</a
  >. Click the "Access ical version" link if you would like an ICAL version of
  your slots. Times on the page are in Pacific time; the local timezone in
  Vancouver.
</p>
<p>
  Please try to show up at the registration desk a few minutes before your shift
  starts so that the previous volunteers can leave on time.
</p>
<p>
  We ask that you not wear clothing with corporate logos while on shift at the
  registration desk. This makes it clear that you are representing the
  conference and not your employer while on shift. However, The PGConf.dev
  conference t-shirt is allowed to be worn while on shift.
</p>
<h3>Venue Layout</h3>
<enhanced:img src={sfu_map} alt="SFU Floor plan" />
<p>
  Above is a map of the venue showing the rooms we will be using during the
  conference. Attendees might ask you for directions to rooms. All rooms are on
  the first floor except for the RBC Executive room 2200 which is on the second
  floor (not shown on the map). The RBC Executive room is only being used on
  Tuesday for 2 closed meetings.
</p>

<p>
  Note the location of bathrooms (down the hall almost opposite to the entrance
  of Canfor), as questions for directions are common at the registration desk.
</p>

<p>Lunch will be served in the area labelled “Buffet.”</p>

<p>
  Attendees are encouraged to take their food to “Segal” rooms 1400-1430 where
  tables are set up or attendees can eat in the concourse.
</p>

<h3>Checkin Procedures</h3>

<p>
  We expect most checkins Tuesday or Wednesday morning but a few people will
  check in later in the week.
</p>

<p>
  The overview of the checkin procedure is as follows (more details are provided
  below):
</p>
<ol>
  <li>
    Lookup their registration on your phone using the checkin processing
    application
  </li>
  <li>Give them their badge and Lanyard</li>
  <li>Remind them to come back for their t-shirt</li>
  <li>
    Tell attendees that they can take the sponsor provided items from the
    registration desk.
  </li>
  <li>
    We will be giving out the conference poster during the welcome session on
    Wednesday morning. Attendees that miss getting their poster then can get the
    poster at the registration desk from then on. Attendees can also get a
    shipping tube(while supplies last) for the poster if they need one.
  </li>
</ol>
<p>
  Attendee check-in is done using the online conference system. You will need a
  smart-phone with a camera connected to the conference wifi to use the check-in
  system. You need to check an attendee in using the QR code on their ticket or
  with their name. Go to <a
    href="https://www.pgevents.ca/events/pgconfdev2026/checkin/"
    >https://www.pgevents.ca/events/pgconfdev2026/checkin/</a
  >
</p>

<p>
  You can either install an app on your smartphone (Android or IOS) using the
  links on that page or use the web version of the checkin application. You will
  need tosign into the conference system from your web browser using the same
  postgresql.org account that you used to register and volunteer.
</p>

<p>
  If you are using the web-version click on the link under “Open By Link” or use
  the QR code on that page under the link.
</p>
<enhanced:img src={open_link} alt="open link screenshot" />

<p>Scan the QR code on the attendees ticker or search for them by name</p>
<enhanced:img src={scan} alt="scan link screenshot" />
<p>
  Verify that the attendee has confirmed the policy, if the conference policy
  has not been confirmed the screen will show as below, the attendee must go to
  the website (www.pgevents.ca) using their login and confirm the conference
  policy. Do <b>NOT</b> checkin attendees who have not confirmed the policy
</p>

<enhanced:img
  src={checkin_not_confirmed}
  alt="checkin not confirmed screenshot"
/>

<p>
  If the attendee has confirmed the policy then it should show “Policy
  Confirmed” as shown below
</p>

<enhanced:img src={checkin_confirmed} alt="checkin confirmed screenshot" />

<p>
  You can now locate the attendees badge, give it to them and click “Check In.”
</p>
<p>
  The screen should show success; if it doesn’t, you need to address the issue.
</p>

<enhanced:img src={checkedin} alt="checked in screenshot" />

<h3>Registrations with no badge</h3>
<p>
  We will be printing the attendee badges a week prior to the conference but
  will allow people to register (if we don’t sell out) until the end of the
  conference. Attendees who register late will be given a blank badge and they
  can write their own name on the badge. Make a note of the registrants name on
  the list of “Handwritten badges.”
</p>

<h3>Lanyards</h3>
<p>
  A blue lanyards means that the attendee is okay with their photo being taken
  and included in social media posts. Red lanyards means that the attendee does
  not want their photo taken. The registration app will show the attendees photo
  policy choice. They are allowed to change their mind when they pick up their
  badge.
</p>

<h3>T-Shirts</h3>
<p>
  We will start to distribute t-shirts on Tuesday after 10:00am, Wednesday after
  10:00am and all day Thursday and Friday. We will not be distributing t-shirts
  during breakfast on Tuesday or Wednesday.
</p>

<p>
  Attendees selected a t-shirt size when they registered. To process a t-shirt
  you should scan the QR code on the attendees badge with your phone. You can do
  this with either the Conference Check in App OR with your phones camera, you
  must be logged into the www.pgevents.ca site under your conference
  registration.
</p>

<enhanced:img src={badgescanned} alt="badge scanned screenshot" />

<p>Shows the t-shirt size they selected</p>

<p>
  Give the attendee the indicated t-shrt size and click the “Store Date for
  T-shirt’ so the system marks the t-shirt as having been collected.
</p>

<p>
  We give t-shirts out on a best effort basis, if we run out of a t-shirt size
  that the attendee selected then offer them a nearby size.
</p>

<p>
  If the screen says “Field tshirt already marked” then they have already picked
  up their t-shirt.
</p>

<h3>T-Shirt Size Exchanges</h3>
<p>
  If an attendee wants to exchange their t-shirt for a different size they can
  do this after 3PM on Wednesday if their desired size is still available.
</p>

<h3>T-Shirts for hand-written badges</h3>
<p>
  Ask the attendee what size they selected and make a note that they have picked
  up their t-shirt on the “Hand Written Badges” list, a list of hand written
  badges issued.
</p>

<h3>Organizer Contact</h3>
<p>
  If an attendee has a question you can't answer or needs to speak to a member
  of the organization team for any other reason, you can locate someone in
  person or ping the <code>#onsite-volunteering</code> in the
  <a href="https://discord.gg/GEfxA2ahQG">conference Discord</a>. If you can't
  see this channel, join the server first, and then send your Discord username
  to <a href="mailto:contact@pgconf.dev">contact@pgconf.dev</a>.
</p>
<p></p>

<h3>Common Questions</h3>
<p>Below are some common questions attendees might ask.</p>
<h4>Food & Beverages</h4>
<p>
  We are serving a light breakfast, lunch and a morning and afternoon snack.
  Food is served in the buffet area behind the escalators. Food should be
  labelled (Diary free, Vegetarian, Gluten free), we have tried to provide food
  options to accommodate dietary restrictions. If an attendee has a question
  about the food ingredients they should ask the catering staff.
</p>

<h4>Meet & Eats</h4>
<p>
  There will be a meet and eat event Tuesday and Thursday evenings, attendees
  should sign up following the instructions at <a
    href="https://2026.pgconf.dev/attend/social"
    >https://2026.pgconf.dev/attend/social</a
  >. We will email people who signed up their groups on the day. Group leaders
  will have signs and we will meet in the Foyer at 5:00pm. Attendees pay for
  their own meals.
</p>

<h4>Wednesday Conference Social</h4>
<p>
  At the <a href="https://roguewetbar.com">Rogue Kitchen and Wet Bar</a>, just
  across the street from the SFU Harbour Center, the Gala Reception starts at
  18:00 on Wednesday, and includes lots of reception style food for dinner and
  two drinks from the bar. Attendees should bring their conference badges.
</p>

<h2>Room Hosts</h2>

<p>
  Please arrive at the room at the beginning of your shift, which should
  correspond to 10 minutes before the first scheduled talk in that room.
</p>

<p>
  Find and introduce yourself to the other room host for the scheduled slot.
</p>

<p>
  Find and introduce yourself to the AV technician in the room. They should be
  located near the back of the room and should be easily identifiable.
</p>

<p>
  There are two separate jobs to do. Decide with the other room host which
  person will handle which job.
</p>

<h3>Job A</h3>

<p>Take the time cards, which should be located near the A/V technician.</p>

<p>
  Introduce yourself to the upcoming speaker. Help them get set up with the A/V
  equipment and anything else they need.
</p>

<p>
  Ask the speaker how they want to be introduced, and whether they want to allow
  questions during the talk or only at the end.
</p>

<p>
  Let them know that you will hold up cards to indicate how much time they have
  left.
</p>

<p>
  Indicate to them where you’ll be sitting. Put your time cards on that seat to
  reserve it.
</p>

<p>
  Remind the speaker to ask the audience to fill out feedback for this and all
  other talks they attend. Feedback links are on the schedule page.
</p>

<p>
  Introduce the speaker on time so that the session starts on schedule. If the
  speaker doesn’t want to answer questions during the talk, inform the audience
  to hold their questions until the end of the talk.
</p>

<p>
  Don’t allow the audience to interrupt or heckle the speaker. If necessary,
  remind them of the Code of Conduct.
</p>

<p>
  Keep an eye on the clock and hold up the time cards at the appropriate times.
</p>

<p>
  If there is time for questions and the speaker wants to answer questions,
  bring the microphone to people so that they can be heard while asking
  questions.
</p>

<p>
  When time is up, if the audience is still asking questions, politely inform
  them that the room must be cleared.
</p>

<p>
  Remind the speaker to pick up their speaker gift at the registration desk.
</p>

<p>
  Don’t forget to leave the time cards near the A/V technician before you leave
  the room!
</p>

<h3>Job B</h3>

<p>
  Remain near the door to the room as people are entering, and make sure that it
  remains open. If anyone needs help finding a seat, help direct them.
</p>

<p>
  If a talk is popular, politely ask the audience to move toward the center of
  the room. Look for open seats and ask people who’ve already sat down to shift
  over. You may need to repeat this process as people enter the room.
</p>

<p>
  Once the talk starts, quietly point late attendees toward open seats. If there
  aren’t any open seats, inform them that they will have to stand in the back of
  the room. If the speaker doesn’t want to answer the questions during the talk,
  quietly inform late attendees that they should hold their questions until the
  end of the talk.
</p>

<p>Once it looks like no one else will be joining the talk, close the door.</p>

<p>
  About ten minutes into the talk, count how many people are in the room. Post
  the talk name and your count of attendees to the
  <code>#talk-counts</code> channel in the Discord server. It's not important
  that the count is perfectly accurate, but knowing which talks were popular
  helps the program committee make decisions in future years. (If you can't see
  this channel,
  <a href="https://discord.gg/GEfxA2ahQG">join the conference Discord</a>
  and then send your Discord username to
  <a href="mailto:contact@pgconf.dev">contact@pgconf.dev</a>.)
</p>

<p>
  When time is up, open the door. If necessary, i.e. if people are talking
  instead of exiting the room, politely inform the audience to quickly exit the
  room in preparation for the next talk.
</p>

<h2>Photography</h2>

<p>
  Volunteers are encouraged to take photos during the event and to share them
  via the conference's social media accounts. It is very important not to take
  photos including anyone who is wearing a red lanyard. A red lanyard indicates
  that this person has not consented to be photographed at this event.
</p>

<p>
  To post photos, go to your
  <a href="https://www.pgevents.ca/events/pgconfdev2026/register"
    >conference registration page</a
  >. For historical reasons, it is called "Twitter Posting". We no longer use
  Twitter. You can use the web application found there to submit photos, and
  they will be sent out via social media once approved by a member of the
  organization team. If you do not see the "Twitter Posting" option on your
  registration page, speak to a member of the organization team or email
  <a href="mailto:contact@pgconf.dev">contact@pgconf.dev</a> for access.
</p>

<h2>Complimentary Registration for Volunteers</h2>

<p>
  Most volunteers are people who are already planning to attend the event and
  help out in exchange for no consideration. Therefore, we only offer free
  tickets to people who are willing to commit to <b>at least eight hours</b> of
  volunteering during the event and who are willing to have their volunteer
  shifts <b>assigned by the organizers</b>. We currently do not anticipate
  awarding any more free tickets to volunteers for this year's event; however,
  we are still looking for a few more people to fill up our remaining volunteer
  slots.
</p>
