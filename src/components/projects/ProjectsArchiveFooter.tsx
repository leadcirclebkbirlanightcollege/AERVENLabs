import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Compass } from 'lucide-react';
import { projectsArchiveConfig } from '../../data/projects';
import { buttonVariants } from '../ui/button';

/**
 * Projects Section 04: Archive Footer ("ARCHIVE // CURRENT STATE").
 * Quiet closing section after Campus Connect:
 * - Label: ARCHIVE // CURRENT STATE
 * - Large text: ONE SYSTEM. MORE TO BUILD.
 * - Supporting text: AervenLabs continues to explore purposeful software,
 *   intelligent systems, and digital infrastructure.
 * - Explicitly communicates that the portfolio is intentionally focused
 *   rather than artificially populated.
 * - CTA: EXPLORE OUR VISION (/vision)
 */
export const ProjectsArchiveFooter: React.FC = () => {
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const footerData = projectsArchiveConfig.footerSection;

  return (
    <section
      aria-labelledby="archive-current-state-title"
      className="relative overflow-hidden bg-black text-foreground border-t border-border-subtle py-20 sm:py-28 lg:py-36"
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

      <div className="container-architectural relative z-10 w-full">
        <div className="surface-level-1 border border-border-subtle p-8 sm:p-12 lg:p-16 rounded-[2px] space-y-10">
          {/* Top Label */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border-subtle pb-4 text-[11px] font-mono text-neutral-500">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-white" aria-hidden="true" />
              <span className="text-white font-semibold uppercase tracking-wider">
                {footerData.label}
              </span>
            </div>
            <span>INTENTIONALLY FOCUSED PORTFOLIO</span>
          </div>

          {/* 12-Column Editorial Closing Composition */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <div className="lg:col-span-8 space-y-5">
              <h2
                id="archive-current-state-title"
                className="text-display sm:text-display-lg font-bold tracking-tight text-white uppercase leading-[0.92] select-none"
              >
                ONE SYSTEM.
                <br />
                MORE TO BUILD.
              </h2>

              <p className="text-base sm:text-lg text-secondary-text leading-relaxed font-sans max-w-2xl pt-2">
                {footerData.description}
              </p>
            </div>

            {/* Strategic Action Link */}
            <div className="lg:col-span-4 flex flex-col justify-end items-start lg:items-end space-y-4">
              <div className="text-left lg:text-right font-mono text-xs text-neutral-400 space-y-1">
                <span className="text-neutral-500 block uppercase">FUTURE TRAJECTORY</span>
                <span>PHILOSOPHY // DIRECTION</span>
              </div>

              <Link
                to={footerData.ctaHref}
                className={`${buttonVariants({
                  variant: 'default',
                  size: 'lg',
                })} group gap-3 min-h-[48px] w-full sm:w-auto justify-center text-sm font-semibold tracking-wide uppercase`}
                aria-label="Explore AervenLabs vision and future technology roadmap"
              >
                <span>{footerData.ctaText}</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Bottom Telemetry Bar */}
          <div className="pt-6 border-t border-border-subtle flex flex-wrap items-center justify-between gap-3 text-[10px] font-mono text-neutral-600">
            <span>AERVENLABS TECHNOLOGIES PVT. LTD.</span>
            <span>REPOSITORY DISCIPLINE // PRODUCTION FIRST</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsArchiveFooter;
