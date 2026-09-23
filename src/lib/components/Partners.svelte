<script>
  import { partners } from '$lib/data/site';
</script>

<section id="partners" class="relative border-t border-line bg-dusk py-24 md:py-32">
  <div class="container-wide">
    <div class="max-w-3xl">
      <p class="eyebrow">Partners</p>
      <h2 class="display-2 mt-5">
        FO Permian structures the opportunity. Our partners build and operate it.
      </h2>
      <p class="mt-6 text-text-muted leading-relaxed">
        FO Permian sources sites, structures power and white space opportunities, and manages the
        relationship with each customer. Power generation and data center facilities are developed,
        owned, and operated by our development partners under terms set for each project.
      </p>
    </div>

    <div class="mt-14 grid gap-6 md:grid-cols-2">
      {#each partners as partner}
        <article class="rounded-lg border border-line-strong bg-bg/60 p-8 md:p-10">
          <p class="font-mono text-xs uppercase tracking-wider text-flame">{partner.role}</p>
          <h3 class="display-3 mt-3">{partner.name}</h3>
          <p class="mt-5 leading-relaxed text-text-muted">{partner.blurb}</p>
          {#if partner.contact}
            <a
              href="mailto:{partner.contact}"
              class="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-text transition-colors hover:text-flame"
            >
              {partner.contact}
              <span aria-hidden="true">→</span>
            </a>
          {/if}
        </article>
      {/each}

      <article class="flex flex-col justify-center rounded-lg border border-dashed border-line-strong p-8 md:p-10">
        <p class="font-mono text-xs uppercase tracking-wider text-text-dim">Partnership inquiries</p>
        <p class="mt-3 text-text-muted">
          Power developers, data center developers, capital partners, and EPC firms interested in
          West Texas GPU infrastructure —
          <a href="#contact" class="text-flame underline-offset-4 hover:underline">get in touch</a>.
        </p>
      </article>
    </div>
  </div>
</section>
