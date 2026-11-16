import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { featuredProjects } from "../data/projects";
import "./SelectedWork.css";

export default function SelectedWork() {
  return (
    <section id="work" className="work">
      <div className="section-head">
        <h2 className="h2">Selected Works</h2>
        <p className="lead work__lead">
          A selection of production-ready applications I've built, showcasing my approach to solving problems, engineering reliable
          systems, and delivering practical digital solutions.
        </p>
      </div>

      <div className="work__list">
        <div className="work__grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <Link className="brush-button" to="/work">
          <img src="/assets/brush-button.svg" alt="" />
          <span>View All Work</span>
        </Link>
      </div>
    </section>
  );
}
