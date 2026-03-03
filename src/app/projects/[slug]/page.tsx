import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import { ArrowLeft, Calendar, ExternalLink, Github, Tag, User } from 'lucide-react';
import { getProjectBySlug, getAllProjectSlugs } from '@/lib/mdx';
import { mdxComponents } from '@/components/MDXComponents';
import { ImageCarousel } from '@/components/ImageCarousel';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({
    slug: slug.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.frontmatter.title} - Projects`,
    description: project.frontmatter.excerpt,
  };
}

export default function ProjectDetailPage({ params }: PageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const { frontmatter, content } = project;

  // Convert thumb to array for carousel
  const thumbnailImages = Array.isArray(frontmatter.thumb)
    ? frontmatter.thumb
    : [frontmatter.thumb];

  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <article className="max-w-4xl mx-auto">
        {/* Back button */}
        <Link
          href="/projects"
          className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline mb-8"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to projects
        </Link>

        {/* Header */}
        <header className="mb-12">
          {/* Thumbnail Carousel */}
          <div className="relative w-full rounded-xl overflow-hidden mb-8 shadow-2xl">
            <ImageCarousel
              images={thumbnailImages}
              alt={frontmatter.title}
            />
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {frontmatter.title}
          </h1>

          {/* Meta info */}
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-6">
            <div className="flex items-center">
              <Calendar size={16} className="mr-2" />
              {new Date(frontmatter.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </div>

            {frontmatter.roles && frontmatter.roles.length > 0 && (
              <div className="flex items-center">
                <User size={16} className="mr-2" />
                {frontmatter.roles.join(', ')}
              </div>
            )}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {frontmatter.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
              >
                <Tag size={14} className="mr-1" />
                {tag}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-4">
            {frontmatter.demo && (
              <a
                href={frontmatter.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors shadow-lg"
              >
                <ExternalLink size={20} className="mr-2" />
                Live Demo
              </a>
            )}

            {frontmatter.repo && (
              <a
                href={frontmatter.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium rounded-lg transition-colors"
              >
                <Github size={20} className="mr-2" />
                View Code
              </a>
            )}
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none
          prose-headings:scroll-mt-20
          prose-pre:p-0 prose-pre:m-0 prose-pre:bg-transparent
          prose-code:before:content-none prose-code:after:content-none
          prose-table:border-collapse prose-table:border prose-table:border-gray-300 dark:prose-table:border-gray-700
          prose-th:border prose-th:border-gray-300 dark:prose-th:border-gray-700 prose-th:bg-gray-50 dark:prose-th:bg-gray-800 prose-th:p-3
          prose-td:border prose-td:border-gray-300 dark:prose-td:border-gray-700 prose-td:p-3
        ">
          <MDXRemote
            source={content}
            components={mdxComponents}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
              },
            }}
          />
        </div>
      </article>
    </div>
  );
}
