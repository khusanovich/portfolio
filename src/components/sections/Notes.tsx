import FadeIn from "@/components/FadeIn";

interface Note { date: string; tag: string; title: string; excerpt: string; href?: string; }

const NOTES: Note[] = [
  { date: "May 2025", tag: "AI",
    title: "What Design Science Research Actually Means for AI Projects",
    excerpt: "DSR isn't just a methodology label — it changes what you build, why you build it, and how you know when you're done.",
    href: undefined },
  { date: "Mar 2025", tag: "Unity",
    title: "Gamification Beyond Points: What I Learned Building Viatolea",
    excerpt: "Most gamification advice stops at badges and streaks. Designing for a sensitive health context forced me to think about motivation differently.",
    href: undefined },
  { date: "Jan 2025", tag: "Web Dev",
    title: "The Hidden Cost of a Fast Dev Server",
    excerpt: "Turbopack and Vite make iteration feel instant, but they also make it easy to forget what your app actually costs at runtime.",
    href: undefined },
];

export default function Notes() {
  return (
    <section id="notes" className="py-24 md:py-32 bg-background relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <FadeIn>
          <div className="mb-16">
            <p className="font-mono text-xs tracking-widest uppercase text-muted mb-4">
              Writing
            </p>
            <div className="w-16 h-px bg-accent/50" />
            <p className="text-sm text-muted/70 mt-6">
              Short write-ups on things I've learned.
            </p>
          </div>
        </FadeIn>

        <div className="max-w-3xl space-y-8">
          {NOTES.map((note, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <article className="group pb-8 border-b border-muted/20 last:border-b-0">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-xs text-muted/60">{note.date}</span>
                  <span className="text-muted/40">·</span>
                  <span className="text-xs font-medium text-accent/80 uppercase tracking-wider">
                    {note.tag}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-foreground leading-tight mb-3 group-hover:text-accent transition-colors duration-300">
                  {note.href ? <a href={note.href}>{note.title}</a> : note.title}
                </h3>

                <p className="text-base text-muted/80 leading-relaxed mb-4">
                  {note.excerpt}
                </p>

                {note.href
                  ? <a href={note.href} className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent/80 transition-colors duration-200">
                      Read more →
                    </a>
                  : <span className="text-sm text-muted/50 italic">Coming soon</span>}
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
