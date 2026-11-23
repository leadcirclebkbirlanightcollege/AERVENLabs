import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { campusConnectCaseStudy, projectsArchiveConfig } from '../../data/projects';
import { CampusConnectArchitecturalVisual } from './CampusConnectArchitecturalVisual';
import { buttonVariants } from '../ui/button';

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
      className="relative border-t border-[#E6E9EF] bg-white text-[#101828] py-20 sm:py-28 lg:py-36 scroll-mt-20"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="container-architectural relative z-10 space-y-16 sm:space-y-20"
      >
        {/* 1. TOP METADATA BAR */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E6E9EF] pb-4 text-xs font-mono text-[#667085]"
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#315EFA]" aria-hidden="true" />
            <span className="font-semibold text-[#101828] tracking-wider uppercase">
              PROJECT 01 // FLAGSHIP PRODUCT
            </span>
            <span className="hidden sm:inline h-3 w-[1px] bg-[#E6E9EF]" aria-hidden="true" />
            <span className="text-[#667085] uppercase tracking-wide">
              {campusConnectCaseStudy.secondaryPositioning}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-0.5 font-mono text-[11px] text-[#315EFA] bg-[#F1F3F6] border border-[#E6E9EF] rounded-full font-semibold uppercase">
              {campusConnectCaseStudy.status}
            </span>
            {campusConnectCaseStudy.platformBadges.map((badge) => (
              <span
                key={badge}
                className="px-2.5 py-0.5 font-mono text-[11px] text-[#667085] bg-[#F7F8FA] border border-[#E6E9EF] rounded-full"
              >
                {badge}
              </span>
            ))}
          </div>
        </motion.div>

        {/* 2. PROJECT IDENTITY & TAGLINE */}
        <motion.div variants={itemVariants} className="space-y-4 max-w-4xl">
          <div className="space-y-2">
            <p className="text-xs text-[#315EFA] font-mono tracking-widest uppercase font-semibold">
              AERVENLABS ARCHIVE // ID: CAMPUS-CONNECT
            </p>
            <h2
              id="campus-connect-title"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#101828] leading-[1.08]"
            >
              {campusConnectCaseStudy.title}
            </h2>
          </div>

          <p className="text-lg sm:text-xl font-mono text-[#101828] tracking-wide">
            {campusConnectCaseStudy.primaryTagline}
          </p>

          <div className="h-[1px] w-20 bg-[#315EFA]" aria-hidden="true" />

          <p className="text-base sm:text-lg text-[#667085] leading-relaxed font-sans max-w-3xl pt-2">
            {campusConnectCaseStudy.shortPositioning}
          </p>
        </motion.div>

        {/* 3. ARCHITECTURAL PRODUCT VISUAL */}
        <motion.div variants={itemVariants} className="relative">
          <CampusConnectArchitecturalVisual />
        </motion.div>

        {/* 4. EDITORIAL INFORMATION BLOCKS */}
        <motion.div variants={itemVariants} className="space-y-8">
          <div className="flex items-center justify-between border-b border-[#E6E9EF] pb-3">
            <span className="text-xs text-[#101828] font-mono tracking-widest uppercase font-semibold">
              PROJECT CONTEXT & ENGINEERING RATIONALE //
            </span>
            <span className="text-xs font-mono text-[#667085] uppercase">
              VERIFIED ARCHIVE DOCUMENTATION
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Block 1: The Problem */}
            <div className="editorial-card p-6 sm:p-7 rounded-[16px] space-y-3.5">
              <div className="flex items-center justify-between border-b border-[#E6E9EF] pb-2.5">
                <span className="text-xs text-[#315EFA] font-mono tracking-wider font-semibold">
                  01 // {editorial.problem.label}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#315EFA]" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-[#101828] tracking-tight">
                {editorial.problem.title}
              </h3>
              <p className="text-sm text-[#667085] leading-relaxed font-sans">
                {editorial.problem.description}
              </p>
            </div>

            {/* Block 2: The System */}
            <div className="editorial-card p-6 sm:p-7 rounded-[16px] space-y-3.5">
              <div className="flex items-center justify-between border-b border-[#E6E9EF] pb-2.5">
                <span className="text-xs text-[#315EFA] font-mono tracking-wider font-semibold">
                  02 // {editorial.system.label}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#315EFA]" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-[#101828] tracking-tight">
                {editorial.system.title}
              </h3>
              <p className="text-sm text-[#667085] leading-relaxed font-sans">
                {editorial.system.description}
              </p>
            </div>

            {/* Block 3: The Evolution */}
            <div className="editorial-card p-6 sm:p-7 rounded-[16px] space-y-3.5">
              <div className="flex items-center justify-between border-b border-[#E6E9EF] pb-2.5">
                <span className="text-xs text-[#315EFA] font-mono tracking-wider font-semibold">
                  03 // {editorial.evolution.label}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#315EFA]" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-[#101828] tracking-tight">
                {editorial.evolution.title}
              </h3>
              <p className="text-sm text-[#667085] leading-relaxed font-sans">
                {editorial.evolution.description}
              </p>
            </div>
          </div>
        </motion.div>

        {/* 5. VERIFIED SYSTEM METRICS */}
        <motion.div variants={itemVariants} className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#E6E9EF] pb-3">
            <span className="text-xs text-[#101828] font-mono tracking-widest uppercase font-semibold">
              AUDITED CODEBASE & ENGINEERING METRICS //
            </span>
            <span className="text-xs font-mono text-[#667085] uppercase">
              MEASURED REPOSITORY TELEMETRY
            </span>
          </div>

          <div className="bg-[#F7F8FA] border border-[#E6E9EF] p-6 sm:p-8 rounded-[16px]">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#E6E9EF]">
              {metrics.map((metric, idx) => (
                <div
                  key={metric.label}
                  className={`space-y-1.5 ${idx > 0 ? 'sm:pl-6 pt-4 sm:pt-0' : ''}`}
                >
                  <span className="text-[10px] font-mono text-[#667085] uppercase tracking-widest block">
                    {metric.label}
                  </span>
                  <div className="font-mono text-2xl sm:text-3xl font-bold text-[#101828] tracking-tight">
                    {metric.value}
                  </div>
                  <p className="text-xs text-[#667085] font-sans leading-tight">
                    {metric.sublabel}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-[#E6E9EF] flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#667085]">
              <span>SOURCE: CAMPUS CONNECT PRODUCTION AUDIT</span>
              <span className="text-[#315EFA] font-medium">ZERO SPECULATIVE METRICS INCLUDED</span>
            </div>
          </div>
        </motion.div>

        {/* 6. TRANSITION TO CASE STUDY */}
        <motion.div
          variants={itemVariants}
          className="editorial-card p-6 sm:p-8 lg:p-10 rounded-[16px] space-y-6"
        >
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E6E9EF] pb-4">
            <div className="flex items-center gap-2.5">
              <span className="text-xs text-[#101828] font-mono tracking-wider uppercase font-semibold">
                ENGINEERING CASE FILE //
              </span>
              <span className="text-[#315EFA] font-mono text-xs font-medium">
                PROJECT 01 → CAMPUS CONNECT
              </span>
            </div>
            <span className="text-[#667085] font-mono text-xs uppercase">
              STATUS // DOCUMENTED
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-2">
              <h3 className="text-2xl font-bold text-[#101828] tracking-tight">
                Deep Dive into the Architecture
              </h3>
              <p className="text-sm text-[#667085] leading-relaxed font-sans max-w-2xl">
                Explore the complete technical case study: 62-table relational database schema, 25 serverless Deno Edge functions, multi-tenant row-level security implementation, and credential verification protocols.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <Link
                to="/projects/campus-connect"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 bg-[#315EFA] text-white font-mono text-xs font-semibold tracking-wider uppercase rounded-[8px] hover:bg-[#254dd4] transition-colors duration-200 min-h-[44px] shadow-sm"
                aria-label="Explore Campus Connect engineering case study"
              >
                <span>EXPLORE CASE STUDY</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <a
                href="https://campusconnect.indevs.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#F7F8FA] border border-[#E6E9EF] hover:border-[#101828] text-[#101828] font-mono text-xs font-semibold tracking-wider uppercase rounded-[8px] transition-colors duration-200 min-h-[44px]"
                aria-label="Visit Campus Connect live production web deployment"
              >
                <span>LIVE PLATFORM</span>
                <ExternalLink className="h-3.5 w-3.5 text-[#667085]" />
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </article>
  );
};

export default CampusConnectFeature;
