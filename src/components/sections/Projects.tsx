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
    name: "MeinHelfer",
    description:
      "Full-stack managed marketplace for booking trusted service providers (moving, cleaning, gardening). Features async FastAPI backend with JWT authentication, PostgreSQL database, and Dockerized production deployment.",
    stack: ["Next.js 15", "TypeScript", "Tailwind CSS", "FastAPI", "PostgreSQL", "Docker"],
    href: "https://github.com/khusanovich/MeinHelfer",
  },
  {
    index: "02",
    name: "Gut Guardian",
    description:
      "Gamified mobile app helping users identify and manage food intolerances through structured challenges, progress tracking, and habit loops over a 14-day programme. Built for Viatolea Challenge.",
    stack: ["React Native", "Expo", "TypeScript", "C#"],
    href: "https://github.com/khusanovich/Gut-Guardian",
  },
  {
    index: "03",
    name: "Local LLM Chat App",
    description:
      "Full-stack app enabling users to interact with locally running LLMs (Mistral/Phi via Ollama) through a web interface — no API keys or cloud required. FastAPI backend handles prompt forwarding; vanilla JS frontend renders responses in real time.",
    stack: ["FastAPI", "Python", "Ollama", "Mistral", "HTML/CSS/JS"],
    href: "https://github.com/khusanovich/llm-project",
  },
  {
    index: "04",
    name: "Uzbek-German AI Teacher",
    description:
      "AI-powered language learning assistant for Uzbek-German translation and language practice, leveraging LLM technology for interactive learning experiences.",
    stack: ["Python", "LLM", "AI"],
    href: "https://github.com/khusanovich/Uzbek-German-AI-Teacher",
  },
  {
    index: "05",
    name: "Jobwiese.com",
    description:
      "Bilingual (DE/EN) marketing website for a German job portal with locale-based routing and server-side transactional email delivery via Resend API.",
    stack: ["Next.js 16", "TypeScript", "Tailwind CSS", "Resend API", "Netlify"],
    href: "https://github.com/khusanovich/jobwiese.com",
  },
  {
    index: "06",
    name: "VEN-Marketing.com",
    description:
      "Zero-dependency single-page marketing site with animated canvas, live counters, scrolling ticker, and bilingual (DE/EN) toggle. Built with vanilla technologies for maximum performance.",
    stack: ["HTML5", "Vanilla CSS", "JavaScript", "PHP"],
    href: "https://github.com/khusanovich/VEN-Marketing.com",
  },
  {
    index: "07",
    name: "California Housing Price Prediction",
    description:
      "Machine learning project modeling housing costs for a California construction company using regression techniques and feature engineering.",
    stack: ["Python", "Jupyter Notebook", "scikit-learn", "Pandas", "NumPy"],
    href: "https://github.com/khusanovich/Machine_Learning",
  },
  {
    index: "08",
    name: "Data Science & AI Portfolio",
    description:
      "Collection of data science and AI projects completed in Google Colab and Jupyter Notebook, covering various ML/AI techniques and algorithms.",
    stack: ["Python", "Jupyter Notebook", "ML", "Data Science"],
    href: "https://github.com/khusanovich/Data_Science_and_AI",
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
