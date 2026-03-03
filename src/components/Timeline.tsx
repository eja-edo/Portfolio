import { TimelineItem as TimelineItemType } from '@/types';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

interface TimelineProps {
  items: TimelineItemType[];
}

export function Timeline({ items }: TimelineProps) {
  const getIcon = (type: TimelineItemType['type']) => {
    switch (type) {
      case 'work':
        return <Briefcase size={20} />;
      case 'education':
        return <GraduationCap size={20} />;
      case 'certificate':
        return <Award size={20} />;
    }
  };

  const getColor = (type: TimelineItemType['type']) => {
    switch (type) {
      case 'work':
        return 'bg-blue-500';
      case 'education':
        return 'bg-green-500';
      case 'certificate':
        return 'bg-purple-500';
    }
  };

  return (
    <div className="relative">
      {/* Vertical Line */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />

      <div className="space-y-8">
        {items.map((item, index) => (
          <div key={index} className="relative flex gap-6">
            {/* Icon */}
            <div
              className={`relative z-10 flex items-center justify-center w-12 h-12 rounded-full ${getColor(
                item.type
              )} text-white shadow-lg flex-shrink-0`}
            >
              {getIcon(item.type)}
            </div>

            {/* Content */}
            <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400 mt-1 sm:mt-0">
                  {item.period}
                </span>
              </div>

              <div className="text-sm font-medium text-primary-600 dark:text-primary-400 mb-2">
                {item.organization}
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
