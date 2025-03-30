// src/App.js
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './assets/css/styles.css';
import ScrollReveal from 'scrollreveal';

function App() {
  useEffect(() => {
    // Initialize ScrollReveal animations
    const sr = ScrollReveal({
      origin: 'top',
      distance: '60px',
      duration: 2000,
      delay: 200,
      // reset: true, // uncomment if you want animations to reset on scroll
    });

    sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});
    sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 400 });
    sr.reveal('.home__social-icon', { interval: 200 });
    sr.reveal('.skills__data, .work__img, .contact__input', { interval: 200 });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <main className="l-main">
        <Home />
        <About />
        <Skills />
        <Certifications />
        <Projects />
        <Contact />
      </main>
      <footer className="footer">
        <p className="footer__title">Lava Kumar Reddy</p>
        <div className="footer__social">
          <a href="#" className="footer__icon">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="#" className="footer__icon">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="#" className="footer__icon">
            <i className="bx bxl-twitter"></i>
          </a>
        </div>
        <p className="footer__copy">&#169; Lava Kumar Reddy. Feel Free To Connect!</p>
      </footer>
    </div>
  );
}

export default App;
