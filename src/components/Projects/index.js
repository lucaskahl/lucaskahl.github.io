import React, { Component } from "react";

import {
  Container,
  ProjectsWrapper,
  Information,
  Tecnologies,
  Overview
} from "./styles";

export default class Projects extends Component {
  state = {
    projects: [
      {
        id: 1,
        title: "Personal Portfolio",
        image: "https://i.imgur.com/bUU4Yvd.jpg",
        source: "https://github.com/lucaskahl/personal-portfolio-react",
        link: "#",
        tecnologies: ["ReactJS", "Styled Components", "ES6+", "CSS3"],
        overview:
          "Simple React project to display my portfolio of work. It was built by me using React / Styled Components"
      },
      {
        id: 2,
        title: "GoBarber",
        image: "https://i.imgur.com/JKB7oIU.png",
        source: null,
        link: null,
        tecnologies: ["NodeJS", "AdonisJS", "NJK", "ES6+", "CSS3", "HTML5"],
        overview: "Node project using AdonisJS and a NJK View..."
      },
      {
        id: 3,
        title: "Wedding website",
        image: "https://i.imgur.com/rl0MLhz.jpg",
        source: "https://github.com/lucaskahl/personal-portfolio-react",
        link: "https://lucaskahl.github.io/wedding/",
        tecnologies: ["HTML", "CSS3", "ITCSS", "RSCSS", "Sass", "NodeJS"],
        overview: "A Wedding website with the best of front end architeture"
      }
    ]
  };

  render() {
    const { projects } = this.state;

    return (
      <Container id="projects">
        <h1>Projects</h1>
        {projects.map(project => (
          <ProjectsWrapper key={project.id}>
            <Information>
              <div>
                <h3>{project.title}</h3>
                <div
                  style={{ backgroundImage: `url(${project.image})` }}
                  className="project__background"
                />
                <div className="project__actions">
                  {project.link !== null ? (
                    <a target="_blank" href={project.link}>
                      Live Preview
                    </a>
                  ) : (
                    <a disabled>Live Preview</a>
                  )}
                  {project.source !== null ? (
                    <a target="_blank" href={project.source}>
                      View Source
                    </a>
                  ) : (
                    <a disabled>View Source</a>
                  )}
                </div>
                <Tecnologies>
                  <h3>Technologies</h3>
                  <ul>
                    {project.tecnologies.map(item => (
                      <li key={project.tecnologies.indexOf(item)}>{item}</li>
                    ))}
                  </ul>
                </Tecnologies>
              </div>
            </Information>
            <Overview>
              <h4>Overview</h4>
              <p>{project.overview}</p>
            </Overview>
          </ProjectsWrapper>
        ))}
      </Container>
    );
  }
}
