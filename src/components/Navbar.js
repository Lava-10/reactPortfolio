// src/components/Navbar.js
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Update active link on scroll
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const onScroll = () => {
      const scrollY = window.pageYOffset;
      sections.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;
        const sectionId = section.getAttribute('id');
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="l-header">
      <nav className="nav bd-grid">
        <div>
          <a href="#" className="nav__logo">
            Portfolio
          </a>
        </div>
        <div className={`nav__menu ${menuOpen ? 'show' : ''}`} id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a
                href="#home"
                className={`nav__link ${activeSection === 'home' ? 'active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                Home
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                className={`nav__link ${activeSection === 'about' ? 'active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                About
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#skills"
                className={`nav__link ${activeSection === 'skills' ? 'active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                Skills
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#work"
                className={`nav__link ${activeSection === 'work' ? 'active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                Certificates
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#Project"
                className={`nav__link ${activeSection === 'Project' ? 'active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                Projects
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#contact"
                className={`nav__link ${activeSection === 'contact' ? 'active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          <i className="bx bx-menu"></i>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
