/**
 * Site-wide constants.
 * Centralized so changes to nav, contact info, or partners stay in one place.
 */

export const site = {
  name: 'FO Permian',
  legalName: 'FO Permian Partners',
  tagline: 'Powered land, contracted power, and white space in West Texas',
  url: 'https://www.fopermian.com',
  description:
    'FO Permian helps neoclouds and AI infrastructure operators secure powered land, power purchase agreements, and white space for GPU infrastructure in West Texas through its power and data center development partnerships.',
  contact: {
    email: 'jose@fopermian.com',
    phone: '+1 432-559-2076',
    phoneDisplay: '+1 (432) 559-2076',
    hours: 'Weekdays, 8am–5pm CST'
  }
};

export const nav = [
  { label: 'Offerings', href: '/#offerings' },
  { label: 'Advantage', href: '/#advantage' },
  { label: 'Partners', href: '/#partners' },
  { label: 'News', href: '/news' },
  { label: 'Contact', href: '/#contact' }
];

/**
 * The three things FO Permian helps customers secure.
 * Keep white space messaging general — no capacity figures, delivery dates,
 * or expansion schedules are published at this time.
 */
export const offerings = [
  {
    num: '01',
    label: 'Powered Land',
    title: 'West Texas sites with a path to power.',
    body:
      'Sites in West Texas with power development pathways and room to expand — identified and structured with our development partners for GPU-scale buildouts.',
    href: 'powered land'
  },
  {
    num: '02',
    label: 'Power Purchase Agreements',
    title: 'Power supply structured around your requirements.',
    body:
      'Power supply opportunities structured with our partners around each customer’s requirements. Behind-the-meter power is a project-specific solution, with configuration and operating terms determined for each opportunity.',
    href: 'a PPA'
  },
  {
    num: '03',
    label: 'White Space',
    title: 'Leased data center space for your GPUs.',
    body:
      'Leased data center space through our development partnerships for GPU infrastructure — for operators who want to deploy without building and running the facility themselves.',
    href: 'white space'
  }
];

export const partners = [
  {
    name: 'HiVolt Energy',
    role: 'Power development partner',
    blurb:
      'Texas-based Independent Power Producer specializing in the development, ownership, and operations of isolated and utility-connected microgrids. HiVolt develops, owns, and operates the generation behind FO Permian power opportunities.',
    contact: 'info@hivoltenergy.com'
  },
  {
    name: 'Data center development partners',
    role: 'White space delivery',
    blurb:
      'FO Permian works with data center developers and operators to deliver leased white space for GPU infrastructure. Facility design, construction, and operations are delivered by these partners on a project-by-project basis.',
    contact: null
  }
];

export const leadership = [
  {
    name: 'Davis Farish',
    role: 'Co-Founder'
  },
  {
    name: 'Jose Ortega',
    role: 'Co-Founder'
  }
];
