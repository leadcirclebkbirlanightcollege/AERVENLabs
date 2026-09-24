import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RootLayout } from './components/layout/RootLayout';
import { HomePage } from './pages/HomePage';
import { JourneyPage } from './pages/JourneyPage';
import { TeamPage } from './pages/TeamPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { CampusConnectPage } from './pages/CampusConnectPage';
import { PartnersPage } from './pages/PartnersPage';
import { VisionPage } from './pages/VisionPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { NotFoundPage } from './pages/NotFoundPage';

/**
 * Root Application Component.
 * Establishes client-side routing architecture for AervenLabs website.
 */
export const App: React.FC = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default App;
