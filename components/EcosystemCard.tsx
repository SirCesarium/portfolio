"use client";

import { Github } from "@/components/icons/GitHub";
import { langColors } from "@/data/projects";
import type { EcosystemGroup } from "@/data/projects";

type EcosystemCardProps = {
  ecosystem: EcosystemGroup;
  index: number;
};

export default function EcosystemCard({
  ecosystem,
  index,
}: EcosystemCardProps) {
  const langColor = langColors[ecosystem.projects[0]?.lang] ?? "#ebdbb2";

  return (
    <div
      className="rounded-xl border border-text/10 bg-surface/50 p-6 transition duration-300 ease-out hover:border-text/20"
      style={{ borderTopColor: langColor, borderTopWidth: 2 }}
    >
      <h3 className="text-xl font-bold text-text">{ecosystem.name}</h3>
      <p className="mt-1 text-base leading-relaxed text-text/70">
        {ecosystem.description}
      </p>

      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {ecosystem.projects.map((sub) => {
          const subLangColor = langColors[sub.lang] ?? "#ebdbb2";
          return (
            <a
              key={sub.name}
              href={sub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col rounded-lg border border-text/10 bg-surface/40 px-5 py-4 transition-all duration-300 ease-out hover:scale-[1.02] hover:border-text/20 hover:bg-text/[0.02]"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="text-base font-semibold text-text/90">
                  {sub.name}
                </span>
                <Github className="mt-0.5 size-4 shrink-0 text-text/30" />
              </div>
              <p className="mt-2 flex-1 text-sm leading-snug text-text/50">
                {sub.description}
              </p>
              <span
                className="mt-3 self-start rounded px-1.5 py-0.5 text-[0.65rem] font-bold"
                style={{
                  color: subLangColor,
                  backgroundColor: `${subLangColor}18`,
                }}
              >
                {sub.lang}
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
