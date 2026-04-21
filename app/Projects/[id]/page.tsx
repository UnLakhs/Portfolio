import { projects } from "@/app/data/data";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type ProjectPageProps = {
  params: Promise<{
    id: string;
  }>;
};

const statusLabels = {
  live: "Live",
  paused: "Demo paused",
  restricted: "Restricted access",
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projects.find((item) => item.id === id);

  if (!project) {
    notFound();
  }

  return (
    <section className="w-full max-w-5xl space-y-10">
      <Link
        href="/Projects"
        className="inline-flex text-sm text-foreground/70 transition hover:text-foreground"
      >
        ← Back to Projects
      </Link>

      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {project.title}
          </h1>

          {project.status && (
            <span className="rounded-full border border-foreground/10 px-3 py-1 text-xs text-foreground/70">
              {statusLabels[project.status]}
            </span>
          )}
        </div>

        <p className="max-w-3xl text-lg font-light leading-8 text-foreground/85">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-foreground/10 px-3 py-1 text-sm text-foreground/80"
            >
              {item}
            </span>
          ))}
        </div>

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition hover:opacity-85"
          >
            View GitHub Repository
          </a>
        )}
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Screenshots</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {project.images.map((image, index) => (
            <div
              key={image}
              className="relative aspect-16/10 overflow-hidden rounded-xl border border-foreground/10"
            >
              <Image
                src={image}
                alt={`${project.title} screenshot ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      {project.features && project.features.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">Features</h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="rounded-xl border border-foreground/10 p-4 text-sm leading-6 text-foreground/80"
              >
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}
      {project.projectNotes && (
        <div className="space-y-3 rounded-2xl border border-foreground/10 p-5">
          <h2 className="text-xl font-semibold tracking-tight">
            Project Notes
          </h2>
          <p className="leading-7 text-foreground/80">{project.projectNotes}</p>
        </div>
      )}
    </section>
  );
}
