import React from 'react';
import { useSEO } from '../hooks/useSEO';
import { routeSEOConfig } from '../data/seo';
import { generateBreadcrumbSchema } from '../lib/seo';
import { projectsData } from '../data/projects';
import { ProjectsHero } from '../components/projects/ProjectsHero';
import { ProjectsArchiveIndex } from '../components/projects/ProjectsArchiveIndex';
import { CampusConnectFeature } from '../components/projects/CampusConnectFeature';
import { ProjectsArchiveFooter } from '../components/projects/ProjectsArchiveFooter';

/**
 * ProjectsPage — Official Technology Archive (/projects).
 *
 * White-first editorial technology archive showcasing all 4 authentic AERVENLabs projects:
 * 1. Campus Connect
 * 2. NagrikSetu
 * 3. RAILVERSE
 * 4. AERVENLabs Platform
 */
export const ProjectsPage: React.FC = () => {
  useSEO(
    routeSEOConfig.projects,
    routeSEOConfig.projects?.breadcrumbs
      ? generateBreadcrumbSchema(routeSEOConfig.projects.breadcrumbs)
      : undefined
  );

  return (
    <div
      data-testid="route-projects"
      className="min-h-screen bg-white text-[#101828] overflow-x-hidden"
    >
      {/* 01 / ARCHIVE HERO */}
      <ProjectsHero />

      {/* 02 / SELECTED WORK: Editorial Engineering Ledger / Index for all 4 projects */}
      <ProjectsArchiveIndex projects={projectsData} />

      {/* 03 / CAMPUS CONNECT FLAGSHIP FEATURE: Abstract Architectural System */}
      <CampusConnectFeature />

      {/* 04 / ARCHIVE FOOTER: Quiet Closing Section */}
      <ProjectsArchiveFooter />
    </div>
  );
};

export default ProjectsPage;
