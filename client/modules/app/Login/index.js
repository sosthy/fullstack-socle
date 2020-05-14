import React, { useState, useEffect, useRef } from "react";
import { signin } from "../../session/api";
import styles from "./style.module.css";
import "./style.css";
import LoginForm from "../LoginForm";
import Swiper from "swiper";
import logo from "../../../images/company_logo.png";
import { Dropdown, Flag } from "semantic-ui-react";
import gsap from "gsap";

const Login = () => {
  const leftContentRef = useRef();
  const loginFormRef = useRef();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    remember: true,
  });

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
      <div className={styles.leftContent} ref={leftContentRef}>
        {/* Slider main container */}
        <div className="swiper-container">
          {/* Additional required wrapper */}
          <div className="swiper-wrapper">
            {/* Slides */}
            <div
              className="swiper-slide"
              style={{ background: "#1A4A96" }}
            ></div>
          </div>
          {/* If we need pagination */}
          {/* <div className="swiper-pagination"></div> */}
        </div>
      </div>
      <main className={styles.mainBlock}>
        <nav className={styles.mainNav}>
          <a href="/">
            <img src={logo} alt="logo" width="70px" />
          </a>
          <Dropdown
            trigger={
              <span>
                <Flag name="cm" /> Français
              </span>
            }
            options={[
              {
                key: "language",
                text: <span>Choisissez votre langue</span>,
                disabled: true,
              },
              {
                key: "francais",
                text: "Français",
              },
              {
                key: "anglais",
                text: "Anglais",
              },
            ]}
            direction="left"
          />
        </nav>
        <div className={styles.authContent} ref={loginFormRef}>
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
