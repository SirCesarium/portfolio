import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { GithubLogo } from "../components/icons";
import { SOCIAL_LINKS } from "@/constants/links";

const Footer = () => {
  return (
    <footer className="mt-20" aria-label="Footer">
      <div className="max-w-screen-md mx-auto">
        <Separator />

        <div className="py-6 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
          <div>
            {/* Copyright */}
            <span className="text-muted-foreground text-sm block">
              &copy; {new Date().getFullYear()} Cesar Marcano. All rights
              reserved.
            </span>

            {/* Privacy notice */}
            <span className="text-muted-foreground/60 mt-1 max-w-[450px] leading-relaxed text-sm block">
              <span className="text-muted-foreground/70 text-sm block">
                This website uses anonymous analytics to improve user
                experience.
              </span>
              <span className="text-muted-foreground/70 text-sm block">
                No personal data is collected.
              </span>
            </span>
          </div>

          <div className="flex items-center gap-5 text-muted-foreground">
            <Link
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              data-track-id="footer-github-link"
            >
              <GithubLogo className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
