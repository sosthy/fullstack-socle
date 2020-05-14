import React, { useState, useEffect, useRef } from "react";
import { signin } from "../../session/api";
import LoginForm from "../LoginForm";
import Swiper from "swiper";
import logo from "../../../images/company_logo.png";
import gsap from "gsap";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    remember: true,
  });

  useEffect(() => {}, []);

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
    <div>
      <div>
        <div></div>
      </div>
      <main>
        <nav></nav>
        <div></div>
      </main>
    </div>
  );
};

export default Login;
