import React from "react";
import styles from "./style.module.css";

const LoginForm = ({ credentials, handleOnChange, handleOnSubmit }) => (
  <form className="ui form" onSubmit={handleOnSubmit}>
    <h1 className="ui header">Salut, Bienvenue</h1>
    <p className={styles.titleDesc}>
      Log in to your Thunder account to get back your codes. Or new user Sign
      up.
    </p>
    <div className="field">
      <label>Username</label>
      <input
        type="text"
        name="username"
        placeholder="Username"
        onChange={handleOnChange}
        value={credentials.username}
      />
    </div>
    <div className="field">
      <label>Password</label>
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleOnChange}
        value={credentials.password}
      />
    </div>
    <div className="field">
      <div className={styles.buttonConnectMarginTop}>
        <button className="fluid huge primary ui button" type="submit">
          Submit
        </button>
      </div>
    </div>
    <div className={"field"}>
      <div className={styles.sessionBlock}>
        <div className="ui checkbox">
          <input
            id="remember"
            name="remember"
            type="checkbox"
            tabIndex="0"
            className="hidden"
            onChange={handleOnChange}
            checked={credentials.remember}
          />
          <label htmlFor="remember">Remember Me</label>
        </div>
        <a href="#">Forgot password ?</a>
      </div>
    </div>
  </form>
);

export default LoginForm;
