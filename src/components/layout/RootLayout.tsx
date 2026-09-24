import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';

/**
 * RootLayout — Global Site Shell.
 * Integrates global desktop and mobile navigation, main content outlet, and baseline footer.
 * Every page is isolated and responsible for its own content.
 */
export const RootLayout: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground antialiased selection:bg-foreground selection:text-background">
      {/* Scroll restoration helper */}
      <ScrollToTop />

      {/* Skip to main content link for keyboard accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-background focus:text-foreground focus:border focus:border-border focus:rounded-[2px] focus:outline-none focus:ring-2 focus:ring-ring"
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
