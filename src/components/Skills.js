import React from 'react';
// Languages
import javaLogo from '../assets/img/java_logo.png';
import javascriptLogo from '../assets/img/javascript_logo.png';
import typescriptLogo from '../assets/img/typescript_logo.png';
import rustLogo from '../assets/img/rust_logo.png';
import pythonLogo from '../assets/img/python_logo.png';
import cLogo from '../assets/img/c_logo.png';
import phpLogo from '../assets/img/php_logo.png';
// Frameworks
import reactLogo from '../assets/img/react_logo.png';
import nodeLogo from '../assets/img/node_logo.png';
import springLogo from '../assets/img/spring_logo.png';
import junitLogo from '../assets/img/junit_logo.png';
import htmlLogo from '../assets/img/html_logo.png';
import cssLogo from '../assets/img/css_logo.png';
// Data/Databases
import mysqlLogo from '../assets/img/mysql_logo.png';
import mongodbLogo from '../assets/img/mongodb_logo.png';
// Tools
import dockerLogo from '../assets/img/docker_logo.png';
import kubernetesLogo from '../assets/img/kubernetes_logo.png';
import gitLogo from '../assets/img/git_logo.png';
import githubLogo from '../assets/img/github_logo.png';
import mavenLogo from '../assets/img/maven_logo.png';

import professionalSkillsGif from '../assets/img/gif1.gif';

const Skills = () => {
  // Define a common style for spacing the images
  const imgStyle = { margin: '0 8px' };

  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills__container bd-grid">
        <div>
          <p className="skills__text">Take a look at some of the technologies I have worked on:</p>
          
          {/* Languages Section */}
          <div className="skills__data">
            <div className="skills__names">
              <span className="skills__name">Languages:&nbsp;</span>
              <a href="https://www.java.com/en/" target="_blank" rel="noreferrer">
                <img src={javaLogo} alt="Java" width="50" style={imgStyle} />
              </a>
              <a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank" rel="noreferrer">
                <img src={javascriptLogo} alt="JavaScript" width="40" style={imgStyle} />
              </a>
              <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
                <img src={typescriptLogo} alt="TypeScript" width="40" style={imgStyle} />
              </a>
              <a href="https://www.rust-lang.org/" target="_blank" rel="noreferrer">
                <img src={rustLogo} alt="Rust" width="40" style={imgStyle} />
              </a>
              <a href="https://www.python.org/" target="_blank" rel="noreferrer">
                <img src={pythonLogo} alt="Python" width="40" style={imgStyle} />
              </a>
              <a href="https://en.wikipedia.org/wiki/C_(programming_language)" target="_blank" rel="noreferrer">
                <img src={cLogo} alt="C" width="40" style={imgStyle} />
              </a>
              <a href="https://www.php.net/" target="_blank" rel="noreferrer">
                <img src={phpLogo} alt="PHP" width="40" style={imgStyle} />
              </a>
            </div>
            <div className="skills__bar skills__html"></div>
          </div>

          {/* Frameworks Section */}
          <div className="skills__data">
            <div className="skills__names">
              <span className="skills__name">Frameworks:&nbsp;</span>
              <a href="https://react.dev/" target="_blank" rel="noreferrer">
                <img src={reactLogo} alt="React.js" width="40" style={imgStyle} />
              </a>
              <a href="https://nodejs.org/en" target="_blank" rel="noreferrer">
                <img src={nodeLogo} alt="Node.js" width="40" style={imgStyle} />
              </a>
              <a href="https://spring.io/projects/spring-boot" target="_blank" rel="noreferrer">
                <img src={springLogo} alt="Spring Boot" width="50" style={imgStyle} />
              </a>
              <a href="https://junit.org/junit5/" target="_blank" rel="noreferrer">
                <img src={junitLogo} alt="JUnit" width="40" style={imgStyle} />
              </a>
              <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noreferrer">
                <img src={htmlLogo} alt="HTML" width="40" style={imgStyle} />
              </a>
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noreferrer">
                <img src={cssLogo} alt="CSS" width="40" style={imgStyle} />
              </a>
            </div>
            <div className="skills__bar skills__css"></div>
          </div>

          {/* Data/Databases Section */}
          <div className="skills__data">
            <div className="skills__names">
              <span className="skills__name">Data/Databases:&nbsp;</span>
              <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
                <img src={mysqlLogo} alt="MySQL" width="70" height="40" style={imgStyle} />
              </a>
              <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
                <img src={mongodbLogo} alt="MongoDB" width="40" height="40" style={imgStyle} />
              </a>
            </div>
            <div className="skills__bar skills__js"></div>
          </div>

          {/* Tools Section */}
          <div className="skills__data">
            <div className="skills__names">
              <span className="skills__name">Tools:&nbsp;</span>
              <a href="https://www.docker.com/" target="_blank" rel="noreferrer">
                <img src={dockerLogo} alt="Docker" width="40" style={imgStyle} />
              </a>
              <a href="https://kubernetes.io/" target="_blank" rel="noreferrer">
                <img src={kubernetesLogo} alt="Kubernetes" width="40" style={imgStyle} />
              </a>
              <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
                <img src={gitLogo} alt="Git" width="40" style={imgStyle} />
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                <img src={githubLogo} alt="GitHub" width="40" style={imgStyle} />
              </a>
              <a href="https://maven.apache.org/" target="_blank" rel="noreferrer">
                <img src={mavenLogo} alt="Maven" width="40" style={imgStyle} />
              </a>
            </div>
            <div className="skills__bar skills__html"></div>
          </div>
        </div>
        <div>
          <img src={professionalSkillsGif} alt="Professional Skills" className="skills__img" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
