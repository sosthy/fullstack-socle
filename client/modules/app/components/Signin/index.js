import React, { useState, useEffect } from "react";
import * as SessionService from "../../../session/api";
import { LOCAL_STORAGE } from "../../../../constants";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    remember: true,
  });

  useEffect(() => {}, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    SessionService.signin(credentials)
      .then(({ data }) => {
        console.log(data);
        localStorage.setItem(LOCAL_STORAGE.TOKEN, data.token);
      })
      .catch((error) => {
        console.log(error);
        throw error;
      });
  };

  const handleOnChange = (e) => {
    const target = e.target;
    const value = target.name === "remember" ? target.checked : target.value;
    const name = target.name;
    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <div className="">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            value={credentials.username}
            onChange={handleOnChange}
          />
        </div>
        <div className="">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={credentials.password}
            onChange={handleOnChange}
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Login;
