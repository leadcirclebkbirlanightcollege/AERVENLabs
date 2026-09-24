import React from 'react';
import { Link } from 'react-router-dom';
import { navigationItems, footerLegalItems } from '../../data/navigation';
import { siteConfig } from '../../config/site';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle bg-black text-neutral-400">
      <div className="container-architectural py-16 md:py-24">
        {/* Top Section: Brand Identity & Primary Links */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 pb-12 border-b border-border-subtle">
          {/* Brand & Purpose Statement */}
          <div className="lg:col-span-5 space-y-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2.5 outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label={`${siteConfig.name} — Return to homepage`}
            >
              <img
                src="/assets/aervenlabs-logo.png"
                alt=""
                className="h-6 w-6 object-contain"
                aria-hidden="true"
              />
              <span className="font-sans text-sm font-semibold tracking-wider text-white uppercase">
                {siteConfig.name}
              </span>
            </Link>
            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              {siteConfig.tagline}
            </p>
            <p className="text-xs text-neutral-600 font-mono tracking-tight">
              {siteConfig.legalName}
            </p>
          </div>

          {/* Navigation Links Column */}
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-4">
              Navigation
            </p>
            <ul className="grid grid-cols-2 gap-y-2.5 gap-x-6">
              {navigationItems.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.path}
                    className="text-sm text-neutral-400 transition-colors hover:text-white outline-none focus-visible:ring-1 focus-visible:ring-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect / Social Channels Column */}
          <div className="lg:col-span-3">
            <p className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-4">
              Connect
            </p>
            <ul className="space-y-2.5">
              {siteConfig.links.github && (
                <li>
                  <a
                    href={siteConfig.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-neutral-400 transition-colors hover:text-white outline-none focus-visible:ring-1 focus-visible:ring-white"
                  >
                    GitHub
                  </a>
                </li>
              )}
              {siteConfig.links.linkedin && (
                <li>
                  <a
                    href={siteConfig.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-neutral-400 transition-colors hover:text-white outline-none focus-visible:ring-1 focus-visible:ring-white"
                  >
                    LinkedIn
                  </a>
                </li>
              )}
              {siteConfig.links.twitter && (
                <li>
                  <a
                    href={siteConfig.links.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-neutral-400 transition-colors hover:text-white outline-none focus-visible:ring-1 focus-visible:ring-white"
                  >
                    Twitter / X
                  </a>
                </li>
              )}
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-neutral-400 transition-colors hover:text-white outline-none focus-visible:ring-1 focus-visible:ring-white"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Copyright & Legal Policies */}
        <div className="flex flex-col-reverse items-start justify-between gap-6 pt-8 md:flex-row md:items-center">
          <p className="text-xs text-neutral-600">
            © {currentYear} {siteConfig.legalName}. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            {footerLegalItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className="text-xs text-neutral-500 transition-colors hover:text-neutral-300 outline-none focus-visible:ring-1 focus-visible:ring-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
