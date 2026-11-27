import Image from "next/image";
import { ArrowUpRight, ChevronDown } from "lucide-react";

import { projects } from "@/data/projects";
import type { Project } from "@/data/types";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ExternalLink } from "@/components/external-link";
import { GitHubIcon } from "@/components/icons";
import { Section } from "@/components/section";
import { AlsoBuilt } from "@/components/sections/also-built";

function ProjectDetails({ project }: { project: Project }) {
  return (
    <div className="flex flex-col gap-3">
      <div>
        <h4 className="font-medium">My role</h4>
        <p className="mt-1 text-muted-foreground">{project.role}</p>
      </div>
      <ul className="flex flex-wrap gap-1.5" aria-label={`${project.title} tech stack`}>
        {project.stack.map((tech) => (
          <li key={tech}>
            <Badge>{tech}</Badge>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const { live, github } = project.links;
  return (
    <Card className="flex h-full flex-col overflow-hidden transition-shadow hover:shadow-md">
      <Image
        src={project.image.src}
        alt={project.image.alt}
        width={project.image.width}
        height={project.image.height}
        sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw"
        className="aspect-[16/10] w-full border-b bg-muted object-cover"
      />
      <CardHeader className="gap-1.5 pb-4">
        <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
        <p className="text-sm text-muted-foreground">{project.summary}</p>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-4 text-sm">
        <p className="rounded-lg bg-accent/70 px-3 py-2.5 font-medium text-foreground">
          <span className="sr-only">Result: </span>
          {project.result}
        </p>

        {/* Phones: role and stack tucked behind a native toggle to keep cards short. */}
        <details className="group mt-auto sm:hidden">
          <summary className="flex cursor-pointer list-none items-center justify-between rounded-md py-1 font-medium text-foreground [&::-webkit-details-marker]:hidden">
            Details: role & stack
            <ChevronDown
              className="size-4 text-muted-foreground transition-transform group-open:rotate-180"
              aria-hidden="true"
            />
          </summary>
          <div className="pt-3">
            <ProjectDetails project={project} />
          </div>
        </details>

        {/* Larger screens: always visible. */}
        <div className="mt-auto hidden sm:block">
          <ProjectDetails project={project} />
        </div>
      </CardContent>
      {live || github ? (
        <CardFooter className="gap-4 border-t pt-4 text-sm font-medium">
          {live ? (
            <ExternalLink
              href={live}
              className="inline-flex items-center gap-1 text-primary hover:underline"
            >
              Live site<span className="sr-only">: {project.title}</span>
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </ExternalLink>
          ) : null}
          {github ? (
            <ExternalLink
              href={github}
              className="inline-flex items-center gap-1.5 text-foreground hover:text-primary"
            >
              <GitHubIcon className="size-4" />
              {project.links.githubLabel ?? "Code"}
              <span className="sr-only">: {project.title} on GitHub</span>
            </ExternalLink>
          ) : null}
        </CardFooter>
      ) : null}
    </Card>
  );
}

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Work"
      title="Featured projects"
      description="Selected work across web apps, AI and data."
    >
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <li key={project.slug}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
      <AlsoBuilt />
    </Section>
  );
}
