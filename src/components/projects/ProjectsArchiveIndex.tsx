import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../../types';

interface ProjectsArchiveIndexProps {
  projects: Project[];
}

export const ProjectsArchiveIndex: React.FC<ProjectsArchiveIndexProps> = ({ projects }) => {
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <section
      id="projects-archive-list"
      aria-labelledby="projects-archive-title"
      className="relative border-t border-[#E6E9EF] bg-[#F7F8FA] text-[#101828] py-16 sm:py-20 lg:py-24 scroll-mt-20"
    >
      <div className="container-architectural space-y-8 sm:space-y-12">
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E6E9EF] pb-4">
          <div className="flex items-center gap-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#315EFA]" aria-hidden="true" />
            <span className="text-xs font-mono text-[#315EFA] font-semibold tracking-wider uppercase">
              02 / SELECTED WORK
            </span>
          </div>
          <span className="text-xs text-[#667085] font-mono tracking-widest uppercase">
            SELECTED DIGITAL PRODUCTS &amp; EXPERIENCES // VERIFIED PRODUCTION
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
              'WEB APPLICATION',
              'PRODUCTION-READY',
              'HIGH SECURITY',
            ];

            return (
              <motion.div
                key={project.id}
                whileHover={prefersReducedMotion ? {} : { x: 4 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="group relative editorial-card border border-[#E6E9EF] hover:border-[#315EFA]/50 p-6 sm:p-8 lg:p-10 rounded-[16px] transition-all duration-300"
              >
                <Link
                  to={project.links?.caseStudy || `/projects/${project.slug}`}
                  className="w-full text-left outline-none focus-visible:ring-2 focus-visible:ring-[#315EFA] rounded-[12px] block"
                  aria-label={`Explore ${project.title} case study and system architecture`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-center">
                    {/* LEFT (Cols 1-2): Monumental Project Number */}
                    <div className="md:col-span-2 flex items-center gap-4">
                      <span className="font-mono text-4xl sm:text-5xl font-light text-[#98A2B3] group-hover:text-[#315EFA] transition-colors duration-300 select-none">
                        {projectNumber}
                      </span>
                      <span className="h-8 w-[1px] bg-[#E6E9EF] hidden md:block" aria-hidden="true" />
                    </div>

                    {/* MIDDLE (Cols 3-7): System Name & Descriptor */}
                    <div className="md:col-span-6 space-y-1.5">
                      <div className="flex items-center gap-2 text-xs font-mono text-[#667085] uppercase tracking-wider">
                        <span>SYS_ID // 0{idx + 1}</span>
                        <span>·</span>
                        <span className="text-[#315EFA] font-medium">{project.discipline || project.category}</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#101828] tracking-tight group-hover:text-[#315EFA] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#667085] font-sans">
                        {project.tagline}
                      </p>
                    </div>

                    {/* RIGHT (Cols 8-12): Status, Tags & Navigation Cue */}
                    <div className="md:col-span-4 flex flex-col md:items-end justify-between space-y-3 pt-4 md:pt-0 border-t md:border-t-0 border-[#E6E9EF]">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-1 text-[11px] font-mono text-[#315EFA] bg-[#F1F3F6] border border-[#E6E9EF] rounded-full font-medium">
                          {project.statusLabel || 'ACTIVE PRODUCTION'}
                        </span>
                      </div>

                      <div className="flex flex-wrap md:justify-end gap-1.5">
                        {platformTags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-mono text-[#667085] bg-white border border-[#E6E9EF] px-2 py-0.5 rounded-[4px]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#315EFA] group-hover:underline pt-1">
                        <span>VIEW ARCHITECTURE</span>
                        <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsArchiveIndex;
