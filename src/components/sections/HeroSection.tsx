import { useEffect, useState } from 'react';
import { useParallax } from '@/hooks/useParallax';

const focusPhrases = [
  'construindo ferramentas internas',
  'explorando LLMs',
  'automatizando o repetitivo',
];

const HeroSection = () => {
  const parallaxSlow = useParallax(0.08);
  const parallaxMedium = useParallax(0.15);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = () => setReduceMotion(motionQuery.matches);

    handleChange();
    motionQuery.addEventListener('change', handleChange);
    return () => motionQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      setPhraseIndex(0);
      setCharIndex(focusPhrases[0].length);
      setIsDeleting(false);
      return;
    }

    const currentPhrase = focusPhrases[phraseIndex];
    const isEnd = !isDeleting && charIndex === currentPhrase.length;
    const isStart = isDeleting && charIndex === 0;

    let delay = isDeleting ? 24 : 34;
    if (isEnd) {
      delay = 1200;
    } else if (isStart && isDeleting) {
      delay = 350;
    }

    const timeoutId = window.setTimeout(() => {
      if (isEnd) {
        setIsDeleting(true);
      } else if (isStart && isDeleting) {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % focusPhrases.length);
      } else {
        setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
      }
    }, delay);

    return () => window.clearTimeout(timeoutId);
  }, [charIndex, isDeleting, phraseIndex, reduceMotion]);

  const currentPhrase = focusPhrases[phraseIndex];
  const typedFocus = reduceMotion ? focusPhrases[0] : currentPhrase.slice(0, charIndex);

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden flex items-start md:items-end hero-scanline pt-24 pb-16 md:pt-0 md:pb-0">
      {/* Scattered system fragments */}
      <span 
        className="fragment top-[12%] left-[6%] reveal reveal-delay-4 hidden md:inline z-0"
        style={{ transform: `translateY(${parallaxSlow}px)` }}
        aria-hidden="true"
      >
        sis.início
      </span>
      <span 
        className="fragment top-[18%] right-[10%] reveal reveal-delay-5 hidden md:inline z-0"
        style={{ transform: `translateY(${parallaxMedium}px)` }}
        aria-hidden="true"
      >
        v2.4.1
      </span>
      <span 
        className="fragment bottom-[25%] right-[6%] reveal reveal-delay-6 hidden md:inline z-0"
        style={{ transform: `translateY(${-parallaxSlow}px)` }}
        aria-hidden="true"
      >
        status: ativo
      </span>
      <span 
        className="fragment top-[60%] left-[-2%] rotate-90 origin-left reveal reveal-delay-5 hidden xl:inline z-0"
        aria-hidden="true"
      >
        curitiba, br
      </span>

      {/* Main content - positioned with intention, not centered */}
      <div 
        className="relative z-10 pb-0 md:pb-[15%] px-8 md:px-16 lg:px-24 max-w-3xl"
        style={{ transform: `translateY(${-parallaxSlow}px)` }}
      >
        {/* Name - discrete */}
        <p className="text-identity mb-6 reveal">
          Christian Liborio
        </p>

        {/* Main statement - technical, human */}
        <div className="text-manifesto space-y-6 reveal reveal-delay-1">
          <h1 className="text-headline">
            Eu projeto <span className="text-accent">automações</span>, sistemas conectados<br />
            e experiências digitais que operam em segundo plano.
          </h1>
          
          <p className="text-statement">
            Fluxos que disparam. Processos que reagem.<br />
            Conexões invisíveis entre serviços.
          </p>
        </div>

        {/* Current focus */}
        <div className="mt-16 reveal reveal-delay-2">
          <p className="text-ghost mb-3 flex items-center gap-2">
            <span className="status-indicator active" />
            agora
          </p>
          <p className="text-body text-sm max-w-sm">
            <span className="typewriter" aria-label={currentPhrase}>
              {typedFocus}
            </span>
          </p>
        </div>

        {/* Navigation hints */}
        <div className="mt-16 flex gap-10 reveal reveal-delay-3">
          <a href="#work" className="link-subtle text-technical">
            ver projetos →
          </a>
          <a href="#lab" className="link-subtle text-technical">
            explorar laboratório →
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className="absolute bottom-8 right-8 reveal reveal-delay-6 z-10"
        style={{ transform: `translateY(${-parallaxMedium}px)` }}
      >
        <span className="coord flex items-center gap-2">
          <span className="w-4 h-px bg-border" />
          rolar
        </span>
      </div>

    </section>
  );
};

export default HeroSection;
