import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  QrCode,
  IdCard,
  GraduationCap,
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles,
  Bell,
  Building2,
  CheckCircle2,
} from 'lucide-react';

interface SubsystemModule {
  id: string;
  code: string;
  title: string;
  layer: string;
  summary: string;
  capabilities: string[];
  techSpec: string;
  icon: React.ElementType;
}

const SUBSYSTEM_MODULES: SubsystemModule[] = [
  {
    id: 'attendance',
    code: '01',
    title: 'ATTENDANCE INFRASTRUCTURE',
    layer: 'TIMING-SAFE SESSION LOGGING',
    summary:
      'Dynamic 10-minute rotating QR codes with 6-digit OTP fallback. Live real-time faculty attendance roster synchronization and automated monthly statutory attendance register compilation.',
    capabilities: [
      '10-Minute Dynamic Rotating QR Codes',
      '6-Digit OTP Low-Connectivity Fallback',
      'Real-Time Live Faculty Attendance Roster',
      'Automated Monthly Statutory Registers',
      'Granular Manual Overrides with Audit Logging',
    ],
    techSpec: 'Timing-Safe Tokens · PostgreSQL Stored Procedures · WebSocket Presence',
    icon: QrCode,
  },
  {
    id: 'identity',
    code: '02',
    title: 'DIGITAL STUDENT IDENTITY',
    layer: 'VERIFIED CREDENTIAL ENGINE',
    summary:
      'High-fidelity digital student identity replacing physical cards. Features client-rendered optical security hologram and dynamic verification QR token with Google Drive API storage.',
    capabilities: [
      'Smart Digital Student ID with Dynamic QR',
      'Client-Side Optical Security Hologram',
      'Academic Programme, Cohort & Roll Number',
      'Tenant-Scoped Secure Photo Storage (Drive API)',
      'Emergency Contact & Blood Group Telemetry',
    ],
    techSpec: 'Optical Hologram Layer · Signed Payload · Google Drive Enterprise API',
    icon: IdCard,
  },
  {
    id: 'academics',
    code: '03',
    title: 'ACADEMIC OPERATIONS',
    layer: 'CURRICULUM & EVALUATION ENGINE',
    summary:
      'End-to-end academic lifecycle engine managing daily course timetables, digital coursework submissions, internal exams, and automated SGPA/CGPA compilation across cohorts.',
    capabilities: [
      'Interactive Timetable Matrix & Faculty Mapping',
      'Coursework Publishing & Digital Submissions',
      'Internal & Semester Examination Marks',
      'Automated SGPA & Cumulative CGPA Engine',
      'Batch Cohort Promotion Transaction Engine',
    ],
    techSpec: 'Multi-Year Transaction Integrity · RLS Partitioning · Grading Scale Matrices',
    icon: GraduationCap,
  },
  {
    id: 'credentials',
    code: '04',
    title: 'PUBLIC CREDENTIAL VERIFICATION',
    layer: 'ZERO-AUTH TRUST PROTOCOL',
    summary:
      'Public document validation portal enabling employers and background verifiers to authenticate certificates and records at /verify/:reference with zero login requirements.',
    capabilities: [
      'Zero-Login Public Verification Route (/verify/:ref)',
      'Unique Cryptographic Credential References',
      'Tamper-Evident Authenticity Confirmation',
      'Complete Prevention of Student PII Exposure',
      'Scannable QR Codes Embedded into Certificates',
    ],
    techSpec: 'Public Read-Only RLS · Rate-Limited Edge API · Cryptographic Hash Reference',
    icon: ShieldCheck,
  },
  {
    id: 'engagement',
    code: '05',
    title: 'STUDENT ENGAGEMENT',
    layer: 'INCENTIVE & MOTIVATION LAYER',
    summary:
      'Audited ledger converting campus participation into verified progression. Features daily check-in streaks with anti-cheat protection, tiered reward badges, and leaderboards.',
    capabilities: [
      'Audited Points Ledger & Activity Logging',
      'Dynamic Class & Institutional Leaderboards',
      'Daily Attendance Streaks & Streak Protection',
      'Tiered Ranks (Bronze, Silver, Gold, Elite)',
      'Core Member Distinction for Top Contributors',
    ],
    techSpec: 'PostgreSQL Event Triggers · Anti-Cheat Rules · TanStack Query Caching',
    icon: Sparkles,
  },
  {
    id: 'communication',
    code: '06',
    title: 'COMMUNICATION & ALERTS',
    layer: 'ENTERPRISE NOTIFICATION PIPELINE',
    summary:
      'Multi-channel broadcast architecture combining an in-app notification center with device-level Web Push notifications using VAPID ES256 encryption standards.',
    capabilities: [
      'In-App Notification Center with Read/Unread States',
      'Device-Level Web Push (VAPID ES256 Standards)',
      'Targeted Audience Scoping (Dept/Programme/Role)',
      'Administrative Priority Broadcast Announcements',
      'Zoho SMTP Institutional Transactional Pipeline',
    ],
    techSpec: 'Deno Edge Push Dispatcher · VAPID Key Cryptography · Service Worker Push',
    icon: Bell,
  },
  {
    id: 'operations',
    code: '07',
    title: 'INSTITUTIONAL ADMINISTRATION',
    layer: 'MULTI-TENANT GOVERNANCE',
    summary:
      'Enterprise administration managing departmental structures, faculty permissions, academic batch rollovers, compliance reports, and integrated support ticketing.',
    capabilities: [
      'True Multi-Tenant Isolation by college_id',
      'Department, Programme & Division Hierarchy',
      'Faculty Role-Based Access Control (RBAC)',
      'Statutory Attendance & Compliance Registers',
      'Integrated Multi-Tier Student Support Ticketing',
    ],
    techSpec: '62 PostgreSQL Tables · Database Engine RLS · Deno Edge Privilege Boundaries',
    icon: Building2,
  },
];

