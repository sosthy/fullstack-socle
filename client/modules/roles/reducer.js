import * as actions from "./actionTypes";

export default (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case actions.CREATE:
      return [...state, { ...payload.role }];
    case actions.LOAD:
      return payload.roles;
    default:
      return state;
  }
};
