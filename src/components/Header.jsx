import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span className="logo-icon">🌿</span>
          <h1>Vida Saudável</h1>
        </div>
        <nav className="nav">
          <a href="#benefits" className="nav-link">Benefícios</a>
          <a href="#testimonials" className="nav-link">Depoimentos</a>
          <a href="#footer" className="nav-link">Contato</a>
          <a href="#" className="cta-button">Iniciar</a>
        </nav>
      </div>
    </header>
  );
}
