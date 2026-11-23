import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, EyeOff, Database, ArrowUpRight } from 'lucide-react';
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
        'AERVENLabs Technologies Pvt. Ltd. builds software infrastructure. We do not sell, rent, monetize, or broker personal information, student records, citizen profiles, or institutional telemetry to advertising platforms, third-party data brokers, or marketing networks. Every byte of institutional data exists solely to power verified operational workflows.',
    },
    {
      id: 'multi-tenant-isolation',
      number: '02',
      title: 'MULTI-TENANT DATA ISOLATION & ROW-LEVEL SECURITY',
      content:
        'All client applications, including Campus Connect and NagrikSetu, utilize multi-tenant database architectures partitioned strictly by unique institutional and authority identifiers. At the database core, PostgreSQL Row-Level Security (RLS) policies enforce mathematical data segregation at execution time. Under no circumstance can one institution or unauthorized user query or access data belonging to another tenant.',
    },
    {
      id: 'collected-information',
      number: '03',
      title: 'INFORMATION PROCESSED & PURPOSE',
      content:
        'We process information required strictly to execute authorized collegiate and public operations: student enrollment numbers, verified institutional email addresses, course timetables, academic marks, dynamic session attendance tokens, and administrative roles. This data is processed exclusively to deliver attendance verification, grade dissemination, digital credential verification, and administrative governance.',
    },
    {
      id: 'cryptographic-security',
      number: '04',
      title: 'CRYPTOGRAPHIC SAFEGUARDS & ATTENDANCE PRIVACY',
      content:
        'Dynamic QR code attendance relies on time-limited rotating tokens evaluated with timing-safe comparison algorithms to prevent unauthorized proxy attendance. Public credential lookups return only verified document authenticity metadata, with zero exposure of personal contact information, private records, or institutional internal credentials.',
    },
    {
      id: 'infrastructure-subprocessors',
      number: '05',
      title: 'INFRASTRUCTURE & SUB-PROCESSORS',
      content:
        'Our platforms run on audited, enterprise-grade cloud infrastructure. Data is securely stored with encryption-at-rest and encryption-in-transit (strict TLS 1.3). Verified infrastructure sub-processors include Cloudflare (protective edge network & DNS resolution), Vercel (edge web application hosting), and isolated database clusters compliant with industry standards.',
    },
    {
      id: 'data-retention',
      number: '06',
      title: 'DATA RETENTION & INSTITUTIONAL SOVEREIGNTY',
      content:
        'Institutions and users retain full ownership and governance over their records. In accordance with statutory requirements, academic attendance and examination records are retained per institutional policy and may be exported, archived, or deleted upon verified instruction from authorized administrators.',
    },
    {
      id: 'individual-rights',
      number: '07',
      title: 'USER RIGHTS & CONTACT DISPATCH',
      content:
        'Users maintain rights regarding access, review, and correction of their personal data through their institutional administrative console or directly with AERVENLabs. For data privacy inquiries or technical security disclosures, contact our privacy and engineering desk directly at aervenlabs@gmail.com.',
    },
  ];

  return (
    <div
      data-testid="route-privacy"
      className="min-h-screen bg-white text-[#101828] overflow-x-hidden"
    >
      <div className="container-architectural relative z-10 py-16 sm:py-24 lg:py-32 space-y-16 sm:space-y-24">
        {/* Dedicated Page Header */}
        <header className="space-y-8 border-b border-[#E6E9EF] pb-12 sm:pb-16">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-[#667085]">
            <Link to="/" className="hover:text-[#101828] transition-colors duration-200">
              HOME
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-[#101828] font-medium" aria-current="page">
              PRIVACY POLICY
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Eyebrow & Status */}
            <div className="lg:col-span-4 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F1F3F6] border border-[#E6E9EF] rounded-full text-xs font-mono text-[#315EFA]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#315EFA]" aria-hidden="true" />
                <span>LEGAL & GOVERNANCE</span>
              </div>
              <p className="text-xs text-[#667085] font-mono tracking-widest uppercase">
                POLICY // DATA PROTECTION SPEC
              </p>
            </div>

            {/* Right Column: Headline & Effective Date */}
            <div className="lg:col-span-8 space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#101828] leading-[1.08]">
                Privacy Policy.
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#667085]">
                <span>ENTITY: {siteConfig.legalName}</span>
                <span className="text-[#E6E9EF]" aria-hidden="true">|</span>
                <span className="text-[#315EFA] font-medium">STATUS: ACTIVE & ENFORCED</span>
                <span className="text-[#E6E9EF]" aria-hidden="true">|</span>
                <span>GOVERNING: 2026</span>
              </div>
            </div>
          </div>
        </header>

        {/* Core Principles Summary Box */}
        <section aria-label="Core privacy guarantees" className="bg-[#F7F8FA] border border-[#E6E9EF] p-6 sm:p-8 rounded-[16px] grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <EyeOff className="h-4 w-4 text-[#315EFA]" aria-hidden="true" />
              <span className="font-mono text-xs font-semibold text-[#101828] tracking-wider uppercase">
                ZERO AD TRACKING
              </span>
            </div>
            <p className="text-xs text-[#667085] font-sans leading-relaxed">
              We never track users for marketing or monetize student, citizen, or institutional data.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Database className="h-4 w-4 text-[#315EFA]" aria-hidden="true" />
              <span className="font-mono text-xs font-semibold text-[#101828] tracking-wider uppercase">
                ROW-LEVEL SECURITY
              </span>
            </div>
            <p className="text-xs text-[#667085] font-sans leading-relaxed">
              Strict database isolation prevents any cross-institutional data leakage.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Lock className="h-4 w-4 text-[#315EFA]" aria-hidden="true" />
              <span className="font-mono text-xs font-semibold text-[#101828] tracking-wider uppercase">
                ENCRYPTED TRANSIT
              </span>
            </div>
            <p className="text-xs text-[#667085] font-sans leading-relaxed">
              All communications protected with strict TLS 1.3 edge encryption.
            </p>
          </div>
        </section>

        {/* Detailed Legal Sections */}
        <section aria-label="Detailed privacy provisions" className="space-y-8 sm:space-y-10">
          {sections.map((section) => (
            <article
              key={section.id}
              className="editorial-card p-6 sm:p-8 lg:p-10 rounded-[16px] space-y-4"
            >
              <div className="flex items-center justify-between border-b border-[#E6E9EF] pb-3 text-xs font-mono">
                <span className="font-semibold text-[#315EFA] tracking-wider">
                  SECTION {section.number}
                </span>
                <span className="text-[#667085] uppercase">
                  LEGAL SPEC
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-[#101828] tracking-tight">
                {section.title}
              </h2>

              <p className="text-sm sm:text-base text-[#667085] leading-relaxed font-sans">
                {section.content}
              </p>
            </article>
          ))}
        </section>

        {/* Official Contact Dispatch */}
        <div className="bg-[#F7F8FA] border border-[#E6E9EF] p-6 sm:p-8 rounded-[16px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-xs text-[#667085] font-mono tracking-widest block uppercase font-semibold">
              PRIVACY INQUIRIES & DATA RIGHTS
            </span>
            <p className="text-sm font-mono text-[#101828]">
              Direct inquiries: <a href={`mailto:${siteConfig.email}`} className="text-[#315EFA] underline underline-offset-4">{siteConfig.email}</a>
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#101828] text-white font-mono text-xs font-semibold tracking-wider uppercase rounded-[8px] hover:bg-[#315EFA] transition-colors duration-200 min-h-[44px]"
          >
            <span>CONTACT LEGAL DESK</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
