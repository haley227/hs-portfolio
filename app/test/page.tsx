import About from "../components/About";
import { StarsCanvas } from "../components/canvas";
import Experience from "../components/Experience";
import Feedbacks from "../components/Feedbacks";
import Tech from "../components/Tech";
import Hero from "../components/ThreeDHero/ThreeDHero";
import Works from "../components/Works";

export default function Home() {
  return (
    <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <StarsCanvas />
        </div>
      </div>
  );
}
