import { Hero } from '@/components/Hero';
import { FeaturedProjects } from '@/components/FeaturedProjects';
import { Stats } from '@/components/Stats';
import { Services } from '@/components/Services';
import { Testimonials } from '@/components/Testimonials';
import { CTASection } from '@/components/CTASection';
import { getAllProjects } from '@/lib/mdx';

export default function Home() {
  // Get all unique tags from projects
  const projects = getAllProjects();
  const allTags = Array.from(
    new Set(projects.flatMap((project) => project.tags))
  ).sort();

  return (
    <>
      <Hero />
      <Stats />
      <FeaturedProjects />
      <Services />
      <Testimonials tags={allTags} />
      <CTASection />
    </>
  );
}
