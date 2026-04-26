import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import './Expertise.css';

const EXPERTISE_ITEMS = [
  {
    id: 'architecture',
    title: 'Mon Avenir Professionnel',
    description: "Je suis actuellement en cursus de développeur Web.\n\nPourquoi choisir cette voie alors que je veux faire chef de projet ?\n\nJ'ai d'abord envie de me former sur l'aspect technique, puis sur l'aspect produit, ce sont deux penchants importants du métier. Aucun des deux n'est à sous-estimer. J'aimerais comprendre les deux au maximum pour pouvoir être le plus polyvalent et apporter des solutions. Peu importe le problème.",
    image: 'image/IMG_7677.JPG'
  },
  {
    id: 'frontend',
    title: 'Autres Experiences Professionnelles',
    description: "J'ai été animateur pendant trois années en ecole primaire et maternelle. J'ai aussi fait de la mise en rayon et de la logistique à Monoprix, ainsi que coach adjoint dans un club de basket. Ces expériences m'ont appris beaucoup sur le monde professionnel.\n\nQue ce soit le travail en équipe, le relationnel, avoir des responsabilités, remplir des attentes, ou gérer un projet pour le réussir.",
    image: 'image/WhatsApp Image 2026-04-26 at 14.55.43 (1).jpeg'
  },
  {
    id: 'backend',
    title: 'Mes Passions',
    description: "Les jeux video font partie de mes passions depuis petit. Que ce soit les jeux Mario en passant par les Zelda, en explorant des villes comme Night City avec Cyberpunk ou l'espace dans No Man's Sky, le jeu video m'a beaucoup appris : la creativite, la reflexion et la cooperation.\n\nLa musique et les sneakers rythment mon quotidien. La musique occupe une grande place pour moi, elle m'aide a me concentrer.\n\nEt pour finir, le basket, qui est le sport que j'ai le plus pratique. C'est une vraie passion qui me suit depuis mes plus jeunes annees jusqu'a aujourd'hui.",
    image: 'image/WhatsApp Image 2026-04-26 at 16.26.57.jpeg'
  }
];

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
                            <span className="expertise__item-content-bold">
                              {item.description.split('. ')[0]}.{' '}
                            </span>
                            <span className="expertise__item-content-rest">
                              {item.description.substring(item.description.indexOf('. ') + 2)}
                            </span>
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
