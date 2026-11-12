import Button from "./Button";
import TitleSpark from "./TitleSpark";
import type { Project } from "../data/projects";
import "./ProjectCard.css";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project">
      <div className="project__device">
        <img className="project__laptop" src="/assets/macbook.png" alt="" />
        <img className="project__screen" src={project.screenshot} alt={`${project.name} homepage`} loading="lazy" />
      </div>

      <div className="project__content">
        <div className="project__intro">
          <div className="project__heading">
            <div className="project__name-row">
              <h3 className="project__name">{project.name}</h3>
              <TitleSpark />
            </div>
            <div className="project__type">
              <span className="project__scribble">
                <img src="/assets/scribble-line.svg" alt="" />
              </span>
              <span>{project.type}</span>
            </div>
          </div>
          <p className="body">{project.description}</p>
        </div>

        <div className="project__role">
          <p className="project__role-label">My Role</p>
          <p className="project__role-value">{project.role}</p>
        </div>

        <div className="project__actions">
          <Button href={project.liveUrl}>View Live Project</Button>
          <Button variant="soft" icon="arrow-dark" to={`/work/${project.slug}`}>
            View Case Study
          </Button>
        </div>
      </div>
    </article>
  );
}
