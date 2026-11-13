import Button from "../components/Button";
import PortraitFrame from "../components/PortraitFrame";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero paper">
      <div className="hero__copy">
        <div className="hero__text">
          <p className="hero__intro">{"Hello, I'm Peace — Software Engineer & Product Builder"}</p>
          <h1 className="hero__title">I turn ideas into digital products that solve real problems.</h1>
          <p className="lead">
            {
              "I'm a software engineer passionate about building products that make life and work easier. I bring together frontend craftsmanship, backend engineering, and product thinking to create intuitive experiences backed by reliable systems."
            }
          </p>
        </div>
        <div className="hero__actions">
          <Button to="/#work">View My Work</Button>
          <Button variant="soft" icon="download" href="/Peace_Nnorom_Resume.pdf" download>
            Download Resume
          </Button>
        </div>
      </div>
      <PortraitFrame />
    </section>
  );
}
