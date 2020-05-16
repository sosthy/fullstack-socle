import * as actions from "./actionTypes";
import initialState from "../initialState";
import i18n from "../../i18n";

export default (state = initialState.session, action) => {
  const { type, payload } = action;
  switch (type) {
    case actions.AUTHENTICATE:
      return { ...state, ...payload.session };
    case actions.LOGOUT:
      return { ...state, isAuthenticated: false };
    case actions.CHANGE_LANGUAGE:
      i18n.changeLanguage(payload.session.language);
      return { ...state, ...payload.session };
    default:
      return state;
  }
};
