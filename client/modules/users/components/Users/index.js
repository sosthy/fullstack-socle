import React, { useEffect } from "react";
import UsersList from "../UsersList";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as userActions from "../../actions";

const Users = ({ users, loadUsers }) => {
  useEffect(() => {
    if (users.length === 0) loadUsers();
  }, []);

  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">Users</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item active">Users</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <UsersList users={users} />
    </div>
  );
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loadUsers: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = {
  loadUsers: userActions.loadUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
