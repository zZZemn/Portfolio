import { useState } from "react";

function Home() {
  return (
    <>
      <div className="components-main-container container">
        <div className="my-details-container d-flex justify-content-between align-items-center flex-wrap-reverse">
          <div className="details-container m-3 pt-3">
            <h1 className="color-black-heading">Emmanuel Ugaban</h1>
            <div className="role-and-btn-dl-cv-container">
              <h6 className="text-secondary">Website Developer</h6>
              <button className="btn btn-success btn-dl-cv">
                <i class="bi bi-file-earmark-arrow-down-fill"></i> Download CV
              </button>
            </div>
          </div>
          <div className="my-photo-container m-3">
            <img src="https://github.com/zZZemn/Portfolio/blob/main/src/assets/2x2.jpg" alt="Emman's photo" />
          </div>
        </div>

        <hr />

        <div className="home-contacts-container">
          <center>
            <h5 className="color-black-heading mt-3 mb-3">
              Contact Me <i class="bi bi-person-lines-fill"></i>
            </h5>
          </center>
          <ul className="list-group contacts-ul">
            <li className="list-group-item">
              <a href="mailto:ugabane0516@gmail.com" className="text-secondary">
                <i class="bi bi-envelope-at"></i> <span>Email</span>
              </a>
            </li>
            <li className="list-group-item">
              <a
                href="https://www.facebook.com/messages/t/100000919429994"
                className="text-secondary"
                target="_blank"
              >
                <i class="bi bi-messenger"></i> <span>Messenger</span>
              </a>
            </li>
            <li className="list-group-item">
              <a
                href="https://www.instagram.com/emmanugaban/"
                className="text-secondary"
                target="_blank"
              >
                <i class="bi bi-instagram"></i> <span>Instagram</span>
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
                href="https://www.linkedin.com/in/emmanuel-ugaban-66ba932a0/"
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
