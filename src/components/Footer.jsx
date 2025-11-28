import "./Footer.css";

export default function Footer() {
  return (
    <footer id="footer" className="footer">
      <p>© {new Date().getFullYear()} Vida Saudável — Todos os direitos reservados.</p>
    </footer>
  );
}
