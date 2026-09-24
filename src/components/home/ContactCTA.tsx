import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { contactCTAConfig } from '../../data/company';

/**
 * Homepage Section 08: The Contact CTA ("The Invitation").
 * Serves as the editorial conclusion to the homepage narrative:
 * BEGINNING -> JOURNEY -> WHAT WE BUILD -> PROJECTS -> TEAM -> VISION -> PARTNERS -> CONTACT.
 * Invites visitors to begin a clear conversation without generic sales or SaaS clichés.
 */
export const ContactCTA: React.FC = () => {
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Staggered motion variants for restrained editorial entrance
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
      id="contact"
      aria-labelledby="contact-title"
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

      <div className="container-architectural relative z-10 w-full space-y-16 sm:space-y-20 lg:space-y-24">
        {/* Main 12-Column Architectural Stage */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid-architectural items-start"
        >
          {/* Left Column (Cols 1-4): Eyebrow, Channel Protocol & Architectural 08 Numeral */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <motion.div variants={itemVariants} className="space-y-3">
              <div className="inline-flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-white" aria-hidden="true" />
                <span className="text-eyebrow text-neutral-400">
                  {contactCTAConfig.eyebrow}
                </span>
              </div>
              <p className="text-tech-label text-white font-mono tracking-widest">
                {contactCTAConfig.tagline}
              </p>
              <div className="space-y-1 pt-2 text-tech-label text-neutral-500 font-mono tracking-widest">
                <p>{contactCTAConfig.metaLabels.protocol}</p>
                <p>{contactCTAConfig.metaLabels.status}</p>
              </div>
            </motion.div>

            {/* Architectural 08 Numeral Device */}
            <div
              className="hidden lg:block select-none pointer-events-none opacity-[0.04] -translate-x-3 pt-6"
              aria-hidden="true"
            >
              <span className="font-sans text-[10rem] font-bold leading-none tracking-tighter text-white">
                {contactCTAConfig.sectionId}
              </span>
            </div>
          </div>

          {/* Right Column (Cols 5-12): Headline, Supporting Copy, Action Cluster */}
          <div className="lg:col-span-8 space-y-8 sm:space-y-10 lg:space-y-12">
            {/* Primary Editorial Headline */}
            <motion.div variants={itemVariants}>
              <h2
                id="contact-title"
                className="text-heading-1 sm:text-display-sm lg:text-display-md font-semibold tracking-tight text-white leading-[1.08]"
              >
                Have an idea worth <br className="hidden sm:inline" />
                building?
              </h2>
            </motion.div>

            {/* Supporting Editorial Paragraph */}
            <motion.div variants={itemVariants}>
              <p className="text-base sm:text-lg lg:text-xl text-secondary-text leading-relaxed font-sans max-w-2xl">
                {contactCTAConfig.supportingCopy}
              </p>
            </motion.div>

            {/* Hairline Divider */}
            <motion.div variants={itemVariants}>
              <div className="h-[1px] w-16 bg-white/20" aria-hidden="true" />
            </motion.div>

            {/* Primary Decisive Action & Secondary Direct Email */}
            <motion.div variants={itemVariants} className="pt-2">
              <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10 lg:gap-12">
                {/* Primary CTA */}
                <Link
                  to={contactCTAConfig.ctaHref}
                  className="group inline-flex items-center justify-between sm:justify-center gap-4 bg-white text-black font-mono text-xs sm:text-sm font-semibold tracking-wider uppercase px-8 py-4 rounded-[2px] border border-white hover:bg-neutral-200 hover:border-neutral-300 active:scale-[0.99] transition-all duration-200 min-h-[48px] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black select-none shrink-0 w-full sm:w-auto"
                  aria-label="Start a conversation with AervenLabs"
                >
                  <span>{contactCTAConfig.ctaText}</span>
                  <ArrowUpRight
                    className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </Link>

                {/* Secondary Verified Direct Email Channel */}
                <div className="flex flex-col justify-center space-y-1">
                  <span className="text-tech-label text-neutral-500 font-mono tracking-widest">
                    {contactCTAConfig.metaLabels.channel}
                  </span>
                  <a
                    href={`mailto:${contactCTAConfig.email}`}
                    className="inline-flex items-center gap-2 text-sm sm:text-base font-mono text-neutral-400 hover:text-white transition-colors duration-200 min-h-[48px] py-1 outline-none focus-visible:ring-1 focus-visible:ring-white group w-fit"
                    aria-label={`Send direct email to ${contactCTAConfig.email}`}
                  >
                    <span className="underline-offset-4 group-hover:underline">
                      {contactCTAConfig.email}
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Bottom Closing Microcopy and Architectural Readout */}
            <motion.div
              variants={itemVariants}
              className="pt-12 sm:pt-16 border-t border-border-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-neutral-500 font-mono text-[11px] tracking-widest uppercase"
            >
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-white/40" aria-hidden="true" />
                <span className="text-neutral-400 font-medium tracking-widest">
                  {contactCTAConfig.closingMicrocopy}
                </span>
              </div>
              <div className="flex items-center gap-4 text-neutral-600">
                <span>AERVENLABS // INVITATION</span>
                <span>HUMAN COLLABORATION</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
