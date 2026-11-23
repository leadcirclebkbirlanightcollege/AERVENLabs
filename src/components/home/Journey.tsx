import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { journeyMilestones, journeySectionConfig } from '../../data/journey';

/**
 * Section 7: Our Journey.
 * Elegant editorial timeline tracking the authentic evolution of AERVENLabs.
 */
export const Journey: React.FC = () => {
  const [activeMilestone, setActiveMilestone] = useState<number>(0);

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
      id="journey"
      aria-labelledby="journey-title"
      className="relative overflow-hidden bg-[#F7F8FA] border-b border-[#E6E9EF] py-20 sm:py-28 lg:py-32"
    >
      <div className="container-architectural relative z-10 w-full space-y-16">
        {/* Section Header */}
        <div className="grid-architectural items-start gap-8">
          <div className="lg:col-span-4 space-y-2">
            <div className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#315EFA]" />
              <span className="text-eyebrow font-mono text-xs font-semibold tracking-wider text-[#315EFA]">
                {journeySectionConfig.eyebrow}
              </span>
            </div>
            <p className="text-xs font-mono uppercase tracking-widest text-[#667085]">
              PROGRESSION // TIMELINE
            </p>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <h2
              id="journey-title"
              className="text-heading-1 sm:text-display-sm font-bold tracking-tight text-[#101828] leading-tight"
            >
              {journeySectionConfig.headline}
            </h2>
            <p className="text-base sm:text-lg text-[#667085] max-w-2xl font-sans">
              {journeySectionConfig.description}
            </p>
          </div>
        </div>

        {/* Chronological Timeline Sequence */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative"
        >
          {journeyMilestones.map((milestone, idx) => (
            <motion.div
              key={milestone.id}
              variants={itemVariants}
              className="editorial-card p-6 sm:p-7 flex flex-col justify-between space-y-6 group hover:-translate-y-1 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#E6E9EF] pb-3">
                  <span className="font-mono text-xs font-bold text-[#315EFA]">
                    {milestone.phase}
                  </span>
                  <span className="font-mono text-[10px] text-[#98A2B3] uppercase">
                    {milestone.category}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-heading-3 font-bold text-[#101828] group-hover:text-[#315EFA] transition-colors">
                    {milestone.title}
                  </h3>
                  <p className="text-xs font-mono text-[#667085]">
                    {milestone.shortStatement}
                  </p>
                </div>

                <p className="text-sm text-[#667085] leading-relaxed font-sans pt-1">
                  {milestone.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E6E9EF] flex items-center justify-between text-[11px] font-mono text-[#98A2B3]">
                <span>0{milestone.order} // 04</span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#E6E9EF] group-hover:bg-[#315EFA] transition-colors" />
                <span>VERIFIED</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline Bottom CTA Link */}
        <div className="pt-4 flex items-center justify-between border-t border-[#E6E9EF] text-xs font-mono text-[#667085]">
          <span>AERVENLABS CHRONICLE // 2026</span>
          <Link
            to="/journey"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#101828] hover:text-[#315EFA] transition-colors"
          >
            <span>Read Complete Journey Chronicle</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Journey;
