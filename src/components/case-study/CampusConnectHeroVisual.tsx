import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  GraduationCap, 
  QrCode, 
  IdCard, 
  Award, 
  ShieldCheck, 
  Building2, 
  Layers,
  Cpu
} from 'lucide-react';

interface SystemNode {
  id: string;
  name: string;
  code: string;
  position: 'top' | 'left' | 'right' | 'mid-left' | 'mid-right' | 'bottom' | 'center';
  role: string;
  sublabel: string;
  icon: React.ElementType;
}

const NODES: SystemNode[] = [
  {
    id: 'academics',
    name: 'ACADEMICS',
    code: 'NODE_03',
    position: 'top',
    role: 'Curriculum & Grading',
    sublabel: 'Timetables, assignments, exam marks, and SGPA calculation',
    icon: GraduationCap,
  },
  {
    id: 'attendance',
    name: 'ATTENDANCE',
    code: 'NODE_01',
    position: 'left',
    role: 'Session Verification',
    sublabel: 'Dynamic 10-min QR, OTP fallback & live faculty rosters',
    icon: QrCode,
  },
  {
    id: 'identity',
    name: 'IDENTITY',
    code: 'NODE_02',
    position: 'right',
    role: 'Digital Student ID',
    sublabel: 'Optical hologram, roll number, and dynamic security QR',
    icon: IdCard,
  },
  {
    id: 'engagement',
    name: 'ENGAGEMENT',
    code: 'NODE_05',
    position: 'mid-left',
    role: 'Gamification Layer',
    sublabel: 'Points ledger, daily streaks, leaderboards & reward tiers',
    icon: Award,
  },
  {
    id: 'credentials',
    name: 'CREDENTIALS',
    code: 'NODE_04',
    position: 'mid-right',
    role: 'Public Verification',
    sublabel: 'Zero-login public route /verify/:ref with crypto references',
    icon: ShieldCheck,
  },
  {
    id: 'administration',
    name: 'ADMINISTRATION',
    code: 'NODE_08',
    position: 'bottom',
    role: 'Institutional Engine',
    sublabel: 'Multi-tenant RLS, departments, promotions & compliance',
    icon: Building2,
  },
];

