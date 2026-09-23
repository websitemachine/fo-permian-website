<script>
  import Hero from '$lib/components/Hero.svelte';
  import Offerings from '$lib/components/Offerings.svelte';
  import Comparison from '$lib/components/Comparison.svelte';
  import PermianAdvantage from '$lib/components/PermianAdvantage.svelte';
  import Partners from '$lib/components/Partners.svelte';
  import Leadership from '$lib/components/Leadership.svelte';
  import Contact from '$lib/components/Contact.svelte';
  import { site } from '$lib/data/site';

  const title = 'FO Permian — Powered land, PPAs & white space for GPUs in West Texas';
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={site.description} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={site.description} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={site.url} />
  <meta property="og:image" content="{site.url}/img/hero-ai.png" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<Hero />
<Offerings />
<Comparison />
<PermianAdvantage />
<Partners />
<Leadership />
<Contact />
