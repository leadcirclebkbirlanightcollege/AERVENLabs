import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, ExternalLink, ShieldCheck, Terminal, Layers } from 'lucide-react';
import { Project } from '../../types';
import { CampusConnectArchitecturalVisual } from './CampusConnectArchitecturalVisual';
import { buttonVariants } from '../ui/button';

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
    project.archiveLabel || `PROJECT ${projectNumber} // FLAGSHIP PRODUCT`;
  const projectStatusLabel =
    project.statusLabel || 'STATUS // PRODUCTION-READY';

  const platformBadges = project.platformBadges || [
    'WEB // PWA',
    'ANDROID // CAPACITOR',
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
      y: prefersReducedMotion ? 0 : 20,
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
      className="relative border-b border-border-subtle py-16 sm:py-24 lg:py-32 scroll-mt-24"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="container-architectural space-y-10 sm:space-y-12 lg:space-y-16"
      >
        {/* ============================================================== */}
        {/* 1. TOP METADATA HAIRLINE BAR                                   */}
        {/* ============================================================== */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-between gap-4 border-b border-border-subtle pb-4 text-xs font-mono text-neutral-400"
        >
          {/* Project Number & Category */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-white" aria-hidden="true" />
            <span className="font-semibold text-white tracking-wider uppercase">
              {projectArchiveLabel}
            </span>
            <span className="hidden sm:inline h-3 w-[1px] bg-white/20" aria-hidden="true" />
            <span className="text-neutral-400 uppercase tracking-wide">
              {project.discipline || project.category}
            </span>
          </div>

          {/* Production Status */}
          <div className="flex items-center gap-3">
            <span className="text-neutral-500 font-mono text-[11px]">
              ENGINEERING //
            </span>
            <span className="px-2.5 py-0.5 font-mono text-[10px] text-white bg-surface-dark border border-white/20 rounded-[2px] tracking-wider uppercase">
              {projectStatusLabel}
            </span>
          </div>
        </motion.div>

        {/* ============================================================== */}
        {/* 2. PROJECT TITLE, TAGLINE & ARCHITECTURAL METADATA             */}
        {/* ============================================================== */}
        <motion.div variants={itemVariants} className="space-y-4 max-w-4xl">
          <div className="space-y-2">
            <p className="text-tech-label text-neutral-500 font-mono tracking-widest uppercase">
              AERVENLABS ARCHIVE // ID: {project.id.toUpperCase()}
            </p>
            <h2
              id={`project-title-${project.id}`}
              className="text-heading-1 sm:text-display-sm lg:text-display-md font-bold tracking-tight text-white uppercase leading-none select-none"
            >
              {project.title}
            </h2>
          </div>

          <p className="text-base sm:text-lg lg:text-xl font-mono text-neutral-300 tracking-wide uppercase">
            {project.tagline}
          </p>

          <div className="h-[1px] w-20 bg-white/20" aria-hidden="true" />
        </motion.div>

        {/* ============================================================== */}
        {/* 3. ARCHITECTURAL PRODUCT VISUAL                                */}
        {/* ============================================================== */}
        <motion.div
          variants={itemVariants}
          className="relative transition-transform duration-500 hover:scale-[1.005]"
        >
          {project.slug === 'campus-connect' ? (
            <CampusConnectArchitecturalVisual />
          ) : (
            <div className="surface-level-1 border border-border-subtle p-8 rounded-[2px] text-center">
              <p className="text-sm font-mono text-neutral-400">
                ARCHITECTURAL SPECIFICATION VISUAL // {project.title}
              </p>
            </div>
          )}
        </motion.div>

        {/* ============================================================== */}
        {/* 4. 12-COLUMN EDITORIAL TECHNICAL GRID                          */}
        {/* ============================================================== */}
        <div className="grid-architectural items-start gap-y-10 lg:gap-x-12">
          {/* LEFT COLUMN (Cols 1-7): Verified Scope, Focus Areas & Overview */}
          <motion.div variants={itemVariants} className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="text-tech-label text-neutral-500 font-mono tracking-wider uppercase block">
                SYSTEM SUMMARY //
              </span>
              <p className="text-base sm:text-lg text-secondary-text leading-relaxed font-sans">
                {project.description}
              </p>
            </div>

            {/* Verified Focus Areas & Capabilities */}
            {project.features && (
              <div className="space-y-3 pt-2">
                <span className="text-tech-label text-neutral-500 font-mono tracking-wider uppercase block">
                  VERIFIED CAPABILITIES //
                </span>
                <ul role="list" className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2.5 surface-level-1 px-3.5 py-2.5 rounded-[2px] border border-border-subtle"
                    >
                      <span className="h-1 w-1 bg-white rounded-full shrink-0" aria-hidden="true" />
                      <span className="text-xs text-neutral-300 font-mono">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* System Architectural Principles */}
            <div className="surface-level-1 p-5 rounded-[2px] border border-border-subtle space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                <ShieldCheck className="h-4 w-4 text-white" aria-hidden="true" />
                <span className="text-white font-semibold uppercase tracking-wider">
                  SECURITY & TENANT ISOLATION
                </span>
              </div>
              <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                PostgreSQL Row-Level Security (RLS) is enforced across all 62 database tables, scoping queries strictly to the authenticated collegiate tenant. Public verification routes operate with zero-exposure of student PII.
              </p>
            </div>
          </motion.div>

          {/* RIGHT COLUMN (Cols 8-12): Technical Badges, Stack & Metrics */}
          <motion.div variants={itemVariants} className="lg:col-span-5 space-y-6">
            {/* Platform Badges */}
            <div className="surface-level-1 p-5 rounded-[2px] border border-border-subtle space-y-3">
              <span className="text-tech-label text-neutral-500 font-mono tracking-wider uppercase block">
                PLATFORM SUPPORT //
              </span>
              <div className="flex flex-wrap gap-2">
                {platformBadges.map((badge) => (
                  <span
                    key={badge}
                    className="px-3 py-1 text-xs font-mono text-white bg-surface-dark border border-white/20 rounded-[2px]"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Approved Engineering Stack */}
            {project.technologies && (
              <div className="surface-level-1 p-5 rounded-[2px] border border-border-subtle space-y-3">
                <div className="flex items-center justify-between border-b border-border-subtle pb-2">
                  <span className="text-tech-label text-neutral-500 font-mono tracking-wider uppercase">
                    APPROVED ENGINEERING STACK //
                  </span>
                  <Terminal className="h-3.5 w-3.5 text-neutral-500" aria-hidden="true" />
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[11px] font-mono text-neutral-300 bg-surface-dark border border-border-subtle rounded-[2px]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Key Verified Engineering Metrics */}
            {caseStudyMetrics && caseStudyMetrics.length > 0 && (
              <div className="surface-level-1 p-5 rounded-[2px] border border-border-subtle space-y-3">
                <span className="text-tech-label text-neutral-500 font-mono tracking-wider uppercase block border-b border-border-subtle pb-2">
                  AUDITED SYSTEM TELEMETRY //
                </span>
                <div className="grid grid-cols-2 gap-3 pt-1">
                  {caseStudyMetrics.slice(0, 4).map((metric) => (
                    <div key={metric.label} className="space-y-0.5">
                      <div className="font-mono text-base sm:text-lg font-bold text-white">
                        {metric.value}
                      </div>
                      <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* ============================================================== */}
        {/* 5. EDITORIAL ACTIONS / CTA ROW                                 */}
        {/* ============================================================== */}
        <motion.div
          variants={itemVariants}
          className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
        >
          {/* Primary Direct CTA to Case Study */}
          <Link
            to={project.links?.caseStudy || `/projects/${project.slug}`}
            className={`${buttonVariants({
              variant: 'default',
              size: 'lg',
            })} group gap-3 min-h-[48px] justify-center text-sm font-semibold tracking-wide uppercase`}
            aria-label={`View ${project.title} flagship case study and system architecture`}
          >
            <span>VIEW CASE STUDY</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
          </Link>

          {/* Secondary External Deployment Link if Available */}
          {project.links?.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={`${buttonVariants({
                variant: 'outline',
                size: 'lg',
              })} group gap-2.5 min-h-[48px] justify-center text-sm font-mono text-neutral-300 hover:text-white uppercase`}
              aria-label={`Open ${project.title} live production deployment in new tab`}
            >
              <span>LIVE PRODUCTION PLATFORM</span>
              <ExternalLink className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-neutral-400 group-hover:text-white" aria-hidden="true" />
            </a>
          )}
        </motion.div>
      </motion.div>
    </article>
  );
};

export default ProjectArchiveRow;
