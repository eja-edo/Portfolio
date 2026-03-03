'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Download, Briefcase, Calendar, CheckCircle } from 'lucide-react';
import { SITE } from '@/data/site.config';

function useTypewriter(texts: string[], speed: number = 50, delay: number = 1000, repeatInterval: number = 10000) {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let typingIntervalId: NodeJS.Timeout;
    let deletingIntervalId: NodeJS.Timeout;
    let repeatTimeoutId: NodeJS.Timeout;
    let textIndex = 0;

    const getCurrentText = () => texts[textIndex] || '';

    const startDeleting = () => {
      setIsTyping(true);
      const currentText = getCurrentText();
      let charIndex = currentText.length;

      deletingIntervalId = setInterval(() => {
        if (charIndex > 0) {
          charIndex--;
          setDisplayText(currentText.slice(0, charIndex));
        } else {
          clearInterval(deletingIntervalId);
          // Move to next text
          textIndex = (textIndex + 1) % texts.length;
          setCurrentIndex(textIndex);
          // Start typing next text after a short pause
          setTimeout(() => {
            startTyping();
          }, 500);
        }
      }, speed / 2); // Xóa nhanh hơn một chút
    };

    const startTyping = () => {
      setDisplayText('');
      setIsTyping(true);
      const currentText = getCurrentText();
      let charIndex = 0;

      typingIntervalId = setInterval(() => {
        if (charIndex < currentText.length) {
          setDisplayText(currentText.slice(0, charIndex + 1));
          charIndex++;
        } else {
          clearInterval(typingIntervalId);
          setIsTyping(false);

          // Set up next cycle - start deleting after repeatInterval
          repeatTimeoutId = setTimeout(() => {
            startDeleting();
          }, repeatInterval);
        }
      }, speed);
    };

    // Initial delay before first typing
    timeoutId = setTimeout(() => {
      startTyping();
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(repeatTimeoutId);
      clearInterval(typingIntervalId);
      clearInterval(deletingIntervalId);
    };
  }, [texts, speed, delay, repeatInterval]);

  return { displayText, isTyping, currentIndex };
}

export function Hero() {
  const statusConfig = {
    available: {
      text: 'Available for work',
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-100 dark:bg-green-900/30',
    },
    contracted: {
      text: 'Currently contracted',
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-100 dark:bg-blue-900/30',
    },
    busy: {
      text: 'Fully booked',
      color: 'text-gray-600 dark:text-gray-400',
      bgColor: 'bg-gray-100 dark:bg-gray-900/30',
    },
  };

  const status = statusConfig[SITE.experience.status];

  // Typewriter effect for bio - starts after 1.5s, repeats every 15 seconds
  const bioTexts = Array.isArray(SITE.bio) ? SITE.bio : [SITE.bio];
  const { displayText, isTyping } = useTypewriter(bioTexts, 35, 1500, 15000);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-7xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
                  {SITE.name.split(' ').pop()}
                </span>
              </h1>

              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 dark:text-gray-300">
                {SITE.role}
              </h2>

              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl min-h-[4rem]">
                {displayText}
                <span className={`inline-block w-0.5 h-5 bg-primary-600 ml-1 align-middle ${isTyping ? 'animate-pulse' : 'opacity-0'}`}></span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors shadow-lg hover:shadow-xl"
              >
                View Projects
                <ArrowRight className="ml-2" size={20} />
              </Link>

              <a
                href={SITE.resume}
                download
                className="inline-flex items-center px-6 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 font-medium rounded-lg transition-colors"
              >
                <Download className="mr-2" size={20} />
                Download CV
              </a>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-2 mb-2">
                  <Briefcase className="text-primary-600" size={20} />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {SITE.experience.years}+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Years Exp
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-2 mb-2">
                  <CheckCircle className="text-accent-600" size={20} />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {SITE.skills.length}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Skills
                </div>
              </div>

              <div className={`rounded-lg p-4 shadow-md ${status.bgColor}`}>
                <div className="flex items-center space-x-2 mb-2">
                  <Calendar className={status.color} size={20} />
                </div>
                <div className={`text-sm font-semibold ${status.color}`}>
                  {status.text}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative animate-slide-up">
            <div className="relative w-full aspect-square max-w-lg mx-auto animate-float">
              {/* Floating Shapes - 4 shapes total */}
              {/* Circle */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary-400/40 rounded-full blur-sm animate-bubble-1"></div>

              {/* Square */}
              <div className="absolute top-2/3 -right-4 w-6 h-6 bg-accent-500/40 rounded-sm blur-sm animate-bubble-3 rotate-45"></div>

              {/* Circle */}
              <div className="absolute -bottom-4 right-1/4 w-6 h-6 bg-accent-400/50 rounded-full blur-sm animate-bubble-5"></div>

              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full blur-3xl animate-glow-pulse"></div>

              {/* Secondary glow */}
              <div className="absolute inset-4 bg-gradient-to-tr from-accent-500 to-primary-500 rounded-full blur-2xl opacity-30 animate-float-reverse"></div>

              {/* Avatar */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl hover:scale-105 transition-transform duration-500">
                <Image
                  src={SITE.avatar}
                  alt={SITE.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
