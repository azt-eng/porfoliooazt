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
                J'ai 22 ans et je suis actuellement étudiant en Marketing Web. Mon objectif premier est de m'épanouir et d'exceller en tant que Chef de Projet Web.
              </p>
              <p className="about__paragraph">
                J'aime apprendre de nouvelles notions, concevoir des projets numériques de A à Z et développer continuellement mes compétences techniques ainsi que managériales.
              </p>
              <p className="about__paragraph">
                Passer d'une idée anodine au départ à un vrai projet opérationnel est un accomplissement stimulant : construire, expérimenter, réajuster et concrétiser font partie intégrante de ce challenge.
              </p>
            </div>
          </motion.div>

        </div>

        {/* Banner CTA Découvrir mes projets & mes compétences */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="about__cta-banner"
        >
          {/* Icon & Texte */}
          <div className="about__cta-info">
            <div className="about__cta-icon">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 11l1 2 2.5.5-1.8 1.7.5 2.5-2.2-1.2-2.2 1.2.5-2.5-1.8-1.7 2.5-.5 1-2z" />
              </svg>
            </div>
            <div>
              <h3 className="about__cta-title">Découvrir mes projets &amp; mes compétences</h3>
              <p className="about__cta-subtitle">Explorez mes réalisations interactives.</p>
            </div>
          </div>

          {/* Boutons connectés */}
          <div className="about__cta-buttons">
            <a
              href="/CV_Karifala_Coulibaly.pdf"
              download="CV_Karifala_Coulibaly.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="about__btn-cv"
            >
              <svg className="about__btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Télécharger mon CV
            </a>

            <a
              href="#projects"
              className="about__btn-projects"
            >
              Découvrir mes projets
              <svg className="about__btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
