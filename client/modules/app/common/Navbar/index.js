import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import session from "../../../session";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import { LANGUAGE } from "../../../../constants";

const Header = ({ t, changeLanguage, session }) => {
  return (
    <div>
      {/* Navbar */}
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        {/* Left navbar links */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              className="nav-link"
              data-widget="pushmenu"
              to="/"
              role="button"
            >
              <i className="fas fa-bars" />
            </Link>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <Link to="index3.html" className="nav-link">
              {t("home")}
            </Link>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <Link to="/" className="nav-link">
              {t("contact")}
            </Link>
          </li>
        </ul>
        {/* SEARCH FORM */}
        <form className="form-inline ml-3">
          <div className="input-group input-group-sm">
            <input
              className="form-control form-control-navbar"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <div className="input-group-append">
              <button className="btn btn-navbar" type="submit">
                <i className="fas fa-search" />
              </button>
            </div>
          </div>
        </form>
        {/* Right navbar links */}
        <ul className="navbar-nav ml-auto">
          {/* Messages Dropdown Menu */}
          <li className="nav-item dropdown">
            <Link className="nav-link" data-toggle="dropdown" to="/">
              <i className="far fa-comments" />
              <span className="badge badge-danger navbar-badge">3</span>
            </Link>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              <Link to="/" className="dropdown-item">
                {/* Message Start */}
                <div className="media">
                  <img
                    src="dist/img/user1-128x128.jpg"
                    alt="User Avatar"
                    className="img-size-50 mr-3 img-circle"
                  />
                  <div className="media-body">
                    <h3 className="dropdown-item-title">
                      Brad Diesel
                      <span className="float-right text-sm text-danger">
                        <i className="fas fa-star" />
                      </span>
                    </h3>
                    <p className="text-sm">Call me whenever you can...</p>
                    <p className="text-sm text-muted">
                      <i className="far fa-clock mr-1" /> 4 Hours Ago
                    </p>
                  </div>
                </div>
                {/* Message End */}
              </Link>
              <div className="dropdown-divider" />
              <Link to="/" className="dropdown-item">
                {/* Message Start */}
                <div className="media">
                  <img
                    src="dist/img/user8-128x128.jpg"
                    alt="User Avatar"
                    className="img-size-50 img-circle mr-3"
                  />
                  <div className="media-body">
                    <h3 className="dropdown-item-title">
                      John Pierce
                      <span className="float-right text-sm text-muted">
                        <i className="fas fa-star" />
                      </span>
                    </h3>
                    <p className="text-sm">I got your message bro</p>
                    <p className="text-sm text-muted">
                      <i className="far fa-clock mr-1" /> 4 Hours Ago
                    </p>
                  </div>
                </div>
                {/* Message End */}
              </Link>
              <div className="dropdown-divider" />
              <Link to="/" className="dropdown-item">
                {/* Message Start */}
                <div className="media">
                  <img
                    src="dist/img/user3-128x128.jpg"
                    alt="User Avatar"
                    className="img-size-50 img-circle mr-3"
                  />
                  <div className="media-body">
                    <h3 className="dropdown-item-title">
                      Nora Silvester
                      <span className="float-right text-sm text-warning">
                        <i className="fas fa-star" />
                      </span>
                    </h3>
                    <p className="text-sm">The subject goes here</p>
                    <p className="text-sm text-muted">
                      <i className="far fa-clock mr-1" /> 4 Hours Ago
                    </p>
                  </div>
                </div>
                {/* Message End */}
              </Link>
              <div className="dropdown-divider" />
              <Link to="/" className="dropdown-item dropdown-footer">
                See All Messages
              </Link>
            </div>
          </li>
          {/* Notifications Dropdown Menu */}
          <li className="nav-item dropdown">
            <Link className="nav-link" data-toggle="dropdown" to="/">
              <i className="far fa-bell" />
              <span className="badge badge-warning navbar-badge">15</span>
            </Link>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              <span className="dropdown-item dropdown-header">
                15 Notifications
              </span>
              <div className="dropdown-divider" />
              <Link to="/" className="dropdown-item">
                <i className="fas fa-envelope mr-2" /> 4 new messages
                <span className="float-right text-muted text-sm">3 mins</span>
              </Link>
              <div className="dropdown-divider" />
              <Link to="/" className="dropdown-item">
                <i className="fas fa-users mr-2" /> 8 friend requests
                <span className="float-right text-muted text-sm">12 hours</span>
              </Link>
              <div className="dropdown-divider" />
              <Link to="/" className="dropdown-item">
                <i className="fas fa-file mr-2" /> 3 new reports
                <span className="float-right text-muted text-sm">2 days</span>
              </Link>
              <div className="dropdown-divider" />
              <Link to="/" className="dropdown-item dropdown-footer">
                See All Notifications
              </Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link" data-toggle="dropdown" to="#">
              <i
                className={
                  session.language === LANGUAGE.EN
                    ? "flag-icon flag-icon-us"
                    : "flag-icon flag-icon-fr"
                }
              />
            </Link>
            <div className="dropdown-menu dropdown-menu-right p-0">
              <Link
                to="#"
                className={
                  session.language === LANGUAGE.FR
                    ? "dropdown-item active"
                    : "dropdown-item"
                }
                onClick={() => changeLanguage(LANGUAGE.FR)}
              >
                <i className="flag-icon flag-icon-fr mr-2" /> {t("french")}
              </Link>
              <Link
                to="#"
                className={
                  session.language === LANGUAGE.EN
                    ? "dropdown-item active"
                    : "dropdown-item"
                }
                onClick={() => changeLanguage(LANGUAGE.EN)}
              >
                <i className="flag-icon flag-icon-us mr-2" /> {t("english")}
              </Link>
            </div>
          </li>
          <li className="nav-item dropdown user-menu">
            <Link
              to="#"
              className="nav-link dropdown-toggle"
              data-toggle="dropdown"
            >
              <img
                src="../../dist/img/user2-160x160.jpg"
                className="user-image img-circle elevation-2"
                alt="User"
              />
              <span className="d-none d-md-inline">Alexander Pierce</span>
            </Link>
            <ul className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              {/* User image */}
              <li className="user-header bg-primary">
                <img
                  src="../../dist/img/user2-160x160.jpg"
                  className="img-circle elevation-2"
                  alt="User"
                />
                <p>
                  Alexander Pierce - Web Developer
                  <small>Member since Nov. 2012</small>
                </p>
              </li>
              {/* Menu Body */}
              <li className="user-body">
                <div className="row">
                  <div className="col-4 text-center">
                    <Link to="#">Followers</Link>
                  </div>
                  <div className="col-4 text-center">
                    <Link to="#">Sales</Link>
                  </div>
                  <div className="col-4 text-center">
                    <Link to="#">Friends</Link>
                  </div>
                </div>
                {/* /.row */}
              </li>
              {/* Menu Footer*/}
              <li className="user-footer">
                <Link to="#" className="btn btn-default btn-flat">
                  Profile
                </Link>
                <Link to="#" className="btn btn-default btn-flat float-right">
                  Sign out
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      {/* /.navbar */}
    </div>
  );
};

Header.propTypes = {
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
)(withTranslation()(Header));
