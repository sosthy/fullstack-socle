import React, { useState } from "react";
import { signin } from "../../session/api";
import "./styles.css";
import LoginForm from "../LoginForm";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    remember: true,
  });

  const handleOnSubmit = (e) => {
    console.log(credentials);
    signin(credentials).then(({ data }) => {
      console.log(data);
    });
    e.preventDefault();
  };

  const handleOnChange = (e, data) => {
    let { name, value } = data;
    value = name === "remember" ? data.checked : value;
    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <div className="login-container">
      <div></div>
      <main>
        <h1>Login</h1>
        <LoginForm
          credentials={credentials}
          handleOnChange={handleOnChange}
          handleOnSubmit={handleOnSubmit}
        />
      </main>
    </div>
  );
};

export default Login;
