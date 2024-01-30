import { useState } from "react";

function Projects() {
  return (
    <>
      <div className="projecs-main-container components-main-container container mt-5">
        <h3 className="color-black-heading">Projects</h3>
        <hr />
        <div className="project-container">
          <img src="https://github.com/zZZemn/Portfolio/blob/main/src/assets/projects/p-gorder.png?raw=true" />
          <h6 className="color-black-heading mt-3">GOrder</h6>
          <p className="text-secondary">
            A Sales and Inventory Website with Ordering Mobile Application for
            Golden Gate Drugstore.
          </p>
        </div>
        <hr />
        <div className="project-container">
          <img src="./src/assets/projects/p-petclinic.png" />
          <h6 className="color-black-heading mt-3">Pet Clinic</h6>
          <p className="text-secondary">
            A Record Management System for Pet Clinic.
          </p>
        </div>
        <hr />
        <div className="project-container">
          <img src="./src/assets/projects/p-prmsu.png" />
          <h6 className="color-black-heading mt-3">PRMSU</h6>
          <p className="text-secondary">
            A File Management System for College of Engineering at President
            Ramon Magsaysay State University.
          </p>
        </div>
        <hr />
        <div className="project-container">
          <img src="./src/assets/projects/p-vsf.png" />
          <h6 className="color-black-heading mt-3">VSF</h6>
          <p className="text-secondary">
            A Vacation Spot Finder for San Pablo Laguna.
          </p>
        </div>
        <hr />
        <div className="project-container">
          <img src="./src/assets/projects/p-isabelapp.png" />
          <h6 className="color-black-heading mt-3">ISABELAPP</h6>
          <p className="text-secondary">
            A Accommodation, Products, News, Tourist Spot and Restaurant
            Management System For Isabela
          </p>
        </div>
        <hr />
        <div className="project-container">
          <img src="./src/assets/projects/p-icds.png" />
          <h6 className="color-black-heading mt-3">ICDS</h6>
          <p className="text-secondary">A Directory System for Iloilo</p>
        </div>
      </div>
    </>
  );
}

export default Projects;
