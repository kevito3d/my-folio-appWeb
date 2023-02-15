import React from "react";
import Divider from "./Divider";
import Project from "./Project";
import Spacer from "./Spacer";

function Projects() {
  return (
    <>
      <div className="container-items">
        <div className="container">
          <Project />
        </div>
        <Spacer height={15}/>
        <Divider color="#fff" height={1} />
        <Spacer height={15}/>
        <div className="container">
          <Project />
        </div>
      </div>
    </>
  );
}

export default Projects;
