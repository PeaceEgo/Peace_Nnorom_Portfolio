import PortraitFrame from "../components/PortraitFrame";
import TornBand from "../components/TornBand";
import "./About.css";

const life = [
  { src: "/assets/life-1.png", w: 173.968, alt: "Movie night with popcorn" },
  { src: "/assets/life-2.png", w: 173.032, alt: "A finished hairstyle" },
  { src: "/assets/life-3.png", w: 173.032, alt: "Reading beside a laptop" },
  { src: "/assets/life-4.png", w: 173.968, alt: "Working outdoors", dim: true },
];

export default function About() {
  return (
    <>
      <div className="paper about__top">
        <TornBand image="/assets/torn-about.png" height={703} bandHeight={734} offsetTop={-31} bleedY="2.72%">
          <div className="about-hero">
            <div className="about-hero__copy">
              <h1 className="h1 about-hero__title">ABOUT ME</h1>
              <div className="about-hero__text">
                <p>
                I'm a Software Engineer with 3+ years of experience building and shipping web applications that solve practical business problems. My work spans frontend development, backend engineering, API integrations, and the architecture that connects these pieces into functional products.
                </p>
                <p>
                I've worked on everything from customer-facing applications and financial platforms to internal business tools and management systems. I enjoy taking ideas beyond the interface, understanding how different parts of a product work together, and building solutions that are both useful to their users and practical for the businesses behind them.
                </p>
                <p>
                What drives me is the opportunity to turn complex requirements into simple, purposeful experiences. I care about writing maintainable code, making thoughtful technical decisions, and building software that can evolve as the needs of a product grow.
                </p>
              </div>
            </div>
            <PortraitFrame />
          </div>
        </TornBand>

        <section className="about-block">
          <img className="about-block__deco" style={{ left: 100, top: 60 }} src="/assets/spark-orange.svg" alt="" />
          <div className="about-block__inner">
            <h2 className="h2 about-block__title">More than just writing code.</h2>
            <div className="about-block__text">
              <p>
              I believe good engineering begins long before the first line of code is written. It starts with understanding the problem, asking the right questions, and figuring out what a successful solution should look like.
              </p>
              <p>
              I enjoy working across the different layers of a product, connecting user experiences with the systems, data, and integrations that power them. Whether I'm building an interface, developing an API, or improving an existing workflow, I think about how every decision contributes to the bigger picture.
              </p>
              <p>I'm also intentional about how I work. I value clear communication, collaborative problem-solving, clean architecture, and solutions that are practical to build and maintain.</p>
              <p>For me, the real satisfaction isn't just getting something to work. It's building something that works well, serves its purpose, and gives people a reason to keep using it.</p>
            </div>
          </div>
          <img className="about-block__deco" style={{ left: 1260, top: 423 }} src="/assets/spark-green.svg" alt="" />
        </section>
      </div>

      <div className="paper">
        <section className="about-block">
          <img className="about-block__deco" style={{ left: 100, top: 40 }} src="/assets/spark-green-2.svg" alt="" />
          <div className="about-block__inner">
            <h2 className="h2 about-block__title">Experience &amp; What I Bring</h2>
            <div className="about-block__text">
              <p>
                With over 3 years of professional experience, I’ve developed and maintained customer-facing applications and internal
                business platforms using React and Next.js. I bring a practical approach to building scalable frontend solutions,
                integrating APIs and third-party services, and collaborating with cross-functional teams to deliver reliable products.
              </p>
              <p>
                I focus on writing maintainable code, improving performance and user experience, and supporting products throughout
                deployment, maintenance, and continuous improvement.
              </p>
            </div>
          </div>
          <img className="about-block__deco" style={{ left: 1260, top: 389 }} src="/assets/spark-orange-2.svg" alt="" />
        </section>

        <section className="beyond">
          <div className="beyond__board">
            <span className="beyond__clip">
              <img src="/assets/clip.svg" alt="" />
            </span>
            <div className="beyond__photos">
              {life.map((photo) => (
                <div key={photo.src} className={`beyond__photo ${photo.dim ? "is-dim" : ""}`} style={{ width: photo.w }}>
                  <img src={photo.src} alt={photo.alt} />
                </div>
              ))}
            </div>
          </div>

          <div className="beyond__copy">
            <h2 className="h2 beyond__title">Beyond the Code</h2>
            <div className="beyond__text">
              <p>Life outside development gives me room to explore other interests and see things from different perspectives.</p>
              <p>
                I'm also into hairstyling, which gives me a creative outlet beyond technology. In my free time, I enjoy reading
                articles that introduce me to new ideas and perspectives, as well as watching movies to unwind and enjoy a good story.
              </p>
              <p>These interests are a reminder that there's more to me than the code I write.</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
