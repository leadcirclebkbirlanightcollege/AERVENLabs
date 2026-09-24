import React from 'react';
import { useSEO } from '../hooks/useSEO';
import { routeSEOConfig } from '../data/seo';
import { generateOrganizationSchema, generateWebSiteSchema } from '../lib/seo';
import { Hero } from '../components/home/Hero';
import { TheBeginning } from '../components/home/TheBeginning';
import { Journey } from '../components/home/Journey';

/**
 * HomePage — Section 01: Hero + Section 02: The Beginning + Section 03: Journey.
 * Future homepage sections (What We Build, Projects, etc.)
 * will be sequentially integrated in subsequent dedicated prompts.
 */
export const HomePage: React.FC = () => {
  useSEO(routeSEOConfig.home, {
    '@context': 'https://schema.org',
    '@graph': [generateOrganizationSchema(), generateWebSiteSchema()],
  });

  return (
    <div className="flex flex-col bg-black">
      {/* Homepage Section 01: Hero / Opening */}
      <Hero />

      {/* Homepage Section 02: The Beginning / Origin Story */}
      <TheBeginning />

      {/* Homepage Section 03: Journey / Evolution Story */}
      <Journey />
    </div>
  );
};

export default HomePage;
