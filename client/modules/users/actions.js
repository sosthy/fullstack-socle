import * as actions from "./actionTypes";
import * as api from "./api";

const create = (user) => ({
  type: actions.CREATE,
  payload: { user },
});

const load = (users) => ({
  type: actions.LOAD,
  payload: { users },
});

export const createUser = (newUser) => {
  return (dispatch) => {
    return api.saveUser(newUser).then(({ data: user }) => {
      dispatch(create(user));
    });
  };
};

export const loadUsers = () => {
  return (dispatch) => {
    return api.getUsers().then(({ data: users }) => {
      dispatch(load(users));
    });
  };
};
