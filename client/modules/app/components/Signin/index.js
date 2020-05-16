import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import session from "../../../session";
import PropTypes from "prop-types";
import styles from "./style.module.scss";
import logo from "../../../../images/company_logo.png";
import login_background from "../../../../images/app_development_PNG.png";

const Signin = ({ signin, history }) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    remember: true,
  });

  useEffect(() => {}, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    signin(credentials).then(() => {
      history.push("/dashboard");
    });
  };

  const handleOnChange = (e) => {
    const target = e.target;
    const value = target.name === "remember" ? target.checked : target.value;
    const name = target.name;
    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <div className={styles.signinContainer}>
      <div className={"row h-100"}>
        <div
          className={
            "col-lg-5 col-md-12 col-sm-12 position-relative d-flex justify-content-center align-items-center"
          }
        >
          <div className={styles.signinBox}>
            <div className="text-center mb-5">
              <a href="../../index2.html">
                <img src={logo} width="120" alt="" />
              </a>
            </div>
            <div className="signin-body">
              <form onSubmit={handleOnSubmit}>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    className="form-control form-control-lg"
                    value={credentials.username}
                    onChange={handleOnChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className="form-control form-control-lg"
                    value={credentials.password}
                    onChange={handleOnChange}
                  />
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="icheck-primary">
                    <input
                      type="checkbox"
                      id="remember"
                      name="remember"
                      checked={credentials.remember}
                      onChange={handleOnChange}
                    />
                    <label htmlFor="remember">Remember Me</label>
                  </div>
                  <a href="/fake">Forgot password ?</a>
                </div>
                <input
                  type="submit"
                  value="Submit"
                  className={"btn btn-primary btn-lg btn-block"}
                />
              </form>
            </div>
          </div>
          <footer className={"signin-footer text-center"}>
            <span>
              Copyright © 2014-2019&nbsp;-&nbsp;
              <a href="https://www.itgstore-consulting.com">ITGStore S.A</a>
            </span>
          </footer>
        </div>
        <div
          className={
            "col-lg-7 d-none d-lg-flex text-center flex-column justify-content-center align-items-center " +
            styles.rightContainer
          }
        >
          <img
            src={login_background}
            style={{ width: "400px", height: "auto" }}
            alt=""
          />
          <div className="mx-auto w-50 mt-5 text-white">
            <h3 className="font-weight-bold">Lorem, ipsum dolor sit amet.</h3>
            <p className="mt-3 lead">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea,
              ipsum earum modi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

Signin.propTypes = {
  signin: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  signin: session.actions.signin,
};

export default connect((state) => state, mapDispatchToProps)(Signin);
