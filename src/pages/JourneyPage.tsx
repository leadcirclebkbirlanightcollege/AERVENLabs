import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { routeSEOConfig } from '../data/seo';
import { generateBreadcrumbSchema } from '../lib/seo';
import { journeyMilestones, journeySectionConfig } from '../data/journey';
import { JourneyMilestone } from '../types';

export const JourneyPage: React.FC = () => {
  useSEO(
    routeSEOConfig.journey,
    routeSEOConfig.journey?.breadcrumbs
      ? generateBreadcrumbSchema(routeSEOConfig.journey.breadcrumbs)
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

  // Specific architectural deliverables for each verified phase
  const milestoneDeliverables: Record<string, string[]> = {
    'origin-foundation': [
      'Founding Conviction & Purpose Framework',
      'System Architecture Specification Standards',
      'Monochrome Design System Principles',
    ],
    'systems-exploration': [
      'Reactive Client Architecture Patterns',
      'PostgreSQL Relational Schema Prototyping',
      'Geist Typography Scale & Token System',
    ],
    'campus-connect-platform': [
      'Collegiate Operating System Core Architecture',
      'Timing-Safe QR & OTP Attendance Protocol',
      'PostgreSQL Row-Level Security Isolation (62 Tables)',
      'Multi-Tenant Institution Engine (college_id Partitioning)',
    ],
    'intelligent-systems-expansion': [
      'Edge Runtime Computing (25 Deno Functions)',
      'Zero-Auth Cryptographic Credential Protocol',
      'Modular Software Tooling & Systems Architecture',
    ],
  };

  return (
    <div
      data-testid="route-journey"
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
              JOURNEY
            </span>
          </nav>

          <div className="grid-architectural items-start gap-8">
            {/* Left Column: Eyebrow & Status */}
            <div className="lg:col-span-4 space-y-3">
              <div className="inline-flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-white" aria-hidden="true" />
                <span className="text-eyebrow text-neutral-400">
                  AERVENLABS // EVOLUTION
                </span>
              </div>
              <p className="text-tech-label text-neutral-500 font-mono tracking-widest">
                PROGRESSION // 04 PHASES
              </p>
            </div>

            {/* Right Column: Monumental Headline & Narrative */}
            <div className="lg:col-span-8 space-y-6">
              <h1 className="text-heading-1 sm:text-display-sm lg:text-display font-semibold tracking-tight text-white uppercase leading-[0.95] select-none">
                {journeySectionConfig.headline}
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-secondary-text leading-relaxed max-w-3xl font-sans">
                {journeySectionConfig.description}
              </p>
            </div>
          </div>
        </motion.header>

        {/* Chronological Milestone Archive Grid */}
        <section aria-label="Chronological evolution phases" className="space-y-12 sm:space-y-16">
          <div className="flex items-center justify-between border-b border-border-subtle pb-4">
            <span className="text-tech-label text-neutral-400 font-mono tracking-widest uppercase">
              ARCHITECTURAL PHASES // CHRONOLOGY
            </span>
            <span className="text-tech-label text-neutral-500 font-mono">
              VERIFIED MILESTONES
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {journeyMilestones.map((milestone: JourneyMilestone, index: number) => {
              const deliverables = milestoneDeliverables[milestone.id] || [];

              return (
                <motion.article
                  key={milestone.id}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                  className="surface-level-1 p-6 sm:p-8 lg:p-10 rounded-[2px] border border-border-subtle hover:border-white/30 transition-all duration-300 flex flex-col justify-between space-y-8"
                >
                  <div className="space-y-6">
                    {/* Phase Bezel */}
                    <div className="flex items-center justify-between border-b border-border-subtle pb-4">
                      <div className="flex items-center gap-2.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-white" aria-hidden="true" />
                        <span className="font-mono text-xs font-semibold text-white tracking-wider">
                          {milestone.phase}
                        </span>
                      </div>
                      <span className="text-tech-label text-neutral-500 font-mono">
                        {milestone.category}
                      </span>
                    </div>

                    {/* Title & Short Statement */}
                    <div className="space-y-2">
                      <h2 className="text-heading-2 font-semibold text-white tracking-tight">
                        {milestone.title}
                      </h2>
                      <p className="text-xs sm:text-sm font-mono text-neutral-400">
                        {milestone.shortStatement}
                      </p>
                    </div>

                    {/* Hairline Divider */}
                    <div className="h-[1px] w-12 bg-white/20" aria-hidden="true" />

                    {/* Narrative Description */}
                    <p className="text-sm sm:text-base text-secondary-text leading-relaxed font-sans">
                      {milestone.description}
                    </p>
                  </div>

                  {/* Architectural Highlights / Deliverables */}
                  {deliverables.length > 0 && (
                    <div className="pt-6 border-t border-border-subtle space-y-3">
                      <span className="text-tech-label text-neutral-500 font-mono block">
                        ARCHITECTURAL DELIVERABLES //
                      </span>
                      <ul className="space-y-2" aria-label={`Deliverables for ${milestone.title}`}>
                        {deliverables.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 text-xs font-mono text-neutral-300"
                          >
                            <CheckCircle2 className="h-3.5 w-3.5 text-neutral-500 mt-0.5 shrink-0" aria-hidden="true" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.article>
              );
            })}
          </div>
        </section>

        {/* Strategic Next Direction & Architectural Closure */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="surface-level-1 border border-border-subtle p-8 sm:p-12 lg:p-16 rounded-[2px] space-y-8"
        >
          <div className="grid-architectural items-start gap-8">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-tech-label text-neutral-400 font-mono tracking-widest uppercase block">
                CONTINUOUS EVOLUTION // THE HORIZON
              </span>
              <h2 className="text-heading-1 font-semibold text-white tracking-tight">
                Ideas are easy. Systems that operate enduringly are engineered.
              </h2>
              <p className="text-base text-secondary-text leading-relaxed max-w-2xl font-sans">
                Every milestone achieved at AervenLabs informs our next architectural layer. Explore our flagship software product, Campus Connect, or connect with our engineering collective.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 justify-center">
              <Link
                to="/projects/campus-connect"
                className="inline-flex items-center justify-between gap-3 bg-white text-black font-mono text-xs font-semibold tracking-wider uppercase px-6 py-3.5 rounded-[2px] border border-white hover:bg-neutral-200 transition-colors duration-200 min-h-[48px]"
                aria-label="View Campus Connect case study"
              >
                <span>CAMPUS CONNECT SPEC</span>
                <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-between gap-3 bg-surface-dark text-white font-mono text-xs font-medium tracking-wider uppercase px-6 py-3.5 rounded-[2px] border border-border-subtle hover:border-white/30 transition-colors duration-200 min-h-[48px]"
                aria-label="Start a conversation with AervenLabs"
              >
                <span>START A CONVERSATION</span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-neutral-400" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default JourneyPage;
