import React from 'react';
import { Project } from '../../types';

interface ProjectsArchiveIndexProps {
  projects: Project[];
}

export const ProjectsArchiveIndex: React.FC<ProjectsArchiveIndexProps> = ({ projects }) => {
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const handleNavClick = (slug: string) => {
    const target = document.getElementById(`project-${slug}`);
    if (target) {
      target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    }
  };

  return (
    <nav
      id="project-archive-index"
      aria-label="Project archive quick index"
      className="border-y border-border-subtle bg-black/95 py-4 sticky top-16 md:top-20 z-30 backdrop-blur-md transition-colors"
    >
      <div className="container-architectural flex flex-wrap items-center justify-between gap-4">
        {/* Index Title & Ledger Count */}
        <div className="flex items-center gap-3 font-mono text-xs text-neutral-400">
          <span className="h-1.5 w-1.5 rounded-full bg-white" aria-hidden="true" />
          <span className="text-white font-semibold tracking-wider uppercase">
            ARCHIVE LEDGER
          </span>
          <span className="text-neutral-600" aria-hidden="true">/</span>
          <span className="text-neutral-500 text-[11px]">
            {projects.length.toString().padStart(2, '0')} VERIFIED ENTRY
          </span>
        </div>

        {/* Project Links Manifest */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          {projects.map((project, idx) => {
            const projectNumber =
              project.archiveNumber || (idx + 1).toString().padStart(2, '0');
            return (
              <button
                key={project.id}
                type="button"
                onClick={() => handleNavClick(project.slug)}
                className="group flex items-center gap-2.5 px-3 py-1.5 rounded-[2px] border border-border-subtle hover:border-white/40 bg-surface text-xs font-mono transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                aria-label={`Jump to ${project.title} project showcase`}
              >
                <span className="text-neutral-500 group-hover:text-white transition-colors duration-200">
                  {projectNumber} /
                </span>
                <span className="text-white font-medium tracking-wide">
                  {project.title.toUpperCase()}
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 text-[9px] text-neutral-400 bg-black/60 rounded-[2px] border border-white/10 uppercase">
                  {project.discipline || project.category}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default ProjectsArchiveIndex;
