// src/components/About.js
import React from 'react';
import aboutImg from '../assets/img/prefil1.jpg';

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section-title">About</h2>
      <div className="about__container bd-grid">
        <div className="about__img">
          <img src={aboutImg} alt="Profile" />
        </div>
        <div>
          <h2 className="about__subtitle">I'm Lava Kumar Reddy</h2>
          <p className="about__text">
            In today's ever evolving digital landscape, I find my true passion in the area of
            computers. As a dedicated Computer Science student with a specialization in full stack web development,
            I am on a continuous journey to unlock the vast potential that this field has to offer.
            Proficient in Java, I am interested in problem solving, especially when it comes to crafting
            effective data structures and algorithms that drive innovation.
            <br />
            <br />
            My projects have been my stepping stones to
            understanding the dynamic and multifaceted nature of the technology realm. I take immense
            pride in the versatility I've cultivated, adapting to the unique challenges each domain
            presents.
            <br />
            <br />
            I am eagerly open to new opportunities and challenges in the ever evolving world of
            technology. I am excited to contribute my skills and knowledge to innovative projects and
            collaborate with like minded professionals to continue growing and making a meaningful
            impact in the field of computer science and related.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
