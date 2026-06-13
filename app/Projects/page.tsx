import Link from "next/link";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/data";

const Projects = () => {
  return (
    <section className="flex w-full max-w-6xl flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold leading-tight tracking-tighter sm:text-3xl md:text-4xl lg:leading-[1.1]">
          Projects
        </h1>
        <p className="max-w-3xl text-lg font-light text-foreground">
          A few projects I&apos;ve worked on — mostly full-stack apps built around
          real, practical use cases.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="flex my-10 justify-between">
        <Link className="hover:opacity-70 transition" href="/">
          ← Introduction
        </Link>
        <a className="hover:opacity-70 transition" href="./Skills">
          Skills & Tools →
        </a>
      </div>
    </section>
  );
};

export default Projects;
