import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
      <div className="container">
        <div className="navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse">
          <ul className="navbar-nav flex-grow-1">
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/podcasts">Podcasts</Link>
            </li>
            <li className="nav-item">
              <Link to="/Movies">Movie List</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
