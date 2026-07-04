import FadeIn from "@/components/FadeIn";

const LINKS = [
  { label: "Email",    display: "a.khusanovich@gmail.com",        href: "mailto:a.khusanovich@gmail.com" },
  { label: "GitHub",   display: "github.com/khusanovich",          href: "https://github.com/khusanovich" },
  { label: "LinkedIn", display: "linkedin.com/in/asliddin-ergashev", href: "https://linkedin.com/in/asliddin-ergashev" },
];

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center py-24 md:py-32 bg-surface relative">
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        {/* Section header */}
        <FadeIn>
          <div className="mb-16">
            <p className="font-mono text-xs tracking-widest uppercase text-muted mb-4">
              Get In Touch
            </p>
            <div className="w-16 h-px bg-accent/50" />
          </div>
        </FadeIn>

        {/* Heading */}
        <div className="mb-16">
          <FadeIn delay={0.05}>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="block text-foreground">Let's build</span>
              <span className="block gradient-text">something great.</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-lg md:text-xl text-muted/80 leading-relaxed max-w-2xl">
              Open to freelance work, research collaborations, and interesting
              conversations. My inbox is always open.
            </p>
          </FadeIn>
        </div>

        {/* Links */}
        <div className="max-w-2xl">
          {LINKS.map((link, i) => (
            <FadeIn key={link.label} delay={0.12 + i * 0.07}>
              <div className="border-t border-muted/20 last:border-b last:border-muted/20">
                <a
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className="group flex items-center justify-between py-6 hover:pl-4 transition-all duration-300"
                >
                  <span className="font-mono text-xs tracking-wider uppercase text-muted/60 w-24">
                    {link.label}
                  </span>
                  <span className="text-base text-foreground/80 group-hover:text-accent transition-colors duration-200 flex-1">
                    {link.display}
                  </span>
                  <span className="text-muted/40 group-hover:text-accent group-hover:translate-x-2 transition-all duration-200">
                    →
                  </span>
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 mt-24 pt-8 border-t border-muted/20">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-mono text-xs text-muted/60">
            © {new Date().getFullYear()} Asliddin Ergashev
          </p>
          <p className="font-mono text-xs text-muted/60">
            asliddin-ergashev.com
          </p>
        </div>
      </div>
    </section>
  );
}
