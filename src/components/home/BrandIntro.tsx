import React from 'react';
import { motion } from 'motion/react';
import { originPhilosophy } from '../../data/company';

/**
 * Section 3: Brand Introduction.
 * Headline: "Not Just Building Technology. Building Possibilities."
 * Explains company's philosophy, ambition, and approach to solving real-world problems.
 * Concise, confident, professional.
 */
export const BrandIntro: React.FC = () => {
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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
        duration: prefersReducedMotion ? 0.01 : 0.65,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      id="brand-intro"
      aria-labelledby="brand-intro-title"
      className="relative overflow-hidden bg-[#F7F8FA] border-b border-[#E6E9EF] py-20 sm:py-28 lg:py-32"
    >
      <div className="container-architectural relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid-architectural items-start gap-10 lg:gap-16"
        >
          {/* Left Column: Eyebrow, Chapter Marker, Numeral */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <motion.div variants={itemVariants} className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#315EFA]" aria-hidden="true" />
                <span className="text-eyebrow font-mono text-xs font-semibold tracking-wider text-[#315EFA]">
                  {originPhilosophy.eyebrow}
                </span>
              </div>
              <p className="text-xs font-mono uppercase tracking-widest text-[#667085]">
                PHILOSOPHY // AMBITION
              </p>
            </motion.div>

            <div className="hidden lg:block select-none pointer-events-none opacity-[0.06] -translate-x-2">
              <span className="font-sans text-[10rem] font-bold leading-none tracking-tighter text-[#101828]">
                03
              </span>
            </div>
          </div>

          {/* Right Column: Monumental Headline & Narrative Copy */}
          <div className="lg:col-span-8 space-y-8 sm:space-y-10">
            <motion.div variants={itemVariants}>
              <h2
                id="brand-intro-title"
                className="text-heading-1 sm:text-display-sm font-bold tracking-tight text-[#101828] leading-[1.08]"
              >
                {originPhilosophy.headline}
              </h2>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-5 max-w-3xl">
              {originPhilosophy.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base sm:text-lg text-[#667085] leading-relaxed font-sans"
                >
                  {paragraph}
                </p>
              ))}
            </motion.div>

            {/* Principles Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#E6E9EF]"
            >
              {originPhilosophy.principles.map((principle) => (
                <div
                  key={principle.label}
                  className="p-5 rounded-[10px] bg-white border border-[#E6E9EF] shadow-sm space-y-1.5"
                >
                  <span className="font-mono text-xs font-semibold tracking-wider text-[#315EFA]">
                    {principle.label}
                  </span>
                  <p className="text-sm font-medium text-[#101828]">
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

export default BrandIntro;
