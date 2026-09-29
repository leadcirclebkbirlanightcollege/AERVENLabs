import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import { campusConnectCaseStudy, projectsSectionConfig } from '../../data/projects';
import { buttonVariants } from '../ui/button';

/**
 * Homepage Section 05: Flagship Product (Campus Connect).
 * Introduces Campus Connect as the Higher Education Enterprise Campus Operating System.
 * - Primary tagline: "Your Entire College Life. One App."
 * - Secondary positioning: "Campus Operating System"
 * - Status: "STATUS // PRODUCTION-READY"
 * - Platforms: WEB // PWA, ANDROID // CAPACITOR, MULTI-TENANT // ENABLED
 * - Connects: academic operations, attendance infrastructure, digital identity,
 *   verified credentials, student engagement, institutional administration,
 *   E-Cell ecosystem, communication & notifications.
 * - Architectural product visual:
 *   CAMPUS CONNECT → OPERATING CORE → [ATTENDANCE, IDENTITY, ACADEMICS, CREDENTIALS, ENGAGEMENT, ADMINISTRATION]
 * - Primary CTA: "VIEW CAMPUS CONNECT" (/projects/campus-connect)
 * - Secondary CTA: "VIEW ALL PROJECTS" (/projects)
 * - CRITICAL: No GPS, maps, or navigation claims.
 */
