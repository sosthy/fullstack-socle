import axios from "axios";
import * as actions from "../modules/session/actionTypes";
import { API_URL } from "../constants";

const token = localStorage.getItem("token");
axios.defaults.baseURL = API_URL;

const setupInterceptors = (store) => {
  // Add a request interceptor
  axios.interceptors.request.use(
    function (config) {
      config.headers["Authorization"] = `Bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
  axios.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      localStorage.clear();
      store.dispatch({ type: actions.LOGOUT });
      return Promise.reject(error);
    }
  );
};

export default { setupInterceptors };
