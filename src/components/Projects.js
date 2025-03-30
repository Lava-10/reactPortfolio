// src/components/Projects.js
import React from 'react';
import QRlogo from '../assets/img/QRlogo.png';
import foodWiselogo from '../assets/img/foodWiselogo.png';
import queryCraftLogo from '../assets/img/queryCraftLogo.jpg';

const Projects = () => {
  return (
    <section className="work section" id="blog">
      <h2 className="section-title">My Latest Projects</h2>
      <div className="container">
        <div className="grid">
          <div className="card">
            <div className="card_img">
              <img src={QRlogo} alt="knowMoreQR" />
            </div>
            <div className="card_body">
              <h2 className="card_title">knowMoreQR</h2>
              <p>
              Revolutionize the way brands share information with their consumers through QR codes.
              </p>
              <a
                href="https://github.com/Lava-10/knowMoreQR"
                target="_blank"
                rel="noreferrer"
                className="read_more"
              >
                Source Code
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card_img">
              <img src={foodWiselogo} alt="foodWise" />
            </div>
            <div className="card_body">
              <h2 className="card_title">foodWise</h2>
              <p>
                Reduce food wastage and promote sustainable eating habits.
              </p>
              <a
                href="https://github.com/Lava-10/foodWise"
                target="_blank"
                rel="noreferrer"
                className="read_more"
              >
                Source Code
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card_img">
              <img src={queryCraftLogo} alt="queryCraft" />
            </div>
            <div className="card_body">
              <h2 className="card_title">queryCraft</h2>
              <p>
              Visualizing the entire SQL query execution pipeline.
              </p>
              <a
                href="https://github.com/Lava-10/queryCraft"
                target="_blank"
                rel="noreferrer"
                className="read_more"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
