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
 * Editorial configuration for Homepage Section 09 & Team Page.
 */
export const teamSectionConfig: TeamSectionConfig = {
  sectionId: '09',
  eyebrow: '09 / THE TEAM',
  headline: 'People behind the systems.',
  description:
    'Technology does not engineer itself. Behind every product architecture, platform service, and line of code is a dedicated team of engineers, designers, and builders committed to craftsmanship, purpose, and enduring digital value.',
  metaLabel: 'PEOPLE // BUILDERS & LEADERSHIP',
  collectiveTitle: 'A MULTIDISCIPLINARY ENGINEERING & PRODUCT COLLECTIVE',
  collectiveStatement: 'BUILT BY PEOPLE WHO CARE ABOUT HOW THINGS WORK.',
  collectiveParagraph:
    'From scalable distributed cloud backends and cross-platform mobile architectures to typography-driven interface design, AERVENLabs unites builders committed to architectural rigor, restraint, and purposeful software execution.',
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
      label: 'APPLIED INNOVATION',
      discipline: 'CIVIC & TRANSIT SYSTEMS',
      detail:
        'Integrating modern state machines, real-time telemetry, and civic frameworks directly into production software to solve fundamental challenges.',
    },
  ],
};

/**
 * Verified team members centralized data layer.
 * All eight authentic members grounded strictly in factual records.
 */
export const teamMembers: TeamMember[] = [
  {
    id: 'atharv-a-jadhav',
    name: 'Atharv A. Jadhav',
    role: 'Founder & CEO',
    systemLabel: 'FOUNDER // PRODUCT & TECHNOLOGY',
    discipline: 'PRODUCT & TECHNOLOGY',
    bio: 'Leads overall vision, product architecture, and engineering direction across AERVENLabs. Spearheads flagship development on Campus Connect and civic initiatives.',
    image: '/assets/team/atharv-a-jadhav.png',
    imageAlt: 'Portrait of Atharv A. Jadhav, Founder and CEO of AERVENLabs',
    imagePosition: 'center 20%',
    order: 1,
    featured: true,
    links: {
      linkedin: 'https://linkedin.com/company/aervenlabs',
      github: 'https://github.com/aervenlabs',
    },
  },
  {
    id: 'pransu-b-mishra',
    name: 'Pransu B. Mishra',
    role: 'Co-Founder & CTO',
    systemLabel: 'CO-FOUNDER // ENGINEERING & TECHNOLOGY',
    discipline: 'ENGINEERING & TECHNOLOGY',
    bio: 'Oversees systems architecture, core database design, and cloud infrastructure reliability. Directs multi-tenant database partitioning and security protocols.',
    image: '/assets/team/pransu-b-mishra.png',
    imageAlt: 'Portrait of Pransu B. Mishra, Co-Founder and CTO of AERVENLabs',
    imagePosition: 'center 20%',
    order: 2,
    featured: true,
    links: {
      linkedin: 'https://linkedin.com/company/aervenlabs',
      github: 'https://github.com/aervenlabs',
    },
  },
  {
    id: 'amit-n-rai',
    name: 'Mr. Amit N. Rai',
    role: 'Mentor',
    systemLabel: 'MENTOR // GUIDANCE & STRATEGIC DIRECTION',
    discipline: 'STRATEGY & ADVISORY',
    bio: 'Provides institutional advisory, strategic leadership, and foundational guidance, ensuring AERVENLabs initiatives remain aligned with educational and operational excellence.',
    image: '/assets/team/amit-n-rai.png',
    imageAlt: 'Portrait of Mr. Amit N. Rai, Mentor at AERVENLabs',
    imagePosition: 'center 20%',
    order: 3,
    featured: false,
    links: {
      linkedin: 'https://linkedin.com/company/aervenlabs',
    },
  },
  {
    id: 'aditya-s-pandey',
    name: 'Aditya S. Pandey',
    role: 'Lead Product Engineer',
    systemLabel: 'ENGINEERING // PRODUCT SYSTEMS',
    discipline: 'PRODUCT SYSTEMS',
    bio: 'Drives product engineering, feature implementation, and cross-platform compilation, ensuring reliable runtime execution across web and mobile viewports.',
    image: '/assets/team/aditya-s-pandey.png',
    imageAlt: 'Portrait of Aditya S. Pandey, Lead Product Engineer at AERVENLabs',
    imagePosition: 'center 15%',
    order: 4,
    featured: false,
    links: {
      linkedin: 'https://linkedin.com/company/aervenlabs',
      github: 'https://github.com/aervenlabs',
    },
  },
  {
    id: 'aditya-v-mishra',
    name: 'Aditya V. Mishra',
    role: 'Product & UI/UX Designer',
    systemLabel: 'DESIGN // INTERFACE ARCHITECTURE',
    discipline: 'INTERFACE ARCHITECTURE',
    bio: 'Designs user journeys, component tokens, and ergonomic interfaces that bring clarity, calm, and accessibility to complex multi-stakeholder workflows.',
    image: '/assets/team/aditya-v-mishra.png',
    imageAlt: 'Portrait of Aditya V. Mishra, Product & UI/UX Designer at AERVENLabs',
    imagePosition: 'center 15%',
    order: 5,
    featured: false,
    links: {
      linkedin: 'https://linkedin.com/company/aervenlabs',
    },
  },
  {
    id: 'subhasree-g-padhi',
    name: 'Subhasree G. Padhi',
    role: 'Creative & Communications Lead',
    systemLabel: 'CREATIVE // COMMUNICATIONS & BRAND',
    discipline: 'COMMUNICATIONS & BRAND',
    bio: 'Guides brand narrative, institutional documentation, and external communication strategies, translating complex engineering principles into clear visual storytelling.',
    image: '/assets/team/subhasree-g-padhi.png',
    imageAlt: 'Portrait of Subhasree G. Padhi, Creative & Communications Lead at AERVENLabs',
    imagePosition: 'center 20%',
    order: 6,
    featured: false,
    links: {
      linkedin: 'https://linkedin.com/company/aervenlabs',
    },
  },
  {
    id: 'avadhut-g-kashid',
    name: 'Avadhut G. Kashid',
    role: 'Software Engineer',
    systemLabel: 'ENGINEERING // SOFTWARE SYSTEMS',
    discipline: 'SOFTWARE SYSTEMS',
    bio: 'Engineers backend logic, database schema integrations, and API endpoints supporting real-time data flows and statutory compliance calculations.',
    image: '/assets/team/avadhut-g-kashid.png',
    imageAlt: 'Portrait of Avadhut G. Kashid, Software Engineer at AERVENLabs',
    imagePosition: 'center 20%',
    order: 7,
    featured: false,
    links: {
      linkedin: 'https://linkedin.com/company/aervenlabs',
      github: 'https://github.com/aervenlabs',
    },
  },
  {
    id: 'ajay-a-prajapati',
    name: 'Ajay A. Prajapati',
    role: 'Application Developer',
    systemLabel: 'ENGINEERING // APPLICATION DEVELOPMENT',
    discipline: 'APPLICATION DEVELOPMENT',
    bio: 'Focuses on responsive client application development, state management, and edge optimizations across the AERVENLabs software catalog.',
    image: '/assets/team/ajay-a-prajapati.png',
    imageAlt: 'Portrait of Ajay A. Prajapati, Application Developer at AERVENLabs',
    imagePosition: 'center 20%',
    order: 8,
    featured: false,
    links: {
      linkedin: 'https://linkedin.com/company/aervenlabs',
      github: 'https://github.com/aervenlabs',
    },
  },
];
