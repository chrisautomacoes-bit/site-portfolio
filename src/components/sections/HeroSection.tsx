const HeroSection = () => {
  return (
    <section id="hero" className="hero-shell">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="hero-eyebrow">Christian Liborio</p>
          <h1 className="hero-title">
            Automacao e integracoes
            para operacoes digitais mais claras.
          </h1>
          <p className="hero-subtitle">
            Atuo na construcao de automacoes, integracoes e sistemas digitais que reduzem
            trabalho manual, organizam dados e tornam processos mais previsiveis
            no dia a dia operacional.
          </p>
          <div className="hero-cta">
            <a href="#work" className="cta-primary">Ver projetos</a>
            <a href="#contact" className="cta-secondary">Contato</a>
          </div>
        </div>
        <div className="hero-portrait" aria-hidden="true">
          <img src="/images/about-card.png" alt="" loading="lazy" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
