import * as actions from "./actionTypes";
import initialState from "../initialState";

export default (state = initialState.session, action) => {
  const { type, payload } = action;
  switch (type) {
    case actions.AUTHENTICATE:
      return { ...state, ...payload.session };
    case actions.LOGOUT:
      return { ...state, isAuthenticated: false };
    default:
      return state;
  }
};
