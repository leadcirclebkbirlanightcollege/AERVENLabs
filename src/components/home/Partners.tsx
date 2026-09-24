import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { partnersData, partnersSectionConfig } from '../../data/partners';
import { Partner } from '../../types';

export const Partners: React.FC = () => {
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Motion variants for section entry
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.08,
        delayChildren: prefersReducedMotion ? 0 : 0.04,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: prefersReducedMotion ? 1 : 0,
      y: prefersReducedMotion ? 0 : 16,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.7,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      id="partners"
      aria-labelledby="partners-title"
      className="relative overflow-hidden bg-black text-foreground border-t border-border-subtle py-28 md:py-36 lg:py-44"
    >
      {/* Background Architectural Grid Lines */}
      <div
        className="pointer-events-none absolute inset-0 select-none opacity-40"
        aria-hidden="true"
      >
        <div className="container-architectural h-full w-full">
          <div className="h-full w-full border-x border-white/[0.04]">
            <div className="grid h-full grid-cols-1 md:grid-cols-6 lg:grid-cols-12 divide-x divide-white/[0.03]">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="h-full" />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container-architectural relative z-10 w-full space-y-16 sm:space-y-20 lg:space-y-24">
        {/* Section Header: Eyebrow, Title & Architectural Narrative */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid-architectural items-start"
        >
          {/* Left Column: Eyebrow & Oversized Architectural 07 */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <motion.div variants={itemVariants} className="space-y-3">
              <div className="inline-flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-white" aria-hidden="true" />
                <span className="text-eyebrow text-neutral-400">
                  {partnersSectionConfig.eyebrow}
                </span>
              </div>
              <p className="text-tech-label text-neutral-500 font-mono tracking-widest">
                {partnersSectionConfig.metaLabel}
              </p>
            </motion.div>

            {/* Subtle Architectural 07 Numeral Device */}
            <div
              className="hidden lg:block select-none pointer-events-none opacity-[0.04] -translate-x-3"
              aria-hidden="true"
            >
              <span className="font-sans text-[10rem] font-bold leading-none tracking-tighter text-white">
                {partnersSectionConfig.sectionId}
              </span>
            </div>
          </div>

          {/* Right Column: Editorial Headline & Infrastructure Purpose Statement */}
          <div className="lg:col-span-8 space-y-6">
            <motion.div variants={itemVariants}>
              <h2
                id="partners-title"
                className="text-heading-1 md:text-display-sm font-semibold tracking-tight text-white leading-tight"
              >
                {partnersSectionConfig.headline}
              </h2>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-base sm:text-lg text-secondary-text leading-relaxed max-w-2xl font-sans">
                {partnersSectionConfig.description}
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* ============================================================== */}
        {/* INFRASTRUCTURE PARTNER MODULES GRID (CLOUDFLARE & VERCEL)       */}
        {/* ============================================================== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Layer Sub-header */}
          <div className="flex items-center justify-between border-b border-border-subtle pb-3">
            <span className="text-tech-label text-neutral-400 font-mono tracking-widest">
              {partnersSectionConfig.layerLabel}
            </span>
            <span className="text-tech-label text-neutral-500 font-mono">
              VERIFIED INFRASTRUCTURE
            </span>
          </div>

          {/* 2-Column Architectural Modules */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {partnersData.map((partner: Partner) => (
              <motion.article
                key={partner.id}
                variants={itemVariants}
                className="surface-level-1 p-8 sm:p-10 lg:p-12 space-y-8 rounded-[2px] border border-border-subtle hover:border-white/30 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between"
              >
                {/* Module Top Bezel */}
                <div className="flex items-center justify-between border-b border-border-subtle pb-4">
                  <span className="font-mono text-xs font-semibold text-white tracking-wider">
                    {partner.infraId}
                  </span>
                  <span className="text-tech-label text-neutral-500 font-mono">
                    {partner.category.toUpperCase()}
                  </span>
                </div>

                {/* Partner Brand Display Area with Protected Isolation Boundary */}
                <div className="space-y-6">
                  {/* Official Partner Logo Artwork (Strictly Isolated Exception) */}
                  <div className="h-12 flex items-center">
                    {partner.id === 'cloudflare' && (
                      <div className="partner-logo-boundary">
                        {/* Authentic Official Cloudflare SVG Mark */}
                        <svg
                          viewBox="0 0 100 42"
                          className="h-9 w-auto"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-label="Cloudflare"
                          role="img"
                        >
                          <title>Cloudflare</title>
                          <path
                            d="M68.5 13.5C66.5 6 59.8 0.5 51.8 0.5C45.2 0.5 39.4 4.3 36.6 9.8C34.7 8.8 32.5 8.2 30.1 8.2C22.6 8.2 16.5 14.1 16.2 21.5C14.3 20.7 12.2 20.3 10 20.3C4.5 20.3 0 24.8 0 30.3C0 35.8 4.5 40.3 10 40.3H68.8C75.8 40.3 81.5 34.6 81.5 27.6C81.5 20.8 76.1 15.2 69.4 14.8"
                            fill="#F38020"
                          />
                          <path
                            d="M72.2 16.2C71.5 16.1 70.8 16 70.1 16C68.9 11.2 65.5 7.4 60.9 5.4C63.6 7.9 65.4 11.4 65.8 15.3C66.4 15.4 67 15.5 67.6 15.7C74.3 17.5 78.8 23.3 78.8 30.2C78.8 30.7 78.8 31.2 78.7 31.7C81.5 29.8 83.3 26.6 83.3 23C83.3 17.6 79.4 13.1 74.2 12.2"
                            fill="#FAAE40"
                          />
                        </svg>
                      </div>
                    )}

                    {partner.id === 'vercel' && (
                      <div className="partner-logo-boundary">
                        {/* Authentic Official Vercel SVG Mark */}
                        <svg
                          viewBox="0 0 76 65"
                          className="h-8 w-auto"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-label="Vercel"
                          role="img"
                        >
                          <title>Vercel</title>
                          <path d="M37.5 0L75 65H0L37.5 0Z" fill="#FFFFFF" />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Partner Name & Infrastructure Role */}
                  <div className="space-y-1.5">
                    <p className="text-tech-label text-neutral-400 font-mono tracking-wider">
                      {partner.techRole}
                    </p>
                    <h3 className="text-heading-2 font-semibold text-white tracking-tight">
                      {partner.name}
                    </h3>
                  </div>

                  {/* Hairline Accent Divider */}
                  <div className="h-[1px] w-12 bg-white/20" aria-hidden="true" />

                  {/* Factual Infrastructure Description */}
                  <p className="text-sm sm:text-base text-secondary-text leading-relaxed font-sans">
                    {partner.description}
                  </p>
                </div>

                {/* External Verified Link with Safe Target & Touch Area */}
                {partner.websiteUrl && (
                  <div className="pt-6 border-t border-border-subtle">
                    <a
                      href={partner.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${partner.name}'s official website (opens in a new tab)`}
                      className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors duration-200 min-h-[48px] py-2"
                    >
                      <span className="uppercase tracking-wider">
                        VISIT {partner.name.toUpperCase()}
                      </span>
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                )}
              </motion.article>
            ))}
          </div>

          {/* Bottom Architectural Readout */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-6 text-neutral-500 font-mono text-[10px] select-none" aria-hidden="true">
            <span>AERVENLABS TECHNOLOGIES // INFRASTRUCTURE FOUNDATION</span>
            <span>SYS_SPEC // ENDURING_RELIABILITY</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
