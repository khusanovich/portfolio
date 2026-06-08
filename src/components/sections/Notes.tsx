import FadeIn from "@/components/FadeIn";

interface Note {
  date: string;
  tag: string;
  title: string;
  excerpt: string;
  href?: string;
}

const NOTES: Note[] = [
  {
    date: "May 2025",
    tag: "AI",
    title: "What Design Science Research Actually Means for AI Projects",
    excerpt:
      "DSR isn't just a methodology label — it changes what you build, why you build it, and how you know when you're done. Some notes from applying it to my thesis.",
    href: undefined,
  },
  {
    date: "Mar 2025",
    tag: "Unity",
    title: "Gamification Beyond Points: What I Learned Building Viatolea",
    excerpt:
      "Most gamification advice stops at badges and streaks. Designing for a sensitive health context forced me to think about motivation at a different level.",
    href: undefined,
  },
  {
    date: "Jan 2025",
    tag: "Web Dev",
    title: "The Hidden Cost of a Fast Dev Server",
    excerpt:
      "Turbopack and Vite make iteration feel instant, but they also make it easy to forget what your app actually costs at runtime. A few things worth staying honest about.",
    href: undefined,
  },
];

export default function Notes() {
  return (
    <section id="notes" className="py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        <FadeIn>
          <p className="text-xs tracking-[0.2em] uppercase text-accent font-sans mb-6">
            Notes
          </p>
          <hr className="border-0 border-t border-foreground/15 mb-4" />
          <p className="text-sm font-sans font-light text-foreground/40 mb-16">
            Short write-ups on things I&rsquo;ve learned — AI, game dev, web.
          </p>
        </FadeIn>

        <div className="max-w-2xl">
          {NOTES.map((note, i) => (
            <FadeIn key={i} delay={`${i * 0.08}s`}>
              <article className="py-9 first:pt-0 border-b border-foreground/10 last:border-b-0">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-sans text-foreground/35">
                    {note.date}
                  </span>
                  <span className="text-xs font-sans text-accent/60 tracking-wide border border-accent/25 px-2 py-0.5">
                    {note.tag}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-foreground leading-snug mb-3">
                  {note.href ? (
                    <a
                      href={note.href}
                      className="hover:text-accent transition-colors duration-200"
                    >
                      {note.title}
                    </a>
                  ) : (
                    note.title
                  )}
                </h3>

                <p className="text-sm font-sans font-light text-foreground/55 leading-relaxed mb-4">
                  {note.excerpt}
                </p>

                {note.href ? (
                  <a
                    href={note.href}
                    className="inline-flex items-center gap-1.5 text-xs font-sans text-accent hover:text-foreground transition-colors duration-200"
                  >
                    Read note <span aria-hidden="true">→</span>
                  </a>
                ) : (
                  <span className="text-xs font-sans text-foreground/25 italic">
                    Coming soon
                  </span>
                )}
              </article>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
