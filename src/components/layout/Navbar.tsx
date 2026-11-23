import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, ArrowRight } from 'lucide-react';
import { navigationItems } from '../../data/navigation';
import { siteConfig } from '../../config/site';
import { MobileMenu } from './MobileMenu';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuTriggerRef = useRef<HTMLButtonElement>(null);

  // Monitor scroll state with passive listener
  useEffect(() => {
    let lastScrolled = window.scrollY > 15;
    setIsScrolled(lastScrolled);

    const handleScroll = () => {
      const scrolled = window.scrollY > 15;
      if (scrolled !== lastScrolled) {
        lastScrolled = scrolled;
        setIsScrolled(scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Route-aware active checker
  const isRouteActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300 ease-cinematic ${
          isScrolled
            ? 'bg-white/95 border-b border-[#E6E9EF] shadow-sm backdrop-blur-md py-3.5'
            : 'bg-white/80 border-b border-[#E6E9EF]/60 py-4 md:py-5 backdrop-blur-sm'
        }`}
      >
        <div className="container-architectural flex items-center justify-between">
          {/* Left: AERVENLabs Logo + Professional Wordmark */}
          <Link
            to="/"
            className="group flex items-center gap-3 outline-none focus-visible:ring-2 focus-visible:ring-[#315EFA] focus-visible:ring-offset-2 rounded-[4px]"
            aria-label={`${siteConfig.name} — Return to homepage`}
          >
            <div className="relative flex items-center justify-center h-8 w-8 rounded-[6px] bg-[#F7F8FA] border border-[#E6E9EF] p-1.5 transition-transform duration-300 group-hover:scale-105">
              <img
                src="/assets/aervenlabs-logo.png"
                alt=""
                className="h-full w-full object-contain"
                aria-hidden="true"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-sm font-bold tracking-tight text-[#101828] uppercase transition-colors duration-200 group-hover:text-[#315EFA]">
                {siteConfig.name}
              </span>
              <span className="font-mono text-[9px] tracking-wider text-[#667085] hidden sm:block">
                TECHNOLOGIES
              </span>
            </div>
          </Link>

          {/* Center/Right: Desktop Navigation Links */}
          <nav
            aria-label="Primary desktop navigation"
            className="hidden items-center gap-1 lg:flex"
          >
            {navigationItems.map((item) => {
              const active = isRouteActive(item.path);
              return (
                <Link
                  key={item.id}
                  to={item.path}
                  aria-current={active ? 'page' : undefined}
                  className={`relative px-3.5 py-2 text-[13px] font-medium transition-all duration-200 rounded-[6px] outline-none focus-visible:ring-2 focus-visible:ring-[#315EFA] ${
                    active
                      ? 'text-[#101828] font-semibold bg-[#F7F8FA]'
                      : 'text-[#667085] hover:text-[#101828] hover:bg-[#F7F8FA]/60'
                  }`}
                >
                  {item.label}
                  {active && (
                    <span
                      className="absolute bottom-1 left-3.5 right-3.5 h-[2px] bg-[#315EFA] rounded-full"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right CTA Button & Mobile Trigger */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wide text-white bg-[#101828] hover:bg-[#315EFA] active:scale-[0.98] rounded-[8px] transition-all duration-200 shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-[#315EFA]"
            >
              <span>Let's Connect</span>
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>

            {/* Mobile Menu Trigger Button */}
            <div className="flex items-center lg:hidden">
              <button
                ref={menuTriggerRef}
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-navigation-menu"
                className="touch-target flex items-center justify-center rounded-[8px] border border-[#E6E9EF] bg-[#F7F8FA] text-[#101828] hover:bg-[#F1F3F6] outline-none transition-colors focus-visible:ring-2 focus-visible:ring-[#315EFA]"
              >
                <Menu className="h-5 w-5 stroke-[2]" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Responsive Mobile Navigation Overlay */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        triggerRef={menuTriggerRef}
      />
    </>
  );
};
