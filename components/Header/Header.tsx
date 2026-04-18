import React, { useState, useEffect } from 'react';
import { Theme } from '../../types';
import './Header.css';

interface HeaderProps {
  theme: Theme;
  toggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -60% 0px' }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const getLinkClass = (sectionId: string) =>
    `header__nav-link${activeSection === sectionId ? ' header__nav-link--active' : ''}`;

  const getMobileLinkClass = (sectionId: string) =>
    `mobile-menu__link${activeSection === sectionId ? ' mobile-menu__link--active' : ''}`;

  return (
    <>
      <header className="header">
        <div className="header__inner">
          {/* Logo */}
          <a href="#" className="header__logo">
            Karifala Coulibaly
          </a>

          {/* Desktop Nav */}
          <nav className="header__nav">
            <a href="#about"    className={getLinkClass('about')}>À propos</a>
            <a href="#projects" className={getLinkClass('projects')}>Projets</a>
            <a href="#skills"   className={getLinkClass('skills')}>Compétences</a>
            <a href="#contact"  className={getLinkClass('contact')}>Contact</a>
          </nav>

          {/* Right Controls */}
          <div className="header__controls">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="header__theme-btn"
              aria-label="Changer le thème"
            >
              <span className={`header__theme-icon header__theme-icon--${theme}`}>
                {theme === 'light' ? '🌙' : '☀️'}
              </span>
              <span className="header__theme-btn-hover" />
            </button>

            {/* CTA */}
            <a href="#contact" className="header__cta">
              Me contacter
            </a>

            {/* Hamburger */}
            <button
              className="header__hamburger"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Ouvrir le menu"
            >
              <svg className="header__hamburger-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div
        className={`mobile-overlay ${isMobileMenuOpen ? 'mobile-overlay--open' : 'mobile-overlay--closed'}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'mobile-menu--open' : ''}`}>
        <div className="mobile-menu__header">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="mobile-menu__close-btn"
            aria-label="Fermer le menu"
          >
            <svg className="mobile-menu__close-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="mobile-menu__nav">
          <a href="#about"    onClick={() => setIsMobileMenuOpen(false)} className={getMobileLinkClass('about')}>À propos</a>
          <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className={getMobileLinkClass('projects')}>Projets</a>
          <a href="#skills"   onClick={() => setIsMobileMenuOpen(false)} className={getMobileLinkClass('skills')}>Compétences</a>
          <a href="#contact"  onClick={() => setIsMobileMenuOpen(false)} className={getMobileLinkClass('contact')}>Contact</a>

          <div className="mobile-menu__footer">
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mobile-menu__cta"
            >
              Me contacter
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};
