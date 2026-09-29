import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  QrCode,
  IdCard,
  GraduationCap,
  ShieldCheck,
  Cpu,
  Layers,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

interface SubsystemModule {
  id: string;
  code: string;
  title: string;
  category: string;
  summary: string;
  capabilities: string[];
  techSpec: string;
  icon: React.ElementType;
}

const SUBSYSTEMS: SubsystemModule[] = [
  {
    id: 'attendance',
    code: 'NODE_01',
    title: 'ATTENDANCE INFRASTRUCTURE',
    category: 'TIMING-SAFE SESSION LOGGING',
    summary:
      'Dynamic 10-minute rotating QR codes with 6-digit OTP fallback. Live faculty roster synchronization and statutory monthly attendance register compilation.',
    capabilities: [
      '10-Minute Dynamic QR Code Sessions',
      '6-Digit OTP Fallback Protocol',
      'Real-Time Faculty Attendance Roster',
      'Statutory Monthly Attendance Registers',
    ],
    techSpec: 'Timing-Safe Tokens · PostgreSQL Stored Procedures',
    icon: QrCode,
  },
  {
    id: 'identity',
    code: 'NODE_02',
    title: 'DIGITAL STUDENT IDENTITY',
    category: 'VERIFIED CREDENTIAL SYSTEM',
    summary:
      'High-fidelity digital student identity replacing physical cards. Features client-rendered optical security hologram and dynamic verification QR token.',
    capabilities: [
      'Smart Digital Student ID with Dynamic QR',
      'Client-Side Optical Security Hologram',
      'Cohort, Division & Roll Number Verification',
      'Tenant-Scoped Secure Photo Storage',
    ],
    techSpec: 'Optical Hologram Layer · Tenant Scoped Media',
    icon: IdCard,
  },
  {
    id: 'academics',
    code: 'NODE_03',
    title: 'ACADEMIC OPERATIONS',
    category: 'CURRICULUM & EVALUATION ENGINE',
    summary:
      'End-to-end academic lifecycle engine managing daily course timetables, digital coursework submissions, internal exams, and automated SGPA/CGPA compilation.',
    capabilities: [
      'Interactive Timetable Matrix & Faculty Mapping',
      'Coursework Publishing & Digital Submissions',
      'Internal & Semester Examination Marks',
      'Automated SGPA & CGPA Calculation Engine',
    ],
    techSpec: 'Multi-Year Transaction Integrity · RLS Partitioning',
    icon: GraduationCap,
  },
  {
    id: 'credentials',
    code: 'NODE_04',
    title: 'PUBLIC CREDENTIAL VERIFICATION',
    category: 'ZERO-AUTH TRUST PROTOCOL',
    summary:
      'Public document validation portal enabling employers and background verifiers to authenticate certificates and records at /verify/:reference with zero credentials required.',
    capabilities: [
      'Zero-Login Public Verification Route',
      'Unique Cryptographic Credential References',
      'Tamper-Evident Authenticity Confirmation',
      'Zero Exposure of Non-Public Institutional Data',
    ],
    techSpec: 'Public Read-Only RLS · Rate-Limited Edge API',
    icon: ShieldCheck,
  },
];

