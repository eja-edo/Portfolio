import { Inter } from 'next/font/google';
import { ClientShell } from '@/components/ClientShell';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata = {
  title: 'Personal Portfolio',
  description: 'Modern personal portfolio website built with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans bg-white dark:bg-gray-900 transition-colors`}>
        <ClientShell>
          {children}
        </ClientShell>
      </body>
    </html>
  );
}
