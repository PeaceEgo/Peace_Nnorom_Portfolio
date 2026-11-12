import Button from "../components/Button";
import PortraitFrame from "../components/PortraitFrame";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero paper">
      <div className="hero__copy">
        <div className="hero__text">
          <h1 className="hero__title">Building complete digital solutions that solves real world problems.</h1>
          <p className="lead">
            I build end-to-end web applications, combining intuitive frontend experiences with reliable backend systems to deliver
            software that works for people and businesses.
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
