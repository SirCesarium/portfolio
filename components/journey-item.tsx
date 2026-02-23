"use client";

import { JourneyItemProps } from "@/types/portfolio";
import { Calendar } from "lucide-react";

export const JourneyItem = ({
  title,
  period,
  description,
}: JourneyItemProps) => {
  return (
    <div className="relative pl-8 pb-12 last:pb-0">
      <div className="absolute left-0 top-1.5 h-full w-[1px] bg-border last:h-0">
        <div className="absolute h-2 w-2 -left-[4.5px] top-0 rounded-full bg-primary" />
      </div>

      <div className="space-y-3">
        <div>
          <h3 className="text-xl font-bold tracking-tight">{title}</h3>
          <div className="flex items-center gap-2 mt-1 text-muted-foreground text-sm">
            <Calendar className="size-3.5" />
            <span>{period}</span>
          </div>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">
          {description}
        </p>
      </div>
    </div>
  );
};
