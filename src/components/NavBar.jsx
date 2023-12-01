import { useState } from "react";

const NavBar = ({ handleNavLinkClick }) => {
  const [isNavBarVisible, setNavBarVisible] = useState(false);

  const toggleNavBar = () => {
    setNavBarVisible(!isNavBarVisible);
  };

  return (
    <>
      <div className="nav-bar-container d-flex justify-content-around align-items-center bg-dark">
        <div>
          <a
            href="#"
            className="nav-logo"
            onClick={() => handleNavLinkClick("Home")}
          >
            {"</>"}
          </a>
        </div>
        <ul
          className={`nav-bar-ul d-flex bg-dark ${
            isNavBarVisible && "show-nav-bar"
          }`}
        >
          <li>
            <a href="#" id="Home" onClick={() => handleNavLinkClick("Home")}>
              Home
            </a>
          </li>
          <li>
            <a href="#" id="About" onClick={() => handleNavLinkClick("About")}>
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              id="Projects"
              onClick={() => handleNavLinkClick("Projects")}
            >
              Projects
            </a>
          </li>
        </ul>
        <button className="btn-toggle-nav" onClick={toggleNavBar}>
          <i className={isNavBarVisible ? `bi bi-x-lg` : `bi bi-list`}></i>
        </button>
      </div>
    </>
  );
};

export default NavBar;
