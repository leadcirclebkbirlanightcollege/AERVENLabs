import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { projectsArchiveConfig } from '../../data/projects';

/**
 * Projects Section 01: Archive Hero.
 * Editorial opening for the official technology archive:
 * - Eyebrow: "01 / PROJECT ARCHIVE"
 * - Headline: "SYSTEMS BUILT WITH INTENT."
 * - Supporting copy: "AervenLabs builds digital products, platforms, and intelligent systems designed around meaningful problems."
 * - Technical archive marker: PROJECTS // 01, ACTIVE SYSTEMS // 01, ARCHIVE STATUS // OPEN
 * - Asymmetric 12-column architectural layout with hairline grid.
 */
export const ProjectsHero: React.FC = () => {
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

  const handleScrollCue = () => {
    const target = document.getElementById('projects-archive-list');
    if (target) {
      target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    }
  };

  return (
    <header className="relative overflow-hidden bg-black text-foreground pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-12 sm:pb-16 lg:pb-20">
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

      <div className="container-architectural relative z-10 w-full">
        {/* Top Metadata Hairline Ledger */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap items-center justify-between gap-4 border-b border-border-subtle pb-4 sm:pb-5 mb-10 sm:mb-14 lg:mb-16 text-[11px] font-mono text-neutral-400"
        >
          {/* Eyebrow & Status Dot */}
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
            </span>
            <span className="text-white font-semibold tracking-wider uppercase">
              {projectsArchiveConfig.eyebrow}
            </span>
          </div>

          {/* Technical Archive Markers */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-neutral-500">
            <span className="text-neutral-400">{projectsArchiveConfig.meta.projectsCount}</span>
            <span className="hidden sm:inline text-neutral-700" aria-hidden="true">/</span>
            <span className="hidden sm:inline">{projectsArchiveConfig.meta.activeSystems}</span>
            <span className="hidden sm:inline text-neutral-700" aria-hidden="true">/</span>
            <span className="px-2 py-0.5 font-mono text-[10px] text-white bg-surface-dark border border-white/20 rounded-[2px]">
              {projectsArchiveConfig.meta.archiveStatus}
            </span>
          </div>
        </motion.div>

        {/* 12-Column Asymmetric Editorial Composition */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid-architectural items-start gap-y-12 lg:gap-y-16"
        >
          {/* LEFT / CENTER (Cols 1-8): Monumental Heading & Purpose Statement */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-8">
            <motion.div variants={itemVariants} className="space-y-3">
              <p className="text-tech-label text-neutral-500 font-mono tracking-widest uppercase">
                AERVENLABS // TECHNICAL ARCHIVE
              </p>
              <h1 className="text-display sm:text-display-lg lg:text-display font-semibold tracking-tight text-white uppercase leading-[0.92] select-none">
                {projectsArchiveConfig.headline.split(' ').slice(0, 2).join(' ')}
                <br />
                {projectsArchiveConfig.headline.split(' ').slice(2).join(' ')}
              </h1>
            </motion.div>

            <motion.div variants={itemVariants} className="max-w-2xl">
              <p className="text-base sm:text-lg md:text-xl text-secondary-text leading-relaxed font-sans">
                {projectsArchiveConfig.description}
              </p>
            </motion.div>

            {/* Architectural Statement: Focus Over Volume */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-3 px-3.5 py-2 border border-border-subtle bg-surface-dark rounded-[2px] text-xs font-mono text-neutral-400"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-white/60" aria-hidden="true" />
              <span>INTENTIONALLY FOCUSED ARCHIVE · PRODUCTION-VALIDATED SYSTEMS ONLY</span>
            </motion.div>
          </div>

          {/* RIGHT (Cols 9-12): Technical Readout Box & Index Manifest */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-4 flex flex-col justify-between space-y-6 lg:pl-6"
          >
            <div className="surface-level-1 border border-border-subtle p-5 sm:p-6 rounded-[2px] space-y-5">
              <div className="flex items-center justify-between border-b border-border-subtle pb-3">
                <span className="text-tech-label text-white font-mono tracking-widest uppercase">
                  {projectsArchiveConfig.technicalReadout.label}
                </span>
                <span className="text-[10px] font-mono text-neutral-500">
                  SYS_CATALOG // 2026
                </span>
              </div>

              <div className="space-y-2.5">
                {projectsArchiveConfig.technicalReadout.items.map((item, idx) => (
                  <div
                    key={item}
                    className="flex items-center justify-between text-xs font-mono text-neutral-300 py-1 border-b border-white/[0.04]"
                  >
                    <span className="text-neutral-500">0{idx + 1} //</span>
                    <span className="font-medium tracking-wide">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-border-subtle flex items-center justify-between text-[10px] font-mono text-neutral-400">
                <span>FLAGSHIP SYSTEM</span>
                <span className="text-white font-bold">CAMPUS CONNECT</span>
              </div>
            </div>

            {/* Architectural Sub-Readout: Engineering Discipline */}
            <div className="border border-border-subtle p-4 rounded-[2px] text-[11px] font-mono text-neutral-500 space-y-1.5 hidden sm:block">
              <div className="text-neutral-400 font-semibold tracking-wider uppercase">
                ENGINEERING STANDARD //
              </div>
              <p className="text-neutral-400 text-xs font-sans leading-normal">
                Multi-tenant cloud infrastructure, timing-safe session protocols, and zero-auth public credential verification.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Hairline Rule & Quiet Scroll Cue */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="mt-14 sm:mt-18 lg:mt-24 pt-5 border-t border-border-subtle flex flex-wrap items-center justify-between gap-4 text-[11px] font-mono text-neutral-500"
        >
          <div className="flex items-center gap-3">
            <span className="text-neutral-400">SYSTEM ARCHIVE //</span>
            <span>ENTRY 01 OF 01 DOCUMENTED</span>
          </div>

          <button
            type="button"
            onClick={handleScrollCue}
            className="group flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-white rounded-[2px] px-2 py-1 min-h-[44px]"
            aria-label="Scroll down to selected work index"
          >
            <span className="tracking-widest uppercase">EXPLORE ARCHIVE</span>
            <ArrowDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-y-0.5" aria-hidden="true" />
          </button>
        </motion.div>
      </div>
    </header>
  );
};

export default ProjectsHero;
