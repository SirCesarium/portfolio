import { ProjectCard } from "@/components/project-card";
import { SectionLayout } from "@/components/section-layout";
import { ProjectCardProps } from "@/types/portfolio";

const Projects = ({ projects }: { projects: ProjectCardProps[] }) => {
  return (
    <SectionLayout id="projects" title="Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </SectionLayout>
  );
};

export default Projects;
