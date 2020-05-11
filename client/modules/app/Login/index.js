import React, { useState } from "react";
import { signin } from "../../session/api";
import styles from "./style.module.css";
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

  const handleOnChange = (e) => {
    const target = e.target;
    const value = target.name === "remember" ? target.checked : target.value;
    const name = target.name;
    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.leftContent}></div>
      <main className={styles.mainBlock}>
        <nav className={styles.mainNav}></nav>
        <div className={styles.authContent}>
          <LoginForm
            credentials={credentials}
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
          />
        </div>
      </main>
    </div>
  );
};

export default Login;
