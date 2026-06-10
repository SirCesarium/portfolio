import Button from "@/components/Button";
import { Github } from "@/components/icons/GitHub";
import NavigationDrawer from "@/components/NavigationDrawer";
import Section from "@/components/Section";
import Typography from "@/components/Typography";
import Underline from "@/components/Underline";

const navItems = [
  { icon: "home", label: "Home", href: "#home" },
  { icon: "code", label: "Projects", href: "#a" },
  { icon: "mail", label: "Contact", href: "#b" },
  { icon: "settings", label: "Settings", href: "#c" },
];

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center px-6 sm:px-16">
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

      <Section id="a" title="Projects" icon="code">
        <div className="h-screen" />
      </Section>

      <Section id="b" title="Contact" icon="mail">
        <div className="h-screen" />
      </Section>

      <Section id="c" title="Settings" icon="settings">
        <div className="h-screen" />
      </Section>
    </main>
  );
}
