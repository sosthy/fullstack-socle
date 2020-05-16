import React from "react";
import { Navbar, Sidebar, Footer } from "../common";
import { Switch, Route } from "react-router-dom";
import { Users } from "../../users/components";
import { Roles } from "../../roles/components";
import Dashboard from "../components/Dashboard";

const MainLayout = ({ match }) => {
  return (
    <React.Fragment>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path={`${match.url}`} component={Dashboard} />
        <Route path={`${match.url}/users`} component={Users} />
        <Route path={`${match.url}/roles`} component={Roles} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
};

export default MainLayout;
