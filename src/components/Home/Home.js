import "./Home.scss";

import React from "react";
import memoji from "../../assets/memoji.png";

function Home() {
  return (
    <div>
      <h1 className="text">Home</h1>
      <p className="text">This is the Home page.</p>
      <img className="memoji" src={memoji} alt="Logo" />
    </div>
  );
}

export default Home;
