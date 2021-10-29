import type { NextPage } from 'next';
import { Title } from '../Title';
import { Project } from './Project';
import { titleLink, projectListStyle } from './style';
import { projectsList } from './projectsList';

export const Projects: NextPage = () => (
  <section id="projects">
    <a
      href="https://github.com/leandrotk"
      target="_blank"
      rel="noopener noreferrer"
      style={titleLink}
    >
      <Title text="projects" />
    </a>
    <ul style={projectListStyle}>
      {projectsList.map((project) => (
        <Project
          key={project.link}
          title={project.title}
          description={project.description}
          link={project.link}
        />
      ))}
    </ul>
  </section>
);
