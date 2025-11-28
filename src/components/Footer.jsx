import "./Footer.css";

export default function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Vida Saudável</h4>
          <p>Transformando vidas através de hábitos saudáveis e bem-estar integral.</p>
          <div className="social-links">
            <a href="#" title="Instagram">📱</a>
            <a href="#" title="Facebook">👍</a>
            <a href="#" title="LinkedIn">🔗</a>
          </div>
        </div>
        
        <div className="footer-section">
          <h4>Links Rápidos</h4>
          <ul>
            <li><a href="#benefits">Benefícios</a></li>
            <li><a href="#testimonials">Depoimentos</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contato</h4>
          <ul>
            <li>📧 contato@vidasaudavel.com</li>
            <li>📱 (11) 98765-4321</li>
            <li>📍 São Paulo - SP, Brasil</li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Newsletter</h4>
          <p>Receba dicas semanais de saúde.</p>
          <div className="newsletter">
            <input type="email" placeholder="Seu email" />
            <button>Inscrever</button>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Vida Saudável — Todos os direitos reservados.</p>
        <p>Desenvolvido por Hudson Neves</p>
      </div>
    </footer>
  );
}
