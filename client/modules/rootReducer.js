import { combineReducers } from "redux";
import session from "./session";
import users from "./users";
import roles from "./roles";

export default combineReducers({
  [session.constants.NAME]: session.reducer,
  [users.constants.NAME]: users.reducer,
  [roles.constants.NAME]: roles.reducer,
});
