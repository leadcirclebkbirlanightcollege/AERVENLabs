import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { routeSEOConfig } from '../data/seo';
import { generateBreadcrumbSchema } from '../lib/seo';
import { visionSectionConfig } from '../data/vision';

export const VisionPage: React.FC = () => {
  useSEO(
    routeSEOConfig.vision,
    routeSEOConfig.vision?.breadcrumbs
      ? generateBreadcrumbSchema(routeSEOConfig.vision.breadcrumbs)
      : undefined
  );

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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
        duration: prefersReducedMotion ? 0.01 : 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const coreMandates = [
    {
      code: 'MANDATE_01',
      title: 'PURPOSE PRECEDES EXECUTION',
      subtitle: 'Build less noise. Create more value.',
      description:
        'Software should not exist simply because code can be compiled. We reject speculative features, artificial complexity, and engagement traps in favor of tools that serve tangible human utility.',
    },
    {
      code: 'MANDATE_02',
      title: 'ARCHITECTURAL RESTRAINT',
      subtitle: 'Simplicity is an active engineering discipline.',
      description:
        'Systems should be composed of lean, robust, and understandable primitives. We prioritize maintainability, observable state, and deterministic behaviors over bloated dependency trees.',
    },
    {
      code: 'MANDATE_03',
      title: 'ENDURING INFRASTRUCTURE',
      subtitle: 'Engineered for resilience and high fidelity.',
      description:
        'Platforms must withstand operational friction. From database row-level security to timing-safe authentication protocols, foundational durability must be baked into every architecture.',
    },
    {
      code: 'MANDATE_04',
      title: 'HUMAN DIGNITY & SOVEREIGNTY',
      subtitle: 'Technology that respects the individual.',
      description:
        'We design interfaces that promote clarity and calm rather than cognitive exhaustion. User data belongs to the user and institution, never to advertising networks.',
    },
  ];

  return (
    <div
      data-testid="route-vision"
      className="min-h-screen bg-black text-foreground selection:bg-white selection:text-black overflow-x-hidden"
    >
      {/* Background Architectural Grid Lines */}
      <div
        className="pointer-events-none absolute inset-0 select-none opacity-25"
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

      <div className="container-architectural relative z-10 py-16 sm:py-24 lg:py-32 space-y-16 sm:space-y-24 lg:space-y-32">
        {/* Dedicated Page Header */}
        <motion.header
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8 border-b border-border-subtle pb-12 sm:pb-16"
        >
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-neutral-400">
            <Link to="/" className="hover:text-white transition-colors duration-200">
              HOME
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-white" aria-current="page">
              VISION
            </span>
          </nav>

          <div className="grid-architectural items-start gap-8">
            {/* Left Column: Eyebrow & Status */}
            <div className="lg:col-span-4 space-y-3">
              <div className="inline-flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-white" aria-hidden="true" />
                <span className="text-eyebrow text-neutral-400">
                  {visionSectionConfig.eyebrow}
                </span>
              </div>
              <p className="text-tech-label text-neutral-500 font-mono tracking-widest">
                {visionSectionConfig.metaLabel}
              </p>
            </div>

            {/* Right Column: Monumental Headline & Narrative */}
            <div className="lg:col-span-8 space-y-6">
              <h1 className="text-heading-1 sm:text-display-sm lg:text-display font-semibold tracking-tight text-white uppercase leading-[0.95] select-none">
                {visionSectionConfig.headline}
              </h1>
              <p className="text-base sm:text-lg lg:text-2xl text-white/90 font-medium font-sans leading-relaxed max-w-3xl">
                {visionSectionConfig.statement}
              </p>
              <div className="h-[1px] w-16 bg-white/20" aria-hidden="true" />
              <p className="text-base sm:text-lg text-secondary-text leading-relaxed max-w-2xl font-sans">
                {visionSectionConfig.paragraph}
              </p>
            </div>
          </div>
        </motion.header>

        {/* The Horizon Architectural Specimen */}
        <section aria-label="The Horizon architectural axis" className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 text-neutral-500 font-mono text-[10px] tracking-widest uppercase">
            <span>{visionSectionConfig.horizonCoordinates.origin}</span>
            <span className="hidden sm:inline">{visionSectionConfig.horizonCoordinates.focus}</span>
            <span className="hidden md:inline">{visionSectionConfig.horizonCoordinates.vector}</span>
            <span>{visionSectionConfig.horizonCoordinates.terminus}</span>
          </div>

          <div className="relative py-6">
            <div className="h-[1px] w-full bg-white/[0.12]" aria-hidden="true" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none select-none">
              <div className="h-3 w-[1px] bg-white/40" />
              <div className="h-2.5 w-2.5 rotate-45 border border-white bg-black my-1" />
              <div className="h-3 w-[1px] bg-white/40" />
            </div>
          </div>

          <div className="flex items-center justify-between text-neutral-600 font-mono text-[10px]" aria-hidden="true">
            <span>AXIS // PERPETUAL_ALIGNMENT</span>
            <span>INTENT OVER ARBITRARY SCALE</span>
          </div>
        </section>

        {/* Four Architectural Mandates Grid */}
        <section aria-label="Four architectural mandates" className="space-y-10 sm:space-y-12">
          <div className="flex items-center justify-between border-b border-border-subtle pb-4">
            <span className="text-tech-label text-neutral-400 font-mono tracking-widest uppercase">
              STRATEGIC PILLARS // CORE MANDATES
            </span>
            <span className="text-tech-label text-neutral-500 font-mono">
              04 PRINCIPLES
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {coreMandates.map((mandate) => (
              <motion.article
                key={mandate.code}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                className="surface-level-1 p-8 sm:p-10 rounded-[2px] border border-border-subtle hover:border-white/30 transition-all duration-300 space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-border-subtle pb-3">
                    <span className="font-mono text-xs font-semibold text-white tracking-wider">
                      {mandate.code}
                    </span>
                    <span className="text-tech-label text-neutral-500 font-mono">
                      MANDATE
                    </span>
                  </div>

                  <h2 className="text-heading-2 font-semibold text-white tracking-tight uppercase">
                    {mandate.title}
                  </h2>

                  <p className="text-xs sm:text-sm font-mono text-neutral-400">
                    {mandate.subtitle}
                  </p>

                  <div className="h-[1px] w-12 bg-white/20" aria-hidden="true" />

                  <p className="text-sm sm:text-base text-secondary-text leading-relaxed font-sans">
                    {mandate.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Monumental Closing Statement Banner */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border-t border-border-subtle pt-12 sm:pt-16 lg:pt-20 space-y-8"
        >
          <div className="space-y-2 select-none">
            <div className="text-display sm:text-display-lg lg:text-display font-bold tracking-tighter text-white uppercase leading-[0.9]">
              {visionSectionConfig.closingStatement.line1}
            </div>
            <div className="text-display sm:text-display-lg lg:text-display font-bold tracking-tighter text-neutral-400 uppercase leading-[0.9]">
              {visionSectionConfig.closingStatement.line2}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-8 border-t border-border-subtle">
            <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
              AERVENLABS TECHNOLOGIES PVT. LTD. // CONVICTION_SPEC
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-xs font-mono text-white bg-surface-dark border border-white/20 hover:border-white px-5 py-3 rounded-[2px] transition-colors duration-200 min-h-[48px]"
                aria-label="Explore our projects"
              >
                <span>EXPLORE PRODUCTS</span>
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-xs font-mono text-black bg-white hover:bg-neutral-200 px-5 py-3 rounded-[2px] font-semibold transition-colors duration-200 min-h-[48px]"
                aria-label="Start a conversation"
              >
                <span>START A CONVERSATION</span>
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default VisionPage;
