import React from 'react';
import { useSEO } from '../hooks/useSEO';
import { routeSEOConfig } from '../data/seo';
import { generateBreadcrumbSchema } from '../lib/seo';
import { projectsData } from '../data/projects';
import { ProjectsHero } from '../components/projects/ProjectsHero';
import { ProjectsArchiveIndex } from '../components/projects/ProjectsArchiveIndex';
import { CampusConnectFeature } from '../components/projects/CampusConnectFeature';
import { UnnatiFeature } from '../components/projects/UnnatiFeature';
import { ProjectsArchiveFooter } from '../components/projects/ProjectsArchiveFooter';

/**
 * ProjectsPage — Official Technology & Experiences Showcase (/projects).
 *
 * Showcasing our two selected initiatives:
 * 1. Campus Connect (Higher Education Campus Operating System)
 * 2. UNNATI 2026–27 (Roots & Rhythm — 16th Inter-Collegiate Fest)
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
      {/* 01 / ARCHIVE HERO: Our Work */}
      <ProjectsHero />

      {/* 02 / SELECTED WORK: Editorial Ledger showcasing both initiatives */}
      <ProjectsArchiveIndex projects={projectsData} />

      {/* 03 / INITIATIVE 01: Campus Connect Operating System */}
      <CampusConnectFeature />

      {/* 04 / INITIATIVE 02: UNNATI 2026–27 Cultural Festival Platform */}
      <UnnatiFeature />

      {/* 05 / ARCHIVE FOOTER: Quiet Closing Section */}
      <ProjectsArchiveFooter />
    </div>
  );
};

export default ProjectsPage;
