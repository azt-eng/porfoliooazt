import React from 'react';
import './Contact.css';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact__inner">
        <div className="contact__content">
          {/* Titre */}
          <h2 className="contact__title">Me Contacter</h2>

          {/* Sous-titre */}
          <p className="contact__subtitle">
            Si ma vision vous plaît ou que vous avez une question, une proposition d'alternance ou de stage, n'hésitez pas à me contacter.
          </p>

          {/* Boutons */}
          <div className="contact__btn-group">
            {/* Email */}
            <a
              href="mailto:kriffpro@gmail.com"
              className="contact__btn contact__btn--email"
            >
              M'envoyer un email
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/karifala-coulibaly-1b8191254/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__btn contact__btn--linkedin"
            >
              <svg className="contact__linkedin-icon" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
