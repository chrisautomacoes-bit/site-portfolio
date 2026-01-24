import { useState } from 'react';
import { useParallax } from '@/hooks/useParallax';

const AboutSection = () => {
  const parallax = useParallax(0.05);
  const [cardFlipped, setCardFlipped] = useState(false);

  return (
    <section 
      id="about" 
      className="min-h-[80vh] py-32 px-8 md:px-16 lg:px-24 relative section-shell section-alt"
      style={{ transform: `translateY(${parallax}px)` }}
    >
      {/* Section marker */}
      <h2 className="section-marker reveal">
        005 — sobre
      </h2>

      {/* Main content - offset positioning */}
      <div className="max-w-4xl ml-0 md:ml-[10%]">
        <div className="about-card-wrap reveal reveal-delay-1">
          <button
            type="button"
            className={`about-card ${cardFlipped ? 'is-flipped' : ''}`}
            onClick={() => setCardFlipped((prev) => !prev)}
            aria-pressed={cardFlipped}
            aria-label="Virar card sobre mim"
          >
            <div className="about-card-inner">
              <div className="about-card-face about-card-front">
                <div className="about-card-media">
                  <img
                    src="/images/about-card.png"
                    alt="Foto de Christian Liborio"
                    className="about-card-photo"
                    loading="lazy"
                  />
                </div>
                <div className="about-card-content">
                  <span className="about-card-title">sobre mim</span>
                  <ul className="about-card-list">
                    <li>automacoes e integracoes</li>
                    <li>sistemas e experiencias digitais</li>
                    <li>curitiba, br</li>
                    <li>toque para virar</li>
                  </ul>
                </div>
              </div>
              <div className="about-card-face about-card-back">
                <span className="about-card-title">detalhes</span>
                <div className="about-card-back-grid">
                  <div>
                    <p className="about-card-label">hobbies</p>
                    <p className="about-card-value">musica, futebol, xadrez</p>
                  </div>
                  <div>
                    <p className="about-card-label">cidade</p>
                    <p className="about-card-value">curitiba, br</p>
                  </div>
                  <div>
                    <p className="about-card-label">idade</p>
                    <p className="about-card-value">26</p>
                  </div>
                </div>
                <span className="about-card-hint">toque para voltar</span>
              </div>
            </div>
          </button>
        </div>

        <div className="max-w-lg mt-16">
          {/* Mindset, not resume */}
          <div className="space-y-8 reveal reveal-delay-2">
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
          <div className="mt-16 reveal reveal-delay-3">
            <p className="text-ghost mb-4">mentalidade</p>
            <div className="space-y-3 text-body text-sm">
              <p>→ Curiosidade antes de especialização</p>
              <p>→ Sistemas antes de features</p>
              <p>→ Clareza antes de complexidade</p>
              <p>→ Reduzir fricção, sempre</p>
            </div>
          </div>

          {/* Stack - minimal */}
          <div className="mt-16 reveal reveal-delay-4">
            <p className="text-ghost mb-4">ferramentas frequentes</p>
            <p className="text-body text-sm">
              TypeScript · Python · Node · APIs · Webhooks · 
              Filas · LLMs · o que funcionar
            </p>
          </div>
        </div>
      </div>

      {/* Scattered fragment */}
      <span className="fragment bottom-[10%] right-[12%] reveal reveal-delay-4 hidden md:inline">
        desde 2018
      </span>
    </section>
  );
};

export default AboutSection;
