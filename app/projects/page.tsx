import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import projectsData from "@/data/projects-data";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Projects",
  description:
    "Cloud engineering, full-stack development, AI, and machine learning projects by Juanito M. Ramos II.",
};

export default function ProjectsPage() {
  const { projects } = projectsData;
  const cloudProjects = projects.filter(
    (project) => project.category === "cloud",
  );
  const softwareAiProjects = projects.filter(
    (project) => project.category === "software-ai",
  );

  const renderProjects = (items: typeof projects) => (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((project) => (
        <Card
          key={project.id}
          className="overflow-hidden flex flex-col bg-zinc-900/50 border-zinc-800/50"
        >
          <div className="aspect-video w-full overflow-hidden bg-zinc-900">
            {project.image ? (
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={500}
                height={300}
                className="object-cover w-full h-full"
              />
            ) : (
              <PlaceholderImage
                type="project"
                title={project.title}
                className="w-full h-full"
              />
            )}
          </div>
          <CardContent className="flex flex-col flex-grow p-6">
            <h2 className="text-xl font-bold mb-2">{project.title}</h2>
            <p className="text-zinc-400 mb-4 flex-grow">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-zinc-800 text-zinc-300 rounded-full px-3 py-1 text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-2 mt-auto">
              {project.demo && (
                <Link
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="default"
                    size="sm"
                    className="bg-white text-black hover:bg-zinc-200"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </Link>
              )}
              {project.github && (
                <Link
                  href={`${project.github}?source=mgiovani.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-white/20 hover:bg-white/10"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Repo
                  </Button>
                </Link>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <div className="container py-12">
      <div>
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <p className="text-xl text-muted-foreground mb-8">
          A collection of my cloud engineering, full-stack development,
          embedded systems, AI, machine learning, and automation work.
        </p>
      </div>

      <section className="mb-14">
        <div className="mb-6">
          <h2 className="text-3xl font-bold mb-2">
            Cloud/DevOps Engineering Projects
          </h2>
          <p className="text-zinc-400">
            Infrastructure, observability, deployment, and platform-focused work
            aligned with my cloud direction.
          </p>
        </div>
        {renderProjects(cloudProjects)}
      </section>

      <section>
        <div className="mb-6">
          <h2 className="text-3xl font-bold mb-2">
            Full-Stack Development, Embedded Systems, AI & Machine Learning
            Projects
          </h2>
          <p className="text-zinc-400">
            Application, embedded, data, and intelligent system projects that
            show the broader engineering depth behind my cloud work.
          </p>
        </div>
        {renderProjects(softwareAiProjects)}
      </section>

      <section className="mt-14">
        <div className="mb-6">
          <h2 className="text-3xl font-bold mb-2">
            AI Automation (Low-Code Tools) Projects
          </h2>
          <p className="text-zinc-400">
            Workflow automation, AI-assisted operations, and low-code system
            design projects.
          </p>
        </div>
        <div className="rounded-2xl border border-zinc-800/50 bg-zinc-900/40 px-6 py-10 text-center">
          <p className="text-xl font-semibold text-zinc-200">Upcoming Soon</p>
        </div>
      </section>
    </div>
  );
}
