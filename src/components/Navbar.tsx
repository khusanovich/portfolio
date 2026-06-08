"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Notes", href: "#notes" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Close on Escape
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
            ? "bg-background/95 backdrop-blur-sm border-b border-foreground/10"
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
            className="font-serif text-2xl font-bold tracking-tight text-foreground"
            aria-label="Go to top"
          >
            M.
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8" role="list">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm text-foreground/55 hover:text-foreground transition-colors duration-200"
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="/cv.pdf"
                download
                className="text-sm px-4 py-2 border border-accent text-accent hover:bg-accent hover:text-white transition-colors duration-200"
                aria-label="Download CV as PDF"
              >
                CV ↓
              </a>
            </li>
          </ul>

          {/* Mobile: hamburger button */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span
              className={`block h-px w-5 bg-foreground transition-all duration-300 origin-center ${
                menuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-foreground transition-all duration-300 ${
                menuOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-foreground transition-all duration-300 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Navigation menu"
        aria-modal="true"
        className={`fixed inset-0 z-40 flex flex-col bg-background pt-16 transition-all duration-300 md:hidden ${
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
                  className={`block font-serif text-4xl font-bold text-foreground/80 hover:text-accent py-3 transition-all duration-200 ${
                    menuOpen
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-2"
                  }`}
                  style={{ transitionDelay: menuOpen ? `${i * 50}ms` : "0ms" }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div
            className={`pt-8 border-t border-foreground/10 transition-all duration-300 ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
            style={{ transitionDelay: menuOpen ? "280ms" : "0ms" }}
          >
            <a
              href="/cv.pdf"
              download
              onClick={close}
              className="inline-flex items-center gap-2 text-sm font-sans px-5 py-3 border border-accent text-accent hover:bg-accent hover:text-white transition-colors duration-200"
              aria-label="Download CV as PDF"
            >
              Download CV ↓
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
