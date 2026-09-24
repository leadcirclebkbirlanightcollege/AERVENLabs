import { TeamMember } from '../types';

export interface TeamSectionConfig {
  sectionId: string;
  eyebrow: string;
  headline: string;
  description: string;
  metaLabel: string;
  collectiveTitle: string;
  collectiveStatement: string;
  collectiveParagraph: string;
  pillars: {
    number: string;
    label: string;
    discipline: string;
    detail: string;
  }[];
}

/**
 * Editorial configuration for Homepage Section 06 — The Team.
 * Sequential identifier 05 / THE TEAM following 04 / PROJECTS.
 */
export const teamSectionConfig: TeamSectionConfig = {
  sectionId: '05',
  eyebrow: '05 / THE TEAM',
  headline: 'People behind the systems.',
  description:
    'Technology does not engineer itself. Behind every product architecture, platform service, and line of code is a dedicated team of engineers, designers, and builders committed to craftsmanship, purpose, and enduring digital value.',
  metaLabel: 'PEOPLE // BUILDERS & LEADERSHIP',
  collectiveTitle: 'A MULTIDISCIPLINARY ENGINEERING & PRODUCT COLLECTIVE',
  collectiveStatement:
    'BUILT BY PEOPLE WHO CARE ABOUT HOW THINGS WORK.',
  collectiveParagraph:
    'From scalable distributed backends and cross-platform mobile architectures to typography-driven interface design, AervenLabs unites builders committed to architectural rigor, restraint, and purposeful software execution.',
  pillars: [
    {
      number: '01',
      label: 'SYSTEMS ARCHITECTURE',
      discipline: 'ENGINEERING & BACKEND',
      detail:
        'Architecting resilient cloud services, robust data pipelines, and scalable APIs engineered for low latency and high reliability.',
    },
    {
      number: '02',
      label: 'INTERFACE ARCHITECTURE',
      discipline: 'PRODUCT & DESIGN SYSTEMS',
      detail:
        'Crafting mathematical typography scales, accessible UI components, and restrained interaction patterns that prioritize user clarity.',
    },
    {
      number: '03',
      label: 'APPLIED INTELLIGENCE',
      discipline: 'ALGORITHMS & MACHINE LEARNING',
      detail:
        'Integrating modern machine learning models and automated workflows directly into production software to solve fundamental challenges.',
    },
  ],
};

/**
 * Verified team members data layer.
 * Grounded strictly in factual records. No fabricated people, mock names, or stock personas.
 * When individual profiles are verified, they will be populated here and automatically
 * rendered in the team profile layout.
 */
export const teamMembers: TeamMember[] = [];
