<script module>
  import regularHref from './regular.png';
  import speakerHref from './speaker.png';
  import staffHref from './staff.png';
  import studentHref from './student.png';

  const info = {
    Regular: { fill: 'rgb(0, 63, 119)', href: regularHref },
    Speaker: { fill: 'rgb(0, 126, 119)', href: speakerHref },
    Staff: { fill: 'rgb(120, 53, 8)', href: staffHref },
    Student: { fill: 'rgb(0, 63, 119)', href: studentHref },
  };

  export const regTypes = Object.keys(info);

  const margin = 3; // Bleed margin in mm
  const markLength = 8; // Cut mark length in mm
  const markOffset = 3; // Cut mark offset in mm
  const width = 105; // Intrinsic badge width in mm
  const height = 140; // Intrinsic badge height in mm

  const offset = margin + markLength + markOffset;
</script>

<script>
  import '@fontsource/dejavu-serif/400.css';
  import '@fontsource/dejavu-serif/700.css';
  import fitty from 'fitty';
  import QR from '$lib/QR.svelte';

  const {
    firstname,
    lastname,
    company,
    fullpublictoken,
    regtype = 'Regular',
    showOutline,
  } = $props();

  function autofit(el) {
    const size = parseFloat(getComputedStyle(el).fontSize);
    const instance = fitty(el, { minSize: 1, maxSize: size });
    document.fonts.ready.then(() => instance.fit());
    return () => instance.unsubscribe();
  }
</script>

<style>
  .outer {
    height: calc(var(--height) + 2 * var(--offset));
    margin: 0 auto;
    padding: var(--offset);
    position: relative;
    width: calc(var(--width) + 2 * var(--offset));
  }

  .badge {
    align-items: center;
    display: flex;
    flex-direction: column;
    font-family: 'DejaVu Serif';
    height: 100%;
    justify-content: space-between;
    line-height: 1.2;
    print-color-adjust: exact;
    text-align: center;
  }

  .header {
    align-items: center;
    display: flex;
    flex-direction: column;
    width: calc(100% - 10mm);
  }

  .name {
    font-size: 12mm;
    font-weight: 700;
    margin-top: 12mm;
  }

  .company {
    font-size: 8mm;
    margin-top: 2mm;
  }

  .badge :global(.qr) {
    fill: #033c6b;
    height: 25mm;
    width: 25mm;
  }

  .outline {
    outline: 0.2mm solid rgb(231 234 240);
  }

  .emblem {
    background-color: var(--fill);
    display: block;
    margin: 0 calc(var(--margin) * -1) calc(var(--margin) * -1);
    padding: 0 var(--margin) var(--margin);

    img {
      display: block;
      width: 100%;
    }
  }

  .mark {
    inset: 0;
    position: absolute;
    stroke-width: 0.2;
    stroke: black;
  }
</style>

<div
  class="outer"
  style:--fill={info[regtype].fill}
  style:--offset="{offset}mm"
  style:--margin="{margin}mm"
  style:--width="{width}mm"
  style:--height="{height}mm"
>
  <div class="badge" class:outline={showOutline}>
    <div class="header">
      <div class="name" {@attach autofit}>{firstname}<br />{lastname}</div>
      {#if company}
        <div class="company" {@attach autofit}>{company}</div>
      {/if}
    </div>

    {#if fullpublictoken}
      <QR class="qr" text={fullpublictoken} />
    {/if}

    <div class="emblem">
      <img src={info[regtype].href} alt={regtype} />
    </div>
  </div>

  <svg
    viewBox="{-offset} {-offset} {width + 2 * offset} {height + 2 * offset}"
    class="mark"
  >
    <!-- Horizontal cut marks -->
    {#each [0, height] as y (y)}
      <path d="M {-offset} {y} h {markLength}" />
      <path d="M {width + offset} {y} h {-markLength}" />
    {/each}

    <!-- Vertical cut marks -->
    {#each [0, width] as x (x)}
      <path d="M {x} {-offset} v {markLength}" />
      <path d="M {x} {height + offset} v {-markLength}" />
    {/each}
  </svg>
</div>
