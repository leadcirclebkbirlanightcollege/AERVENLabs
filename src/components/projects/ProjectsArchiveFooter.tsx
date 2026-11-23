import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { projectsArchiveConfig } from '../../data/projects';

export const ProjectsArchiveFooter: React.FC = () => {
  const footerData = projectsArchiveConfig.footerSection;

  return (
    <section
      aria-labelledby="archive-current-state-title"
      className="relative overflow-hidden bg-white text-[#101828] border-t border-[#E6E9EF] py-20 sm:py-28"
    >
      <div className="container-architectural relative z-10 w-full">
        <div className="bg-[#F7F8FA] border border-[#E6E9EF] p-8 sm:p-12 lg:p-16 rounded-[16px] space-y-10">
          {/* Top Label */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E6E9EF] pb-4 text-xs font-mono text-[#667085]">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#315EFA]" aria-hidden="true" />
              <span className="text-[#101828] font-semibold uppercase tracking-wider">
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
                className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#101828] leading-[1.08]"
              >
                FOUR SYSTEMS.
                <br />
                <span className="text-[#315EFA]">MORE TO BUILD.</span>
              </h2>

              <p className="text-base sm:text-lg text-[#667085] leading-relaxed font-sans max-w-2xl pt-2">
                AERVENLabs continues to explore purposeful software, intelligent systems, and digital infrastructure across education, civic engagement, logistics, and company platforms.
              </p>
            </div>

            {/* Strategic Action Link */}
            <div className="lg:col-span-4 flex flex-col justify-end items-start lg:items-end space-y-4">
              <div className="text-left lg:text-right font-mono text-xs text-[#667085] space-y-1">
                <span className="text-[#101828] font-semibold block uppercase">FUTURE TRAJECTORY</span>
                <span>PHILOSOPHY // DIRECTION</span>
              </div>

              <Link
                to={footerData.ctaHref}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#315EFA] text-white font-mono text-xs font-semibold tracking-wider uppercase rounded-[8px] hover:bg-[#254dd4] transition-colors duration-200 min-h-[44px] shadow-sm"
                aria-label="Explore AERVENLabs vision and future technology roadmap"
              >
                <span>{footerData.ctaText}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Bottom Telemetry Bar */}
          <div className="pt-6 border-t border-[#E6E9EF] flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#667085]">
            <span>AERVENLABS TECHNOLOGIES PVT. LTD.</span>
            <span className="text-[#315EFA]">ZERO SPECULATIVE CODE</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsArchiveFooter;
