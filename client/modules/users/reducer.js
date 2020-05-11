import * as actions from "./actionTypes";

export default (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case actions.CREATE:
      return [...state, { ...payload.user }];
    case actions.LOAD:
      return payload.users;
    default:
      return state;
  }
};
