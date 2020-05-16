import React, { Suspense } from "react";
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
    <Suspense fallback={"Loading..."}>
      <ReduxProvider store={store}>
        <Router>
          <App />
        </Router>
      </ReduxProvider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
