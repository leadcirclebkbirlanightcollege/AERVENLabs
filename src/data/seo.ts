import { SEOConfig } from '../types';
import { siteConfig } from '../config/site';

/**
 * Route-level default SEO metadata architecture.
 * Provides clean fallback configs for every route without speculative claims.
 */
export const defaultSEO: SEOConfig = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  canonicalUrl: siteConfig.url,
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: 'website',
    image: siteConfig.ogImage,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    image: siteConfig.ogImage,
  },
  keywords: [...siteConfig.keywords],
  robots: 'index, follow',
};

export const routeSEOConfig: Record<string, Partial<SEOConfig>> = {
  home: {
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  journey: {
    title: `Journey — ${siteConfig.name}`,
    description: `The evolution, milestones, and technological roadmap of ${siteConfig.name}.`,
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Journey', path: '/journey' },
    ],
  },
  team: {
    title: `Team — ${siteConfig.name}`,
    description: `Meet the team behind ${siteConfig.name}.`,
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Team', path: '/team' },
    ],
  },
  projects: {
    title: `Projects — ${siteConfig.name}`,
    description: `Digital products, software platforms, and engineering work from ${siteConfig.name}.`,
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Projects', path: '/projects' },
    ],
  },
  campusConnect: {
    title: `Campus Connect — ${siteConfig.name}`,
    description: 'Campus technology, redesigned. A comprehensive digital platform by AervenLabs.',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Projects', path: '/projects' },
      { name: 'Campus Connect', path: '/projects/campus-connect' },
    ],
  },
  partners: {
    title: `Partners — ${siteConfig.name}`,
    description: `Infrastructure and technology partners powering ${siteConfig.name}.`,
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Partners', path: '/partners' },
    ],
  },
  vision: {
    title: `Vision — ${siteConfig.name}`,
    description: `Long-term innovation, mission, and technology direction of ${siteConfig.name}.`,
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Vision', path: '/vision' },
    ],
  },
  contact: {
    title: `Contact — ${siteConfig.name}`,
    description: `Official contact information and channels for ${siteConfig.legalName}.`,
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Contact', path: '/contact' },
    ],
  },
  privacy: {
    title: `Privacy Policy — ${siteConfig.name}`,
    description: `Privacy policy and data protection principles of ${siteConfig.legalName}.`,
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Privacy Policy', path: '/privacy' },
    ],
  },
  terms: {
    title: `Terms & Conditions — ${siteConfig.name}`,
    description: `Terms and conditions governing the use of services by ${siteConfig.legalName}.`,
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Terms', path: '/terms' },
    ],
  },
};
