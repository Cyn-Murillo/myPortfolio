import React from "react";
import "./Projects.css";

const personalProjects = [
  {
    title: "Portfolio (React)",
    description: "Designed from scratch using React and Vite. This personal developer portfolio features a custom collapsible sidebar, responsive layout, animated background, and project cards with external links.",
    link: "https://github.com/Cyn-Murillo/myPortfolio",
  },
  {
    title: "Expense Tracker (Django)",
    description: "A backend-powered expense tracker built using Django with file upload, user auth, and in-page note editing.",
    link: "https://github.com/Cyn-Murillo/expenseTracker",
  },
  {
    title: "HealthyBites App (React Native)",
    description: "A group project prototype built in Figma, focused on healthy eating with intuitive design.",
    link: "https://www.figma.com/design/ceXTCQ9cBw9hIGH0wVb9f4/ISDA130-Group10-HealthyBites?node-id=0-1&m=dev",
  },
  {
  title: "WordPress Project: First Language",
  description: "A themed web page created using WordPress. This project explores content publishing, layout customization, and web storytelling through a personal lens.",
  link: "https://fammemoirs.wordpress.com/",
  },
];
const courseworkProjects = [
  {
  title: "Intermediate HTML & CSS",
  description: "Cleaned up obsolete HTML, added semantic structure, and implemented a banner. This project emphasizes web standards and accessibility practices.",
  link: "https://hills.ccsf.edu/~cmurill9/homework2.html",
  },
  {
  title: "Interactive Web Page (HW2)",
  description: "A dynamic web page built using JavaScript to manipulate the DOM and respond to user input. Focused on core interactivity principles.",
  link: "https://hills.ccsf.edu/~cmurill9/hw2.html",
  },
  {
  title: "JavaScript Practice Page (HW4)",
  description: "An assignment demonstrating DOM manipulation, event handling, and dynamic styling with vanilla JavaScript.",
  link: "https://hills.ccsf.edu/~cmurill9/hw4.html",
},
];

function Projects() {
  return (
    <div className="main-content">
      <h1>My Projects</h1>

      {/* Personal Projects */}
      <div className="project-grid">
        {personalProjects.map((proj, index) => (
          <div className="project-card" key={index}>
            <h2>{proj.title}</h2>
            <p>{proj.description}</p>
            <a href={proj.link} target="_blank" rel="noreferrer">View Project</a>
          </div>
        ))}
      </div>

      {/* Coursework Heading */}
      <h2 className="section-heading">Coursework</h2>

      {/* Coursework Projects */}
      <div className="project-grid">
        {courseworkProjects.map((proj, index) => (
          <div className="project-card" key={index}>
            <h2>{proj.title}</h2>
            <p>{proj.description}</p>
            <a href={proj.link} target="_blank" rel="noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
}


export default Projects;