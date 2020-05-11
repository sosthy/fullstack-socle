import axios from "axios";
import { API_URL } from "../../constants";

export const identify = () => {
  return axios.get(API_URL + "api/users/me");
};

export const signin = (credentials) => {
  return axios.post(API_URL + "auth/signin", credentials);
};

export const signup = (user) => {
  return axios.post(API_URL + "auth/signup", user);
};
