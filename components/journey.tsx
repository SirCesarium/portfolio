"use client";

import { Calendar } from "lucide-react";

interface JourneyItemProps {
  title: string;
  period: string;
  description: string;
}

const JourneyItem = ({ title, period, description }: JourneyItemProps) => {
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

const Journey = () => {
  const milestones: JourneyItemProps[] = [
    {
      title: "Framework Development & Developer Experience",
      period: "2025 - Present",
      description:
        "Building open-source frameworks to remove repetitive boilerplate and reduce cognitive overhead, based on friction I face daily as a backend developer.",
    },
    {
      title: "Architecture (Applied)",
      period: "2025",
      description:
        "Started introducing boundaries to improve testability. Developed a keen sense for balancing architecture with delivery speed, learning to identify when an abstraction adds value and when it's just over-engineering that slows down the deadline.",
    },
    {
      title: "Environment & Code Standards",
      period: "2024",
      description:
        "Adopted Docker and standard workflows to prevent environment inconsistencies and speed up development.",
    },
    {
      title: "Structured Systems & SQL",
      period: "2023 - 2024",
      description:
        "Stepped up to complex relational models and business rules, learning that messy data structures eventually break even the best logic.",
    },
    {
      title: "Technical Foundations",
      period: "2021 - 2022",
      description:
        "Started with JavaScript and TypeScript, building foundations using Firebase and NoSQL databases for rapid development, which eventually showed me why data consistency matters.",
    },
  ];

  return (
    <section id="journey" className="relative py-20 px-6 bg-background/50">
      <div className="max-w-screen-md mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Journey
          </h2>
        </div>

        <div className="relative mt-16">
          {milestones.map((milestone, index) => (
            <JourneyItem key={index} {...milestone} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
