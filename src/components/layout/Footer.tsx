import React from 'react';
import { Link } from 'react-router-dom';
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
  ArrowUpRight,
} from 'lucide-react';
import { navigationItems, footerLegalItems } from '../../data/navigation';
import { siteConfig } from '../../config/site';

/**
 * Footer Component — The Final System Layer.
 * Global architectural closure for AervenLabs Technologies Pvt. Ltd.
 * Strictly monochrome, restrained, editorial, and monumental.
 */
export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative border-t border-border-subtle bg-black text-neutral-400 overflow-hidden"
      role="contentinfo"
    >
      {/* Background Architectural Grid Lines */}
      <div
        className="pointer-events-none absolute inset-0 select-none opacity-20"
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

      <div className="container-architectural relative z-10 py-16 sm:py-20 md:py-28 lg:py-32 space-y-16 sm:space-y-20 lg:space-y-24">
        {/* ============================================================== */}
        {/* SECTION A: HEROIC BRAND STATEMENT / MONUMENTAL WORDMARK        */}
        {/* ============================================================== */}
        <div className="w-full space-y-6 sm:space-y-8 border-b border-border-subtle pb-12 sm:pb-16 lg:pb-20">
          {/* Top Bezel: Brand Identity & Flagship Metadata */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link
              to="/"
              className="group inline-flex items-center gap-3 outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              aria-label={`${siteConfig.name} — Return to homepage`}
            >
              <img
                src="/assets/aervenlabs-logo.png"
                alt=""
                className="h-7 w-7 sm:h-8 sm:w-8 object-contain transition-transform duration-300 group-hover:scale-105"
                aria-hidden="true"
              />
              <span className="font-mono text-xs tracking-widest uppercase text-neutral-400 group-hover:text-white transition-colors duration-200">
                SYSTEM // ZERO
              </span>
            </Link>

            <div className="flex items-center gap-3 font-mono text-[10px] sm:text-xs text-neutral-500 tracking-widest uppercase">
              <span>FLAGSHIP SITE</span>
              <span className="h-1 w-1 rounded-full bg-neutral-600" aria-hidden="true" />
              <span>SYS_LAYER // FINAL</span>
            </div>
          </div>

          {/* Monumental Wordmark Display */}
          <div className="w-full overflow-hidden select-none">
            <h2 className="sr-only">AervenLabs Official Brand</h2>
            <div
              className="font-sans font-bold tracking-tighter text-white uppercase text-[clamp(2.15rem,11vw,11rem)] leading-[0.88] transition-colors duration-500 hover:text-neutral-200"
              aria-hidden="true"
            >
              AERVENLABS
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* SECTION B: 12-COLUMN ARCHITECTURAL CONTENT GRID                */}
        {/* ============================================================== */}
        <div className="grid-architectural items-start">
          {/* Columns 1-5: Brand Conviction, Legal Entity & Direct Dispatch */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <p className="text-tech-label text-neutral-500 font-mono tracking-widest">
                COMPANY // CONVICTION
              </p>
              <p className="text-lg sm:text-xl font-medium text-white max-w-sm leading-snug">
                {siteConfig.tagline}
              </p>
              <p className="text-sm text-neutral-400 max-w-md leading-relaxed font-sans pt-1">
                {siteConfig.description}
              </p>
            </div>

            {/* Legal Identity & Verified Direct Email Dispatch */}
            <div className="space-y-2 pt-2 border-t border-border-subtle max-w-md">
              <p className="text-xs font-mono text-neutral-500 tracking-wider uppercase">
                LEGAL ENTITY // {siteConfig.legalName}
              </p>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-neutral-500 uppercase">
                  DIRECT DISPATCH:
                </span>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-xs font-mono text-neutral-300 hover:text-white transition-colors duration-200 outline-none focus-visible:ring-1 focus-visible:ring-white underline-offset-4 hover:underline py-1 inline-block"
                  aria-label={`Send direct email to ${siteConfig.email}`}
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>
          </div>

          {/* Columns 6-8: Navigation Map */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-tech-label text-neutral-500 font-mono tracking-widest">
              NAVIGATION // MAP
            </p>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2.5">
                {navigationItems.map((item) => (
                  <li key={item.id}>
                    <Link
                      to={item.path}
                      className="group inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-all duration-200 outline-none focus-visible:ring-1 focus-visible:ring-white py-0.5"
                    >
                      <span className="transition-transform duration-200 group-hover:translate-x-1">
                        {item.label}
                      </span>
                    </Link>
                  </li>
                ))}
                {/* Secondary flagship project link: Campus Connect */}
                <li className="pt-1">
                  <Link
                    to="/projects/campus-connect"
                    className="group inline-flex items-center gap-1.5 text-xs font-mono text-neutral-500 hover:text-white transition-all duration-200 outline-none focus-visible:ring-1 focus-visible:ring-white py-0.5"
                  >
                    <span className="text-neutral-600 font-mono">↳</span>
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      Campus Connect
                    </span>
                    <ArrowUpRight
                      className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-neutral-400"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Columns 9-10: Connect / Social Channels */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-tech-label text-neutral-500 font-mono tracking-widest">
              CONNECT // CHANNELS
            </p>
            <nav aria-label="Social channels">
              <ul className="space-y-2.5">
                {/* GitHub */}
                {siteConfig.links.github && (
                  <li>
                    <a
                      href={siteConfig.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2.5 text-sm text-neutral-400 hover:text-white transition-all duration-200 outline-none focus-visible:ring-1 focus-visible:ring-white py-0.5"
                      aria-label="AervenLabs on GitHub (opens in a new tab)"
                    >
                      <Github
                        className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:scale-110"
                        aria-hidden="true"
                      />
                      <span>GitHub</span>
                      <ArrowUpRight
                        className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-neutral-500"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                )}
                {/* LinkedIn */}
                {siteConfig.links.linkedin && (
                  <li>
                    <a
                      href={siteConfig.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2.5 text-sm text-neutral-400 hover:text-white transition-all duration-200 outline-none focus-visible:ring-1 focus-visible:ring-white py-0.5"
                      aria-label="AervenLabs on LinkedIn (opens in a new tab)"
                    >
                      <Linkedin
                        className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:scale-110"
                        aria-hidden="true"
                      />
                      <span>LinkedIn</span>
                      <ArrowUpRight
                        className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-neutral-500"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                )}
                {/* Twitter / X */}
                {siteConfig.links.twitter && (
                  <li>
                    <a
                      href={siteConfig.links.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2.5 text-sm text-neutral-400 hover:text-white transition-all duration-200 outline-none focus-visible:ring-1 focus-visible:ring-white py-0.5"
                      aria-label="AervenLabs on Twitter / X (opens in a new tab)"
                    >
                      <Twitter
                        className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:scale-110"
                        aria-hidden="true"
                      />
                      <span>Twitter / X</span>
                      <ArrowUpRight
                        className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-neutral-500"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                )}
                {/* Instagram */}
                {siteConfig.links.instagram && (
                  <li>
                    <a
                      href={siteConfig.links.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2.5 text-sm text-neutral-400 hover:text-white transition-all duration-200 outline-none focus-visible:ring-1 focus-visible:ring-white py-0.5"
                      aria-label="AervenLabs on Instagram (opens in a new tab)"
                    >
                      <Instagram
                        className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:scale-110"
                        aria-hidden="true"
                      />
                      <span>Instagram</span>
                      <ArrowUpRight
                        className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-neutral-500"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                )}
                {/* YouTube */}
                {siteConfig.links.youtube && (
                  <li>
                    <a
                      href={siteConfig.links.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2.5 text-sm text-neutral-400 hover:text-white transition-all duration-200 outline-none focus-visible:ring-1 focus-visible:ring-white py-0.5"
                      aria-label="AervenLabs on YouTube (opens in a new tab)"
                    >
                      <Youtube
                        className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:scale-110"
                        aria-hidden="true"
                      />
                      <span>YouTube</span>
                      <ArrowUpRight
                        className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-neutral-500"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                )}
              </ul>
            </nav>
          </div>

          {/* Columns 11-12: Legal & Governance */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-tech-label text-neutral-500 font-mono tracking-widest">
              LEGAL // POLICIES
            </p>
            <nav aria-label="Legal policies">
              <ul className="space-y-2.5">
                {footerLegalItems.map((item) => (
                  <li key={item.id}>
                    <Link
                      to={item.path}
                      className="group inline-flex items-center gap-1.5 text-sm text-neutral-400 hover:text-white transition-all duration-200 outline-none focus-visible:ring-1 focus-visible:ring-white py-0.5"
                    >
                      <span className="transition-transform duration-200 group-hover:translate-x-1">
                        {item.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="pt-4 border-t border-border-subtle space-y-1">
              <span className="text-tech-label text-neutral-600 font-mono block">
                STATUS // MONITORED
              </span>
              <span className="text-[11px] font-mono text-neutral-500 block">
                ALL SYSTEMS NOMINAL
              </span>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* SECTION C: BOTTOM CLOSURE / COPYRIGHT & TECHNICAL SPEC         */}
        {/* ============================================================== */}
        <div className="pt-8 border-t border-border-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <p>
            © {currentYear} {siteConfig.legalName}. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-[11px] text-neutral-600">
            <span>ARCH_SPEC // INTENT_DRIVEN</span>
            <span className="hidden sm:inline" aria-hidden="true">
              |
            </span>
            <span>BANGALORE / GLOBAL DISPATCH</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
