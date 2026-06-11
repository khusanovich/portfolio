import FadeIn from "@/components/FadeIn";

const LINKS = [
  {
    label: "Email",
    display: "a.khusanovich@gmail.com",
    href: "mailto:a.khusanovich@gmail.com",
  },
  {
    label: "GitHub",
    display: "github.com/khusanovich",
    href: "https://github.com/khusanovich",
  },
  {
    label: "LinkedIn",
    display: "linkedin.com/in/mo-khusanovich",
    href: "https://linkedin.com/in/mo-khusanovich",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32">
      <div className="max-w-5xl mx-auto px-6">

        <FadeIn>
          <p className="text-xs tracking-[0.2em] uppercase text-accent font-sans mb-6">
            Contact
          </p>
          <hr className="border-0 border-t border-foreground/15 mb-16" />
        </FadeIn>

        <div className="max-w-xl">
          <FadeIn>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              Got a project in mind,<br />or just want to say hello?
            </h2>
          </FadeIn>

          <FadeIn delay="0.08s">
            <p className="text-base font-sans font-light text-foreground/55 leading-relaxed mb-16">
              I&rsquo;m open to freelance work, research collaborations, and
              interesting conversations. My inbox is always open.
            </p>
          </FadeIn>

          <ul className="space-y-0" role="list">
            {LINKS.map((link, i) => (
              <FadeIn key={link.label} delay={`${0.1 + i * 0.07}s`}>
                <li className="border-t border-foreground/10 last:border-b last:border-foreground/10">
                  <a
                    href={link.href}
                    target={link.href.startsWith("mailto") ? undefined : "_blank"}
                    rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    className="group flex items-center justify-between py-5 transition-colors duration-200 hover:text-accent"
                    aria-label={`${link.label}: ${link.display}`}
                  >
                    <span className="text-xs font-sans tracking-[0.15em] uppercase text-foreground/35 group-hover:text-accent/60 transition-colors duration-200 w-20">
                      {link.label}
                    </span>
                    <span className="font-sans text-sm text-foreground/70 group-hover:text-accent transition-colors duration-200 flex-1">
                      {link.display}
                    </span>
                    <span
                      className="text-foreground/20 group-hover:text-accent group-hover:translate-x-1 transition-all duration-200"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </a>
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>

      </div>

      {/* Footer */}
      <div className="max-w-5xl mx-auto px-6 mt-32 pt-8 border-t border-foreground/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-xs font-sans text-foreground/25">
          © {new Date().getFullYear()} Asliddin Ergashev
        </p>
        <p className="text-xs font-sans text-foreground/25">
          Built with Next.js &amp; Tailwind CSS
        </p>
      </div>
    </section>
  );
}
