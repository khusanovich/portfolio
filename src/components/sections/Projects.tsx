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
      "An adaptive learning system that personalises study content in real-time using large language models. Built as my bachelor thesis at Bamberg under Design Science Research methodology — combining AI engineering with evidence-based pedagogy.",
    stack: ["Next.js", "FastAPI", "PostgreSQL", "TypeScript", "OpenAI API"],
    status: "In progress — bachelor thesis",
  },
  {
    index: "02",
    name: "Viatolea",
    description:
      "A gamified mobile app that helps users identify and manage food intolerances through structured challenges, progress tracking, and habit loops. Game mechanics designed to sustain long-term dietary behaviour change.",
    stack: ["Unity", "C#", "Game Design"],
  },
  {
    index: "03",
    name: "Freelance Web Projects",
    description:
      "Production websites for German-speaking clients — from requirements to deployment. Emphasis on clean architecture, Lighthouse scores, and handing over code that the client can actually maintain.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    status: "Ongoing",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        <FadeIn>
          <p className="text-xs tracking-[0.2em] uppercase text-accent font-sans mb-6">
            Projects
          </p>
          <hr className="border-0 border-t border-foreground/15 mb-16" />
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-px bg-foreground/8">
          {PROJECTS.map((project, i) => (
            <FadeIn key={project.index} delay={`${i * 0.07}s`}>
              <article className="bg-white p-10 flex flex-col h-full group transition-colors duration-300 hover:bg-background">
                <span className="font-sans text-xs text-accent/60 tracking-widest mb-6">
                  {project.index}
                </span>

                <h3 className="font-serif text-2xl font-bold text-foreground mb-4 leading-snug">
                  {project.name}
                </h3>

                <hr className="border-0 border-t border-foreground/10 mb-5 w-10 transition-all duration-300 group-hover:w-16 group-hover:border-accent/40" />

                <p className="font-sans text-sm font-light leading-relaxed text-foreground/65 mb-8 flex-1">
                  {project.description}
                </p>

                <div className="mt-auto space-y-4">
                  <ul className="flex flex-wrap gap-2" role="list" aria-label="Tech stack">
                    {project.stack.map((tech) => (
                      <li
                        key={tech}
                        className="text-xs font-sans text-foreground/50 border border-foreground/15 px-2.5 py-1"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-sans text-accent hover:text-foreground transition-colors duration-200"
                      aria-label={`View ${project.name}`}
                    >
                      View project <span aria-hidden="true">→</span>
                    </a>
                  ) : project.status ? (
                    <p className="text-xs font-sans text-foreground/35 italic">
                      {project.status}
                    </p>
                  ) : null}
                </div>
              </article>
            </FadeIn>
          ))}

          {/* Spacer card to fill the 2-col grid when projects count is odd */}
          {PROJECTS.length % 2 !== 0 && (
            <div className="bg-white hidden md:block" aria-hidden="true" />
          )}
        </div>

      </div>
    </section>
  );
}
