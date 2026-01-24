import { useParallax } from '@/hooks/useParallax';

const testimonials = [
  {
    id: 1,
    quote:
      'Automatizou processos que antes levavam horas. A operação ganhou clareza e previsibilidade.',
    name: 'Marina Costa',
    role: 'Coordenadora de Operacoes',
    company: 'Grupo Aurora',
  },
  {
    id: 2,
    quote:
      'Entregou integracoes confiaveis e monitoradas. Hoje o time confia nos alertas e nos fluxos.',
    name: 'Diego Alves',
    role: 'Head de Tecnologia',
    company: 'NorteStack',
  },
  {
    id: 3,
    quote:
      'Organizou o caos entre sistemas e criou uma base de dados consistente para decisoes.',
    name: 'Paula Nunes',
    role: 'Gerente de Produto',
    company: 'Vetor Labs',
  },
];

const TestimonialsSection = () => {
  const parallax = useParallax(0.05);

  return (
    <section
      id="feedbacks"
      className="min-h-[70vh] py-32 px-8 md:px-16 lg:px-24 section-shell section-alt"
      style={{ transform: `translateY(${parallax}px)` }}
    >
      <h2 className="section-marker reveal">
        003 — feedbacks
      </h2>

      <div className="testimonials-grid">
        {testimonials.map((item, index) => (
          <blockquote
            key={item.id}
            className="testimonial-card reveal"
            style={{ animationDelay: `${0.1 + index * 0.1}s` }}
          >
            <div className="testimonial-stars" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, starIndex) => (
                <span
                  key={`${item.id}-star-${starIndex}`}
                  className="testimonial-star"
                  style={{ ['--star-index' as const]: starIndex + 1 }}
                >
                  ★
                </span>
              ))}
            </div>
            <p className="testimonial-quote">"{item.quote}"</p>
            <p className="testimonial-author">
              {item.name} — {item.role}, {item.company}
            </p>
          </blockquote>
        ))}
      </div>

      <p className="text-ghost mt-12 reveal reveal-delay-3">
        Depoimentos ficticios (substituir pelos reais).
      </p>
    </section>
  );
};

export default TestimonialsSection;
