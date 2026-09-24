import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  User, 
  GraduationCap, 
  Building, 
  ShieldAlert, 
  CheckCircle2, 
  QrCode,
  ArrowRight
} from 'lucide-react';
import { CaseStudyRolePersona } from '../../types';

interface RoleArchitectureMatrixProps {
  personas: CaseStudyRolePersona[];
}

const ROLE_ICONS: Record<string, React.ElementType> = {
  STUDENT: User,
  FACULTY: GraduationCap,
  'INSTITUTIONAL ADMIN': Building,
  'PLATFORM OPERATOR': ShieldAlert,
  'PUBLIC VERIFIER': QrCode,
};

export const RoleArchitectureMatrix: React.FC<RoleArchitectureMatrixProps> = ({ personas }) => {
  const [selectedRole, setSelectedRole] = useState<string>(personas[0]?.role || 'STUDENT');

  const activePersona = personas.find((p) => p.role === selectedRole) || personas[0];

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <div className="space-y-8">
      {/* Role Selector Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
        {personas.map((persona) => {
          const isSelected = persona.role === selectedRole;
          const Icon = ROLE_ICONS[persona.role] || User;
          return (
            <button
              key={persona.role}
              onClick={() => setSelectedRole(persona.role)}
              aria-pressed={isSelected}
              className={`p-3.5 sm:p-4 rounded-[2px] border text-left transition-all min-h-[48px] flex flex-col justify-between ${
                isSelected
                  ? 'bg-white text-black border-white shadow-sm'
                  : 'bg-surface-dark border-border-subtle text-neutral-400 hover:text-white hover:border-white/40'
              }`}
            >
              <div className="flex items-center justify-between w-full mb-3">
                <Icon className={`h-4 w-4 ${isSelected ? 'text-black' : 'text-neutral-400'}`} />
                <span className={`text-[10px] font-mono ${isSelected ? 'text-neutral-700' : 'text-neutral-500'}`}>
                  {persona.role === 'PUBLIC VERIFIER' ? 'ZERO-AUTH' : 'AUTHENTICATED'}
                </span>
              </div>
              <div>
                <p className={`text-xs font-mono tracking-wider font-semibold uppercase ${
                  isSelected ? 'text-black' : 'text-white'
                }`}>
                  {persona.role}
                </p>
                <p className={`text-[11px] truncate mt-0.5 ${
                  isSelected ? 'text-neutral-700' : 'text-neutral-400'
                }`}>
                  {persona.title}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Role Detail Panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activePersona.role}
          initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : -8 }}
          transition={{ duration: 0.25 }}
          className="surface-level-1 border border-border-subtle rounded-[2px] p-6 sm:p-8 lg:p-10 space-y-6"
        >
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border-subtle pb-5">
            <div>
              <div className="flex items-center gap-2 text-tech-label text-neutral-400 font-mono">
                <span>ROLE SPECIFICATION //</span>
                <span className="text-white font-semibold">{activePersona.role}</span>
              </div>
              <h3 className="text-heading-2 font-bold text-white tracking-tight uppercase mt-1">
                {activePersona.title}
              </h3>
            </div>

            {activePersona.role === 'PUBLIC VERIFIER' ? (
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[2px] bg-black border border-white/30 text-xs font-mono text-white">
                <span>SCAN</span>
                <ArrowRight className="h-3 w-3 text-neutral-400" />
                <span>VERIFY</span>
                <ArrowRight className="h-3 w-3 text-neutral-400" />
                <span>AUTHENTICATE</span>
              </div>
            ) : (
              <div className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                <span>POSTGRESQL RLS ISOLATED</span>
              </div>
            )}
          </div>

          <p className="text-base text-secondary-text font-sans leading-relaxed max-w-3xl">
            {activePersona.description}
          </p>

          {/* Capabilities Grid */}
          <div className="space-y-3">
            <span className="text-tech-label text-white font-mono tracking-wider block">
              ROLE CAPABILITIES //
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {activePersona.capabilities.map((cap, idx) => (
                <div
                  key={idx}
                  className="surface-level-2 p-3 rounded-[2px] border border-border-subtle flex items-start gap-2.5"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-white mt-0.5 flex-shrink-0" />
                  <span className="text-xs text-neutral-300 font-sans">
                    {cap}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
