import "./Home.scss";

import React from "react";
import memoji from "../../assets/memoji.png";

function Home() {
  return (
    <div>
      <h1 class="text">Home</h1>
      <div class="page-split">
        <p class="text">This is the Home page.</p>
        <img class="memoji" src={memoji} alt="" />
      </div>
    </div>
  );
}

export default Home;
