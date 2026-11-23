import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';

/**
 * RootLayout — Global Site Shell.
 * Clean, white-first foundational layout.
 */
export const RootLayout: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#101828] antialiased selection:bg-[#DCE5FF] selection:text-[#101828]">
      {/* Scroll restoration helper */}
      <ScrollToTop />

      {/* Skip to main content link for keyboard accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#101828] focus:text-white focus:rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#315EFA]"
      >
        Skip to main content
      </a>

      {/* Global Fixed Header / Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1 pt-16 md:pt-20 focus:outline-none" tabIndex={-1}>
        <Outlet />
      </main>

      {/* Global Baseline Footer */}
      <Footer />
    </div>
  );
};

export default RootLayout;
