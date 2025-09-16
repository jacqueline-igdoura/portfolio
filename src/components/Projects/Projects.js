import "./Projects.scss";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div className="projects-container text">
      <h2>
        Here are some of my featured Github projects! Click on a project to view
        it on Github
      </h2>
      <div className="projects-grid">
        <ProjectCard
          image={require("../../assets/Interview-scheduler-runthrough.gif")}
          title="Interview Scheduler"
          githubUrl="https://github.com/jacqueline-igdoura/scheduler"
          alt="Interview Scheduler Demo"
          description="Interview Scheduler allows users to book and cancel interviews."
        />

        <ProjectCard
          image={require("../../assets/student-assign.png")}
          title="Student Assignment"
          githubUrl="https://github.com/jacqueline-igdoura/student-assignment"
          alt="Student Assignment Screenshot"
          description="This project is designed to help students learn how to properly use semantic elements in code."
        />

        <ProjectCard
          image={require("../../assets/Planit-register-login.gif")}
          title="Planit"
          githubUrl="https://github.com/jacqueline-igdoura/planit"
          alt="Planit Demo"
          description="Planit is an app that helps users create compact travel plans."
        />
      </div>
    </div>
  );
}

export default Projects;
