'use client';

import Link from 'next/link';
import { ArrowRight, Mail, MessageSquare } from 'lucide-react';
import { ScrollAnimation, StaggerContainer, StaggerItem } from './ScrollAnimation';

export function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-600 to-accent-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Icon */}
        <ScrollAnimation animation="bounceIn">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm mb-6">
            <MessageSquare className="w-8 h-8 text-white" />
          </div>
        </ScrollAnimation>

        {/* Heading */}
        <ScrollAnimation animation="fadeInUp" delay={0.1}>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Have an idea in mind?
          </h2>
        </ScrollAnimation>

        <ScrollAnimation animation="fadeInUp" delay={0.2}>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Let me help you turn your ideas into reality.
          </p>
        </ScrollAnimation>

        {/* CTA Buttons */}
        <ScrollAnimation animation="fadeInUp" delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
            >
              <Mail className="w-5 h-5" />
              Liên Hệ Ngay
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 group"
            >
              Xem Dự Án
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollAnimation>

        {/* Stats */}
        <StaggerContainer className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/20" staggerDelay={0.15}>
          <StaggerItem animation="scaleIn">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/80 text-sm">Support</div>
            </div>
          </StaggerItem>
          <StaggerItem animation="scaleIn">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">95%</div>
              <div className="text-white/80 text-sm">Quality</div>
            </div>
          </StaggerItem>
          <StaggerItem animation="scaleIn">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">Fast</div>
              <div className="text-white/80 text-sm">Delivery</div>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
