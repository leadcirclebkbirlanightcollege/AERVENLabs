import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { projectsArchiveConfig } from '../../data/projects';

export const ProjectsHero: React.FC = () => {
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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
    <header className="relative overflow-hidden bg-white text-[#101828] pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-12 sm:pb-16 lg:pb-20">
      <div className="container-architectural relative z-10 w-full">
        {/* Top Metadata Hairline Ledger */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E6E9EF] pb-4 sm:pb-5 mb-10 sm:mb-14 lg:mb-16 text-xs font-mono text-[#667085]"
        >
          {/* Eyebrow & Status Dot */}
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#315EFA]" />
            </span>
            <span className="text-[#101828] font-semibold tracking-wider uppercase">
              {projectsArchiveConfig.eyebrow}
            </span>
          </div>

          {/* Technical Archive Markers */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-6">
            <span className="text-[#315EFA] font-medium">{projectsArchiveConfig.meta.projectsCount}</span>
            <span className="hidden sm:inline text-[#E6E9EF]" aria-hidden="true">/</span>
            <span className="hidden sm:inline">{projectsArchiveConfig.meta.activeSystems}</span>
            <span className="hidden sm:inline text-[#E6E9EF]" aria-hidden="true">/</span>
            <span className="px-2.5 py-0.5 font-mono text-[11px] text-[#315EFA] bg-[#F1F3F6] border border-[#E6E9EF] rounded-full">
              {projectsArchiveConfig.meta.archiveStatus}
            </span>
          </div>
        </motion.div>

        {/* 12-Column Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <div className="lg:col-span-8 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-[#101828] leading-[1.05]">
              {projectsArchiveConfig.headline}
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-[#667085] leading-relaxed max-w-2xl font-sans">
              {projectsArchiveConfig.description}
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <button
              type="button"
              onClick={handleScrollCue}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-[8px] border border-[#E6E9EF] bg-[#F7F8FA] hover:bg-[#F1F3F6] text-xs font-mono text-[#101828] transition-colors"
            >
              <span>EXPLORE LEDGER</span>
              <ArrowDown className="h-3.5 w-3.5 text-[#315EFA]" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ProjectsHero;
