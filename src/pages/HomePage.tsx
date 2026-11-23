import React from 'react';
import { useSEO } from '../hooks/useSEO';
import { routeSEOConfig } from '../data/seo';
import { generateOrganizationSchema, generateWebSiteSchema } from '../lib/seo';
import { Hero } from '../components/home/Hero';
import { BrandIntro } from '../components/home/BrandIntro';
import { OurApproach } from '../components/home/OurApproach';
import { WhatWeBuild } from '../components/home/WhatWeBuild';
import { Projects } from '../components/home/Projects';
import { Journey } from '../components/home/Journey';
import { Vision } from '../components/home/Vision';
import { Team } from '../components/home/Team';
import { Partners } from '../components/home/Partners';
import { ContactCTA } from '../components/home/ContactCTA';

/**
 * HomePage — Complete Reimagined White-First Flagship Sequence:
 * Section 01: Premium Navigation (via RootLayout)
 * Section 02: Hero Experience ("Engineering Ideas. Building What's Next.")
 * Section 03: Brand Introduction ("Not Just Building Technology. Building Possibilities.")
 * Section 04: Our Approach ("Think Beyond. Design Intelligently. Engineer Precisely. Build Meaningfully.")
 * Section 05: What We Build (Capabilities: Digital Product Dev, Web, Mobile, Platforms, Engineering, Innovation)
 * Section 06: Featured Project — Campus Connect (Flagship Showcase)
 * Section 07: Our Journey (Authentic Timeline & Progression)
 * Section 08: Our Philosophy & Vision ("The Future Isn't Something We Wait For. It's Something We Build.")
 * Section 09: Team (All 8 Verified Builders with Clean Portraits & Biographies)
 * Section 10: Partners & Technology Ecosystem (Cloudflare & Vercel)
 * Section 11: Contact CTA ("Have an Idea Worth Building?")
 * Section 12: Footer (via RootLayout)
 */
export const HomePage: React.FC = () => {
  useSEO(routeSEOConfig.home, {
    '@context': 'https://schema.org',
    '@graph': [generateOrganizationSchema(), generateWebSiteSchema()],
  });

  return (
    <div className="flex flex-col bg-white">
      {/* Section 02: Master Hero Experience */}
      <Hero />

      {/* Section 03: Brand Introduction */}
      <BrandIntro />

      {/* Section 04: Our Approach */}
      <OurApproach />

      {/* Section 05: What We Build */}
      <WhatWeBuild />

      {/* Section 06: Featured Projects */}
      <Projects />

      {/* Section 07: Our Journey */}
      <Journey />

      {/* Section 08: Philosophy & Vision */}
      <Vision />

      {/* Section 09: Team Showcase */}
      <Team />

      {/* Section 10: Technology Ecosystem & Partners */}
      <Partners />

      {/* Section 11: Contact CTA */}
      <ContactCTA />
    </div>
  );
};

export default HomePage;
