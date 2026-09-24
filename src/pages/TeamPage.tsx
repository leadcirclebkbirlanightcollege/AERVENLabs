import React from 'react';
import { useSEO } from '../hooks/useSEO';
import { routeSEOConfig } from '../data/seo';
import { generateBreadcrumbSchema } from '../lib/seo';

/**
 * Temporary foundation placeholder for Team route ('/team').
 * Editorial team gallery will be implemented in subsequent prompts.
 */
export const TeamPage: React.FC = () => {
  useSEO(
    routeSEOConfig.team,
    routeSEOConfig.team?.breadcrumbs
      ? generateBreadcrumbSchema(routeSEOConfig.team.breadcrumbs)
      : undefined
  );

  return (
    <div data-testid="route-placeholder-team" className="min-h-screen">
      {/* Foundation shell placeholder - Team */}
    </div>
  );
};

export default TeamPage;
