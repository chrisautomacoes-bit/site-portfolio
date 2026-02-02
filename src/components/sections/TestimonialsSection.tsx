const testimonials = [
  {
    id: 1,
    quote:
      'Automatizou processos que antes levavam horas. A operacao ganhou clareza e previsibilidade.',
    name: 'Marina Costa',
    role: 'Coordenadora de Operacoes',
    company: 'Grupo Aurora',
  },
];

const TestimonialsSection = () => {
  return (
    <section id="feedbacks" className="section-plain">
      <div className="section-inner">
        <p className="section-eyebrow">04 - provas</p>
        <div className="testimonials-editorial">
          <blockquote>
            <p className="testimonial-quote">"{testimonials[0].quote}"</p>
            <p className="testimonial-author">
              {testimonials[0].name} - {testimonials[0].role}, {testimonials[0].company}
            </p>
          </blockquote>
        </div>
        <p className="section-note">Depoimentos ilustrativos. Trocar pelos reais.</p>
      </div>
    </section>
  );
};

export default TestimonialsSection;
