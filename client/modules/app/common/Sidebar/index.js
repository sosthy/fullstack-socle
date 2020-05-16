import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <Link to="/" className="brand-link">
        <img
          src="/dist/img/AdminLTELogo.png"
          alt="logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: ".8" }}
        />
        <span className="brand-text font-weight-light">AdminLTE 3</span>
      </Link>
      <div className="sidebar">
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li className="nav-item">
              <Link to="/admin" className="nav-link active">
                <i className="nav-icon fas fa-tachometer-alt"></i>
                <p>Dashboard</p>
              </Link>
            </li>
            <li className="nav-header">ADMINISTRATION</li>
            <li className="nav-item">
              <Link to="/admin/users" className="nav-link">
                <i className="nav-icon fas fa-calendar-alt" />
                <p>Utilisateurs</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/roles" className="nav-link">
                <i className="nav-icon far fa-image" />
                <p>Roles</p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
