import Button from "@/components/Button";
import { Github } from "@/components/icons/GitHub";
import NavigationDrawer from "@/components/NavigationDrawer";
import Typography from "@/components/Typography";

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
        <div className="hero-spotlight hero-spotlight--primary" />
        <div className="hero-spotlight hero-spotlight--secondary" />
        <div className="relative z-10">
          <Typography variant="h1">Cesar Marcano</Typography>

          <Typography variant="lead" className="mt-4">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
          </Typography>

          <Typography variant="body" className="mt-6 max-w-2xl text-text/70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            auctor, nulla non vehicula suscipit, purus nunc.
          </Typography>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="#" icon={<Github />}>
              GITHUB
            </Button>
            <Button
              variant="outline"
              href="#"
              icon={<span className="icon">message</span>}
            >
              CONTACT
            </Button>
          </div>
        </div>
      </header>

      <section id="a" className="flex w-full max-w-4xl py-32">
        <Typography variant="h2">Projects</Typography>
        <div className="h-screen" />
      </section>

      <section id="b" className="flex w-full max-w-4xl py-32">
        <Typography variant="h2">Contact</Typography>
        <div className="h-screen" />
      </section>

      <section id="c" className="flex w-full max-w-4xl py-32">
        <Typography variant="h2">Settings</Typography>
        <div className="h-screen" />
      </section>
    </main>
  );
}
