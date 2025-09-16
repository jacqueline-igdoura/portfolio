import "./Resume.scss";

import React, { useEffect } from "react";
import resumeData from "../../assets/resume.json";

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
      <div className="rotating-text">
        <p>This resume belongs to someone</p>
        <p>
          <span class="word alizarin">agile.</span>
          <span class="word wisteria">diligent.</span>
          <span class="word peter-river">creative.</span>
          <span class="word emerald">innovative.</span>
          <span class="word sun-flower">awesome.</span>
        </p>
      </div>
      <div>
        <h1 className="text">Resume</h1>
        <div className="container text">
          <h1 className="name">{resumeData.name}</h1>
          <div className="contact-info">
            <p className="location">{resumeData.location}</p>
            <p className="contact-info__items">
              <a
                className="contact-info__item"
                href={"https://github.com/jacqueline-igdoura"}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              {" | "}
              <a
                className="contact-info__item"
                href={"https://www.linkedin.com/in/jacqueline-igdoura/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </p>
          </div>
          <div className="core-competencies">
            <h2 className="section-title">Technical Skills</h2>
            <ul>
              {resumeData.technicalSkills &&
                Object.entries(resumeData.technicalSkills).map(
                  ([category, skills], idx) => (
                    <li key={idx}>
                      <strong>{category}:</strong> {skills.join(", ")}
                    </li>
                  )
                )}
            </ul>
          </div>
          <div className="experience-section">
            <h2 className="section-title">Professional Experience</h2>
            {resumeData.experience &&
              Object.entries(resumeData.experience).map(
                ([company, jobs], idx) => (
                  <div key={company} className="company-block">
                    <h3>{company}</h3>
                    {jobs.map((job, jidx) => (
                      <div key={jidx} className="job-block">
                        <strong>{job["job title"]}</strong>
                        {job.location && job.location.length > 0 && (
                          <span> | {job.location.join(", ")}</span>
                        )}
                        {job.dates && job.dates.length > 0 && (
                          <span> | {job.dates.join(", ")}</span>
                        )}
                        <ul>
                          {job.responsibilities &&
                            job.responsibilities.map((resp, ridx) => (
                              <li key={ridx}>{resp}</li>
                            ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )
              )}
          </div>
          <div className="education-section">
            <h2 className="section-title">Education</h2>
            {resumeData.education &&
              Object.entries(resumeData.education).map(
                ([institution, eduEntries], idx) => (
                  <div key={institution} className="education-block">
                    <h3>{institution}</h3>
                    {eduEntries.map((edu, eidx) => (
                      <div key={eidx} className="edu-entry">
                        <strong>{edu.degree}</strong>
                        {edu.field && <span>, {edu.field}</span>}
                        {edu.dates && <span> | {edu.dates}</span>}
                        {edu.details && <p>{edu.details}</p>}
                      </div>
                    ))}
                  </div>
                )
              )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
