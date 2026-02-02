const specialties = [
  {
    id: 1,
    title: 'Automação de processos operacionais',
    desc: 'Criação de fluxos que reduzem trabalho manual e erros recorrentes.',
  },
  {
    id: 2,
    title: 'Integrações entre sistemas',
    desc: 'Conexão de plataformas via APIs e webhooks para sincronização de dados e consistência operacional.',
  },
  {
    id: 3,
    title: 'Sistemas conversacionais',
    desc: 'Chatbots aplicados a agendamento, triagem e automação de atendimento.',
  },
  {
    id: 4,
    title: 'Estruturação de operações digitais',
    desc: 'Organização de fluxos, dados e ferramentas para maior previsibilidade e controle.',
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