export const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Subtle GSAP scroll-driven narrative interaction (desktop only)
  useEffect(() => {
    if (prefersReducedMotion || typeof window === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add('(min-width: 1024px)', () => {
      if (visualRef.current && sectionRef.current) {
        gsap.to(visualRef.current, {
          y: -14,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      }
    });

    return () => mm.revert();
  }, [prefersReducedMotion]);

  // Motion reveal variants
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
        duration: prefersReducedMotion ? 0.01 : 0.7,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  // 6 verified architectural core subsystems
  const operatingCoreNodes = [
    {
      code: '01',
      name: 'ATTENDANCE',
      detail: 'Dynamic 10-min QR tokens & statutory audit registers',
      tag: 'TIMING-SAFE',
    },
    {
      code: '02',
      name: 'IDENTITY',
      detail: 'Smart digital student IDs with optical hologram layer',
      tag: 'VERIFIED',
    },
    {
      code: '03',
      name: 'ACADEMICS',
      detail: 'Timetable matrix, coursework, marks & cohort promotion',
      tag: 'OPERATIONS',
    },
    {
      code: '04',
      name: 'CREDENTIALS',
      detail: 'Public zero-auth verification at /verify/:reference',
      tag: 'CRYPTOGRAPHIC',
    },
    {
      code: '05',
      name: 'ENGAGEMENT',
      detail: 'Audited point ledger, tier ranks & check-in streaks',
      tag: 'INCENTIVE',
    },
    {
      code: '06',
      name: 'ADMINISTRATION',
      detail: 'Multi-tenant governance, directories & compliance',
      tag: 'MULTI-TENANT',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="flagship-product"
      aria-labelledby="flagship-title"
      className="relative overflow-hidden bg-black text-foreground border-t border-border-subtle py-24 sm:py-32 md:py-36 lg:py-44"
    >
      {/* Background Architectural Grid Lines */}
      <div
        className="pointer-events-none absolute inset-0 select-none opacity-40"
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
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid-architectural items-start mb-16 sm:mb-20 lg:mb-28"
        >
          {/* Left Column: Eyebrow & Architectural Numeral 05 */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <motion.div variants={itemVariants} className="space-y-3">
              <div className="inline-flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-white" aria-hidden="true" />
                <span className="text-eyebrow text-neutral-400">
                  {projectsSectionConfig.eyebrow}
                </span>
              </div>
              <p className="text-tech-label text-neutral-500 font-mono tracking-widest">
                {projectsSectionConfig.metaLabel}
              </p>
            </motion.div>

            {/* Architectural 05 Numeral Device */}
            <div
              className="hidden lg:block select-none pointer-events-none opacity-[0.04] -translate-x-3"
              aria-hidden="true"
            >
              <span className="font-sans text-[11rem] font-bold leading-none tracking-tighter text-white">
                {projectsSectionConfig.sectionId}
              </span>
            </div>
          </div>

          {/* Right Column: Editorial Headline & Purpose Description */}
          <div className="lg:col-span-8 space-y-6">
            <motion.div variants={itemVariants}>
              <h2
                id="flagship-title"
                className="text-heading-1 sm:text-display-sm lg:text-display font-semibold tracking-tight text-white leading-tight"
              >
                {projectsSectionConfig.headline}
              </h2>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-base sm:text-lg text-secondary-text leading-relaxed max-w-2xl font-sans">
                {projectsSectionConfig.description}
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Flagship Product Composition */}
        <div className="space-y-10 lg:space-y-12">
          {/* Top Status & Platform Badges Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border-subtle pb-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="h-2 w-2 bg-white rounded-full" aria-hidden="true" />
              <span className="font-mono text-xs font-semibold text-white tracking-wider uppercase">
                FLAGSHIP 01 // {campusConnectCaseStudy.title.toUpperCase()}
              </span>
              <span className="h-3 w-[1px] bg-white/[0.15]" aria-hidden="true" />
              <span className="text-tech-label text-neutral-400 font-mono">
                {campusConnectCaseStudy.secondaryPositioning.toUpperCase()}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 text-tech-label font-mono text-white bg-surface-dark border border-white/20 rounded-[2px]">
                {campusConnectCaseStudy.status}
              </span>
              {campusConnectCaseStudy.platformBadges.map((badge) => (
                <span
                  key={badge}
                  className="px-2 py-0.5 text-tech-label font-mono text-neutral-400 bg-surface border border-border-subtle rounded-[2px]"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* 12-Column Architectural Showcase Composition */}
          <div className="grid-architectural items-start gap-8 lg:gap-12">
            {/* ============================================================== */}
            {/* LEFT / CENTER (Cols 1-7): Architectural Product Visual Frame    */}
            {/* ============================================================== */}
            <div className="lg:col-span-7">
              <div
                ref={visualRef}
                className="media-container-architectural relative overflow-hidden surface-level-1 border border-border-subtle p-6 sm:p-8 lg:p-10 space-y-6"
                aria-label="Campus Connect architectural operating core blueprint"
              >
                {/* Visual Top Bezel */}
                <div className="flex items-center justify-between border-b border-border-subtle pb-3.5">
                  <div className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/60" aria-hidden="true" />
                    <span className="text-tech-label text-neutral-300 font-mono tracking-widest">
                      ARCH_BLUEPRINT // SYS_CORE_CC01
                    </span>
                  </div>
                  <span className="text-tech-label text-neutral-500 font-mono">
                    ENTERPRISE CAMPUS OS
                  </span>
                </div>

                {/* Corner Crosshair Nodes */}
                <div className="flex justify-between text-neutral-600 font-mono text-[10px] select-none" aria-hidden="true">
                  <span>+ [CORE_NW // 19.2183° N]</span>
                  <span>+ [CORE_NE // 72.9781° E]</span>
                </div>

                {/* Monumental Architectural Structure:
                    CAMPUS CONNECT
                    ↓
                    OPERATING CORE
                    ↓
                    6 CORE SUB-SYSTEM NODES
                */}
                <div className="space-y-6 text-center py-2">
                  {/* Step 1: System Title */}
                  <div className="space-y-1">
                    <h3 className="text-heading-1 sm:text-display-sm lg:text-display-md font-bold tracking-tighter text-white uppercase leading-none">
                      CAMPUS CONNECT
                    </h3>
                    <p className="text-tech-label text-neutral-400 font-mono tracking-widest uppercase">
                      {campusConnectCaseStudy.primaryTagline}
                    </p>
                  </div>

                  {/* Step 2: System Operating Core Vector */}
                  <div className="flex flex-col items-center space-y-1.5 py-1" aria-hidden="true">
                    <div className="h-4 w-[1px] bg-white/30" />
                    <div className="inline-flex items-center gap-2 border border-white/40 bg-surface-dark px-4 py-1.5 rounded-[2px]">
                      <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                      <span className="font-mono text-xs font-semibold text-white tracking-widest">
                        OPERATING CORE
                      </span>
                      <span className="text-[10px] font-mono text-neutral-400">
                        // v1.0.0
                      </span>
                    </div>
                    <div className="h-4 w-[1px] bg-white/30" />
                  </div>

                  {/* Step 3: 6 Connected Core Focus Subsystems */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left pt-1">
                    {operatingCoreNodes.map((node) => (
                      <div
                        key={node.code}
                        className="surface-level-2 p-3.5 space-y-1.5 rounded-[2px] border border-border-subtle"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-tech-label text-white font-mono font-semibold">
                            {node.code} // {node.name}
                          </span>
                          <span className="text-[9px] font-mono text-neutral-400 bg-surface-dark px-1.5 py-0.5 rounded-[2px] border border-border-subtle">
                            {node.tag}
                          </span>
                        </div>
                        <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                          {node.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Corner Crosshair Nodes Bottom */}
                <div className="flex justify-between text-neutral-600 font-mono text-[10px] select-none" aria-hidden="true">
                  <span>+ [CORE_SW // MULTI_TENANT]</span>
                  <span>+ [CORE_SE // RLS_ENFORCED]</span>
                </div>

                {/* Visual Bottom Bezel & Telemetry */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-t border-border-subtle pt-3.5 text-neutral-500 font-mono text-[10px]">
                  <span>62 RELATIONAL TABLES · 25 EDGE FUNCTIONS · 309 TESTS</span>
                  <span>SYS_ID // CC_PROD_100</span>
                </div>
              </div>
            </div>

            {/* ============================================================== */}
            {/* RIGHT SIDE (Cols 8-12): Verified Context & Dual CTAs           */}
            {/* ============================================================== */}
            <div className="lg:col-span-5 space-y-8">
              {/* Product Identity & Tagline */}
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 border border-border-subtle bg-surface px-3 py-1 rounded-[2px]">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" aria-hidden="true" />
                  <span className="text-tech-label text-neutral-300 font-mono">
                    CAMPUS OPERATING SYSTEM
                  </span>
                </div>

                <h3 className="text-heading-1 font-semibold text-white tracking-tight leading-tight">
                  {campusConnectCaseStudy.title}
                </h3>

                <p className="text-sm font-mono text-neutral-400 uppercase tracking-wide">
                  {campusConnectCaseStudy.category}
                </p>

                <div className="h-[1px] w-14 bg-white/20" aria-hidden="true" />

                <p className="text-base text-secondary-text leading-relaxed font-sans">
                  A Higher Education Enterprise Campus Operating System uniting academic operations, attendance infrastructure, digital identity, verified credentials, student engagement, and institutional administration into a single connected platform.
                </p>
              </div>

              {/* Verified Feature Focus Highlights */}
              <div className="space-y-3">
                <p className="text-tech-label text-neutral-500 font-mono tracking-wider">
                  VERIFIED ECOSYSTEM MODULES //
                </p>
                <ul role="list" className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    'Academic Operations',
                    'Attendance Infrastructure',
                    'Digital Student Identity',
                    'Verified Public Credentials',
                    'Student Engagement & Streaks',
                    'Institutional Administration',
                    'E-Cell Event Ecosystem',
                    'Push Communication Pipeline',
                  ].map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2.5 surface-level-1 px-3 py-2 rounded-[2px] border border-border-subtle"
                    >
                      <span className="h-1 w-1 bg-white shrink-0" aria-hidden="true" />
                      <span className="text-xs text-neutral-300 font-mono">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical Specifications Card */}
              <div className="surface-level-1 p-5 space-y-3.5 rounded-[2px] border border-border-subtle">
                <div className="flex items-center justify-between border-b border-border-subtle pb-2.5">
                  <span className="text-tech-label text-neutral-500 font-mono">
                    ARCHITECTURE
                  </span>
                  <span className="text-xs text-neutral-300 font-mono">
                    MULTI-TENANT / RLS
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-border-subtle pb-2.5">
                  <span className="text-tech-label text-neutral-500 font-mono">
                    PLATFORMS
                  </span>
                  <span className="text-xs text-neutral-300 font-mono">
                    WEB (PWA) · ANDROID (CAPACITOR)
                  </span>
                </div>

                <div className="space-y-2 pt-1">
                  <span className="text-tech-label text-neutral-500 font-mono block">
                    APPROVED STACK //
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {['React 18', 'TypeScript', 'Tailwind', 'Supabase', 'PostgreSQL', 'Deno Edge', 'Vercel', 'Capacitor'].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-tech-label font-mono text-neutral-300 bg-surface-dark border border-border-subtle rounded-[2px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Dual Decisive CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                {/* Primary CTA */}
                <Link
                  to="/projects/campus-connect"
                  aria-label="View Campus Connect case study and technical architecture"
                  className={`${buttonVariants({
                    variant: 'default',
                    size: 'lg',
                  })} group gap-2.5 justify-center`}
                >
                  <span className="tracking-wide">VIEW CAMPUS CONNECT</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                {/* Secondary CTA */}
                <Link
                  to="/projects"
                  aria-label="View all AervenLabs engineering projects"
                  className={`${buttonVariants({
                    variant: 'outline',
                    size: 'lg',
                  })} group gap-2.5 justify-center text-neutral-300 hover:text-white`}
                >
                  <span className="tracking-wide">VIEW ALL PROJECTS</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
