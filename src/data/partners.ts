import { Partner } from '../types';

/**
 * Technology partners data layer.
 * Contains verified infrastructure partners from specification.
 */
export const partnersData: Partner[] = [
  {
    id: 'cloudflare',
    name: 'Cloudflare',
    category: 'Infrastructure',
    role: 'DNS / Domain Infrastructure & Management',
    websiteUrl: 'https://www.cloudflare.com',
  },
  {
    id: 'vercel',
    name: 'Vercel',
    category: 'Deployment Infrastructure',
    role: 'Web Deployment & Hosting Infrastructure',
    websiteUrl: 'https://vercel.com',
  },
];
