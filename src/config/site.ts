import { Company, NavigationItem } from '../types';

/**
 * Centralized site configuration for AERVENLabs Technologies Pvt. Ltd.
 * Single source of truth for identity, URLs, social channels, and navigation.
 */
export const siteConfig = {
  name: 'AERVENLabs',
  legalName: 'AERVENLabs Technologies Pvt. Ltd.',
  url: 'https://aervenlabs.net',
  tagline: "Engineering Ideas. Building What's Next.",
  description:
    'Official website of AERVENLabs Technologies Pvt. Ltd. Transforming ambitious ideas into meaningful digital products, intelligent platforms, and innovative experiences.',
  email: 'aervenlabs@gmail.com',
  links: {
    github: 'https://github.com/aervenlabs',
    linkedin: 'https://linkedin.com/company/aervenlabs',
    instagram: 'https://instagram.com/aervenlabs',
    youtube: 'https://youtube.com/@aervenlabs',
  },
  keywords: [
    'AERVENLabs',
    'AERVENLabs Technologies',
    'AERVENLabs Technologies Pvt. Ltd.',
    'Campus Connect',
    'UNNATI 2026–27',
    'UNNATI Roots & Rhythm',
    'MKMP College Thakurli',
    'Inter-Collegiate Festival Platform',
    'Digital Product Engineering',
    'Educational Technology Platform',
    'Software Architecture',
    'Intelligent Systems',
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
  { id: 'nav-journey', label: 'Our Journey', path: '/journey', order: 2 },
  { id: 'nav-what-we-build', label: 'What We Build', path: '/what-we-build', order: 3 },
  { id: 'nav-projects', label: 'Our Work', path: '/projects', order: 4 },
  { id: 'nav-team', label: 'Our Team', path: '/team', order: 5 },
  { id: 'nav-vision', label: 'Our Vision', path: '/vision', order: 6 },
  { id: 'nav-partners', label: 'Partners', path: '/partners', order: 7 },
  { id: 'nav-contact', label: 'Contact', path: '/contact', order: 8 },
];

export const legalNavigation: NavigationItem[] = [
  { id: 'nav-privacy', label: 'Privacy Policy', path: '/privacy', order: 1 },
  { id: 'nav-terms', label: 'Terms & Conditions', path: '/terms', order: 2 },
];
