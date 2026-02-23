import { LANGUAGE_CONFIG } from "@/constants/languages";
import { ExperimentCardProps } from "@/types/portfolio";
import { ArrowUpRight, GitFork, GitMerge, Wrench } from "lucide-react";
import { Badge } from "./ui/badge";
import { GithubLogo } from "./icons";
import { slugify } from "@/lib/utils";

export const Experiment = ({
  title,
  description,
  mainLanguage,
  githubUrl,
  type,
}: ExperimentCardProps) => {
  const lang = LANGUAGE_CONFIG[mainLanguage];

  const Icon = {
    fork: GitFork,
    merged: GitMerge,
    tool: Wrench,
  }[type];

  return (
    <a
      href={githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col p-5 rounded-xl border border-dashed border-accent hover:border-primary/40 hover:bg-primary/[0.02] transition-all bg-card/30"
      data-track-id={`experiment-${slugify(title)}-link`}
      aria-label={`Open GitHub repository for ${title}`}
      title={`View ${title} on GitHub`}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <Badge
              variant="outline"
              className={`text-[9px] uppercase font-mono bg-transparent ${lang.colorClass}`}
            >
              {lang.label}
            </Badge>
            <Icon className="h-3.5 w-3.5 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
            {title}
          </h3>
        </div>
        {githubUrl && (
          <div className="text-muted-foreground group-hover:text-primary transition-colors">
            <GithubLogo className="h-5 w-5" />
          </div>
        )}
      </div>

      <p className="text-muted-foreground text-sm line-clamp-4 italic">
        {description}
      </p>

      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <ArrowUpRight className="h-3 w-3 text-primary" />
      </div>
    </a>
  );
};
