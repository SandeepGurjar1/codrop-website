import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { HashRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { StateProvider } from "./context/StateProvider";
import { initialState } from "./context/initialState";
import reducer from "./context/reducer";
import ScrollToTopOnRouteChange from "./utils/ScrollToTopOnRouteChange";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <ScrollToTopOnRouteChange>
      <StateProvider initialState={initialState} reducer={reducer}>
        <App />
      </StateProvider>
    </ScrollToTopOnRouteChange>
  </HashRouter>
);

serviceWorkerRegistration.register();
reportWebVitals();
