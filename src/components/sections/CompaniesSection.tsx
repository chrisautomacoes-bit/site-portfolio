const specialties = [
  {
    id: 1,
    title: 'Automacao de processos operacionais',
    desc: 'Criacao de fluxos que reduzem trabalho manual e erros recorrentes.',
  },
  {
    id: 2,
    title: 'Integracoes entre sistemas',
    desc: 'Conexao de plataformas via APIs e webhooks para sincronizacao de dados e consistencia operacional.',
  },
  {
    id: 3,
    title: 'Sistemas conversacionais',
    desc: 'Chatbots aplicados a agendamento, triagem e automacao de atendimento.',
  },
  {
    id: 4,
    title: 'Estruturacao de operacoes digitais',
    desc: 'Organizacao de fluxos, dados e ferramentas para maior previsibilidade e controle.',
  },
];

const CompaniesSection = () => {
  return (
    <section id="clients" className="section-plain section-alt">
      <div className="section-inner">
        <p className="section-eyebrow">02 - especialidades</p>
        <div className="specialties-grid">
          {specialties.map((item) => (
            <div key={item.id} className="specialty-item">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;
