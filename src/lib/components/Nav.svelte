<script>
  import { base } from '$app/paths';
  import { nav } from '$lib/data/site';
  import Logo from './Logo.svelte';

  let scrolled = $state(false);
  let menuOpen = $state(false);

  $effect(() => {
    if (typeof window === 'undefined') return;
    const onScroll = () => (scrolled = window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  });
</script>

<header
  class="fixed inset-x-0 top-0 z-50 transition-all duration-300"
  class:scrolled
>
  <div class="container-wide flex h-16 items-center justify-between md:h-20">
    <Logo height={32} />

    <nav class="hidden items-center gap-1 md:flex" aria-label="Primary">
      {#each nav as item}
        <a
          href="{base}{item.href}"
          class="rounded-sm px-3 py-2 font-mono text-xs uppercase tracking-wider text-text-muted transition-colors hover:text-text"
        >
          {item.label}
        </a>
      {/each}
      <a
        href="{base}/#contact"
        class="btn btn-primary ml-3"
      >
        Discuss Your Deployment
      </a>
    </nav>

    <!-- Mobile toggle -->
    <button
      type="button"
      class="md:hidden p-2 -mr-2 text-text"
      aria-expanded={menuOpen}
      aria-controls="mobile-menu"
      aria-label="Toggle menu"
      onclick={() => (menuOpen = !menuOpen)}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        {#if menuOpen}
          <path d="M6 6l12 12M18 6L6 18" stroke-linecap="round" />
        {:else}
          <path d="M3 7h18M3 12h18M3 17h18" stroke-linecap="round" />
        {/if}
      </svg>
    </button>
  </div>

  {#if menuOpen}
    <div
      id="mobile-menu"
      class="md:hidden border-t border-line bg-bg/95 backdrop-blur"
    >
      <nav class="container-wide flex flex-col py-4" aria-label="Mobile">
        {#each nav as item}
          <a
            href="{base}{item.href}"
            onclick={() => (menuOpen = false)}
            class="py-3 font-mono text-sm uppercase tracking-wider text-text-muted hover:text-text"
          >
            {item.label}
          </a>
        {/each}
      </nav>
    </div>
  {/if}
</header>

<style>
  header {
    backdrop-filter: blur(0);
    background-color: transparent;
    border-bottom: 1px solid transparent;
  }
  header.scrolled,
  header :global(#mobile-menu) {
    background-color: rgba(11, 13, 15, 0.85);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    border-bottom: 1px solid var(--color-line);
  }
</style>
