import { ProjectsClient } from '@/components/ProjectsClient';
import { getAllProjects } from '@/lib/mdx';
import { Suspense } from 'react';
import { LoadingSpinner } from '@/components/Loading';

export const metadata = {
  title: 'Projects - Portfolio',
  description: 'Explore my portfolio of web development projects',
};

export default function ProjectsPage() {
  // Get all projects server-side
  const allProjects = getAllProjects();

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <ProjectsClient projects={allProjects} />
    </Suspense>
  );
}
