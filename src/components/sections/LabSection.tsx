const stackGroups = [
  { id: 1, title: 'Automacao & Integracoes', items: ['n8n', 'APIs', 'Webhooks', 'Chatbots'] },
  { id: 2, title: 'Desenvolvimento (em evolucao)', items: ['JavaScript', 'Node', 'Python'] },
  { id: 3, title: 'Dados', items: ['Postgres', 'Estruturacao de dados', 'ETL basico'] },
  { id: 4, title: 'Infraestrutura', items: ['VPS', 'Integracoes self-hosted', 'Monitoramento basico'] },
];

const LabSection = () => {
  return (
    <section id="lab" className="section-plain section-alt">
      <div className="section-inner">
        <p className="section-eyebrow">05 - stack</p>
        <div className="stack-groups">
          {stackGroups.map((group) => (
            <div key={group.id} className="stack-group">
              <h3>{group.title}</h3>
              <p>{group.items.join(' · ')}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LabSection;
