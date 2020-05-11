import { combineReducers } from "redux";
import session from "./session";
import users from "./users";

export default combineReducers({
  [session.constants.NAME]: session.reducer,
  [users.constants.NAME]: users.reducer,
});
