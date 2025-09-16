import "./Header.scss";
import React from "react";
import { NavLink } from "react-router-dom";

import logoDarkMode from "../../assets/logo-dark-mode.png";

function Header() {
  return (
    <div>
      <header className="page-header">
        <img className="logo" src={logoDarkMode} alt="Logo" />
        <nav>
          <ul className="main-nav">
            <li className="list-item">
              <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
                Home
              </NavLink>
            </li>
            <li className="list-item">
              <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
                About Me
              </NavLink>
            </li>
            <li className="list-item">
              <NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>
                Projects
              </NavLink>
            </li>
            <li className="list-item">
              <NavLink to="/resume" className={({ isActive }) => isActive ? "active" : ""}>
                Resume
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
