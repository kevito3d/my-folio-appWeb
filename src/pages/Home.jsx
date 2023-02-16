import { React, useState, useEffect } from "react";
import ContactMe from "../components/ContactMe";
import HeaderMain from "../components/HeaderMain";
import Projects from "../components/Projects";
import Spacer from "../components/Spacer";
import { getApi } from "../helpers/api";

function HomePage() {
  const [data, setData] = useState(null);
  useEffect(() => {
    getApi("/user/63ec6e2f7c41d8f0a1b445c0").then((res) => {
      // console.log(res.user.socials_id)
      // setProjects(res.user.projects_id);
      // setSocialsNetwork(res.user.socials_id);
      // setEmail(res.user.email);
      // setTitle(res.user.title_name);
      // setDescription(res.user.description);

      console.log(res.user);
      // await 4 seconds
      // setTimeout(() => {
        setData(res.user);
      // }, 4000);
      

      // setData(res.user);
    });
  }, []);

  return data != null ? (
    <>
      <HeaderMain
        description={data.description}
        email={data.info_email}
        title={data.title_name}
        socialsNetwork={data.socials_id}
      />
      <Spacer height={45} />
      <div className="titleSection">Mis Proyectos</div>
      <Projects projects={data.projects_id} />
      <Spacer height={45} />
      <ContactMe />
    </>
  ) : (
    <h1>Cargando...</h1>
  );
}

export default HomePage;
