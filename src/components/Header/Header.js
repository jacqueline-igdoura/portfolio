import { FaSun, FaMoon } from "react-icons/fa";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import React from "react";
import logoDarkMode from "../../assets/logo-dark-mode.png";
import logoLightMode from "../../assets/logo-light-mode.png";

function Header() {
  React.useEffect(() => {
    if (!document.documentElement.getAttribute("data-theme")) {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  function getTheme() {
    return document.documentElement.getAttribute("data-theme") || "dark";
  }
  const [theme, setTheme] = React.useState(getTheme());

  function toggleTheme() {
    const current = getTheme();
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    setTheme(next);
  }

  const logo = theme === "dark" ? logoDarkMode : logoLightMode;

  return (
    <div>
      <header className="page-header">
        <img className="logo" src={logo} alt="Logo" />
        <nav>
          <ul className="main-nav">
            <li className="list-item">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li className="list-item">
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                About Me
              </NavLink>
            </li>
            <li className="list-item">
              <NavLink
                to="/projects"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Projects
              </NavLink>
            </li>
            <li className="list-item">
              <NavLink
                to="/resume"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Resume
              </NavLink>
            </li>
          </ul>
        </nav>
        <span
          onClick={toggleTheme}
          style={{
            cursor: "pointer",
            fontSize: "2rem",
            marginLeft: "1.5rem",
            userSelect: "none",
            display: "inline-flex",
            alignItems: "center"
          }}
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <FaMoon /> : <FaSun />}
        </span>
      </header>
    </div>
  );
}

export default Header;
