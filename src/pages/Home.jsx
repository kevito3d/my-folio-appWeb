import React from "react";
import ContactMe from "../components/ContactMe";
import HeaderMain from "../components/HeaderMain";
import Projects from "../components/Projects";
import Spacer from "../components/Spacer";

function HomePage() {
  return (
    <>
      <HeaderMain />
      <Spacer height={45} />
      <div className="titleSection">Mis Proyectos</div>
      <Projects />
      <Spacer height={45} />
      <ContactMe/>

    </>
  );
}

export default HomePage;
