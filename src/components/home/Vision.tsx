import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Compass, ShieldCheck } from 'lucide-react';
import { visionSectionConfig } from '../../data/vision';

/**
 * Section 8: Our Philosophy & Vision.
 * Headline: "The Future Isn't Something We Wait For. It's Something We Build."
 * Visually impactful, editorial layout with "THE HORIZON" axis and clear convictions.
 */
export const Vision: React.FC = () => {
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
      id="vision"
      aria-labelledby="vision-title"
      className="relative overflow-hidden bg-white border-b border-[#E6E9EF] py-20 sm:py-28 lg:py-36"
    >
      <div className="container-architectural relative z-10 w-full space-y-16 lg:space-y-24">
        {/* Main 12-Column Stage */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid-architectural items-start gap-10 lg:gap-16"
        >
          {/* Left Column: Eyebrow & Coordinate */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <motion.div variants={itemVariants} className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#315EFA]" />
                <span className="text-eyebrow font-mono text-xs font-semibold tracking-wider text-[#315EFA]">
                  {visionSectionConfig.eyebrow}
                </span>
              </div>
              <p className="text-xs font-mono uppercase tracking-widest text-[#667085]">
                {visionSectionConfig.metaLabel}
              </p>
            </motion.div>

            <div className="hidden lg:block select-none pointer-events-none opacity-[0.05] -translate-x-2">
              <span className="font-sans text-[10rem] font-bold leading-none tracking-tighter text-[#101828]">
                08
              </span>
            </div>
          </div>

          {/* Right Column: Monumental Headline & Philosophy Copy */}
          <div className="lg:col-span-8 space-y-8 sm:space-y-10">
            <motion.div variants={itemVariants}>
              <h2
                id="vision-title"
                className="text-heading-1 sm:text-display-sm lg:text-display font-bold tracking-tight text-[#101828] leading-[1.04]"
              >
                {visionSectionConfig.headline}
              </h2>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-lg sm:text-xl font-medium text-[#101828] leading-relaxed max-w-3xl">
                {visionSectionConfig.statement}
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="h-[1px] w-20 bg-[#315EFA]" aria-hidden="true" />

            <motion.div variants={itemVariants}>
              <p className="text-base sm:text-lg text-[#667085] leading-relaxed font-sans max-w-2xl">
                {visionSectionConfig.paragraph}
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* The Horizon Architectural Axis Visualization */}
        <div className="p-8 sm:p-10 rounded-[16px] bg-[#F7F8FA] border border-[#E6E9EF] space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#667085] uppercase tracking-wider">
            <span>{visionSectionConfig.horizonCoordinates.origin}</span>
            <span className="hidden sm:inline">{visionSectionConfig.horizonCoordinates.focus}</span>
            <span className="hidden md:inline">{visionSectionConfig.horizonCoordinates.vector}</span>
            <span className="text-[#315EFA] font-semibold">{visionSectionConfig.horizonCoordinates.terminus}</span>
          </div>

          {/* Clean Light Axis Line */}
          <div className="relative py-4">
            <div className="h-[2px] w-full bg-[#E6E9EF]" aria-hidden="true" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center h-6 w-6 rounded-full bg-white border-2 border-[#315EFA] shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#315EFA]" />
            </div>
          </div>

          <div className="flex items-center justify-between text-xs font-mono text-[#98A2B3]">
            <span>AXIS // INTENTIONAL_ENGINEERING</span>
            <span>BUILD LESS NOISE · CREATE MORE VALUE</span>
          </div>
        </div>

        {/* Closing Monumental Conviction Banner */}
        <div className="pt-4 border-t border-[#E6E9EF] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-heading-2 sm:text-heading-1 font-bold text-[#101828] block tracking-tight">
              {visionSectionConfig.closingStatement.line1}
            </span>
            <span className="text-heading-2 sm:text-heading-1 font-bold text-[#315EFA] block tracking-tight">
              {visionSectionConfig.closingStatement.line2}
            </span>
          </div>

          <Link
            to="/vision"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[8px] bg-[#101828] text-white hover:bg-[#315EFA] text-sm font-semibold transition-colors shadow-sm"
          >
            <span>Explore Complete Vision</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Vision;
