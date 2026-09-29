import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Shield, Lock, EyeOff, Server, Database, CheckCircle2 } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { routeSEOConfig } from '../data/seo';
import { generateBreadcrumbSchema } from '../lib/seo';
import { siteConfig } from '../config/site';

export const PrivacyPage: React.FC = () => {
  useSEO(
    { ...routeSEOConfig.privacy, robots: 'index, follow' },
    routeSEOConfig.privacy?.breadcrumbs
      ? generateBreadcrumbSchema(routeSEOConfig.privacy.breadcrumbs)
      : undefined
  );

  const sections = [
    {
      id: 'core-conviction',
      number: '01',
      title: 'FOUNDATIONAL PRINCIPLE: ZERO DATA MONETIZATION',
      content:
        'AervenLabs Technologies Pvt. Ltd. builds software infrastructure. We do not sell, rent, monetize, or broker personal information, student records, faculty data, or institutional telemetry to advertising platforms, third-party data brokers, or marketing networks. Every byte of institutional data exists solely to power the verified operational workflows of the platform.',
    },
    {
      id: 'multi-tenant-isolation',
      number: '02',
      title: 'MULTI-TENANT DATA ISOLATION & ROW-LEVEL SECURITY',
      content:
        'All client applications, including Campus Connect, utilize true multi-tenant database architectures partitioned strictly by unique institutional identifiers (college_id). At the database core, PostgreSQL Row-Level Security (RLS) policies enforce mathematical data segregation at execution time. Under no circumstance can one institution or unauthorized user query, resolve, or access data belonging to another institution.',
    },
    {
      id: 'collected-information',
      number: '03',
      title: 'INFORMATION PROCESSED & PURPOSE',
      content:
        'We process information required strictly to execute authorized collegiate operations: student enrollment numbers, verified institutional email addresses, course timetables, academic marks, dynamic session attendance tokens, and administrative roles. This data is processed exclusively to deliver attendance verification, grade dissemination, digital credential verification, and administrative governance.',
    },
    {
      id: 'cryptographic-security',
      number: '04',
      title: 'CRYPTOGRAPHIC SAFEGUARDS & ATTENDANCE PRIVACY',
      content:
        'Dynamic QR code attendance relies on time-limited 10-minute rotating tokens evaluated with timing-safe comparison algorithms to prevent unauthorized proxy attendance. Public credential lookups via /verify/:reference return only verified document authenticity metadata, with zero exposure of student contact information, private records, or institutional internal credentials.',
    },
    {
      id: 'infrastructure-subprocessors',
      number: '05',
      title: 'INFRASTRUCTURE & SUB-PROCESSORS',
      content:
        'Our platforms run on audited, enterprise-grade cloud infrastructure. Data is securely stored with encryption-at-rest and encryption-in-transit (TLS 1.3). Verified infrastructure sub-processors include Cloudflare (protective edge network & DNS resolution), Vercel (edge web application hosting), and isolated database clusters compliant with industry standards.',
    },
    {
      id: 'data-retention',
      number: '06',
      title: 'DATA RETENTION & INSTITUTIONAL SOVEREIGNTY',
      content:
        'Institutions retain full ownership and governance over their records. In accordance with collegiate statutory requirements, academic attendance and examination records are retained per institutional policy and may be exported, archived, or deleted upon verified instruction from authorized institutional administrators.',
    },
    {
      id: 'individual-rights',
      number: '07',
      title: 'USER RIGHTS & CONTACT DISPATCH',
      content:
        'Users maintain rights regarding access, review, and correction of their personal data through their institutional administrative console or directly with AervenLabs. For data privacy inquiries or technical security disclosures, contact our privacy and engineering desk directly at contact@aervenlabs.net.',
    },
  ];

  return (
    <div
      data-testid="route-privacy"
      className="min-h-screen bg-black text-foreground selection:bg-white selection:text-black overflow-x-hidden"
    >
      {/* Background Architectural Grid Lines */}
      <div
        className="pointer-events-none absolute inset-0 select-none opacity-25"
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

      <div className="container-architectural relative z-10 py-16 sm:py-24 lg:py-32 space-y-16 sm:space-y-24">
        {/* Dedicated Page Header */}
        <header className="space-y-8 border-b border-border-subtle pb-12 sm:pb-16">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-neutral-400">
            <Link to="/" className="hover:text-white transition-colors duration-200">
              HOME
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-white" aria-current="page">
              PRIVACY POLICY
            </span>
          </nav>

          <div className="grid-architectural items-start gap-8">
            {/* Left Column: Eyebrow & Status */}
            <div className="lg:col-span-4 space-y-3">
              <div className="inline-flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-white" aria-hidden="true" />
                <span className="text-eyebrow text-neutral-400">
                  LEGAL & GOVERNANCE
                </span>
              </div>
              <p className="text-tech-label text-neutral-500 font-mono tracking-widest">
                POLICY // DATA PROTECTION SPEC
              </p>
            </div>

            {/* Right Column: Monumental Headline & Effective Date */}
            <div className="lg:col-span-8 space-y-6">
              <h1 className="text-heading-1 sm:text-display-sm lg:text-display font-semibold tracking-tight text-white uppercase leading-[0.95] select-none">
                Privacy Policy.
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-400">
                <span>ENTITY: {siteConfig.legalName}</span>
                <span className="text-neutral-700" aria-hidden="true">|</span>
                <span>STATUS: ACTIVE & ENFORCED</span>
                <span className="text-neutral-700" aria-hidden="true">|</span>
                <span>GOVERNING: 2026</span>
              </div>
            </div>
          </div>
        </header>

        {/* Core Principles Summary Box */}
        <section aria-label="Core privacy guarantees" className="surface-level-1 p-6 sm:p-8 rounded-[2px] border border-border-subtle grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <EyeOff className="h-4 w-4 text-white" aria-hidden="true" />
              <span className="font-mono text-xs font-semibold text-white tracking-wider uppercase">
                ZERO AD TRACKING
              </span>
            </div>
            <p className="text-xs text-secondary-text font-sans leading-relaxed">
              We never track users for marketing or monetize student data.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Database className="h-4 w-4 text-white" aria-hidden="true" />
              <span className="font-mono text-xs font-semibold text-white tracking-wider uppercase">
                ROW-LEVEL SECURITY
              </span>
            </div>
            <p className="text-xs text-secondary-text font-sans leading-relaxed">
              Strict database isolation prevents any cross-institutional data leakage.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Lock className="h-4 w-4 text-white" aria-hidden="true" />
              <span className="font-mono text-xs font-semibold text-white tracking-wider uppercase">
                ENCRYPTED TRANSIT
              </span>
            </div>
            <p className="text-xs text-secondary-text font-sans leading-relaxed">
              All communications protected with strict TLS 1.3 edge encryption.
            </p>
          </div>
        </section>

        {/* Detailed Legal Sections */}
        <section aria-label="Detailed privacy provisions" className="space-y-8 sm:space-y-12">
          {sections.map((section) => (
            <article
              key={section.id}
              className="surface-level-1 p-6 sm:p-8 lg:p-10 rounded-[2px] border border-border-subtle space-y-4"
            >
              <div className="flex items-center justify-between border-b border-border-subtle pb-3">
                <span className="font-mono text-xs font-semibold text-white tracking-wider">
                  SECTION {section.number}
                </span>
                <span className="text-[10px] font-mono text-neutral-500 uppercase">
                  LEGAL SPEC
                </span>
              </div>

              <h2 className="text-heading-3 sm:text-heading-2 font-semibold text-white tracking-tight">
                {section.title}
              </h2>

              <p className="text-sm sm:text-base text-secondary-text leading-relaxed font-sans">
                {section.content}
              </p>
            </article>
          ))}
        </section>

        {/* Official Contact Dispatch */}
        <div className="surface-level-1 p-6 sm:p-8 rounded-[2px] border border-border-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-tech-label text-neutral-500 font-mono tracking-widest block">
              PRIVACY INQUIRIES & DATA RIGHTS
            </span>
            <p className="text-sm font-mono text-white">
              Direct inquiries: <a href={`mailto:${siteConfig.email}`} className="underline underline-offset-4">{siteConfig.email}</a>
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-mono text-xs font-semibold tracking-wider uppercase rounded-[2px] hover:bg-neutral-200 transition-colors duration-200 min-h-[48px]"
          >
            <span>CONTACT LEGAL DESK</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
