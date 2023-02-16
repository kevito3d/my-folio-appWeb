import React from "react";
import Project from "./Project";

function Projects({projects}) {
  return (
    <>
      <div className="container-items">

        {projects.map((project) => {
          return (
            <div key={project._id} className="container">
              <Project
                
                name={project.name}
                description={project.description}
                techs={project.techs}
                // image={project.images}
              />
            </div>
          );
        })
        }
      </div>
    </>
  );
}

export default Projects;
