'use client';

import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, Minimize2 } from 'lucide-react';
import { YouTube } from './YouTube';

interface MDXVideoProps {
  src: string;
  poster?: string;
  caption?: string;
  title?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
}

export function MDXVideo({
  src,
  poster,
  caption,
  title,
  autoPlay = false,
  loop = false,
  muted = false
}: MDXVideoProps) {
  // Check if it's a YouTube URL
  const isYouTube = /(?:youtube\.com|youtu\.be)/.test(src);

  if (isYouTube) {
    return (
      <YouTube
        src={src}
        title={title || caption}
        autoplay={autoPlay}
        muted={muted}
        loop={loop}
      />
    );
  }
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(muted);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = async () => {
    if (!videoRef.current) return;

    try {
      if (!document.fullscreenElement) {
        await videoRef.current.requestFullscreen();
        setIsFullscreen(true);
      } else {
        await document.exitFullscreen();
        setIsFullscreen(false);
      }
    } catch (err) {
      console.error('Fullscreen error:', err);
    }
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(videoRef.current.duration);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;
    const time = parseFloat(e.target.value);
    videoRef.current.currentTime = time;
    setCurrentTime(time);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="my-8">
      <div className="relative overflow-hidden rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 bg-black group">
        {/* Video element */}
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          className="w-full"
          autoPlay={!!autoPlay}
          loop={!!loop}
          muted={!!muted}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={() => setIsPlaying(false)}
        />

        {/* Custom controls overlay - only show after mount */}
        {isMounted && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end">
            {/* Progress bar */}
            <div className="px-4 mb-2">
              <input
                type="range"
                min="0"
                max={duration || 0}
                value={currentTime}
                onChange={handleSeek}
                className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-primary-600"
                style={{
                  background: `linear-gradient(to right, #0ea5e9 0%, #0ea5e9 ${(currentTime / duration) * 100}%, #4b5563 ${(currentTime / duration) * 100}%, #4b5563 100%)`
                }}
              />
              <div className="flex justify-between text-xs text-white mt-1">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Control buttons */}
            <div className="flex items-center gap-3 px-4 pb-4">
              {/* Play/Pause */}
              <button
                onClick={togglePlay}
                className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
              </button>

              {/* Volume */}
              <button
                onClick={toggleMute}
                className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
                aria-label={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>

              <div className="flex-1" />

              {/* Fullscreen */}
              <button
                onClick={toggleFullscreen}
                className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
                aria-label={isFullscreen ? 'Exit fullscreen' : 'Fullscreen'}
              >
                {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
              </button>
            </div>
          </div>
        )}

        {/* Play button overlay when paused */}
        {isMounted && !isPlaying && (
          <button
            onClick={togglePlay}
            className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors"
            aria-label="Play video"
          >
            <div className="w-20 h-20 flex items-center justify-center bg-white/90 hover:bg-white rounded-full transition-all transform hover:scale-110">
              <Play size={32} className="text-gray-900 ml-1" />
            </div>
          </button>
        )}
      </div>

      {/* Caption */}
      {caption && (
        <div className="mt-3 text-sm text-center text-gray-600 dark:text-gray-400 italic">
          {caption}
        </div>
      )}
    </div>
  );
}
