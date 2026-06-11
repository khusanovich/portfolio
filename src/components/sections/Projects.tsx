"use client";

import { motion } from "framer-motion";
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
      "An adaptive learning system that personalises study content in real-time using large language models. Built as my bachelor thesis under Design Science Research methodology — combining AI engineering with evidence-based pedagogy.",
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

function ProjectCard({ project, i }: { project: Project; i: number }) {
  return (
    <FadeIn delay={i * 0.08}>
      <motion.article
        whileHover={{ y: -6 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="gradient-border bg-white/4 backdrop-blur-sm p-10 flex flex-col h-full group hover:bg-white/6 hover:glow-card transition-colors duration-300"
      >
        <span className="font-mono text-xs text-accent/50 tracking-widest mb-6">{project.index}</span>

        <h3 className="font-serif text-2xl font-bold text-foreground mb-4 leading-snug group-hover:gradient-text transition-all duration-300">
          {project.name}
        </h3>

        <hr className="border-0 border-t border-white/10 mb-5 w-10 group-hover:w-16 group-hover:border-accent/40 transition-all duration-300" />

        <p className="font-sans text-sm font-light leading-relaxed text-foreground/55 mb-8 flex-1">
          {project.description}
        </p>

        <div className="mt-auto space-y-4">
          <ul className="flex flex-wrap gap-2" role="list" aria-label="Tech stack">
            {project.stack.map((tech) => (
              <li key={tech} className="text-xs font-sans text-accent/50 border border-accent/20 px-2.5 py-1">
                {tech}
              </li>
            ))}
          </ul>

          {project.href ? (
            <a href={project.href} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-sans text-accent hover:text-foreground transition-colors duration-200">
              View project <span aria-hidden="true">→</span>
            </a>
          ) : project.status ? (
            <p className="text-xs font-sans text-foreground/30 italic">{project.status}</p>
          ) : null}
        </div>
      </motion.article>
    </FadeIn>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-surface">
      <div className="max-w-5xl mx-auto px-6">

        <FadeIn>
          <p className="text-xs tracking-[0.2em] uppercase text-accent font-sans mb-6">Projects</p>
          <hr className="border-0 border-t border-white/8 mb-16" />
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.index} project={p} i={i} />
          ))}
          {PROJECTS.length % 2 !== 0 && (
            <div aria-hidden="true" className="hidden md:block" />
          )}
        </div>
      </div>
    </section>
  );
}
