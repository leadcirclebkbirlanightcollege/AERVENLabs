import { Capability } from '../types';

export interface CapabilitiesSectionConfig {
  sectionId: string;
  eyebrow: string;
  headline: string;
  description: string;
  metaLabel: string;
}

/**
 * Editorial configuration for Homepage Section 05 & What We Build Page.
 */
export const capabilitiesSectionConfig: CapabilitiesSectionConfig = {
  sectionId: '05',
  eyebrow: '05 / WHAT WE BUILD',
  headline: 'Engineering capabilities grounded in real-world software.',
  description:
    'We engineer digital products, scalable technology platforms, and intelligent software systems. Every capability is demonstrated through production code and active initiatives.',
  metaLabel: 'SYSTEMS // ENGINEERING DISCIPLINES',
};

/**
 * Verified technology and development capabilities for AERVENLabs.
 * Formatted precisely around authentic engineering work.
 */
export const capabilitiesData: Capability[] = [
  {
    id: 'digital-product-development',
    order: 1,
    title: 'Digital Product Development',
    tagline: 'End-to-end product conception, architecture, and deployment.',
    category: 'PRODUCT & PLATFORMS',
    systemCode: 'CAP_01 // PROD_DEV',
    discipline: 'PRODUCT LIFECYCLE',
    shortDescription:
      'Transforming complex domain requirements into cohesive, intuitive digital products with clear user journeys and sustainable architecture.',
    description:
      'We guide products from problem discovery and systems modeling through to production delivery. By tightly integrating UX research, typed software design, and continuous automated testing, we build digital products that users embrace and operators can maintain.',
    technologies: ['React 18', 'TypeScript', 'Tailwind CSS', 'Vite', 'REST & GraphQL'],
  },
  {
    id: 'web-applications',
    order: 2,
    title: 'Web Applications',
    tagline: 'High-performance responsive applications and Progressive Web Apps (PWAs).',
    category: 'FRONTEND ARCHITECTURE',
    systemCode: 'CAP_02 // WEB_APPS',
    discipline: 'MODERN WEB ENGINEERING',
    shortDescription:
      'Building lightning-fast, accessible single-page web applications with sub-second page transitions and offline service worker caching.',
    description:
      'We treat frontend engineering as a precision discipline. Utilizing component-driven architectures, strict typography scales, and fluid layout math, our web applications achieve 100/100 Core Web Vitals while maintaining flawless responsive ergonomics across phones, tablets, and desktops.',
    technologies: ['React', 'TypeScript', 'Workbox PWA', 'TanStack Query', 'Motion / GSAP'],
  },
  {
    id: 'mobile-applications',
    order: 3,
    title: 'Mobile Applications',
    tagline: 'Cross-platform native mobile solutions and hybrid runtimes.',
    category: 'MOBILE PLATFORMS',
    systemCode: 'CAP_03 // MOB_APPS',
    discipline: 'CROSS-PLATFORM MOBILE',
    shortDescription:
      'Delivering fluid mobile experiences compiled for Android and iOS using modern Capacitor runtimes and responsive design.',
    description:
      'We build mobile applications that bridge native hardware performance with web flexibility. Through Capacitor bridges (targeting Android SDK 36), we integrate camera-based QR scanners, biometric security, and offline data sync for platforms like Campus Connect.',
    technologies: ['Capacitor', 'Android SDK', 'PWA', 'TypeScript', 'Mobile Web'],
  },
  {
    id: 'technology-platforms',
    order: 4,
    title: 'Technology Platforms & Cloud Systems',
    tagline: 'Multi-tenant relational backends, real-time sync, and edge compute.',
    category: 'CLOUD & INFRASTRUCTURE',
    systemCode: 'CAP_04 // PLATFORMS',
    discipline: 'BACKEND ARCHITECTURE',
    shortDescription:
      'Architecting multi-tenant relational schemas, Row-Level Security data isolation, and low-latency edge function execution.',
    description:
      'Impactful products demand rock-solid foundations. We design distributed relational databases partitioned by tenant IDs (such as college_id in Campus Connect), real-time WebSocket broadcast channels, and isolated serverless edge runtimes deployed globally on Vercel.',
    technologies: ['PostgreSQL', 'Supabase', 'Deno Edge Functions', 'Row-Level Security (RLS)', 'Vercel Edge'],
  },
  {
    id: 'software-engineering',
    order: 5,
    title: 'Software Engineering & Security',
    tagline: 'Type-safe contracts, timing-safe protocols, and automated test suites.',
    category: 'ENGINEERING STANDARDS',
    systemCode: 'CAP_05 // SOFT_ENG',
    discipline: 'CORE ENGINEERING',
    shortDescription:
      'Enforcing strict TypeScript compilation, cryptographic token authentication, and rigorous unit and integration test coverage.',
    description:
      'Quality is not an afterthought — it is an engineering constraint. We enforce timing-safe token matching to prevent timing attacks, write comprehensive test suites (over 300+ automated tests in Campus Connect), and maintain clean modular folder structures.',
    technologies: ['TypeScript', 'Vitest / Jest', 'Cryptographic Hashing', 'JWT Security', 'CI/CD Pipelines'],
  },
  {
    id: 'digital-innovation-research',
    order: 6,
    title: 'Digital Innovation & Research',
    tagline: 'Civic technology initiatives, transit simulation, and experimental prototyping.',
    category: 'RESEARCH & INNOVATION',
    systemCode: 'CAP_06 // RESEARCH',
    discipline: 'APPLIED R&D',
    shortDescription:
      'Pioneering applied digital initiatives like NagrikSetu for citizen services and RAILVERSE for real-time transit intelligence.',
    description:
      'We commit dedicated bandwidth to exploratory software engineering. By testing real-time canvas simulations, decentralized public credentials, and low-bandwidth civic interfaces, we develop technologies that answer the emerging challenges of tomorrow.',
    technologies: ['Canvas Simulation', 'Real-time Telemetry', 'Civic Tech Models', 'Reactive State Engines'],
  },
];

export const capabilities = capabilitiesData;
