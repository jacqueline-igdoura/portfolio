import "./Home.scss";

import React from "react";
import pumpkin from "../../assets/me-and-pumpkin.jpg";

function Home() {
  return (
    <div class="text home-container">
      <div class="memoji-container">
        <div class="arrow">
          <div class="curve"></div>
          <div class="point"></div>
        </div>
        <img class="memoji" src={pumpkin} alt="" />
        <div class="arrow">
          <div class="curve"></div>
          <div class="point"></div>
        </div>
      </div>
      <div>
        <h1 class="title">Hi, nice to meet you!</h1>
        <div class="subtitle">
          I'm Jacqueline Igdoura, a Software Developer based in Mountain View,
          CA
        </div>
        <div class="page-split">
          <p class="intro">
            {" "}
            I'm a software developer with a passion for crafting responsive,
            accessible, and user-centered web applications. While I have
            full-stack experience across a wide range of industries, including
            fintech, SaaS, and Human-AI interaction, my passion is in the
            frontend: building elegant, intuitive interfaces that make
            technology feel effortless.
          </p>
          <p class="intro">
            With a strong foundation in JavaScript, TypeScript, and modern
            frameworks like React, Vue, and Angular, I bring both technical
            expertise and a keen eye for design to every project. My background
            in social psychology gives me a unique perspective on user behavior,
            helping me build products that are not just functional, but
            genuinely enjoyable to use.
          </p>
          <p class="intro">
            I love solving complex problems, turning ideas into polished
            features, and collaborating across teams to bring products to life.
            Whether it's building scalable component libraries, improving
            performance, or ensuring accessibility compliance — I focus on
            creating code that’s clean, maintainable, and thoughtfully crafted.
          </p>
          <p class="intro">
            My development philosophy?{" "}
            <strong>
              With time, effort, and curiosity — anything is possible.
            </strong>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
