import { Capability } from '../types';

export interface CapabilitiesSectionConfig {
  sectionId: string;
  eyebrow: string;
  headline: string;
  description: string;
  metaLabel: string;
}

/**
 * Editorial configuration for Homepage Section 04 — What We Build.
 * Sequential identifier 03 / WHAT WE BUILD following 02 / THE JOURNEY.
 */
export const capabilitiesSectionConfig: CapabilitiesSectionConfig = {
  sectionId: '03',
  eyebrow: '03 / WHAT WE BUILD',
  headline: 'From product ideas to systems designed to operate in the real world.',
  description:
    'We engineer digital products, scalable cloud platforms, and intelligent software systems. Every capability is grounded in architectural discipline, performance, and purposeful execution.',
  metaLabel: 'SYSTEMS // CAPABILITIES',
};

/**
 * Verified technology capabilities data layer for AervenLabs Technologies Pvt. Ltd.
 * Derived strictly from verified project specifications and foundational architecture.
 * No speculative domains, buzzwords, or unverified services included.
 */
export const capabilitiesData: Capability[] = [
  {
    id: 'product-engineering',
    order: 1,
    title: 'Product Engineering',
    tagline: 'High-performance web and mobile application engineering.',
    category: 'SOFTWARE & PLATFORMS',
    systemCode: 'SYS_01 // PROD_ENG',
    discipline: 'SOFTWARE & WEB APPLICATIONS',
    shortDescription:
      'Architecting robust, responsive web applications and cross-platform mobile systems built for speed, resilience, and scale.',
    description:
      'We design and engineer end-to-end software applications across modern web and mobile platforms. Utilizing typed architectures, component-driven design systems, and responsive patterns, we turn complex problem spaces into intuitive, high-performance software products.',
    technologies: ['React', 'React Native', 'TypeScript', 'Node.js', 'REST APIs'],
  },
  {
    id: 'platform-systems',
    order: 2,
    title: 'Platform & Cloud Systems',
    tagline: 'Scalable cloud infrastructure, distributed backends, and platform services.',
    category: 'INFRASTRUCTURE & BACKEND',
    systemCode: 'SYS_02 // CLOUD_ARCH',
    discipline: 'CLOUD & BACKEND SYSTEMS',
    shortDescription:
      'Developing resilient cloud backends, real-time data synchronization layers, and scalable API platforms operating in production.',
    description:
      'Every impactful digital product requires a dependable foundation. We architect distributed backend services, real-time databases, and cloud infrastructure engineered for low latency, secure authentication, and elastic scalability.',
    technologies: ['Node.js', 'Supabase', 'Firebase', 'REST APIs', 'Cloud Platforms'],
  },
  {
    id: 'intelligent-software',
    order: 3,
    title: 'Intelligent Systems & Applied AI',
    tagline: 'Applied machine learning, algorithmic automation, and intelligent workflows.',
    category: 'APPLIED INTELLIGENCE',
    systemCode: 'SYS_03 // INTEL_SYS',
    discipline: 'AI & INTELLIGENT SYSTEMS',
    shortDescription:
      'Integrating modern machine learning models and intelligent automation directly into practical product workflows.',
    description:
      'Artificial intelligence is most valuable when integrated seamlessly into the product experience. We build intelligent software systems that leverage machine learning algorithms, automated data pipelines, and contextual inference to solve concrete real-world tasks.',
    technologies: ['Modern AI & ML', 'Python', 'Automated Workflows', 'TypeScript'],
  },
  {
    id: 'interface-architecture',
    order: 4,
    title: 'Interface Architecture & Design Systems',
    tagline: 'Typography-driven design systems, accessible UI, and purposeful interactions.',
    category: 'DESIGN & INTERACTION',
    systemCode: 'SYS_04 // UI_ARCH',
    discipline: 'UI/UX & PRODUCT DESIGN',
    shortDescription:
      'Crafting systematic design tokens, strict typographic hierarchies, and accessible interfaces that elevate clarity.',
    description:
      'We treat interface design as an engineering discipline. From mathematical typography scales to accessible component hierarchies, we create rigorous design systems and interaction patterns that ensure consistency, visual restraint, and effortless user interaction.',
    technologies: ['Design Systems', 'Responsive Architecture', 'Accessibility (a11y)', 'Geist Typography'],
  },
  {
    id: 'experimental-technology',
    order: 5,
    title: 'Interactive & Experimental Technology',
    tagline: 'Real-time interactive environments, digital prototypes, and exploratory systems.',
    category: 'EXPLORATION & RESEARCH',
    systemCode: 'SYS_05 // EXP_TECH',
    discipline: 'EXPERIMENTAL TECHNOLOGY',
    shortDescription:
      'Exploring real-time rendering, interactive graphics engines, and novel software prototypes testing future capabilities.',
    description:
      'Innovation demands continuous experimentation. We research and prototype emerging digital experiences, interactive simulations, and real-time graphics engines, testing new paradigms to inform future product architectures.',
    technologies: ['Unity', 'Interactive Engines', 'Rapid Prototyping', 'Modern Web Standards'],
  },
];

/**
 * Backward compatibility alias
 */
export const capabilities = capabilitiesData;
