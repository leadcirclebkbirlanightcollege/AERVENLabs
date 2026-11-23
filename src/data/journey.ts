import { JourneyMilestone } from '../types';

export interface JourneySectionConfig {
  sectionId: string;
  eyebrow: string;
  headline: string;
  description: string;
}

/**
 * Editorial configuration for Homepage Section 07 & Journey Page.
 */
export const journeySectionConfig: JourneySectionConfig = {
  sectionId: '07',
  eyebrow: '07 / OUR JOURNEY',
  headline: 'The idea evolved. The engineering followed.',
  description:
    'A progression of deliberate architectural choices, real-world field research, and focused software development — from founding purpose to scalable digital systems.',
};

/**
 * Company journey milestones data layer.
 * Strictly authentic milestones without fabricated revenue, user counts, or awards.
 */
export const journeyMilestones: JourneyMilestone[] = [
  {
    id: 'origin-foundation',
    phase: 'PHASE 01',
    category: 'CONCEPTION & PURPOSE',
    title: 'Foundational Conviction',
    shortStatement: 'Bridging technical discipline with authentic purpose.',
    description:
      'AERVENLabs was conceived with a clear conviction: digital software must address fundamental, real-world operational problems. Before writing production code, we articulated our architectural standards — prioritizing simplicity, maintainability, and human utility.',
    order: 1,
  },
  {
    id: 'systems-exploration',
    phase: 'PHASE 02',
    category: 'ARCHITECTURAL RESEARCH',
    title: 'Systems Exploration & Prototypes',
    shortStatement: 'Researching reactive frameworks, data schemas, and design systems.',
    description:
      'We moved from foundational philosophy into rigorous technical research. The team prototyped modern reactive client architectures, evaluated relational PostgreSQL database isolation, and developed our typography-first design tokens for maximum visual clarity and speed.',
    order: 2,
  },
  {
    id: 'campus-connect-platform',
    phase: 'PHASE 03',
    category: 'FLAGSHIP DEVELOPMENT',
    title: 'Campus Connect Flagship Launch',
    shortStatement: 'Engineering our flagship Higher Education Campus Operating System.',
    description:
      'Co-developed and stress-tested in collaboration with institutional partner B. K. Birla College. Engineered dynamic QR attendance verification, digital student identity cards with optical holograms, multi-tenant database partitioning, and public zero-auth credential verification.',
    order: 3,
  },
  {
    id: 'ecosystem-expansion',
    phase: 'PHASE 04',
    category: 'ECOSYSTEM EXPANSION',
    title: 'Civic & Mobility Platform Initiatives',
    shortStatement: 'Broadening into civic digital access and transit intelligence.',
    description:
      'Expanding our software catalog to include NagrikSetu (lightweight civic information access) and RAILVERSE (real-time railway network simulation and transit telemetry), transforming ambitious ideas into purposeful technology across higher education, civic infrastructure, and transit mobility.',
    order: 4,
  },
];
