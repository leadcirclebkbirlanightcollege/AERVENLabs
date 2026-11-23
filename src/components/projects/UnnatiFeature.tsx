import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, ExternalLink, Sparkles, Calendar, Trophy, CheckCircle2 } from 'lucide-react';
import { unnatiCaseStudy } from '../../data/projects';

export const UnnatiFeature: React.FC = () => {
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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
      y: prefersReducedMotion ? 0 : 16,
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
      id="feature-unnati"
      aria-labelledby="unnati-title"
      className="relative border-t border-[#E6E9EF] bg-[#F7F8FA] text-[#101828] py-20 sm:py-28 lg:py-36 scroll-mt-20"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="container-architectural relative z-10 space-y-16 sm:space-y-20"
      >
        {/* 1. TOP METADATA BAR */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E6E9EF] pb-4 text-xs font-mono text-[#667085]"
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#881337]" aria-hidden="true" />
            <span className="font-semibold text-[#101828] tracking-wider uppercase">
              PROJECT 02 // SELECTED WORK
            </span>
            <span className="hidden sm:inline h-3 w-[1px] bg-[#E6E9EF]" aria-hidden="true" />
            <span className="text-[#881337] uppercase tracking-wide font-medium">
              16TH INTER-COLLEGIATE FESTIVAL
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-0.5 font-mono text-[11px] text-[#881337] bg-white border border-[#881337]/30 rounded-full font-semibold uppercase">
              {unnatiCaseStudy.status}
            </span>
            <span className="px-2.5 py-0.5 font-mono text-[11px] text-[#667085] bg-white border border-[#E6E9EF] rounded-full">
              MKMP COLLEGE THAKURLI
            </span>
          </div>
        </motion.div>

        {/* 2. PROJECT IDENTITY & TAGLINE */}
        <motion.div variants={itemVariants} className="space-y-4 max-w-4xl">
          <div className="space-y-2">
            <p className="text-xs text-[#881337] font-mono tracking-widest uppercase font-semibold">
              AERVENLABS ARCHIVE // ID: UNNATI-2026-27
            </p>
            <h2
              id="unnati-title"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#101828] leading-[1.08]"
            >
              {unnatiCaseStudy.title}
            </h2>
          </div>

          <p className="text-lg sm:text-xl font-mono text-[#101828] tracking-wide">
            {unnatiCaseStudy.primaryTagline}
          </p>

          <p className="text-base sm:text-lg text-[#667085] leading-relaxed max-w-3xl font-sans">
            {unnatiCaseStudy.shortPositioning}
          </p>
        </motion.div>

        {/* 3. VISUAL SHOWCASE: REAL WEBSITE BANNER & OVERVIEW */}
        <motion.div
          variants={itemVariants}
          className="editorial-card rounded-[20px] p-6 sm:p-8 lg:p-10 bg-white border border-[#E6E9EF] shadow-sm space-y-8"
        >
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E6E9EF] pb-4">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-[8px] bg-[#FAF7F2] border border-[#E6E9EF] p-1.5 flex items-center justify-center">
                <img
                  src="/assets/projects/unnati/mkmp-college-logo.png"
                  alt="MKMP College Logo"
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <span className="font-mono text-xs font-semibold text-[#101828] uppercase block">
                  OFFICIAL FESTIVAL PORTAL PREVIEW
                </span>
                <span className="text-[11px] font-mono text-[#667085]">
                  MKMP College Thakurli • 3–5 Dec 2026
                </span>
              </div>
            </div>

            <a
              href="https://unnatiatmkmp.runs-on.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#881337] font-semibold hover:underline"
            >
              <span>Visit live site</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Banner Graphic Preview */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-[12px] overflow-hidden bg-[#FAF7F2] border border-[#E6E9EF]">
            <img
              src="/assets/projects/unnati/unnati-og-banner.jpg"
              alt="UNNATI 2026–27 website hero banner"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </div>

          {/* 4 Feature Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 border-t border-[#E6E9EF]">
            <div className="space-y-1">
              <span className="font-mono text-xs text-[#881337] uppercase font-semibold block">
                01 / COMPETITIONS
              </span>
              <h4 className="font-bold text-base text-[#101828]">23 Activities</h4>
              <p className="text-xs text-[#667085]">
                Performing arts, fine arts, sports, eSports &amp; management.
              </p>
            </div>

            <div className="space-y-1">
              <span className="font-mono text-xs text-[#881337] uppercase font-semibold block">
                02 / SCHEDULE
              </span>
              <h4 className="font-bold text-base text-[#101828]">3-Day Timeline</h4>
              <p className="text-xs text-[#667085]">
                December 3–5, 2026 across multi-venue campus grounds.
              </p>
            </div>

            <div className="space-y-1">
              <span className="font-mono text-xs text-[#881337] uppercase font-semibold block">
                03 / REGISTRATION
              </span>
              <h4 className="font-bold text-base text-[#101828]">Digital Entry Flow</h4>
              <p className="text-xs text-[#667085]">
                Contingent leader submission &amp; verification status tracking.
              </p>
            </div>

            <div className="space-y-1">
              <span className="font-mono text-xs text-[#881337] uppercase font-semibold block">
                04 / PERFORMANCE
              </span>
              <h4 className="font-bold text-base text-[#101828]">Vercel Edge</h4>
              <p className="text-xs text-[#667085]">
                Sub-1.5s mobile FCP under peak festival registration traffic.
              </p>
            </div>
          </div>
        </motion.div>

        {/* 4. ACTIONS & NAVIGATION */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#E6E9EF]"
        >
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/projects/unnati-2026-27"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#101828] hover:bg-[#881337] text-white text-xs font-mono font-semibold rounded-[8px] transition-all duration-200 shadow-sm active:scale-[0.98]"
            >
              <span>EXPLORE FULL CASE STUDY</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <a
              href="https://unnatiatmkmp.runs-on.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white hover:bg-[#FAF7F2] text-[#881337] border border-[#881337]/30 text-xs font-mono font-semibold rounded-[8px] transition-all duration-200"
            >
              <span>VISIT LIVE FESTIVAL SITE</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          <span className="text-xs font-mono text-[#667085]">
            SHR! DOMBIVLI MITRA MANDAL // MKMP THAKURLI
          </span>
        </motion.div>
      </motion.div>
    </article>
  );
};

export default UnnatiFeature;
