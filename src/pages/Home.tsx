import Hero from "../sections/Hero";
import Skills from "../sections/Skills";
import SelectedWork from "../sections/SelectedWork";
import Approach from "../sections/Approach";
import Testimonials from "../sections/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="paper home__middle">
        <Skills />
        <SelectedWork />
      </div>
      <Approach />
      <Testimonials />
    </>
  );
}
