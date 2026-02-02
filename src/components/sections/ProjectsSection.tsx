import { useEffect, useRef, useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Agente de IA para Agendamentos Ativos',
    problem:
      'Atendimentos manuais, lentos e inconsistentes geravam perda de leads, alto tempo de resposta e baixa taxa de conversão em agendamentos.',
    solution:
      'Desenvolvimento de um agente de IA conversacional que atende leads de forma natural e ativa, operando 24/7. O agente compreende texto, áudio, imagem, vídeo e PDF, conduz a conversa com perguntas estratégicas (objetivo, dores, contexto), apresenta soluções de forma progressiva, quebra objeções e convida ativamente o lead para o agendamento. Todas as interações são registradas em banco de dados para análise e melhoria contínua.',
    benefits: [
      { text: 'Redução de até ', highlight: '95%', tail: ' no tempo de resposta ao lead' },
      { text: 'Aumento médio de ', highlight: '30% a 45%', tail: ' na taxa de agendamento' },
      { text: 'Redução de até ', highlight: '70%', tail: ' no custo operacional de atendimento' },
      { text: 'Atendimento simultâneo ilimitado' },
      { text: 'Padronização completa da abordagem comercial' },
      { text: 'Base de dados estruturada para decisões futuras' },
    ],
  },
  {
    id: 2,
    title: 'Trackeamento Avançado de Anúncios via WhatsApp',
    problem:
      'Ferramentas tradicionais identificavam anúncios apenas por palavras-chave, gerando atribuições imprecisas e dificultando a otimização de campanhas.',
    solution:
      'Implementação de trackeamento direto via payload do WhatsApp, capturando o ID real do anúncio no momento da entrada do lead. A partir do ID, o sistema identifica automaticamente anúncio, campanha, conjunto e criativo.',
    benefits: [
      { text: 'Atribuição correta da origem de praticamente ', highlight: '100%', tail: ' dos leads' },
      { text: 'Redução de até ', highlight: '25%', tail: ' no desperdício de verba em anúncios ineficientes' },
      { text: 'Otimização de campanhas em tempo real' },
      { text: 'Eliminação de dependência de mensagens-chave' },
      { text: 'Decisões baseadas em dados confiáveis' },
    ],
  },
  {
    id: 3,
    title: 'Trackeamento de Conversões para Anúncios Inteligentes (Meta)',
    problem:
      'Campanhas inteligentes careciam de feedback real de conversão em valor, limitando a capacidade de otimização automática do algoritmo.',
    solution:
      'Envio de eventos de conversão com valores monetários reais diretamente para a Meta, informando quais anúncios, campanhas e criativos geraram resultado financeiro.',
    benefits: [
      { text: 'Melhoria média de ', highlight: '15% a 35%', tail: ' no ROAS' },
      { text: 'Algoritmo otimizado com dados reais de receita' },
      { text: 'Melhor alocação automática de orçamento' },
      { text: 'Redução do tempo de aprendizado das campanhas' },
      { text: 'Maior previsibilidade de performance' },
    ],
  },
  {
    id: 4,
    title: 'Observa - Interface de Monitoramento Operacional',
    problem:
      'Gestores dependiam de planilhas, relatórios manuais e análises demoradas para entender resultados de marketing e vendas.',
    solution:
      'Desenvolvimento de um web app próprio para visualização centralizada de dados de leads, anúncios, vendas e criativos em tempo real. A interface permite filtros por origem, período, tempo entre lead e venda, volume diário, horários de maior conversão, anúncios e criativos mais eficientes.',
    benefits: [
      { text: 'Redução de até ', highlight: '80%', tail: ' no tempo gasto em análises e relatórios' },
      { text: 'Decisões operacionais tomadas até ', highlight: '4x', tail: ' mais rápido' },
      { text: 'Visão clara de gargalos e oportunidades' },
      { text: 'Menor dependência de análises manuais' },
      { text: 'Dados acessíveis para gestores não técnicos' },
    ],
  },
  {
    id: 5,
    title: 'Automação de CRM, Follow-ups e Nutrição de Leads',
    problem:
      'Leads frios sem acompanhamento estruturado geravam perdas constantes e baixa previsibilidade comercial.',
    solution:
      'Integrações entre Kommo CRM, planilhas e fluxos automatizados de follow-up e nutrição de leads. Inclui confirmações automáticas de visita em múltiplos horários (24h, 12h, 8h, 4h, 1h) e contato pós-visita.',
    benefits: [
      { text: 'Redução significativa de faltas em agendamentos' },
      { text: 'Aumento no reaproveitamento de leads frios' },
      { text: 'Experiência do lead mais consistente' },
      { text: 'Processo previsível e escalável' },
      { text: 'Menos dependência de ações manuais' },
    ],
  },
  {
    id: 6,
    title: 'Auditoria de Conversas com IA',
    problem:
      'Dificuldade em identificar falhas de atendimento e oportunidades de melhoria em grandes volumes de conversa.',
    solution:
      'Sistema de IA que analisa conversas automaticamente, identifica pontos de ruptura, falhas de abordagem e oportunidades de otimização.',
    benefits: [
      { text: 'Diagnóstico claro de gargalos operacionais' },
      { text: 'Base objetiva para ajustes de fluxo e scripts' },
      { text: 'Melhoria contínua da qualidade do atendimento' },
      { text: 'Redução de decisões baseadas em achismo' },
    ],
  },
  {
    id: 7,
    title: 'Relatórios Automatizados via WhatsApp',
    problem:
      'Relatórios manuais e atrasados prejudicavam o acompanhamento diário dos resultados.',
    solution:
      'Sistema que lê dados de planilhas e envia relatórios automáticos diariamente via WhatsApp.',
    benefits: [
      { text: 'Eliminação de trabalho manual recorrente' },
      { text: 'Acesso rápido às métricas críticas' },
      { text: 'Informações entregues no canal já utilizado pelo gestor' },
      { text: 'Maior consistência no acompanhamento diário' },
    ],
  },
  {
    id: 8,
    title: 'Integrações Financeiras com Meta Ads',
    problem:
      'Gestores não tinham visibilidade rápida de saldo e gastos de anúncios, aumentando riscos operacionais.',
    solution:
      'Integração que envia informações de saldo, consumo e limites diretamente para o WhatsApp, quando aplicável.',
    benefits: [
      { text: 'Controle financeiro em tempo real' },
      { text: 'Redução de risco de campanhas pausadas inesperadamente' },
      { text: 'Monitoramento simples e acessível' },
      { text: 'Menos dependência de acessos manuais à plataforma' },
    ],
  },
  {
    id: 9,
    title: 'Confirmações e Notificações de Eventos',
    problem:
      'Falta de comunicação imediata após ações importantes do lead gerava falhas operacionais e perda de contexto.',
    solution:
      'Envio automático de mensagens após inscrições, confirmações de ações e notificações em grupos internos quando há novos agendamentos.',
    benefits: [
      { text: 'Melhoria na experiência do lead' },
      { text: 'Comunicação interna mais ágil' },
      { text: 'Redução de falhas e esquecimentos operacionais' },
      { text: 'Maior previsibilidade no fluxo diário' },
    ],
  },
  {
    id: 10,
    title: 'Automação de Contratos Digitais',
    problem:
      'Processos manuais de geração, preenchimento e envio de contratos eram lentos e sujeitos a erro.',
    solution:
      'Fluxo automatizado onde dados são coletados via formulário, processados, o contrato correto é selecionado, preenchido e enviado ao cliente via WhatsApp para assinatura.',
    benefits: [
      { text: 'Redução significativa do tempo de fechamento' },
      { text: 'Padronização contratual' },
      { text: 'Menos erros manuais' },
      { text: 'Processo profissional e escalável' },
    ],
  },
  {
    id: 11,
    title: 'Conexões Entre Plataformas',
    problem:
      'Sistemas e bases de dados isolados dificultavam a continuidade da operação.',
    solution:
      'Desenvolvimento contínuo de integrações sob medida entre ferramentas, sistemas e bases de dados, adaptadas à realidade operacional de cada projeto.',
    benefits: [
      { text: 'Operações conectadas' },
      { text: 'Fluxos previsíveis' },
      { text: 'Redução de retrabalho' },
      { text: 'Escala sustentável sem aumento proporcional de equipe' },
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
        <p className="section-note">Alguns projetos estão sob NDA.</p>

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
                  <p><span>Solução:</span> {project.solution}</p>
                  <p className="project-impact-label"><span>Benefícios e impacto:</span></p>
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
                        <p><span>Solução:</span> {project.solution}</p>
                        <p className="project-impact-label"><span>Benefícios e impacto:</span></p>
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
