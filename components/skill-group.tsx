"use client";

import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

export const SkillGroup = ({
  title,
  skills,
  Icon,
  variant = "outline",
}: {
  title: string;
  skills: string[];
  Icon: LucideIcon;
  variant?: "outline" | "secondary";
}) => (
  <div className="space-y-4">
    <div className="flex items-center gap-2 text-foreground font-semibold">
      <Icon className="size-5 text-primary" />
      <h3>{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <Badge
          key={skill}
          variant={variant}
          className={`rounded-md px-2 py-0 text-[11px] ${
            variant === "outline" ? "bg-primary/5 border-primary/20" : ""
          }`}
        >
          {skill}
        </Badge>
      ))}
    </div>
  </div>
);
