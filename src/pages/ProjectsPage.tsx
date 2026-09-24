import React from 'react';
import { useSEO } from '../hooks/useSEO';
import { routeSEOConfig } from '../data/seo';
import { generateBreadcrumbSchema } from '../lib/seo';

/**
 * Temporary foundation placeholder for Projects route ('/projects').
 * Showcase UI will be implemented in subsequent prompts.
 */
export const ProjectsPage: React.FC = () => {
  useSEO(
    routeSEOConfig.projects,
    routeSEOConfig.projects?.breadcrumbs
      ? generateBreadcrumbSchema(routeSEOConfig.projects.breadcrumbs)
      : undefined
  );

  return (
    <div data-testid="route-placeholder-projects" className="min-h-screen">
      {/* Foundation shell placeholder - Projects */}
    </div>
  );
};

export default ProjectsPage;
