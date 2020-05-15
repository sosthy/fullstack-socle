import * as actions from "./actionTypes";

export default (state = [], action) => {
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
