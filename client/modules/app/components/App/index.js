import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "../Landing";
import Signin from "../Signin";
import Signup from "../Signup";
import NotFound from "../NotFound";
import Dashboard from "../Dashboard";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={Signup} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default App;
