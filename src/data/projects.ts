import { Project } from '../types';

export interface ProjectsSectionConfig {
  sectionId: string;
  eyebrow: string;
  headline: string;
  description: string;
  metaLabel: string;
}

/**
 * Editorial configuration for Homepage Section 05 — Projects.
 * Sequential identifier 04 / PROJECTS following 03 / WHAT WE BUILD.
 */
export const projectsSectionConfig: ProjectsSectionConfig = {
  sectionId: '04',
  eyebrow: '04 / PROJECTS',
  headline: 'Products are where ideas become tangible.',
  description:
    'We build and deploy software systems designed to solve fundamental problems. Campus Connect represents our flagship platform initiative, uniting institutional communication, navigation, and engagement into a single ecosystem.',
  metaLabel: 'FLAGSHIP // PRODUCT ARCHITECTURE',
};

/**
 * Projects data layer.
 * Contains only verified projects and authentic focus areas.
 * No speculative metrics, fake downloads, or unverified claims.
 */
export const projectsData: Project[] = [
  {
    id: 'campus-connect',
    slug: 'campus-connect',
    order: 1,
    title: 'Campus Connect',
    tagline: 'Campus technology, redesigned.',
    category: 'Digital Products / Platforms',
    discipline: 'FLAGSHIP PLATFORM ENGINEERING',
    platforms: ['Web Application', 'Mobile Application'],
    description:
      'A comprehensive digital platform modernizing campus communication, services, and student engagement. Campus Connect unifies campus navigation, real-time events, digital notice boards, and notifications into a cohesive ecosystem.',
    capabilities: ['Mobile Platforms', 'Web Application', 'Intelligent Systems'],
    features: [
      'Campus Navigation',
      'Events & Announcements',
      'Digital Notice Board',
      'Instant Notifications',
      'Student Engagement',
      'Campus Information Directory',
    ],
    technologies: ['React', 'React Native', 'TypeScript', 'Node.js', 'REST APIs'],
    status: 'in-development',
    featured: true,
  },
];
