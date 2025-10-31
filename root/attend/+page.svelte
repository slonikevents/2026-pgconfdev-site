<script>
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
  <title>Registration</title>
  <meta
    name="description"
    content="PGConf.dev is an annual event where users, developers, and community organizers come together to focus on PostgreSQL development and community growth. This event is a strategic gathering of the PostgreSQL community that takes place before development begins."
  />
</svelte:head>

<h1>Registration</h1>

<p>
  PGConf.dev is an annual event where users, developers, and community
  organizers come together to focus on PostgreSQL development and community
  growth. This event is a strategic gathering of the PostgreSQL community that
  takes place before development begins.
</p>

<table>
  <thead>
    <tr>
      <th>Ticket</th>
      <th>Price</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Regular</td>
      <td>$350 CAD</td>
      <td>Normal conference attendance</td>
    </tr>
    <tr>
      <td>Student</td>
      <td>$75 CAD</td>
      <td>Students with proof of enrollment</td>
    </tr>
    <tr>
      <td>Speaker</td>
      <td>No charge</td>
      <td>Free for confirmed speakers</td>
    </tr>
  </tbody>
</table>
<p>A 5% GST tax applies on top of the above ticket prices</p>

<p style="text-align: center;">
  <a role="button" href="https://www.pgevents.ca/events/pgconfdev2026/register"
    >Register</a
  >
</p>

<article>
  <h3>Cancellation</h3>

  If you need to cancel your registration after you have paid please email
  <a href="mailto:contact@pgconf.dev">contact@pgconf.dev</a> for manual handling.
  Tickets can be refunded up until April 19 2026. We can not offer a refund after
  this date. Cancellations for registration where a visa invitation letter has been
  provided can not be refunded.
</article>

<article>
  <h3>Students</h3>
  <p>
    We require proof of current enrollment such as a current student
    identification, or some similar proof of enrollment. If you are unsure if
    you qualify for a student ticket, email <a href="mailto:contact@pgconf.dev"
      >contact@pgconf.dev</a
    > and we will give a definitive answer.
  </p>
  <p>
    We will contact you after you register and ask you to provide proof of your
    student status. The number of tickets reserved for students is limited, we
    recommend students register early. Students who register after the student
    tickets have been sold out will need to buy a full price regular
    registration.
  </p>
</article>
