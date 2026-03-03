import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ProjectCard } from './ProjectCard';
import { getAllProjects } from '@/lib/mdx';
import { FeaturedProjectsClient } from './FeaturedProjectsClient';

export function FeaturedProjects() {
  const allProjects = getAllProjects();
  const featuredProjects = allProjects
    .filter(p => p.featured)
    .slice(0, 3);

  return <FeaturedProjectsClient projects={featuredProjects} />;
}
