"use client";

import { Button } from "@/components/ui/button";
import { Download, Code2, Brain } from "lucide-react";
import { GithubLogo } from "../components/icons";
import { SkillGroup } from "@/components/skill-group";
import { IAbout } from "@/types/portfolio";
import { SectionLayout } from "@/components/section-layout";
import { SOCIAL_LINKS } from "@/constants/links";

const About = ({ data }: { data: IAbout }) => {
  return (
    <SectionLayout id="about" title="About Me">
      <div className="space-y-12">
        <div className="space-y-4 text-muted-foreground text-lg leading-relaxed text-justify">
          {data.aboutMeContent.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SkillGroup
            title="Technical Stack"
            skills={data.technicalStack}
            Icon={Code2}
          />
          <SkillGroup
            title="Soft Skills"
            skills={data.softSkills}
            Icon={Brain}
            variant="secondary"
          />
        </div>

        <div className="flex flex-wrap gap-4 justify-center pt-4">
          <Button className="rounded-full px-6 shadow-none" asChild>
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              data-track-id="about-github-link"
            >
              <GithubLogo className="mr-2 h-4 w-4" />
              View Github
            </a>
          </Button>

          {data.showCvButton && (
            <Button
              variant="outline"
              className="rounded-full px-6 shadow-none"
              asChild
            >
              <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 size-4" />
                Download CV
              </a>
            </Button>
          )}
        </div>
      </div>
    </SectionLayout>
  );
};

export default About;
