import React, { useEffect } from "react";
import RolesList from "../RolesList";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as roleActions from "../../actions";
import { withTranslation } from "react-i18next";

const Roles = ({ t, roles, loadRoles }) => {
  useEffect(() => {
    if (roles.length === 0) loadRoles();
  }, [roles.length, loadRoles]);

  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">{t("roles")}</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="/">{t("home")}</a>
                </li>
                <li className="breadcrumb-item active">{t("roles")}</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <RolesList roles={roles} />
    </div>
  );
};

Roles.propTypes = {
  roles: PropTypes.array.isRequired,
  loadRoles: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    roles: state.roles,
  };
};

const mapDispatchToProps = {
  loadRoles: roleActions.loadRoles,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(Roles));
