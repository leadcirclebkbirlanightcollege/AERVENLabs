import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../../types';

interface ProjectsArchiveIndexProps {
  projects: Project[];
}

/**
 * Projects Section 02: Archive Index ("02 / SELECTED WORK").
 * An editorial engineering archive row rather than a generic 3-column card grid.
 * Layout:
 * Left: 01
 * Middle: CAMPUS CONNECT + "Campus Operating System"
 * Right: "PRODUCTION-READY", WEB / PWA, ANDROID / CAPACITOR, MULTI-TENANT
 * Direct navigation to /projects/campus-connect.
 */
export const ProjectsArchiveIndex: React.FC<ProjectsArchiveIndexProps> = ({ projects }) => {
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <section
      id="projects-archive-list"
      aria-labelledby="projects-archive-title"
      className="relative border-t border-border-subtle bg-black text-foreground py-16 sm:py-20 lg:py-24 scroll-mt-20"
    >
      <div className="container-architectural space-y-8 sm:space-y-12">
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border-subtle pb-4">
          <div className="flex items-center gap-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-white" aria-hidden="true" />
            <span className="text-eyebrow text-neutral-400">
              02 / SELECTED WORK
            </span>
          </div>
          <span className="text-tech-label text-neutral-500 font-mono tracking-widest uppercase">
            ARCHIVE INDEX // VERIFIED SYSTEMS
          </span>
        </div>

        {/* Editorial Project Index Table / Rows */}
        <div className="space-y-4">
          <h2 id="projects-archive-title" className="sr-only">
            Selected Work Archive Index
          </h2>

          {projects.map((project, idx) => {
            const projectNumber = (idx + 1).toString().padStart(2, '0');
            const platformTags = project.platformBadges || [
              'WEB // PWA',
              'ANDROID // CAPACITOR',
              'MULTI-TENANT // ENABLED',
            ];

            return (
              <motion.div
                key={project.id}
                whileHover={prefersReducedMotion ? {} : { x: 4 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="group relative surface-level-1 border border-border-subtle hover:border-white/40 p-6 sm:p-8 lg:p-10 rounded-[2px] transition-all duration-300"
              >
                <Link
                  to={project.links?.caseStudy || `/projects/${project.slug}`}
                  className="w-full text-left outline-none focus-visible:ring-2 focus-visible:ring-white rounded-[2px] block"
                  aria-label={`Explore ${project.title} case study and system architecture`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-center">
                    {/* LEFT (Cols 1-2): Monumental Project Number */}
                    <div className="md:col-span-2 flex items-center gap-3">
                      <span className="font-mono text-4xl sm:text-5xl lg:text-6xl font-light text-neutral-600 group-hover:text-white transition-colors duration-300 select-none">
                        {projectNumber}
                      </span>
                      <span className="h-8 w-[1px] bg-white/10 hidden md:block" aria-hidden="true" />
                    </div>

                    {/* MIDDLE (Cols 3-7): System Name & Descriptor */}
                    <div className="md:col-span-5 space-y-1.5">
                      <div className="flex items-center gap-2 text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                        <span>SYS_ID // 0{idx + 1}</span>
                        <span>·</span>
                        <span>{project.discipline || 'ENTERPRISE SYSTEM'}</span>
                      </div>
                      <h3 className="text-heading-2 sm:text-heading-1 font-semibold text-white tracking-tight uppercase group-hover:text-neutral-200 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-mono text-neutral-400 uppercase tracking-wide">
                        {project.tagline}
                      </p>
                    </div>

                    {/* RIGHT (Cols 8-12): Status, Tags & Navigation Cue */}
                    <div className="md:col-span-5 flex flex-col md:items-end justify-between space-y-3.5 pt-4 md:pt-0 border-t md:border-t-0 border-white/[0.06]">
                      {/* Status Tag */}
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-neutral-500 uppercase">
                          STATUS //
                        </span>
                        <span className="px-2.5 py-0.5 font-mono text-[10px] text-white bg-surface-dark border border-white/20 rounded-[2px] tracking-wider uppercase font-semibold">
                          PRODUCTION-READY
                        </span>
                      </div>

                      {/* Technical Platform Badges */}
                      <div className="flex flex-wrap md:justify-end gap-1.5">
                        {platformTags.map((badge) => (
                          <span
                            key={badge}
                            className="px-2 py-0.5 text-[10px] font-mono text-neutral-400 bg-black/60 border border-white/[0.08] rounded-[2px]"
                          >
                            {badge}
                          </span>
                        ))}
                      </div>

                      {/* Directional Cue */}
                      <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 group-hover:text-white transition-colors duration-200 pt-1">
                        <span className="uppercase tracking-wider">OPEN CASE FILE</span>
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Index Subtext: Intentional Focus */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 text-[11px] font-mono text-neutral-500">
          <span>ARCHIVE INDEX // RIGOR OVER VOLUME</span>
          <span>1 VERIFIED PRODUCTION PLATFORM</span>
        </div>
      </div>
    </section>
  );
};

export default ProjectsArchiveIndex;
