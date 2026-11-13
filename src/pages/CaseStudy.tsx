import { Link, Navigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import Splat from "../components/Splat";
import { projects } from "../data/projects";
import "./CaseStudy.css";

const moreColors = ["var(--primary-300)", "#e47b3a"];
const panels = ["top", "center", "bottom"] as const;

export default function CaseStudy() {
  const { slug } = useParams();
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return <Navigate to="/work" replace />;

  const project = projects[index];
  const { caseStudy } = project;
  const more = [1, 2].map((offset) => projects[(index + offset) % projects.length]);

  const sections = [
    { title: "Product Overview", text: caseStudy.overview },
    { title: "Challenge", text: caseStudy.challenge },
    { title: "Solution", text: caseStudy.solution },
  ].filter((s): s is { title: string; text: string } => Boolean(s.text));

  return (
    <div className="paper case">
      <header className="case__head">
        <h1 className="case__title">
          {project.name}
          {caseStudy.tagline && ` - ${caseStudy.tagline}`}
        </h1>
        <span className="case__year">
          <Splat color="orange" number={caseStudy.year} />
        </span>
      </header>

      {caseStudy.gallery ? (
        <div className="case__gallery case__gallery--image">
          <img src={caseStudy.gallery} alt={`${project.name} pages`} />
        </div>
      ) : (
        <div className="case__gallery" role="img" aria-label={`${project.name} pages`}>
          {panels.map((position) => (
            <div
              key={position}
              className={`case__panel case__panel--${position}`}
              style={{ backgroundImage: `url("${project.screenshot}")`, backgroundPosition: `center ${position}` }}
            />
          ))}
        </div>
      )}

      <dl className="case__meta">
        <div className="case__meta-group">
          <dt>Platforms :</dt>
          <dd className="case__tags">
            {caseStudy.platforms.map((p) => (
              <span key={p} className="case__tag">
                {p}
              </span>
            ))}
          </dd>
        </div>
        <div className="case__meta-group">
          <dt>Built with :</dt>
          <dd className="case__tags">
            {caseStudy.stack.map((s) => (
              <span key={s} className="case__tag case__tag--stack rough">
                {s}
              </span>
            ))}
          </dd>
        </div>
        <div className="case__meta-group">
          <dt>See live project :</dt>
          <dd>
            {project.liveUrl ? (
              <Button href={project.liveUrl}>View Live Project</Button>
            ) : (
              <span className="case__not-live">Not live yet</span>
            )}
          </dd>
        </div>
      </dl>

      <div className="case__sections">
        {sections.map((section) => (
          <section key={section.title} className="case__section">
            <h2>{section.title}</h2>
            <p className="body">{section.text}</p>
          </section>
        ))}
      </div>

      <section className="case__more">
        <h2 className="h2 case__more-title">See More Projects</h2>
        <div className="case__more-list">
          {more.map((p, i) => (
            <Link key={p.slug} to={`/work/${p.slug}`} className="more-card" style={{ background: moreColors[i] }}>
              <img className="more-card__squiggle" src="/assets/squiggle.svg" alt="" />
              <span className="more-card__device">
                <img className="more-card__laptop" src="/assets/macbook.png" alt="" />
                <img className="more-card__screen" src={p.screenshot} alt="" loading="lazy" />
              </span>
              <span className="more-card__text">
                <span className="more-card__name">{p.name}</span>
                <span className="more-card__type">
                  <img src="/assets/scribble-line.svg" alt="" />
                  {p.type}
                </span>
              </span>
              <img className="more-card__arrow" src="/assets/arrow-right.svg" alt="" />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
