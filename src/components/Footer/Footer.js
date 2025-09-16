import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-icons">
        <a href="https://github.com/jacqueline-igdoura" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub size={28} />
        </a>
        <a href="https://www.linkedin.com/in/jacqueline-igdoura/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin size={28} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