export const CampusConnectArchitecturalVisual: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<string>('attendance');

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const activeModule =
    SUBSYSTEMS.find((m) => m.id === selectedNode) || SUBSYSTEMS[0];

  return (
    <div
      className="relative w-full rounded-[2px] border border-border-subtle bg-surface-dark/90 overflow-hidden select-none"
      aria-labelledby="architectural-visual-title"
    >
      <h3 id="architectural-visual-title" className="sr-only">
        Campus Connect Operating System Architectural Specification Visual
      </h3>

      {/* Background Architectural Grid Lines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05] select-none"
        aria-hidden="true"
      >
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:28px_28px]" />
      </div>

      {/* ============================================================== */}
      {/* TOP TELEMETRY BEZEL BAR                                        */}
      {/* ============================================================== */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-border-subtle px-4 sm:px-6 py-3.5 bg-black/60 backdrop-blur-sm text-[11px] font-mono text-neutral-400">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2" aria-hidden="true">
            {!prefersReducedMotion && (
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-40" />
            )}
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
          </span>
          <span className="text-white font-semibold tracking-wider uppercase">
            SYS_SPEC // ARCH_CC_01
          </span>
          <span className="hidden sm:inline h-3 w-[1px] bg-white/15" aria-hidden="true" />
          <span className="hidden sm:inline text-neutral-500">
            CAMPUS OPERATING SYSTEM
          </span>
        </div>

        <div className="flex items-center gap-3 sm:gap-5 text-neutral-500">
          <span className="hidden md:inline">RLS_ISOLATION // ACTIVE</span>
          <span className="hidden lg:inline">TENANT_SCOPED // college_id</span>
          <span className="px-2 py-0.5 font-mono text-[10px] text-white bg-neutral-900 border border-white/20 rounded-[2px]">
            CORE v1.0.0
          </span>
        </div>
      </div>

      {/* Coordinate Crosshairs NW / NE */}
      <div
        className="relative z-10 flex justify-between px-4 sm:px-6 pt-3 pb-1 text-[10px] font-mono text-neutral-600"
        aria-hidden="true"
      >
        <span>+ [SPEC_NW: 01.00]</span>
        <span>+ [SPEC_NE: 62_TABLES]</span>
      </div>

      {/* ============================================================== */}
      {/* MAIN ARCHITECTURAL BLUEPRINT CANVAS                            */}
      {/* ============================================================== */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-4 sm:py-6 space-y-6">
        {/* Central Nervous System Core Banner */}
        <div className="relative p-5 sm:p-6 rounded-[2px] border border-white/25 bg-neutral-950 text-center shadow-[0_0_32px_rgba(255,255,255,0.03)]">
          <div className="flex items-center justify-center gap-2 text-[10px] font-mono text-neutral-400 uppercase tracking-widest pb-1.5 border-b border-white/10">
            <Cpu className="h-3.5 w-3.5 text-white" aria-hidden="true" />
            <span>CENTRAL OPERATING SYSTEM CORE</span>
          </div>

          <div className="py-2.5 sm:py-3 space-y-1">
            <div className="font-sans text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white uppercase select-none">
              CAMPUS CONNECT
            </div>
            <p className="text-xs sm:text-sm font-mono text-neutral-400 tracking-wider uppercase">
              INSTITUTIONAL NERVOUS SYSTEM · MULTI-TENANT ARCHITECTURE
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-white/10 text-[10px] font-mono text-neutral-500">
            <span>POSTGRESQL 15+ RELATIONAL CORE</span>
            <span className="text-neutral-400">25 DENO EDGE FUNCTIONS</span>
            <span className="text-white">62 RLS TABLES</span>
          </div>
        </div>

        {/* Subsystem Nodes Grid (Interactive 4-Pillar Matrix) */}
        <div>
          <div className="flex items-center justify-between mb-3 text-[10px] font-mono text-neutral-400">
            <span className="tracking-wider uppercase">
              SELECT SUBSYSTEM NODE TO INSPECT TELEMETRY //
            </span>
            <span className="text-neutral-600 hidden sm:inline">
              CLICK OR FOCUS TO VIEW SPECIFICATION
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {SUBSYSTEMS.map((subsystem) => {
              const Icon = subsystem.icon;
              const isSelected = selectedNode === subsystem.id;

              return (
                <button
                  key={subsystem.id}
                  type="button"
                  onClick={() => setSelectedNode(subsystem.id)}
                  aria-pressed={isSelected}
                  className={`group relative text-left p-3.5 sm:p-4 rounded-[2px] border transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
                    isSelected
                      ? 'bg-neutral-900 border-white text-white shadow-sm'
                      : 'bg-black/70 border-white/15 text-neutral-300 hover:border-white/40 hover:bg-neutral-950'
                  }`}
                >
                  {/* Top indicator & code */}
                  <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 pb-2 border-b border-white/10">
                    <span className="flex items-center gap-1.5 text-white">
                      <Icon className="h-3.5 w-3.5 text-white shrink-0" aria-hidden="true" />
                      <span className="font-semibold">{subsystem.code}</span>
                    </span>
                    <span
                      className={`text-[9px] font-mono ${
                        isSelected ? 'text-white' : 'text-neutral-500'
                      }`}
                    >
                      {isSelected ? 'INSPECTING' : 'ACTIVE'}
                    </span>
                  </div>

                  {/* Title & Category */}
                  <div className="pt-2.5 space-y-1">
                    <p className="text-xs font-semibold tracking-wide text-white uppercase font-sans">
                      {subsystem.title}
                    </p>
                    <p className="text-[10px] font-mono text-neutral-400 leading-snug">
                      {subsystem.category}
                    </p>
                  </div>

                  {/* Active selection dot marker */}
                  {isSelected && (
                    <div
                      className="absolute bottom-1.5 right-2 h-1 w-1 bg-white rounded-full"
                      aria-hidden="true"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Node Architectural Specification Panel */}
        <div className="surface-level-2 border border-border-subtle p-4 sm:p-5 rounded-[2px] space-y-3.5">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border-subtle pb-2.5">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-white" aria-hidden="true" />
              <span className="text-tech-label text-white font-mono tracking-widest">
                TELEMETRY // {activeModule.code} — {activeModule.title}
              </span>
            </div>
            <span className="text-[10px] font-mono text-neutral-400">
              {activeModule.techSpec}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-secondary-text leading-relaxed font-sans">
            {activeModule.summary}
          </p>

          <div className="space-y-1.5 pt-1">
            <span className="text-[10px] font-mono text-neutral-500 tracking-wider uppercase block">
              ENGINEERED CAPABILITIES //
            </span>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2" role="list">
              {activeModule.capabilities.map((cap) => (
                <li
                  key={cap}
                  className="flex items-center gap-2 text-xs text-neutral-300 font-mono"
                >
                  <CheckCircle2 className="h-3 w-3 text-neutral-400 shrink-0" aria-hidden="true" />
                  <span>{cap}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Coordinate Crosshairs SW / SE */}
      <div
        className="relative z-10 flex justify-between px-4 sm:px-6 py-1 text-[10px] font-mono text-neutral-600"
        aria-hidden="true"
      >
        <span>+ [SPEC_SW: 25_FUNCTIONS]</span>
        <span>+ [SPEC_SE: ZERO_LEAK]</span>
      </div>

      {/* ============================================================== */}
      {/* BOTTOM TELEMETRY FOOTER                                        */}
      {/* ============================================================== */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-t border-border-subtle px-4 sm:px-6 py-3 bg-black/60 backdrop-blur-sm text-[10px] font-mono text-neutral-500">
        <div className="flex items-center gap-2.5">
          <span>AERVENLABS TECHNOLOGIES // SYS_ARCH_01</span>
          <span className="hidden sm:inline">·</span>
          <span className="hidden sm:inline">62 RELATIONAL TABLES</span>
        </div>
        <div className="flex items-center gap-2 text-neutral-400">
          <Layers className="h-3 w-3 text-neutral-400" aria-hidden="true" />
          <span>ZERO-LEAK TENANT SCOPING</span>
        </div>
      </div>
    </div>
  );
};

export default CampusConnectArchitecturalVisual;
