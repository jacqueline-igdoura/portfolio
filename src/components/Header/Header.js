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
              <NavLink to="/" exact activeClassName="active">
                Home
              </NavLink>
            </li>
            <li className="list-item">
              <NavLink to="/about" activeClassName="active">
                About Me
              </NavLink>
            </li>
            <li className="list-item">
              <NavLink to="/projects" activeClassName="active">
                Projects
              </NavLink>
            </li>
            <li className="list-item">
              <NavLink to="/resume" activeClassName="active">
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
