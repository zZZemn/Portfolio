import { useState } from "react";

function About() {
  return (
    <>
      <div className="components-main-container container mt-5">
        <div className="about-me-container">
          <h3 className="color-black-heading">About me</h3>
          <p className="text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus quod sint accusantium? Quaerat, eaque dolore saepe
            obcaecati sint blanditiis ab sit ipsam impedit, eveniet odio
            similique numquam velit pariatur voluptatum nemo sapiente. Vel
            obcaecati eaque praesentium autem sint voluptas tenetur alias
            impedit, maxime aliquam, blanditiis doloribus! Reprehenderit iure
            illo dolores!
          </p>
        </div>
        <div className="about-me-container mt-5">
          <h6 className="color-black-heading">My Technologies</h6>
          <div className="technology-icons-container d-flex">
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
      </div>
    </>
  );
}

export default About;
