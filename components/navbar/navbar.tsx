import { Button } from "@/components/ui/button";
import { GithubLogo } from "../icons";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";

const Navbar = () => {
  return (
    <nav
      className="fixed z-10 top-6 inset-x-4 h-14 bg-background border dark:border-slate-700/70 max-w-screen-md mx-auto rounded-full"
      aria-label="Main navigation"
    >
      <div className="h-full flex items-center justify-between mx-auto px-3">
        <span className="font-semibold tracking-tight">Cesar Marcano</span>

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            aria-label="GitHub Profile"
            className="rounded-full shadow-none"
            size="icon"
            asChild
          >
            <a
              href="https://github.com/SirCesarium"
              target="_blank"
              rel="noopener noreferrer"
              data-track-id="navbar-github-link"
            >
              <GithubLogo className="h-5 w-5" />
            </a>
          </Button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
