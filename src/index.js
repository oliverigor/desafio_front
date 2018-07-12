import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import Timeline from "./components/timeline.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/timeline" component={Timeline} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
