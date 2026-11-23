import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RootLayout } from './components/layout/RootLayout';
import { HomePage } from './pages/HomePage';

/**
 * Secondary pages are lazy-loaded via React.lazy() + dynamic import().
 * HomePage is eagerly imported for optimal critical first render.
 */
const JourneyPage = lazy(() => import('./pages/JourneyPage').then(m => ({ default: m.JourneyPage })));
const WhatWeBuildPage = lazy(() => import('./pages/WhatWeBuildPage').then(m => ({ default: m.WhatWeBuildPage })));
const TeamPage = lazy(() => import('./pages/TeamPage').then(m => ({ default: m.TeamPage })));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage').then(m => ({ default: m.ProjectsPage })));
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage').then(m => ({ default: m.ProjectDetailPage })));
const CampusConnectPage = lazy(() => import('./pages/CampusConnectPage').then(m => ({ default: m.CampusConnectPage })));
const UnnatiPage = lazy(() => import('./pages/UnnatiPage').then(m => ({ default: m.UnnatiPage })));
const PartnersPage = lazy(() => import('./pages/PartnersPage').then(m => ({ default: m.PartnersPage })));
const VisionPage = lazy(() => import('./pages/VisionPage').then(m => ({ default: m.VisionPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage').then(m => ({ default: m.PrivacyPage })));
const TermsPage = lazy(() => import('./pages/TermsPage').then(m => ({ default: m.TermsPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then(m => ({ default: m.NotFoundPage })));

/**
 * Root Application Component.
 * Establishes client-side routing architecture for AERVENLabs website.
 * Clean white-first Suspense fallback.
 */
export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="min-h-screen bg-white" aria-hidden="true" />}>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<HomePage />} />
            <Route path="journey" element={<JourneyPage />} />
            <Route path="what-we-build" element={<WhatWeBuildPage />} />
            <Route path="team" element={<TeamPage />} />
            <Route path="projects" element={<ProjectsPage />} />
            {/* Dedicated case study routes for Campus Connect and UNNATI 2026–27 */}
            <Route path="projects/campus-connect" element={<CampusConnectPage />} />
            <Route path="projects/unnati-2026-27" element={<UnnatiPage />} />
            <Route path="projects/:slug" element={<ProjectDetailPage />} />
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
