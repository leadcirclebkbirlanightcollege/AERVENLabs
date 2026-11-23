import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Layers, ShieldCheck, ChevronDown } from 'lucide-react';
import { siteConfig } from '../../config/site';

/**
 * Section 2: Master Hero Experience.
 * White-First Premium Brand Presentation.
 * Headline: "Engineering Ideas. Building What's Next."
 * Supporting description:
 * "We are an independent technology startup transforming ambitious ideas into meaningful digital products, intelligent platforms, and innovative experiences."
 * Primary CTA: Explore Our Work
 * Secondary CTA: Discover AERVENLabs
 * Visual: High-precision abstract technology architecture visual with subtle geometric vectors.
 */
export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Staggered entrance variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.08,
        delayChildren: prefersReducedMotion ? 0 : 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: prefersReducedMotion ? 1 : 0,
      y: prefersReducedMotion ? 0 : 18,
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

  const nodes = [
    { title: 'Conception', code: '01 // IDEA', status: 'Intentional' },
    { title: 'Architecture', code: '02 // SYSTEM', status: 'Type-Safe' },
    { title: 'Engineering', code: '03 // PLATFORM', status: 'Scale & RLS' },
    { title: 'Impact', code: '04 // EXPERIENCE', status: 'Real-World' },
  ];

  return (
    <section
      ref={containerRef}
      aria-label="AERVENLabs Introduction"
      className="relative overflow-hidden bg-white pt-8 pb-16 sm:pt-14 sm:pb-24 lg:pt-20 lg:pb-32 border-b border-[#E6E9EF]"
    >
      {/* Subtle Dot Matrix Background (Light Mode) */}
      <div
        className="pointer-events-none absolute inset-0 select-none opacity-40 dot-pattern-light"
        aria-hidden="true"
      />

      {/* Gentle Radial Highlight (Blue/Violet Accent used sparingly) */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[520px] opacity-40 select-none"
        style={{
          background:
            'radial-gradient(circle at 50% 20%, rgba(220, 229, 255, 0.6) 0%, rgba(241, 243, 246, 0.3) 45%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="container-architectural relative z-10 w-full space-y-12 sm:space-y-16">
        {/* Top 12-Column Hero Stage */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid-architectural items-center gap-12 lg:gap-16"
        >
          {/* Left Column (Cols 1-7): Monumental Editorial Typography & Action CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Pill Eyebrow Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F7F8FA] border border-[#E6E9EF] text-xs font-medium text-[#101828] shadow-sm">
                <span className="h-2 w-2 rounded-full bg-[#315EFA] animate-pulse" aria-hidden="true" />
                <span className="font-semibold text-[#315EFA]">AERVENLabs</span>
                <span className="text-[#98A2B3]">/</span>
                <span className="text-[#667085] hidden sm:inline">Independent Technology Startup</span>
                <span className="text-[#667085] sm:hidden">Tech Startup</span>
              </span>
            </motion.div>

            {/* Monumental Headline */}
            <motion.div variants={itemVariants} className="space-y-1 sm:space-y-2">
              <h1 className="text-display font-bold tracking-tight text-[#101828] leading-[1.03]">
                Engineering Ideas. <br />
                <span className="text-[#315EFA]">Building What's Next.</span>
              </h1>
            </motion.div>

            {/* Supporting Description */}
            <motion.div variants={itemVariants}>
              <p className="text-base sm:text-lg lg:text-xl text-[#667085] leading-relaxed max-w-2xl font-sans">
                We are an independent technology startup transforming ambitious ideas into meaningful digital products, intelligent platforms, and innovative experiences.
              </p>
            </motion.div>

            {/* Decisive Dual CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2"
            >
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#101828] hover:bg-[#315EFA] text-white font-medium text-sm rounded-[8px] transition-all duration-200 shadow-md shadow-[#101828]/10 active:scale-[0.98] outline-none focus-visible:ring-2 focus-visible:ring-[#315EFA]"
              >
                <span>Explore Our Work</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>

              <a
                href="#brand-intro"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-[#F7F8FA] text-[#101828] border border-[#E6E9EF] hover:border-[#D0D5DD] font-medium text-sm rounded-[8px] transition-all duration-200 shadow-sm active:scale-[0.98] outline-none focus-visible:ring-2 focus-visible:ring-[#315EFA]"
              >
                <span>Discover AERVENLabs</span>
                <ChevronDown className="h-4 w-4 text-[#667085]" aria-hidden="true" />
              </a>
            </motion.div>

            {/* Verified Trust Strip */}
            <motion.div
              variants={itemVariants}
              className="pt-4 border-t border-[#E6E9EF] flex flex-wrap items-center gap-6 text-xs text-[#667085] font-mono"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[#315EFA]" />
                <span>Zero-Noise Engineering</span>
              </div>
              <div className="flex items-center gap-2">
                <Layers className="h-4 w-4 text-[#7657E8]" />
                <span>Multi-Tenant Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-[#315EFA]" />
                <span>Production-Validated</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column (Cols 8-12): Premium Abstract Technology Visual */}
          <div className="lg:col-span-5">
            <motion.div
              variants={itemVariants}
              className="relative p-6 sm:p-8 rounded-[16px] bg-[#F7F8FA] border border-[#E6E9EF] shadow-lg shadow-[#101828]/05 space-y-6 overflow-hidden"
            >
              {/* Top Visual Bezel */}
              <div className="flex items-center justify-between border-b border-[#E6E9EF] pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#315EFA]" />
                  <span className="font-mono text-xs font-semibold text-[#101828] tracking-wider uppercase">
                    SYSTEMS ARCHITECTURE MATRIX
                  </span>
                </div>
                <span className="font-mono text-[10px] text-[#667085] bg-white px-2 py-0.5 rounded-[4px] border border-[#E6E9EF]">
                  AERVEN // 2026
                </span>
              </div>

              {/* Central Geometric Blueprint Schematic */}
              <div className="space-y-3 py-2">
                <div className="p-4 rounded-[10px] bg-white border border-[#E6E9EF] shadow-sm flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] text-[#315EFA] font-semibold tracking-wider">
                      FLAGSHIP PLATFORM // HIGHER EDUCATION
                    </span>
                    <h3 className="font-semibold text-base text-[#101828]">Campus Connect</h3>
                    <p className="text-xs text-[#667085]">
                      Unified Collegiate Operating System · Production Ready
                    </p>
                  </div>
                  <span className="px-2.5 py-1 text-[11px] font-mono font-medium rounded-full bg-[#DCE5FF] text-[#315EFA]">
                    v1.0.0
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-[10px] bg-white border border-[#E6E9EF] shadow-sm space-y-1">
                    <span className="font-mono text-[10px] text-[#0D9488] font-semibold tracking-wider">
                      CAMPUS NAVIGATION
                    </span>
                    <h4 className="font-semibold text-sm text-[#101828]">Wayfinding Engine</h4>
                    <p className="text-[11px] text-[#667085]">
                      Multi-Venue Vector Mapping & Realtime Routes
                    </p>
                  </div>

                  <div className="p-3.5 rounded-[10px] bg-white border border-[#E6E9EF] shadow-sm space-y-1">
                    <span className="font-mono text-[10px] text-[#7657E8] font-semibold tracking-wider">
                      CAMPUS ENGAGEMENT
                    </span>
                    <h4 className="font-semibold text-sm text-[#101828]">Events & Bulletins</h4>
                    <p className="text-[11px] text-[#667085]">
                      Verified Broadcasts & Automated Ingestion
                    </p>
                  </div>
                </div>
              </div>

              {/* 4 Connected Progression Nodes */}
              <div className="pt-2 border-t border-[#E6E9EF] space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#667085]">
                  <span>PIPELINE AXIS</span>
                  <span>DISCIPLINE // ZERO BLOAT</span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {nodes.map((node, i) => (
                    <div
                      key={node.code}
                      className="p-2 rounded-[6px] bg-white border border-[#E6E9EF] text-center space-y-0.5"
                    >
                      <span className="font-mono text-[9px] text-[#98A2B3] block">
                        {node.code}
                      </span>
                      <span className="font-semibold text-[11px] text-[#101828] block">
                        {node.title}
                      </span>
                      <span className="text-[9px] text-[#315EFA] font-medium block">
                        {node.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Subtle Tech Telemetry */}
              <div className="flex items-center justify-between text-[10px] font-mono text-[#98A2B3] pt-1">
                <span>POSTGRESQL · REACT 18 · DENO EDGE</span>
                <span>PRODUCTION DOMAIN // AERVENLABS.NET</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
