import FadeIn from "@/components/FadeIn";

const METRICS = [
  { number: "3+", label: "Years Experience" },
  { number: "10+", label: "Projects Completed" },
  { number: "5", label: "Technologies Mastered" },
];

const STACK = ["Next.js", "TypeScript", "React", "FastAPI", "PostgreSQL", "Unity (C#)"];

const INTERESTS = [
  "Artificial Intelligence",
  "Human–Computer Interaction",
  "Game Development",
  "Design Science Research",
  "Web Architecture",
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-surface relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <FadeIn>
          <div className="mb-16">
            <p className="font-mono text-xs tracking-widest uppercase text-muted mb-4">
              About Me
            </p>
            <div className="w-16 h-px bg-accent/50" />
          </div>
        </FadeIn>

        {/* Metrics Grid */}
        <FadeIn delay={0.1}>
          <div className="grid grid-cols-3 gap-6 md:gap-12 mb-20 pb-16 border-b border-muted/20">
            {METRICS.map((metric, i) => (
              <div key={i} className="text-center md:text-left">
                <p className="text-4xl md:text-5xl font-bold text-accent mb-2">
                  {metric.number}
                </p>
                <p className="text-sm text-muted font-medium">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Bio */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 mb-20">
          <FadeIn delay={0.15}>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Student & Freelance<br />Web Developer
              </h2>
              <p className="text-lg text-muted/90 leading-relaxed">
                I'm Asliddin — a Computer Science and Information Systems student at
                Otto-Friedrich-Universität Bamberg. Alongside my studies I work as a
                freelance web developer, building production sites for German-speaking
                clients.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="space-y-6">
              <p className="text-lg text-muted/90 leading-relaxed">
                My bachelor thesis — an AI-based adaptive learning assistant — draws on
                Design Science Research and human-AI interaction theory, supervised by{" "}
                <span className="text-accent font-semibold">Prof. Dr. Milad Mirbabaie</span>,
                Chair of AI Engineering in Companies.
              </p>
              <p className="text-lg text-muted/90 leading-relaxed">
                I focus on clarity, performance, and lasting code across all my projects.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Skills & Interests */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <FadeIn delay={0.25}>
            <div>
              <h3 className="text-sm font-bold tracking-wider uppercase text-foreground/80 mb-6">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {STACK.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-background border border-muted/30 text-foreground/80 text-sm font-medium hover:border-accent/50 hover:text-accent transition-all duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div>
              <h3 className="text-sm font-bold tracking-wider uppercase text-foreground/80 mb-6">
                Research Interests
              </h3>
              <ul className="space-y-3">
                {INTERESTS.map((interest) => (
                  <li
                    key={interest}
                    className="text-muted/80 text-base flex items-start gap-3 group"
                  >
                    <span className="text-accent mt-1.5">→</span>
                    <span className="group-hover:text-foreground transition-colors duration-200">
                      {interest}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
