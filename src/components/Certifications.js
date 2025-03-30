// src/components/Certifications.js
import React from 'react';
import cert1 from '../assets/img/React.png';
import cert2 from '../assets/img/Node.png';
import cert3 from '../assets/img/IOS.png';
import cert4 from '../assets/img/DBMS.png';
import cert5 from '../assets/img/Django.png';
import cert6 from '../assets/img/Laravel.png';

const Certifications = () => {
  return (
    <section className="work section" id="work">
      <h2 className="section-title">Certificates</h2>
      <div className="work__container bd-grid">
        <a href="https://www.coursera.org/account/accomplishments/verify/VF659EJ6AHX7" className="work__img">
          <img src={cert1} alt="Certification 1" />
        </a>
        <a href="https://www.coursera.org/account/accomplishments/verify/4XWSU8CE68FB" className="work__img">
          <img src={cert2} alt="Certification 2" />
        </a>
        <a
          href=""
          className="work__img"
          target="_blank"
          rel="noreferrer"
        >
          <img src={cert3} alt="Certification 3" />
        </a>
        <a
          href="https://verify.onwingspan.com/"
          className="work__img"
          target="_blank"
          rel="noreferrer"
        >
          <img src={cert4} alt="Certification 4" />
        </a>
        <a href="https://www.coursera.org/account/accomplishments/verify/GBE736PNDXV3" className="work__img">
          <img src={cert5} alt="Certification 5" />
        </a>
        <a
          href="https://www.udemy.com/certificate/UC-518a651a-66ff-4f39-b124-dcd553c4c590/"
          className="work__img"
          target="_blank"
          rel="noreferrer"
        >
          <img src={cert6} alt="Certification 6" />
        </a>
      </div>
    </section>
  );
};

export default Certifications;
