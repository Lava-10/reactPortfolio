// src/components/Home.js
import React from 'react';
import profileImg from '../assets/img/Lava3.jpg'; // adjust filename if necessary

const Home = () => {
  return (
    <section className="home bd-grid" id="home">
      <div className="home__data">
        <h1 className="home__title">
          Hi,
          <br />
          I'm <span className="home__title-color">Lava Kumar Reddy</span>
          <br />
        </h1>
        <a
          href="https://drive.google.com/drive/folders/1JHRRa4PnRwJybmSBTi2xsZKMFfL17igQ?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="button"
        >
          Resume
        </a>
      </div>
      <div className="home__social">
        <a 
          href="https://www.linkedin.com/in/lavakumarreddy18/" 
          target="_blank"
          rel="noreferrer"
          className="home__social-icon"
        >
          <i className="bx bxl-linkedin"></i>
        </a>
        <a 
          href="https://leetcode.com/u/Lava_10/" 
          target="_blank"
          rel="noreferrer"
          className="home__social-icon"
        >
          <i className="bx bx-code"></i>
        </a>
        <a 
          href="https://github.com/Lava-10" 
          target="_blank"
          rel="noreferrer"
          className="home__social-icon"
        >
          <i className="bx bxl-github"></i>
        </a>
      </div>
      <div className="home__img">
        <img className="home__blob-img" src={profileImg} alt="Profile" />
      </div>
    </section>
  );
};

export default Home;
