import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import HelloSection from '@/components/HelloSection';
import PersonalitySection from '@/components/PersonalitySection';
import CareerSection from '@/components/CareerSection';
import HobbiesSection from '@/components/HobbiesSection';
import WorksSection from '@/components/WorksSection';
import ArticlesSection from '@/components/ArticlesSection';
import BrainSection from '@/components/BrainSection';


export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <HelloSection />
      <PersonalitySection />
      <CareerSection />
      <HobbiesSection />
      <BrainSection username="takayasonix" repositoryName="takayaso_vault" />
      <ArticlesSection />
      <WorksSection />
    </main>
  );
}
