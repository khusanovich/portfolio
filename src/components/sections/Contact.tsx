import FadeIn from "@/components/FadeIn";

const LINKS = [
  { label: "Email",    display: "a.khusanovich@gmail.com",        href: "mailto:a.khusanovich@gmail.com" },
  { label: "GitHub",   display: "github.com/khusanovich",          href: "https://github.com/khusanovich" },
  { label: "LinkedIn", display: "linkedin.com/in/asliddin-ergashev", href: "https://linkedin.com/in/asliddin-ergashev" },
];

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center py-32 bg-surface relative overflow-hidden">
      <div className="line-grid absolute inset-0 pointer-events-none" />

      {/* Glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-secondary/5 blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full">

        <FadeIn>
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent mb-12">Contact</p>
        </FadeIn>

        {/* Massive heading */}
        <div className="mb-20">
          <FadeIn delay={0.05}>
            <h2 className="font-serif font-bold leading-[0.88]">
              <span
                className="block text-foreground/8"
                style={{ fontSize: "clamp(72px, 14vw, 200px)", WebkitTextStroke: "1px rgba(232,232,255,0.1)", color: "transparent" }}
              >
                LET'S
              </span>
              <span
                className="block gradient-text glow-text"
                style={{ fontSize: "clamp(72px, 14vw, 200px)" }}
              >
                TALK.
              </span>
            </h2>
          </FadeIn>
        </div>

        <FadeIn delay={0.1}>
          <p className="text-base font-sans font-light text-foreground/60 leading-relaxed mb-16 max-w-md">
            Open to freelance work, research collaborations, and interesting
            conversations. My inbox is always open.
          </p>
        </FadeIn>

        {/* Links */}
        <ul role="list">
          {LINKS.map((link, i) => (
            <FadeIn key={link.label} delay={0.12 + i * 0.07}>
              <li className="border-t border-white/12 last:border-b last:border-white/12">
                <a
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className="group flex items-center justify-between py-6 hover:pl-2 transition-all duration-300"
                >
                  <span className="font-mono text-xs tracking-[0.2em] uppercase text-foreground/38 group-hover:text-accent/70 transition-colors duration-200 w-22">{link.label}</span>
                  <span className="font-sans text-sm text-foreground/70 group-hover:text-accent transition-colors duration-200 flex-1">{link.display}</span>
                  <span className="text-foreground/30 group-hover:text-accent group-hover:translate-x-1 transition-all duration-200">→</span>
                </a>
              </li>
            </FadeIn>
          ))}
        </ul>
      </div>

      {/* Footer */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 mt-32 pt-8 border-t border-white/12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="font-mono text-xs text-foreground/30">© {new Date().getFullYear()} Asliddin Ergashev</p>
        <p className="font-mono text-xs text-foreground/30">asliddin-ergashev.com</p>
      </div>
    </section>
  );
}
