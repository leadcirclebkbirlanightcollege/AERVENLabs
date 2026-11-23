import React from 'react';
import { Link } from 'react-router-dom';
import {
  Github,
  Linkedin,
  Instagram,
  Youtube,
  ArrowUpRight,
  Mail,
  ShieldCheck,
} from 'lucide-react';
import { navigationItems, footerLegalItems } from '../../data/navigation';
import { projectsData } from '../../data/projects';
import { siteConfig } from '../../config/site';

/**
 * Footer Component — Section 12: Refined Global Closure.
 * Premium white-first aesthetic:
 * - Subtle background surface (#F7F8FA)
 * - Fine boundary lines (#E6E9EF)
 * - Crisp typography (#101828 / #667085)
 * - Company branding, navigation links, projects directory, contact details,
 *   verified social links, and legal terms.
 */
export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative border-t border-[#E6E9EF] bg-[#F7F8FA] text-[#667085] overflow-hidden"
      role="contentinfo"
    >
      <div className="container-architectural relative z-10 py-16 sm:py-20 lg:py-24 space-y-16">
        {/* Top Section: Brand Statement & Wordmark */}
        <div className="grid-architectural items-start border-b border-[#E6E9EF] pb-12 sm:pb-16 gap-8">
          <div className="lg:col-span-6 space-y-4">
            <Link
              to="/"
              className="group inline-flex items-center gap-3 outline-none focus-visible:ring-2 focus-visible:ring-[#315EFA] rounded-[6px]"
              aria-label={`${siteConfig.name} — Return to homepage`}
            >
              <div className="flex items-center justify-center h-9 w-9 rounded-[8px] bg-white border border-[#E6E9EF] p-1.5 shadow-sm transition-transform duration-300 group-hover:scale-105">
                <img
                  src="/assets/aervenlabs-logo.png"
                  alt=""
                  className="h-full w-full object-contain"
                  aria-hidden="true"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-sans text-base font-bold tracking-tight text-[#101828] uppercase">
                  {siteConfig.name}
                </span>
                <span className="font-mono text-[10px] tracking-wider text-[#667085]">
                  {siteConfig.legalName}
                </span>
              </div>
            </Link>

            <p className="text-sm text-[#667085] max-w-md leading-relaxed font-sans pt-1">
              {siteConfig.description}
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[6px] bg-[#DCE5FF]/40 border border-[#DCE5FF] text-[#315EFA] font-mono text-[11px] font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-[#315EFA]" aria-hidden="true" />
                <span>INDEPENDENT TECHNOLOGY STARTUP</span>
              </span>
            </div>
          </div>

          {/* Quick Direct Contact Card */}
          <div className="lg:col-span-6 flex flex-col lg:items-end justify-center space-y-3">
            <span className="font-mono text-xs text-[#98A2B3] tracking-widest uppercase">
              DIRECT COMMUNICATION
            </span>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-[8px] bg-white border border-[#E6E9EF] text-sm font-mono text-[#101828] hover:border-[#315EFA] hover:text-[#315EFA] transition-all shadow-sm group"
              aria-label={`Send direct email to ${siteConfig.email}`}
            >
              <Mail className="h-4 w-4 text-[#315EFA]" aria-hidden="true" />
              <span>{siteConfig.email}</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-[#98A2B3] group-hover:text-[#315EFA] transition-colors" />
            </a>
            <p className="text-xs text-[#667085]">
              Response within 24–48 hours for collaborative inquiries.
            </p>
          </div>
        </div>

        {/* 12-Column Footer Directory Grid */}
        <div className="grid-architectural items-start gap-10">
          {/* Columns 1-3: Main Navigation */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-xs font-semibold tracking-wider text-[#101828] uppercase font-mono">
              NAVIGATION
            </p>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2.5">
                {navigationItems.map((item) => (
                  <li key={item.id}>
                    <Link
                      to={item.path}
                      className="text-sm text-[#667085] hover:text-[#101828] transition-colors duration-200 inline-block py-0.5"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Columns 4-7: Flagship Initiative */}
          <div className="lg:col-span-4 space-y-4">
            <p className="text-xs font-semibold tracking-wider text-[#101828] uppercase font-mono">
              FLAGSHIP INITIATIVE
            </p>
            <ul className="space-y-2.5" aria-label="Projects directory">
              {projectsData.map((project) => (
                <li key={project.id}>
                  <Link
                    to={`/projects/${project.slug}`}
                    className="group inline-flex items-center gap-2 text-sm text-[#667085] hover:text-[#315EFA] transition-colors duration-200 py-0.5"
                  >
                    <span className="font-medium text-[#101828] group-hover:text-[#315EFA] transition-colors">
                      {project.title}
                    </span>
                    <span className="text-xs text-[#98A2B3]">· Campus Operating System</span>
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columns 8-10: Connect Channels */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-xs font-semibold tracking-wider text-[#101828] uppercase font-mono">
              CONNECT & REPOSITORY
            </p>
            <ul className="space-y-2.5" aria-label="Social and code channels">
              {siteConfig.links.github && (
                <li>
                  <a
                    href={siteConfig.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 text-sm text-[#667085] hover:text-[#101828] transition-colors duration-200 py-0.5"
                  >
                    <Github className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>GitHub</span>
                    <ArrowUpRight className="h-3 w-3 text-[#98A2B3]" />
                  </a>
                </li>
              )}
              {siteConfig.links.linkedin && (
                <li>
                  <a
                    href={siteConfig.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 text-sm text-[#667085] hover:text-[#101828] transition-colors duration-200 py-0.5"
                  >
                    <Linkedin className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>LinkedIn</span>
                    <ArrowUpRight className="h-3 w-3 text-[#98A2B3]" />
                  </a>
                </li>
              )}
              {siteConfig.links.instagram && (
                <li>
                  <a
                    href={siteConfig.links.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 text-sm text-[#667085] hover:text-[#101828] transition-colors duration-200 py-0.5"
                  >
                    <Instagram className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>Instagram</span>
                    <ArrowUpRight className="h-3 w-3 text-[#98A2B3]" />
                  </a>
                </li>
              )}
              {siteConfig.links.youtube && (
                <li>
                  <a
                    href={siteConfig.links.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 text-sm text-[#667085] hover:text-[#101828] transition-colors duration-200 py-0.5"
                  >
                    <Youtube className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>YouTube</span>
                    <ArrowUpRight className="h-3 w-3 text-[#98A2B3]" />
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Columns 11-12: Legal & Governance */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-xs font-semibold tracking-wider text-[#101828] uppercase font-mono">
              LEGAL & PRIVACY
            </p>
            <ul className="space-y-2.5" aria-label="Legal navigation">
              {footerLegalItems.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.path}
                    className="text-sm text-[#667085] hover:text-[#101828] transition-colors duration-200 inline-block py-0.5"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="pt-2 flex items-center gap-1.5 text-xs text-[#667085]">
              <ShieldCheck className="h-3.5 w-3.5 text-[#315EFA]" />
              <span>Verified Governance</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Protocol */}
        <div className="pt-8 border-t border-[#E6E9EF] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#98A2B3]">
          <p>
            © {currentYear} {siteConfig.legalName}. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-4 font-mono text-[11px]">
            <span>DESIGN SYSTEM // WHITE-FIRST 2.0</span>
            <span className="hidden sm:inline" aria-hidden="true">·</span>
            <span>DOM // AERVENLABS.NET</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
