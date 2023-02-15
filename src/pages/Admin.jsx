import { React, useState, useEffect } from "react";



function AdminPage() {
    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.location.reload();
    }
  return (
    <>
      <div>Admin</div>
      <div
        onClick={handleLogout}
      >cerrar sesion jeje</div>
    </>
  );
}

export default AdminPage;
