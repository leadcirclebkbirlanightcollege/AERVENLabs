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
 * Verified team members centralized data layer.
 * All eight authentic members grounded strictly in factual records.
 * Photographs are assigned incrementally as provided by the user.
 */
export const teamMembers: TeamMember[] = [
  {
    id: 'amit-n-rai',
    name: 'Mr. Amit N. Rai',
    role: 'Mentor',
    systemLabel: 'MENTOR // GUIDANCE & STRATEGIC DIRECTION',
    discipline: 'STRATEGY & ADVISORY',
    image: '/assets/team/amit-n-rai.png',
    imageAlt: 'Portrait of Mr. Amit N. Rai, Mentor at AervenLabs',
    imagePosition: 'center 20%',
    order: 1,
    featured: false,
  },
  {
    id: 'atharv-a-jadhav',
    name: 'Atharv A. Jadhav',
    role: 'Founder & CEO',
    systemLabel: 'FOUNDER // PRODUCT & TECHNOLOGY',
    discipline: 'PRODUCT & TECHNOLOGY',
    image: '/assets/team/atharv-a-jadhav.png',
    imageAlt: 'Portrait of Atharv A. Jadhav, Founder and CEO of AervenLabs',
    imagePosition: 'center 20%',
    order: 2,
    featured: true,
  },
  {
    id: 'pransu-b-mishra',
    name: 'Pransu B. Mishra',
    role: 'Co-Founder & CTO',
    systemLabel: 'CO-FOUNDER // ENGINEERING & TECHNOLOGY',
    discipline: 'ENGINEERING & TECHNOLOGY',
    image: '/assets/team/pransu-b-mishra.png',
    imageAlt: 'Portrait of Pransu B. Mishra, Co-Founder and CTO of AervenLabs',
    imagePosition: 'center 20%',
    order: 3,
    featured: true,
  },
  {
    id: 'aditya-s-pandey',
    name: 'Aditya S. Pandey',
    role: 'Lead Product Engineer',
    systemLabel: 'ENGINEERING // PRODUCT SYSTEMS',
    discipline: 'PRODUCT SYSTEMS',
    image: '/assets/team/aditya-s-pandey.png',
    imageAlt: 'Portrait of Aditya S. Pandey, Lead Product Engineer at AervenLabs',
    imagePosition: 'center 15%',
    order: 4,
    featured: false,
  },
  {
    id: 'aditya-v-mishra',
    name: 'Aditya V. Mishra',
    role: 'Product & UI/UX Designer',
    systemLabel: 'DESIGN // INTERFACE ARCHITECTURE',
    discipline: 'INTERFACE ARCHITECTURE',
    image: '/assets/team/aditya-v-mishra.png',
    imageAlt: 'Portrait of Aditya V. Mishra, Product & UI/UX Designer at AervenLabs',
    imagePosition: 'center 15%',
    order: 5,
    featured: false,
  },
  {
    id: 'subhasree-g-padhi',
    name: 'Subhasree G. Padhi',
    role: 'Creative & Communications Lead',
    systemLabel: 'CREATIVE // COMMUNICATIONS & BRAND',
    discipline: 'COMMUNICATIONS & BRAND',
    image: '/assets/team/subhasree-g-padhi.png',
    imageAlt: 'Portrait of Subhasree G. Padhi, Creative & Communications Lead at AervenLabs',
    imagePosition: 'center 20%',
    order: 6,
    featured: false,
  },
  {
    id: 'avadhut-g-kashid',
    name: 'Avadhut G. Kashid',
    role: 'Software Engineer',
    systemLabel: 'ENGINEERING // SOFTWARE SYSTEMS',
    discipline: 'SOFTWARE SYSTEMS',
    image: '/assets/team/avadhut-g-kashid.png',
    imageAlt: 'Portrait of Avadhut G. Kashid, Software Engineer at AervenLabs',
    imagePosition: 'center 20%',
    order: 7,
    featured: false,
  },
  {
    id: 'ajay-a-prajapati',
    name: 'Ajay A. Prajapati',
    role: 'Application Developer',
    systemLabel: 'ENGINEERING // APPLICATION DEVELOPMENT',
    discipline: 'APPLICATION DEVELOPMENT',
    image: '/assets/team/ajay-a-prajapati.png',
    imageAlt: 'Portrait of Ajay A. Prajapati, Application Developer at AervenLabs',
    imagePosition: 'center 20%',
    order: 8,
    featured: false,
  },
];
