import { useState } from "react";

function Home() {
  return (
    <>
      <div className="components-main-container container">
        <div className="my-details-container d-flex justify-content-between align-items-center flex-wrap-reverse">
          <div className="details-container m-3 pt-3">
            <h1 className="color-black-heading">Emmanuel Ugaban</h1>
            <div className="role-and-btn-dl-cv-container">
              <h6 className="text-secondary">Software Developer</h6>
              <a
                href="https://github.com/zZZemn/Portfolio/blob/main/src/assets/Emmanuel%20Ugaban.png?raw=true"
                className="btn btn-success btn-dl-cv"
                target="blank"
              >
                <i class="bi bi-file-earmark-person-fill"></i> Resume
              </a>
            </div>
          </div>
          <div className="my-photo-container m-3">
            <img
              src="https://raw.githubusercontent.com/zZZemn/Portfolio/main/src/assets/2x2.jpg"
              alt="Emman's photo"
            />
          </div>
        </div>

        <hr />

        <div className="home-contacts-container">
          <center>
            <h5 className="color-black-heading my-4">
              Contact Me <i class="bi bi-person-lines-fill"></i>
            </h5>
          </center>
          <ul className="list-group contacts-ul">
            <li className="list-group-item">
              <a
                href="mailto:emmanuelugaban12@gmail.com"
                className="text-secondary"
              >
                <i class="bi bi-envelope-at"></i> <span>Email</span>
              </a>
            </li>
            <li className="list-group-item">
              <a
                href="https://github.com/zZZemn"
                className="text-secondary"
                target="_blank"
              >
                <i class="bi bi-github"></i> <span>GitHub</span>
              </a>
            </li>
            <li className="list-group-item">
              <a
                href="https://www.linkedin.com/in/emmanuel-ugaban-44622a2b3/"
                className="text-secondary"
                target="_blank"
              >
                <i class="bi bi-linkedin"></i> <span>LinkedIn</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Home;
