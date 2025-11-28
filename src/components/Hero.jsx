import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h2>Transforme sua vida com hábitos saudáveis</h2>
          <p>
            Descubra como pequenas mudanças diárias podem resultar em uma vida mais energética, feliz e equilibrada. Comece sua jornada hoje mesmo!
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Quero começar agora</button>
            <button className="btn-secondary">Saiba mais</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-placeholder">🏃‍♀️</div>
        </div>
      </div>
      <div className="hero-stats">
        <div className="stat">
          <span className="stat-number">50K+</span>
          <span className="stat-label">Pessoas transformadas</span>
        </div>
        <div className="stat">
          <span className="stat-number">4.9★</span>
          <span className="stat-label">Avaliação média</span>
        </div>
        <div className="stat">
          <span className="stat-number">99%</span>
          <span className="stat-label">Satisfação garantida</span>
        </div>
      </div>
    </section>
  );
}
