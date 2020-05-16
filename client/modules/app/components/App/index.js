import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "../Landing";
import Signin from "../Signin";
import Signup from "../Signup";
import NotFound from "../NotFound";
import { MainLayout } from "../../layouts";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import session from "../../../session";
import { withTranslation } from "react-i18next";

const App = ({ t, i18n, session, changeLanguage }) => {
  useEffect(() => {
    if (i18n.language !== session.language) changeLanguage(i18n.language);
  }, []);

  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={Signup} />
      <Route path="/admin" component={MainLayout} />
      <Route component={NotFound} />
    </Switch>
  );
};

App.propTypes = {
  changeLanguage: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
  session: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    session: state.session,
  };
};

const mapDispatchToProps = {
  changeLanguage: session.actions.changeLanguage,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(App));
