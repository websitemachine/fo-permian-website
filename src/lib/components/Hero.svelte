<script>
  import { base } from '$app/paths';
  import { offerings } from '$lib/data/site';
</script>

<section class="relative isolate overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
  <!-- Background: image + atmospheric gradients -->
  <div class="absolute inset-0 -z-10">
    <img
      src="{base}/img/hero-ai.png"
      alt=""
      aria-hidden="true"
      class="h-full w-full object-cover object-center opacity-40"
    />
    <!-- Top fade to black for nav legibility -->
    <div class="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-bg to-transparent"></div>
    <!-- Bottom fade to bg -->
    <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-bg via-bg/80 to-transparent"></div>
    <!-- Right-side amber vignette — flame/dusk warmth -->
    <div class="absolute right-0 top-1/4 -z-10 h-[600px] w-[600px] rounded-full opacity-25 blur-3xl"
         style="background: radial-gradient(circle, var(--color-flame) 0%, transparent 70%);"></div>
    <!-- Left-side dusk indigo glow -->
    <div class="absolute -left-40 top-1/3 -z-10 h-[500px] w-[500px] rounded-full opacity-30 blur-3xl"
         style="background: radial-gradient(circle, var(--color-dusk) 0%, transparent 70%);"></div>
  </div>

  <div class="container-wide grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-end">
    <div>
      <p class="eyebrow flex items-center gap-3">
        <span class="inline-block h-px w-8 bg-flame"></span>
        West Texas · Neocloud & AI Infrastructure
      </p>

      <h1 class="display-1 mt-6 max-w-4xl">
        Powered land. Contracted power.
        <span class="bg-gradient-to-r from-flame to-flame-hi bg-clip-text text-transparent">
          White space for your GPUs.
        </span>
      </h1>

      <p class="mt-7 max-w-2xl text-lg leading-relaxed text-text-muted md:text-xl">
        FO Permian helps neoclouds and AI infrastructure operators secure land, power, and white space
        in West Texas through our power and data center development partnerships.
      </p>

      <div class="mt-10 flex flex-wrap items-center gap-3">
        <a href="#contact" class="btn btn-primary">Discuss Your Deployment</a>
        <a href="#offerings" class="btn btn-ghost">What we offer ↓</a>
      </div>
    </div>

    <!-- Right column: the three offerings at a glance -->
    <aside class="relative">
      <div class="rounded-lg border border-line-strong bg-surface/60 p-7 backdrop-blur-sm">
        <p class="eyebrow">Three ways to deploy</p>
        <ul class="mt-5 divide-y divide-line">
          {#each offerings as o}
            <li class="py-4 first:pt-0 last:pb-0">
              <a href="#offerings" class="group flex items-baseline gap-4">
                <span class="font-mono text-xs text-text-dim">{o.num}</span>
                <span class="font-display text-lg font-semibold text-text transition-colors group-hover:text-flame">
                  {o.label}
                </span>
              </a>
            </li>
          {/each}
        </ul>
        <p class="mt-5 text-sm text-text-muted">
          FO Permian sources and structures the opportunity. Our partners develop the power and the facilities.
        </p>
      </div>
    </aside>
  </div>
</section>
