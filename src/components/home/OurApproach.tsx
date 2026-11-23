import React from 'react';
import { motion } from 'motion/react';
import { companyApproach } from '../../data/company';

/**
 * Section 4: Our Approach.
 * "Think Beyond. Design Intelligently. Engineer Precisely. Build Meaningfully."
 * Sophisticated typography, subtle motion, minimal visual elements.
 */
export const OurApproach: React.FC = () => {
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
      id="our-approach"
      aria-labelledby="our-approach-title"
      className="relative overflow-hidden bg-white border-b border-[#E6E9EF] py-20 sm:py-28 lg:py-32"
    >
      <div className="container-architectural relative z-10 w-full space-y-14 sm:space-y-16">
        {/* Section Header */}
        <div className="grid-architectural items-start gap-8">
          <div className="lg:col-span-4 space-y-2">
            <div className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#315EFA]" />
              <span className="text-eyebrow font-mono text-xs font-semibold tracking-wider text-[#315EFA]">
                04 / OUR APPROACH
              </span>
            </div>
            <p className="text-xs font-mono uppercase tracking-widest text-[#667085]">
              METHODOLOGY // CRAFTSMANSHIP
            </p>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <h2
              id="our-approach-title"
              className="text-heading-1 sm:text-display-sm font-bold tracking-tight text-[#101828] leading-tight"
            >
              Architectural discipline at every stage.
            </h2>
            <p className="text-base sm:text-lg text-[#667085] max-w-2xl font-sans">
              We approach every initiative with structured rigor — moving from first-principles inquiry to precision engineering and production deployment.
            </p>
          </div>
        </div>

        {/* 4 Approach Pillars Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {companyApproach.map((item) => (
            <motion.div
              key={item.step}
              variants={itemVariants}
              className="editorial-card p-6 sm:p-7 flex flex-col justify-between space-y-6 group hover:-translate-y-1 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#E6E9EF] pb-3">
                  <span className="font-mono text-sm font-bold text-[#315EFA]">
                    {item.step}
                  </span>
                  <span className="font-mono text-[10px] text-[#98A2B3] uppercase tracking-widest">
                    STAGE
                  </span>
                </div>

                <h3 className="text-heading-3 font-bold text-[#101828] group-hover:text-[#315EFA] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs font-mono text-[#667085]">
                  {item.subtitle}
                </p>

                <p className="text-sm text-[#667085] leading-relaxed font-sans pt-1">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E6E9EF] flex items-center justify-between text-[11px] font-mono text-[#98A2B3]">
                <span>DISCIPLINE</span>
                <span className="h-1 w-1 rounded-full bg-[#E6E9EF] group-hover:bg-[#315EFA] transition-colors" />
                <span>EXCELLENCE</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurApproach;
