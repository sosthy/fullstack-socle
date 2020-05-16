import * as actions from "./actionTypes";
import * as api from "./api";

export const userAuthenticate = (session) => ({
  type: actions.AUTHENTICATE,
  payload: { session },
});

export const appChangeLanguage = (session) => ({
  type: actions.CHANGE_LANGUAGE,
  payload: { session },
});

export const userLogout = () => ({
  type: actions.LOGOUT,
});

export const signin = (credentials) => {
  return (dispatch) => {
    return api
      .signin(credentials)
      .then(({ data }) => {
        const action = userAuthenticate({
          token: data.token,
          isAuthenticated: true,
        });
        dispatch(action);
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch(userLogout);
  };
};

export const changeLanguage = (langKey) => {
  return (dispatch) => {
    dispatch(appChangeLanguage({ language: langKey }));
  };
};

export const hasAuthority = (...authorities) => {
  return false;
};

export const hasAnyAuthority = (...authorities) => {
  return false;
};
