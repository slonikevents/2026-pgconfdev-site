<script>

  // The photo data is loaded with server-side javascript from the original
  // YAML metadata.
  let { data } = $props();

  // The photos themselves may live in a separate host.  This is fine,
  // as long as the YAML files are locally in this server.
  const mediaBase = 'https://media.postgresql.org/pgconf.dev/2026-slideshow';

  // Svelte doesn't like the way we reference `data` here, but in our case
  // it doesn't change after load, so ignore that warning.
  // svelte-ignore state_referenced_locally
  const photos = [...data.photos];
  // This is apparently called a "Fisher-Yates" shuffle.
  for (let i = photos.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [photos[i], photos[j]] = [photos[j], photos[i]];
  }

  // Build a lookup map from "hash key" (path) to index
  const indexByKey = Object.fromEntries(
    photos.map((p, i) => [`${p.subdir}/${p.file}`, i])
  );

  let current = $state(0);
  let displayed = $state(0);
  let ready = $state(false);

  // The browser location is updated to the permalink for this photo, but we
  // use 'onload' below to set the 'displayed' photo once it is actually
  // loaded.  This is because it can take some time between the photo being
  // requested and it actually showing.
  $effect(() => {
    if (!ready) {
      const hash = window.location.hash.slice(1);
      if (hash in indexByKey) current = indexByKey[hash];
      ready = true;
    }
    const photo = photos[current];
    window.location.hash = `${photo.subdir}/${photo.file}`;
  });

  // On initial page load, the slideshow advances automatically.  There are prev
  // and next buttons, which automatically stop the slideshow when clicked.
  // There's also a start/stop button that can be used to toggle the state, and
  // the time between one load and the next can be set in a text box.
  // We want to start the timer on each photo's onload(), so that each photo is on
  // display at least during 'interval'.  It might be longer if the next photo is
  // large, but that beats having the next photo disappear almost immediately.
  let interval = $state(3);
  let savedInterval = $state(3);
  let timer;

  function startTimer() {
    clearInterval(timer);
    if (interval > 0) {
      timer = setTimeout(() => { current = (current + 1) % photos.length; }, interval * 1000);
    }
  }

  // Save the current interval when the slideshow is turned off, and restore
  // to that value when it is restarted.
  function toggleSlideshow() {
    if (interval > 0) {
      savedInterval = interval;
      interval = 0;
    } else {
      interval = savedInterval;
    }
  }

  $effect(() => {
    interval;          // depend on interval
    startTimer();
    return () => clearTimeout(timer);
  });

  function prev() {
    interval = 0;
    current = (current - 1 + photos.length) % photos.length;
  }
  function next() {
    interval = 0;
    current = (current + 1) % photos.length;
  }

  // Position the prev/slideshow/next buttons just above the footer.
  let footerHeight = $state(0);
  $effect(() => {
    const footer = document.querySelector('footer');
    if (!footer)
      return;
    const observer = new ResizeObserver(() => {
      footerHeight = footer.offsetHeight;
    });
    observer.observe(footer);
    return () => observer.disconnect();
  });

  // Arrow keys also go "prev" and "next", for convenience; spacebar toggles slideshow.
  $effect(() => {
    function handleKey(e) {
      if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'ArrowRight') next();
      else if (e.key === ' ') { e.preventDefault(); toggleSlideshow(); }
    }

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  });

  // Add <link preload> to preload the next N photos.  This avoids having to
  // wait the CDN too frequently.  But remove previous preloads to avoid using
  // excessive browser memory.
  $effect(() => {
    if (!ready) return;

    // N=3 seems a good number
    const links = [1, 2, 3].map(offset => {
      const photo = photos[(current + offset) % photos.length];
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = `${mediaBase}/${photo.subdir}/${photo.file}`;
      document.head.appendChild(link);
      return link;
    });

    return () => links.forEach(link => link.remove());
  });

</script>

<style>
#photo-all {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  margin: 0;
  padding: 0;
  position: relative;
  width: 100%;
}

#photo-wrapper {
  align-items: center;
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: center;
  min-height: 0;
  position: relative;
}

#photo {
  display: block;
  max-height: 100%;
  max-width: 100%;
}

/* leave some room with margin-bottom. This moves the infobox a bit higher,
   so that the prev/slide/next buttons don't hide it. */
#photo-info {
  position: relative;
  top: auto;
  bottom: 0;
  width: 100%;
  margin-bottom: 3rem;
  min-height: 6em;
  min-width: 20em;
  background-color: #f5f5f5;
  opacity: 0.9;
  font-size: 100%;
  padding: 0;
}

#photo-metadata {
  position: absolute;
  left: 0.75em;
  top: 0.5em;
}

button.prev, button.next {
  position: fixed;
  bottom: 1rem;
  z-index: 10;
}

.next-group {
  position: fixed;
  right: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  z-index: 10;
}

button.next, button.slideshow {
  position: static;
}
button.prev { left: 1rem; }
button.next { right: 1rem; }

/* on narrow screens, hide the word 'slideshow'. Otherwise the button
   is too wide */
@media (max-width: 480px) {
  .slideshow-long {
    display: none;
  }
}
</style>

<section class="slideshow">
  <!-- this is the "prev" button -->
  <button class="prev" style="bottom: {footerHeight + 16}px" onclick={prev}>← Previous</button>

  <!--
    We don't display the photo until the metadata files have been loaded and shuffled.
    Moreover, the timeout to move to the next photo is only set once the photo is loaded.
  -->
  {#if ready}
  <div id="photo-all">
    <div id="photo-wrapper">
      <img id="photo"
           src={`${mediaBase}/${photos[current].subdir}/${photos[current].file}`}
           alt={photos[displayed].title}
           onload={() => { displayed = current; startTimer(); }} />
    </div>

    <!-- the photo and description go here -->
    <div id="photo-info">
      <div id="photo-metadata">
        {#if photos[displayed].url}
        <a id="gallery-title" href={photos[displayed].url}>{photos[displayed].title}</a>
        {:else}
        <span id="gallery-title">{photos[displayed].title}</span>
        {/if}{#if photos[displayed].city}, in {photos[displayed].city}{/if}
        <div style="font-size: 90%"><span id="author">{photos[displayed].author}</span>{#if photos[displayed].year}, <span id="year">{photos[displayed].year}</span>{/if}</div>
        <div style="font-size: 90%"><span id="license">{photos[displayed].license}</span></div>
      </div>    <!-- photo-metadata -->
    </div>      <!-- photo-info -->
  </div>        <!-- photo-all -->
  {/if}

  <!-- the other two buttons, with all and shrinking "start/stop" button, are here -->
  <div class="next-group" style="bottom: {footerHeight + 16}px">
    <button class="slideshow" onclick={toggleSlideshow}>
      {interval > 0 ? 'Stop' : 'Start'}
      <span class="slideshow-long"> slideshow</span>
      <input
          id="slideshow_interval"
          type="number"
          min="0"
          step="0.5"
          value={interval}
          style="width: 3em; text-align: right"
          onclick={(e) => e.stopPropagation()}
          onchange={(e) => { e.stopPropagation(); interval = e.target.valueAsNumber; }}
          />
    </button>

    <button class="next" onclick={next}>Next →</button>
  </div>

</section>
