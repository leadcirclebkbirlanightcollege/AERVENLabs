export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  isConfigured: boolean;
}

export interface BrandConfig {
  legalName: string;
  brandName: string;
  tagline: string;
  visionHeadline: string;
  heroHeadline: string;
  heroSubheadline: string;
  statement: string;
  contactEmail: string;
  supportEmail: string;
  privacyEmail: string;
  websiteUrl: string;
  socials: Record<string, SocialLink>;
  verticals: string[];
}

export const BRAND: BrandConfig = {
  legalName: 'AervenLabs Technologies Pvt. Ltd.',
  brandName: 'AervenLabs',
  tagline: 'Ideas to Impact',
  visionHeadline: 'From ideas to impact.',
  heroHeadline: 'Building what comes next.',
  heroSubheadline:
    'AervenLabs builds innovative software, AI-powered products, digital experiences, and scalable technology solutions.',
  statement:
    'AervenLabs is an umbrella technology company focused on turning ideas into meaningful digital products and experiences.',
  contactEmail: 'contact@aervenlabs.com',
  supportEmail: 'support@aervenlabs.com',
  privacyEmail: 'privacy@aervenlabs.com',
  websiteUrl: 'https://aervenlabs.com',
  socials: {
    github: {
      name: 'GitHub',
      url: 'https://github.com/AervenLabs',
      icon: 'github',
      isConfigured: true,
    },
    linkedin: {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/aervenlabs',
      icon: 'linkedin',
      isConfigured: true,
    },
    instagram: {
      name: 'Instagram',
      url: 'https://instagram.com/aervenlabs',
      icon: 'instagram',
      isConfigured: true,
    },
    youtube: {
      name: 'YouTube',
      url: 'https://youtube.com/@aervenlabs',
      icon: 'youtube',
      isConfigured: true,
    },
  },
  verticals: [
    'Software Engineering',
    'AI & Intelligent Systems',
    'Mobile Applications',
    'Web & Cloud Platforms',
    'SaaS Products',
    'Developer Tools',
    'Experimental Technology',
  ],
};
