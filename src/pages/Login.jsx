import { React, useState } from "react";
import "../css/Login.css";
import { postApi } from "../helpers/api";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = async (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) {
      return;
    }

    const user = {
      user: username,
      password,
    };
    setLoading(true);
    // await 3 seconds
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    const respuesta = await postApi("/user/login", user);

    if (respuesta.status === 200) {
      const data = await respuesta.json();
      console.log(data);
      saveToken(data.token);
      saveUser(data.user);

      // reload page
      window.location.reload();
    } else {
      console.log("usuario o contrasena incorrecta");
    }
    setLoading(false);
  };

  //   save token in local storage
  const saveToken = (token) => {
    localStorage.setItem("token", token);
  };

  const saveUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
  };

  return (
    <>
      <div className="login">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>

          <input
            type="text"
            onChange={handleUsername}
            id="username"
            name="username"
          />

          <label htmlFor="password">Password</label>

          <input
            type="password"
            onChange={handlePassword}
            id="password"
            name="password"
          />

          <button onClick={handleSubmit} className="btn-log">
            {loading ? (
              // circular proges indicator
              <div className="lds-dual-ring"></div>
            ) : (
              "Login"
            )}
          </button>
        </form>
      </div>
    </>
  );
}

export default LoginPage;
