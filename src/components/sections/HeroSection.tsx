import { useParallax } from '@/hooks/useParallax';

const HeroSection = () => {
  const parallaxSlow = useParallax(0.08);
  const parallaxMedium = useParallax(0.15);

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden flex items-end">
      {/* Scattered system fragments */}
      <span 
        className="fragment top-[12%] left-[6%] reveal reveal-delay-4"
        style={{ transform: `translateY(${parallaxSlow}px)` }}
      >
        sis.início
      </span>
      <span 
        className="fragment top-[18%] right-[10%] reveal reveal-delay-5"
        style={{ transform: `translateY(${parallaxMedium}px)` }}
      >
        v2.4.1
      </span>
      <span 
        className="fragment bottom-[25%] right-[6%] reveal reveal-delay-6"
        style={{ transform: `translateY(${-parallaxSlow}px)` }}
      >
        status: ativo
      </span>
      <span 
        className="fragment top-[45%] left-[4%] rotate-90 origin-left reveal reveal-delay-5 hidden sm:inline"
      >
        curitiba, br
      </span>

      {/* Main content - positioned with intention, not centered */}
      <div 
        className="pb-[15%] px-8 md:px-16 lg:px-24 max-w-3xl"
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
            construindo ferramentas internas · explorando LLMs · 
            automatizando o repetitivo
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
        className="absolute bottom-8 right-8 reveal reveal-delay-6"
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
