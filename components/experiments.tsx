"use client";

import { Badge } from "@/components/ui/badge";
import { GithubLogo } from "./icons";
import { GitFork, GitMerge, Wrench, ArrowUpRight } from "lucide-react";

type Language = "Java" | "TypeScript" | "JavaScript" | "Python";

const languageConfig: Record<Language, { label: string; colorClass: string }> =
  {
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
    JavaScript: {
      label: "JavaScript",
      colorClass:
        "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20",
    },
    Python: {
      label: "Python",
      colorClass:
        "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20",
    },
  };

export interface ExperimentCardProps {
  title: string;
  description: string;
  mainLanguage: Language;
  githubUrl?: string;
  type: "fork" | "merged" | "tool";
}

const Experiment = ({
  title,
  description,
  mainLanguage,
  githubUrl,
  type,
}: ExperimentCardProps) => {
  const lang = languageConfig[mainLanguage];

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
      data-track-id={`experiment-${title.toLowerCase().replace(/\s+/g, "-")}-link`}
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

      <p className="text-muted-foreground text-sm line-clamp-3 italic">
        {description}
      </p>

      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <ArrowUpRight className="h-3 w-3 text-primary" />
      </div>
    </a>
  );
};

const Experiments = (props: { experimentsList: ExperimentCardProps[] }) => {

  return (
    <section id="experiments" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Experiments & Contributions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {props.experimentsList.map((exp, index) => (
            <Experiment key={index} {...exp} />
          ))}

          {/* <a
            href="/blog?ref=portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col items-center justify-center p-5 rounded-xl border border-dashed border-primary/20 hover:border-primary/60 transition-all bg-primary/5 hover:bg-primary/10 text-center"
            data-track-id="experiments-read-more-link"
          >
            <div className="mb-2 p-2 rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform">
              <ArrowUpRight className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-primary">Read More</h3>
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default Experiments;
