import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../../types';
import './Projects.css';

const PROJECTS: Project[] = [
  {
    id: 9,
    title: "Projet STK",
    description: "Nous avons dû répondre à une problématique d'un client par un produit.\n\nIci la problématique était de digitaliser un jeu de cartes sur l'architecture pour STK Architecture.\n\nPour répondre à l'attendu, nous avons :\n- Fait une maquette du concept\n- Échangé avec le client / corrections\n- Défini un parcours UX\n- Créé les différentes pages en HTML/CSS\n- Présenté au client notre solution\n\nJ'ai eu deux rôles : chef de projet et responsable direction artistique.\n\nJ'ai :\n- Coordonné une équipe de 8 personnes\n- Créé un personnage unique pour le projet\n- Géré les tâches de chacun, des rendus et des deadlines\n- Fait les comptes rendus clients",
    tags: ["HTML/CSS", "Figma", "UI/UX", "Web Dev", "Trello"],
    image: "/projects/stk.png",
    link: "https://stk-digigame.vercel.app/"
  },
  {
    id: 10,
    title: "Créas digital",
    description: "Cet espace est dédié aux créations digitales que j’ai pu faire pour des projets ou durant mes stages.",
    tags: ["Canva", "Figma", "UI/UX", "Créations"],
    image: "/projects/creas_digital.png",
    subLinks: [
      {
        title: "Stage IdGarages",
        url: "https://canva.link/qand9g1ez29tu6b"
      },
      {
        title: "Projet STK",
        url: "https://www.figma.com/board/sFV1pqItmgOBzaPkowkXkW/stk?node-id=0-1&t=srm5zPnLsdauC00Q-1"
      }
    ]
  },
  {
    id: 8,
    title: "Station cyberpunk",
    description: "J'ai coordonné une équipe de 4 personnes pour créer une expérience 3d.\n\nJ'ai fait :\n- conception de la scène, ambiance sonore\n- conception de la gamification\n- création d'une maquette\n- gestion des tâches de chacun, des rendus et des deadlines",
    tags: ["E-learning", "Figma", "Coordination", "Roadmap", "Blender"],
    image: "/projects/cyberpunk.png",
    link: "https://three-cyberpunk-v21.vercel.app/"
  },
  {
    id: 4,
    title: "Projet - Modular Audit",
    description: "J'ai coordonné l'équipe de quatre personnes lors de ce projet, nous devions proposer une solution B2B pouvant évoluer en B2C. Le but était de viser une niche pour pouvoir proposer un business plan qui pourrait marcher dès maintenant.\n\nPour cela, j'ai dû faire :\n- conceptualiser l'idée\n- faire une étude de marché\n- trouver une niche où l'idée serait pertinente\n- créer une stratégie marketing\n- faire des maquettes\n- présenter le projet",
    tags: ["Gestion de projet", "B2B", "Stratégie", "Management"],
    image: "/projects/modular.png",
    link: "https://projet-b2b.vercel.app/"
  },
  {
    id: 6,
    title: "Projet - Wikipedia learning",
    description: "J'ai coordonné une équipe de sept personnes pour créer une application/site d'e-learning.\n\nLa deadline était d'une semaine pour faire ce MVP.\n\nJ'ai fait :\n- conception de l'idée\n- conception de la gamification\n- création d'une maquette\n- gestion des tâches de chacun, des rendus et des deadlines",
    tags: ["E-learning", "Figma", "Coordination", "Roadmap"],
    image: "/projects/wh.jpg",
    link: "https://azttttp.netlify.app/"
  }
];

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
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="projects__card"
            >
              {/* Image & Floating Top-Right Links */}
              <div className="projects__card-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="projects__card-image"
                />

                <div className="projects__card-top-links-wrapper">
                  {project.subLinks && project.subLinks.length > 0 ? (
                    project.subLinks.map((sub, idx) => (
                      <a
                        key={idx}
                        href={sub.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="projects__card-top-link"
                        title={sub.title}
                      >
                        {sub.title}
                        <svg className="projects__card-top-link-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    ))
                  ) : project.link && project.link !== "#" ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="projects__card-top-link"
                      title="Visiter le lien"
                    >
                      Visiter le lien
                      <svg className="projects__card-top-link-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ) : null}
                </div>
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

                {/* Footer */}
                <div className="projects__card-footer">
                  <button className="projects__card-btn">
                    Détails
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

                {/* Liens externes (Remontés en haut) */}
                {selectedProject.subLinks && selectedProject.subLinks.length > 0 ? (
                  <div className="project-modal__actions-top" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                    {selectedProject.subLinks.map((sub, idx) => (
                      <a
                        key={idx}
                        href={sub.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-modal__link"
                      >
                        {sub.title}
                        <svg className="project-modal__link-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    ))}
                  </div>
                ) : selectedProject.link && selectedProject.link !== "#" ? (
                  <div className="project-modal__actions-top">
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
                ) : null}

                {/* Description */}
                <div className="project-modal__section">
                  <h4 className="project-modal__section-label">À propos du projet</h4>
                  <p className="project-modal__desc">{selectedProject.description}</p>

                  {selectedProject.subLinks && selectedProject.subLinks.length > 0 && (
                    <div style={{ marginTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                      {selectedProject.subLinks.map((sub, i) => (
                        <a
                          key={i}
                          href={sub.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: '#AB886D', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.95rem' }}
                        >
                          <span>🔗 <strong>{sub.title}</strong> : {sub.url}</span>
                        </a>
                      ))}
                    </div>
                  )}
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
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
