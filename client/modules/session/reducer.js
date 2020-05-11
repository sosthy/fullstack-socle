import * as actions from "./actionTypes";

export default (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case actions.LOGIN:
      return [...state, { ...payload.session }];
    case actions.LOGOUT:
      return state;
    default:
      return state;
  }
};
