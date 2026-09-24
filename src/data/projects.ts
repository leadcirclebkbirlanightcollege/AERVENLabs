import { Project } from '../types';

/**
 * Projects data layer.
 * Contains only verified projects from design specification.
 */
export const projectsData: Project[] = [
  {
    id: 'campus-connect',
    slug: 'campus-connect',
    title: 'Campus Connect',
    tagline: 'Campus technology, redesigned.',
    category: 'Digital Products / Platforms',
    description:
      'A comprehensive digital platform modernizing campus communication, services, and student engagement.',
    capabilities: ['Mobile Platforms', 'Web Application', 'Intelligent Systems'],
    status: 'in-development',
    featured: true,
  },
];
