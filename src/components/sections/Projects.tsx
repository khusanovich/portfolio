import FadeIn from "@/components/FadeIn";

interface Project {
  index: string;
  name: string;
  description: string;
  stack: string[];
  href?: string;
  status?: string;
}

const PROJECTS: Project[] = [
  {
    index: "01",
    name: "AI Learning Assistant",
    description:
      "An adaptive learning system that personalises study content in real-time using large language models. Built as my bachelor thesis under Design Science Research methodology.",
    stack: ["Next.js", "FastAPI", "PostgreSQL", "TypeScript", "OpenAI API"],
    status: "In progress — bachelor thesis",
  },
  {
    index: "02",
    name: "Viatolea",
    description:
      "A gamified mobile app helping users identify and manage food intolerances through structured challenges, progress tracking, and habit loops.",
    stack: ["Unity", "C#", "Game Design"],
  },
  {
    index: "03",
    name: "Freelance Web Projects",
    description:
      "Production websites for German-speaking clients — from requirements to deployment. Focus on performance, accessibility, and maintainable code.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    status: "Ongoing",
  },
];

function ProjectCard({ project, i }: { project: Project; i: number }) {
  return (
    <FadeIn delay={i * 0.1}>
      <article className="group relative bg-surface border border-muted/20 p-8 hover:border-accent/30 transition-all duration-300">
        {/* Index number */}
        <div className="flex items-start justify-between mb-6">
          <span className="font-mono text-sm text-muted/50">
            {project.index}
          </span>
          {project.status && (
            <span className="text-xs font-medium text-muted/60 italic">
              {project.status}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
          {project.name}
        </h3>

        {/* Divider */}
        <div className="w-12 h-px bg-accent/50 mb-6 group-hover:w-20 transition-all duration-300" />

        {/* Description */}
        <p className="text-base text-muted/80 leading-relaxed mb-8">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium text-foreground/70 bg-background/50 border border-muted/20 px-3 py-1.5 hover:border-accent/40 hover:text-accent transition-all duration-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.href && (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent/80 mt-6 transition-colors duration-200"
          >
            View project →
          </a>
        )}
      </article>
    </FadeIn>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-background relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <FadeIn>
          <div className="mb-16">
            <p className="font-mono text-xs tracking-widest uppercase text-muted mb-4">
              Selected Projects
            </p>
            <div className="w-16 h-px bg-accent/50" />
          </div>
        </FadeIn>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.index} project={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
