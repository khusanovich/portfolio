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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-foreground/10 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between"
        aria-label="Primary navigation"
      >
        <Link
          href="#hero"
          className="font-serif text-2xl font-bold tracking-tight text-foreground"
          aria-label="Go to top"
        >
          M.
        </Link>

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

        {/* Mobile: just the CV download for now; full mobile menu added later */}
        <a
          href="/cv.pdf"
          download
          className="md:hidden text-sm px-3 py-1.5 border border-accent text-accent"
          aria-label="Download CV"
        >
          CV ↓
        </a>
      </nav>
    </header>
  );
}
