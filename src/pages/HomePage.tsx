import React from 'react';
import { useSEO } from '../hooks/useSEO';
import { routeSEOConfig } from '../data/seo';
import { generateOrganizationSchema, generateWebSiteSchema } from '../lib/seo';
import { Hero } from '../components/home/Hero';
import { TheBeginning } from '../components/home/TheBeginning';
import { Journey } from '../components/home/Journey';
import { WhatWeBuild } from '../components/home/WhatWeBuild';
import { Projects } from '../components/home/Projects';
import { Team } from '../components/home/Team';
import { Vision } from '../components/home/Vision';
import { Partners } from '../components/home/Partners';

/**
 * HomePage — Section 01: Hero + Section 02: The Beginning + Section 03: Journey + Section 04: What We Build + Section 05: Projects + Section 06: Team + Section 07: Vision + Section 08: Partners.
 * Future homepage sections (Contact)
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

      {/* Homepage Section 04: What We Build / Technology Architecture */}
      <WhatWeBuild />

      {/* Homepage Section 05: Projects / Product Showcase */}
      <Projects />

      {/* Homepage Section 06: Team / People & Builders */}
      <Team />

      {/* Homepage Section 07: Vision / Philosophy & Horizon */}
      <Vision />

      {/* Homepage Section 08: Partners / Infrastructure Foundation */}
      <Partners />
    </div>
  );
};

export default HomePage;
