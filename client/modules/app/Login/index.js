import React, { useState, useEffect } from "react";
import { signin } from "../../session/api";
import styles from "./style.module.css";
import "./style.css";
import LoginForm from "../LoginForm";
import Swiper from "swiper";
import slideImage1 from "../../../images/jeffery-erhunse-4XK2oKKvzVU-unsplash.jpg";
import slideImage2 from "../../../images/kristaps-ungurs-3PdvcqJGf3g-unsplash.jpg";
import slideImage3 from "../../../images/chuttersnap--zEDq4sRxRE-unsplash.jpg";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    remember: true,
  });

  useEffect(() => {
    new Swiper(".swiper-container", {
      // Optional parameters
      direction: "horizontal",
      loop: true,
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
      <div className={styles.leftContent}>
        {/* Slider main container */}
        <div className="swiper-container">
          {/* Additional required wrapper */}
          <div className="swiper-wrapper">
            {/* Slides */}
            <div
              className="swiper-slide"
              style={{ backgroundColor: "#0093D7" }}
            >
              {/*<img src={slideImage1} alt="" />*/}
            </div>
            <div
              className="swiper-slide"
              data-swiper-autoplay="6000"
              style={{ backgroundColor: "#6A58B4" }}
            >
              {/*<img src={slideImage2} alt="" />*/}
            </div>
            <div
              className="swiper-slide"
              style={{ backgroundColor: "#0093D7" }}
            >
              {/*<img src={slideImage3} alt="" />*/}
            </div>
          </div>
          {/* If we need pagination */}
          <div className="swiper-pagination"></div>
        </div>
      </div>
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
