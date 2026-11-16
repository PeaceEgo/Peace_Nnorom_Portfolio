import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import "../sections/SelectedWork.css";

export default function Work() {
  return (
    <div className="paper">
      <section className="work work--page">
        <div className="section-head">
          <h1 className="h2">Selected Works</h1>
          <p className="lead work__lead">
            A collection of projects I've helped build and ship, turning ideas into reliable applications that solve real-world
            problems.
          </p>
        </div>

        <div className="work__list">
          <div className="work__grid">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
