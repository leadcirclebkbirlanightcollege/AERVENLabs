import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { CampusConnectPage } from './CampusConnectPage';
import { UnnatiPage } from './UnnatiPage';

/**
 * ProjectDetailPage — Dynamic Route Handler ('/projects/:slug')
 *
 * Showcases our two selected initiatives:
 * 1. Campus Connect ('/projects/campus-connect')
 * 2. UNNATI 2026–27 ('/projects/unnati-2026-27')
 * Any deprecated or non-existent slug cleanly redirects to '/projects'.
 */
export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  if (slug === 'campus-connect') {
    return <CampusConnectPage />;
  }

  if (slug === 'unnati-2026-27') {
    return <UnnatiPage />;
  }

  // Any other project slug redirects to /projects
  return <Navigate to="/projects" replace />;
};

export default ProjectDetailPage;
