'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ProjectCard } from './ProjectCard';
import { ProjectFrontmatter } from '@/types';
import { ScrollAnimation, StaggerContainer, StaggerItem } from './ScrollAnimation';

interface FeaturedProjectsClientProps {
    projects: (ProjectFrontmatter & { slug: string })[];
}

export function FeaturedProjectsClient({ projects }: FeaturedProjectsClientProps) {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <ScrollAnimation animation="fadeInUp" className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Khám phá một số dự án nổi bật mà tôi đã thực hiện với công nghệ hiện đại
                    </p>
                </ScrollAnimation>

                {/* Projects Grid */}
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12" staggerDelay={0.2}>
                    {projects.map((project) => (
                        <StaggerItem key={project.slug} animation="fadeInUp">
                            <ProjectCard project={project} />
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                {/* View All Link */}
                <ScrollAnimation animation="fadeIn" delay={0.3} className="text-center">
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors shadow-lg hover:shadow-xl group"
                    >
                        View All Projects
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </ScrollAnimation>
            </div>
        </section>
    );
}
