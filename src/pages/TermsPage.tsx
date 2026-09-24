import React from 'react';
import { useSEO } from '../hooks/useSEO';
import { routeSEOConfig } from '../data/seo';
import { generateBreadcrumbSchema } from '../lib/seo';

/**
 * Temporary foundation placeholder for Terms route ('/terms').
 * Terms & conditions content will be implemented in subsequent prompts.
 */
export const TermsPage: React.FC = () => {
  useSEO(
    routeSEOConfig.terms,
    routeSEOConfig.terms?.breadcrumbs
      ? generateBreadcrumbSchema(routeSEOConfig.terms.breadcrumbs)
      : undefined
  );

  return (
    <div data-testid="route-placeholder-terms" className="min-h-screen">
      {/* Foundation shell placeholder - Terms & Conditions */}
    </div>
  );
};

export default TermsPage;