export const CampusConnectHeroVisual: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <div className="relative w-full rounded-[2px] border border-border-subtle bg-black/90 p-5 sm:p-8 lg:p-10 overflow-hidden select-none">
      {/* Background Architectural Grid */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.06] select-none"
        aria-hidden="true"
      >
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      {/* Top Telemetry Header */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] pb-4 text-[10px] sm:text-xs font-mono text-neutral-400">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-40" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
          </span>
          <span className="text-white font-semibold tracking-wider uppercase">
            SYS_TOPOLOGY // OPERATING_LAYER_MATRIX
          </span>
        </div>
        <div className="flex items-center gap-4 text-neutral-500">
          <span>RLS_ISOLATION // ACTIVE</span>
          <span className="hidden sm:inline">NODES // 06 OPERATIONAL</span>
          <span className="text-white bg-white/10 px-2 py-0.5 rounded-[2px]">CORE v1.0.0</span>
        </div>
      </div>

      {/* Corner Coordinate Crosshairs */}
      <div className="relative z-10 flex justify-between py-2 text-[10px] font-mono text-neutral-600" aria-hidden="true">
        <span>+ [COORDS_NW: 01.00]</span>
        <span>+ [COORDS_NE: 01.00]</span>
      </div>

      {/* Main Architectural Topology Diagram */}
      <div className="relative z-10 my-4 sm:my-8">
        {/* Desktop / Tablet Diagram View (min-width: 768px) */}
        <div className="hidden md:block relative max-w-3xl mx-auto h-[480px]">
          {/* SVG Connecting Circuit Busses */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 768 480"
            fill="none"
            aria-hidden="true"
          >
            {/* Vertical Bus: Top to Center to Mid-Junction to Bottom */}
            <line x1="384" y1="60" x2="384" y2="420" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="3 3" />
            
            {/* Horizontal Bus: Attendance to Campus Connect to Identity */}
            <line x1="140" y1="180" x2="628" y2="180" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="1.5" />
            
            {/* Horizontal Sub-Bus: Engagement to Junction to Credentials */}
            <line x1="180" y1="310" x2="588" y2="310" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="4 4" />

            {/* Junction Points */}
            <circle cx="384" cy="180" r="4" fill="#ffffff" />
            <circle cx="384" cy="310" r="3" fill="#ffffff" fillOpacity="0.6" />
            <circle cx="384" cy="60" r="3" fill="#ffffff" fillOpacity="0.6" />
            <circle cx="384" cy="420" r="3" fill="#ffffff" fillOpacity="0.6" />
            <circle cx="140" cy="180" r="3" fill="#ffffff" fillOpacity="0.6" />
            <circle cx="628" cy="180" r="3" fill="#ffffff" fillOpacity="0.6" />

            {/* Animated Data Packets along horizontal bus */}
            {!prefersReducedMotion && (
              <>
                <motion.circle
                  cx="384"
                  cy="180"
                  r="2"
                  fill="#ffffff"
                  animate={{ cx: [384, 140, 384] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                />
                <motion.circle
                  cx="384"
                  cy="180"
                  r="2"
                  fill="#ffffff"
                  animate={{ cx: [384, 628, 384] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'linear' }}
                />
                <motion.circle
                  cx="384"
                  cy="180"
                  r="2"
                  fill="#ffffff"
                  animate={{ cy: [60, 180, 420] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                />
              </>
            )}
          </svg>

          {/* Node 1: ACADEMICS (Top) */}
          <div 
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-64"
            onMouseEnter={() => setActiveNode('academics')}
            onMouseLeave={() => setActiveNode(null)}
          >
            <div className={`p-3 rounded-[2px] border transition-all duration-200 text-center ${
              activeNode === 'academics' 
                ? 'bg-neutral-900 border-white text-white shadow-sm' 
                : 'bg-black/90 border-white/20 text-neutral-300 hover:border-white/50'
            }`}>
              <div className="flex items-center justify-center gap-1.5 text-[10px] font-mono text-neutral-400">
                <GraduationCap className="h-3.5 w-3.5 text-white" />
                <span>NODE_03 // ACADEMICS</span>
              </div>
              <p className="mt-1 text-xs font-semibold tracking-wide text-white uppercase">Curriculum & Grading</p>
              <p className="text-[10px] font-mono text-neutral-400">Timetables · Results · GPA</p>
            </div>
          </div>

          {/* Node 2: ATTENDANCE (Left) */}
          <div 
            className="absolute top-[138px] left-2 w-60"
            onMouseEnter={() => setActiveNode('attendance')}
            onMouseLeave={() => setActiveNode(null)}
          >
            <div className={`p-3 rounded-[2px] border transition-all duration-200 ${
              activeNode === 'attendance' 
                ? 'bg-neutral-900 border-white text-white shadow-sm' 
                : 'bg-black/90 border-white/20 text-neutral-300 hover:border-white/50'
            }`}>
              <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400">
                <span className="flex items-center gap-1.5">
                  <QrCode className="h-3.5 w-3.5 text-white" />
                  <span>NODE_01</span>
                </span>
                <span className="text-[9px] text-neutral-500 font-mono">10-MIN TOKEN</span>
              </div>
              <p className="mt-1 text-xs font-semibold tracking-wide text-white uppercase">ATTENDANCE</p>
              <p className="text-[10px] font-mono text-neutral-400">Dynamic QR · 6-Digit OTP</p>
            </div>
          </div>

          {/* CENTRAL NODE: CAMPUS CONNECT CORE */}
          <div className="absolute top-[132px] left-1/2 -translate-x-1/2 w-72">
            <div className="relative p-5 rounded-[2px] border-2 border-white bg-neutral-950 text-center shadow-[0_0_24px_rgba(255,255,255,0.06)]">
              {/* Subtle top indicator */}
              <div className="flex items-center justify-center gap-2 text-[10px] font-mono text-neutral-400 uppercase tracking-widest pb-1 border-b border-white/10">
                <Cpu className="h-3 w-3 text-white" />
                <span>OPERATING LAYER CORE</span>
              </div>

              <div className="py-2">
                <h4 className="text-base sm:text-lg font-bold tracking-tight text-white uppercase font-sans">
                  CAMPUS CONNECT
                </h4>
                <p className="text-[10px] font-mono text-neutral-300 tracking-wider uppercase mt-0.5">
                  CENTRAL OPERATING SYSTEM
                </p>
              </div>

              <div className="flex items-center justify-between pt-1 border-t border-white/10 text-[9px] font-mono text-neutral-400">
                <span>MULTI-TENANT RLS</span>
                <span className="text-white">v1.0.0 PROD</span>
              </div>
            </div>
          </div>

          {/* Node 3: IDENTITY (Right) */}
          <div 
            className="absolute top-[138px] right-2 w-60"
            onMouseEnter={() => setActiveNode('identity')}
            onMouseLeave={() => setActiveNode(null)}
          >
            <div className={`p-3 rounded-[2px] border transition-all duration-200 ${
              activeNode === 'identity' 
                ? 'bg-neutral-900 border-white text-white shadow-sm' 
                : 'bg-black/90 border-white/20 text-neutral-300 hover:border-white/50'
            }`}>
              <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400">
                <span className="flex items-center gap-1.5">
                  <IdCard className="h-3.5 w-3.5 text-white" />
                  <span>NODE_02</span>
                </span>
                <span className="text-[9px] text-neutral-500 font-mono">OPTICAL HOLO</span>
              </div>
              <p className="mt-1 text-xs font-semibold tracking-wide text-white uppercase">DIGITAL IDENTITY</p>
              <p className="text-[10px] font-mono text-neutral-400">Smart Student ID · Token</p>
            </div>
          </div>

          {/* Node 4: ENGAGEMENT (Mid-Left) */}
          <div 
            className="absolute top-[275px] left-12 w-60"
            onMouseEnter={() => setActiveNode('engagement')}
            onMouseLeave={() => setActiveNode(null)}
          >
            <div className={`p-3 rounded-[2px] border transition-all duration-200 ${
              activeNode === 'engagement' 
                ? 'bg-neutral-900 border-white text-white shadow-sm' 
                : 'bg-black/90 border-white/20 text-neutral-300 hover:border-white/50'
            }`}>
              <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400">
                <span className="flex items-center gap-1.5">
                  <Award className="h-3.5 w-3.5 text-white" />
                  <span>NODE_05</span>
                </span>
                <span className="text-[9px] text-neutral-500 font-mono">4 REWARD TIERS</span>
              </div>
              <p className="mt-1 text-xs font-semibold tracking-wide text-white uppercase">ENGAGEMENT</p>
              <p className="text-[10px] font-mono text-neutral-400">Points · Streaks · Core Badge</p>
            </div>
          </div>

          {/* Node 5: CREDENTIALS (Mid-Right) */}
          <div 
            className="absolute top-[275px] right-12 w-60"
            onMouseEnter={() => setActiveNode('credentials')}
            onMouseLeave={() => setActiveNode(null)}
          >
            <div className={`p-3 rounded-[2px] border transition-all duration-200 ${
              activeNode === 'credentials' 
                ? 'bg-neutral-900 border-white text-white shadow-sm' 
                : 'bg-black/90 border-white/20 text-neutral-300 hover:border-white/50'
            }`}>
              <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-white" />
                  <span>NODE_04</span>
                </span>
                <span className="text-[9px] text-neutral-500 font-mono">ZERO-AUTH</span>
              </div>
              <p className="mt-1 text-xs font-semibold tracking-wide text-white uppercase">CREDENTIALS</p>
              <p className="text-[10px] font-mono text-neutral-400">/verify/:ref · Public Auth</p>
            </div>
          </div>

          {/* Node 6: ADMINISTRATION (Bottom) */}
          <div 
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72"
            onMouseEnter={() => setActiveNode('administration')}
            onMouseLeave={() => setActiveNode(null)}
          >
            <div className={`p-3 rounded-[2px] border transition-all duration-200 text-center ${
              activeNode === 'administration' 
                ? 'bg-neutral-900 border-white text-white shadow-sm' 
                : 'bg-black/90 border-white/20 text-neutral-300 hover:border-white/50'
            }`}>
              <div className="flex items-center justify-center gap-1.5 text-[10px] font-mono text-neutral-400">
                <Building2 className="h-3.5 w-3.5 text-white" />
                <span>NODE_08 // ADMINISTRATION</span>
              </div>
              <p className="mt-1 text-xs font-semibold tracking-wide text-white uppercase">Institutional Governance</p>
              <p className="text-[10px] font-mono text-neutral-400">Tenants · Classes · Batch Promotions</p>
            </div>
          </div>
        </div>

        {/* Mobile Diagram View (< 768px): Vertical System Circuit */}
        <div className="block md:hidden space-y-3">
          {/* Mobile Central Core Banner */}
          <div className="p-4 rounded-[2px] border-2 border-white bg-neutral-950 text-center">
            <div className="flex items-center justify-center gap-2 text-[10px] font-mono text-neutral-400 uppercase tracking-widest pb-1 border-b border-white/10">
              <Cpu className="h-3.5 w-3.5 text-white" />
              <span>CENTRAL OPERATING SYSTEM</span>
            </div>
            <h4 className="text-lg font-bold tracking-tight text-white uppercase mt-2">
              CAMPUS CONNECT
            </h4>
            <p className="text-xs font-mono text-neutral-400">UNIFIED INSTITUTIONAL NERVOUS SYSTEM</p>
            <div className="mt-3 pt-2 border-t border-white/10 flex justify-between text-[10px] font-mono text-neutral-400">
              <span>MULTI-TENANT RLS</span>
              <span className="text-white">VERSION 1.0.0</span>
            </div>
          </div>

          {/* Mobile Node Cards with Visual Connecting Spines */}
          <div className="relative pl-6 space-y-2.5 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-[1px] before:bg-white/20">
            {NODES.map((node) => {
              const Icon = node.icon;
              return (
                <div 
                  key={node.id}
                  className="relative p-3 rounded-[2px] border border-white/15 bg-neutral-900/60"
                >
                  <span className="absolute -left-[19px] top-4 h-2 w-2 rounded-full border border-white bg-black" />
                  <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400">
                    <span className="flex items-center gap-1.5 text-white">
                      <Icon className="h-3.5 w-3.5 text-neutral-300" />
                      <span className="font-semibold">{node.name}</span>
                    </span>
                    <span className="text-[9px] text-neutral-500">{node.code}</span>
                  </div>
                  <p className="text-xs text-neutral-300 mt-1">{node.role}</p>
                  <p className="text-[10px] font-mono text-neutral-500 mt-0.5">{node.sublabel}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Telemetry Footer */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 border-t border-white/[0.08] pt-4 text-[10px] font-mono text-neutral-500">
        <div className="flex items-center gap-3">
          <span>AERVENLABS ARCHITECTURAL CORE // PRODUCTION RELEASE</span>
          <span className="hidden sm:inline">|</span>
          <span className="hidden sm:inline">SHA256_INTEGRITY_VERIFIED</span>
        </div>
        <div className="flex items-center gap-2 text-neutral-400">
          <Layers className="h-3 w-3 text-neutral-400" />
          <span>ZERO-LEAK TENANT SCOPING</span>
        </div>
      </div>
    </div>
  );
};
