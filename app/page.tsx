import About from "@/components/about";
import Journey from "@/components/journey";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Experiments from "@/components/experiments";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div className="space-y-10 sm:space-y-16">
      <Hero />
      <About />
      <Journey />
      <Projects />
      <Experiments />
      <Contact />
    </div>
  );
}
