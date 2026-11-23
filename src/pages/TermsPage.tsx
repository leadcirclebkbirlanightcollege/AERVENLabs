import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, FileCheck, ArrowUpRight } from 'lucide-react';
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
        'These Terms & Conditions ("Terms") govern access to and use of the website, software applications, platforms, and services operated by AERVENLabs Technologies Pvt. Ltd. ("AERVENLabs", "we", "our"). By accessing or using our websites or platforms, including Campus Connect, you agree to be bound by these Terms and our Privacy Policy. If you do not agree, you must cease using our services immediately.',
    },
    {
      id: 'licensing',
      number: '02',
      title: 'SOFTWARE LICENSING & MULTI-TENANT ACCESS',
      content:
        'AERVENLabs grants authorized institutions, administrators, faculty members, students, and citizens a limited, non-exclusive, non-transferable, and revocable license to access our cloud platforms strictly within their authorized role and institutional tenant context. Reverse engineering, decompiling, unauthorized scraping, or attempting to bypass Row-Level Security controls is strictly prohibited.',
    },
    {
      id: 'acceptable-use',
      number: '03',
      title: 'ACCEPTABLE USE & SYSTEM INTEGRITY',
      content:
        'Users must utilize platform capabilities lawfully and ethically. In the context of Campus Connect, generating unauthorized QR tokens, sharing credentials for proxy attendance, fabricating collegiate certificates, or abusing public verification endpoints is a material breach of these Terms and may result in immediate credential revocation and referral to collegiate authorities.',
    },
    {
      id: 'intellectual-property',
      number: '04',
      title: 'INTELLECTUAL PROPERTY & BRAND MARKS',
      content:
        'All proprietary code, algorithms, visual systems, interface architectures, trademarks, and logos associated with AERVENLabs and its flagship products are the exclusive intellectual property of AERVENLabs Technologies Pvt. Ltd. Institutional partners retain ownership over their respective trademarks, student directories, and academic course materials.',
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
        'While AERVENLabs deploys software on high-availability edge networks (Cloudflare and Vercel) and resilient database clusters, we do not warrant that service will be completely uninterrupted or error-free at all times. Scheduled maintenance, statutory database migrations, and edge deployments will be conducted with advance notice whenever practicable.',
    },
    {
      id: 'governing-law',
      number: '07',
      title: 'GOVERNING LAW & LEGAL JURISDICTION',
      content:
        'These Terms shall be governed by and construed in accordance with the laws of the Republic of India. Any legal dispute, proceeding, or claim arising out of or relating to these Terms or the use of AERVENLabs services shall be subject to the exclusive jurisdiction of the competent courts in Maharashtra, India.',
    },
  ];

  return (
    <div
      data-testid="route-terms"
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
              TERMS & CONDITIONS
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
                AGREEMENT // TERMS OF SERVICE
              </p>
            </div>

            {/* Right Column: Headline & Entity Readout */}
            <div className="lg:col-span-8 space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#101828] leading-[1.08]">
                Terms & Conditions.
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#667085]">
                <span>OPERATOR: {siteConfig.legalName}</span>
                <span className="text-[#E6E9EF]" aria-hidden="true">|</span>
                <span className="text-[#315EFA] font-medium">STATUS: ACTIVE & ENFORCED</span>
                <span className="text-[#E6E9EF]" aria-hidden="true">|</span>
                <span>EFFECTIVE: 2026</span>
              </div>
            </div>
          </div>
        </header>

        {/* Governance Highlight */}
        <section aria-label="Governance overview" className="bg-[#F7F8FA] border border-[#E6E9EF] p-6 sm:p-8 rounded-[16px] grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Scale className="h-4 w-4 text-[#315EFA]" aria-hidden="true" />
              <span className="font-mono text-xs font-semibold text-[#101828] tracking-wider uppercase">
                ENTERPRISE LEGAL STANDARD
              </span>
            </div>
            <p className="text-xs text-[#667085] font-sans leading-relaxed">
              Clear institutional agreements governing multi-tenant cloud platforms and software rights.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <FileCheck className="h-4 w-4 text-[#315EFA]" aria-hidden="true" />
              <span className="font-mono text-xs font-semibold text-[#101828] tracking-wider uppercase">
                MUTUAL INTELLECTUAL RESPECT
              </span>
            </div>
            <p className="text-xs text-[#667085] font-sans leading-relaxed">
              Institutions own their data; AERVENLabs owns its foundational software architectures.
            </p>
          </div>
        </section>

        {/* Detailed Terms Articles */}
        <section aria-label="Terms of service articles" className="space-y-8 sm:space-y-10">
          {sections.map((section) => (
            <article
              key={section.id}
              className="editorial-card p-6 sm:p-8 lg:p-10 rounded-[16px] space-y-4"
            >
              <div className="flex items-center justify-between border-b border-[#E6E9EF] pb-3 text-xs font-mono">
                <span className="font-semibold text-[#315EFA] tracking-wider">
                  ARTICLE {section.number}
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

        {/* Legal Dispatch Closure */}
        <div className="bg-[#F7F8FA] border border-[#E6E9EF] p-6 sm:p-8 rounded-[16px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-xs text-[#667085] font-mono tracking-widest block uppercase font-semibold">
              LEGAL NOTICES & INQUIRIES
            </span>
            <p className="text-sm font-mono text-[#101828]">
              Official channel: <a href={`mailto:${siteConfig.email}`} className="text-[#315EFA] underline underline-offset-4">{siteConfig.email}</a>
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

export default TermsPage;
