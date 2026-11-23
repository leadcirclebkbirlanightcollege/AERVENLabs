import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, ExternalLink, Sparkles, Layers, ShieldCheck, Database, Compass, Train } from 'lucide-react';
import { projectsData, projectsSectionConfig } from '../../data/projects';

/**
 * Section 6: Featured Projects.
 * High-quality visual presentation of all 4 authentic AERVENLabs projects:
 * 1. Campus Connect
 * 2. NagrikSetu
 * 3. RAILVERSE
 * 4. AERVENLabs Platform
 */
export const Projects: React.FC = () => {
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
        duration: prefersReducedMotion ? 0.01 : 0.65,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const flagship = projectsData[0]; // Campus Connect
  const otherProjects = projectsData.slice(1);

  return (
    <section
      id="featured-projects"
      aria-labelledby="featured-projects-title"
      className="relative overflow-hidden bg-white border-b border-[#E6E9EF] py-20 sm:py-28 lg:py-36"
    >
      <div className="container-architectural relative z-10 w-full space-y-16">
        {/* Section Header */}
        <div className="grid-architectural items-start gap-8">
          <div className="lg:col-span-4 space-y-2">
            <div className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#315EFA]" />
              <span className="text-eyebrow font-mono text-xs font-semibold tracking-wider text-[#315EFA]">
                {projectsSectionConfig.eyebrow}
              </span>
            </div>
            <p className="text-xs font-mono uppercase tracking-widest text-[#667085]">
              {projectsSectionConfig.metaLabel}
            </p>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <h2
              id="featured-projects-title"
              className="text-heading-1 sm:text-display-sm font-bold tracking-tight text-[#101828] leading-tight"
            >
              {projectsSectionConfig.headline}
            </h2>
            <p className="text-base sm:text-lg text-[#667085] max-w-2xl font-sans">
              {projectsSectionConfig.description}
            </p>
          </div>
        </div>

        {/* 1. HEROIC FLAGSHIP PRODUCT SHOWCASE: Campus Connect */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="p-8 sm:p-12 lg:p-14 rounded-[20px] bg-[#F7F8FA] border border-[#E6E9EF] shadow-md shadow-[#101828]/04 space-y-10"
        >
          {/* Top Status Strip */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E6E9EF] pb-5">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-[#DCE5FF] text-[#315EFA] font-mono text-xs font-semibold">
                FLAGSHIP 01 // HIGHER EDUCATION
              </span>
              <span className="h-3 w-[1px] bg-[#D0D5DD] hidden sm:inline" />
              <span className="font-mono text-xs text-[#667085] hidden sm:inline">
                CAMPUS OPERATING SYSTEM
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 text-xs font-mono text-[#101828] bg-white border border-[#E6E9EF] rounded-[6px]">
                PRODUCTION-READY
              </span>
              <span className="px-2.5 py-0.5 text-xs font-mono text-[#315EFA] bg-[#DCE5FF]/60 rounded-[6px]">
                v1.0.0
              </span>
            </div>
          </div>

          {/* 12-Column Split: Content & Visual Blueprint */}
          <div className="grid-architectural items-center gap-10 lg:gap-14">
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-3">
                <h3 className="text-heading-1 sm:text-display-sm font-bold tracking-tight text-[#101828]">
                  {flagship.title}
                </h3>
                <p className="text-base font-mono font-medium text-[#315EFA]">
                  {flagship.tagline}
                </p>
                <p className="text-base text-[#667085] leading-relaxed font-sans pt-1">
                  {flagship.description}
                </p>
              </div>

              {/* Verified Feature Chips */}
              <div className="space-y-2 pt-2">
                <span className="font-mono text-xs font-semibold text-[#101828] uppercase tracking-wider block">
                  CORE OPERATING CAPABILITIES //
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs text-[#101828] font-mono">
                  {flagship.capabilities.map((cap) => (
                    <div key={cap} className="flex items-center gap-2 p-2 rounded-[6px] bg-white border border-[#E6E9EF]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#315EFA]" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  to={`/projects/${flagship.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#101828] hover:bg-[#315EFA] text-white font-medium text-sm rounded-[8px] transition-colors shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-[#315EFA]"
                >
                  <span>Explore Campus Connect</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                {flagship.links?.demo && (
                  <a
                    href={flagship.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3.5 bg-white hover:bg-[#F7F8FA] text-[#101828] border border-[#E6E9EF] font-medium text-sm rounded-[8px] transition-colors shadow-sm"
                  >
                    <span>Visit Live Portal</span>
                    <ExternalLink className="h-3.5 w-3.5 text-[#667085]" />
                  </a>
                )}
              </div>
            </div>

            {/* Right Abstract Platform Visual */}
            <div className="lg:col-span-6">
              <div className="p-6 sm:p-8 rounded-[16px] bg-white border border-[#E6E9EF] shadow-md shadow-[#101828]/03 space-y-6">
                <div className="flex items-center justify-between border-b border-[#E6E9EF] pb-3">
                  <span className="font-mono text-xs font-semibold text-[#101828] uppercase">
                    SYS_CORE // CAMPUS CONNECT MATRIX
                  </span>
                  <span className="font-mono text-[11px] text-[#315EFA]">
                    POSTGRESQL RLS ENFORCED
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="p-4 rounded-[10px] bg-[#F7F8FA] border border-[#E6E9EF] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-[6px] bg-[#DCE5FF] flex items-center justify-center text-[#315EFA]">
                        <ShieldCheck className="h-4 w-4" />
                      </div>
                      <div>
                        <span className="font-semibold text-sm text-[#101828] block">
                          Dynamic QR Attendance Engine
                        </span>
                        <span className="text-xs text-[#667085] font-mono">
                          Timing-safe 10-minute rotating session tokens
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-[#315EFA] font-medium">LIVE</span>
                  </div>

                  <div className="p-4 rounded-[10px] bg-[#F7F8FA] border border-[#E6E9EF] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-[6px] bg-[#F1F3F6] flex items-center justify-center text-[#101828]">
                        <Database className="h-4 w-4" />
                      </div>
                      <div>
                        <span className="font-semibold text-sm text-[#101828] block">
                          Multi-Tenant Architecture
                        </span>
                        <span className="text-xs text-[#667085] font-mono">
                          62 relational tables isolated by college_id
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-[#667085]">SECURE</span>
                  </div>

                  <div className="p-4 rounded-[10px] bg-[#F7F8FA] border border-[#E6E9EF] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-[6px] bg-[#E6E9EF] flex items-center justify-center text-[#315EFA]">
                        <Sparkles className="h-4 w-4" />
                      </div>
                      <div>
                        <span className="font-semibold text-sm text-[#101828] block">
                          Zero-Auth Public Credentials
                        </span>
                        <span className="text-xs text-[#667085] font-mono">
                          Instant verification via /verify/:reference
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-[#315EFA] font-medium">VERIFIED</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#E6E9EF] flex items-center justify-between text-[11px] font-mono text-[#98A2B3]">
                  <span>FOUNDING PARTNER: B. K. BIRLA COLLEGE</span>
                  <span>309 AUTOMATED TESTS</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 2. THREE COMPREHENSIVE PROJECT CARDS: NagrikSetu, RAILVERSE, AERVENLabs Platform */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#E6E9EF] pb-3">
            <span className="font-mono text-xs font-semibold text-[#101828] tracking-widest uppercase">
              ADDITIONAL ECOSYSTEM PLATFORMS & INITIATIVES
            </span>
            <span className="font-mono text-xs text-[#667085]">
              03 PROJECTS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherProjects.map((project) => (
              <motion.article
                key={project.id}
                variants={itemVariants}
                className="editorial-card p-7 flex flex-col justify-between space-y-6 group hover:-translate-y-1 transition-all duration-300"
              >
                <div className="space-y-5">
                  {/* Category & Status */}
                  <div className="flex items-center justify-between border-b border-[#E6E9EF] pb-3">
                    <span className="font-mono text-xs font-semibold text-[#315EFA]">
                      {project.archiveNumber} // {project.category.split(' ')[0].toUpperCase()}
                    </span>
                    <span className="px-2 py-0.5 rounded-[4px] bg-[#F7F8FA] border border-[#E6E9EF] font-mono text-[10px] text-[#667085]">
                      {project.status.toUpperCase()}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-1.5">
                    <h4 className="text-heading-2 font-bold text-[#101828] group-hover:text-[#315EFA] transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-xs font-mono text-[#667085]">
                      {project.tagline}
                    </p>
                  </div>

                  <p className="text-sm text-[#667085] leading-relaxed font-sans">
                    {project.description}
                  </p>

                  {/* Core Features Preview */}
                  <div className="space-y-1.5 pt-2">
                    <span className="font-mono text-[11px] text-[#98A2B3] uppercase block">
                      KEY FOCUS //
                    </span>
                    <ul className="space-y-1">
                      {project.capabilities.slice(0, 3).map((cap) => (
                        <li key={cap} className="flex items-center gap-2 text-xs font-mono text-[#101828]">
                          <span className="h-1 w-1 rounded-full bg-[#315EFA]" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Card Link */}
                <div className="pt-5 border-t border-[#E6E9EF] flex items-center justify-between">
                  <span className="text-xs font-mono text-[#98A2B3]">
                    {project.technologies?.slice(0, 2).join(' · ')}
                  </span>
                  <Link
                    to={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#101828] group-hover:text-[#315EFA] transition-colors"
                  >
                    <span>Explore Project</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* View All Projects Action Strip */}
        <div className="pt-6 flex items-center justify-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2.5 px-7 py-4 rounded-[8px] bg-[#F7F8FA] hover:bg-[#F1F3F6] border border-[#E6E9EF] text-sm font-semibold text-[#101828] hover:text-[#315EFA] transition-all shadow-sm"
          >
            <span>View All Projects in Archive Ledger</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
