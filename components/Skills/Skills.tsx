import React from 'react';
import { SKILLS } from '../../constants';
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
            Les compétences que j'ai et que je développe au cours de mes différents projets.
          </p>
        </div>

        {/* Grille de cartes */}
        <div className="skills__grid">
          {SKILLS.map((skill, index) => (
            <div key={index} className="skills__card">
              {/* Texte */}
              <div className="skills__card-content">
                <p className="skills__card-label">Compétence</p>
                <h3 className="skills__card-name">{skill.name}</h3>
                {skill.description && (
                  <p className="skills__card-desc">{skill.description}</p>
                )}
              </div>

              {/* Icône */}
              <div className="skills__card-icon">
                <span className="skills__card-emoji">{skill.icon}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
