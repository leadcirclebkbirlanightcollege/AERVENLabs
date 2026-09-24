import React from 'react';
import { useSEO } from '../hooks/useSEO';
import { routeSEOConfig } from '../data/seo';
import { generateBreadcrumbSchema, generateSoftwareApplicationSchema } from '../lib/seo';
import { projectsData } from '../data/projects';

/**
 * Temporary foundation placeholder for Campus Connect case study ('/projects/campus-connect').
 * Product case study UI will be implemented in subsequent prompts.
 */
export const CampusConnectPage: React.FC = () => {
  const campusConnectProject = projectsData.find((p) => p.slug === 'campus-connect');

  useSEO(
    routeSEOConfig.campusConnect,
    campusConnectProject
      ? {
          '@context': 'https://schema.org',
          '@graph': [
            generateSoftwareApplicationSchema(campusConnectProject),
            ...(routeSEOConfig.campusConnect?.breadcrumbs
              ? [generateBreadcrumbSchema(routeSEOConfig.campusConnect.breadcrumbs)]
              : []),
          ],
        }
      : undefined
  );

  return (
    <div data-testid="route-placeholder-campus-connect" className="min-h-screen">
      {/* Foundation shell placeholder - Campus Connect */}
    </div>
  );
};

export default CampusConnectPage;
