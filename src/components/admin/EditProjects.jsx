import React from "react";
import { Project } from "./Project";


function EditProjects({ projects }) {
  return (
    
      projects.map((project) => {
        return (
          <div key={project._id}>
            <Project
              name={project.name}
              description={project.description}
              techs={project.techs}
              // image={project.images}
            />
          </div>
        );
      })
  );
}



export default EditProjects;
