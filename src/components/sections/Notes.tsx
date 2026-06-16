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
    <section id="notes" className="py-32 bg-surface relative overflow-hidden">
      <div className="dot-grid absolute inset-0 opacity-40 pointer-events-none" />
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <FadeIn>
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent mb-6">Notes</p>
          <hr className="border-0 border-t border-white/12 mb-4" />
          <p className="text-sm font-sans font-light text-foreground/50 mb-16">
            Short write-ups on things I&rsquo;ve learned.
          </p>
        </FadeIn>

        <div className="max-w-2xl">
          {NOTES.map((note, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <article className="py-9 first:pt-0 border-b border-white/12 last:border-b-0 group">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-xs text-foreground/40">{note.date}</span>
                  <span className="font-mono text-xs text-accent/75 border border-accent/35 px-2 py-0.5">{note.tag}</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground leading-snug mb-3 group-hover:gradient-text transition-all duration-300">
                  {note.href ? <a href={note.href}>{note.title}</a> : note.title}
                </h3>
                <p className="text-sm font-sans font-light text-foreground/60 leading-relaxed mb-4">{note.excerpt}</p>
                {note.href
                  ? <a href={note.href} className="inline-flex items-center gap-1.5 text-xs font-mono text-accent">Read →</a>
                  : <span className="text-xs font-mono text-foreground/35 italic">Coming soon</span>}
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
