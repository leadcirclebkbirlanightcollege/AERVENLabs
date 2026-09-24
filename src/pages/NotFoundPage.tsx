import React from 'react';
import { useSEO } from '../hooks/useSEO';
import { siteConfig } from '../config/site';

/**
 * Temporary foundation placeholder for Not Found route ('*').
 */
export const NotFoundPage: React.FC = () => {
  useSEO({
    title: `404 Not Found — ${siteConfig.name}`,
    description: 'The requested page could not be found.',
    robots: 'noindex, nofollow',
  });

  return (
    <div data-testid="route-placeholder-not-found" className="min-h-screen">
      {/* Foundation shell placeholder - Not Found */}
    </div>
  );
};

export default NotFoundPage;
