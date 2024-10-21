import { useState } from "react";
import TechComponent from "./TechComponent";

function About() {
  return (
    <>
      <div className="components-main-container container mt-5">
        <div className="about-me-container">
          <h3 className="color-black-heading">About me</h3>
          <p className="text-secondary">
            I am a software developer who loves building websites and web
            applications that are easy to use and look great. I enjoy solving
            problems and turning ideas into reality through code. As a recent
            graduate, I am always eager to learn new things and keep up with the
            latest trends in technology. I’m passionate about creating digital
            experiences that make life easier and more enjoyable for people.
          </p>
        </div>
        <div className="about-me-container mt-5">
          <h6 className="color-black-heading">My Technologies</h6>
          <div className="technology-icons-container d-flex flex-wrap">
            <TechComponent IconClass={"fa-brands fa-html5"} IconName={"HTML"} />
            <TechComponent
              IconClass={"fa-brands fa-css3-alt"}
              IconName={"CSS"}
            />
            <TechComponent
              IconClass={"fa-brands fa-js"}
              IconName={"Javascript"}
            />

            <TechComponent
              IconClass={"fa-brands fa-node"}
              IconName={"Node.Js"}
            />
            <TechComponent
              IconClass={"fa-brands fa-js"}
              IconName={"Express.Js"}
            />
            <TechComponent
              IconClass={"fa-brands fa-react"}
              IconName={"React.Js"}
            />
            <TechComponent
              IconClass={"fa-brands fa-vuejs"}
              IconName={"Vue.Js"}
            />
            <TechComponent IconClass={"fa-brands fa-js"} IconName={"JQuery"} />

            <TechComponent IconClass={"fa-solid fa-code"} IconName={".C#"} />
            <TechComponent IconClass={"fa-solid fa-code"} IconName={".NET"} />
            <TechComponent IconClass={"fa-solid fa-code"} IconName={"Blazor"} />

            <TechComponent IconClass={"fa-brands fa-php"} IconName={"PHP"} />

            <TechComponent
              IconClass={"fa-solid fa-database"}
              IconName={"MySQL"}
            />
            <TechComponent
              IconClass={"fa-solid fa-database"}
              IconName={"SQL Server"}
            />
            <TechComponent
              IconClass={"fa-solid fa-database"}
              IconName={"MongoDB"}
            />
            <TechComponent
              IconClass={"fa-solid fa-database"}
              IconName={"Firebase"}
            />
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
