import * as actions from "./actionTypes";
import * as api from "./api";

export const userAuthenticate = (session) => ({
  type: actions.AUTHENTICATE,
  payload: { session },
});

export const userLogout = () => ({
  type: actions.LOGOUT,
});

export const signin = (credentials) => {
  return (dispatch) => {
    return api.signin(credentials).then((resp) => {
      console.log(resp);
    });
  };
};

export const logout = (credentials) => {
  return (dispatch) => {
    dispatch(userLogout);
  };
};

export const hasAuthority = (...authorities) => {
  return false;
};

export const hasAnyAuthority = (...authorities) => {
  return false;
};
