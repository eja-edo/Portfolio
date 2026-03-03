import Image from 'next/image';
import { SITE } from '@/data/site.config';
import { SkillBar } from '@/components/SkillBar';
import { Timeline } from '@/components/Timeline';

export const metadata = {
  title: `About - ${SITE.name}`,
  description: `Learn more about ${SITE.name}`,
};

export default function AboutPage() {
  // Group skills by category
  const skillsByCategory = SITE.skills.reduce((acc, skill) => {
    const category = skill.category || 'other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {} as Record<string, typeof SITE.skills>);

  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get to know more about my background, skills, and experience
          </p>
        </div>

        {/* Bio Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Image */}
          <div className="animate-slide-up">
            <div className="relative aspect-square max-w-md mx-auto rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={SITE.avatar}
                alt={SITE.name}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {SITE.name}
              </h2>
              <p className="text-xl text-primary-600 dark:text-primary-400 font-semibold mb-4">
                {SITE.role}
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                {SITE.bio}
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                With over {SITE.experience.years} years of experience in web development,
                I've had the opportunity to work on diverse projects ranging from small
                business websites to large-scale enterprise applications. I'm passionate
                about creating user-friendly, performant, and accessible web experiences.
              </p>
            </div>

            {/* Contact Info */}
            <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Contact Information
              </h3>
              <div className="space-y-2 text-gray-600 dark:text-gray-400">
                <p>
                  <span className="font-medium">Email:</span>{' '}
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    {SITE.email}
                  </a>
                </p>
                <p>
                  <span className="font-medium">Status:</span>{' '}
                  <span className={`
                    ${SITE.experience.status === 'available' ? 'text-green-600 dark:text-green-400' : ''}
                    ${SITE.experience.status === 'contracted' ? 'text-blue-600 dark:text-blue-400' : ''}
                    ${SITE.experience.status === 'busy' ? 'text-gray-600 dark:text-gray-400' : ''}
                    font-medium
                  `}>
                    {SITE.experience.status === 'available' && 'Available for work'}
                    {SITE.experience.status === 'contracted' && 'Currently contracted'}
                    {SITE.experience.status === 'busy' && 'Fully booked'}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Skills & Technologies
          </h2>

          <div className="space-y-12">
            {Object.entries(skillsByCategory).map(([category, skills]) => (
              <div key={category}>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 capitalize">
                  {category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {skills.map((skill) => (
                    <SkillBar key={skill.name} skill={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Experience & Education
          </h2>
          <Timeline items={SITE.timeline} />
        </div>
      </div>
    </div>
  );
}
