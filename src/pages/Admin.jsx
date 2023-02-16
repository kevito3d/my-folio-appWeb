import { React, useState, useEffect } from "react";
import EditInfo from "../components/admin/EditInfo";
import EditProjects from "../components/admin/EditProjects";
import Spacer from "../components/Spacer";
import { getUser } from "../helpers/session";

function AdminPage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(getUser());
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.reload();
  };
  return user != null ? (
    <>
      <EditInfo user={user} />
      <Spacer height={20} />
      <div
        className="titleSection"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        Proyectos <button className="">AGREGAR</button>
      </div>

      <EditProjects projects={ user.projects_id } />
    </>
  ) : (
    <h1>Cargando...</h1>
  );
}

export default AdminPage;
