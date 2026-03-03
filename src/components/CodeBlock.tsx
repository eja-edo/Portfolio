'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeBlockProps {
  children: string;
  className?: string;
  'data-language'?: string;
  [key: string]: any;
}

export function CodeBlock({ children, className, 'data-language': dataLanguage, ...props }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const code = typeof children === 'string' ? children.trim() : String(children).trim();
  const match = /language-(\w+)/.exec(className || '');
  const language = match ? match[1] : dataLanguage || 'text';

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const languageDisplayName = {
    javascript: 'JavaScript',
    typescript: 'TypeScript',
    python: 'Python',
    jsx: 'React JSX',
    tsx: 'React TSX',
    css: 'CSS',
    scss: 'SCSS',
    html: 'HTML',
    json: 'JSON',
    bash: 'Bash',
    shell: 'Shell',
    sql: 'SQL',
    yaml: 'YAML',
    yml: 'YAML',
    markdown: 'Markdown',
    java: 'Java',
    cpp: 'C++',
    c: 'C',
    go: 'Go',
    rust: 'Rust',
    php: 'PHP',
  }[language.toLowerCase()] || language.toUpperCase();

  return (
    <div className="not-prose relative group my-6 rounded-lg overflow-hidden border border-gray-700/50 shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-[#1e1e1e]">
      {/* Header bar with language and copy button - macOS style */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#1e1e1e] border-b border-gray-700/50">
        <div className="flex items-center gap-2">
          {/* macOS traffic lights */}
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors"></div>
          </div>
          <span className="ml-2 text-xs font-mono text-gray-400 font-medium tracking-wide">
            {languageDisplayName}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-gray-400 hover:text-white hover:bg-gray-700/50 transition-all rounded-md font-medium"
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <Check size={14} className="text-green-400" />
              <span className="text-green-400">Copied!</span>
            </>
          ) : (
            <>
              <Copy size={14} />
              Copy
            </>
          )}
        </button>
      </div>

      {/* Code content with syntax highlighting */}
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{
          margin: 0,
          padding: '1.5rem',
          background: '#1e1e1e',
          fontSize: '0.875rem',
          lineHeight: '1.7',
          borderRadius: 0,
        }}
        showLineNumbers={true}
        lineNumberStyle={{
          minWidth: '3em',
          paddingRight: '1em',
          color: '#858585',
          textAlign: 'right',
          userSelect: 'none',
        }}
        wrapLines={true}
        wrapLongLines={true}
        {...props}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
