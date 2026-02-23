"use client";

import { JourneyItem } from "@/components/journey-item";
import { SectionLayout } from "@/components/section-layout";
import { JourneyItemProps } from "@/types/portfolio";

const Journey = (props: { milestones: JourneyItemProps[] }) => {
  return (
    <SectionLayout id="journey" title="Journey">
      <div className="relative mt-16">
        {props.milestones.map((milestone, index) => (
          <JourneyItem key={index} {...milestone} />
        ))}
      </div>
    </SectionLayout>
  );
};

export default Journey;
