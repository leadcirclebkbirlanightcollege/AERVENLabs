import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, ExternalLink, ShieldCheck, Terminal } from 'lucide-react';
import { Project } from '../../types';
import { CampusConnectArchitecturalVisual } from './CampusConnectArchitecturalVisual';

interface ProjectArchiveRowProps {
  project: Project;
  index: number;
}

export const ProjectArchiveRow: React.FC<ProjectArchiveRowProps> = ({ project, index }) => {
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const projectNumber =
    project.archiveNumber || (index + 1).toString().padStart(2, '0');
  const projectArchiveLabel =
    project.archiveLabel || `PROJECT ${projectNumber} // ${project.title.toUpperCase()}`;
  const projectStatusLabel =
    project.statusLabel || 'STATUS // PRODUCTION-READY';

  const platformBadges = project.platformBadges || [
    'WEB // PWA',
    'MULTI-TENANT // ENABLED',
  ];

  const caseStudyMetrics = project.caseStudy?.metrics;

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

  return (
    <article
      id={`project-${project.slug}`}
      aria-labelledby={`project-title-${project.id}`}
      className="relative border-b border-[#E6E9EF] py-16 sm:py-24 scroll-mt-24 bg-white text-[#101828]"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="container-architectural space-y-10 sm:space-y-12"
      >
        {/* 1. TOP METADATA BAR */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E6E9EF] pb-4 text-xs font-mono text-[#667085]"
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#315EFA]" aria-hidden="true" />
            <span className="font-semibold text-[#101828] tracking-wider uppercase">
              {projectArchiveLabel}
            </span>
            <span className="hidden sm:inline h-3 w-[1px] bg-[#E6E9EF]" aria-hidden="true" />
            <span className="text-[#667085] uppercase tracking-wide">
              {project.discipline || project.category}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 font-mono text-[11px] text-[#315EFA] bg-[#F1F3F6] border border-[#E6E9EF] rounded-full tracking-wider uppercase font-medium">
              {projectStatusLabel}
            </span>
          </div>
        </motion.div>

        {/* 2. PROJECT TITLE & TAGLINE */}
        <motion.div variants={itemVariants} className="space-y-4 max-w-4xl">
          <div className="space-y-2">
            <p className="text-xs text-[#315EFA] font-mono tracking-widest uppercase font-semibold">
              AERVENLABS ARCHIVE // ID: {project.id.toUpperCase()}
            </p>
            <h2
              id={`project-title-${project.id}`}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#101828] leading-tight select-none"
            >
              {project.title}
            </h2>
          </div>

          <p className="text-base sm:text-lg lg:text-xl font-mono text-[#667085] tracking-wide">
            {project.tagline}
          </p>
        </motion.div>

        {/* 3. ARCHITECTURAL PRODUCT VISUAL */}
        <motion.div variants={itemVariants} className="relative">
          {project.slug === 'campus-connect' ? (
            <CampusConnectArchitecturalVisual />
          ) : (
            <div className="bg-[#F7F8FA] border border-[#E6E9EF] p-8 rounded-[16px] text-center">
              <p className="text-sm font-mono text-[#667085]">
                ARCHITECTURAL SPECIFICATION VISUAL // {project.title}
              </p>
            </div>
          )}
        </motion.div>

        {/* 4. EDITORIAL TECHNICAL GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <motion.div variants={itemVariants} className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-mono text-[#101828] tracking-wider uppercase font-semibold block">
                SYSTEM SUMMARY //
              </span>
              <p className="text-base text-[#667085] leading-relaxed font-sans">
                {project.description}
              </p>
            </div>

            {project.features && (
              <div className="space-y-3 pt-2">
                <span className="text-xs font-mono text-[#101828] tracking-wider uppercase font-semibold block">
                  VERIFIED CAPABILITIES //
                </span>
                <ul role="list" className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2.5 bg-[#F7F8FA] px-3.5 py-2.5 rounded-[8px] border border-[#E6E9EF]"
                    >
                      <span className="h-1.5 w-1.5 bg-[#315EFA] rounded-full shrink-0" aria-hidden="true" />
                      <span className="text-xs text-[#101828] font-mono">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>

          <motion.div variants={itemVariants} className="lg:col-span-5 space-y-6">
            <div className="editorial-card p-6 rounded-[16px] space-y-4">
              <span className="text-xs font-mono text-[#667085] tracking-wider uppercase block font-semibold">
                PLATFORM SUPPORT //
              </span>
              <div className="flex flex-wrap gap-2">
                {platformBadges.map((badge) => (
                  <span
                    key={badge}
                    className="px-3 py-1 text-xs font-mono text-[#315EFA] bg-[#F1F3F6] border border-[#E6E9EF] rounded-full font-medium"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              {project.technologies && (
                <div className="pt-3 border-t border-[#E6E9EF] space-y-2">
                  <span className="text-xs font-mono text-[#667085] tracking-wider uppercase block font-semibold">
                    APPROVED STACK //
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-mono text-[#101828] bg-[#F7F8FA] border border-[#E6E9EF] rounded-[6px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-4 border-t border-[#E6E9EF]">
                <Link
                  to={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-mono text-[#315EFA] font-semibold hover:underline"
                >
                  <span>VIEW FULL CASE STUDY</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </article>
  );
};

export default ProjectArchiveRow;
