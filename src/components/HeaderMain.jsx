import React from "react";
import "../css/Header.css";
import Icons from "./icons";

import Copy from "../assets/copy.png";
import github from "../assets/github.png";
import instagram from "../assets/instagram.png";
import cv from "../assets/cvDownload.png";
import { useState } from "react";

function HeaderMain() {
  const [copy, setCopy] = useState(false);

  const copyClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopy(true);
  };

  const handleOpenRedirect = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div className="container">
      <div className="divImg">
        <img
          src="https://avatars.githubusercontent.com/u/82674543?s=400&u=d7a231253df0d5a4b89aefd7aadadf3b2a3dc73d&v=4"
          alt="image"
        />
      </div>
      <div className="divText">
        <div className="miName">Hola, soy Kevin Coveña</div>

        <div className="miDescription">
          <div className="subtitle">
            Soy un desarrollador fullstack con experiencia en Nodejs, Flutter,
            MongoDB, MySQL, React y Git. Me gusta aprender cosas nuevas y me
            encanta resolver problemas. 
            <div className="subtitle"></div>
          </div>
        </div>
        <div className="containerIcons">
          <div className="icons">
            <Icons
              icon={github}
              title="Github"
              onClick={() =>
                handleOpenRedirect("https://www.github.com/kevito3d")
              }
            ></Icons>
            <Icons
              icon={instagram}
              title="instragram"
              onClick={() =>
                handleOpenRedirect("https://www.instagram.com/kevito3d/")
              }
            ></Icons>

            {/* ddownload cv */}

            <Icons 
              icon={cv}
              title="cv"
              
            />
          </div>
        </div>
        <div className="email">
          kevincove98@gmail.com
          <div
            className={copy ? "btnOnCopy" : "btnOffCopy"}
            onClick={() => copyClipboard("kevincove98@gmail.com")}
          >
            {copy ? (
              "copiado"
            ) : (
              <Icons icon={Copy} title="copiar" isSmall={true}></Icons>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderMain;
