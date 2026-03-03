'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageCarouselProps {
  images: string[];
  alt: string;
  featured?: boolean;
  height?: 'small' | 'large'; // Control height for different contexts
}

export function ImageCarousel({ images, alt, featured, height = 'large' }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevious = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex(index);
  };

  const heightClass = height === 'small' ? 'h-48' : 'h-80';

  // If only one image, show simple image without controls
  if (images.length === 1) {
    return (
      <div className={`relative ${heightClass} overflow-hidden`}>
        <Image
          src={images[0]}
          alt={alt}
          fill
          className="object-cover"
          priority={height === 'large'}
        />
        {featured && (
          <div className="absolute top-4 right-4 bg-accent-600 text-white px-3 py-1 rounded-full text-xs font-semibold z-10">
            Featured
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`relative ${heightClass} overflow-hidden group`}>
      {/* Images */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <Image
              src={image}
              alt={`${alt} - Image ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-4 right-4 bg-accent-600 text-white px-3 py-1 rounded-full text-xs font-semibold z-10">
          Featured
        </div>
      )}

      {/* Navigation Arrows - Always visible in detail view, hover in cards */}
      <button
        onClick={goToPrevious}
        className={`absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all z-10 ${height === 'large' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
          }`}
        aria-label="Previous image"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={goToNext}
        className={`absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all z-10 ${height === 'large' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
          }`}
        aria-label="Next image"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={(e) => goToSlide(index, e)}
            className={`w-2 h-2 rounded-full transition-all ${index === currentIndex
                ? 'bg-white w-6'
                : 'bg-white/50 hover:bg-white/80'
              }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      {/* Image Counter */}
      <div className="absolute top-4 left-4 bg-black/50 text-white px-2 py-1 rounded text-xs font-medium backdrop-blur-sm z-10">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}
