import "./Testimonials.css";

export default function Testimonials() {
  const testimonials = [
    { name: "Ana Souza", text: "Melhorei minha energia e disposição em poucas semanas!" },
    { name: "Carlos Lima", text: "Perdi 8kg adotando pequenos hábitos saudáveis." },
  ];

  return (
    <section id="testimonials">
      <h3>Depoimentos</h3>

      <div className="testi-container">
        {testimonials.map((t, i) => (
          <div key={i} className="testi-card">
            <p className="text">"{t.text}"</p>
            <p className="author">— {t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
