import { useEffect, useRef, useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Agente de IA para Agendamentos Ativos',
    problem:
      'Atendimentos manuais, lentos e inconsistentes geravam perda de leads, alto tempo de resposta e baixa taxa de conversao em agendamentos.',
    solution:
      'Desenvolvimento de um agente de IA conversacional que atende leads de forma natural e ativa, operando 24/7. O agente compreende texto, audio, imagem, video e PDF, conduz a conversa com perguntas estrategicas (objetivo, dores, contexto), apresenta solucoes de forma progressiva, quebra objecoes e convida ativamente o lead para o agendamento. Todas as interacoes sao registradas em banco de dados para analise e melhoria continua.',
    benefits: [
      { text: 'Reducao de ate ', highlight: '95%', tail: ' no tempo de resposta ao lead' },
      { text: 'Aumento medio de ', highlight: '30% a 45%', tail: ' na taxa de agendamento' },
      { text: 'Reducao de ate ', highlight: '70%', tail: ' no custo operacional de atendimento' },
      { text: 'Atendimento simultaneo ilimitado' },
      { text: 'Padronizacao completa da abordagem comercial' },
      { text: 'Base de dados estruturada para decisoes futuras' },
    ],
  },
  {
    id: 2,
    title: 'Trackeamento Avancado de Anuncios via WhatsApp',
    problem:
      'Ferramentas tradicionais identificavam anuncios apenas por palavras-chave, gerando atribuicoes imprecisas e dificultando a otimizacao de campanhas.',
    solution:
      'Implementacao de trackeamento direto via payload do WhatsApp, capturando o ID real do anuncio no momento da entrada do lead. A partir do ID, o sistema identifica automaticamente anuncio, campanha, conjunto e criativo.',
    benefits: [
      { text: 'Atribuicao correta da origem de praticamente ', highlight: '100%', tail: ' dos leads' },
      { text: 'Reducao de ate ', highlight: '25%', tail: ' no desperdicio de verba em anuncios ineficientes' },
      { text: 'Otimizacao de campanhas em tempo real' },
      { text: 'Eliminacao de dependencia de mensagens-chave' },
      { text: 'Decisoes baseadas em dados confiaveis' },
    ],
  },
  {
    id: 3,
    title: 'Trackeamento de Conversoes para Anuncios Inteligentes (Meta)',
    problem:
      'Campanhas inteligentes careciam de feedback real de conversao em valor, limitando a capacidade de otimizacao automatica do algoritmo.',
    solution:
      'Envio de eventos de conversao com valores monetarios reais diretamente para a Meta, informando quais anuncios, campanhas e criativos geraram resultado financeiro.',
    benefits: [
      { text: 'Melhoria media de ', highlight: '15% a 35%', tail: ' no ROAS' },
      { text: 'Algoritmo otimizado com dados reais de receita' },
      { text: 'Melhor alocacao automatica de orcamento' },
      { text: 'Reducao do tempo de aprendizado das campanhas' },
      { text: 'Maior previsibilidade de performance' },
    ],
  },
  {
    id: 4,
    title: 'Observa - Interface de Monitoramento Operacional',
    problem:
      'Gestores dependiam de planilhas, relatorios manuais e analises demoradas para entender resultados de marketing e vendas.',
    solution:
      'Desenvolvimento de um web app proprio para visualizacao centralizada de dados de leads, anuncios, vendas e criativos em tempo real. A interface permite filtros por origem, periodo, tempo entre lead e venda, volume diario, horarios de maior conversao, anuncios e criativos mais eficientes.',
    benefits: [
      { text: 'Reducao de ate ', highlight: '80%', tail: ' no tempo gasto em analises e relatorios' },
      { text: 'Decisoes operacionais tomadas ate ', highlight: '4x', tail: ' mais rapido' },
      { text: 'Visao clara de gargalos e oportunidades' },
      { text: 'Menor dependencia de analises manuais' },
      { text: 'Dados acessiveis para gestores nao tecnicos' },
    ],
  },
  {
    id: 5,
    title: 'Automacao de CRM, Follow-ups e Nutricao de Leads',
    problem:
      'Leads frios sem acompanhamento estruturado geravam perdas constantes e baixa previsibilidade comercial.',
    solution:
      'Integracoes entre Kommo CRM, planilhas e fluxos automatizados de follow-up e nutricao de leads. Inclui confirmacoes automaticas de visita em multiplos horarios (24h, 12h, 8h, 4h, 1h) e contato pos-visita.',
    benefits: [
      { text: 'Reducao significativa de faltas em agendamentos' },
      { text: 'Aumento no reaproveitamento de leads frios' },
      { text: 'Experiencia do lead mais consistente' },
      { text: 'Processo previsivel e escalavel' },
      { text: 'Menos dependencia de acoes manuais' },
    ],
  },
  {
    id: 6,
    title: 'Auditoria de Conversas com IA',
    problem:
      'Dificuldade em identificar falhas de atendimento e oportunidades de melhoria em grandes volumes de conversa.',
    solution:
      'Sistema de IA que analisa conversas automaticamente, identifica pontos de ruptura, falhas de abordagem e oportunidades de otimizacao.',
    benefits: [
      { text: 'Diagnostico claro de gargalos operacionais' },
      { text: 'Base objetiva para ajustes de fluxo e scripts' },
      { text: 'Melhoria continua da qualidade do atendimento' },
      { text: 'Reducao de decisoes baseadas em achismo' },
    ],
  },
  {
    id: 7,
    title: 'Relatorios Automatizados via WhatsApp',
    problem:
      'Relatorios manuais e atrasados prejudicavam o acompanhamento diario dos resultados.',
    solution:
      'Sistema que le dados de planilhas e envia relatorios automaticos diariamente via WhatsApp.',
    benefits: [
      { text: 'Eliminacao de trabalho manual recorrente' },
      { text: 'Acesso rapido as metricas criticas' },
      { text: 'Informacoes entregues no canal ja utilizado pelo gestor' },
      { text: 'Maior consistencia no acompanhamento diario' },
    ],
  },
  {
    id: 8,
    title: 'Integracoes Financeiras com Meta Ads',
    problem:
      'Gestores nao tinham visibilidade rapida de saldo e gastos de anuncios, aumentando riscos operacionais.',
    solution:
      'Integracao que envia informacoes de saldo, consumo e limites diretamente para o WhatsApp, quando aplicavel.',
    benefits: [
      { text: 'Controle financeiro em tempo real' },
      { text: 'Reducao de risco de campanhas pausadas inesperadamente' },
      { text: 'Monitoramento simples e acessivel' },
      { text: 'Menos dependencia de acessos manuais a plataforma' },
    ],
  },
  {
    id: 9,
    title: 'Confirmacoes e Notificacoes de Eventos',
    problem:
      'Falta de comunicacao imediata apos acoes importantes do lead gerava falhas operacionais e perda de contexto.',
    solution:
      'Envio automatico de mensagens apos inscricoes, confirmacoes de acoes e notificacoes em grupos internos quando ha novos agendamentos.',
    benefits: [
      { text: 'Melhoria na experiencia do lead' },
      { text: 'Comunicacao interna mais agil' },
      { text: 'Reducao de falhas e esquecimentos operacionais' },
      { text: 'Maior previsibilidade no fluxo diario' },
    ],
  },
  {
    id: 10,
    title: 'Automacao de Contratos Digitais',
    problem:
      'Processos manuais de geracao, preenchimento e envio de contratos eram lentos e sujeitos a erro.',
    solution:
      'Fluxo automatizado onde dados sao coletados via formulario, processados, o contrato correto e selecionado, preenchido e enviado ao cliente via WhatsApp para assinatura.',
    benefits: [
      { text: 'Reducao significativa do tempo de fechamento' },
      { text: 'Padronizacao contratual' },
      { text: 'Menos erros manuais' },
      { text: 'Processo profissional e escalavel' },
    ],
  },
  {
    id: 11,
    title: 'Conexoes Entre Plataformas',
    problem:
      'Sistemas e bases de dados isolados dificultavam a continuidade da operacao.',
    solution:
      'Desenvolvimento continuo de integracoes sob medida entre ferramentas, sistemas e bases de dados, adaptadas a realidade operacional de cada projeto.',
    benefits: [
      { text: 'Operacoes conectadas' },
      { text: 'Fluxos previsiveis' },
      { text: 'Reducao de retrabalho' },
      { text: 'Escala sustentavel sem aumento proporcional de equipe' },
    ],
  },
];

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isActive, setIsActive] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const featuredProjects = projects.slice(0, 3);
  const otherProjects = projects.slice(3);

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

  return (
    <section id="work" ref={sectionRef} className="section-plain">
      <div className="section-inner">
        <p className="section-eyebrow">03 - projetos</p>
        <p className="section-note">Alguns projetos estao sob NDA.</p>

        <div className={`projects-list-editorial ${isActive ? 'projects-list-visible' : ''}`}>
          {featuredProjects.map((project, index) => (
            <article
              key={project.id}
              className="project-entry project-row"
              style={{ transitionDelay: isActive ? `${0.1 + index * 0.1}s` : '0s' }}
            >
              <div className="project-head">
                <h3 className="project-title">{project.title}</h3>
              </div>
              <div className="project-body">
                <div className="project-case">
                <p><span>Problema:</span> {project.problem}</p>
                <p><span>Solucao:</span> {project.solution}</p>
                <p className="project-impact-label"><span>Beneficios e impacto:</span></p>
                <ul className="project-benefits">
                  {project.benefits.map((item) => (
                    <li key={item.text}>
                      {item.highlight ? (
                        <>
                          {item.text}
                          <strong>{item.highlight}</strong>
                          {item.tail}
                        </>
                      ) : (
                        item.text
                      )}
                    </li>
                  ))}
                </ul>
                </div>
              </div>
            </article>
          ))}
        </div>

        {otherProjects.length > 0 && (
          <div className="projects-more">
            <button
              type="button"
              className="projects-toggle"
              onClick={() => setShowAll((prev) => !prev)}
              aria-expanded={showAll}
            >
              {showAll ? 'Ocultar outros projetos' : 'Ver outros projetos'}
            </button>
            {showAll && (
              <div className="projects-list-editorial projects-list-visible">
                {otherProjects.map((project) => (
                  <article key={project.id} className="project-entry project-row">
                    <div className="project-head">
                      <h3 className="project-title">{project.title}</h3>
                    </div>
                    <div className="project-body">
                      <div className="project-case">
                      <p><span>Problema:</span> {project.problem}</p>
                      <p><span>Solucao:</span> {project.solution}</p>
                      <p className="project-impact-label"><span>Beneficios e impacto:</span></p>
                      <ul className="project-benefits">
                        {project.benefits.map((item) => (
                          <li key={item.text}>
                            {item.highlight ? (
                              <>
                                {item.text}
                                <strong>{item.highlight}</strong>
                                {item.tail}
                              </>
                            ) : (
                              item.text
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
