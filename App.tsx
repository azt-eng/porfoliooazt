
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { TransitionSection } from './components/TransitionSection/TransitionSection';
import { About } from './components/About/About';
import { Skills } from './components/Skills/Skills';
import { Expertise } from './components/Expertise/Expertise';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import { Theme } from './types';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('light');

  // Initialisation du thème au chargement
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    const preferDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const initialTheme = savedTheme || (preferDark ? 'dark' : 'light');
    
    setTheme(initialTheme);
    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="min-h-screen transition-colors duration-500 ease-in-out bg-apple-bgLight dark:bg-apple-bgDark text-apple-textLight dark:text-apple-textDark selection:bg-apple-blue selection:text-white">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <TransitionSection />
        <About />
        <Projects />
        <Skills />
        <Expertise />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
