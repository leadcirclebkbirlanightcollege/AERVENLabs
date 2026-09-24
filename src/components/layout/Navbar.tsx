import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { navigationItems } from '../../data/navigation';
import { siteConfig } from '../../config/site';
import { MobileMenu } from './MobileMenu';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuTriggerRef = useRef<HTMLButtonElement>(null);

  // Monitor scroll state with passive listener (guarded to prevent redundant renders)
  useEffect(() => {
    let lastScrolled = window.scrollY > 20;
    setIsScrolled(lastScrolled);

    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
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
            ? 'bg-black/90 border-b border-border backdrop-blur-md py-4'
            : 'bg-black/40 border-b border-border-subtle py-5 md:py-6 backdrop-blur-sm'
        }`}
      >
        <div className="container-architectural flex items-center justify-between">
          {/* Logo + Wordmark */}
          <Link
            to="/"
            className="group flex items-center gap-3 outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            aria-label={`${siteConfig.name} — Return to homepage`}
          >
            <img
              src="/assets/aervenlabs-logo.png"
              alt=""
              className="h-7 w-7 object-contain transition-transform duration-300 group-hover:scale-105"
              aria-hidden="true"
            />
            <span className="font-sans text-sm font-semibold tracking-wider text-white uppercase transition-opacity duration-200 group-hover:opacity-90">
              {siteConfig.name}
            </span>
          </Link>

          {/* Desktop Navigation Links */}
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
                  className={`relative px-3.5 py-1.5 text-sm font-medium transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
                    active
                      ? 'text-white'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {item.label}
                  {active && (
                    <span
                      className="absolute bottom-0 left-3.5 right-3.5 h-[1px] bg-white transition-all duration-300"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Trigger Button */}
          <div className="flex items-center lg:hidden">
            <button
              ref={menuTriggerRef}
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation-menu"
              className="touch-target flex items-center justify-center rounded-[2px] text-neutral-400 outline-none transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <Menu className="h-6 w-6 stroke-[1.5]" />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Overlay */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        triggerRef={menuTriggerRef}
      />
    </>
  );
};
