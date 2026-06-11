"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import NeuralCanvas from "@/components/NeuralCanvas";

const ROLES = [
  "Freelance Web Developer",
  "AI Researcher",
  "Unity Developer",
  "Design Science Researcher",
];

export default function Hero() {
  const [roleIdx, setRoleIdx]     = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting]   = useState(false);

  useEffect(() => {
    const target = ROLES[roleIdx];
    let t: ReturnType<typeof setTimeout>;

    if (!deleting && displayed === target) {
      t = setTimeout(() => setDeleting(true), 2600);
    } else if (deleting && displayed === "") {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % ROLES.length);
    } else if (deleting) {
      t = setTimeout(() => setDisplayed((d) => d.slice(0, -1)), 38);
    } else {
      t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 75);
    }
    return () => clearTimeout(t);
  }, [displayed, deleting, roleIdx]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-background">
      <NeuralCanvas />

      {/* Ambient glow orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-accent/5 blur-[140px] pointer-events-none" />
      <div className="absolute top-2/3 left-1/4  w-[400px] h-[400px] rounded-full bg-secondary/6 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-28 w-full pt-32">

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xs tracking-[0.3em] uppercase text-accent font-sans mb-8"
        >
          Portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="font-serif leading-none mb-8"
        >
          <span className="gradient-text block text-7xl md:text-8xl lg:text-[7.5rem] font-bold">
            Asliddin
          </span>
          <span className="block text-7xl md:text-8xl lg:text-[7.5rem] font-bold text-foreground/90">
            Ergashev
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="flex flex-wrap items-baseline gap-x-2 mb-14"
        >
          <span className="text-xl md:text-2xl font-sans font-light text-foreground/40">
            Student &amp;
          </span>
          <span className="text-xl md:text-2xl font-sans font-light text-accent">
            {displayed}
            <span className="cursor-blink ml-0.5">|</span>
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="#projects"
            className="inline-flex items-center justify-center px-7 py-3.5 bg-accent text-background font-sans text-sm font-medium tracking-wide hover:bg-accent/80 transition-all duration-200 glow-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
          >
            View Projects
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-7 py-3.5 border border-white/15 text-foreground/80 font-sans text-sm tracking-wide hover:border-accent/40 hover:text-accent hover:bg-white/5 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
          >
            Contact Me
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="mt-20 text-xs text-foreground/25 font-sans tracking-wide"
        >
          Otto-Friedrich-Universität Bamberg &nbsp;·&nbsp; AI Engineering &amp; Design Science Research
        </motion.p>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
