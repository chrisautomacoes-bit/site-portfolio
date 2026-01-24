import { useEffect, useRef, useState } from 'react';
import { useParallax } from '@/hooks/useParallax';

const projects = [
  {
    id: 1,
    title: 'Pipeline de Dados — E-commerce',
    problem: 'Sincronização manual entre sistemas de estoque, vendas e logística',
    solution: 'Fluxo automatizado com webhooks e filas de mensagens',
    impact: 'Redução de 6h/dia em trabalho manual',
    details: [
      'Integração entre ERP, gateway de pagamento e transportadoras',
      'Orquestração com webhooks, filas e retentativas',
      'Logs estruturados e conciliação de eventos',
    ],
    stack: 'Node · TypeScript · Webhooks · Filas',
    status: 'active',
    year: '2024',
  },
  {
    id: 2,
    title: 'Bot de Monitoramento — Infra',
    problem: 'Alertas de falhas chegavam tarde, sem contexto',
    solution: 'Sistema de observabilidade com triggers inteligentes',
    impact: 'MTTR reduzido em 70%',
    details: [
      'Coleta de métricas e logs com enriquecimento de contexto',
      'Alertas acionáveis com rotas de escalonamento',
      'Playbooks automáticos para incidentes',
    ],
    stack: 'Python · Webhooks · Alertas · Observabilidade',
    status: 'active',
    year: '2024',
  },
  {
    id: 3,
    title: 'Integração CRM ↔ Marketing',
    problem: 'Leads perdidos entre plataformas desconectadas',
    solution: 'API bridge com enrichment automático',
    impact: 'Conversão +23% em 3 meses',
    details: [
      'Sincronização de leads, estágios e campanhas',
      'Deduplicação e enriquecimento de contatos',
      'Automação de follow-ups com base em eventos',
    ],
    stack: 'APIs · Webhooks · Automação · Dados',
    status: 'inactive',
    year: '2023',
  },
  {
    id: 4,
    title: 'Dashboard Operacional — Logística',
    problem: 'Visibilidade zero sobre status de entregas em tempo real',
    solution: 'Interface minimalista com dados agregados de múltiplas APIs',
    impact: 'Tomada de decisão 4x mais rápida',
    details: [
      'Agregação de dados em tempo real de múltiplas fontes',
      'Filtros por SLA, status e região',
      'Alertas de desvios e gargalos operacionais',
    ],
    stack: 'APIs · Dashboards · Realtime · Monitoramento',
    status: 'inactive',
    year: '2023',
  },
];

const ProjectsSection = () => {
  const parallax = useParallax(0.05);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isActive, setIsActive] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [openProjectId, setOpenProjectId] = useState<number | null>(null);

  useEffect(() => {
    const target = sectionRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isActive) {
      setShowProjects(true);
    }
  }, [isActive]);

  return (
    <section 
      id="work" 
      ref={sectionRef}
      className="min-h-screen py-32 px-8 md:px-16 lg:px-24 section-shell section-alt"
      style={{ transform: `translateY(${parallax}px)` }}
    >
      {/* Section marker */}
      <h2 className="section-marker reveal">
        001 — projetos
      </h2>

      {/* Projects list */}
      <div className={`max-w-2xl projects-list ${showProjects ? 'projects-list-visible' : ''}`}>
        {projects.map((project, index) => {
          const isOpen = openProjectId === project.id;
          return (
          <article 
            key={project.id}
            className="project-entry"
            style={{ transitionDelay: showProjects ? `${0.1 + index * 0.08}s` : '0s' }}
          >
            <div className="flex items-start justify-between gap-8">
              <div className="flex-1">
                {/* Title with status */}
                <h3 className="project-title flex items-center gap-3">
                  <span className={`status-indicator ${project.status === 'active' ? 'active' : 'inactive'}`} />
                  {project.title}
                </h3>
                
                {/* Problem/Solution format */}
                <div className="project-context mt-4 space-y-2">
                  <p>
                    <span className="text-label mr-2">problema:</span>
                    {project.problem}
                  </p>
                  <p>
                    <span className="text-label mr-2">solução:</span>
                    {project.solution}
                  </p>
                  <p>
                    <span className="text-accent text-xs">{project.impact}</span>
                  </p>
                </div>

                <button
                  type="button"
                  className="project-toggle mt-6"
                  onClick={() => setOpenProjectId(isOpen ? null : project.id)}
                  aria-expanded={isOpen}
                  aria-controls={`project-${project.id}-details`}
                >
                  {isOpen ? 'fechar detalhes' : 'ver detalhes'}
                </button>

                <div 
                  id={`project-${project.id}-details`}
                  className={`project-details ${isOpen ? 'project-details-open' : ''}`}
                >
                  <div className="project-details-inner">
                    <div className="project-details-content">
                      <p className="project-stack">
                        <span className="text-label mr-2">stack:</span>
                        {project.stack}
                      </p>
                      <ul className="project-details-list">
                        {project.details.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <span className="project-meta shrink-0">
                {project.year}
              </span>
            </div>
          </article>
          );
        })}
      </div>

      {/* Note */}
      <p className={`text-ghost mt-16 max-w-xs projects-note ${showProjects ? 'projects-note-visible' : ''}`}>
        Projetos selecionados. Alguns sob NDA.
      </p>
    </section>
  );
};

export default ProjectsSection;
