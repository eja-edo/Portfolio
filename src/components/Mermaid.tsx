'use client';

import { useEffect, useRef, useState } from 'react';
import { ZoomIn, ZoomOut, Maximize2, Minimize2 } from 'lucide-react';

interface MermaidProps {
  chart: string;
  className?: string;
}

export function Mermaid({ chart, className = '' }: MermaidProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgContainerRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [scale, setScale] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const renderDiagram = async () => {
      if (!containerRef.current) return;
      if (!chart || typeof chart !== 'string') {
        setError('Invalid chart data');
        setIsLoading(false);
        return;
      }

      setIsLoading(true);

      try {
        // Dynamically import mermaid only on client side
        const mermaid = (await import('mermaid')).default;

        // Initialize mermaid
        mermaid.initialize({
          startOnLoad: false,
          theme: 'dark',
          themeVariables: {
            primaryColor: '#0ea5e9',
            primaryTextColor: '#fff',
            primaryBorderColor: '#0284c7',
            lineColor: '#64748b',
            secondaryColor: '#d946ef',
            tertiaryColor: '#1e293b',
            background: '#0f172a',
            mainBkg: '#1e293b',
            secondBkg: '#334155',
            textColor: '#e2e8f0',
            fontSize: '16px',
          },
          fontFamily: 'Inter, system-ui, sans-serif',
          securityLevel: 'loose',
        });

        // Generate unique ID
        const id = `mermaid-${Math.random().toString(36).substring(2, 11)}`;

        // Render the diagram
        const { svg } = await mermaid.render(id, chart);

        if (svgContainerRef.current) {
          svgContainerRef.current.innerHTML = svg;
          setError(null);
          setIsLoading(false);
        }
      } catch (err: any) {
        const errorMessage = err?.message || String(err);
        console.error('Error rendering Mermaid diagram:', errorMessage);
        console.error('Chart content:', chart);
        setError(errorMessage);
        setIsLoading(false);

        if (svgContainerRef.current) {
          svgContainerRef.current.innerHTML = `
            <div class="p-4 bg-red-50 dark:bg-red-950/30 border border-red-300 dark:border-red-800 rounded-lg text-red-700 dark:text-red-400 text-left">
              <p class="font-semibold mb-2">❌ Error rendering Mermaid diagram</p>
              <p class="text-sm mb-2">${errorMessage}</p>
              <details class="text-xs">
                <summary class="cursor-pointer hover:underline">View diagram code</summary>
                <pre class="mt-2 overflow-auto bg-red-900/20 p-2 rounded">${chart}</pre>
              </details>
            </div>
          `;
        }
      }
    };

    renderDiagram();
  }, [chart]);

  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + 0.2, 3));
  };

  const handleZoomOut = () => {
    setScale((prev) => Math.max(prev - 0.2, 0.5));
  };

  const handleReset = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const toggleFullscreen = async () => {
    if (!containerRef.current) return;

    try {
      if (!document.fullscreenElement) {
        // Enter fullscreen
        await containerRef.current.requestFullscreen();
        setIsFullscreen(true);
        setScale(1);
        setPosition({ x: 0, y: 0 });
      } else {
        // Exit fullscreen
        await document.exitFullscreen();
        setIsFullscreen(false);
      }
    } catch (err) {
      console.error('Fullscreen error:', err);
    }
  };

  // Listen for fullscreen changes (ESC key)
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    setScale((prev) => Math.max(0.5, Math.min(3, prev + delta)));
  };

  return (
    <div
      ref={containerRef}
      className={`mermaid-container relative my-8 bg-gray-50 dark:bg-gray-900/50 rounded-lg overflow-hidden ${isFullscreen ? 'bg-gray-900' : ''
        } ${className}`}
    >
      {/* Control Buttons */}
      {!isLoading && !error && (
        <div className="absolute top-4 right-4 flex gap-2 z-10">
          <button
            onClick={handleZoomIn}
            className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Zoom in"
            title="Zoom in"
          >
            <ZoomIn size={18} className="text-gray-700 dark:text-gray-300" />
          </button>
          <button
            onClick={handleZoomOut}
            className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Zoom out"
            title="Zoom out"
          >
            <ZoomOut size={18} className="text-gray-700 dark:text-gray-300" />
          </button>
          <button
            onClick={handleReset}
            className="px-3 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-xs font-medium text-gray-700 dark:text-gray-300"
            title="Reset view"
          >
            Reset
          </button>
          <button
            onClick={toggleFullscreen}
            className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label={isFullscreen ? 'Exit fullscreen' : 'Fullscreen'}
            title={isFullscreen ? 'Exit fullscreen' : 'Fullscreen'}
          >
            {isFullscreen ? (
              <Minimize2 size={18} className="text-gray-700 dark:text-gray-300" />
            ) : (
              <Maximize2 size={18} className="text-gray-700 dark:text-gray-300" />
            )}
          </button>
        </div>
      )}

      {/* Loading State */}
      {isLoading && (
        <div className="flex flex-col items-center justify-center gap-3 min-h-[200px] p-6">
          <div className="w-8 h-8 border-3 border-primary-600 border-t-transparent rounded-full animate-spin" />
          <p className="text-sm text-gray-500 dark:text-gray-400">Rendering diagram...</p>
        </div>
      )}

      {/* SVG Container with Pan & Zoom */}
      <div
        className={`flex justify-center items-center p-6 min-h-[200px] overflow-hidden ${isDragging ? 'cursor-grabbing' : 'cursor-grab'
          } ${isLoading ? 'hidden' : ''}`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onWheel={handleWheel}
        style={{
          minHeight: isFullscreen ? '100vh' : '200px',
        }}
      >
        <div
          ref={svgContainerRef}
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
            transition: isDragging ? 'none' : 'transform 0.1s ease-out',
          }}
        />
      </div>

      {/* Zoom Level Indicator */}
      {!isLoading && !error && (
        <div className="absolute bottom-4 left-4 px-3 py-1 bg-white dark:bg-gray-800 rounded-lg shadow-md text-xs font-medium text-gray-700 dark:text-gray-300">
          {Math.round(scale * 100)}%
        </div>
      )}
    </div>
  );
}
