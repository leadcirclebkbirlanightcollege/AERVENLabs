import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Terminal } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { siteConfig } from '../config/site';

export const NotFoundPage: React.FC = () => {
  useSEO({
    title: `404 Not Found — ${siteConfig.name}`,
    description: 'The requested page path does not map to any active system specification or published route.',
    robots: 'noindex, nofollow',
  });

  return (
    <div
      data-testid="route-not-found"
      className="min-h-screen bg-white text-[#101828] flex flex-col justify-center overflow-x-hidden relative"
    >
      <div className="container-architectural relative z-10 py-24 sm:py-32 w-full my-auto">
        <div className="max-w-2xl space-y-8">
          {/* Top Bezel */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F1F3F6] border border-[#E6E9EF] rounded-full text-xs font-mono text-[#315EFA]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#315EFA] animate-pulse" aria-hidden="true" />
            <span className="tracking-widest uppercase">
              SYSTEM RESOLUTION // 404
            </span>
          </div>

          {/* Monumental 404 Display */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#101828] leading-[1.08]">
              404 // Route Unresolved.
            </h1>
            <p className="text-base sm:text-lg text-[#667085] font-sans leading-relaxed">
              The requested URL path does not map to an active architectural specification, project catalogue, or published page in the AERVENLabs repository.
            </p>
          </div>

          {/* Diagnostic Box */}
          <div className="bg-[#F7F8FA] p-5 rounded-[12px] border border-[#E6E9EF] font-mono text-xs text-[#667085] space-y-2 max-w-lg">
            <div className="flex items-center justify-between border-b border-[#E6E9EF] pb-2 text-[#101828]">
              <span className="flex items-center gap-2 font-medium">
                <Terminal className="h-3.5 w-3.5 text-[#315EFA]" aria-hidden="true" />
                <span>DIAGNOSTIC LOG</span>
              </span>
              <span className="text-[#315EFA]">SYS_CODE: 0x404</span>
            </div>
            <div className="space-y-1 text-xs">
              <p>PATH_STATUS: UNMAPPED</p>
              <p>HOST: {siteConfig.url}</p>
              <p>FALLBACK_PROTOCOL: RETURN_TO_ORIGIN</p>
            </div>
          </div>

          {/* Navigational Recovery Cluster */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#315EFA] text-white font-mono text-xs font-semibold tracking-wider uppercase rounded-[8px] hover:bg-[#254dd4] transition-colors duration-200 min-h-[44px] shadow-sm"
              aria-label="Return to homepage"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              <span>RETURN TO HOMEPAGE</span>
            </Link>

            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#F7F8FA] border border-[#E6E9EF] hover:border-[#101828] text-[#101828] font-mono text-xs font-semibold tracking-wider uppercase rounded-[8px] transition-colors duration-200 min-h-[44px]"
              aria-label="Browse Projects archive"
            >
              <span>BROWSE PROJECTS</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
