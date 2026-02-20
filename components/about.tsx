"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Code2, Brain } from "lucide-react";
import { GithubLogo } from "./icons";

export interface IAbout {
  aboutMeContent: string[];
  technicalStack: string[];
  softSkills: string[];
  showCvButton?: boolean;
}

const About = (props: { data: IAbout }) => {
  return (
    <section id="about" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            About Me
          </h2>
        </div>

        <div className="space-y-12">
          <div className="space-y-4 text-muted-foreground text-lg leading-relaxed text-justify">
            {props.data.aboutMeContent.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-foreground font-semibold">
                <Code2 className="size-5 text-primary" />
                <h3>Technical Stack</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {props.data.technicalStack.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="bg-primary/5 border-primary/20 rounded-md px-2 py-0 text-[11px]"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-foreground font-semibold">
                <Brain className="size-5 text-primary" />
                <h3>Soft Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {props.data.softSkills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="rounded-md px-2 py-0 text-[11px]"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button className="rounded-full px-6 shadow-none" asChild>
              <a
                href="https://github.com/SirCesarium"
                target="_blank"
                rel="noopener noreferrer"
                data-track-id="about-github-link"
              >
                <GithubLogo className="mr-2 h-4 w-4" />
                View Github
              </a>
            </Button>
            {props.data.showCvButton && (
              <Button
                variant="outline"
                className="rounded-full px-6 shadow-none"
                asChild
                data-track-id="about-cv-link"
              >
                <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 size-4" />
                  Download CV
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
