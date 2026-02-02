const stackGroups = [
  { id: 1, title: 'Automação & Integrações', items: ['n8n', 'APIs', 'Webhooks', 'Chatbots'] },
  { id: 2, title: 'Desenvolvimento (em evolução)', items: ['JavaScript', 'Node', 'Python'] },
  { id: 3, title: 'Dados', items: ['Postgres', 'Estruturação de dados', 'ETL básico'] },
  { id: 4, title: 'Infraestrutura', items: ['VPS', 'Integrações self-hosted', 'Monitoramento básico'] },
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
