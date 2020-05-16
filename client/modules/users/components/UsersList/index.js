import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import _ from "lodash";

const UsersList = ({ users }) => {
  return (
    <section className="content">
      <div className="card">
        <div className="card-body p-0">
          <table className="table table-striped projects">
            <thead>
              <tr>
                <th style={{ width: "1%" }}>#</th>
                <th>Photo</th>
                <th>First&nbsp;Name</th>
                <th>Last&nbsp;Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Status</th>
                <th>Role</th>
                <th>Langue</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                return (
                  <tr key={user._id}>
                    <td>#</td>
                    <td style={{ width: "3%" }}>
                      <img
                        alt="Avatar"
                        className="table-avatar"
                        src="../../dist/img/avatar.png"
                      />
                    </td>
                    <td>{_.startCase(_.toLower(user.firstname))}</td>
                    <td>{user.lastname.toUpperCase()}</td>
                    <td>{user.email}</td>
                    <td style={{ width: "10%" }}>{user.address}</td>
                    <td style={{ width: "8%" }}>
                      <span className="badge badge-success">Success</span>
                    </td>
                    <td style={{ width: "10%" }}>
                      {_.toUpper(user.role.name)}
                    </td>
                    <td style={{ width: "2%" }}>{_.toUpper(user.lang)}</td>
                    <td className="project-actions text-right">
                      {" "}
                      <Link className="btn btn-primary btn-sm" to="#">
                        <i className="fas fa-folder"></i> View
                      </Link>{" "}
                      <Link className="btn btn-info btn-sm" to="#">
                        <i className="fas fa-pencil-alt"></i> Edit
                      </Link>{" "}
                      <Link className="btn btn-danger btn-sm" to="#">
                        <i className="fas fa-trash"></i> Delete
                      </Link>
                    </td>
                  </tr>
                );
              })}
              <tr></tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

UsersList.propTypes = {
  users: PropTypes.array.isRequired,
};

export default UsersList;
