import { useState } from "react";
import "./App.css";
import "./components/NavBar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  const handleNavLinkClick = (navClicked) => {
    setCurrentPage(navClicked);
  };

  return (
    <>
      <NavBar handleNavLinkClick={handleNavLinkClick} />
      <div className="main-container container-fluid pt-5 pb-5">
        {currentPage === "Home" && <Home />}
        {currentPage === "About" && <About />}
        {currentPage === "Projects" && <Projects />}
      </div>
    </>
  );
}

export default App;
