import React from 'react';
import { SKILL_CATEGORIES } from '../../constants';
import './Skills.css';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills">
      <div className="skills__inner">

        {/* En-tête */}
        <div className="skills__header">
          <h2 className="skills__title">
            Arbre de <br />
            <span className="skills__title-muted">compétences.</span>
          </h2>
          <p className="skills__subtitle">
            Mes domaines d'expertise organisés par catégorie.
          </p>
        </div>

        {/* Grille de catégories */}
        <div className="skills__categories-grid">
          {SKILL_CATEGORIES.map((cat, index) => (
            <div key={index} className="skills__category-card">
              <div className="skills__category-header">
                <span className="skills__category-icon">{cat.icon}</span>
                <div>
                  <h3 className="skills__category-title">{cat.title}</h3>
                  {cat.description && (
                    <p className="skills__category-desc">{cat.description}</p>
                  )}
                </div>
              </div>

              <div className="skills__items-list">
                {cat.items.map((item, itemIdx) => (
                  <span key={itemIdx} className="skills__item-tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
