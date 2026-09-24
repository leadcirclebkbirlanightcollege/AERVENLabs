import { Partner } from '../types';

export interface PartnersSectionConfig {
  sectionId: string;
  eyebrow: string;
  headline: string;
  description: string;
  metaLabel: string;
  layerLabel: string;
}

/**
 * Editorial configuration for Homepage Section 08 — The Partners.
 * Sequential identifier 07 / THE PARTNERS following 06 / THE VISION.
 * Strictly communicates infrastructure relationships without exaggerated claims.
 */
export const partnersSectionConfig: PartnersSectionConfig = {
  sectionId: '07',
  eyebrow: '07 / THE PARTNERS',
  headline: 'Built on infrastructure designed to endure.',
  description:
    'Our products depend on reliable infrastructure beneath the interface. AervenLabs works with established technology platforms to deploy, protect, and operate digital systems with discipline.',
  metaLabel: 'FOUNDATION // INFRASTRUCTURE LAYER',
  layerLabel: 'INFRASTRUCTURE ECOSYSTEM',
};

/**
 * Verified infrastructure partners data layer.
 * Strictly limited to verified infrastructure relationships.
 * No speculative strategic claims, customer testimonials, or fake endorsements.
 */
export const partnersData: Partner[] = [
  {
    id: 'cloudflare',
    name: 'Cloudflare',
    infraId: 'INFRA_01',
    category: 'Infrastructure',
    techRole: 'DNS / DOMAIN INFRASTRUCTURE',
    role: 'DNS & Protective Edge Layer',
    description:
      'Domain and DNS infrastructure supporting the availability, global routing, and protective edge layer of AervenLabs digital properties.',
    websiteUrl: 'https://www.cloudflare.com',
  },
  {
    id: 'vercel',
    name: 'Vercel',
    infraId: 'INFRA_02',
    category: 'Deployment Infrastructure',
    techRole: 'DEPLOYMENT / HOSTING',
    role: 'Web Deployment & Edge Hosting',
    description:
      'Deployment and hosting infrastructure supporting the continuous delivery, edge performance, and global availability of AervenLabs web applications.',
    websiteUrl: 'https://vercel.com',
  },
];
