import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GithubLogo } from "./icons";

const languageConfig: Record<string, { label: string; colorClass: string }> = {
  Java: {
    label: "Java",
    colorClass:
      "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20",
  },
  TypeScript: {
    label: "TypeScript",
    colorClass:
      "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  },
  Rust: {
    label: "Rust",
    colorClass:
      "bg-orange-700/10 text-orange-700 dark:text-orange-500 border-orange-700/20",
  },
  Python: {
    label: "Python",
    colorClass:
      "bg-yellow-500/10 text-yellow-700 dark:text-yellow-500 border-yellow-500/20",
  },
};

type Language = keyof typeof languageConfig;

export interface ProjectCardProps {
  title: string;
  description: string[];
  tags: string[];
  mainLanguage: Language;
  githubUrl?: string;
  status?: string;
}

const ProjectCard = ({
  title,
  description,
  tags,
  mainLanguage,
  githubUrl,
  status,
}: ProjectCardProps) => {
  const lang = languageConfig[mainLanguage];

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-accent bg-card transition-all hover:border-primary/50 hover:shadow-lg">
      <div className="flex-1 flex flex-col p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <Badge
              className={`mb-2 rounded-md border shadow-none font-mono text-[10px] ${lang.colorClass}`}
            >
              {lang.label}
            </Badge>
            <h3 className="text-xl font-bold tracking-tight">{title}</h3>
          </div>
          {status && (
            <Badge
              variant="outline"
              className="text-[9px] uppercase tracking-wider opacity-70"
            >
              {status}
            </Badge>
          )}
        </div>

        <ul className="text-muted-foreground mb-6 text-sm leading-relaxed list-disc pl-4 space-y-1">
          {description.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="rounded-md px-2 py-0 text-[11px]"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex gap-3 mt-auto">
          {githubUrl && (
            <Button
              variant="default"
              className="rounded-full w-full shadow-none group"
              asChild
            >
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-track-id={`project-${title.toLowerCase().replace(/\s+/g, "-")}-github-link`}
              >
                <GithubLogo className="mr-2 h-4 w-4" />
                View Source
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = (props: { projects: ProjectCardProps[] }) => {
  return (
    <section id="projects" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {props.projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
