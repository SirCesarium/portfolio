"use client";

import { Experiment } from "@/components/experiment";
import { SectionLayout } from "@/components/section-layout";
import { ExperimentCardProps } from "@/types/portfolio";
import { ArrowUpRight } from "lucide-react";

const Experiments = (props: {
  experimentsList: ExperimentCardProps[];
  readMoreLink?: boolean;
}) => {
  return (
    <SectionLayout id="experiments" title="Experiments & Contributions">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {props.experimentsList.map((exp, index) => (
          <Experiment key={index} {...exp} />
        ))}

        {props.readMoreLink && (
          <a
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
          </a>
        )}
      </div>
    </SectionLayout>
  );
};

export default Experiments;
