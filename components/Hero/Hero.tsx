import React from 'react';
import './Hero.css';

export const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        {/* Titre principal */}
        <h1 className="hero__title">
          Gestion de projet <br />
          <span className="hero__title-accent">&amp; Digital</span>
        </h1>

        {/* Sous-titre + badge */}
        <p className="hero__subtitle">
          <span>Innovateur de 22 ans fusionnant informatique, tech et créativité.</span>
          <span className="hero__badge">
            <span className="hero__pulse-wrapper">
              <span className="hero__pulse-ring" />
              <span className="hero__pulse-dot" />
            </span>
            Recherche d'alternance pour début octobre
          </span>
        </p>

        {/* Boutons CTA */}
        <div className="hero__cta-group">
          <a href="#projects" className="hero__btn hero__btn--primary">
            Découvrir mes projets
          </a>
          <a href="#about" className="hero__btn hero__btn--secondary">
            En savoir plus
          </a>
        </div>
      </div>
    </section>
  );
};
