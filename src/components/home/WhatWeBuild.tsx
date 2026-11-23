import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Code, Server, Smartphone, Globe, Shield, Sparkles } from 'lucide-react';
import { capabilitiesData, capabilitiesSectionConfig } from '../../data/capabilities';
import { Capability } from '../../types';

export const WhatWeBuild: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const activeCapability: Capability = capabilitiesData[activeTab] || capabilitiesData[0];

  const icons = [Code, Globe, Smartphone, Server, Shield, Sparkles];

  return (
    <section
      id="what-we-build"
      aria-labelledby="what-we-build-title"
      className="relative overflow-hidden bg-[#F7F8FA] border-b border-[#E6E9EF] py-20 sm:py-28 lg:py-32"
    >
      <div className="container-architectural relative z-10 w-full space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="grid-architectural items-start gap-8">
          <div className="lg:col-span-4 space-y-2">
            <div className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#315EFA]" />
              <span className="text-eyebrow font-mono text-xs font-semibold tracking-wider text-[#315EFA]">
                {capabilitiesSectionConfig.eyebrow}
              </span>
            </div>
            <p className="text-xs font-mono uppercase tracking-widest text-[#667085]">
              {capabilitiesSectionConfig.metaLabel}
            </p>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <h2
              id="what-we-build-title"
              className="text-heading-1 sm:text-display-sm font-bold tracking-tight text-[#101828] leading-tight"
            >
              {capabilitiesSectionConfig.headline}
            </h2>
            <p className="text-base sm:text-lg text-[#667085] max-w-2xl font-sans">
              {capabilitiesSectionConfig.description}
            </p>
          </div>
        </div>

        {/* Interactive Capability Architecture Display */}
        <div className="grid-architectural items-start gap-8 lg:gap-12">
          {/* Left: Capability List Navigator */}
          <div className="lg:col-span-5 space-y-2.5">
            <span className="text-xs font-mono uppercase tracking-widest text-[#98A2B3] block pb-1">
              ENGINEERING DISCIPLINES //
            </span>
            <div className="space-y-2" role="tablist" aria-label="Capabilities tabs">
              {capabilitiesData.map((cap, index) => {
                const IconComponent = icons[index % icons.length];
                const isActive = activeTab === index;
                return (
                  <button
                    key={cap.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveTab(index)}
                    className={`w-full text-left p-4 rounded-[10px] border transition-all duration-200 flex items-center justify-between group outline-none focus-visible:ring-2 focus-visible:ring-[#315EFA] ${
                      isActive
                        ? 'bg-white border-[#315EFA] shadow-sm'
                        : 'bg-white/60 hover:bg-white border-[#E6E9EF] text-[#667085]'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`p-2 rounded-[6px] transition-colors ${
                          isActive
                            ? 'bg-[#DCE5FF] text-[#315EFA]'
                            : 'bg-[#F7F8FA] text-[#667085] group-hover:text-[#101828]'
                        }`}
                      >
                        <IconComponent className="h-4 w-4" />
                      </div>
                      <div className="space-y-0.5">
                        <span
                          className={`font-semibold text-sm block transition-colors ${
                            isActive ? 'text-[#101828]' : 'text-[#667085] group-hover:text-[#101828]'
                          }`}
                        >
                          {cap.title}
                        </span>
                        <span className="font-mono text-[11px] text-[#98A2B3]">
                          {cap.discipline}
                        </span>
                      </div>
                    </div>

                    <ArrowRight
                      className={`h-4 w-4 transition-transform ${
                        isActive
                          ? 'text-[#315EFA] translate-x-0.5'
                          : 'text-[#D0D5DD] opacity-0 group-hover:opacity-100'
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Active Capability Detailed Showcase Card */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCapability.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 sm:p-10 rounded-[16px] bg-white border border-[#E6E9EF] shadow-md shadow-[#101828]/04 space-y-6"
              >
                {/* Top Bezel */}
                <div className="flex items-center justify-between border-b border-[#E6E9EF] pb-4">
                  <div className="flex items-center gap-2 font-mono text-xs text-[#315EFA] font-semibold">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#315EFA]" />
                    <span>{activeCapability.systemCode}</span>
                  </div>
                  <span className="font-mono text-[10px] text-[#667085] bg-[#F7F8FA] px-2.5 py-1 rounded-[4px] border border-[#E6E9EF]">
                    {activeCapability.category}
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-heading-2 font-bold text-[#101828]">
                    {activeCapability.title}
                  </h3>
                  <p className="text-xs font-mono text-[#315EFA]">
                    {activeCapability.tagline}
                  </p>
                  <p className="text-base text-[#667085] leading-relaxed font-sans pt-1">
                    {activeCapability.description}
                  </p>
                </div>

                {/* Approved Technologies */}
                <div className="pt-4 border-t border-[#E6E9EF] space-y-3">
                  <span className="font-mono text-xs font-semibold text-[#101828] uppercase tracking-wider block">
                    PROVEN STACK & ARCHITECTURE //
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeCapability.technologies?.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-[6px] bg-[#F7F8FA] border border-[#E6E9EF] font-mono text-xs text-[#101828]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Verification Label */}
                <div className="pt-2 flex items-center justify-between text-xs font-mono text-[#98A2B3]">
                  <span>DISCIPLINE SPECIFICATION</span>
                  <span>AERVENLABS // PRODUCTION-READY</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeBuild;
