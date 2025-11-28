import "./Testimonials.css";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ana Souza",
      role: "Educadora",
      text: "Em apenas 3 meses, melhorei minha energia, perdi 5kg e estou muito mais feliz. Os hábitos que aprendi são simples e sustentáveis!",
      rating: 5,
      image: "👩‍🏫"
    },
    {
      name: "Carlos Lima",
      role: "Empresário",
      text: "Perdi 8kg e ganhei muita qualidade de vida. Agora durmo melhor, tenho mais foco no trabalho e sinto-me rejuvenescido.",
      rating: 5,
      image: "👨‍💼"
    },
    {
      name: "Mariana Costa",
      role: "Mãe de 2 filhos",
      text: "Consegui conciliar vida de mãe com cuidados com saúde. Hoje tenho energia para brincar com meus filhos o dia todo!",
      rating: 5,
      image: "👨‍👩‍👧‍👦"
    },
    {
      name: "Pedro Oliveira",
      role: "Desenvolvedor",
      text: "Trabalhava 12h sentado. Agora faço exercícios, como melhor e produtividade triplicou. Recomendo para todos!",
      rating: 5,
      image: "👨‍💻"
    }
  ];

  return (
    <section id="testimonials" className="testimonials">
      <div className="testi-header">
        <h3>O que nossos clientes dizem</h3>
        <p>Histórias reais de transformação e sucesso</p>
      </div>

      <div className="testi-container">
        {testimonials.map((t, i) => (
          <div key={i} className="testi-card">
            <div className="testi-header-card">
              <div className="testi-image">{t.image}</div>
              <div className="testi-info">
                <h4>{t.name}</h4>
                <p className="testi-role">{t.role}</p>
              </div>
              <div className="testi-rating">
                {"⭐".repeat(t.rating)}
              </div>
            </div>
            <p className="testi-text">"{t.text}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}
