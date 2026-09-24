import React from 'react';
import { 
  Monitor, 
  Smartphone, 
  Globe, 
  Database, 
  Cpu, 
  ArrowDown, 
  HardDrive, 
  Bell, 
  Mail, 
  ScanLine 
} from 'lucide-react';
import { CaseStudyArchitectureLayer, CaseStudyTechStackGroup } from '../../types';

interface ArchitecturePipelineProps {
  layers: CaseStudyArchitectureLayer[];
  techStack: CaseStudyTechStackGroup[];
}

export const ArchitecturePipeline: React.FC<ArchitecturePipelineProps> = ({
  layers,
  techStack,
}) => {
  return (
    <div className="space-y-16">
      {/* Visual Architectural Dataflow Pipeline */}
      <div className="surface-level-1 border border-border-subtle rounded-[2px] p-6 sm:p-10 lg:p-12 space-y-10">
        {/* Pipeline Top Bezel */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border-subtle pb-4">
          <div className="flex items-center gap-2.5 text-tech-label font-mono">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            <span className="text-white font-semibold">INFRASTRUCTURE PIPELINE // TOPOLOGY</span>
          </div>
          <span className="text-tech-label text-neutral-500 font-mono">
            MULTI-LAYERED ISOLATION
          </span>
        </div>

        {/* 4-Stage Architectural Diagram */}
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Layer 1: Client Ingestion (Web PWA & Android) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="surface-level-2 border border-white/20 p-4 rounded-[2px] space-y-2">
              <div className="flex items-center justify-between text-neutral-400 font-mono text-xs">
                <span className="flex items-center gap-2 text-white">
                  <Monitor className="h-4 w-4" />
                  <span className="font-semibold">WEB / PWA</span>
                </span>
                <span className="text-[10px] text-neutral-500">WORKBOX CACHE</span>
              </div>
              <p className="text-xs text-neutral-400">
                React 18 SPA with offline Service Worker support and sub-second asset hydration.
              </p>
            </div>

            <div className="surface-level-2 border border-white/20 p-4 rounded-[2px] space-y-2">
              <div className="flex items-center justify-between text-neutral-400 font-mono text-xs">
                <span className="flex items-center gap-2 text-white">
                  <Smartphone className="h-4 w-4" />
                  <span className="font-semibold">ANDROID / CAPACITOR</span>
                </span>
                <span className="text-[10px] text-neutral-500">TARGET SDK 36</span>
              </div>
              <p className="text-xs text-neutral-400">
                Native bridge wrapper with compiled Release APK and Android App Bundle (AAB).
              </p>
            </div>
          </div>

          {/* Connection Vector 1 */}
          <div className="flex justify-center text-neutral-500 font-mono text-xs items-center gap-2">
            <div className="h-5 w-[1px] bg-white/20" />
            <ArrowDown className="h-4 w-4 text-white/40" />
            <div className="h-5 w-[1px] bg-white/20" />
          </div>

          {/* Layer 2: Edge Routing & CDN (Vercel) */}
          <div className="surface-level-2 border border-white/20 p-5 rounded-[2px] text-center max-w-xl mx-auto space-y-2">
            <div className="flex items-center justify-center gap-2 text-white font-mono text-xs font-semibold">
              <Globe className="h-4 w-4" />
              <span>VERCEL GLOBAL EDGE NETWORK</span>
            </div>
            <p className="text-xs text-neutral-400">
              Edge caching, TLS termination, static SPA distribution, and low-latency worldwide routing.
            </p>
          </div>

          {/* Connection Vector 2 */}
          <div className="flex justify-center text-neutral-500 font-mono text-xs items-center gap-2">
            <div className="h-5 w-[1px] bg-white/20" />
            <ArrowDown className="h-4 w-4 text-white/40" />
            <div className="h-5 w-[1px] bg-white/20" />
          </div>

          {/* Layer 3: Application Core & Database Engine (Supabase Core) */}
          <div className="border-2 border-white bg-black p-6 rounded-[2px] space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
              <div className="flex items-center gap-2 text-white font-mono text-xs font-bold uppercase tracking-wider">
                <Database className="h-4 w-4" />
                <span>SUPABASE TRANSACTIONAL & REALTIME ENGINE</span>
              </div>
              <span className="text-[10px] font-mono text-neutral-400 bg-white/10 px-2 py-0.5 rounded-[2px]">
                POSTGRESQL 15+ CORE
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
              <div className="surface-level-1 p-3 rounded-[2px] border border-border-subtle">
                <span className="text-[10px] font-mono text-neutral-400 block">AUTH</span>
                <span className="text-xs font-mono text-white font-semibold mt-1 block">JWT SESSIONS</span>
                <span className="text-[10px] text-neutral-500 mt-0.5 block">Role-based tokens</span>
              </div>

              <div className="surface-level-1 p-3 rounded-[2px] border border-border-subtle">
                <span className="text-[10px] font-mono text-neutral-400 block">DATABASE</span>
                <span className="text-xs font-mono text-white font-semibold mt-1 block">62 RLS TABLES</span>
                <span className="text-[10px] text-neutral-500 mt-0.5 block">college_id isolation</span>
              </div>

              <div className="surface-level-1 p-3 rounded-[2px] border border-border-subtle">
                <span className="text-[10px] font-mono text-neutral-400 block">REALTIME</span>
                <span className="text-xs font-mono text-white font-semibold mt-1 block">WEBSOCKETS</span>
                <span className="text-[10px] text-neutral-500 mt-0.5 block">Live session sync</span>
              </div>

              <div className="surface-level-1 p-3 rounded-[2px] border border-border-subtle">
                <span className="text-[10px] font-mono text-neutral-400 block">EDGE LOGIC</span>
                <span className="text-xs font-mono text-white font-semibold mt-1 block">25 FUNCTIONS</span>
                <span className="text-[10px] text-neutral-500 mt-0.5 block">Deno serverless</span>
              </div>
            </div>
          </div>

          {/* Connection Vector 3 */}
          <div className="flex justify-center text-neutral-500 font-mono text-xs items-center gap-2">
            <div className="h-5 w-[1px] bg-white/20" />
            <ArrowDown className="h-4 w-4 text-white/40" />
            <div className="h-5 w-[1px] bg-white/20" />
          </div>

          {/* Layer 4: Supporting Enterprise Integrations */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="surface-level-2 p-3.5 rounded-[2px] border border-border-subtle space-y-1">
              <div className="flex items-center gap-2 text-white text-xs font-mono font-semibold">
                <HardDrive className="h-3.5 w-3.5 text-neutral-400" />
                <span>GDRIVE API</span>
              </div>
              <p className="text-[11px] text-neutral-400">Tenant-isolated document and ID photo storage</p>
            </div>

            <div className="surface-level-2 p-3.5 rounded-[2px] border border-border-subtle space-y-1">
              <div className="flex items-center gap-2 text-white text-xs font-mono font-semibold">
                <Bell className="h-3.5 w-3.5 text-neutral-400" />
                <span>WEB PUSH</span>
              </div>
              <p className="text-[11px] text-neutral-400">VAPID ES256 encrypted browser and OS push</p>
            </div>

            <div className="surface-level-2 p-3.5 rounded-[2px] border border-border-subtle space-y-1">
              <div className="flex items-center gap-2 text-white text-xs font-mono font-semibold">
                <Mail className="h-3.5 w-3.5 text-neutral-400" />
                <span>ZOHO SMTP</span>
              </div>
              <p className="text-[11px] text-neutral-400">Transactional emails & administrative notices</p>
            </div>

            <div className="surface-level-2 p-3.5 rounded-[2px] border border-border-subtle space-y-1">
              <div className="flex items-center gap-2 text-white text-xs font-mono font-semibold">
                <ScanLine className="h-3.5 w-3.5 text-neutral-400" />
                <span>ZXING</span>
              </div>
              <p className="text-[11px] text-neutral-400">Client-side high-throughput QR token decode</p>
            </div>
          </div>
        </div>

        {/* Detailed Architectural Layers Breakdown */}
        <div className="pt-8 border-t border-border-subtle space-y-4">
          <h4 className="text-tech-label text-white font-mono tracking-wider">
            ARCHITECTURAL SUBSYSTEMS //
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {layers.map((layer, idx) => (
              <div
                key={idx}
                className="surface-level-2 p-5 rounded-[2px] border border-border-subtle space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-semibold text-white uppercase">
                    {layer.name}
                  </span>
                  <span className="text-[10px] font-mono text-neutral-500">
                    LAYER 0{idx + 1}
                  </span>
                </div>
                <p className="text-xs font-mono text-neutral-400">
                  {layer.role}
                </p>
                <p className="text-xs text-secondary-text leading-relaxed font-sans">
                  {layer.details}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {layer.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[10px] font-mono text-neutral-300 bg-black border border-white/10 rounded-[2px]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technology Stack Grid */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <Cpu className="h-4 w-4 text-white" />
          <h3 className="text-heading-2 font-bold text-white tracking-tight uppercase">
            TECHNOLOGY STACK
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {techStack.map((group) => (
            <div
              key={group.category}
              className="surface-level-1 p-5 rounded-[2px] border border-border-subtle space-y-3"
            >
              <h4 className="text-xs font-mono font-semibold text-white uppercase border-b border-border-subtle pb-2">
                {group.category}
              </h4>
              <ul role="list" className="space-y-2">
                {group.technologies.map((tech) => (
                  <li key={tech.name} className="flex items-center justify-between text-xs font-mono">
                    <span className="text-neutral-200">{tech.name}</span>
                    {tech.detail && (
                      <span className="text-[10px] text-neutral-500">{tech.detail}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
