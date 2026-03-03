'use client';

import { Code, Palette, Smartphone, Zap } from 'lucide-react';
import { SITE } from '@/data/site.config';
import { StaggerContainer, StaggerItem } from './ScrollAnimation';

const stats = [
  {
    icon: Code,
    value: '10+',
    label: 'Projects Completed',
    color: 'text-blue-600 dark:text-blue-400'
  },
  {
    icon: Palette,
    value: '5+',
    label: 'Happy Clients',
    color: 'text-purple-600 dark:text-purple-400'
  },
  {
    icon: Smartphone,
    value: SITE.experience.years + "+",
    label: 'Years Experience',
    color: 'text-pink-600 dark:text-pink-400'
  },
  {
    icon: Zap,
    value: '95%',
    label: 'Client Satisfaction',
    color: 'text-yellow-600 dark:text-yellow-400'
  },
];

export function Stats() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8" staggerDelay={0.15}>
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <StaggerItem key={index} animation="scaleIn">
                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-white dark:bg-gray-800 shadow-lg group-hover:shadow-xl transition-shadow">
                    <Icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
