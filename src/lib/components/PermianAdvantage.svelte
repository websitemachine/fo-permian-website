<script>
  import { base } from '$app/paths';

  const resources = [
    { label: 'Natural gas', value: 'Source-priced, redundant pipelines' },
    { label: 'Water', value: 'Abundant industrial supply for cooling' },
    { label: 'Fiber', value: 'Diverse, low-latency routes to Texas hubs' },
    { label: 'Land', value: 'Sites with power pathways and room to expand' },
    { label: 'Air quality', value: 'Attainment zone — fast permitting' },
    { label: 'Workforce', value: 'Local industrial expertise at scale' }
  ];
</script>

<section class="relative overflow-hidden border-t border-line bg-bg py-24 md:py-32">
  <div class="container-wide">
    <div class="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
      <div class="order-2 lg:order-1">
        <p class="eyebrow">Six resources, one region</p>
        <h2 class="display-2 mt-5 max-w-xl">
          Land. Fuel. Water. Fiber. Air. Workforce.
        </h2>
        <p class="mt-6 max-w-xl text-text-muted leading-relaxed">
          The Permian Basin concentrates every input a GPU buildout needs. FO Permian brings
          them together into one opportunity — powered land, contracted power, or white space —
          and our development partners deliver it, so operators move on the project, not the procurement.
        </p>

        <ul class="mt-10 grid gap-px overflow-hidden rounded-lg border border-line-strong bg-line-strong sm:grid-cols-2">
          {#each resources as r}
            <li class="bg-bg p-5">
              <p class="font-mono text-xs uppercase tracking-wider text-flame">{r.label}</p>
              <p class="mt-2 text-sm text-text">{r.value}</p>
            </li>
          {/each}
        </ul>
      </div>

      <div class="order-1 lg:order-2">
        <figure class="overflow-hidden rounded-lg border border-line-strong bg-surface">
          <div class="bg-white p-8 md:p-12">
            <img src="{base}/img/hivolt.jpg" alt="HiVolt Energy" class="mx-auto w-full max-w-md" />
          </div>
          <figcaption class="border-t border-line-strong p-5">
            <p class="font-mono text-xs uppercase tracking-wider text-flame">Power development partner</p>
            <p class="mt-1 text-sm text-text">HiVolt Energy · Isolated & utility-connected microgrids, Texas</p>
          </figcaption>
        </figure>
      </div>
    </div>
  </div>
</section>
