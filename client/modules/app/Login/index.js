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

<<<<<<< HEAD
  useEffect(() => {
    gsap.from(loginFormRef.current, {
      duration: 0.5,
      opacity: 0,
      delay: 0.5,
    });
    new Swiper(".swiper-container", {
      // Optional parameters
      direction: "horizontal",
      loop: false,
      autoplay: {
        delay: 3000,
      },
      effect: "fade",
      speed: 3000,
      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  });
=======
  useEffect(() => {}, []);
>>>>>>> 1d54753e95b32c22ba9700835a60e5ebd4a7051a

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
