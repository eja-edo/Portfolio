'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, ZoomIn, Maximize2 } from 'lucide-react';

interface MDXImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export function MDXImage({ src, alt, width, height }: MDXImageProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <span className="block my-8 group relative">
        <span className="block relative overflow-hidden rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800">
          <Image
            src={src}
            alt={alt}
            width={width || 1200}
            height={height || 600}
            className={`w-full h-auto transition-all duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            onLoad={() => setIsLoaded(true)}
            style={{ width: '100%', height: 'auto' }}
          />

          {/* Loading placeholder */}
          {!isLoaded && (
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="w-12 h-12 border-4 border-primary-600 border-t-transparent rounded-full animate-spin" />
            </span>
          )}

          {/* Zoom button overlay - only show after mount */}
          {isMounted && (
            <>
              <button
                onClick={() => setIsFullscreen(true)}
                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm"
                aria-label="View fullscreen"
              >
                <Maximize2 size={20} />
              </button>

              {/* Zoom hint */}
              <span className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 block">
                <span className="flex items-center gap-2 text-white text-sm">
                  <ZoomIn size={16} />
                  <span>Click to enlarge</span>
                </span>
              </span>
            </>
          )}
        </span>

        {/* Caption */}
        {alt && (
          <span className="block mt-3 text-sm text-center text-gray-600 dark:text-gray-400 italic">
            {alt}
          </span>
        )}
      </span>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setIsFullscreen(false)}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
            onClick={() => setIsFullscreen(false)}
            aria-label="Close fullscreen"
          >
            <X size={24} />
          </button>

          {/* Fullscreen image */}
          <span className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <Image
              src={src}
              alt={alt}
              width={width || 1920}
              height={height || 1080}
              className="max-w-full max-h-full w-auto h-auto object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </span>

          {/* Caption in fullscreen */}
          {alt && (
            <span className="absolute bottom-8 left-0 right-0 text-center text-white text-sm bg-black/50 py-2 px-4 backdrop-blur-sm block">
              {alt}
            </span>
          )}
        </div>
      )}
    </>
  );
}
