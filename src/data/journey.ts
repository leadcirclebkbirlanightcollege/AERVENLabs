import { JourneyMilestone } from '../types';

export interface JourneySectionConfig {
  sectionId: string;
  eyebrow: string;
  headline: string;
  description: string;
}

/**
 * Editorial configuration for Section 02 / The Journey.
 */
export const journeySectionConfig: JourneySectionConfig = {
  sectionId: '02',
  eyebrow: '02 / THE JOURNEY',
  headline: 'The idea evolved. The engineering followed.',
  description:
    'A progression of deliberate architectural choices, deep exploration, and focused engineering—from founding purpose to scalable digital products.',
};

/**
 * Company journey milestones data layer.
 * Grounded strictly in factual project data and core architecture without fabricated dates or claims.
 */
export const journeyMilestones: JourneyMilestone[] = [
  {
    id: 'origin-foundation',
    phase: 'PHASE 01',
    category: 'CONCEPTION',
    title: 'Purpose-Driven Genesis',
    shortStatement: 'Bridging technical discipline with authentic purpose.',
    description:
      'AervenLabs was conceived around a single core conviction: digital technology must solve fundamental human challenges. Before writing production code, we established our architectural principles—prioritizing restraint, intentionality, and enduring impact.',
    order: 1,
  },
  {
    id: 'systems-exploration',
    phase: 'PHASE 02',
    category: 'EXPLORATION',
    title: 'Architectural Systems & Research',
    shortStatement: 'Establishing robust engineering standards and scalable foundations.',
    description:
      'We moved from foundational philosophy into deep technical exploration. The team researched modern reactive architectures, resilient cloud infrastructures, and rigorous typography-driven design systems built for long-term maintainability and performance.',
    order: 2,
  },
  {
    id: 'campus-connect-platform',
    phase: 'PHASE 03',
    category: 'PRODUCT DEVELOPMENT',
    title: 'Campus Connect Platform',
    shortStatement: 'Developing our flagship digital ecosystem for institutions.',
    description:
      'Engineering Campus Connect as a unified digital ecosystem. The platform integrates real-time campus navigation, centralized event dissemination, notifications, and student engagement into an intuitive, high-performance web and mobile application.',
    order: 3,
  },
  {
    id: 'intelligent-systems-expansion',
    phase: 'PHASE 04',
    category: 'EXPANSION',
    title: 'Intelligent Systems & Ecosystem',
    shortStatement: 'Expanding into applied AI and modular developer tooling.',
    description:
      'Broadening the product umbrella into applied artificial intelligence, automated developer workflows, and cloud platform infrastructure. Continuously transforming ambitious digital concepts into scalable, production-ready software systems.',
    order: 4,
  },
];
