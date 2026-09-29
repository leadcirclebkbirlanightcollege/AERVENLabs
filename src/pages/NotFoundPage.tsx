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
      className="min-h-screen bg-black text-foreground selection:bg-white selection:text-black flex flex-col justify-center overflow-x-hidden relative"
    >
      {/* Background Architectural Grid Lines */}
      <div
        className="pointer-events-none absolute inset-0 select-none opacity-25"
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

      <div className="container-architectural relative z-10 py-24 sm:py-32 w-full my-auto">
        <div className="max-w-3xl space-y-8">
          {/* Top Bezel */}
          <div className="inline-flex items-center gap-2.5 border border-border-subtle bg-surface px-3 py-1.5 rounded-[2px]">
            <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" aria-hidden="true" />
            <span className="text-tech-label text-neutral-400 font-mono tracking-widest uppercase">
              SYSTEM RESOLUTION // 404
            </span>
          </div>

          {/* Monumental 404 Display */}
          <div className="space-y-4">
            <h1 className="text-display sm:text-display-lg lg:text-display font-bold tracking-tighter text-white uppercase leading-[0.92] select-none">
              404 // ROUTE UNRESOLVED.
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-secondary-text font-sans leading-relaxed">
              The requested URL path does not map to an active architectural specification, project catalogue, or published page in the AervenLabs repository.
            </p>
          </div>

          {/* Terminal Diagnostic Box */}
          <div className="surface-level-1 p-5 rounded-[2px] border border-border-subtle font-mono text-xs text-neutral-400 space-y-2 max-w-lg">
            <div className="flex items-center justify-between border-b border-border-subtle pb-2 text-neutral-500">
              <span className="flex items-center gap-2">
                <Terminal className="h-3.5 w-3.5" aria-hidden="true" />
                <span>DIAGNOSTIC LOG</span>
              </span>
              <span>SYS_CODE: 0x404</span>
            </div>
            <div className="space-y-1 text-neutral-400 text-[11px]">
              <p>PATH_STATUS: UNMAPPED</p>
              <p>HOST: {siteConfig.url}</p>
              <p>FALLBACK_PROTOCOL: RETURN_TO_ORIGIN</p>
            </div>
          </div>

          {/* Navigational Recovery Cluster */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-white text-black font-mono text-xs font-semibold tracking-wider uppercase rounded-[2px] hover:bg-neutral-200 transition-colors duration-200 min-h-[48px]"
              aria-label="Return to homepage"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              <span>RETURN TO HOMEPAGE</span>
            </Link>

            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-surface-dark text-white font-mono text-xs font-medium tracking-wider uppercase rounded-[2px] border border-border-subtle hover:border-white/30 transition-colors duration-200 min-h-[48px]"
              aria-label="View project archive"
            >
              <span>EXPLORE PROJECTS</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-neutral-400" aria-hidden="true" />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-transparent text-neutral-400 hover:text-white font-mono text-xs font-medium tracking-wider uppercase rounded-[2px] transition-colors duration-200 min-h-[48px]"
              aria-label="Contact AervenLabs"
            >
              <span>CONTACT SUPPORT</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
