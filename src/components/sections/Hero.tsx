import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-16"
      aria-label="Introduction"
    >
      <div className="max-w-5xl mx-auto px-6 py-28 w-full">
        <p className="text-xs tracking-[0.2em] uppercase text-accent font-sans mb-8">
          Student &amp; Freelance Developer
        </p>

        <h1 className="font-serif text-7xl md:text-8xl lg:text-9xl font-bold text-foreground leading-none mb-8">
          Mo.
        </h1>

        <hr className="border-0 border-t border-foreground/15 w-24 mb-10" />

        <p className="max-w-lg text-lg md:text-xl text-foreground/60 font-sans font-light leading-relaxed mb-14">
          Building at the intersection of academic research and technical craft
          — from AI-driven learning systems to thoughtful web experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="#projects"
            className="inline-flex items-center justify-center px-7 py-3.5 bg-accent text-white font-sans text-sm tracking-wide hover:bg-accent/85 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
          >
            View Projects
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-7 py-3.5 border border-foreground/25 text-foreground font-sans text-sm tracking-wide hover:border-foreground/50 hover:bg-foreground/5 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-foreground focus-visible:outline-offset-2"
          >
            Contact Me
          </Link>
        </div>

        <p className="mt-20 text-xs text-foreground/30 font-sans tracking-wide">
          Otto-Friedrich-Universität Bamberg &nbsp;·&nbsp; AI Engineering &amp; Design Science Research
        </p>
      </div>
    </section>
  );
}
