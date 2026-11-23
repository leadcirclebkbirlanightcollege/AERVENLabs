import { SEOConfig } from '../types';
import { siteConfig } from '../config/site';

/**
 * Route-level default SEO metadata architecture.
 * Clean, structured SEO configurations for all 11 core routes.
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
    title: 'AERVENLabs — Engineering Ideas. Building What\'s Next.',
    description:
      'Official website of AERVENLabs Technologies Pvt. Ltd. Transforming ambitious ideas into meaningful digital products, intelligent platforms, and innovative experiences.',
    canonicalUrl: 'https://aervenlabs.net/',
  },
  journey: {
    title: `Our Journey — ${siteConfig.name}`,
    description: `The evolution, milestones, and technological progression of ${siteConfig.name}.`,
    canonicalUrl: `${siteConfig.url}/journey`,
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Our Journey', path: '/journey' },
    ],
  },
  whatWeBuild: {
    title: `What We Build — ${siteConfig.name}`,
    description: `Engineering capabilities across digital product development, web applications, mobile platforms, and intelligent systems.`,
    canonicalUrl: `${siteConfig.url}/what-we-build`,
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'What We Build', path: '/what-we-build' },
    ],
  },
  team: {
    title: `Our Team — ${siteConfig.name}`,
    description: `Meet the multidisciplinary engineering and product collective behind ${siteConfig.name}.`,
    canonicalUrl: `${siteConfig.url}/team`,
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Our Team', path: '/team' },
    ],
  },
  projects: {
    title: `Projects & Initiatives — ${siteConfig.name}`,
    description:
      'Explore digital products and platforms engineered by AERVENLabs, including Campus Connect, NagrikSetu, and RAILVERSE.',
    canonicalUrl: `${siteConfig.url}/projects`,
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Projects', path: '/projects' },
    ],
  },
  campusConnect: {
    title: `Campus Connect — Higher Education Campus Operating System | ${siteConfig.name}`,
    description:
      'A unified collegiate operating system connecting academic operations, dynamic QR attendance, digital identity credentials, and student engagement.',
    canonicalUrl: `${siteConfig.url}/projects/campus-connect`,
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Projects', path: '/projects' },
      { name: 'Campus Connect', path: '/projects/campus-connect' },
    ],
  },
  nagrikSetu: {
    title: `NagrikSetu — Civic Technology & Public Service Digital Initiative | ${siteConfig.name}`,
    description:
      'A digital initiative focused on citizen-oriented connectivity, accessible municipal notices, and direct public service transparency.',
    canonicalUrl: `${siteConfig.url}/projects/nagriksetu`,
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Projects', path: '/projects' },
      { name: 'NagrikSetu', path: '/projects/nagriksetu' },
    ],
  },
  railverse: {
    title: `RAILVERSE — Transit Systems & Real-Time Mobility Technology | ${siteConfig.name}`,
    description:
      'A technology initiative within AERVENLabs focused on dynamic railway simulation, station telemetry, and commuter flow analytics.',
    canonicalUrl: `${siteConfig.url}/projects/railverse`,
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Projects', path: '/projects' },
      { name: 'RAILVERSE', path: '/projects/railverse' },
    ],
  },
  aervenlabsWebsite: {
    title: `AERVENLabs Platform — Digital Flagship | ${siteConfig.name}`,
    description:
      'The company\'s official digital platform, engineered as a white-first, high-performance showcase of AERVENLabs\' product ecosystem.',
    canonicalUrl: `${siteConfig.url}/projects/aervenlabs-website`,
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Projects', path: '/projects' },
      { name: 'AERVENLabs Platform', path: '/projects/aervenlabs-website' },
    ],
  },
  partners: {
    title: `Technology Ecosystem & Infrastructure — ${siteConfig.name}`,
    description: `Verified infrastructure providers supporting the resilience, edge performance, and security of ${siteConfig.name}.`,
    canonicalUrl: `${siteConfig.url}/partners`,
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Partners', path: '/partners' },
    ],
  },
  vision: {
    title: `Our Vision & Philosophy — ${siteConfig.name}`,
    description: `What AERVENLabs believes in: building useful, purposeful technology that leaves behind enduring human and institutional value.`,
    canonicalUrl: `${siteConfig.url}/vision`,
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Our Vision', path: '/vision' },
    ],
  },
  contact: {
    title: `Contact & Direct Inquiry — ${siteConfig.name}`,
    description: `Start a conversation with AERVENLabs. Direct inquiry channel for digital product collaborations and software systems.`,
    canonicalUrl: `${siteConfig.url}/contact`,
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Contact', path: '/contact' },
    ],
  },
  privacy: {
    title: `Privacy Policy — ${siteConfig.name}`,
    description: `Privacy policy, data protection standards, and confidential inquiry commitments of ${siteConfig.legalName}.`,
    canonicalUrl: `${siteConfig.url}/privacy`,
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Privacy Policy', path: '/privacy' },
    ],
  },
  terms: {
    title: `Terms & Conditions — ${siteConfig.name}`,
    description: `Terms and conditions governing the use of software and digital services provided by ${siteConfig.legalName}.`,
    canonicalUrl: `${siteConfig.url}/terms`,
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Terms', path: '/terms' },
    ],
  },
};
