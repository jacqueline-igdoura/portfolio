import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.scss";
import Header from "./components/Header/Header.js";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
import Footer from "./components/Footer/Footer";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          {/* Add more routes here */}
        </Routes>
        <Footer />
      </Router>
    );
  }
}

export default App;
