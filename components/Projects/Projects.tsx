import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../../types';
import './Projects.css';

const PROJECTS: Project[] = [
  {
    id: 4,
    title: "Projet - Modular Audit",
    description: "J'ai coordonné l'équipe de quatre personnes lors de ce projet, nous devions proposer une solution B2B pouvant évoluer en B2C. Le but était de viser une niche pour pouvoir proposer un business plan qui pourrait marcher dès maintenant.\n\nPour cela, j'ai dû faire :\n- conceptualiser l'idée\n- faire une étude de marché\n- trouver une niche où l'idée serait pertinente\n- créer une stratégie marketing\n- faire des maquettes\n- présenter le projet",
    tags: ["Gestion de projet", "B2B", "Stratégie", "Management"],
    image: "/projects/modular.png",
    link: "https://projet-b2b.vercel.app/"
  },
  {
    id: 5,
    title: "Développeur Web - Jeu instant Footlocker (2026)",
    description: "Nous avons dû développer un projet pour un client Footlocker.\n\nNous devions répondre à la problématique qui était de créer un jeu instant gagnant permettant de récolter de la data sur les clients (récolte d'emails).\n\nPour ça, nous avons dû :\n- Créer un concept de jeu instant gagnant\n- Faire une maquette du concept\n- Définir un parcours UX\n- Créer les différentes pages en HTML/CSS\n- Présenter au client notre solution",
    tags: ["HTML/CSS", "Figma", "UI/UX", "Web Dev"],
    image: "image/FOOT_LOCKER_LOGO_9c7a6360-57c1-4226-95ea-d08b89d8b6b6.webp",
    link: "#"
  },
  {
    id: 6,
    title: "Projet - Wikipedia learning",
    description: "J'ai coordonné une équipe de sept personnes pour créer une application/site d'e-learning.\n\nLa deadline était d'une semaine pour faire ce MVP.\n\nJ'ai fait :\n- conception de l'idée\n- conception de la gamification\n- création d'une maquette\n- gestion des tâches de chacun, des rendus et des deadlines",
    tags: ["E-learning", "Figma", "Coordination", "Roadmap"],
    image: "/projects/wh.jpg",
    link: "https://azttttp.netlify.app/"
  },
  {
    id: 7,
    title: "Assistant gestion projet - Mitness (2025)",
    description: "J'ai aidé à coordonner une équipe de six personnes sur la création d'une campagne de communication pour une gamme de vêtements.\n\nPour réussir cela, nous avons réalisé :\n- le ciblage de la clientèle et la création d'un persona\n- l'étude du marché visé\n- la création de fiches produits\n- l'établissement d'un budget pour la communication\n- la conception de la campagne de communication",
    tags: ["Marketing", "Communication", "Stratégie", "Budget"],
    image: "image/spiral.png",
    link: "#"
  },
  {
    id: 2,
    title: "Stage Community Manager - Polywitch (2023)",
    description: "Je devais m'occuper de l'animation du compte Instagram et de la prospection client afin de promouvoir une application d'apprentissage du japonais.\n\nL'application n'en était qu'à ses premières versions, le but étant d'avoir un retour sur le gameplay de l'application.\n\nJ'ai dû prospecter pour des clients qui sont influenceurs japonais ou des influenceurs en France, promouvant le Japon et sa culture.\n\nJ'ai dû :\n- rédiger des mails personnalisés\n- faire une liste de clients à contacter\n- présenter le projet\n- collecter les feedbacks (positifs ou négatifs) des clients dans un Excel\n- planifier des rendez-vous avec les clients intéressés",
    tags: ["Community Management", "Excel", "Marketing", "Relation Client"],
    image: "/projects/poliii.jpg",
    link: "https://www.instagram.com/polywitchgames?igsh=bjk4cWk2eWRpbjc1"
  },
  {
    id: 1,
    title: "Stage Développement - lets game (2023)",
    description: "Deuxième stage après ma terminale, ici j'ai renforcé mes capacités à utiliser Python.\n\nJ'ai dû faire :\n- un jeu d'arcade fait sur Python\n- l'interface graphique sur Tkinter",
    tags: ["Python", "Tkinter", "Algorithmique"],
    image: "/projects/snake.jpg",
    link: "#"
  },
  {
    id: 3,
    title: "Stage Développeur PowerShell - Polywitch (2022)",
    description: "C'était ma toute première expérience en entreprise et en informatique globalement.\n\nN'ayant pas énormément de compétences au début de ce stage, j'ai appris :\n- les bases de PowerShell et d'Ubuntu\n- la création d'un bot Discord",
    tags: ["PowerShell", "API Discord", "Automation", "Algorithmie"],
    image: "/projects/poliii.jpg",
    link: "#"
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
