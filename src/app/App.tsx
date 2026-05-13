import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import EducationSection from './components/EducationSection';
import ExperienceSection from './components/ExperienceSection';
import FeaturedProjectSection from './components/FeaturedProjectSection';
import SkillsSection from './components/SkillsSection';
import AchievementsSection from './components/AchievementsSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0F19] relative overflow-x-hidden">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1F293708_1px,transparent_1px),linear-gradient(to_bottom,#1F293708_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      {/* Gradient Orbs */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-[#3B82F6] rounded-full opacity-10 blur-[128px] pointer-events-none" />
      <div className="fixed top-1/2 right-1/4 w-96 h-96 bg-[#60A5FA] rounded-full opacity-10 blur-[128px] pointer-events-none" />

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <ExperienceSection />
        <FeaturedProjectSection />
        <SkillsSection />
        <AchievementsSection />
        <Footer />
      </main>
    </div>
  );
}