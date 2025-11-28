import "./Benefits.css";

export default function Benefits() {
  const list = [
    "Mais energia e disposição",
    "Melhora na saúde mental",
    "Controle de peso",
    "Sono de melhor qualidade"
  ];

  return (
    <section id="benefits">
      <h3>Benefícios de uma vida saudável</h3>

      <div className="benefits-container">
        {list.map((item, i) => (
          <div key={i} className="benefit-card">{item}</div>
        ))}
      </div>
    </section>
  );
}
