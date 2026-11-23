import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { CampusConnectPage } from './CampusConnectPage';

/**
 * ProjectDetailPage — Dynamic Route Handler ('/projects/:slug')
 *
 * STRICT REQUIREMENT: Campus Connect is the ONLY project displayed anywhere on the website.
 * All valid project queries map directly to CampusConnectPage. Any deprecated/non-existent
 * slug cleanly redirects to '/projects'.
 */
export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  if (slug === 'campus-connect') {
    return <CampusConnectPage />;
  }

  // Any other project slug redirects to /projects
  return <Navigate to="/projects" replace />;
};

export default ProjectDetailPage;