/**
 * CampusConnectArchitecturalVisual.
 * Abstract software architecture blueprint:
 * OPERATING CORE ───► [ATTENDANCE, IDENTITY, ACADEMICS, CREDENTIALS, ENGAGEMENT, COMMUNICATION, ADMINISTRATION]
 * Strictly monochrome, technical lines, system nodes, coordinate labels, telemetry.
 * Absolute zero GPS/map/navigation claims.
 */
export const CampusConnectArchitecturalVisual: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<string>('attendance');

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const activeModule =
    SUBSYSTEM_MODULES.find((m) => m.id === selectedNode) || SUBSYSTEM_MODULES[0];

  return (
    <div
      className="relative w-full rounded-[2px] border border-border-subtle bg-surface-dark overflow-hidden select-none"
      aria-labelledby="architectural-visual-title"
    >
      <h3 id="architectural-visual-title" className="sr-only">
        Campus Connect Operating System Architectural Specification Visual
      </h3>

      {/* Background Architectural Grid Lines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04] select-none"
        aria-hidden="true"
      >
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      {/* Top Telemetry Bezel Bar */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-border-subtle px-4 sm:px-6 py-3 bg-black/60 text-[11px] font-mono text-neutral-400">
        <div className="flex items-center gap-2.5">
          <span className="h-2 w-2 rounded-full bg-white" aria-hidden="true" />
          <span className="text-white font-semibold tracking-wider uppercase">
            ARCH_SPEC // CC_SYSTEM_BLUEPRINT
          </span>
          <span className="hidden sm:inline h-3 w-[1px] bg-white/15" aria-hidden="true" />
          <span className="hidden sm:inline text-neutral-500">
            ENTERPRISE CAMPUS OS
          </span>
        </div>

        <div className="flex items-center gap-3 sm:gap-5 text-neutral-500">
          <span className="hidden md:inline">RLS_ISOLATION // ENFORCED</span>
          <span className="hidden lg:inline">TENANT_KEY // college_id</span>
          <span className="px-2 py-0.5 font-mono text-[10px] text-white bg-neutral-900 border border-white/20 rounded-[2px]">
            VERSION // 1.0.0
          </span>
        </div>
      </div>

      {/* Coordinate Crosshairs NW / NE */}
      <div
        className="relative z-10 flex justify-between px-4 sm:px-6 pt-3 pb-1 text-[10px] font-mono text-neutral-600"
        aria-hidden="true"
      >
        <span>+ [SPEC_NW: 19.2183° N]</span>
        <span>+ [SPEC_NE: 72.9781° E]</span>
      </div>

      {/* Main Architectural Blueprint Canvas */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-4 sm:py-6 space-y-6">
        {/* Central Operating Core Node */}
        <div className="relative p-5 sm:p-6 rounded-[2px] border border-white/20 bg-black text-center">
          <div className="flex items-center justify-center gap-2 text-[10px] font-mono text-neutral-400 uppercase tracking-widest pb-2 border-b border-white/10">
            <Cpu className="h-3.5 w-3.5 text-white" aria-hidden="true" />
            <span>CENTRAL OPERATING SYSTEM CORE</span>
          </div>

          <div className="py-3 space-y-1">
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
            <span className="text-white">62 RELATIONAL TABLES</span>
          </div>
        </div>

        {/* Subsystem Telemetry Nodes Grid */}
        <div className="space-y-2.5">
          <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400">
            <span className="tracking-wider uppercase">
              INSPECT CORE ARCHITECTURAL MODULES //
            </span>
            <span className="text-neutral-600 hidden sm:inline">
              SELECT MODULE TO INSPECT SPECIFICATION
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5">
            {SUBSYSTEM_MODULES.map((subsystem) => {
              const Icon = subsystem.icon;
              const isSelected = selectedNode === subsystem.id;

              return (
                <button
                  key={subsystem.id}
                  type="button"
                  onClick={() => setSelectedNode(subsystem.id)}
                  aria-pressed={isSelected}
                  className={`group relative text-left p-3.5 rounded-[2px] border transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-white min-h-[48px] ${
                    isSelected
                      ? 'bg-neutral-900 border-white text-white'
                      : 'bg-black/60 border-white/10 text-neutral-300 hover:border-white/30 hover:bg-neutral-950'
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 pb-1.5 border-b border-white/10">
                    <span className="flex items-center gap-1.5 text-white font-semibold">
                      <Icon className="h-3 w-3 text-white shrink-0" aria-hidden="true" />
                      <span>NODE_{subsystem.code}</span>
                    </span>
                    <span
                      className={`text-[9px] font-mono ${
                        isSelected ? 'text-white' : 'text-neutral-500'
                      }`}
                    >
                      {isSelected ? 'INSPECTING' : 'ACTIVE'}
                    </span>
                  </div>

                  <div className="pt-2 space-y-0.5">
                    <p className="text-xs font-semibold tracking-wide text-white uppercase font-sans">
                      {subsystem.title}
                    </p>
                    <p className="text-[10px] font-mono text-neutral-400">
                      {subsystem.layer}
                    </p>
                  </div>

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

        {/* Selected Module Specification Readout */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeModule.id}
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="surface-level-2 border border-border-subtle p-4 sm:p-5 rounded-[2px] space-y-3.5"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border-subtle pb-2.5">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-white" aria-hidden="true" />
                <span className="text-tech-label text-white font-mono tracking-widest">
                  TELEMETRY // NODE_{activeModule.code} — {activeModule.title}
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
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Coordinate Crosshairs SW / SE */}
      <div
        className="relative z-10 flex justify-between px-4 sm:px-6 py-1 text-[10px] font-mono text-neutral-600"
        aria-hidden="true"
      >
        <span>+ [SPEC_SW: 309_TESTS]</span>
        <span>+ [SPEC_SE: ZERO_MAP_DEPENDENCY]</span>
      </div>

      {/* Bottom Telemetry Footer */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-t border-border-subtle px-4 sm:px-6 py-2.5 bg-black/60 text-[10px] font-mono text-neutral-500">
        <div className="flex items-center gap-2.5">
          <span>AERVENLABS TECHNOLOGIES // FLAGSHIP BLUEPRINT</span>
          <span className="hidden sm:inline">·</span>
          <span className="hidden sm:inline">62 RELATIONAL TABLES</span>
        </div>
        <div className="flex items-center gap-2 text-neutral-400">
          <Layers className="h-3 w-3 text-neutral-400" aria-hidden="true" />
          <span>ZERO-LEAK TENANT ISOLATION (RLS)</span>
        </div>
      </div>
    </div>
  );
};

export default CampusConnectArchitecturalVisual;
