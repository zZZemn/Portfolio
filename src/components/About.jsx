import { useState } from "react";

function About() {
  return (
    <>
      <div className="components-main-container container mt-5">
        <div className="about-me-container">
          <h3 className="color-black-heading">About me</h3>
          <p className="text-secondary">
            I am a 21-year-old fourth-year BSIT student with a year of freelance
            web development experience. With a deep passion for programming,
            particularly in web development, I thrive on teamwork and am
            constantly seeking opportunities to collaborate with skilled
            developers to enhance my knowledge and skills in the field.
          </p>
        </div>
        <div className="about-me-container mt-5">
          <h6 className="color-black-heading">My Technologies</h6>
          <div className="technology-icons-container d-flex flex-wrap">
            <div className="tech-icon-container text-secondary d-flex flex-column align-items-center m-2">
              <i class="fa-brands fa-html5"></i>
              <span className="icon-name">HTML5</span>
            </div>
            <div className="tech-icon-container text-secondary d-flex flex-column align-items-center m-2">
              <i class="fa-brands fa-css3-alt"></i>
              <span className="icon-name">CSS3</span>
            </div>
            <div className="tech-icon-container text-secondary d-flex flex-column align-items-center m-2">
              <i class="fa-brands fa-bootstrap"></i>
              <span className="icon-name">Bootstrap</span>
            </div>
            <div className="tech-icon-container text-secondary d-flex flex-column align-items-center m-2">
              <i class="fa-brands fa-js"></i>
              <span className="icon-name">JavaScript</span>
            </div>
            <div className="tech-icon-container text-secondary d-flex flex-column align-items-center m-2">
              <i class="fa-brands fa-react"></i>
              <span className="icon-name">React</span>
            </div>
            <div className="tech-icon-container text-secondary d-flex flex-column align-items-center m-2">
              <i class="fa-brands fa-js"></i>
              <span className="icon-name">JQuery</span>
            </div>
            <div className="tech-icon-container text-secondary d-flex flex-column align-items-center m-2">
              <i class="fa-brands fa-php"></i>
              <span className="icon-name">PHP</span>
            </div>
            <div className="tech-icon-container text-secondary d-flex flex-column align-items-center m-2">
              <i class="fa-solid fa-database"></i>
              <span className="icon-name">MySql</span>
            </div>
            <div className="tech-icon-container text-secondary d-flex flex-column align-items-center m-2">
              <i class="fa-brands fa-python"></i>
              <span className="icon-name">Python</span>
            </div>
          </div>
        </div>

        <div className="about-me-container mt-5">
          <h6 className="color-black-heading">Certification</h6>
          <div className="certificates-container container">
            <img
              src="https://github.com/zZZemn/Portfolio/blob/main/src/assets/certificates/Skourse%20Academy.png?raw=true"
              alt="Certificate"
              className="cert-img"
            />
            <img
              src="https://github.com/zZZemn/Portfolio/blob/main/src/assets/certificates/Introduction%20to%20Cloud%20Computing.png?raw=true"
              alt="Certificate"
              className="cert-img"
            />
            <img
              src="https://github.com/zZZemn/Portfolio/blob/main/src/assets/certificates/Introduction%20to%20Ethical%20Hacking.png?raw=true"
              alt="Certificate"
              className="cert-img"
            />
            <img
              src="https://github.com/zZZemn/Portfolio/blob/main/src/assets/certificates/Intoduction%20to%20Cybercrime.png?raw=true"
              alt="Certificate"
              className="cert-img"
            />
            <img
              src="https://github.com/zZZemn/Portfolio/blob/main/src/assets/certificates/Introduction%20to%20Cyber%20Security.png?raw=true"
              alt="Certificate"
              className="cert-img"
            />
            <img
              src="https://github.com/zZZemn/Portfolio/blob/main/src/assets/certificates/Introduction%20to%20Ethical%20Hacking.png?raw=true"
              alt="Certificate"
              className="cert-img"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
