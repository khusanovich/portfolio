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
    <section id="research" className="py-24 md:py-32 bg-surface relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <FadeIn>
          <div className="mb-16">
            <p className="font-mono text-xs tracking-widest uppercase text-muted mb-4">
              Academic Research
            </p>
            <div className="w-16 h-px bg-accent/50" />
          </div>
        </FadeIn>

        <div className="max-w-3xl">
          {RESEARCH.map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <article className="pb-12 mb-12 border-b border-muted/20 last:border-b-0 group">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="font-mono text-xs tracking-wider uppercase text-accent">
                    {item.type}
                  </span>
                  <span className="text-sm text-muted/60">·</span>
                  <span className="font-semibold text-sm text-muted/80">
                    {item.year}
                  </span>
                  {item.status && (
                    <>
                      <span className="text-sm text-muted/60">·</span>
                      <span className="text-xs text-muted/70 italic">
                        {item.status}
                      </span>
                    </>
                  )}
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-tight mb-4 group-hover:text-accent transition-colors duration-300">
                  {item.href
                    ? <a href={item.href} target="_blank" rel="noopener noreferrer">{item.title}</a>
                    : item.title}
                </h3>

                <p className="text-base text-muted/80 leading-relaxed">
                  {item.venue}
                </p>

                {item.href && (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-accent hover:text-accent/80 transition-colors duration-200"
                  >
                    Read paper →
                  </a>
                )}
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <p className="mt-12 text-sm text-muted/70 leading-relaxed max-w-2xl">
            Research within the Design Science Research paradigm — human–AI interaction
            and AI-augmented learning systems.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
