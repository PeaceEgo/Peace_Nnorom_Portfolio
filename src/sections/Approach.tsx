import Splat from "../components/Splat";
import "./Approach.css";

const steps = [
  {
    title: "Understand & Plan",
    text: "I start by understanding the requirements, user needs, and business goals, then define a practical approach before writing code.",
    icon: "/assets/icon-inspect.svg",
    splat: "green" as const,
  },
  {
    title: "Build & Collaborate",
    text: "I develop maintainable frontend and backend systems, working closely with designers, developers, and stakeholders to keep the solution aligned with its goals.",
    icon: "/assets/icon-code.svg",
    splat: "orange" as const,
  },
  {
    title: "Test & Refine",
    text: "I validate functionality, address issues, and refine the implementation to improve reliability, performance, and maintainability.",
    icon: "/assets/icon-plug.svg",
    splat: "green" as const,
  },
  {
    title: "Ship & Improve",
    text: "I focus on delivering production-ready applications, monitoring how they perform, and making improvements as requirements and user needs evolve.",
    icon: "/assets/icon-rocket.svg",
    splat: "orange" as const,
    mainBlob: "/assets/splat-4.svg",
  },
];

export default function Approach() {
  return (
    <section className="approach paper">
      <div className="section-head approach__head">
        <h2 className="h2">My Approach</h2>
        <p className="lead approach__lead">
          From understanding the problem to shipping reliable software, I follow a thoughtful, collaborative approach to building
          solutions that deliver real value.
        </p>
      </div>

      <ol className="approach__steps">
        {steps.map((step, i) => (
          <li key={step.title} className="step">
            <Splat color={step.splat} number={i + 1} mainBlob={step.mainBlob} />
            <div className="step__card paper">
              <div className="step__icon">
                <span className="step__icon-circle">
                  <img src={step.icon} alt="" />
                </span>
              </div>
              <div className="step__text">
                <h3 className="step__title">{step.title}</h3>
                <p className="body">{step.text}</p>
              </div>
            </div>
          </li>
        ))}
        <img className="approach__deco approach__deco--asterisk" src="/assets/splat-asterisk.svg" alt="" />
        <img className="approach__deco approach__deco--spark" src="/assets/splat-spark.svg" alt="" />
      </ol>
    </section>
  );
}
