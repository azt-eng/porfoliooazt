import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../../constants';
import { Project } from '../../types';
import './Projects.css';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const scrollPosition = container.scrollLeft;
    const containerCenter = scrollPosition + container.clientWidth / 2;

    let closestIndex = 0;
    let minDistance = Infinity;

    Array.from(container.children).forEach((child, index) => {
      const childElement = child as HTMLElement;
      const childCenter = childElement.offsetLeft + childElement.clientWidth / 2;
      const distance = Math.abs(childCenter - containerCenter);

      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    if (closestIndex !== activeIndex) {
      setActiveIndex(closestIndex);
    }
  };

  const scrollToProject = (index: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const child = container.children[index] as HTMLElement;
    if (child) {
      const childCenter = child.offsetLeft + child.clientWidth / 2;
      const containerCenter = container.clientWidth / 2;
      container.scrollTo({
        left: childCenter - containerCenter,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="projects" className="projects">
      <div className="projects__inner">

        {/* En-tête */}
        <div className="projects__header">
          <h2 className="projects__title">Mes Projets</h2>
          <p className="projects__subtitle">Mes réalisations les plus marquantes.</p>
        </div>

        {/* Carrousel horizontal */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="projects__scroll"
        >
          {PROJECTS.map((project, index) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="projects__card"
            >
              {/* Image */}
              <div className="projects__card-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="projects__card-image"
                />
              </div>

              {/* Corps */}
              <div className="projects__card-body">
                {/* Tags */}
                <div className="projects__card-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="projects__card-tag">{tag}</span>
                  ))}
                </div>

                {/* Titre */}
                <h3 className="projects__card-title">{project.title}</h3>

                {/* Description */}
                <p className="projects__card-desc">{project.description}</p>

                {/* Bouton */}
                <div className="projects__card-footer">
                  <button className="projects__card-btn">
                    Voir le projet
                    <svg className="projects__card-btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination + flèches */}
        <div className="projects__pagination">

          {/* Flèche gauche */}
          <button
            onClick={() => scrollToProject(Math.max(0, activeIndex - 1))}
            disabled={activeIndex === 0}
            className="projects__arrow-btn"
            aria-label="Projet précédent"
          >
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="projects__arrow-icon">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="projects__dots">
            {PROJECTS.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToProject(index)}
                aria-label={`Aller au projet ${index + 1}`}
                className={`projects__dot ${activeIndex === index ? 'projects__dot--active' : ''}`}
              />
            ))}
          </div>

          {/* Flèche droite */}
          <button
            onClick={() => scrollToProject(Math.min(PROJECTS.length - 1, activeIndex + 1))}
            disabled={activeIndex === PROJECTS.length - 1}
            className="projects__arrow-btn"
            aria-label="Projet suivant"
          >
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="projects__arrow-icon">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

        </div>

      </div>

      {/* Modal détail projet */}
      <AnimatePresence>
        {selectedProject && (
          <div className="project-modal">
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="project-modal__overlay"
            />

            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="project-modal__panel"
            >
              {/* Bouton fermer */}
              <button
                onClick={() => setSelectedProject(null)}
                className="project-modal__close"
                aria-label="Fermer"
              >
                <svg style={{ width: '1.25rem', height: '1.25rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Image */}
              <div className="project-modal__img-wrapper">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  referrerPolicy="no-referrer"
                  className="project-modal__img"
                />
              </div>

              {/* Contenu */}
              <div className="project-modal__content">
                <h3 className="project-modal__name">{selectedProject.title}</h3>

                {/* Description */}
                <div className="project-modal__section">
                  <h4 className="project-modal__section-label">À propos du projet</h4>
                  <p className="project-modal__desc">{selectedProject.description}</p>
                </div>

                {/* Tags */}
                <div className="project-modal__section">
                  <h4 className="project-modal__section-label">Compétences & Technologies</h4>
                  <div className="project-modal__tags">
                    {selectedProject.tags.map((tag, i) => (
                      <span key={i} className="project-modal__tag">{tag}</span>
                    ))}
                  </div>
                </div>

                {/* Lien externe */}
                {selectedProject.link && selectedProject.link !== "#" && (
                  <div className="project-modal__actions">
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-modal__link"
                    >
                      Visiter le lien
                      <svg className="project-modal__link-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
