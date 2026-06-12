import FadeIn from "@/components/FadeIn";

interface ResearchItem {
  type: string; year: string; title: string;
  venue: string; status?: string; href?: string;
}

const RESEARCH: ResearchItem[] = [
  {
    type: "Research-in-Progress Paper",
    year: "2024",
    title: "Understanding Human–AI Relationships: A Conceptual Framework for Designing Trustworthy AI Companions",
    venue: "Supervised by Prof. Dr. Milad Mirbabaie · Chair of AI Engineering in Companies · University of Bamberg",
    status: "Research-in-Progress",
  },
  {
    type: "Bachelor Thesis",
    year: "2025",
    title: "Designing an AI-Based Adaptive Learning Assistant: A Design Science Research Approach",
    venue: "Otto-Friedrich-Universität Bamberg · Chair of AI Engineering in Companies",
    status: "In progress",
  },
];

export default function Research() {
  return (
    <section id="research" className="py-32 bg-background relative overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <FadeIn>
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent mb-6">Research</p>
          <hr className="border-0 border-t border-white/8 mb-16" />
        </FadeIn>

        <div className="max-w-2xl">
          {RESEARCH.map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <article className="relative py-12 first:pt-0 border-b border-white/8 last:border-b-0 group">
                {/* Large year in background */}
                <span
                  className="absolute right-0 top-1/2 -translate-y-1/2 font-serif font-bold text-foreground/[0.03] select-none pointer-events-none leading-none"
                  style={{ fontSize: "clamp(60px, 8vw, 110px)" }}
                  aria-hidden="true"
                >
                  {item.year}
                </span>

                <div className="flex items-center gap-4 mb-4">
                  <span className="font-mono text-xs tracking-[0.15em] uppercase text-accent/65">{item.type}</span>
                  {item.status && (
                    <span className="font-mono text-xs text-foreground/25 italic ml-auto">{item.status}</span>
                  )}
                </div>

                <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground leading-snug mb-4 group-hover:gradient-text transition-all duration-400">
                  {item.href
                    ? <a href={item.href} target="_blank" rel="noopener noreferrer">{item.title}</a>
                    : item.title}
                </h3>

                <p className="text-sm font-sans font-light text-foreground/30 leading-relaxed">{item.venue}</p>

                {item.href && (
                  <a href={item.href} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-4 text-xs font-mono text-accent hover:text-foreground transition-colors duration-200">
                    Read paper →
                  </a>
                )}
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <p className="mt-16 text-xs font-mono text-foreground/20 leading-relaxed max-w-md">
            Research within the Design Science Research paradigm — human–AI interaction
            and AI-augmented learning systems.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
