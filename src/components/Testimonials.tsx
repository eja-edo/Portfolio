'use client';

import { useMemo } from 'react';
import { ScrollAnimation } from './ScrollAnimation';

interface TestimonialsProps {
  tags: string[];
}

interface TagRowProps {
  tags: string[];
  direction: 'left' | 'right';
  speed?: number;
  colorScheme: 'primary' | 'accent' | 'gradient';
}

function TagRow({ tags, direction, speed = 30, colorScheme }: TagRowProps) {
  // Duplicate tags for seamless infinite scroll
  const duplicatedTags = [...tags, ...tags, ...tags, ...tags];

  const getTagStyles = (index: number) => {
    switch (colorScheme) {
      case 'primary':
        return 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 border-primary-200 dark:border-primary-700';
      case 'accent':
        return 'bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 border-accent-200 dark:border-accent-700';
      case 'gradient':
        return 'bg-gradient-to-r from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600';
      default:
        return 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700';
    }
  };

  return (
    <div className="relative overflow-hidden py-2">
      {/* Gradient masks for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10 pointer-events-none" />

      <div
        className={`flex gap-4 whitespace-nowrap ${direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'
          }`}
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {duplicatedTags.map((tag, index) => (
          <span
            key={`${tag}-${index}`}
            className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 hover:scale-105 hover:shadow-md cursor-default ${getTagStyles(index)}`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Testimonials({ tags }: TestimonialsProps) {
  // Split tags into 3 rows
  const { row1, row2, row3 } = useMemo(() => {
    const sortedTags = [...tags].sort();
    const chunkSize = Math.ceil(sortedTags.length / 3);
    return {
      row1: sortedTags.slice(0, chunkSize),
      row2: sortedTags.slice(chunkSize, chunkSize * 2),
      row3: sortedTags.slice(chunkSize * 2),
    };
  }, [tags]);

  if (tags.length === 0) {
    return null;
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollAnimation animation="fadeInUp" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Các công nghệ và kỹ năng tôi sử dụng trong các dự án
          </p>
        </ScrollAnimation>

        {/* Infinite Scrolling Tags */}
        <ScrollAnimation animation="fadeIn" delay={0.2}>
          <div>
            {row1.length > 0 && <TagRow tags={row1} direction="left" speed={35} colorScheme="primary" />}
            {row2.length > 0 && <TagRow tags={row2} direction="right" speed={40} colorScheme="accent" />}
            {row3.length > 0 && <TagRow tags={row3} direction="left" speed={30} colorScheme="gradient" />}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
