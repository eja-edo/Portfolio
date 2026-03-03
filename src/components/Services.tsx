'use client';

import Link from 'next/link';
import { Code2, Palette, Smartphone, Globe, Database, Zap } from 'lucide-react';
import { ScrollAnimation, StaggerContainer, StaggerItem } from './ScrollAnimation';

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Xây dựng website hiện đại với React, Next.js, và các công nghệ tiên tiến nhất',
    features: ['Responsive Design', 'SEO Optimized', 'Fast Performance'],
    color: 'from-blue-500 to-cyan-500',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS']
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Phát triển ứng dụng di động đa nền tảng với React Native và Flutter',
    features: ['Cross-platform', 'Native Performance', 'Modern UI'],
    color: 'from-purple-500 to-pink-500',
    tags: ['React Native', 'Flutter', 'Mobile']
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Thiết kế giao diện người dùng đẹp mắt và trải nghiệm người dùng tuyệt vời',
    features: ['User Research', 'Wireframing', 'Prototyping'],
    color: 'from-pink-500 to-rose-500',
    tags: ['UI/UX', 'Design', 'Figma']
  },
  {
    icon: Database,
    title: 'Backend Development',
    description: 'Xây dựng API và hệ thống backend mạnh mẽ, bảo mật, và có thể mở rộng',
    features: ['RESTful API', 'Database Design', 'Cloud Integration'],
    color: 'from-green-500 to-emerald-500',
    tags: ['Node.js', 'Python', 'MongoDB', 'PostgreSQL', 'FastAPI']
  },
  {
    icon: Globe,
    title: 'Full Stack Solutions',
    description: 'Giải pháp toàn diện từ frontend đến backend, database và deployment',
    features: ['End-to-end', 'Scalable', 'Maintainable'],
    color: 'from-orange-500 to-amber-500',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'React']
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Tối ưu hiệu suất website và ứng dụng để đạt tốc độ tải nhanh nhất',
    features: ['Code Splitting', 'Lazy Loading', 'Caching Strategy'],
    color: 'from-yellow-500 to-orange-500',
    tags: ['Performance', 'Optimization', 'WebSocket']
  },
];

export function Services() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollAnimation animation="fadeInUp" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Services I Offer
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Dịch vụ chuyên nghiệp với công nghệ hiện đại và kinh nghiệm thực tế
          </p>
        </ScrollAnimation>

        {/* Services Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
          {services.map((service, index) => {
            const Icon = service.icon;
            const tagsQuery = service.tags.join(',');
            return (
              <StaggerItem key={index} animation="fadeInUp">
                <Link
                  href={`/projects?tags=${encodeURIComponent(tagsQuery)}`}
                  className="group relative bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden block h-full"
                >
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                        <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${service.color} mr-2`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
