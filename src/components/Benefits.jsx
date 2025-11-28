import "./Benefits.css";

export default function Benefits() {
  const benefits = [
    {
      icon: "⚡",
      title: "Mais Energia",
      description: "Aumente sua disposição para as atividades diárias com exercícios regulares e alimentação balanceada."
    },
    {
      icon: "🧠",
      title: "Saúde Mental",
      description: "Reduza estresse e ansiedade. Atividades físicas liberam endorfinas que melhoram seu humor."
    },
    {
      icon: "⚖️",
      title: "Controle de Peso",
      description: "Atinja seu peso ideal de forma saudável e sustentável com hábitos duradouros."
    },
    {
      icon: "😴",
      title: "Melhor Sono",
      description: "Durma melhor e acorde mais descansado com rotinas que respeitam seu ritmo circadiano."
    },
    {
      icon: "❤️",
      title: "Saúde Cardiovascular",
      description: "Fortaleça seu coração e reduza riscos de doenças com atividades aeróbicas regulares."
    },
    {
      icon: "🧘",
      title: "Bem-estar Geral",
      description: "Equilíbrio corpo e mente para uma vida mais plena, feliz e satisfatória."
    }
  ];

  return (
    <section id="benefits" className="benefits">
      <div className="benefits-header">
        <h3>Benefícios de uma vida saudável</h3>
        <p>Descubra como transformar sua saúde em 6 áreas fundamentais</p>
      </div>

      <div className="benefits-container">
        {benefits.map((benefit, i) => (
          <div key={i} className="benefit-card">
            <div className="benefit-icon">{benefit.icon}</div>
            <h4>{benefit.title}</h4>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
