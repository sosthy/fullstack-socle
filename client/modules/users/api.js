import axios from "axios";
import { API_URL } from "../../constants";

export const saveUser = (user) => {
  return axios.post(API_URL + "api/users", user);
};

export const getUsers = () => {
  return axios.get(API_URL + "api/users");
};
