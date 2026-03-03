'use client';

interface YouTubeProps {
  src: string;
  title?: string;
  autoplay?: boolean;
  muted?: boolean;
  loop?: boolean;
}

export function YouTube({ src, title, autoplay = false, muted = false, loop = false }: YouTubeProps) {
  // Extract video ID from various YouTube URL formats
  const getVideoId = (url: string): string | null => {
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
      /^([a-zA-Z0-9_-]{11})$/, // Direct video ID
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) return match[1];
    }
    return null;
  };

  const videoId = getVideoId(src);

  if (!videoId) {
    return (
      <div className="my-8 p-4 bg-red-50 dark:bg-red-950/30 border border-red-300 dark:border-red-800 rounded-lg text-red-700 dark:text-red-400">
        <p className="font-semibold">❌ Invalid YouTube URL</p>
        <p className="text-sm">Please provide a valid YouTube video URL or ID</p>
      </div>
    );
  }

  // Build embed URL with parameters
  const embedParams = new URLSearchParams({
    autoplay: autoplay ? '1' : '0',
    mute: muted ? '1' : '0',
    loop: loop ? '1' : '0',
    playlist: loop ? videoId : '', // Required for loop to work
    rel: '0', // Don't show related videos
    modestbranding: '1', // Minimal YouTube branding
  });

  const embedUrl = `https://www.youtube.com/embed/${videoId}?${embedParams.toString()}`;

  return (
    <div className="my-8">
      <div className="relative w-full overflow-hidden rounded-lg shadow-lg border border-gray-200 dark:border-gray-700" style={{ paddingBottom: '56.25%' }}>
        <iframe
          src={embedUrl}
          title={title || 'YouTube video'}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
          style={{ border: 0 }}
        />
      </div>
      {title && (
        <div className="mt-3 text-sm text-center text-gray-600 dark:text-gray-400 italic">
          {title}
        </div>
      )}
    </div>
  );
}
