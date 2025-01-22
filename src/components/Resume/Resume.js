import "./Resume.scss";

import React, { useEffect } from "react";

function Resume() {
  useEffect(() => {
    let words = document.querySelectorAll(".word");
    words.forEach((word) => {
      let letters = word.textContent.split("");
      word.textContent = "";
      letters.forEach((letter) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
      });
    });

    let currentWordIndex = 0;
    let maxWordIndex = words.length - 1;
    words[currentWordIndex].style.opacity = "1";

    let rotateText = () => {
      let currentWord = words[currentWordIndex];
      let nextWordIndex =
        currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
      let nextWord = words[nextWordIndex];

      currentWord.style.opacity = "0";
      nextWord.style.opacity = "1";

      currentWordIndex = nextWordIndex;
    };

    let intervalId = setInterval(rotateText, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div class="rotating-text">
        <p>This resume belongs to someone</p>
        <p>
          <span class="word alizarin">agile.</span>
          <span class="word wisteria">diligent.</span>
          <span class="word peter-river">creative.</span>
          <span class="word emerald">innovative.</span>
          <span class="word sun-flower">awesome.</span>
        </p>
      </div>
      <div class="container text">
        <h1>Jacqueline Igdoura</h1>
        <div class="contact-info">
          <p>Mountain View, California, USA</p>
          <p class="contact-info__items">
            <a
              class="contact-info__item"
              href="mailto:jacqueline.igdoura@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              jacqueline.igdoura@gmail.com
            </a>{" "}
            |{" "}
            <a
              class="contact-info__item"
              href="https://github.com/jacqueline-igdoura"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>{" "}
            |{" "}
            <a
              class="contact-info__item"
              href="https://www.linkedin.com/in/jacqueline-igdoura/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </div>

        <div class="professional-summary">
          <h2 class="section-title">Professional Summary</h2>
          <p>
            I am a results-driven software developer who is passionate about the
            intersection between technology and social psychology. I specialize
            in building intuitive web and mobile apps from a user-first
            perspective while working cross-functionally to create innovative
            solutions. I enjoy leveraging new technologies to create innovative
            solutions and am eager to contribute my skills in frontend
            development, testing, and full-stack solutions to an equally
            passionate team.
          </p>
        </div>

        <div class="core-competencies">
          <h2 class="section-title">Core Competencies</h2>
          <ul>
            <li>
              <strong>Frontend Frameworks:</strong> React, Angular, Vue.js,
              Ionic
            </li>
            <li>
              <strong>Backend Technologies:</strong> Python, Ruby on Rails,
              Sinatra, Django, Node.js
            </li>
            <li>
              <strong>Languages:</strong> JavaScript, TypeScript, Python, Ruby,
              SQL
            </li>
            <li>
              <strong>UI/UX:</strong> Figma, Storybook, Material UI, Tailwind,
              Bootstrap, SASS
            </li>
            <li>
              <strong>Testing & Automation:</strong> Cypress, Jest, Storybook
            </li>
            <li>
              <strong>Version Control & CI/CD:</strong> Git, GitHub, Docker,
              Jira
            </li>
            <li>
              <strong>Mobile Development:</strong> iOS, Android, React Native,
              Ionic
            </li>
            <li>
              <strong>Development Practices:</strong> Accessibility Compliance,
              Agile, Test-Driven Development, Reusable Components
            </li>
            <li>
              <strong>Additional:</strong> Redux, NgRx, Lodash, REST, GraphQL,
              Google Cloud
            </li>
          </ul>
        </div>

        <div class="professional-experience">
          <h2 class="section-title">Professional Experience</h2>

          <div>
            <h3 class="job-title">Descartes Systems Group – Toronto, Canada</h3>
            <p class="job-date">Software Developer II (Oct 2023 – Present)</p>
            <ul>
              <li>
                Proposed and implemented reusable components, improving the
                development process and increasing future development speed by
                12.5%.
              </li>
              <li>
                Evaluated the feasibility of transitioning from a Multi-Page
                Application (MPA) to a Single-Page Application (SPA), designed
                the conversion plans, and increased performance and reduced
                initial load times.
              </li>
              <li>
                Developed custom query parameters to reduce avg clicks per
                session by 75% and improved user experience.
              </li>
              <li>
                Collaborated across Eng, Design & Product to help them
                prioritize the customer experience and maintain system
                integrity.
              </li>
            </ul>
            <p class="technologies">
              <strong>Technologies:</strong> Vue.js, Django, Python, JavaScript,
              Docker, Axios, Bootstrap, GitHub
            </p>
          </div>

          <div>
            <h3 class="job-title">KOHO – Toronto, Canada</h3>
            <p class="job-date">
              Software Developer I, Frontend (Feb 2021 – Sep 2023)
            </p>
            <ul>
              <li>
                Built and maintained high-quality mobile applications for iOS
                and Android, significantly improving the user experience.
              </li>
              <li>
                Designed and documented reusable components to accelerate the
                development lifecycle and promote code consistency.
              </li>
              <li>
                Collaborated closely with product, design, and backend teams to
                create new APIs, enhancing functionality and user experience.
              </li>
              <li>
                Led UI/UX improvements by actively participating in product
                learning sessions and design critiques.
              </li>
              <li>
                Improved operational efficiency by developing an internal admin
                platform to assist user success agents in managing customer
                requests.
              </li>
            </ul>
            <p class="technologies">
              <strong>Technologies:</strong> React, TypeScript, JavaScript,
              Angular, Redux, NgRx, Tailwind, Cypress, Storybook, Figma, Jira,
              Ionic, Golang
            </p>
          </div>

          <div>
            <h3 class="job-title">Fairly.AI – Kingston, Canada</h3>
            <p class="job-date">Software Developer (Dec 2020 – Feb 2021)</p>
            <ul>
              <li>
                Led the development of responsive, accessible digital products,
                managing the entire frontend pipeline from design to deployment.
              </li>
              <li>
                Ensured high-quality code and deployment practices as the sole
                frontend developer, optimizing workflows for scalability.
              </li>
              <li>
                Assisted in database architecture and Google Analytics/Cloud
                Proxy implementation, enhancing analytics and reporting.
              </li>
            </ul>
            <p class="technologies">
              <strong>Technologies:</strong> React.js, JavaScript, Redux, SASS,
              Material-UI, Google Cloud, Python
            </p>
          </div>
        </div>

        <div class="education">
          <h2 class="section-title">Education</h2>
          <div>
            <h3>Lighthouse Labs – Toronto, Ontario, Canada</h3>
            <p>
              <strong>Diploma:</strong> Full-Stack Web Development (Sept 2020 –
              Dec 2020)
            </p>
            <p>
              Focus on Databases, Data Modeling, Automated Testing, and Computer
              Science Fundamentals. Completed collaborative midterm and final
              projects, demonstrating full-stack development skills.
            </p>
          </div>

          <div>
            <h3>McMaster University – Hamilton, Ontario, Canada</h3>
            <p>
              <strong>Bachelor of Arts:</strong> Social Psychology (Sep 2014 –
              Apr 2019)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
