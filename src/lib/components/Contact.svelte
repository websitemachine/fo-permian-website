<script>
  import { site } from '$lib/data/site';

  // The Worker redirects back here with ?ok=1 or ?error=1 after a submission.
  // Read it in the browser only — the page is prerendered, so there is no URL at build time.
  let status = $state(null);
  $effect(() => {
    const q = new URLSearchParams(window.location.search);
    status = q.has('ok') ? 'ok' : q.has('error') ? 'error' : null;
  });

  const needs = [
    { key: 'land', label: 'Powered Land' },
    { key: 'ppa', label: 'Power Purchase Agreement' },
    { key: 'space', label: 'White Space' }
  ];
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
        Share which of the three you're looking for, your target scale, and your timeline. We'll come back
        with how FO Permian and our development partners can structure it. We respond to qualified inquiries
        within one business day.
      </p>
    </div>

    <form
      method="POST"
      action="/api/contact"
      class="relative mx-auto mt-14 max-w-3xl rounded-lg border border-line-strong bg-surface p-8 md:p-10"
    >
      {#if status === 'ok'}
        <div class="mb-8 rounded-md border border-flame/40 bg-flame/10 p-5" role="status">
          <p class="font-mono text-xs uppercase tracking-wider text-flame">Received</p>
          <p class="mt-2 text-text">Thanks — your inquiry is in. We'll reply within one business day.</p>
        </div>
      {:else if status === 'error'}
        <div class="mb-8 rounded-md border border-terracotta/50 bg-terracotta/10 p-5" role="alert">
          <p class="font-mono text-xs uppercase tracking-wider text-terracotta">Not sent</p>
          <p class="mt-2 text-text">
            Something went wrong. Please check your name and email and try again, or email
            <a href="mailto:{site.contact.email}" class="text-flame underline-offset-4 hover:underline">{site.contact.email}</a> directly.
          </p>
        </div>
      {/if}

      <fieldset class="border-0 p-0">
        <legend class="font-mono text-xs uppercase tracking-wider text-flame">What do you need?</legend>
        <div class="mt-4 grid gap-3 sm:grid-cols-3">
          {#each needs as n}
            <label class="flex cursor-pointer items-center gap-3 rounded-md border border-line-strong px-4 py-3 text-sm text-text transition-colors hover:border-flame has-[:checked]:border-flame has-[:checked]:bg-flame/10">
              <input type="checkbox" name="need" value={n.key} class="accent-[var(--color-flame)]" />
              {n.label}
            </label>
          {/each}
        </div>
      </fieldset>

      <div class="mt-8 grid gap-6 sm:grid-cols-2">
        <label class="block">
          <span class="font-mono text-xs uppercase tracking-wider text-text-muted">Name</span>
          <input name="name" type="text" required autocomplete="name" maxlength="120" class="field mt-2" />
        </label>
        <label class="block">
          <span class="font-mono text-xs uppercase tracking-wider text-text-muted">Company</span>
          <input name="company" type="text" autocomplete="organization" maxlength="160" class="field mt-2" />
        </label>
        <label class="block">
          <span class="font-mono text-xs uppercase tracking-wider text-text-muted">Work email</span>
          <input name="email" type="email" required autocomplete="email" maxlength="160" class="field mt-2" />
        </label>
        <label class="block">
          <span class="font-mono text-xs uppercase tracking-wider text-text-muted">Target scale &amp; timeline</span>
          <input name="scale" type="text" maxlength="200" placeholder="e.g. 20 MW, Q2 next year" class="field mt-2" />
        </label>
        <label class="block sm:col-span-2">
          <span class="font-mono text-xs uppercase tracking-wider text-text-muted">Anything else</span>
          <textarea name="message" rows="4" maxlength="2000" class="field mt-2"></textarea>
        </label>
      </div>

      <!-- Honeypot: hidden from people, filled by bots. The Worker drops any submission that sets it. -->
      <div class="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label>Website <input name="website" type="text" tabindex="-1" autocomplete="off" /></label>
      </div>

      <div class="mt-8 flex flex-wrap items-center justify-between gap-4">
        <button type="submit" class="btn btn-primary">Discuss Your Deployment</button>
        <p class="text-xs text-text-dim">Or email <a href="mailto:{site.contact.email}" class="text-text-muted hover:text-flame">{site.contact.email}</a></p>
      </div>
    </form>

    <div class="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-text-muted">
      <a href="tel:{site.contact.phone.replace(/[^+\d]/g, '')}" class="transition-colors hover:text-flame">{site.contact.phoneDisplay}</a>
      <span class="text-text-dim">·</span>
      <span>{site.contact.hours}</span>
    </div>
  </div>
</section>

<style>
  .field {
    display: block;
    width: 100%;
    border-radius: var(--radius-sm);
    border: 1px solid var(--color-line-strong);
    background: var(--color-bg);
    color: var(--color-text);
    padding: 0.75rem 0.875rem;
    font-size: 0.9375rem;
    line-height: 1.4;
    transition: border-color 0.2s var(--ease-out-quart);
  }
  .field:focus {
    outline: none;
    border-color: var(--color-flame);
  }
  .field::placeholder {
    color: var(--color-text-dim);
  }
</style>
