import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import './About.css';

const ABOUT_IMAGES = [
  "/about/photo1.jpg",   // Photo fixe (IMG_7677 - souriant)
  "/about/photo2.jpg",   // Portrait (ex DSC04311)
  "/about/photo3.jpg",   // Basket
];



export const About: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = x / rect.width;

    // 3 photos : tiers gauche/milieu/droit
    if (percentage < 0.33) {
      setActiveIndex(0);
    } else if (percentage < 0.66) {
      setActiveIndex(1);
    } else {
      setActiveIndex(2);
    }
  };

  return (
    <section id="about" className="about">
      <div className="about__inner">
        <div className="about__grid">

          {/* Image interactive */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="about__image-wrapper"
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setActiveIndex(0)}
          >
            <div className="about__image-glow" />
            <div className="about__image-frame">
              {ABOUT_IMAGES.map((src, index) => (
                <img
                  key={src}
                  src={src}
                  alt={`Karifala Coulibaly ${index + 1}`}
                  className={`about__img ${index === activeIndex ? 'about__img--visible' : 'about__img--hidden'}`}
                />
              ))}
            </div>
          </motion.div>

          {/* Texte */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="about__text"
          >
            <h2 className="about__title">Qui suis-je ?</h2>
            <div className="about__paragraphs">
              <p className="about__paragraph">
                J'ai 21 ans je suis actuellement en Bachelor développeur Web, mon objectif est de devenir chef de projet.
              </p>
              <p className="about__paragraph">
                J'aime apprendre de nouvelles choses, travailler sur mes projets et développer constamment mes compétences techniques.
              </p>
              <p className="about__paragraph">
                Passer d'une idée anodine au départ à un vrai projet est un sentiment que j'aime particulièrement, construire essayer rater, recommencer et réussir elles font partie de ce challenge.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
