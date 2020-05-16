import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { App } from "./modules/app";
import { ReduxService, HttpService } from "./configs";
import "./i18n";
import "./index.scss";

const store = ReduxService.configureStore();
HttpService.setupInterceptors(store);

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <Router>
        <App />
      </Router>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
