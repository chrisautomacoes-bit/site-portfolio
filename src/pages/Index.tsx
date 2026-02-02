import NetworkCanvas from '@/components/NetworkCanvas';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import CompaniesSection from '@/components/sections/CompaniesSection';
import LabSection from '@/components/sections/LabSection';
import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import AuthoritySection from '@/components/sections/AuthoritySection';

const Index = () => {
  return (
    <div className="relative min-h-screen">
      {/* Network animation - systems conversing */}
      <NetworkCanvas />
      
      {/* Visual layers - subtle */}
      <div className="vignette" />
      <div className="scanlines" />
      <div className="grain-overlay" />
      
      {/* Navigation - appears on scroll */}
      <Navigation />
      
      {/* Main content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <CompaniesSection />
        <ProjectsSection />
        <AuthoritySection />
        <LabSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
