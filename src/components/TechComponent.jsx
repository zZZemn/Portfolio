import { useState } from "react";

function TechComponent({ IconClass, IconName }) {
  return (
    <>
      <div className="tech-icon-container text-secondary d-flex flex-column align-items-center m-2">
        <i class={IconClass}></i>
        <span className="icon-name">{IconName}</span>
      </div>
    </>
  );
}

export default TechComponent;
