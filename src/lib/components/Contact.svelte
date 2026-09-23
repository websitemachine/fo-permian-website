<script>
  import { site } from '$lib/data/site';
</script>

<section id="contact" class="relative overflow-hidden border-t border-line bg-bg py-24 md:py-36">
  <!-- Atmospheric glow -->
  <div class="absolute left-1/2 top-1/2 -z-10 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-3xl"
       style="background: radial-gradient(circle, var(--color-flame) 0%, transparent 65%);"></div>

  <div class="container-wide">
    <div class="mx-auto max-w-4xl text-center">
      <p class="eyebrow">Discuss your deployment</p>
      <h2 class="display-1 mt-6">
        Tell us what your GPUs need: powered land, a PPA, or white space.
      </h2>
      <p class="mx-auto mt-7 max-w-2xl text-lg text-text-muted leading-relaxed">
        Share which of the three you're looking for, your target scale, and your timeline. We'll come back
        with how FO Permian and our development partners can structure it. We respond to qualified inquiries
        within one business day.
      </p>
      <div class="mt-10">
        <a href="mailto:{site.contact.email}?subject={encodeURIComponent('Deployment inquiry — powered land / PPA / white space')}" class="btn btn-primary">
          Discuss Your Deployment
        </a>
      </div>
    </div>

    <div class="mx-auto mt-16 grid max-w-4xl gap-6 sm:grid-cols-2">
      <a
        href="mailto:{site.contact.email}"
        class="group relative overflow-hidden rounded-lg border border-line-strong bg-surface p-8 transition-all hover:border-flame md:p-10"
      >
        <p class="font-mono text-xs uppercase tracking-wider text-flame">Email our team</p>
        <p class="display-3 mt-4 text-2xl transition-colors group-hover:text-flame">
          {site.contact.email}
        </p>
        <p class="mt-3 text-sm text-text-muted">
          Tell us whether you need powered land, a PPA, or white space.
        </p>
        <span class="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-text-muted transition-colors group-hover:text-text">
          Discuss your deployment <span aria-hidden="true" class="transition-transform group-hover:translate-x-1">→</span>
        </span>
      </a>

      <a
        href="tel:{site.contact.phone.replace(/[^+\d]/g, '')}"
        class="group relative overflow-hidden rounded-lg border border-line-strong bg-surface p-8 transition-all hover:border-flame md:p-10"
      >
        <p class="font-mono text-xs uppercase tracking-wider text-flame">Call us</p>
        <p class="display-3 mt-4 text-2xl transition-colors group-hover:text-flame">
          {site.contact.phoneDisplay}
        </p>
        <p class="mt-3 text-sm text-text-muted">{site.contact.hours}.</p>
        <span class="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-text-muted transition-colors group-hover:text-text">
          Place a call <span aria-hidden="true" class="transition-transform group-hover:translate-x-1">→</span>
        </span>
      </a>
    </div>
  </div>
</section>
