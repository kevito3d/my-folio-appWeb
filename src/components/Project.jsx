import React from "react";
import "../css/Projects.css";

function Project({name, description, images, techs}) {
  return (
    <>
     
        <div className="imgs">
          <img
            src="https://avatars.githubusercontent.com/u/82674543?s=400&u=d7a231253df0d5a4b89aefd7aadadf3b2a3dc73d&v=4"
            alt="image"
          />
          <img
            src="https://avatars.githubusercontent.com/u/82674543?s=400&u=d7a231253df0d5a4b89aefd7aadadf3b2a3dc73d&v=4"
            alt="image"
          />
          <img
            src="https://avatars.githubusercontent.com/u/82674543?s=400&u=d7a231253df0d5a4b89aefd7aadadf3b2a3dc73d&v=4"
            alt="image"
          />
          <img
            src="https://avatars.githubusercontent.com/u/82674543?s=400&u=d7a231253df0d5a4b89aefd7aadadf3b2a3dc73d&v=4"
            alt="image"
          />
          <img
            src="https://avatars.githubusercontent.com/u/82674543?s=400&u=d7a231253df0d5a4b89aefd7aadadf3b2a3dc73d&v=4"
            alt="image"
          />
        </div>
        <div className="textInfo">
          <div className="title">
            {name}
          </div>
          <div className="description">
            {description}
          </div>
            <div className="techs">
              {/* <div className="tech">Nodejs</div>
              <div className="tech">Flutter</div>
              <div className="tech">MongoDB</div>
              <div className="tech">MySQL</div>
              <div className="tech">React</div>
              <div className="tech">Git</div> */}
              {techs.map((tech) => {
                return (
                  <div key={tech} className="tech">{tech}</div>
                );
              })
              }
            </div>
        </div>
    </>
  );
}

export default Project;
