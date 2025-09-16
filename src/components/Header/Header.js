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
        <span className="coffee-label">How do you like your coffee?</span>
        <div className="theme-toggle-switch" onClick={toggleTheme}>
          <span
            className="toggle-cylinder"
            style={{
              left: theme === "light" ? 0 : "calc(100% - 48px)",
              background: theme === "light" ? "#fff" : "#333",
            }}
          ></span>
          <span
            className="toggle-cream"
            style={{ color: theme === "light" ? "#222" : "#888" }}
          >
            cream
          </span>
          <span
            className="toggle-black"
            style={{ color: theme === "dark" ? "#fff" : "#888" }}
          >
            black
          </span>
        </div>
      </header>
    </div>
  );
}

export default Header;
