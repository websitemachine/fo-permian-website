<script>
  import { offerings } from '$lib/data/site';
</script>

<section id="offerings" class="relative border-t border-line bg-bg py-24 md:py-32">
  <div class="container-wide">
    <div class="max-w-3xl">
      <p class="eyebrow">What we offer</p>
      <h2 class="display-2 mt-5">
        Three ways to put GPUs on the ground in West Texas.
      </h2>
      <p class="mt-6 text-text-muted leading-relaxed">
        Whether you need a site to build on, a power supply to contract, or finished space to lease,
        FO Permian brings the opportunity together and our development partners deliver it.
      </p>
    </div>

    <div class="mt-16 grid gap-px overflow-hidden rounded-lg border border-line-strong bg-line-strong md:grid-cols-3">
      {#each offerings as o}
        <article class="group relative flex flex-col gap-5 bg-bg p-8 transition-colors hover:bg-surface md:p-10">
          <span class="font-mono text-xs text-text-dim">{o.num}</span>
          <h3 class="display-3">{o.label}</h3>
          <p class="text-text-muted leading-relaxed">{o.body}</p>
          <a
            href="#contact"
            class="mt-auto inline-flex items-center gap-2 pt-2 font-mono text-xs uppercase tracking-wider text-text-muted transition-colors group-hover:text-flame"
          >
            Ask about {o.href}
            <span aria-hidden="true" class="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </article>
      {/each}
    </div>
  </div>
</section>
