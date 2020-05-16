import axios from "axios";
import { API_URL } from "../../constants";

export const saveRole = (role) => {
  return axios.post(API_URL + "api/roles", role);
};

export const getRoles = () => {
  return axios.get(API_URL + "api/roles");
};
