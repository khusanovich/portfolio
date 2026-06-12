"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
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

function TiltCard({ project, i }: { project: Project; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]),  { stiffness: 300, damping: 30 });
  const rY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]),  { stiffness: 300, damping: 30 });

  /* Moving inner glow follows cursor */
  const glowBg = useTransform([x, y], ([lx, ly]) => {
    const px = ((lx as number) + 0.5) * 100;
    const py = ((ly as number) + 0.5) * 100;
    return `radial-gradient(circle at ${px}% ${py}%, rgba(0,212,255,0.09) 0%, transparent 65%)`;
  });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width  - 0.5);
    y.set((e.clientY - r.top)  / r.height - 0.5);
  };
  const onLeave = () => { x.set(0); y.set(0); };

  return (
    <FadeIn delay={i * 0.1}>
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ rotateX: rX, rotateY: rY, transformPerspective: 900 }}
        whileHover={{ z: 20 }}
        className="relative h-full"
      >
        {/* Large faded index */}
        <span
          className="absolute -top-6 -left-2 font-serif font-bold text-foreground/4 select-none pointer-events-none"
          style={{ fontSize: "clamp(80px, 10vw, 140px)" }}
          aria-hidden="true"
        >
          {project.index}
        </span>

        <motion.article
          style={{ background: glowBg }}
          className="gradient-border bg-white/3 backdrop-blur-md p-9 flex flex-col h-full group hover:bg-white/5 transition-colors duration-300 glow-card"
        >
          <h3 className="font-serif text-2xl font-bold text-foreground mb-4 leading-snug group-hover:gradient-text transition-all duration-300">
            {project.name}
          </h3>

          <motion.div
            className="h-px mb-5 bg-gradient-to-r from-accent/40 to-transparent"
            initial={{ width: "2.5rem" }}
            whileHover={{ width: "5rem" }}
            transition={{ duration: 0.3 }}
          />

          <p className="font-sans text-sm font-light leading-relaxed text-foreground/50 mb-8 flex-1">
            {project.description}
          </p>

          <div className="mt-auto space-y-4">
            <ul className="flex flex-wrap gap-2" role="list">
              {project.stack.map((t) => (
                <li key={t} className="text-xs font-mono text-accent/50 border border-accent/18 px-2.5 py-1 hover:border-accent/40 hover:text-accent transition-colors duration-200">
                  {t}
                </li>
              ))}
            </ul>
            {project.href ? (
              <a href={project.href} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-accent hover:text-foreground transition-colors duration-200">
                View project →
              </a>
            ) : project.status ? (
              <p className="text-xs font-mono text-foreground/25 italic">{project.status}</p>
            ) : null}
          </div>
        </motion.article>
      </motion.div>
    </FadeIn>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-surface relative overflow-hidden">
      <div className="dot-grid absolute inset-0 opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <FadeIn>
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent mb-6">Projects</p>
          <hr className="border-0 border-t border-white/8 mb-16" />
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((p, i) => (
            <TiltCard key={p.index} project={p} i={i} />
          ))}
          {PROJECTS.length % 2 !== 0 && <div aria-hidden="true" className="hidden md:block" />}
        </div>
      </div>
    </section>
  );
}
