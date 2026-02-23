import About from "@/screens/about";
import Journey from "@/screens/journey";
import Hero from "@/screens/hero";
import Projects from "@/screens/projects";
import Experiments from "@/screens/experiments";
import Contact from "@/screens/contact";
import { ExperimentCardProps, IAbout, JourneyItemProps, ProjectCardProps } from "@/types/portfolio";

const aboutData: IAbout = {
  aboutMeContent: [
    `Hi there! I'm Cesar, a backend web developer. I build
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

const milestones: JourneyItemProps[] = [
  {
    title: "Framework Development & Developer Experience",
    period: "2025 - Present",
    description:
      "Building open-source frameworks to remove repetitive boilerplate and reduce cognitive overhead, based on friction I face daily as a backend developer.",
  },
  {
    title: "Architecture (Applied)",
    period: "2025",
    description:
      "Started introducing boundaries to improve testability. Developed a keen sense for balancing architecture with delivery speed, learning to identify when an abstraction adds value and when it's just over-engineering that slows down the deadline.",
  },
  {
    title: "Environment & Code Standards",
    period: "2024",
    description:
      "Adopted Docker and standard workflows to prevent environment inconsistencies and speed up development.",
  },
  {
    title: "Structured Systems & SQL",
    period: "2023 - 2024",
    description:
      "Stepped up to complex relational models and business rules, learning that messy data structures eventually break even the best logic.",
  },
  {
    title: "Technical Foundations",
    period: "2021 - 2022",
    description:
      "Started with JavaScript and TypeScript, building foundations using Firebase and NoSQL databases for rapid development, which eventually showed me why data consistency matters.",
  },
];

const projects: ProjectCardProps[] = [
  {
    title: "Beacon Framework",
    description: [
      "Boilerplate reduction for Minecraft modding via declarative annotations.",
      "Metaprogramming via Java Reflection implementation for automated registry injection.",
      "Designed with incremental adoption and DX-first principles, avoiding vendor lock-in.",
    ],
    tags: [
      "Annotation-Driven",
      "Reflection",
      "NeoForge",
      "Dev Tools",
      "Meta-Programming",
    ],
    mainLanguage: "Java",
    githubUrl: "https://github.com/SirCesarium/Beacon-Core",
    status: "Alpha / Active",
  },
  {
    title: "Scholar Balance API",
    description: [
      "Automated accounting engine for school fee and discount management.",
      "Designed with explicit domain rules and validation to ensure data integrity.",
      "Explicit audit logs to make financial operations traceable.",
    ],
    mainLanguage: "TypeScript",
    tags: ["Node.js", "InversifyJS", "Prisma", "PostgreSQL", "Zod"],
    githubUrl: "https://github.com/SirCesarium/scholar-balance-api",
  },
  {
    title: "Web Alias",
    description: [
      "URL shortener with Redis-backed analytics and subscription support.",
      "Centralized payment integration via PayPal SDK.",
      "Secure subscription lifecycle with JWT rotation.",
    ],
    mainLanguage: "TypeScript",
    tags: ["Clean Architecture", "Redis", "PayPal SDK", "JWT Rotation"],
    githubUrl: "https://github.com/SirCesarium/WebAlias",
  },
  {
    title: "Social Core API",
    description: [
      "Modular GraphQL API managing complex relational social graphs.",
      "Granular security layer with custom Helmet CSP and JWT refresh logic.",
      "Decoupled business logic for posts, comments, and polymorphic reactions.",
    ],
    mainLanguage: "TypeScript",
    tags: ["NestJS", "GraphQL", "Apollo", "MongoDB", "Security"],
    githubUrl: "https://github.com/SirCesarium/Social-Core-API",
  },
];

export default function Home() {
  return (
    <div className="space-y-10 sm:space-y-16">
      <Hero />
      <About data={aboutData} />
      <Journey milestones={milestones} />
      <Projects projects={projects} />
      <Experiments experimentsList={experimentsList} />
      <Contact />
    </div>
  );
}
