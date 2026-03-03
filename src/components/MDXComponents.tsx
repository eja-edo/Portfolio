import Image from 'next/image';
import Link from 'next/link';
import { CodeBlock } from './CodeBlock';
import { Callout } from './Callout';
import { Mermaid } from './Mermaid';
import { MDXImage } from './MDXImage';
import { MDXVideo } from './MDXVideo';
import { YouTube } from './YouTube';

// Custom components for MDX
export const mdxComponents = {
  // Headings
  h1: (props: any) => (
    <h1
      className="text-4xl font-bold text-gray-900 dark:text-white mt-8 mb-4 scroll-mt-16"
      {...props}
    />
  ),
  h2: (props: any) => (
    <h2
      className="text-3xl font-bold text-gray-900 dark:text-white mt-8 mb-4 scroll-mt-16"
      {...props}
    />
  ),
  h3: (props: any) => (
    <h3
      className="text-2xl font-semibold text-gray-900 dark:text-white mt-6 mb-3 scroll-mt-16"
      {...props}
    />
  ),
  h4: (props: any) => (
    <h4
      className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3 scroll-mt-16"
      {...props}
    />
  ),

  // Paragraph
  p: (props: any) => (
    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4" {...props} />
  ),

  // Links
  a: (props: any) => (
    <Link
      href={props.href || '#'}
      className="text-primary-600 dark:text-primary-400 hover:underline"
      target={props.href?.startsWith('http') ? '_blank' : undefined}
      rel={props.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      {...props}
    />
  ),

  // Lists
  ul: (props: any) => (
    <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700 dark:text-gray-300" {...props} />
  ),
  ol: (props: any) => (
    <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700 dark:text-gray-300" {...props} />
  ),
  li: (props: any) => <li className="ml-4" {...props} />,

  // Blockquote
  blockquote: (props: any) => (
    <blockquote
      className="border-l-4 border-gray-300 dark:border-gray-700 pl-4 italic text-gray-600 dark:text-gray-400 my-4"
      {...props}
    />
  ),

  // Code
  code: (props: any) => {
    const { children, className } = props;

    // Check if it's a mermaid code block
    if (className === 'language-mermaid') {
      return <Mermaid chart={String(children).trim()} />;
    }

    // Inline code
    if (!className) {
      return (
        <code
          className="bg-gray-100 dark:bg-gray-800 text-pink-600 dark:text-pink-400 px-1.5 py-0.5 rounded text-sm font-mono"
          {...props}
        />
      );
    }
    // Block code - pass to CodeBlock component
    return <CodeBlock {...props} />;
  },
  pre: (props: any) => {
    // Extract code element from pre
    const code = props.children;

    // Check if it's a code block
    if (code && code.props) {
      const { className, children } = code.props;

      // If it's mermaid, render Mermaid component
      if (className === 'language-mermaid') {
        return <Mermaid chart={String(children).trim()} />;
      }

      // Otherwise use CodeBlock
      if (className) {
        return <CodeBlock className={className}>{children}</CodeBlock>;
      }
    }

    // Fallback for plain pre without code
    return (
      <pre className="overflow-x-auto p-4 rounded-lg bg-gray-900 text-gray-100 my-6 border border-gray-800">
        {props.children}
      </pre>
    );
  },

  // Images
  img: (props: any) => (
    <MDXImage
      src={props.src || ''}
      alt={props.alt || ''}
      width={props.width}
      height={props.height}
    />
  ),

  // Videos
  video: (props: any) => {
    // Convert string boolean attributes to actual booleans
    const autoPlay = props.autoplay === 'true' || props.autoplay === true;
    const loop = props.loop === 'true' || props.loop === true;
    const muted = props.muted === 'true' || props.muted === true;

    return (
      <MDXVideo
        src={props.src || ''}
        poster={props.poster}
        caption={props.title || props.alt}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
      />
    );
  },

  // Tables
  table: (props: any) => (
    <div className="overflow-x-auto my-6 rounded-lg border border-gray-200 dark:border-gray-700">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700" {...props} />
    </div>
  ),
  thead: (props: any) => (
    <thead className="bg-gray-50 dark:bg-gray-800" {...props} />
  ),
  tbody: (props: any) => (
    <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700" {...props} />
  ),
  tr: (props: any) => (
    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors" {...props} />
  ),
  th: (props: any) => (
    <th
      className="px-4 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider"
      {...props}
    />
  ),
  td: (props: any) => (
    <td
      className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300"
      {...props}
    />
  ),

  // Horizontal rule
  hr: (props: any) => (
    <hr className="my-8 border-gray-200 dark:border-gray-700" {...props} />
  ),

  // Custom components
  Callout,
  MDXImage,
  MDXVideo,
  YouTube,
};
