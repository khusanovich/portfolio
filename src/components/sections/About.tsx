import FadeIn from "@/components/FadeIn";

const STACK = [
  "Next.js",
  "TypeScript",
  "React",
  "FastAPI",
  "PostgreSQL",
  "Unity (C#)",
];

export default function About() {
  return (
    <section id="about" className="py-32">
      <div className="max-w-5xl mx-auto px-6">

        <FadeIn>
          <p className="text-xs tracking-[0.2em] uppercase text-accent font-sans mb-6">
            About
          </p>
          <hr className="border-0 border-t border-foreground/15 mb-16" />
        </FadeIn>

        <div className="grid md:grid-cols-[1fr_auto] gap-16 md:gap-24">

          {/* Left — text */}
          <div className="space-y-7 max-w-xl">
            <FadeIn delay="0.05s">
              <p className="text-lg font-sans font-light leading-relaxed text-foreground/80">
                I&rsquo;m Mo, a Computer Science and Information Systems student at
                Otto-Friedrich-Universität Bamberg. Alongside my studies I work as
                a freelance web developer, building production sites for
                German-speaking clients with a focus on clarity, performance, and
                lasting code.
              </p>
            </FadeIn>

            <FadeIn delay="0.1s">
              <p className="text-lg font-sans font-light leading-relaxed text-foreground/80">
                My bachelor thesis — an AI-based adaptive learning assistant —
                sits at the centre of my current work. It draws on Design Science
                Research methodology and human-AI interaction theory, supervised
                by{" "}
                <span className="text-foreground font-normal">
                  Prof.&nbsp;Dr.&nbsp;Milad Mirbabaie
                </span>
                , Chair of AI Engineering in Companies.
              </p>
            </FadeIn>

            <FadeIn delay="0.15s">
              <p className="text-base font-sans font-light leading-relaxed text-foreground/50">
                Outside the thesis: game development in Unity, research on
                human&ndash;AI relationships, and writing the occasional note on
                things I&rsquo;ve learned.
              </p>
            </FadeIn>
          </div>

          {/* Right — stack */}
          <FadeIn delay="0.1s">
            <div className="md:pt-1">
              <p className="text-xs tracking-[0.18em] uppercase text-foreground/40 font-sans mb-5">
                Stack
              </p>
              <hr className="border-0 border-t border-foreground/10 mb-5 w-24" />
              <ul className="space-y-3" role="list">
                {STACK.map((tech) => (
                  <li
                    key={tech}
                    className="text-sm font-sans text-foreground/65 tracking-wide"
                  >
                    {tech}
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
