import type { CSSProperties } from "react";
import TornBand from "../components/TornBand";
import "./Skills.css";

type Tool = { name: string; icon: string; w: number; h: number; mask?: string };

type SkillGroup = {
  number: number;
  star: string;
  numberLight?: boolean;
  title: string;
  description: string;
  rows: Tool[][];
};

const groups: SkillGroup[] = [
  {
    number: 1,
    star: "/assets/star-1.svg",
    title: "Front-end",
    description:
      "Building responsive web and mobile interfaces that deliver intuitive, engaging experiences across browsers and devices.",
    rows: [
      [
        { name: "React", icon: "/assets/icon-react.svg", w: 24, h: 22 },
        { name: "React Native", icon: "/assets/icon-react.svg", w: 24, h: 22 },
      ],
      [
        { name: "Expo", icon: "/assets/icon-expo.svg", w: 24, h: 24 },
        { name: "Next.js", icon: "/assets/icon-next.svg", w: 24, h: 24, mask: "/assets/icon-next-mask.svg" },
      ],
      [
        { name: "TypeScript", icon: "/assets/icon-ts.svg", w: 24, h: 24 },
        { name: "JavaScript", icon: "/assets/icon-js.svg", w: 24, h: 24 },
      ],
      [{ name: "Tailwind CSS", icon: "/assets/icon-tailwind.svg", w: 24, h: 14.727 }],
    ],
  },
  {
    number: 2,
    star: "/assets/star-2.svg",
    numberLight: true,
    title: "Back-end",
    description: "Developing secure, scalable server-side systems that power application functionality and business logic.",
    rows: [
      [
        { name: "Node.js", icon: "/assets/icon-node.svg", w: 24, h: 27 },
        { name: "NestJS", icon: "/assets/icon-nest.svg", w: 24, h: 23 },
      ],
      [
        { name: "Laravel", icon: "/assets/icon-laravel.svg", w: 24, h: 25 },
        { name: "PHP", icon: "/assets/icon-php.svg", w: 26, h: 21.173 },
      ],
      [{ name: "Express.js", icon: "/assets/icon-express.svg", w: 24, h: 24 }],
    ],
  },
  {
    number: 3,
    star: "/assets/star-3.svg",
    title: "Integration & Data",
    description:
      "Connecting APIs, databases, messaging, and deployment pipelines so applications move data reliably and ship consistently.",
    rows: [
      [
        { name: "PostgreSQL", icon: "/assets/icon-postgres.svg", w: 24, h: 24 },
        { name: "MySQL", icon: "/assets/icon-mysql.svg", w: 24, h: 24 },
      ],
      [
        { name: "MongoDB", icon: "/assets/icon-mongo.svg", w: 24, h: 24 },
        { name: "Kafka", icon: "/assets/icon-kafka.svg", w: 24, h: 24 },
      ],
      [
        { name: "Docker", icon: "/assets/icon-docker.svg", w: 24, h: 24 },
        { name: "CI/CD", icon: "/assets/icon-cicd.svg", w: 24, h: 24 },
      ],
      [
        { name: "REST APIs", icon: "/assets/icon-api.svg", w: 24, h: 24 },
        { name: "Git", icon: "/assets/icon-git.svg", w: 24, h: 23.408 },
      ],
      [{ name: "Wordpress", icon: "/assets/icon-wp.svg", w: 24, h: 24 }],
    ],
  },
];

function ToolChip({ tool }: { tool: Tool }) {
  const maskStyle: CSSProperties | undefined = tool.mask
    ? { maskImage: `url("${tool.mask}")`, maskMode: "luminance", maskSize: "100% 100%" }
    : undefined;

  return (
    <span className="chip">
      <span className="chip__icon">
        <img src={tool.icon} alt="" width={tool.w} height={tool.h} style={maskStyle} />
      </span>
      <span>{tool.name}</span>
    </span>
  );
}

export default function Skills() {
  return (
    <TornBand image="/assets/torn-skills.png" height={847} bleedY="2.36%" className="skills">
      <div className="skills__inner">
        <div className="section-head">
          <h2 className="h2 skills__title">What I Build With</h2>
          <p className="lead skills__lead">
            The technologies and tools I use to build, integrate, and ship reliable, production-ready web applications.
          </p>
        </div>

        <div className="skills__grid">
          {groups.map((group) => (
            <article key={group.title} className="skill-card">
              <div className="skill-card__badge">
                <img className="skill-card__star" src={group.star} alt="" width={55.5729} height={56.6853} />
                <span className={group.numberLight ? "is-light" : undefined}>{group.number}</span>
              </div>

              <div className="skill-card__body">
                <div className="skill-card__text">
                  <h3 className="skill-card__title">{group.title}</h3>
                  <p className="body">{group.description}</p>
                </div>
                <div className="skill-card__chips">
                  {group.rows.map((row, i) => (
                    <div key={i} className="skill-card__row">
                      {row.map((tool) => (
                        <ToolChip key={tool.name} tool={tool} />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </TornBand>
  );
}
