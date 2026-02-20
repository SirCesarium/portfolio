import About, { IAbout } from "@/components/about";
import Journey from "@/components/journey";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Experiments, { ExperimentCardProps } from "@/components/experiments";
import Contact from "@/components/contact";

const aboutData: IAbout = {
  aboutMeContent: [
    `Hi there! I&apos;m Cesar, a backend web developer. I build
decoupled, testable and predictable systems. I choose tools based
on the problem, not trends; I prioritize data integrity and
maintainable API flows balancing technical quality with the speed
required to hit production deadlines.`,
    `I value clarity over unnecessary complexity. My goal is writing
pragmatic solutions that avoid over-engineering while remaining
easy to extend. I also contribute to the open-source ecosystem by
building tools to solve problems that I face daily, to improve
software quality keeping in mind the developer experience.`,
  ],
  technicalStack: [
    "TypeScript",
    "NodeJS",
    "NestJS",
    "Jest",
    "Docker",
    "MongoDB",
    "Redis",
    "PostgreSQL",
    "Java",
    "Tooling & Scripting",
  ],
  softSkills: [
    "Critical Thinking",
    "Teamwork",
    "Attention to Detail",
    "Pragmatic Delivery & Rapid Prototyping",
    "Self-Directed Learner",
  ],
};

const experimentsList: ExperimentCardProps[] = [
  {
    title: "Lychee (Contribution)",
    description:
      "Contributed a persistence fix to a widely adopted Minecraft mod, submitting a merged PR after navigating an established production codebase.",
    mainLanguage: "Java",
    githubUrl: "https://github.com/Snownee/Lychee/pull/131",
    type: "merged",
  },
  {
    title: "Cache Proxy CLI",
    description:
      "Lightweight and configurable proxy cache server built with Express.JS and Redis for local testing.",
    mainLanguage: "TypeScript",
    githubUrl: "https://github.com/SirCesarium/CacheProxy-CLI",
    type: "tool",
  },
  {
    title: "RYD Refined (Fork)",
    description:
      "Refined version of the Return YouTube Dislike extension, removing adware and bloatware.",
    mainLanguage: "JavaScript",
    githubUrl: "https://github.com/SirCesarium/return-youtube-dislike-refined",
    type: "fork",
  },
];

export default function Home() {
  return (
    <div className="space-y-10 sm:space-y-16">
      <Hero />
      <About data={aboutData} />
      <Journey />
      <Projects />
      <Experiments experimentsList={experimentsList} />
      <Contact />
    </div>
  );
}
