import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GithubLogo } from "../components/icons";
import { LANGUAGE_CONFIG } from "@/constants/languages";
import { ProjectCardProps } from "@/types/portfolio";
import { slugify } from "@/lib/utils";

export const ProjectCard = ({
  title,
  description,
  tags,
  mainLanguage,
  githubUrl,
  status,
}: ProjectCardProps) => {
  const lang = LANGUAGE_CONFIG[mainLanguage];

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
                data-track-id={`project-${slugify(title)}-github-link`}
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
