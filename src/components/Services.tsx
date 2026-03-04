'use client';

import Link from 'next/link';
import { Code2, Palette, Server, Globe, Database, Zap } from 'lucide-react';
import { ScrollAnimation, StaggerContainer, StaggerItem } from './ScrollAnimation';

const services = [
  {
    icon: Database,
    title: 'Backend & API Engineering',
    description: 'Designing and building production-ready backend systems with scalable, fault-tolerant, and secure architectures.',
    features: ['REST API Design', 'Authentication & Authorization', 'Scalable Architecture'],
    color: 'from-green-500 to-emerald-500',
    tags: ['Django', 'Django REST Framework', 'FastAPI', 'Express', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Prisma', 'REST API']
  },
  {
    icon: Zap,
    title: 'Real-Time Systems & Streaming',
    description: 'Developing low-latency real-time communication systems, audio/video streaming pipelines, and event-driven architectures.',
    features: ['WebSocket Communication', 'Live Audio Streaming', 'Message-Driven Architecture'],
    color: 'from-yellow-500 to-orange-500',
    tags: ['WebSocket', 'Socket.IO', 'Redis', 'Streaming', 'LiveKit', 'Real-time']
  },
  {
    icon: Code2,
    title: 'AI-Powered Applications',
    description: 'Integrating and optimizing AI models for production systems, focusing on speech processing and multi-model orchestration.',
    features: ['Speech-to-Text (STT)', 'Text-to-Speech (TTS)', 'Multi-Model Strategy'],
    color: 'from-blue-500 to-cyan-500',
    tags: ['Whisper', 'Vosk', 'Gemini AI', 'Kokoro TTS', 'Python']
  },
  {
    icon: Globe,
    title: 'IoT & Distributed Systems',
    description: 'Building IoT platforms and distributed backend systems with real-time monitoring and scalable device communication.',
    features: ['MQTT Integration', 'Device Communication', 'Distributed Processing'],
    color: 'from-purple-500 to-indigo-500',
    tags: ['IoT', 'MQTT', 'Redis', 'Node.js', 'PostgreSQL']
  },
  {
    icon: Server,
    title: 'Infrastructure & DevOps',
    description: 'Deploying self-hosted infrastructure optimized for performance, cost efficiency, and observability.',
    features: ['Containerization', 'Object Storage', 'Production Deployment'],
    color: 'from-orange-500 to-amber-500',
    tags: ['Docker', 'MinIO', 'Redis', 'PostgreSQL']
  },
  {
    icon: Palette,
    title: 'Frontend for System Interfaces',
    description: 'Building real-time dashboards and admin interfaces for backend, AI, and distributed systems.',
    features: ['Admin Dashboard', 'Real-Time UI', 'Performance Optimized'],
    color: 'from-pink-500 to-rose-500',
    tags: ['React', 'TypeScript', 'Vite', 'TailwindCSS']
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
            Professional services powered by modern technology and real-world experience.
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
