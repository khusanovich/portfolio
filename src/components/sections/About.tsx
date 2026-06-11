import FadeIn from "@/components/FadeIn";

const PERSONAL = [
  { label: "Name",       value: "Asliddin Ergashev" },
  { label: "Based in",   value: "Bamberg, Germany" },
  { label: "Degree",     value: "B.Sc. CS & Information Systems" },
  { label: "University", value: "Otto-Friedrich-Universität Bamberg" },
  { label: "Supervisor", value: "Prof. Dr. Milad Mirbabaie" },
];

const STACK = ["Next.js", "TypeScript", "React", "FastAPI", "PostgreSQL", "Unity (C#)"];

const INTERESTS = [
  "Artificial Intelligence",
  "Human–Computer Interaction",
  "Game Development",
  "Design Science Research",
  "Web Architecture",
];

const HOBBIES = [
  "Football",
  "Table Tennis",
  "Technologies",
  "Cars",
  "Traveling",
  "Cycling",
  "Running",
  "Reading AI & Software Engineering Articles",
];

export default function About() {
  return (
    <section id="about" className="py-32 bg-background">
      <div className="max-w-5xl mx-auto px-6">

        <FadeIn>
          <p className="text-xs tracking-[0.2em] uppercase text-accent font-sans mb-6">About</p>
          <hr className="border-0 border-t border-white/8 mb-16" />
        </FadeIn>

        {/* Intro */}
        <div className="space-y-6 max-w-xl mb-16">
          <FadeIn delay={0.05}>
            <p className="text-lg font-sans font-light leading-relaxed text-foreground/70">
              I&rsquo;m Asliddin — a Computer Science and Information Systems student at
              Otto-Friedrich-Universität Bamberg. Alongside my studies I work as a
              freelance web developer, building production sites for German-speaking
              clients with a focus on clarity, performance, and lasting code.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg font-sans font-light leading-relaxed text-foreground/70">
              My bachelor thesis — an AI-based adaptive learning assistant — sits at
              the centre of my current work, drawing on Design Science Research and
              human-AI interaction theory, supervised by{" "}
              <span className="text-foreground font-normal">Prof.&nbsp;Dr.&nbsp;Milad Mirbabaie</span>,
              Chair of AI Engineering in Companies.
            </p>
          </FadeIn>
        </div>

        <hr className="border-0 border-t border-white/8 mb-16" />

        <div className="grid md:grid-cols-[1fr_auto] gap-16 md:gap-24">

          {/* Left */}
          <div className="space-y-12">

            <FadeIn delay={0.05}>
              <div>
                <p className="text-xs tracking-[0.18em] uppercase text-foreground/35 font-sans mb-5">Background</p>
                <hr className="border-0 border-t border-white/8 mb-6 w-12" />
                <dl className="space-y-3">
                  {PERSONAL.map(({ label, value }) => (
                    <div key={label} className="flex gap-6">
                      <dt className="text-xs font-sans text-foreground/30 w-24 shrink-0 pt-0.5 tracking-wide">{label}</dt>
                      <dd className="text-sm font-sans text-foreground/65 leading-relaxed">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div>
                <p className="text-xs tracking-[0.18em] uppercase text-foreground/35 font-sans mb-5">Interests</p>
                <hr className="border-0 border-t border-white/8 mb-5 w-12" />
                <ul className="flex flex-wrap gap-2" role="list">
                  {INTERESTS.map((item) => (
                    <li key={item} className="text-xs font-sans text-accent/60 border border-accent/20 px-3 py-1.5 hover:border-accent/50 hover:text-accent transition-colors duration-200">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div>
                <p className="text-xs tracking-[0.18em] uppercase text-foreground/35 font-sans mb-5">Hobbies</p>
                <hr className="border-0 border-t border-white/8 mb-5 w-12" />
                <ul className="flex flex-wrap gap-2" role="list">
                  {HOBBIES.map((item) => (
                    <li key={item} className="text-xs font-sans text-foreground/45 border border-white/10 px-3 py-1.5 hover:border-white/25 hover:text-foreground/70 transition-colors duration-200">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>

          {/* Right — stack */}
          <FadeIn delay={0.1}>
            <div className="md:pt-1">
              <p className="text-xs tracking-[0.18em] uppercase text-foreground/35 font-sans mb-5">Stack</p>
              <hr className="border-0 border-t border-white/8 mb-5 w-24" />
              <ul className="space-y-3" role="list">
                {STACK.map((tech) => (
                  <li key={tech} className="text-sm font-sans text-foreground/55 tracking-wide hover:text-accent transition-colors duration-200">{tech}</li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
