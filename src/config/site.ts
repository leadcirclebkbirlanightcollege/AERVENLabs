import { Company, NavigationItem } from '../types';

/**
 * Centralized site configuration for AervenLabs Technologies Pvt. Ltd.
 * Single source of truth for identity, URLs, social channels, and navigation.
 */
export const siteConfig = {
  name: 'AervenLabs',
  legalName: 'AervenLabs Technologies Pvt. Ltd.',
  url: 'https://aervenlabs.com',
  tagline: 'Technology. Built with intent.',
  description:
    'Official website of AervenLabs Technologies Pvt. Ltd. Building high-impact digital products, platforms, and intelligent software systems.',
  email: 'contact@aervenlabs.com',
  links: {
    github: 'https://github.com/aervenlabs',
    linkedin: 'https://linkedin.com/company/aervenlabs',
    twitter: 'https://twitter.com/aervenlabs',
  },
  keywords: [
    'AervenLabs',
    'AervenLabs Technologies',
    'AervenLabs Technologies Pvt. Ltd.',
    'AervenLabs software',
    'AervenLabs technology',
    'AervenLabs projects',
  ],
  ogImage: '/assets/aervenlabs-logo.png',
} as const;

export const defaultCompany: Company = {
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  tagline: siteConfig.tagline,
  description: siteConfig.description,
  email: siteConfig.email,
  websiteUrl: siteConfig.url,
  socialLinks: siteConfig.links,
};

export const mainNavigation: NavigationItem[] = [
  { id: 'nav-home', label: 'Home', path: '/', order: 1 },
  { id: 'nav-journey', label: 'Journey', path: '/journey', order: 2 },
  { id: 'nav-team', label: 'Team', path: '/team', order: 3 },
  { id: 'nav-projects', label: 'Projects', path: '/projects', order: 4 },
  { id: 'nav-partners', label: 'Partners', path: '/partners', order: 5 },
  { id: 'nav-vision', label: 'Vision', path: '/vision', order: 6 },
  { id: 'nav-contact', label: 'Contact', path: '/contact', order: 7 },
];

export const legalNavigation: NavigationItem[] = [
  { id: 'nav-privacy', label: 'Privacy Policy', path: '/privacy', order: 1 },
  { id: 'nav-terms', label: 'Terms & Conditions', path: '/terms', order: 2 },
];
