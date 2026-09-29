import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldAlert } from 'lucide-react';
import { buttonVariants } from '../ui/button';

export const ProjectsArchiveFooter: React.FC = () => {
  return (
    <section
      aria-labelledby="archive-closure-title"
      className="relative overflow-hidden bg-black text-foreground py-16 sm:py-20 lg:py-24"
    >
      <div className="container-architectural relative z-10">
        <div className="surface-level-1 border border-border-subtle p-6 sm:p-10 lg:p-14 rounded-[2px] space-y-8">
          {/* Top Ledger Metadata */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border-subtle pb-4 text-[11px] font-mono text-neutral-500">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-neutral-400" aria-hidden="true" />
              <span className="text-white font-semibold uppercase tracking-wider">
                ARCHIVE VERIFICATION STANDARD
              </span>
            </div>
            <span>PRODUCTION DEPLOYMENT CRITERIA ENFORCED</span>
          </div>

          {/* Main Editorial Statement */}
          <div className="grid-architectural items-start gap-y-6">
            <div className="lg:col-span-8 space-y-4">
              <h2
                id="archive-closure-title"
                className="text-heading-2 sm:text-heading-1 font-semibold text-white tracking-tight uppercase leading-snug"
              >
                SYSTEMS ENGINEERED WITH INTENT.
              </h2>
              <p className="text-sm sm:text-base text-secondary-text leading-relaxed font-sans max-w-2xl">
                AervenLabs maintains an immutable archive standard. We do not register speculative concepts, mockups, or unverified experiments in this index. Additional systems are added exclusively following formal multi-tenant deployment, security audit, and operational validation.
              </p>
            </div>

            {/* Strategic Action Link */}
            <div className="lg:col-span-4 flex flex-col justify-between items-start lg:items-end space-y-4">
              <div className="text-left lg:text-right font-mono text-xs text-neutral-400 space-y-1">
                <span className="text-neutral-500 block uppercase">SYSTEM INQUIRIES</span>
                <span>PARTNER PLATFORM ENGINEERING</span>
              </div>

              <Link
                to="/contact"
                className={`${buttonVariants({
                  variant: 'outline',
                  size: 'lg',
                })} group gap-2.5 min-h-[48px] w-full sm:w-auto justify-center text-sm font-semibold tracking-wide uppercase`}
                aria-label="Initiate enterprise system inquiry with AervenLabs"
              >
                <span>INITIATE SYSTEM INQUIRY</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Bottom Telemetry Bar */}
          <div className="pt-4 border-t border-border-subtle flex flex-wrap items-center justify-between gap-3 text-[10px] font-mono text-neutral-600">
            <span>AERVENLABS TECHNOLOGIES PVT. LTD.</span>
            <span>SYSTEM ARCHIVE // ACTIVE</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsArchiveFooter;
