import { Skill } from '@/types';

interface SkillBarProps {
  skill: Skill;
}

export function SkillBar({ skill }: SkillBarProps) {
  const categoryColors = {
    frontend: 'bg-blue-500',
    backend: 'bg-indigo-600',
    tools: 'bg-purple-500',
    database: 'bg-orange-500',
    other: 'bg-gray-500',
  };

  const color = skill.category
    ? categoryColors[skill.category]
    : categoryColors.other;

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {skill.name}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {skill.level}%
        </span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div
          className={`h-full ${color} rounded-full transition-all duration-500 ease-out`}
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );
}
