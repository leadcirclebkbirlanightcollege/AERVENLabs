import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RootLayout } from './components/layout/RootLayout';
import { HomePage } from './pages/HomePage';

/**
 * Secondary pages are lazy-loaded via React.lazy() + dynamic import().
 * This splits the bundle so the homepage loads only its own code.
 * The HomePage itself is eagerly imported because it is the critical first render.
 */
const JourneyPage = lazy(() => import('./pages/JourneyPage').then(m => ({ default: m.JourneyPage })));
const TeamPage = lazy(() => import('./pages/TeamPage').then(m => ({ default: m.TeamPage })));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage').then(m => ({ default: m.ProjectsPage })));
const CampusConnectPage = lazy(() => import('./pages/CampusConnectPage').then(m => ({ default: m.CampusConnectPage })));
const PartnersPage = lazy(() => import('./pages/PartnersPage').then(m => ({ default: m.PartnersPage })));
const VisionPage = lazy(() => import('./pages/VisionPage').then(m => ({ default: m.VisionPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage').then(m => ({ default: m.PrivacyPage })));
const TermsPage = lazy(() => import('./pages/TermsPage').then(m => ({ default: m.TermsPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then(m => ({ default: m.NotFoundPage })));

/**
 * Root Application Component.
 * Establishes client-side routing architecture for AervenLabs website.
 * Uses Suspense with a minimal fallback (black screen) consistent with the dark design system.
 */
export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="min-h-screen bg-black" aria-hidden="true" />}>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<HomePage />} />
            <Route path="journey" element={<JourneyPage />} />
            <Route path="team" element={<TeamPage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="projects/campus-connect" element={<CampusConnectPage />} />
            <Route path="partners" element={<PartnersPage />} />
            <Route path="vision" element={<VisionPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="privacy" element={<PrivacyPage />} />
            <Route path="terms" element={<TermsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
