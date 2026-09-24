import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import { projectsData, projectsSectionConfig } from '../../data/projects';
import { buttonVariants } from '../ui/button';

export const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Flagship project: Campus Connect
  const flagshipProject = projectsData[0];

  // Subtle GSAP scroll-driven narrative interaction
  useEffect(() => {
    if (prefersReducedMotion || typeof window === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Subtle visual parallax drift upward during natural page scroll
      if (visualRef.current && sectionRef.current) {
        gsap.to(visualRef.current, {
          yPercent: -6,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
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

  return (
    <section
      ref={sectionRef}
      id="projects"
      aria-labelledby="projects-title"
      className="relative overflow-hidden bg-black text-foreground border-t border-border-subtle py-28 md:py-36 lg:py-44"
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
        {/* Section Header: Eyebrow, Title & Strategic Purpose Statement */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid-architectural items-start mb-16 sm:mb-20 lg:mb-28"
        >
          {/* Left Column: Eyebrow & Subtle Numeral 04 */}
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

            {/* Subtle Architectural 04 Numeral Device */}
            <div
              className="hidden lg:block select-none pointer-events-none opacity-[0.04] -translate-x-3"
              aria-hidden="true"
            >
              <span className="font-sans text-[10rem] font-bold leading-none tracking-tighter text-white">
                {projectsSectionConfig.sectionId}
              </span>
            </div>
          </div>

          {/* Right Column: Editorial Headline & Purpose Description */}
          <div className="lg:col-span-8 space-y-6">
            <motion.div variants={itemVariants}>
              <h2
                id="projects-title"
                className="text-heading-1 md:text-display-sm font-semibold tracking-tight text-white leading-tight"
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

        {/* Flagship Product Showcase: Campus Connect */}
        <div ref={contentRef} className="space-y-12 lg:space-y-16">
          {/* Top Metadata Hairline Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border-subtle pb-4">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 bg-white rounded-full animate-pulse" aria-hidden="true" />
              <span className="font-mono text-xs font-semibold text-white tracking-wider uppercase">
                PROJECT 01 // FLAGSHIP PRODUCT
              </span>
              <span className="h-3 w-[1px] bg-white/[0.15]" aria-hidden="true" />
              <span className="text-tech-label text-neutral-400 font-mono">
                CAMPUS CONNECT
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-tech-label text-neutral-500 font-mono">
                STATUS //
              </span>
              <span className="px-2.5 py-0.5 text-tech-label font-mono text-white bg-surface-dark border border-white/20 rounded-[2px]">
                IN DEVELOPMENT
              </span>
            </div>
          </div>

          {/* Main 12-Column Product Showcase Composition */}
          <div className="grid-architectural items-start gap-8 lg:gap-12">
            {/* LEFT / CENTER (Cols 1-7): Monumental Architectural Visual Frame */}
            <div className="lg:col-span-7">
              <div
                ref={visualRef}
                className="media-container-architectural relative overflow-hidden surface-level-1 border border-border-subtle p-6 sm:p-10 lg:p-12 space-y-8"
              >
                {/* Visual Top Bezel */}
                <div className="flex items-center justify-between border-b border-border-subtle pb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/60" aria-hidden="true" />
                    <span className="text-tech-label text-neutral-300 font-mono tracking-widest">
                      SYS_SPEC // ARCH_CC_01
                    </span>
                  </div>
                  <span className="text-tech-label text-neutral-500 font-mono">
                    UNIFIED ECOSYSTEM
                  </span>
                </div>

                {/* Monumental Architectural Graphic Centerpiece */}
                <div className="relative py-6 sm:py-10 space-y-6">
                  {/* Subtle Background Architectural Grid Overlay */}
                  <div
                    className="pointer-events-none absolute inset-0 select-none opacity-30 border border-white/[0.04]"
                    aria-hidden="true"
                  >
                    <div className="grid h-full w-full grid-cols-2 divide-x divide-white/[0.04]">
                      <div className="h-full border-b border-white/[0.04]" />
                      <div className="h-full border-b border-white/[0.04]" />
                    </div>
                  </div>

                  {/* Corner Crosshair Nodes */}
                  <div className="flex justify-between text-neutral-600 font-mono text-[10px] select-none" aria-hidden="true">
                    <span>+ [NODE_NW]</span>
                    <span>+ [NODE_NE]</span>
                  </div>

                  {/* Giant Monumental Typography Title */}
                  <div className="relative z-10 text-center py-4">
                    <h3 className="text-heading-1 sm:text-display-sm lg:text-display-md font-bold tracking-tighter text-white uppercase select-none leading-none">
                      CAMPUS CONNECT
                    </h3>
                    <p className="mt-3 text-tech-label text-neutral-400 font-mono tracking-widest uppercase">
                      CAMPUS TECHNOLOGY, REDESIGNED.
                    </p>
                  </div>

                  {/* Architectural Blueprint: 4 Interconnected Core Focus Modules */}
                  <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="surface-level-2 p-3.5 space-y-1.5 rounded-[2px] border border-border-subtle">
                      <div className="flex items-center justify-between">
                        <span className="text-tech-label text-white font-mono">01 // NAVIGATION</span>
                        <span className="text-[10px] font-mono text-neutral-500">SPATIAL</span>
                      </div>
                      <p className="text-xs text-neutral-400 font-sans">
                        Interactive campus map, building wayfinding & facility routes.
                      </p>
                    </div>

                    <div className="surface-level-2 p-3.5 space-y-1.5 rounded-[2px] border border-border-subtle">
                      <div className="flex items-center justify-between">
                        <span className="text-tech-label text-white font-mono">02 // EVENTS</span>
                        <span className="text-[10px] font-mono text-neutral-500">SCHEDULES</span>
                      </div>
                      <p className="text-xs text-neutral-400 font-sans">
                        Centralized institutional schedules, activities & announcements.
                      </p>
                    </div>

                    <div className="surface-level-2 p-3.5 space-y-1.5 rounded-[2px] border border-border-subtle">
                      <div className="flex items-center justify-between">
                        <span className="text-tech-label text-white font-mono">03 // NOTICES</span>
                        <span className="text-[10px] font-mono text-neutral-500">REAL-TIME</span>
                      </div>
                      <p className="text-xs text-neutral-400 font-sans">
                        Instant digital notice boards & prioritized push alerts.
                      </p>
                    </div>

                    <div className="surface-level-2 p-3.5 space-y-1.5 rounded-[2px] border border-border-subtle">
                      <div className="flex items-center justify-between">
                        <span className="text-tech-label text-white font-mono">04 // ENGAGEMENT</span>
                        <span className="text-[10px] font-mono text-neutral-500">STUDENT</span>
                      </div>
                      <p className="text-xs text-neutral-400 font-sans">
                        Unified directory, resources & connected student community.
                      </p>
                    </div>
                  </div>

                  {/* Corner Crosshair Nodes Bottom */}
                  <div className="flex justify-between text-neutral-600 font-mono text-[10px] select-none" aria-hidden="true">
                    <span>+ [NODE_SW]</span>
                    <span>+ [NODE_SE]</span>
                  </div>
                </div>

                {/* Visual Bottom Bezel */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-t border-border-subtle pt-4">
                  <span className="text-tech-label text-neutral-400 font-mono">
                    AERVENLABS TECHNOLOGIES // FLAGSHIP SPECIFICATION
                  </span>
                  <span className="text-tech-label text-neutral-500 font-mono">
                    DEV_PREVIEW_v0.9
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE (Cols 8-12): Project Overview, Verified Features & Technical Metadata */}
            <div className="lg:col-span-5 space-y-8">
              {/* Product Identity & Tagline */}
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 border border-border-subtle bg-surface px-3 py-1 rounded-[2px]">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" aria-hidden="true" />
                  <span className="text-tech-label text-neutral-300 font-mono">
                    FLAGSHIP PLATFORM
                  </span>
                </div>

                <h3 className="text-heading-1 font-semibold text-white tracking-tight leading-tight">
                  {flagshipProject.title}
                </h3>

                <p className="text-sm font-mono text-neutral-400 uppercase tracking-wide">
                  {flagshipProject.tagline}
                </p>

                <div className="h-[1px] w-14 bg-white/20" aria-hidden="true" />

                <p className="text-base text-secondary-text leading-relaxed font-sans">
                  {flagshipProject.description}
                </p>
              </div>

              {/* Verified Feature Highlights */}
              {flagshipProject.features && (
                <div className="space-y-3">
                  <p className="text-tech-label text-neutral-500 font-mono tracking-wider">
                    VERIFIED FOCUS AREAS //
                  </p>
                  <ul role="list" className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {flagshipProject.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2.5 surface-level-1 px-3 py-2 rounded-[2px] border border-border-subtle"
                      >
                        <span className="h-1 w-1 bg-white" aria-hidden="true" />
                        <span className="text-xs text-neutral-300 font-mono">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technical Specifications Card */}
              <div className="surface-level-1 p-5 space-y-3.5 rounded-[2px] border border-border-subtle">
                <div className="flex items-center justify-between border-b border-border-subtle pb-2.5">
                  <span className="text-tech-label text-neutral-500 font-mono">
                    DISCIPLINE
                  </span>
                  <span className="text-xs text-neutral-300 font-mono">
                    {flagshipProject.discipline || flagshipProject.category}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-border-subtle pb-2.5">
                  <span className="text-tech-label text-neutral-500 font-mono">
                    PLATFORM
                  </span>
                  <span className="text-xs text-neutral-300 font-mono">
                    {flagshipProject.platforms?.join(' · ') || 'Web & Mobile Application'}
                  </span>
                </div>

                <div className="space-y-2 pt-1">
                  <span className="text-tech-label text-neutral-500 font-mono block">
                    APPROVED STACK //
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {flagshipProject.technologies?.map((tech) => (
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

              {/* Primary Direct CTA */}
              <div className="pt-2">
                <Link
                  to="/projects/campus-connect"
                  aria-label="View Campus Connect flagship project details"
                  className={`${buttonVariants({
                    variant: 'default',
                    size: 'lg',
                  })} group gap-2.5 w-full sm:w-auto justify-center`}
                >
                  <span className="tracking-wide">VIEW PROJECT</span>
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
