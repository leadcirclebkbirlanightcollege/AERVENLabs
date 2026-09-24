import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Check, 
  ChevronRight, 
  Terminal, 
  QrCode, 
  IdCard, 
  GraduationCap, 
  ShieldCheck, 
  Award, 
  Briefcase, 
  Bell, 
  Building2 
} from 'lucide-react';
import { CaseStudySystemModule } from '../../types';

interface SystemModulesExplorerProps {
  systems: CaseStudySystemModule[];
}

const SYSTEM_ICONS: Record<string, React.ElementType> = {
  attendance: QrCode,
  identity: IdCard,
  academics: GraduationCap,
  credentials: ShieldCheck,
  engagement: Award,
  ecell: Briefcase,
  communication: Bell,
  operations: Building2,
};

export const SystemModulesExplorer: React.FC<SystemModulesExplorerProps> = ({ systems }) => {
  const [selectedId, setSelectedId] = useState<string>(systems[0]?.id || 'attendance');

  const selectedSystem = systems.find((s) => s.id === selectedId) || systems[0];

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <div className="space-y-8">
      {/* Editorial Navigation Tabs */}
      <div 
        role="tablist" 
        aria-label="Campus Connect Systems" 
        className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-border-subtle"
      >
        {systems.map((system) => {
          const isSelected = system.id === selectedId;
          const Icon = SYSTEM_ICONS[system.id] || Terminal;
          return (
            <button
              key={system.id}
              role="tab"
              aria-selected={isSelected}
              aria-controls={`system-panel-${system.id}`}
              id={`system-tab-${system.id}`}
              onClick={() => setSelectedId(system.id)}
              className={`group flex items-center gap-2.5 px-4 py-2.5 text-xs font-mono rounded-[2px] transition-all whitespace-nowrap min-h-[44px] ${
                isSelected
                  ? 'bg-white text-black font-semibold'
                  : 'text-neutral-400 hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              <Icon className={`h-3.5 w-3.5 ${isSelected ? 'text-black' : 'text-neutral-400 group-hover:text-white'}`} />
              <span>{system.number} // {system.name.split(' ')[0]}</span>
            </button>
          );
        })}
      </div>

      {/* Selected System Editorial Detail Dossier */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedSystem.id}
          id={`system-panel-${selectedSystem.id}`}
          role="tabpanel"
          aria-labelledby={`system-tab-${selectedSystem.id}`}
          initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : -8 }}
          transition={{ duration: 0.25 }}
          className="surface-level-1 border border-border-subtle rounded-[2px] p-6 sm:p-8 lg:p-10 space-y-8"
        >
          {/* Top Dossier Header */}
          <div className="flex flex-wrap items-start justify-between gap-4 border-b border-border-subtle pb-6">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-tech-label text-neutral-400 font-mono">
                  OPERATIONAL LAYER // {selectedSystem.number}
                </span>
                <span className="h-3 w-[1px] bg-white/20" aria-hidden="true" />
                <span className="px-2 py-0.5 text-[10px] font-mono text-neutral-300 bg-white/5 border border-white/10 rounded-[2px]">
                  IMPLEMENTED
                </span>
              </div>
              <h3 className="text-heading-2 font-bold tracking-tight text-white uppercase">
                {selectedSystem.name}
              </h3>
              <p className="text-sm font-mono text-neutral-400">
                {selectedSystem.tagline}
              </p>
            </div>

            <div className="hidden sm:flex items-center gap-2 text-neutral-500 font-mono text-xs">
              <Terminal className="h-4 w-4" />
              <span>SYS_ID: {selectedSystem.id.toUpperCase()}</span>
            </div>
          </div>

          {/* Description & Overview */}
          <div className="max-w-3xl">
            <p className="text-base sm:text-lg text-secondary-text leading-relaxed font-sans">
              {selectedSystem.description}
            </p>
          </div>

          {/* Capabilities Grid */}
          <div className="space-y-4">
            <h4 className="text-tech-label text-white font-mono tracking-wider">
              DOCUMENTED CAPABILITIES //
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {selectedSystem.capabilities.map((capability, idx) => (
                <div
                  key={idx}
                  className="surface-level-2 p-3.5 rounded-[2px] border border-border-subtle flex items-start gap-3"
                >
                  <div className="mt-0.5 h-4 w-4 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-white">
                    <Check className="h-2.5 w-2.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-neutral-300 font-sans leading-snug">
                    {capability}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Implementation Highlights */}
          {selectedSystem.technicalHighlights && selectedSystem.technicalHighlights.length > 0 && (
            <div className="pt-4 border-t border-border-subtle space-y-3">
              <span className="text-tech-label text-neutral-400 font-mono block">
                TECHNICAL PROTOCOLS & INTEGRITY //
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedSystem.technicalHighlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-[2px] bg-black border border-white/15 text-[11px] font-mono text-neutral-300"
                  >
                    <ChevronRight className="h-3 w-3 text-neutral-500" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
