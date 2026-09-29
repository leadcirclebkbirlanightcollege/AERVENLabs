import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, FileCheck, Scale, AlertCircle } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { routeSEOConfig } from '../data/seo';
import { generateBreadcrumbSchema } from '../lib/seo';
import { siteConfig } from '../config/site';

export const TermsPage: React.FC = () => {
  useSEO(
    { ...routeSEOConfig.terms, robots: 'index, follow' },
    routeSEOConfig.terms?.breadcrumbs
      ? generateBreadcrumbSchema(routeSEOConfig.terms.breadcrumbs)
      : undefined
  );

  const sections = [
    {
      id: 'acceptance',
      number: '01',
      title: 'ACCEPTANCE OF TERMS & SCOPE OF SERVICE',
      content:
        'These Terms & Conditions ("Terms") govern access to and use of the website, software applications, platforms, and services operated by AervenLabs Technologies Pvt. Ltd. ("AervenLabs", "we", "our"). By accessing or using our websites or platforms, including Campus Connect, you agree to be bound by these Terms and our Privacy Policy. If you do not agree, you must cease using our services immediately.',
    },
    {
      id: 'licensing',
      number: '02',
      title: 'SOFTWARE LICENSING & MULTI-TENANT ACCESS',
      content:
        'AervenLabs grants authorized institutions, administrators, faculty members, and students a limited, non-exclusive, non-transferable, and revocable license to access our cloud platforms strictly within their authorized role and institutional tenant context (college_id). Reverse engineering, decompiling, unauthorized scraping, or attempting to bypass Row-Level Security controls is strictly prohibited.',
    },
    {
      id: 'acceptable-use',
      number: '03',
      title: 'ACCEPTABLE USE & PROXY ATTENDANCE PROHIBITION',
      content:
        'Users must utilize platform capabilities lawfully and ethically. In the context of Campus Connect, generating unauthorized QR tokens, sharing credentials for proxy attendance, fabricating collegiate certificates, or abusing public verification endpoints is a material breach of these Terms and may result in immediate credential revocation and referral to collegiate authorities.',
    },
    {
      id: 'intellectual-property',
      number: '04',
      title: 'INTELLECTUAL PROPERTY & BRAND MARKS',
      content:
        'All proprietary code, algorithms, visual systems, interface architectures, trademarks, and logos associated with AervenLabs and its flagship products are the exclusive intellectual property of AervenLabs Technologies Pvt. Ltd. Institutional partners retain ownership over their respective trademarks, student directories, and academic course materials.',
    },
    {
      id: 'security-accounts',
      number: '05',
      title: 'SECURITY, PASSWORDS & ACCOUNT INTEGRITY',
      content:
        'Users are responsible for safeguarding account credentials, authentication session tokens, and passwords. Any suspected unauthorized access, anomalous session activity, or security vulnerability must be reported immediately to our security and engineering desk at aervenlabs@gmail.com.',
    },
    {
      id: 'service-availability',
      number: '06',
      title: 'SERVICE AVAILABILITY & INFRASTRUCTURE UPDATES',
      content:
        'While AervenLabs deploys software on high-availability edge networks (Cloudflare and Vercel) and resilient database clusters, we do not warrant that service will be completely uninterrupted or error-free at all times. Scheduled maintenance, statutory database migrations, and edge deployments will be conducted with advance notice whenever practicable.',
    },
    {
      id: 'governing-law',
      number: '07',
      title: 'GOVERNING LAW & LEGAL JURISDICTION',
      content:
        'These Terms shall be governed by and construed in accordance with the laws of the Republic of India. Any legal dispute, proceeding, or claim arising out of or relating to these Terms or the use of AervenLabs services shall be subject to the exclusive jurisdiction of the competent courts in Maharashtra, India.',
    },
  ];

  return (
    <div
      data-testid="route-terms"
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
              TERMS & CONDITIONS
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
                AGREEMENT // TERMS OF SERVICE
              </p>
            </div>

            {/* Right Column: Monumental Headline & Entity Readout */}
            <div className="lg:col-span-8 space-y-6">
              <h1 className="text-heading-1 sm:text-display-sm lg:text-display font-semibold tracking-tight text-white uppercase leading-[0.95] select-none">
                Terms & Conditions.
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-400">
                <span>OPERATOR: {siteConfig.legalName}</span>
                <span className="text-neutral-700" aria-hidden="true">|</span>
                <span>STATUS: ACTIVE & ENFORCED</span>
                <span className="text-neutral-700" aria-hidden="true">|</span>
                <span>EFFECTIVE: 2026</span>
              </div>
            </div>
          </div>
        </header>

        {/* Governance Highlight */}
        <section aria-label="Governance overview" className="surface-level-1 p-6 sm:p-8 rounded-[2px] border border-border-subtle grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Scale className="h-4 w-4 text-white" aria-hidden="true" />
              <span className="font-mono text-xs font-semibold text-white tracking-wider uppercase">
                ENTERPRISE LEGAL STANDARD
              </span>
            </div>
            <p className="text-xs text-secondary-text font-sans leading-relaxed">
              Clear institutional agreements governing multi-tenant cloud platforms and software rights.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <FileCheck className="h-4 w-4 text-white" aria-hidden="true" />
              <span className="font-mono text-xs font-semibold text-white tracking-wider uppercase">
                MUTUAL INTELLECTUAL RESPECT
              </span>
            </div>
            <p className="text-xs text-secondary-text font-sans leading-relaxed">
              Institutions own their data; AervenLabs owns its foundational software architectures.
            </p>
          </div>
        </section>

        {/* Detailed Terms Articles */}
        <section aria-label="Terms of service articles" className="space-y-8 sm:space-y-12">
          {sections.map((section) => (
            <article
              key={section.id}
              className="surface-level-1 p-6 sm:p-8 lg:p-10 rounded-[2px] border border-border-subtle space-y-4"
            >
              <div className="flex items-center justify-between border-b border-border-subtle pb-3">
                <span className="font-mono text-xs font-semibold text-white tracking-wider">
                  ARTICLE {section.number}
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

        {/* Legal Dispatch Closure */}
        <div className="surface-level-1 p-6 sm:p-8 rounded-[2px] border border-border-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-tech-label text-neutral-500 font-mono tracking-widest block">
              LEGAL NOTICES & INQUIRIES
            </span>
            <p className="text-sm font-mono text-white">
              Official channel: <a href={`mailto:${siteConfig.email}`} className="underline underline-offset-4">{siteConfig.email}</a>
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

export default TermsPage;
