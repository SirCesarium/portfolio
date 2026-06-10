import Button from "@/components/Button";
import EcosystemCard from "@/components/EcosystemCard";
import { Github } from "@/components/icons/GitHub";
import NavigationDrawer from "@/components/NavigationDrawer";
import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/Section";
import Typography from "@/components/Typography";
import Underline from "@/components/Underline";
import WakeUp from "@/components/WakeUp";
import { conduitEcosystem, featuredProjects } from "@/data/projects";

const navItems = [
  { icon: "home", label: "Home", href: "#home" },
  { icon: "code", label: "Projects", href: "#projects" },
  { icon: "mail", label: "Contact", href: "#contact" },
];

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center px-6 sm:px-16">
      {/* WakeUp pings demo URLs (Render free-tier) to prevent cold-start delay */}
      <WakeUp />
      <NavigationDrawer items={navItems} />
      <header
        id="home"
        className="relative flex w-full h-screen flex-col items-center justify-center"
      >
        <div className="hero-grid pointer-events-none absolute inset-0" />
        <div className="hero-spotlight hero-spotlight--primary hidden sm:block" />
        <div className="hero-spotlight hero-spotlight--secondary hidden sm:block" />
        <div className="relative z-10">
          <Typography variant="h1">Cesar Marcano</Typography>

          <Typography variant="lead" className="mt-4">
            Software Engineer & Tooling Developer
          </Typography>

          <Typography variant="body" className="mt-6 max-w-xl text-text/70">
            Building CLI tools, network infrastructure, and the{" "}
            <Underline>low-level ecosystems</Underline> that power modern
            servers and development workflows.
          </Typography>

          <div className="mt-10 flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:justify-end">
            <Button href="#" className="w-full sm:w-auto" icon={<Github />}>
              GITHUB
            </Button>
            <Button
              variant="outline"
              className="w-full sm:w-auto"
              href="#"
              icon={<span className="icon">message</span>}
            >
              CONTACT
            </Button>
          </div>
        </div>
      </header>

      <Section id="projects" title="Projects" icon="code">
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
          {featuredProjects.slice(0, 2).map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} />
          ))}

          {featuredProjects.slice(2, 4).map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i + 2} />
          ))}

          <div className="sm:col-span-2">
            <EcosystemCard ecosystem={conduitEcosystem} index={4} />
          </div>

          {featuredProjects.slice(4).map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i + 5} />
          ))}
        </div>
      </Section>

      <Section id="contact" title="Contact" icon="mail">
        <div className="h-screen" />
      </Section>
    </main>
  );
}
