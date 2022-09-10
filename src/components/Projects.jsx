import React from "react";
import ProjectItem from "./alt/ProjectItem";
import projectData from ".././Data/ProjectData";
import { Reveal } from "react-awesome-reveal";
import scrollAnimation from "./scrollAnimation/scrollAnimation";

function Projects() {
  return (
    <section id="projects">
      <Reveal triggerOnce keyframes={scrollAnimation.fadeInDown}>
        <div className="sec-title">
          <h2>PROJECTS</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </Reveal>
      <Reveal triggerOnce keyframes={scrollAnimation.fadeInUp}>
        <div className="projects-wrapper">
          <ul>
            {projectData.map((e, i) => {
              return (
                <ProjectItem
                  key={i}
                  img={e.img}
                  title={e.title}
                  info={e.info}
                />
              );
            })}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}

export default Projects;
