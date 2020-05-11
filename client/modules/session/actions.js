import * as actions from "./actionTypes";

export const login = (session) => ({
  type: actions.LOGIN,
  payload: { session },
});

export const logout = () => ({
  type: actions.LOGOUT,
});
