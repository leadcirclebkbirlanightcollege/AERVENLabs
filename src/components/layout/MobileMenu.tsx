import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { navigationItems, footerLegalItems } from '../../data/navigation';
import { siteConfig } from '../../config/site';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, triggerRef }) => {
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Check if reduced motion is preferred
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Route-aware active checker
  const isRouteActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  // Scroll lock & Escape key listener & focus management
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      // Move focus into the menu (close button)
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);

      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          onClose();
        }
        // Focus trap
        if (event.key === 'Tab' && menuRef.current) {
          const focusableElements = menuRef.current.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled])'
          );
          if (focusableElements.length > 0) {
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            if (event.shiftKey && document.activeElement === firstElement) {
              event.preventDefault();
              lastElement.focus();
            } else if (!event.shiftKey && document.activeElement === lastElement) {
              event.preventDefault();
              firstElement.focus();
            }
          }
        }
      };

      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
        // Restore focus to trigger button
        triggerRef.current?.focus();
      };
    }
  }, [isOpen, onClose, triggerRef]);

  const overlayVariants = {
    closed: {
      opacity: 0,
      transition: { duration: prefersReducedMotion ? 0.01 : 0.2, ease: [0.16, 1, 0.3, 1] as const },
    },
    open: {
      opacity: 1,
      transition: { duration: prefersReducedMotion ? 0.01 : 0.25, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const listVariants = {
    closed: { transition: { staggerChildren: 0.02, staggerDirection: -1 } },
    open: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.04,
        delayChildren: prefersReducedMotion ? 0 : 0.08,
      },
    },
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 12,
      transition: { duration: 0.15 },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="mobile-navigation-menu"
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
          initial="closed"
          animate="open"
          exit="closed"
          variants={overlayVariants}
          className="fixed inset-0 z-50 flex flex-col justify-between bg-black px-6 py-5 sm:px-8 overflow-y-auto"
        >
          {/* Top Bar inside Overlay */}
          <div className="flex items-center justify-between border-b border-border-subtle pb-4">
            <Link
              to="/"
              onClick={onClose}
              className="flex items-center gap-2.5 outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              aria-label={`${siteConfig.name} — Return to homepage`}
            >
              <img
                src="/assets/aervenlabs-logo.png"
                alt=""
                className="h-7 w-7 object-contain"
                aria-hidden="true"
              />
              <span className="font-sans text-sm font-semibold tracking-wider text-white uppercase">
                {siteConfig.name}
              </span>
            </Link>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Close navigation menu"
              className="touch-target flex items-center justify-center rounded-[2px] text-neutral-400 outline-none transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <X className="h-6 w-6 stroke-[1.5]" />
            </button>
          </div>

          {/* Primary Navigation Links */}
          <nav aria-label="Mobile primary navigation" className="my-auto py-6">
            <motion.ul variants={listVariants} className="space-y-4">
              {navigationItems.map((item) => {
                const active = isRouteActive(item.path);
                return (
                  <motion.li key={item.id} variants={itemVariants}>
                    <Link
                      to={item.path}
                      onClick={onClose}
                      aria-current={active ? 'page' : undefined}
                      className={`group flex items-center justify-between py-2 text-2xl font-medium tracking-tight transition-colors outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
                        active
                          ? 'text-white'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      <span>{item.label}</span>
                      {active && (
                        <span
                          className="h-1.5 w-1.5 rounded-full bg-white"
                          aria-hidden="true"
                        />
                      )}
                    </Link>
                  </motion.li>
                );
              })}
            </motion.ul>
          </nav>

          {/* Secondary / Legal Footer inside Mobile Menu */}
          <div className="border-t border-border-subtle pt-6 pb-2">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex gap-6">
                {footerLegalItems.map((item) => (
                  <Link
                    key={item.id}
                    to={item.path}
                    onClick={onClose}
                    className="text-xs uppercase tracking-widest text-neutral-500 outline-none transition-colors hover:text-neutral-300 focus-visible:ring-2 focus-visible:ring-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <p className="text-xs text-neutral-600">
                {siteConfig.legalName}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
