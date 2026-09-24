import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { journeyMilestones, journeySectionConfig } from '../../data/journey';
import { JourneyMilestone } from '../../types';

export const Journey: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineContainerRef = useRef<HTMLDivElement>(null);
  const lineProgressRef = useRef<HTMLDivElement>(null);
  const milestoneRefs = useRef<(HTMLLIElement | null)[]>([]);

  const [activeIndex, setActiveIndex] = useState<number>(0);

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (prefersReducedMotion || typeof window === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Progress line scrub down the timeline spine
      if (lineProgressRef.current && timelineContainerRef.current) {
        gsap.fromTo(
          lineProgressRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            transformOrigin: 'top center',
            scrollTrigger: {
              trigger: timelineContainerRef.current,
              start: 'top 60%',
              end: 'bottom 75%',
              scrub: 0.5,
            },
          }
        );
      }

      // 2. Active milestone state linked to scroll position
      milestoneRefs.current.forEach((el, index) => {
        if (!el) return;

        ScrollTrigger.create({
          trigger: el,
          start: 'top 65%',
          end: 'bottom 35%',
          onEnter: () => setActiveIndex(index),
          onEnterBack: () => setActiveIndex(index),
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  // Motion variants for section header reveal
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
        duration: prefersReducedMotion ? 0.01 : 0.7,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="journey"
      aria-labelledby="journey-title"
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
        {/* Section Header: Structured Eyebrow, Title, & Editorial Description */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid-architectural items-start mb-20 md:mb-28 lg:mb-36"
        >
          {/* Left Column: Eyebrow & Large Architectural Numeral */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="inline-flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-white" aria-hidden="true" />
                <span className="text-eyebrow text-neutral-400">
                  {journeySectionConfig.eyebrow}
                </span>
              </div>
              <p className="text-tech-label text-neutral-500 font-mono tracking-widest">
                PROGRESSION // ARCHITECTURE
              </p>
            </motion.div>

            {/* Subtle Architectural 02 Numeral Device */}
            <div
              className="hidden lg:block select-none pointer-events-none opacity-[0.05] -translate-x-3"
              aria-hidden="true"
            >
              <span className="font-sans text-[11rem] font-bold leading-none tracking-tighter text-white">
                {journeySectionConfig.sectionId}
              </span>
            </div>
          </div>

          {/* Right Column: Editorial Headline & Subtitle */}
          <div className="lg:col-span-8 space-y-8">
            <motion.div variants={itemVariants}>
              <h2
                id="journey-title"
                className="text-heading-1 md:text-display-sm font-semibold tracking-tight text-white leading-[1.12]"
              >
                {journeySectionConfig.headline}
              </h2>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-base sm:text-lg text-secondary-text leading-relaxed max-w-2xl font-sans">
                {journeySectionConfig.description}
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Timeline Component Spine & Milestones */}
        <div ref={timelineContainerRef} className="relative mt-8 sm:mt-12 lg:mt-16">
          {/* Desktop Central Spine Line (Hidden on Mobile) */}
          <div
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] -translate-x-1/2 bg-white/[0.08]"
            aria-hidden="true"
          >
            <div
              ref={lineProgressRef}
              className="w-full h-full bg-white origin-top"
              style={{ transform: prefersReducedMotion ? 'scaleY(1)' : 'scaleY(0)' }}
            />
          </div>

          {/* Mobile Left-Aligned Spine Line (Hidden on Desktop) */}
          <div
            className="lg:hidden absolute left-4 sm:left-6 top-0 bottom-0 w-[1px] bg-white/[0.08]"
            aria-hidden="true"
          >
            <div
              className="w-full h-full bg-white origin-top transition-transform duration-300"
              style={{
                transform: prefersReducedMotion
                  ? 'scaleY(1)'
                  : `scaleY(${((activeIndex + 1) / journeyMilestones.length).toFixed(2)})`,
              }}
            />
          </div>

          {/* Chronological Ordered List for Screen Readers and Visual Hierarchy */}
          <ol role="list" className="relative space-y-16 sm:space-y-24 lg:space-y-36">
            {journeyMilestones.map((milestone: JourneyMilestone, index: number) => {
              const isEven = index % 2 === 1;
              const isActive = prefersReducedMotion || activeIndex === index;
              const isPassed = !prefersReducedMotion && activeIndex > index;

              return (
                <li
                  key={milestone.id}
                  id={`milestone-${milestone.id}`}
                  ref={(el) => {
                    milestoneRefs.current[index] = el;
                  }}
                  className={`relative transition-opacity duration-500 ${
                    prefersReducedMotion
                      ? 'opacity-100'
                      : isActive
                      ? 'opacity-100'
                      : isPassed
                      ? 'opacity-70'
                      : 'opacity-35'
                  }`}
                >
                  {/* MOBILE & TABLET LAYOUT (< lg) */}
                  <div className="lg:hidden relative pl-10 sm:pl-14">
                    {/* Architectural Marker Node */}
                    <div
                      className={`absolute left-4 sm:left-6 top-1.5 -translate-x-1/2 h-3 w-3 rotate-45 border transition-all duration-300 ${
                        isActive
                          ? 'border-white bg-white scale-110'
                          : 'border-white/30 bg-black scale-90'
                      }`}
                      aria-hidden="true"
                    />

                    {/* Content Container */}
                    <div className="surface-level-1 p-5 sm:p-7 space-y-4 rounded-[2px] border border-border-subtle">
                      {/* Technical Meta Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border-subtle pb-3">
                        <div className="flex items-center gap-2">
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${
                              isActive ? 'bg-white' : 'bg-neutral-600'
                            }`}
                            aria-hidden="true"
                          />
                          <span className="text-tech-label text-neutral-400 font-mono">
                            {milestone.phase}
                          </span>
                        </div>
                        {milestone.category && (
                          <span className="text-tech-label text-neutral-500 font-mono">
                            {milestone.category}
                          </span>
                        )}
                      </div>

                      {/* Milestone Title */}
                      <h3 className="text-heading-3 sm:text-heading-2 font-semibold text-white tracking-tight">
                        {milestone.title}
                      </h3>

                      {/* Short Statement */}
                      <p className="text-xs sm:text-sm font-mono text-neutral-400">
                        {milestone.shortStatement}
                      </p>

                      {/* Architectural Hairline Divider */}
                      <div className="h-[1px] w-12 bg-white/20" aria-hidden="true" />

                      {/* Detailed Description */}
                      {milestone.description && (
                        <p className="text-sm sm:text-base text-secondary-text leading-relaxed font-sans">
                          {milestone.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* DESKTOP LAYOUT (>= lg: 2-column alternating grid) */}
                  <div className="hidden lg:grid lg:grid-cols-2 lg:gap-20 items-center relative">
                    {/* Central Marker Node */}
                    <div
                      className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 h-3.5 w-3.5 rotate-45 border transition-all duration-300 ${
                        isActive
                          ? 'border-white bg-white scale-125'
                          : isPassed
                          ? 'border-neutral-500 bg-neutral-900 scale-100'
                          : 'border-white/20 bg-black scale-90'
                      }`}
                      aria-hidden="true"
                    />

                    {/* Column 1 (Left Side) */}
                    <div className={isEven ? 'order-1' : 'order-1'}>
                      {!isEven ? (
                        // Odd Item: Main Milestone Card on Left
                        <div
                          className={`surface-level-1 p-8 xl:p-10 space-y-5 rounded-[2px] transition-all duration-300 border ${
                            isActive
                              ? 'border-white/30 shadow-[0_0_24px_rgba(0,0,0,0.8)]'
                              : 'border-border-subtle'
                          }`}
                        >
                          <div className="flex items-center justify-between border-b border-border-subtle pb-3.5">
                            <div className="flex items-center gap-2.5">
                              <span
                                className={`h-1.5 w-1.5 rounded-full ${
                                  isActive ? 'bg-white' : 'bg-neutral-600'
                                }`}
                                aria-hidden="true"
                              />
                              <span className="text-tech-label text-neutral-300 font-mono tracking-wider">
                                {milestone.phase}
                              </span>
                            </div>
                            {milestone.category && (
                              <span className="text-tech-label text-neutral-500 font-mono">
                                {milestone.category}
                              </span>
                            )}
                          </div>

                          <h3 className="text-heading-2 font-semibold text-white tracking-tight leading-snug">
                            {milestone.title}
                          </h3>

                          <p className="text-xs font-mono text-neutral-400 tracking-wide uppercase">
                            {milestone.shortStatement}
                          </p>

                          <div className="h-[1px] w-14 bg-white/20" aria-hidden="true" />

                          {milestone.description && (
                            <p className="text-base text-secondary-text leading-relaxed font-sans">
                              {milestone.description}
                            </p>
                          )}
                        </div>
                      ) : (
                        // Even Item: Technical Coordinate Readout on Left
                        <div className="p-8 xl:p-10 flex flex-col justify-center items-end text-right space-y-4">
                          <span
                            className="font-mono text-6xl xl:text-7xl font-light text-white/[0.08] select-none"
                            aria-hidden="true"
                          >
                            0{milestone.order}
                          </span>
                          <div className="space-y-1">
                            <p className="text-tech-label text-neutral-500 font-mono">
                              SEQUENCE 0{milestone.order} // 0{journeyMilestones.length}
                            </p>
                            <p className="text-xs font-mono text-neutral-400">
                              STATUS // SYSTEM PHASE
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Column 2 (Right Side) */}
                    <div className={isEven ? 'order-2' : 'order-2'}>
                      {isEven ? (
                        // Even Item: Main Milestone Card on Right
                        <div
                          className={`surface-level-1 p-8 xl:p-10 space-y-5 rounded-[2px] transition-all duration-300 border ${
                            isActive
                              ? 'border-white/30 shadow-[0_0_24px_rgba(0,0,0,0.8)]'
                              : 'border-border-subtle'
                          }`}
                        >
                          <div className="flex items-center justify-between border-b border-border-subtle pb-3.5">
                            <div className="flex items-center gap-2.5">
                              <span
                                className={`h-1.5 w-1.5 rounded-full ${
                                  isActive ? 'bg-white' : 'bg-neutral-600'
                                }`}
                                aria-hidden="true"
                              />
                              <span className="text-tech-label text-neutral-300 font-mono tracking-wider">
                                {milestone.phase}
                              </span>
                            </div>
                            {milestone.category && (
                              <span className="text-tech-label text-neutral-500 font-mono">
                                {milestone.category}
                              </span>
                            )}
                          </div>

                          <h3 className="text-heading-2 font-semibold text-white tracking-tight leading-snug">
                            {milestone.title}
                          </h3>

                          <p className="text-xs font-mono text-neutral-400 tracking-wide uppercase">
                            {milestone.shortStatement}
                          </p>

                          <div className="h-[1px] w-14 bg-white/20" aria-hidden="true" />

                          {milestone.description && (
                            <p className="text-base text-secondary-text leading-relaxed font-sans">
                              {milestone.description}
                            </p>
                          )}
                        </div>
                      ) : (
                        // Odd Item: Technical Coordinate Readout on Right
                        <div className="p-8 xl:p-10 flex flex-col justify-center items-start text-left space-y-4">
                          <span
                            className="font-mono text-6xl xl:text-7xl font-light text-white/[0.08] select-none"
                            aria-hidden="true"
                          >
                            0{milestone.order}
                          </span>
                          <div className="space-y-1">
                            <p className="text-tech-label text-neutral-500 font-mono">
                              SEQUENCE 0{milestone.order} // 0{journeyMilestones.length}
                            </p>
                            <p className="text-xs font-mono text-neutral-400">
                              STATUS // SYSTEM PHASE
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Journey;
