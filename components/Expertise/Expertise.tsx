import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import './Expertise.css';

const EXPERTISE_ITEMS = [
  {
    id: 'architecture',
    title: 'Mon Avenir Professionnel',
    description: "Pourquoi le Web Marketing pour aller à chef de projet ?\n\nAprès un cursus initial en développement web, cette formation marketing et produit me confère une double casquette essentielle : comprendre le code en profondeur pour concevoir des spécifications réalistes, et maîtriser le produit pour maximiser l'impact utilisateur.\n\nÀ la recherche d'une **alternance** pour début octobre, je souhaite m'investir pleinement et avancer professionnellement.",
    image: '/expertise_1.jpg'
  },
  {
    id: 'frontend',
    title: 'Autres Experiences Professionnelles',
    description: "**Animateur pendant 3 ans** en école primaire et maternelle, j'ai développé une grande réactivité, l'écoute et l'aptitude à fédérer un groupe. Ces qualités se sont consolidées lors de missions logistiques chez Monoprix et comme coach adjoint en club de basket.\n\nCes expériences m'ont appris beaucoup sur le monde professionnel. Que ce soit le travail en équipe, le relationnel, avoir des responsabilités, remplir des attentes, ou gérer un projet pour le réussir.",
    image: '/expertise_2.jpeg'
  },
  {
    id: 'backend',
    title: 'Mes Passions',
    description: "Les jeux vidéo (de Zelda à Cyberpunk) nourrissent mon esprit d'analyse systémique, la recherche d'ergonomie intuitive et la résolution de problématiques complexes.\n\nLa culture sneakers et la musique rythment mon dynamisme quotidien, tandis que le basket-ball reste mon terrain d'apprentissage préféré pour la cohésion d'équipe, la résilience et la communication instantanée.",
    image: '/expertise_3.jpeg'
  }
];

const renderFormattedText = (text: string) => {
  const paragraphs = text.split('\n\n');
  return paragraphs.map((para, i) => {
    const isHeading = i === 0 && (para.endsWith('?') || para.length < 35);
    const parts = para.split(/(\*\*.*?\*\*)/g);

    return (
      <p key={i} className={isHeading ? 'expertise__content-heading' : 'expertise__content-paragraph'}>
        {parts.map((part, idx) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={idx}>{part.slice(2, -2)}</strong>;
          }
          return part;
        })}
      </p>
    );
  });
};

export const Expertise: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev < EXPERTISE_ITEMS.length - 1 ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <section id="expertise" className="expertise">
      <div className="expertise__inner">

        {/* En-tete */}
        <div className="expertise__header">
          <h2 className="expertise__title">Mon Approche</h2>
          <p className="expertise__subtitle">
            Une vision detaillee de ma methode de travail et de mes outils.
          </p>
        </div>

        {/* Carte principale */}
        <div className="expertise__card">

          {/* Image de fond */}
          <div className="expertise__bg-image-wrapper">
            <AnimatePresence>
              <motion.img
                key={activeIndex}
                src={EXPERTISE_ITEMS[activeIndex].image}
                alt={EXPERTISE_ITEMS[activeIndex].title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="expertise__bg-image"
                referrerPolicy="no-referrer"
              />
            </AnimatePresence>
            <div className="expertise__bg-gradient" />
            <div className="expertise__bg-gradient-mobile" />
          </div>

          {/* Zone de controles */}
          <div className="expertise__controls">

            {/* Fleches */}
            <div className="expertise__arrows">
              <button
                onClick={handlePrev}
                disabled={activeIndex === 0}
                className="expertise__arrow-btn"
                aria-label="Precedent"
              >
                <svg className="expertise__arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                disabled={activeIndex === EXPERTISE_ITEMS.length - 1}
                className="expertise__arrow-btn"
                aria-label="Suivant"
              >
                <svg className="expertise__arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* Accordion */}
            <div className="expertise__list">
              {EXPERTISE_ITEMS.map((item, index) => {
                const isActive = index === activeIndex;
                return (
                  <div key={item.id} className="expertise__item">
                    <button
                      onClick={() => setActiveIndex(index)}
                      className={`expertise__item-btn ${isActive ? 'expertise__item-btn--active' : ''}`}
                    >
                      {/* Indicateur */}
                      {isActive ? (
                        <div className="expertise__dot--active">
                          <div className="expertise__dot-inner" />
                        </div>
                      ) : (
                        <div className="expertise__dot--inactive" />
                      )}
                      {/* Label */}
                      <span className={`expertise__item-label ${isActive ? 'expertise__item-label--active' : ''}`}>
                        {item.title}
                      </span>
                    </button>

                    {/* Contenu anime */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, marginTop: 0 }}
                          animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                          exit={{ opacity: 0, height: 0, marginTop: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="expertise__item-content-wrapper"
                        >
                          <div className="expertise__item-content">
                            {renderFormattedText(item.description)}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
