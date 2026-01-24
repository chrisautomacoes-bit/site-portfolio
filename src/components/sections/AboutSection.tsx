import { useParallax } from '@/hooks/useParallax';

const AboutSection = () => {
  const parallax = useParallax(0.05);

  return (
    <section 
      id="about" 
      className="min-h-[80vh] py-32 px-8 md:px-16 lg:px-24 relative"
      style={{ transform: `translateY(${parallax}px)` }}
    >
      {/* Section marker */}
      <h2 className="section-marker reveal">
        005 — sobre
      </h2>

      {/* Main content - offset positioning */}
      <div className="max-w-lg ml-0 md:ml-[15%]">
        {/* Mindset, not resume */}
        <div className="space-y-8 reveal reveal-delay-1">
          <p className="text-statement">
            Não gosto de fazer a mesma coisa duas vezes.
          </p>
          
          <p className="text-body">
            Se um processo pode ser automatizado, ele deveria ser.
            <br />
            Se um sistema pode ser simplificado, ele deveria ser.
            <br />
            Se uma conexão pode ser feita, ela deveria ser.
          </p>
          
          <p className="text-body">
            Trabalho na interseção entre <span className="text-accent">código</span>, 
            <span className="text-accent"> automação</span> e 
            <span className="text-accent"> experiência</span> — 
            construindo coisas que funcionam em silêncio.
          </p>
        </div>

        {/* Approach */}
        <div className="mt-16 reveal reveal-delay-2">
          <p className="text-ghost mb-4">mentalidade</p>
          <div className="space-y-3 text-body text-sm">
            <p>→ Curiosidade antes de especialização</p>
            <p>→ Sistemas antes de features</p>
            <p>→ Clareza antes de complexidade</p>
            <p>→ Reduzir fricção, sempre</p>
          </div>
        </div>

        {/* Stack - minimal */}
        <div className="mt-16 reveal reveal-delay-3">
          <p className="text-ghost mb-4">ferramentas frequentes</p>
          <p className="text-body text-sm">
            TypeScript · Python · Node · APIs · Webhooks · 
            Filas · LLMs · o que funcionar
          </p>
        </div>
      </div>

      {/* Scattered fragment */}
      <span className="fragment bottom-[15%] right-[8%] reveal reveal-delay-4">
        desde 2018
      </span>
    </section>
  );
};

export default AboutSection;
