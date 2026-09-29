import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, ExternalLink, ShieldCheck, Terminal, Layers, Activity } from 'lucide-react';
import { campusConnectCaseStudy, projectsArchiveConfig } from '../../data/projects';
import { CampusConnectArchitecturalVisual } from './CampusConnectArchitecturalVisual';
import { buttonVariants } from '../ui/button';

/**
 * Projects Section 03: Campus Connect Feature Presentation.
 * Flagship project presentation with high architectural visual weight:
 * - Project Identity & Status: PRODUCTION-READY // v1.0.0
 * - Abstract Architectural Visual (CampusConnectArchitecturalVisual)
 * - Section 06: Editorial Blocks (The Problem, The System, The Evolution)
 * - Section 07: Verified Engineering Metrics (62 Tables, 25 Edge Functions, 309 Tests, etc.)
 * - Section 12: Transition to Case Study (/projects/campus-connect)
 * Strictly zero map/GPS references.
 */
export const CampusConnectFeature: React.FC = () => {
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.08,
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

  const editorial = projectsArchiveConfig.editorialBlocks;
  const metrics = campusConnectCaseStudy.metrics;

  return (
    <article
      id="feature-campus-connect"
      aria-labelledby="campus-connect-title"
      className="relative border-t border-border-subtle bg-black text-foreground py-20 sm:py-28 lg:py-36 scroll-mt-20"
    >
      {/* Background Architectural Grid Lines */}
      <div
        className="pointer-events-none absolute inset-0 select-none opacity-20"
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

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="container-architectural relative z-10 space-y-16 sm:space-y-20 lg:space-y-28"
      >
        {/* ============================================================== */}
        {/* 1. TOP METADATA HAIRLINE BAR & SYSTEM STATUS                   */}
        {/* ============================================================== */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-between gap-4 border-b border-border-subtle pb-4 text-xs font-mono text-neutral-400"
        >
          {/* Project Number & Category */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-white" aria-hidden="true" />
            <span className="font-semibold text-white tracking-wider uppercase">
              PROJECT 01 // FLAGSHIP PRODUCT
            </span>
            <span className="hidden sm:inline h-3 w-[1px] bg-white/20" aria-hidden="true" />
            <span className="text-neutral-400 uppercase tracking-wide">
              {campusConnectCaseStudy.secondaryPositioning}
            </span>
          </div>

          {/* Production Status Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-0.5 font-mono text-[10px] text-white bg-surface-dark border border-white/20 rounded-[2px] tracking-wider uppercase font-semibold">
              {campusConnectCaseStudy.status}
            </span>
            {campusConnectCaseStudy.platformBadges.map((badge) => (
              <span
                key={badge}
                className="px-2.5 py-0.5 font-mono text-[10px] text-neutral-400 bg-black/60 border border-white/10 rounded-[2px]"
              >
                {badge}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ============================================================== */}
        {/* 2. PROJECT IDENTITY & TAGLINE                                  */}
        {/* ============================================================== */}
        <motion.div variants={itemVariants} className="space-y-4 max-w-4xl">
          <div className="space-y-2">
            <p className="text-tech-label text-neutral-500 font-mono tracking-widest uppercase">
              AERVENLABS ARCHIVE // ID: CAMPUS-CONNECT
            </p>
            <h2
              id="campus-connect-title"
              className="text-heading-1 sm:text-display-sm lg:text-display-md font-bold tracking-tight text-white uppercase leading-none select-none"
            >
              {campusConnectCaseStudy.title}
            </h2>
          </div>

          <p className="text-base sm:text-lg lg:text-xl font-mono text-neutral-300 tracking-wide uppercase">
            {campusConnectCaseStudy.primaryTagline}
          </p>

          <div className="h-[1px] w-20 bg-white/20" aria-hidden="true" />

          <p className="text-sm sm:text-base text-secondary-text leading-relaxed font-sans max-w-3xl pt-2">
            {campusConnectCaseStudy.shortPositioning}
          </p>
        </motion.div>

        {/* ============================================================== */}
        {/* 3. ARCHITECTURAL PRODUCT VISUAL                                */}
        {/* ============================================================== */}
        <motion.div variants={itemVariants} className="relative">
          <CampusConnectArchitecturalVisual />
        </motion.div>

        {/* ============================================================== */}
        {/* 4. EDITORIAL INFORMATION BLOCKS (Problem, System, Evolution)   */}
        {/* ============================================================== */}
        <motion.div variants={itemVariants} className="space-y-8">
          <div className="flex items-center justify-between border-b border-border-subtle pb-3">
            <span className="text-tech-label text-white font-mono tracking-widest uppercase">
              PROJECT CONTEXT & ENGINEERING RATIONALE //
            </span>
            <span className="text-[10px] font-mono text-neutral-500 uppercase">
              VERIFIED ARCHIVE DOCUMENTATION
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Block 1: The Problem */}
            <div className="surface-level-1 border border-border-subtle p-6 sm:p-7 rounded-[2px] space-y-3.5">
              <div className="flex items-center justify-between border-b border-border-subtle pb-2.5">
                <span className="text-tech-label text-neutral-400 font-mono tracking-wider">
                  01 // {editorial.problem.label}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-white/40" aria-hidden="true" />
              </div>
              <h3 className="text-base font-semibold text-white tracking-tight">
                {editorial.problem.title}
              </h3>
              <p className="text-xs sm:text-sm text-secondary-text leading-relaxed font-sans">
                {editorial.problem.description}
              </p>
            </div>

            {/* Block 2: The System */}
            <div className="surface-level-1 border border-border-subtle p-6 sm:p-7 rounded-[2px] space-y-3.5">
              <div className="flex items-center justify-between border-b border-border-subtle pb-2.5">
                <span className="text-tech-label text-neutral-400 font-mono tracking-wider">
                  02 // {editorial.system.label}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-white/40" aria-hidden="true" />
              </div>
              <h3 className="text-base font-semibold text-white tracking-tight">
                {editorial.system.title}
              </h3>
              <p className="text-xs sm:text-sm text-secondary-text leading-relaxed font-sans">
                {editorial.system.description}
              </p>
            </div>

            {/* Block 3: The Evolution */}
            <div className="surface-level-1 border border-border-subtle p-6 sm:p-7 rounded-[2px] space-y-3.5">
              <div className="flex items-center justify-between border-b border-border-subtle pb-2.5">
                <span className="text-tech-label text-neutral-400 font-mono tracking-wider">
                  03 // {editorial.evolution.label}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-white/40" aria-hidden="true" />
              </div>
              <h3 className="text-base font-semibold text-white tracking-tight">
                {editorial.evolution.title}
              </h3>
              <p className="text-xs sm:text-sm text-secondary-text leading-relaxed font-sans">
                {editorial.evolution.description}
              </p>
            </div>
          </div>
        </motion.div>

        {/* ============================================================== */}
        {/* 5. VERIFIED SYSTEM METRICS (Restrained Technical Ledger)       */}
        {/* ============================================================== */}
        <motion.div variants={itemVariants} className="space-y-6">
          <div className="flex items-center justify-between border-b border-border-subtle pb-3">
            <span className="text-tech-label text-white font-mono tracking-widest uppercase">
              AUDITED CODEBASE & ENGINEERING METRICS //
            </span>
            <span className="text-[10px] font-mono text-neutral-500 uppercase">
              MEASURED REPOSITORY TELEMETRY
            </span>
          </div>

          <div className="surface-level-1 border border-border-subtle p-6 sm:p-8 rounded-[2px]">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.06]">
              {metrics.map((metric, idx) => (
                <div
                  key={metric.label}
                  className={`space-y-1.5 ${idx > 0 ? 'sm:pl-6 pt-4 sm:pt-0' : ''}`}
                >
                  <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block">
                    {metric.label}
                  </span>
                  <div className="font-mono text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {metric.value}
                  </div>
                  <p className="text-[11px] text-neutral-400 font-sans leading-tight">
                    {metric.sublabel}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-border-subtle flex flex-wrap items-center justify-between gap-3 text-[10px] font-mono text-neutral-500">
              <span>SOURCE: CAMPUS CONNECT PRODUCTION AUDIT</span>
              <span>ZERO SPECULATIVE METRICS INCLUDED</span>
            </div>
          </div>
        </motion.div>

        {/* ============================================================== */}
        {/* 6. TRANSITION TO CASE STUDY & OFFICIAL DEPLOYMENT LINKS        */}
        {/* ============================================================== */}
        <motion.div
          variants={itemVariants}
          className="surface-level-2 border border-border-subtle p-6 sm:p-8 lg:p-10 rounded-[2px] space-y-6"
        >
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border-subtle pb-4">
            <div className="flex items-center gap-2.5">
              <span className="text-tech-label text-white font-mono tracking-wider uppercase">
                ENGINEERING CASE FILE //
              </span>
              <span className="text-neutral-500 font-mono text-xs">
                PROJECT 01 → CAMPUS CONNECT
              </span>
            </div>
            <span className="text-neutral-500 font-mono text-[10px] uppercase">
              STATUS // DOCUMENTED
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-2">
              <h3 className="text-heading-2 font-semibold text-white tracking-tight uppercase">
                Deep Dive into the Architecture
              </h3>
              <p className="text-sm text-secondary-text leading-relaxed font-sans max-w-2xl">
                Explore the complete technical case study: 62-table relational database schema, 25 serverless Deno Edge functions, multi-tenant row-level security implementation, and credential verification protocols.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              {/* Primary Case Study CTA */}
              <Link
                to="/projects/campus-connect"
                className={`${buttonVariants({
                  variant: 'default',
                  size: 'lg',
                })} group gap-3 min-h-[48px] justify-center text-sm font-semibold tracking-wide uppercase`}
                aria-label="Explore Campus Connect engineering case study"
              >
                <span>EXPLORE CASE STUDY</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
              </Link>

              {/* Official Production URL Link */}
              <a
                href="https://campusconnect.indevs.in"
                target="_blank"
                rel="noopener noreferrer"
                className={`${buttonVariants({
                  variant: 'outline',
                  size: 'lg',
                })} group gap-2.5 min-h-[48px] justify-center text-sm font-mono text-neutral-300 hover:text-white uppercase`}
                aria-label="Visit Campus Connect live production web deployment (opens in a new tab)"
              >
                <span>PRODUCTION PLATFORM</span>
                <ExternalLink className="h-3.5 w-3.5 text-neutral-400 group-hover:text-white transition-colors" aria-hidden="true" />
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </article>
  );
};

export default CampusConnectFeature;
