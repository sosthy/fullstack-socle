import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import _ from "lodash";

const RoleList = ({ roles }) => {
  return (
    <section className="content">
      <div className="card">
        <div className="card-body p-0">
          <table className="table table-striped projects">
            <thead>
              <tr>
                <th style={{ width: "1%" }}>#</th>
                <th>Name</th>
                <th>Authorities</th>
                <th>Description</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {roles.map((role) => {
                return (
                  <tr key={role._id}>
                    <td>#</td>
                    <td>{_.toUpper(role.name)}</td>
                    <td>
                      {role.authorities.map((authority) => (
                        <span
                          key={authority}
                          className="badge badge-success m-1"
                        >
                          {authority}
                        </span>
                      ))}
                    </td>
                    <td>{role.description}</td>
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

RoleList.propTypes = {
  roles: PropTypes.array.isRequired,
};

export default RoleList;
