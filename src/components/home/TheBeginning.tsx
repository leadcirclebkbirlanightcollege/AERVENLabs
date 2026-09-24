import React from 'react';
import { motion } from 'motion/react';
import { originPhilosophy } from '../../data/company';

export const TheBeginning: React.FC = () => {
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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
      y: prefersReducedMotion ? 0 : 18,
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

  return (
    <section
      id="the-beginning"
      aria-labelledby="the-beginning-title"
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
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid-architectural"
        >
          {/* Left Column: Section Marker & Oversized Numeral */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="inline-flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-white" aria-hidden="true" />
                <span className="text-eyebrow text-neutral-400">
                  {originPhilosophy.eyebrow}
                </span>
              </div>
              <p className="text-tech-label text-neutral-500 font-mono tracking-widest">
                ORIGIN // PURPOSE
              </p>
            </motion.div>

            {/* Architectural 01 Numeral Device */}
            <div
              className="hidden lg:block select-none pointer-events-none opacity-[0.05] -translate-x-3"
              aria-hidden="true"
            >
              <span className="font-sans text-[11rem] font-bold leading-none tracking-tighter text-white">
                {originPhilosophy.sectionId}
              </span>
            </div>
          </div>

          {/* Right Column: Main Editorial Statement & Philosophy */}
          <div className="lg:col-span-8 space-y-12 lg:space-y-16">
            {/* Primary Statement */}
            <motion.div variants={itemVariants}>
              <h2
                id="the-beginning-title"
                className="text-heading-1 md:text-display-sm font-semibold tracking-tight text-white leading-[1.12]"
              >
                {originPhilosophy.headline}
              </h2>
            </motion.div>

            {/* Editorial Supporting Paragraphs */}
            <motion.div variants={itemVariants} className="space-y-6 max-w-2xl">
              {originPhilosophy.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base sm:text-lg text-secondary-text leading-relaxed font-sans"
                >
                  {paragraph}
                </p>
              ))}
            </motion.div>

            {/* Reusable Architectural Principles Micro-Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-border-subtle"
            >
              {originPhilosophy.principles.map((principle) => (
                <div
                  key={principle.label}
                  className="surface-level-1 p-4 space-y-2 rounded-[2px]"
                >
                  <p className="text-tech-label text-neutral-500">
                    {principle.label}
                  </p>
                  <p className="text-xs text-neutral-300 font-mono font-medium tracking-wide">
                    {principle.detail}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TheBeginning;
