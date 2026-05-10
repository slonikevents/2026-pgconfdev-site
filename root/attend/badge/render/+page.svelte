<script>
  import Badge from '../Badge';

  let attendees = $state([]);
  let minimum = $state(0);

  const blankCount = $derived(Math.max(0, minimum - attendees.length));

  function handleFileSelect(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result);
        attendees = data;
      } catch (err) {
        console.error('Failed to parse JSON:', err);
      }
    };
    reader.readAsText(file);
  }
</script>

<style>
  .page {
    break-after: page;
  }

  @media print {
    :global {
      /* Hide every element that is neither .page, a descendant of .page,
        nor an ancestor of a .page. */
      body *:not(.page, .page *, :has(.page)) {
        display: none;
      }

      /* Strip layout (padding/flex/etc.) from ancestors of .page so the
         badge sits flush against the page edge. */
      body *:has(.page):not(.page) {
        display: contents;
      }
    }
  }
</style>

<h1>Render Badges</h1>

<p>
  <label>
    Attendee Report:
    <input type="file" accept=".json" onchange={handleFileSelect} />
  </label>
</p>

<p>
  <label>
    Minimum badges:
    <input type="number" min="0" bind:value={minimum} />
  </label>
</p>

{#if attendees.length > 0}
  <p>
    <button onclick={() => window.print()}>Print All Badges</button>
  </p>
  <p>Found {attendees.length} attendee(s).</p>
{/if}

{#each attendees as attendee (attendee.id)}
  <div class="page">
    <Badge
      firstname={attendee.firstname}
      lastname={attendee.lastname}
      company={attendee.company}
      fullpublictoken={attendee.fullpublictoken}
      regtype={attendee.regtype.regtype}
    />
  </div>
{/each}

{#each { length: blankCount }, i (i)}
  <div class="page"><Badge /></div>
{/each}
