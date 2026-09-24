import React from 'react';
import { useSEO } from '../hooks/useSEO';
import { routeSEOConfig } from '../data/seo';
import { generateBreadcrumbSchema } from '../lib/seo';

/**
 * Temporary foundation placeholder for Journey route ('/journey').
 * Dedicated milestone presentation will be implemented in subsequent prompts.
 */
export const JourneyPage: React.FC = () => {
  useSEO(
    routeSEOConfig.journey,
    routeSEOConfig.journey?.breadcrumbs
      ? generateBreadcrumbSchema(routeSEOConfig.journey.breadcrumbs)
      : undefined
  );

  return (
    <div data-testid="route-placeholder-journey" className="min-h-screen">
      {/* Foundation shell placeholder - Journey */}
    </div>
  );
};

export default JourneyPage;
