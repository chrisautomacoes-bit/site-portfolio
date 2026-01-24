import { useEffect, useState } from 'react';
import NetworkCanvas from '@/components/NetworkCanvas';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import CompaniesSection from '@/components/sections/CompaniesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import LabSection from '@/components/sections/LabSection';
import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';

const Index = () => {
  const [introState, setIntroState] = useState<'enter' | 'exit' | 'done'>('enter');
  const [introProgress, setIntroProgress] = useState(0);
  const [introReady, setIntroReady] = useState(false);

  useEffect(() => {
    let frameId = 0;
    let exitTimer = 0;
    let doneTimer = 0;
    const start = performance.now();
    const duration = 1100;

    const tick = (now: number) => {
      const elapsed = now - start;
      const next = Math.min(100, Math.round((elapsed / duration) * 100));
      setIntroProgress(next);
      if (next < 100) {
        frameId = requestAnimationFrame(tick);
      } else {
        setIntroReady(true);
        exitTimer = window.setTimeout(() => setIntroState('exit'), 450);
        doneTimer = window.setTimeout(() => setIntroState('done'), 1050);
      }
    };

    frameId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frameId);
      window.clearTimeout(exitTimer);
      window.clearTimeout(doneTimer);
    };
  }, []);

  const skipIntro = () => {
    setIntroReady(true);
    setIntroProgress(100);
    setIntroState('done');
  };

  return (
    <div className="relative min-h-screen">
      {introState !== 'done' && (
        <div
          className={`intro-screen ${introState === 'exit' ? 'intro-screen-exit' : ''}`}
          onClick={skipIntro}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              skipIntro();
            }
          }}
          role="button"
          tabIndex={0}
          aria-label="Pular tela inicial"
        >
          <div className="intro-panel">
            <div className="intro-name">Christian Liborio</div>
            <div className="intro-loading">
              carregando {introProgress}%
            </div>
            <div className="intro-bar">
              <span
                className="intro-bar-fill"
                style={{ transform: `scaleX(${introProgress / 100})` }}
              />
              <span
                className="intro-bar-packet"
                style={{ left: `${Math.max(0, introProgress - 2)}%` }}
              />
            </div>
          </div>
        </div>
      )}

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
        <ProjectsSection />
        <CompaniesSection />
        <TestimonialsSection />
        <LabSection />
        <AboutSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
