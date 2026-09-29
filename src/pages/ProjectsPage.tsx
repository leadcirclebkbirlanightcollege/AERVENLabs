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
 * An editorial technology archive and engineering portfolio for AervenLabs Technologies Pvt. Ltd.
 * Master reference consistency with the flagship landing page:
 * - 01 / ARCHIVE HERO: "SYSTEMS BUILT WITH INTENT."
 * - 02 / SELECTED WORK: Architectural index row (no generic 3-column card grid).
 * - 03 / FLAGSHIP PRESENTATION: Campus Connect with abstract architectural visual,
 *   editorial context (Problem, System, Evolution), verified engineering metrics,
 *   and transition to case study.
 * - 04 / ARCHIVE CLOSURE: "ONE SYSTEM. MORE TO BUILD." quiet closing section.
 * - Zero fake projects, zero GPS/maps, strictly monochrome.
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
      className="min-h-screen bg-black text-foreground selection:bg-white selection:text-black overflow-x-hidden"
    >
      {/* 01 / ARCHIVE HERO */}
      <ProjectsHero />

      {/* 02 / SELECTED WORK: Editorial Engineering Ledger / Index */}
      <ProjectsArchiveIndex projects={projectsData} />

      {/* 03 / CAMPUS CONNECT FLAGSHIP FEATURE: Abstract Architectural System */}
      <CampusConnectFeature />

      {/* 04 / ARCHIVE FOOTER: Quiet Closing Section */}
      <ProjectsArchiveFooter />
    </div>
  );
};

export default ProjectsPage;
