import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Mail, Send } from 'lucide-react';
import { contactCTAConfig } from '../../data/company';

/**
 * Section 11: Contact CTA.
 * Headline: "Have an Idea Worth Building?"
 * Description: "Let's turn ambitious ideas into meaningful technology."
 * CTA: Start a Conversation.
 */
export const ContactCTA: React.FC = () => {
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <section
      id="contact-cta"
      aria-labelledby="contact-cta-title"
      className="relative overflow-hidden bg-[#F7F8FA] py-20 sm:py-28 lg:py-36 border-b border-[#E6E9EF]"
    >
      <div className="container-architectural relative z-10 w-full">
        <div className="p-8 sm:p-14 lg:p-16 rounded-[20px] bg-white border border-[#E6E9EF] shadow-lg shadow-[#101828]/04 space-y-10">
          <div className="grid-architectural items-center gap-10">
            {/* Left Narrative */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#315EFA]" />
                <span className="text-eyebrow font-mono text-xs font-semibold tracking-wider text-[#315EFA]">
                  {contactCTAConfig.eyebrow}
                </span>
              </div>

              <div className="space-y-3">
                <h2
                  id="contact-cta-title"
                  className="text-heading-1 sm:text-display-sm lg:text-display font-bold tracking-tight text-[#101828] leading-[1.05]"
                >
                  {contactCTAConfig.headline}
                </h2>
                <p className="text-lg sm:text-xl font-medium text-[#315EFA]">
                  Let's turn ambitious ideas into meaningful technology.
                </p>
                <p className="text-base text-[#667085] leading-relaxed font-sans max-w-2xl pt-1">
                  {contactCTAConfig.supportingCopy}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to={contactCTAConfig.ctaHref}
                  className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#101828] hover:bg-[#315EFA] text-white font-medium text-sm rounded-[8px] transition-all shadow-md shadow-[#101828]/10 active:scale-[0.98]"
                >
                  <span>{contactCTAConfig.ctaText}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <a
                  href={`mailto:${contactCTAConfig.email}`}
                  className="inline-flex items-center gap-2 px-6 py-4 bg-[#F7F8FA] hover:bg-[#F1F3F6] text-[#101828] border border-[#E6E9EF] font-medium text-sm rounded-[8px] transition-colors"
                >
                  <Mail className="h-4 w-4 text-[#315EFA]" />
                  <span>{contactCTAConfig.email}</span>
                </a>
              </div>
            </div>

            {/* Right Quick Telemetry */}
            <div className="lg:col-span-4 p-6 rounded-[12px] bg-[#F7F8FA] border border-[#E6E9EF] space-y-4">
              <span className="font-mono text-xs font-semibold text-[#101828] uppercase tracking-wider block">
                COMMUNICATION DISPATCH //
              </span>
              <div className="space-y-2 text-xs font-mono text-[#667085]">
                <div className="flex justify-between py-1 border-b border-[#E6E9EF]">
                  <span>RESPONSE TIME</span>
                  <span className="text-[#101828] font-semibold">24–48 HOURS</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#E6E9EF]">
                  <span>TIMEZONE</span>
                  <span className="text-[#101828] font-semibold">IST (UTC+05:30)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#E6E9EF]">
                  <span>INQUIRY CHANNELS</span>
                  <span className="text-[#315EFA] font-semibold">EMAIL & FORM</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>CONFIDENTIALITY</span>
                  <span className="text-[#101828] font-semibold">GUARANTEED</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-[#E6E9EF] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#98A2B3]">
            <span>{contactCTAConfig.closingMicrocopy}</span>
            <span>AERVENLABS TECHNOLOGIES PVT. LTD.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
