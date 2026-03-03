'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export function PageTransitionLoader() {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Start loading
    setIsLoading(true);
    setProgress(0);

    // Simulate progressive loading
    const intervals = [
      { time: 100, progress: 20 },
      { time: 300, progress: 40 },
      { time: 500, progress: 60 },
      { time: 800, progress: 80 },
      { time: 1000, progress: 95 },
    ];

    const timeouts = intervals.map(({ time, progress: targetProgress }) =>
      setTimeout(() => setProgress(targetProgress), time)
    );

    // Complete loading
    const completeTimeout = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setIsLoading(false);
        setProgress(0);
      }, 200);
    }, 1200);

    return () => {
      timeouts.forEach(clearTimeout);
      clearTimeout(completeTimeout);
    };
  }, [pathname]);

  if (!isLoading && progress === 0) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] h-1 bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 transition-all duration-300 ease-out shadow-lg shadow-primary-500/50"
        style={{
          width: `${progress}%`,
          opacity: isLoading ? 1 : 0,
        }}
      >
        {/* Animated shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
      </div>
    </div>
  );
}
