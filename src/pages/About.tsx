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
                  I'm a Full-Stack Developer with over 3 years of professional experience building and shipping web applications
                  that solve real problems. My work spans frontend interfaces, backend systems, API integrations, and the services
                  that bring digital products together.
                </p>
                <p>
                  Over time, I've learned that good software development is about more than writing code. It's about understanding
                  the problem, considering the people who will use the product, and finding practical ways to turn ideas into
                  reliable solutions.
                </p>
                <p>
                  My goal is to create software that works well today, remains maintainable as it grows, and delivers meaningful
                  value to the people and businesses behind it.
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
                I approach development with curiosity, structure, and a focus on solving the right problems. I believe the best
                technical solution isn't necessarily the most complicated one, it's the one that meets the need effectively while
                remaining reliable, maintainable, and practical.
              </p>
              <p>
                I value clear communication, thoughtful technical decisions, and collaboration throughout the development process. By
                understanding both user needs and business objectives, I aim to build applications that are not only functional but
                also make sense in the real world.
              </p>
              <p>For me, every project is an opportunity to learn, improve, and deliver something useful.</p>
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
