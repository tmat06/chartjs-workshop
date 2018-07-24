import React from "react";
import { Route, Switch } from "react-router-dom";
import Test from "./Test";
import Done from "./Done";
import App from "./App";
import Workshop from "./Workshop";

export default (
  <Switch>
    <Route exact path="/" component={App} />
    <Route path="/test" component={Test} />
    <Route path="/done" component={Done} />
    <Route path="/workshop" component={Workshop} />
  </Switch>
);
