import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { capabilitiesData, capabilitiesSectionConfig } from '../../data/capabilities';
import { Capability } from '../../types';

export const WhatWeBuild: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const pinContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // GSAP desktop pinned storytelling setup
  useEffect(() => {
    if (prefersReducedMotion || typeof window === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add('(min-width: 1024px)', () => {
      if (!sectionRef.current || !pinContainerRef.current) return;

      // Pin the frame over a controlled scroll distance (~190vh)
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom bottom',
        pin: pinContainerRef.current,
        scrub: 0.5,
        onUpdate: (self) => {
          const index = Math.min(
            Math.floor(self.progress * capabilitiesData.length),
            capabilitiesData.length - 1
          );
          setActiveIndex(index);
        },
      });
    });

    return () => mm.revert();
  }, [prefersReducedMotion]);

  // Click / Keyboard selection handler on desktop
  const handleSelectCapability = (index: number) => {
    setActiveIndex(index);
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const sectionTop = rect.top + scrollTop;
      const totalScrollDistance = sectionRef.current.offsetHeight - window.innerHeight;
      if (totalScrollDistance > 0) {
        const targetY = sectionTop + (index / (capabilitiesData.length - 1)) * totalScrollDistance;
        window.scrollTo({ top: targetY, behavior: 'smooth' });
      }
    }
  };

  // Motion variants for section entry
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.1,
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
        duration: prefersReducedMotion ? 0.01 : 0.75,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const activeCapability: Capability = capabilitiesData[activeIndex] || capabilitiesData[0];

  return (
    <section
      ref={sectionRef}
      id="what-we-build"
      aria-labelledby="what-we-build-title"
      className={`relative bg-black text-foreground border-t border-border-subtle ${
        prefersReducedMotion ? 'py-24 sm:py-32' : 'lg:h-[200vh]'
      }`}
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

      {/* ============================================================== */}
      {/* DESKTOP PINNED STORYTELLING EXPERIENCE (>= 1024px & !reduced) */}
      {/* ============================================================== */}
      {!prefersReducedMotion && (
        <div
          ref={pinContainerRef}
          className="hidden lg:flex flex-col justify-between h-screen w-full overflow-hidden relative z-10 pt-10 pb-8"
        >
          <div className="container-architectural w-full flex-1 flex flex-col justify-between">
            {/* Top Architectural Header */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid-architectural items-start border-b border-border-subtle pb-6"
            >
              {/* Left Column: Eyebrow & Category Label */}
              <div className="lg:col-span-4 space-y-2">
                <div className="inline-flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" aria-hidden="true" />
                  <span className="text-eyebrow text-neutral-400">
                    {capabilitiesSectionConfig.eyebrow}
                  </span>
                </div>
                <p className="text-tech-label text-neutral-500 font-mono tracking-widest">
                  {capabilitiesSectionConfig.metaLabel}
                </p>
              </div>

              {/* Right Column: Editorial Headline & Brief Context */}
              <div className="lg:col-span-8">
                <h2
                  id="what-we-build-title"
                  className="text-heading-2 xl:text-heading-1 font-semibold tracking-tight text-white leading-tight"
                >
                  {capabilitiesSectionConfig.headline}
                </h2>
              </div>
            </motion.div>

            {/* Core 12-Column Architectural Stage */}
            <div className="grid-architectural items-center my-auto py-8">
              {/* LEFT COLUMN (Cols 1-4): Persistent Capability Index & Architectural 03 */}
              <div className="lg:col-span-4 flex flex-col justify-between space-y-8 pr-4">
                <div className="space-y-4">
                  <p className="text-tech-label text-neutral-500 font-mono">
                    INDEX // TECHNICAL CATALOGUE
                  </p>

                  {/* Persistent Capability Navigation List */}
                  <ol role="list" className="space-y-2" aria-label="Capabilities index">
                    {capabilitiesData.map((cap, index) => {
                      const isActive = activeIndex === index;
                      return (
                        <li key={cap.id}>
                          <button
                            type="button"
                            onClick={() => handleSelectCapability(index)}
                            aria-current={isActive ? 'true' : undefined}
                            className={`group flex items-center justify-between w-full text-left py-2.5 px-3 transition-all duration-300 rounded-[2px] border ${
                              isActive
                                ? 'bg-surface border-white/40 text-white'
                                : 'bg-transparent border-transparent text-neutral-500 hover:text-neutral-300 hover:border-border-subtle'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              {/* Architectural node square */}
                              <span
                                className={`h-1.5 w-1.5 transition-all duration-300 ${
                                  isActive ? 'bg-white scale-125' : 'bg-neutral-600 group-hover:bg-neutral-400'
                                }`}
                                aria-hidden="true"
                              />
                              <span
                                className={`font-mono text-xs ${
                                  isActive ? 'text-white' : 'text-neutral-500 group-hover:text-neutral-400'
                                }`}
                              >
                                0{cap.order}
                              </span>
                              <span
                                className={`text-sm tracking-tight transition-colors duration-200 ${
                                  isActive ? 'font-medium text-white' : 'font-normal'
                                }`}
                              >
                                {cap.title}
                              </span>
                            </div>

                            <span
                              className={`font-mono text-[10px] tracking-widest transition-colors duration-200 ${
                                isActive ? 'text-neutral-400' : 'text-neutral-600'
                              }`}
                            >
                              SYS_0{cap.order}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ol>
                </div>

                {/* Large Background 03 Numeral */}
                <div
                  className="hidden lg:block select-none pointer-events-none opacity-[0.04] -translate-x-2"
                  aria-hidden="true"
                >
                  <span className="font-sans text-[9rem] font-bold leading-none tracking-tighter text-white">
                    {capabilitiesSectionConfig.sectionId}
                  </span>
                </div>
              </div>

              {/* CENTER COLUMN (Cols 5-8): Large Active Capability Display */}
              <div className="lg:col-span-4 xl:col-span-5 space-y-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCapability.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-6"
                  >
                    {/* Architectural Coordinate Tag */}
                    <div className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-white" aria-hidden="true" />
                      <span className="text-tech-label text-neutral-400 font-mono">
                        {activeCapability.systemCode}
                      </span>
                      <span className="h-3 w-[1px] bg-white/[0.15]" aria-hidden="true" />
                      <span className="text-tech-label text-neutral-500 font-mono">
                        {activeCapability.category}
                      </span>
                    </div>

                    {/* Massive Display Title */}
                    <h3 className="text-heading-1 xl:text-display-sm font-semibold tracking-tight text-white leading-[1.08]">
                      {activeCapability.title}
                    </h3>

                    {/* Architectural Hairline Divider */}
                    <div className="h-[1px] w-16 bg-white/20" aria-hidden="true" />

                    {/* Tagline / Short Statement */}
                    <p className="text-sm font-mono text-neutral-400 tracking-wide uppercase leading-relaxed">
                      {activeCapability.tagline || activeCapability.shortDescription}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* RIGHT COLUMN (Cols 9-12): Description & Technical Metadata Card */}
              <div className="lg:col-span-4 xl:col-span-3 space-y-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`desc-${activeCapability.id}`}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
                    className="space-y-6"
                  >
                    {/* Editorial Description */}
                    <p className="text-base text-secondary-text leading-relaxed font-sans">
                      {activeCapability.description}
                    </p>

                    {/* Technical Metadata Specification Card */}
                    <div className="surface-level-1 p-5 space-y-4 rounded-[2px] border border-border-subtle">
                      <div className="flex items-center justify-between border-b border-border-subtle pb-2.5">
                        <span className="text-tech-label text-neutral-500 font-mono">
                          DISCIPLINE
                        </span>
                        <span className="text-xs text-neutral-300 font-mono">
                          {activeCapability.discipline}
                        </span>
                      </div>

                      <div className="space-y-2 pt-1">
                        <span className="text-tech-label text-neutral-500 font-mono block">
                          APPROVED STACK //
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {activeCapability.technologies?.map((tech) => (
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
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Bottom Row: Coordinate Readout & Architectural Progress Line */}
            <div className="w-full border-t border-border-subtle pt-4">
              <div className="flex items-center justify-between">
                {/* Left Coordinate */}
                <div className="flex items-center gap-3">
                  <span className="text-tech-label text-neutral-400 font-mono">
                    SYS_CAP // 0{activeIndex + 1} OF 0{capabilitiesData.length}
                  </span>
                  <span className="h-2.5 w-[1px] bg-white/[0.15]" aria-hidden="true" />
                  <span className="text-tech-label text-neutral-500 font-mono">
                    {activeCapability.category}
                  </span>
                </div>

                {/* Progress Hairline Line */}
                <div
                  className="w-48 sm:w-64 h-[1px] bg-white/[0.10] relative overflow-hidden"
                  aria-hidden="true"
                >
                  <div
                    className="h-full bg-white transition-all duration-300"
                    style={{
                      width: `${((activeIndex + 1) / capabilitiesData.length) * 100}%`,
                    }}
                  />
                </div>

                {/* Right Architectural Readout */}
                <span className="text-tech-label text-neutral-500 font-mono">
                  AERVENLABS // SPEC_03
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* MOBILE, TABLET & REDUCED MOTION EXPERIENCE (< 1024px or reduced) */}
      {/* ============================================================== */}
      <div
        className={`${
          prefersReducedMotion ? 'block' : 'lg:hidden'
        } container-architectural relative z-10 w-full`}
      >
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="space-y-6 mb-16 sm:mb-20"
        >
          {/* Eyebrow & Metadata */}
          <motion.div variants={itemVariants} className="space-y-3">
            <div className="inline-flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-white" aria-hidden="true" />
              <span className="text-eyebrow text-neutral-400">
                {capabilitiesSectionConfig.eyebrow}
              </span>
            </div>
            <p className="text-tech-label text-neutral-500 font-mono tracking-widest">
              {capabilitiesSectionConfig.metaLabel}
            </p>
          </motion.div>

          {/* Section Heading */}
          <motion.div variants={itemVariants}>
            <h2 className="text-heading-1 sm:text-display-sm font-semibold tracking-tight text-white leading-tight">
              {capabilitiesSectionConfig.headline}
            </h2>
          </motion.div>

          {/* Editorial Description */}
          <motion.div variants={itemVariants}>
            <p className="text-base sm:text-lg text-secondary-text leading-relaxed max-w-2xl font-sans">
              {capabilitiesSectionConfig.description}
            </p>
          </motion.div>
        </motion.div>

        {/* Natural Vertical Flow: Sequential Capability Chapters */}
        <div className="relative pl-6 sm:pl-8 border-l border-white/[0.08]">
          <ol role="list" className="space-y-16 sm:space-y-20">
            {capabilitiesData.map((cap) => (
              <li key={cap.id} className="relative space-y-6">
                {/* Architectural Node Indicator on the Left Spine */}
                <div
                  className="absolute -left-[31px] sm:-left-[39px] top-1.5 h-3 w-3 rotate-45 border border-white bg-white shadow-[0_0_8px_rgba(255,255,255,0.4)]"
                  aria-hidden="true"
                />

                {/* Chapter Meta */}
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-xs font-semibold text-white">
                    0{cap.order}
                  </span>
                  <span className="h-2.5 w-[1px] bg-white/[0.2]" aria-hidden="true" />
                  <span className="text-tech-label text-neutral-400 font-mono">
                    {cap.systemCode}
                  </span>
                  <span className="h-2.5 w-[1px] bg-white/[0.2]" aria-hidden="true" />
                  <span className="text-tech-label text-neutral-500 font-mono">
                    {cap.category}
                  </span>
                </div>

                {/* Chapter Title */}
                <h3 className="text-heading-2 sm:text-heading-1 font-semibold text-white tracking-tight">
                  {cap.title}
                </h3>

                {/* Short Statement */}
                <p className="text-xs sm:text-sm font-mono text-neutral-400 tracking-wide uppercase">
                  {cap.tagline || cap.shortDescription}
                </p>

                {/* Architectural Hairline Divider */}
                <div className="h-[1px] w-12 bg-white/20" aria-hidden="true" />

                {/* Detailed Description */}
                <p className="text-sm sm:text-base text-secondary-text leading-relaxed font-sans max-w-2xl">
                  {cap.description}
                </p>

                {/* Technical Stack Tags */}
                <div className="surface-level-1 p-4 sm:p-5 space-y-3 rounded-[2px] border border-border-subtle max-w-xl">
                  <div className="flex items-center justify-between border-b border-border-subtle pb-2">
                    <span className="text-tech-label text-neutral-500 font-mono">
                      DISCIPLINE
                    </span>
                    <span className="text-xs text-neutral-300 font-mono">
                      {cap.discipline}
                    </span>
                  </div>

                  <div className="space-y-1.5 pt-1">
                    <span className="text-tech-label text-neutral-500 font-mono block">
                      APPROVED STACK //
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {cap.technologies?.map((tech) => (
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
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default WhatWeBuild;
