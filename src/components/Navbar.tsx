"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "About",    href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Notes",    href: "#notes" },
  { label: "Vlog",     href: "#vlog" },
  { label: "Contact",  href: "#contact" },
];

const SECTION_IDS = NAV_LINKS.map((l) => l.href.slice(1));

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [activeId, setActiveId]   = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section detection
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const visible = new Map<string, number>();

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([e]) => {
          visible.set(id, e.intersectionRatio);
          const best = [...visible.entries()].sort((a, b) => b[1] - a[1])[0];
          if (best && best[1] > 0) setActiveId(best[0]);
        },
        { threshold: [0, 0.25, 0.5, 0.75, 1] }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? "bg-background/80 backdrop-blur-md border-b border-white/8"
            : "bg-transparent"
        }`}
      >
        <nav
          className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between"
          aria-label="Primary navigation"
        >
          <Link
            href="#hero"
            onClick={close}
            className="font-serif text-2xl font-bold tracking-tight gradient-text"
            aria-label="Go to top"
          >
            A.
          </Link>

          {/* Desktop */}
          <ul className="hidden md:flex items-center gap-7" role="list">
            {NAV_LINKS.map(({ label, href }) => {
              const id = href.slice(1);
              const active = activeId === id;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`text-sm transition-colors duration-200 ${
                      active
                        ? "text-accent"
                        : "text-foreground/45 hover:text-foreground"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
            <li>
              <a
                href="/cv.pdf"
                download
                className="text-sm px-4 py-2 border border-accent/50 text-accent hover:bg-accent hover:text-background transition-all duration-200 glow-accent"
                aria-label="Download CV"
              >
                CV ↓
              </a>
            </li>
          </ul>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span className={`block h-px w-5 bg-foreground transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block h-px w-5 bg-foreground transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block h-px w-5 bg-foreground transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Navigation menu"
        aria-modal="true"
        className={`fixed inset-0 z-40 flex flex-col bg-background/95 backdrop-blur-xl pt-16 transition-all duration-300 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col px-6 pt-12 pb-10 flex-1">
          <ul className="space-y-1 flex-1" role="list">
            {NAV_LINKS.map(({ label, href }, i) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={close}
                  className={`block font-serif text-4xl font-bold py-3 transition-all duration-200 ${
                    menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                  } ${activeId === href.slice(1) ? "gradient-text" : "text-foreground/70 hover:text-accent"}`}
                  style={{ transitionDelay: menuOpen ? `${i * 50}ms` : "0ms" }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div
            className={`pt-8 border-t border-white/8 transition-all duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
            style={{ transitionDelay: menuOpen ? "320ms" : "0ms" }}
          >
            <a
              href="/cv.pdf"
              download
              onClick={close}
              className="inline-flex items-center gap-2 text-sm font-sans px-5 py-3 border border-accent/50 text-accent hover:bg-accent hover:text-background transition-all duration-200"
            >
              Download CV ↓
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
