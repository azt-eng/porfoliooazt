import React from 'react';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">

        {/* Contenu principal */}
        <div className="footer__main">
          {/* Brand */}
          <div className="footer__brand">
            <h3 className="footer__brand-name">Karifala Coulibaly</h3>
            <p className="footer__brand-desc">
              L'informatique est le domaine qui incarne la liberté, la diversité et la créativité à mes yeux.
            </p>
          </div>

          {/* Navigation rapide */}
          <div className="footer__nav-block">
            <h4 className="footer__nav-label">Liens rapides</h4>
            <nav className="footer__nav">
              <a href="#about"    className="footer__nav-link">À propos</a>
              <a href="#projects" className="footer__nav-link">Projets</a>
              <a href="#contact"  className="footer__nav-link">Contact</a>
            </nav>
          </div>
        </div>

        {/* Bas de page */}
        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Karifala Coulibaly. Tous droits réservés.</p>
        </div>

      </div>
    </footer>
  );
};
