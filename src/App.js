import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.scss";
import Header from "./components/Header/Header.js";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function getTheme() {
  return document.documentElement.getAttribute("data-theme") || "dark";
}

function App() {
  const [theme, setTheme] = React.useState(getTheme());

  function handleThemeToggle() {
    const current = getTheme();
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    setTheme(next);
  }

  return (
    <Router>
      <Header onThemeToggle={handleThemeToggle} theme={theme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
