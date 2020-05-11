import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "../Landing";
import Login from "../Login";
import Signup from "../Signup";
import NotFound from "../NotFound";
import "./styles.css";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default App;
