import { useParallax } from '@/hooks/useParallax';

const companies = [
  { id: 1, name: 'Empresa Atlas', sector: 'logistica' },
  { id: 2, name: 'Grupo Aurora', sector: 'fintech' },
  { id: 3, name: 'NorteStack', sector: 'saas' },
  { id: 4, name: 'Delta Health', sector: 'saude' },
  { id: 5, name: 'Mercurio Tech', sector: 'e-commerce' },
  { id: 6, name: 'Vetor Labs', sector: 'industria' },
];

const CompaniesSection = () => {
  const parallax = useParallax(0.05);

  return (
    <section
      id="clients"
      className="min-h-[70vh] py-32 px-8 md:px-16 lg:px-24 section-shell"
      style={{ transform: `translateY(${parallax}px)` }}
    >
      <h2 className="section-marker reveal">
        002 — empresas
      </h2>

      <div className="logo-grid">
        {companies.map((company) => (
          <div key={company.id} className="logo-card reveal">
            <span className="logo-mark">{company.name.slice(0, 2).toUpperCase()}</span>
            <span className="logo-name">{company.name}</span>
            <span className="logo-meta">{company.sector}</span>
          </div>
        ))}
      </div>

      <p className="text-ghost mt-12 reveal reveal-delay-3">
        Logos ilustrativos (substituir pelos reais).
      </p>
    </section>
  );
};

export default CompaniesSection;
