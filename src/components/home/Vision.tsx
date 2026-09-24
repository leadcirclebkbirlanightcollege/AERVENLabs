import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { visionSectionConfig } from '../../data/vision';

export const Vision: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const horizonLineRef = useRef<HTMLDivElement>(null);
  const horizonNodeRef = useRef<HTMLDivElement>(null);

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Subtle GSAP scroll-driven horizon progression
  useEffect(() => {
    if (prefersReducedMotion || typeof window === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add('(min-width: 768px)', () => {
      // 1. Horizon line subtle reveal scrub
      if (horizonLineRef.current && sectionRef.current) {
        gsap.fromTo(
          horizonLineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: 'none',
            transformOrigin: 'left center',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 75%',
              end: 'center 45%',
              scrub: 0.6,
            },
          }
        );
      }

      // 2. Horizon central node subtle lateral drift
      if (horizonNodeRef.current && sectionRef.current) {
        gsap.fromTo(
          horizonNodeRef.current,
          { x: -16, opacity: 0.3 },
          {
            x: 0,
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
              end: 'center 45%',
              scrub: 0.6,
            },
          }
        );
      }
    });

    return () => mm.revert();
  }, [prefersReducedMotion]);

  // Motion variants for section entry
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.09,
        delayChildren: prefersReducedMotion ? 0 : 0.05,
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
      id="vision"
      aria-labelledby="vision-title"
      className="relative overflow-hidden bg-black text-foreground border-t border-border-subtle py-28 md:py-36 lg:py-48"
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

      <div className="container-architectural relative z-10 w-full space-y-24 sm:space-y-32 lg:space-y-40">
        {/* Main 12-Column Architectural Stage: Header, Headline & Narrative */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid-architectural items-start"
        >
          {/* Left Column (Cols 1-4): Eyebrow, Label & Subtle Architectural Numeral 06 */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <motion.div variants={itemVariants} className="space-y-3">
              <div className="inline-flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-white" aria-hidden="true" />
                <span className="text-eyebrow text-neutral-400">
                  {visionSectionConfig.eyebrow}
                </span>
              </div>
              <p className="text-tech-label text-neutral-500 font-mono tracking-widest">
                {visionSectionConfig.metaLabel}
              </p>
            </motion.div>

            {/* Subtle Architectural 06 Numeral Device */}
            <div
              className="hidden lg:block select-none pointer-events-none opacity-[0.04] -translate-x-3"
              aria-hidden="true"
            >
              <span className="font-sans text-[10rem] font-bold leading-none tracking-tighter text-white">
                {visionSectionConfig.sectionId}
              </span>
            </div>
          </div>

          {/* Right Column (Cols 5-12): Primary Vision Statement & Philosophy */}
          <div className="lg:col-span-8 space-y-10 lg:space-y-14">
            {/* Monumental Primary Headline */}
            <motion.div variants={itemVariants}>
              <h2
                id="vision-title"
                className="text-heading-1 sm:text-display-sm lg:text-display-md xl:text-display font-semibold tracking-tight text-white leading-[1.04]"
              >
                {visionSectionConfig.headline}
              </h2>
            </motion.div>

            {/* Supporting Philosophical Statement */}
            <motion.div variants={itemVariants}>
              <p className="text-lg sm:text-xl lg:text-2xl text-white/90 font-sans font-medium leading-relaxed max-w-3xl">
                {visionSectionConfig.statement}
              </p>
            </motion.div>

            {/* Architectural Hairline Divider */}
            <motion.div variants={itemVariants}>
              <div className="h-[1px] w-16 bg-white/20" aria-hidden="true" />
            </motion.div>

            {/* Supporting Paragraph */}
            <motion.div variants={itemVariants}>
              <p className="text-base sm:text-lg text-secondary-text leading-relaxed font-sans max-w-2xl">
                {visionSectionConfig.paragraph}
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* ============================================================== */}
        {/* VISUAL CONCEPT: “THE HORIZON” ARCHITECTURAL DEVICE              */}
        {/* ============================================================== */}
        <div className="w-full space-y-6 pt-4">
          {/* Top Micro-Metadata Readout */}
          <div className="flex flex-wrap items-center justify-between gap-4 text-neutral-500 font-mono text-[10px] tracking-widest uppercase">
            <span>{visionSectionConfig.horizonCoordinates.origin}</span>
            <span className="hidden sm:inline">{visionSectionConfig.horizonCoordinates.focus}</span>
            <span className="hidden md:inline">{visionSectionConfig.horizonCoordinates.vector}</span>
            <span>{visionSectionConfig.horizonCoordinates.terminus}</span>
          </div>

          {/* The Horizon Axis Line & Node Construction */}
          <div className="relative py-4">
            {/* Background Faint Hairline Spine */}
            <div className="h-[1px] w-full bg-white/[0.08]" aria-hidden="true" />

            {/* Dynamic Scrubbing Horizon Line (Desktop/Tablet) / Static Horizon Line (Mobile) */}
            <div
              ref={horizonLineRef}
              className="absolute top-1/2 left-0 w-full h-[1px] -translate-y-1/2 bg-white/30 origin-left scale-x-100 md:scale-x-0"
              aria-hidden="true"
            />

            {/* Center Focal Diamond Node & Vertical Construction Tick */}
            <div
              ref={horizonNodeRef}
              className="absolute top-1/2 left-1/3 sm:left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none select-none"
              aria-hidden="true"
            >
              {/* Top Vertical Construction Tick */}
              <div className="h-3 w-[1px] bg-white/40" />

              {/* Diamond Marker Node */}
              <div className="h-2.5 w-2.5 rotate-45 border border-white bg-black my-1" />

              {/* Bottom Vertical Construction Tick */}
              <div className="h-3 w-[1px] bg-white/40" />
            </div>
          </div>

          {/* Bottom Coordinate Annotation */}
          <div className="flex items-center justify-between text-neutral-600 font-mono text-[10px] select-none" aria-hidden="true">
            <span>COORD // HORIZON_VECTOR_06</span>
            <span>SYS_AXIS // INTENT_DRIVEN</span>
          </div>
        </div>

        {/* ============================================================== */}
        {/* CLOSING EDITORIAL STATEMENT: "BUILD LESS NOISE. CREATE VALUE."  */}
        {/* ============================================================== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid-architectural items-end pt-8 lg:pt-16 border-t border-border-subtle"
        >
          {/* Left Column (Cols 1-4): Technical Readout */}
          <motion.div variants={itemVariants} className="lg:col-span-4 space-y-2">
            <span className="text-tech-label text-neutral-500 font-mono block">
              MANDATE // CORE CONVICTION
            </span>
            <p className="text-xs font-mono text-neutral-400">
              AERVENLABS TECHNOLOGIES PVT. LTD.
            </p>
          </motion.div>

          {/* Right Column (Cols 5-12): Massive Monumental Closing Statement */}
          <motion.div variants={itemVariants} className="lg:col-span-8 space-y-1">
            <div className="text-display-sm sm:text-display-md lg:text-display font-semibold tracking-tighter text-white uppercase select-none leading-[0.92]">
              {visionSectionConfig.closingStatement.line1}
            </div>
            <div className="text-display-sm sm:text-display-md lg:text-display font-semibold tracking-tighter text-neutral-400 uppercase select-none leading-[0.92]">
              {visionSectionConfig.closingStatement.line2}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;
