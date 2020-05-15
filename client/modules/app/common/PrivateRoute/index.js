import React from "react";
import propTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import { connect } from "redux";

const PrivateRoute = ({ session, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      session.isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

PrivateRoute.propTypes = {
  session: propTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    session: state.session,
  };
};

export default connect(mapStateToProps)(PrivateRoute);
