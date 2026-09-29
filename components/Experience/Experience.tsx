import React, { useState } from 'react';
import { EXPERIENCES } from '../../constants';
import './Experience.css';

export const Experience: React.FC = () => {
  const [activeId, setActiveId] = useState<number>(EXPERIENCES[0]?.id || 1);

  return (
    <section id="experience" className="experience">
      <div className="experience__inner">

        {/* En-tête */}
        <div className="experience__header">
          <div className="experience__header-left">
            <span className="experience__badge">EXPÉRIENCES</span>
            <h2 className="experience__title">
              Parcours &amp; <br />
              Trajectoire.
            </h2>
          </div>
          <div className="experience__header-right">
            <p className="experience__subtitle">
              Voici mes différentes expériences jusqu'à aujourd'hui.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="experience__timeline">
          {/* Ligne verticale continue */}
          <div className="experience__timeline-line" />

          {/* Liste des expériences */}
          <div className="experience__timeline-items">
            {EXPERIENCES.map((item) => {
              const isActive = activeId === item.id;
              return (
                <div
                  key={item.id}
                  className={`experience__item ${isActive ? 'experience__item--active' : ''}`}
                  onMouseEnter={() => setActiveId(item.id)}
                  onClick={() => setActiveId(item.id)}
                >
                  {/* Dot sur la ligne */}
                  <div
                    className={`experience__dot ${isActive ? 'experience__dot--active' : ''}`}
                    title={`Activer ${item.role}`}
                  >
                    <div className="experience__dot-inner" />
                  </div>

                  {/* Card de contenu */}
                  <div className="experience__card">
                    {/* Top Bar (Date & Tag) */}
                    <div className="experience__card-header">
                      <span className="experience__period-badge">
                        {item.period}
                      </span>
                      {item.statusTag && (
                        <span className="experience__status-tag">
                          {item.isCurrent && (
                            <svg className="experience__status-icon" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
                          )}
                          {item.statusTag}
                        </span>
                      )}
                    </div>

                    {/* Titre & Entreprise */}
                    <h3 className="experience__role">
                      {item.role}
                      {item.company && <span className="experience__company"> — {item.company}</span>}
                    </h3>

                    {item.description && (
                      <p className="experience__description">{item.description}</p>
                    )}

                    {item.tasks && item.tasks.length > 0 && (
                      <ul className="experience__tasks">
                        {item.tasks.map((task, i) => (
                          <li key={i} className="experience__task-item">
                            <span className="experience__task-bullet">•</span>
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Tags / Compétences de la mission */}
                    <div className="experience__tags">
                      {item.tags.map((tag, idx) => (
                        <span key={idx} className="experience__tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
