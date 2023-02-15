import { React, useState, useEffect } from "react";
import { getApi } from "../helpers/api";
import AdminPage from "./Admin";
import LoginPage from "./Login";
function LoadingPage() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const checkToken = () => {
    const token = localStorage.getItem("token");
    console.log({ token })
    return token;
  };

  useEffect(() => {
    const token = checkToken();
    
    if (token) {
       getApi("/user/renewToken", token).then((respuesta) => {
        
      if (respuesta.status == 200) {
        respuesta.json().then((data) => {
          console.log(data);
          setUser(data.user);
          saveToken(data.token);
          setLoading(false);
        });
      }
      else {
        setLoading(false);
      }
    });
    } else {
      setLoading(false);
    }
  }, []);

  const saveToken = (token) => {
    localStorage.setItem("token", token);
  };

  const saveUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
  };

  return loading ? (
    <h1>Cargando...</h1>
  ) : (
    user?<AdminPage/>: <LoginPage/>
  ) 
}

export default LoadingPage;
