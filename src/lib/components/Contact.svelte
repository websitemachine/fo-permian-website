<script>
  import { site } from '$lib/data/site';
</script>

<section id="contact" class="relative overflow-hidden border-t border-line bg-bg py-24 md:py-36">
  <!-- Atmospheric glow -->
  <div class="absolute left-1/2 top-1/3 -z-10 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-3xl"
       style="background: radial-gradient(circle, var(--color-flame) 0%, transparent 65%);"></div>

  <div class="container-wide">
    <div class="mx-auto max-w-4xl text-center">
      <p class="eyebrow">Discuss your deployment</p>
      <h2 class="display-1 mt-6">
        Tell us what your GPUs need: powered land, a PPA, or white space.
      </h2>
      <p class="mx-auto mt-7 max-w-2xl text-lg text-text-muted leading-relaxed">
        Email us which of the three you're looking for, your target scale, and your timeline. We'll come back
        with how FO Permian and our development partners can structure it. We respond to qualified inquiries
        within one business day.
      </p>
    </div>

    <div class="mt-12 flex justify-center">
      <a href="mailto:{site.contact.email}" class="btn btn-primary">Email {site.contact.email}</a>
    </div>

    <div class="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-text-muted">
      <a href="tel:{site.contact.phone.replace(/[^+\d]/g, '')}" class="transition-colors hover:text-flame">{site.contact.phoneDisplay}</a>
      <span class="text-text-dim">·</span>
      <span>{site.contact.hours}</span>
    </div>
  </div>
</section>
