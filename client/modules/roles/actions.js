import * as actions from "./actionTypes";
import * as api from "./api";

const create = (role) => ({
  type: actions.CREATE,
  payload: { role },
});

const load = (roles) => ({
  type: actions.LOAD,
  payload: { roles },
});

export const createRole = (newrole) => {
  return (dispatch) => {
    return api.saveRole(newrole).then(({ data: role }) => {
      dispatch(create(role));
    });
  };
};

export const loadRoles = () => {
  return (dispatch) => {
    return api.getRoles().then(({ data: roles }) => {
      dispatch(load(roles));
    });
  };
};
