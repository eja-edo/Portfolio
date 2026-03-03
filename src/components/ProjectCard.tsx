import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import { ProjectFrontmatter } from '@/types';

interface ProjectCardProps {
  project: ProjectFrontmatter & { slug: string };
}

export function ProjectCard({ project }: ProjectCardProps) {
  // Get first image only for card thumbnail
  const thumbnailImage = Array.isArray(project.thumb) ? project.thumb[0] : project.thumb;

  return (
    <div className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 flex flex-col animate-fade-in">
      {/* Thumbnail */}
      <Link href={`/projects/${project.slug}`} className="relative h-48 overflow-hidden">
        <Image
          src={thumbnailImage}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {project.featured && (
          <div className="absolute top-4 right-4 bg-accent-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
            Featured
          </div>
        )}
      </Link>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <Link href={`/projects/${project.slug}`}>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
            {project.title}
          </h3>
        </Link>

        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-1 line-clamp-3">
          {project.excerpt}
        </p>

        {/* Date */}
        <div className="flex items-center text-xs text-gray-500 dark:text-gray-500 mb-3">
          <Calendar size={14} className="mr-1" />
          {new Date(project.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
          })}
        </div>

        {/* Tags */}
        <div className="flex gap-2 mb-4 overflow-hidden">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs whitespace-nowrap flex-shrink-0"
            >
              <Tag size={12} className="mr-1" />
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200 dark:border-gray-700">
          <Link
            href={`/projects/${project.slug}`}
            className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded transition-colors"
          >
            Details
          </Link>

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 text-sm font-medium rounded transition-colors"
              aria-label="View demo"
            >
              <ExternalLink size={16} />
            </a>
          )}

          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 text-sm font-medium rounded transition-colors"
              aria-label="View repository"
            >
              <Github size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
