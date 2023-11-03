import React from "react";

const projects = [
  {
    title: "Project 1",
    description: "Description of Project 1.",
    link: "https://example.com/project1",
  },
  {
    title: "Project 2",
    description: "Description of Project 2.",
    link: "https://example.com/project2",
  },
  {
    title: "Project 3",
    description: "Description of Project 3.",
    link: "https://example.com/project3",
  },
  {
    title: "Project 4",
    description: "Description of Project 4.",
    link: "https://example.com/project4",
  },
];

function Portfolio() {
  return (
    <div className="portfolio">
      <h1>My Portfolio</h1>

      {/* Projects Section */}
      <section className="section">
        <h2>Projects</h2>
        <div className="projects">
          {projects.map((project, index) => (
            <div className="project" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* About Me Section */}
      <section className="section">
        <h2>About Me</h2>
        <p>Hi! I am Dibyadarsan Das and I am a Mern Stack Developer.</p>
      </section>

      {/* Contact Section */}
      <section className="section">
        <h2>Contact</h2>
        <p>Mail: dibya@gmail.com</p>
      </section>
    </div>
  );
}

export default Portfolio;
