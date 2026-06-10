"use client";

import { Github } from "@/components/icons/GitHub";
import { langColors } from "@/data/projects";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const langColor = langColors[project.lang] ?? "#ebdbb2";

  return (
    <div
      className="relative flex flex-col rounded-xl border border-text/10 bg-surface/50 p-6 transition duration-300 ease-out hover:scale-[1.02] hover:border-text/20"
      style={{ borderTopColor: langColor, borderTopWidth: 2 }}
    >
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-0 rounded-xl"
        aria-label={`${project.name} on GitHub`}
      />

      <div className="pointer-events-none relative z-10 flex flex-1 flex-col">
        <div>
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-xl font-bold text-text">{project.name}</h3>
            <span className="mt-1 size-4 shrink-0 text-text/40">
              <Github className="size-4" />
            </span>
          </div>

          <p className="mt-3 flex-1 text-base leading-relaxed text-text/80">
            {project.description}
          </p>
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-1 pt-4">
          <span
            className="rounded px-2 py-0.5 text-xs font-bold"
            style={{
              color: langColor,
              backgroundColor: `${langColor}18`,
            }}
          >
            {project.lang}
          </span>
          <span className="text-sm text-text/40">·</span>
          <span className="text-sm text-text/40">{project.org}</span>
          {project.demoUrl && (
            <div
              className="pointer-events-auto ml-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-primary/30 px-3 py-1.5 text-sm font-medium text-primary transition-all duration-200 hover:border-primary hover:bg-primary hover:text-surface hover:shadow-[0_0_12px] hover:shadow-primary/40"
              >
                <span className="icon text-base">open_in_new</span>
                Live
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
