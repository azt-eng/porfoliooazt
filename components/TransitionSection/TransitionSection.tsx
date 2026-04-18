import React from 'react';
import { motion } from 'motion/react';
import './TransitionSection.css';

export const TransitionSection: React.FC = () => {
  return (
    <section className="transition-section">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="transition-section__bg-wrapper"
      >
        {/* Image de fond */}
        <div
          className="transition-section__bg"
          style={{ backgroundImage: 'url("https://picsum.photos/seed/basketball-tech/1920/1080")' }}
        />

        {/* Overlay dégradé */}
        <div className="transition-section__overlay" />
      </motion.div>
    </section>
  );
};
