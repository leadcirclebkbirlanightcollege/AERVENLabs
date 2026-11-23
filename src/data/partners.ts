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
 * Editorial configuration for Homepage Section 10 & Partners Page.
 */
export const partnersSectionConfig: PartnersSectionConfig = {
  sectionId: '10',
  eyebrow: '10 / TECHNOLOGY ECOSYSTEM',
  headline: 'Built on infrastructure engineered to endure.',
  description:
    'Our digital products depend on dependable infrastructure beneath the surface. AERVENLabs leverages industry-standard cloud and protective platforms to deploy, secure, and operate software systems with discipline.',
  metaLabel: 'INFRASTRUCTURE // CLOUD FOUNDATION',
  layerLabel: 'VERIFIED INFRASTRUCTURE PROVIDERS',
};

/**
 * Verified infrastructure partners data layer.
 * Strictly limited to verified infrastructure relationships: Cloudflare & Vercel.
 */
export const partnersData: Partner[] = [
  {
    id: 'cloudflare',
    name: 'Cloudflare',
    infraId: 'INFRA_01',
    category: 'Security & DNS Infrastructure',
    techRole: 'DNS & PROTECTIVE EDGE LAYER',
    role: 'DNS & Edge Security Infrastructure',
    description:
      'Domain and DNS infrastructure providing automated DDoS mitigation, protective Web Application Firewall (WAF) filtering, and global edge routing for AERVENLabs digital properties.',
    websiteUrl: 'https://www.cloudflare.com',
  },
  {
    id: 'vercel',
    name: 'Vercel',
    infraId: 'INFRA_02',
    category: 'Edge Deployment & Cloud Runtime',
    techRole: 'GLOBAL HOSTING & EDGE NETWORK',
    role: 'Web Deployment & Edge Runtime',
    description:
      'Continuous deployment, edge compute network, and global hosting infrastructure powering sub-second response times, immutable build artifacts, and high-availability operations.',
    websiteUrl: 'https://vercel.com',
  },
];
