import React from "react";
import { Link } from "react-router-dom";

const navBarTop = props => {
  return (
    <nav className="navbar navbar-light bg-dark navbar-dark  navbar-expand-sm">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/dashboard">
          Navbar
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link " to="/dashboard">
              Notification <span className="badge badge-warning">32</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/dashboard">
              My Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/">
              Log Out
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default navBarTop;
