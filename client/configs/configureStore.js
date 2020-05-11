import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../modules/rootReducer";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

const configureStore = (initialState) => {
  // add support for Redux dev tools
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(createLogger(), thunk, reduxImmutableStateInvariant())
    )
  );
};

export default { configureStore };
