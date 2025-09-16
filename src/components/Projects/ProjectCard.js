import React from "react";
import "./Projects.scss";

function ProjectCard({ image, title, githubUrl, alt, description }) {
  const cardContent = (
    <>
      <h3 className="project-title">{title}</h3>
      {image && <img src={image} alt={alt || title} className="project-img" />}
      <div
        className="project-card-footer"
        style={{ display: "flex", alignItems: "center", gap: "0.5em" }}
      >
        {description && (
          <span className="project-description">{description}</span>
        )}
      </div>
    </>
  );

  return githubUrl ? (
    <a
      href={githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card project-card-link"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      {cardContent}
    </a>
  ) : (
    <div className="project-card">{cardContent}</div>
  );
}

export default ProjectCard;
