<script>
  import { base } from '$app/paths';
  import { site } from '$lib/data/site';
  import Logo from './Logo.svelte';
  const year = new Date().getFullYear();
</script>

<footer class="relative border-t border-line bg-bg pt-16 pb-10">
  <div class="container-wide">
    <div class="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
      <div>
        <Logo variant="hex" height={140} />
        <p class="mt-5 max-w-sm text-sm leading-relaxed text-text-muted">
          {site.description}
        </p>
        <ul class="mt-5 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs uppercase tracking-wider text-text-muted">
          <li><a href="{base}/#offerings" class="transition-colors hover:text-flame">Powered Land</a></li>
          <li><a href="{base}/#offerings" class="transition-colors hover:text-flame">Power Purchase Agreements</a></li>
          <li><a href="{base}/#offerings" class="transition-colors hover:text-flame">White Space</a></li>
        </ul>
      </div>

      <div>
        <p class="eyebrow">Contact</p>
        <ul class="mt-4 space-y-2 text-sm">
          <li>
            <a href="mailto:{site.contact.email}" class="text-text transition-colors hover:text-flame">
              {site.contact.email}
            </a>
          </li>
          <li>
            <a href="tel:{site.contact.phone.replace(/[^+\d]/g, '')}" class="text-text transition-colors hover:text-flame">
              {site.contact.phoneDisplay}
            </a>
          </li>
          <li class="text-text-muted">{site.contact.hours}</li>
        </ul>
      </div>

      <div>
        <p class="eyebrow">Office</p>
        <p class="mt-4 text-sm text-text">Midland, Texas</p>
        <p class="text-sm text-text-muted">Permian Basin</p>
      </div>
    </div>

    <div class="topo-divider mt-14"></div>

    <div class="mt-8 flex flex-col items-start justify-between gap-3 text-xs text-text-dim md:flex-row md:items-center">
      <p>© {year} {site.legalName}. All rights reserved.</p>
      <p class="font-mono uppercase tracking-wider">GPU infrastructure · West Texas</p>
    </div>
  </div>
</footer>
