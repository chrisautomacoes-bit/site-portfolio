import { useParallax } from '@/hooks/useParallax';

const experiments = [
  {
    id: 1,
    name: 'llm-pipeline',
    desc: 'Orquestração de modelos com fallback automático',
    status: 'running',
    label: 'rodando',
    version: '0.3.2',
  },
  {
    id: 2,
    name: 'webhook-mesh',
    desc: 'Roteamento dinâmico de eventos entre serviços',
    status: 'testing',
    label: 'em teste',
    version: '0.1.0',
  },
  {
    id: 3,
    name: 'auto-docs',
    desc: 'Geração de documentação a partir de código e logs',
    status: 'concept',
    label: 'conceito',
    version: '—',
  },
  {
    id: 4,
    name: 'flow-viz',
    desc: 'Visualização de fluxos de automação em tempo real',
    status: 'paused',
    label: 'pausado',
    version: '0.2.1',
  },
];

const getStatusClass = (status: string) => {
  switch (status) {
    case 'running': return 'active';
    case 'testing': return 'active';
    case 'paused': return 'inactive';
    default: return 'pending';
  }
};

const LabSection = () => {
  const parallax = useParallax(0.06);
  const activeCount = experiments.filter((exp) => exp.status === 'running' || exp.status === 'testing').length;

  return (
    <section 
      id="lab" 
      className="min-h-screen py-32 px-8 md:px-16 lg:px-24 section-shell"
      style={{ transform: `translateY(${parallax}px)` }}
    >
      {/* Section marker */}
      <h2 className="section-marker reveal">
        004 — laboratório
      </h2>

      {/* Intro */}
      <p className="text-statement max-w-md mb-12 reveal reveal-delay-1">
        Experimentos, protótipos e ideias em desenvolvimento.
        <br />
        <span className="text-ghost">Nem tudo funciona. Esse é o ponto.</span>
      </p>

      {/* Experiments grid - asymmetric */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
        {experiments.map((exp, index) => (
          <div 
            key={exp.id}
            className={`lab-item reveal ${index === 2 ? 'md:col-span-2' : ''}`}
            style={{ animationDelay: `${0.3 + index * 0.1}s` }}
          >
            {/* Header row */}
            <div className="flex items-center justify-between mb-3">
              <span className="text-headline text-sm font-medium">
                {exp.name}
              </span>
              <span className="coord">{exp.version}</span>
            </div>
            
            {/* Description */}
            <p className="text-body text-xs mb-4 leading-relaxed">
              {exp.desc}
            </p>
            
            {/* Status */}
            <div className="flex items-center gap-2">
              <span className={`status-indicator ${getStatusClass(exp.status)}`} />
              <span className="text-ghost">{exp.label}</span>
            </div>
          </div>
        ))}
      </div>

      {/* System log style entry */}
      <div className="mt-16 reveal reveal-delay-5">
        <div className="log-entry">
          <span className="timestamp">[{new Date().toISOString().slice(0, 10)}]</span>
          <span className="event">lab.sincroniza</span>
          <span className="ml-3">{activeCount} experimentos ativos</span>
        </div>
      </div>
    </section>
  );
};

export default LabSection;
