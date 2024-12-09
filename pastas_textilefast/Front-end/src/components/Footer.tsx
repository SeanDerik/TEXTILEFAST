import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 TextileFast. Todos os direitos reservados.</p>
        <div className="footer-links">
          <a href="/sobre">Sobre nós</a>
          <a href="/contato">Contato</a>
          <a href="/privacidade">Política de Privacidade</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
