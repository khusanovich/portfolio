"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import CosmosCanvas from "@/components/CosmosCanvas";

/* ── Text scramble ─────────────────────────────────── */
const CHARS = "!<>—\\/[]{}=+*^?#@ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function useScramble(text: string, delayMs = 0) {
  const [out, setOut] = useState(() => text.replace(/\S/g, "_"));
  useEffect(() => {
    let frame = 0;
    let raf: number;
    const t = setTimeout(() => {
      const tick = () => {
        frame++;
        const next = text
          .split("")
          .map((ch, i) => {
            if (ch === " ") return " ";
            if (frame > i * 2.5) return ch;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("");
        setOut(next);
        if (frame < text.length * 2.5 + 6) raf = requestAnimationFrame(tick);
        else setOut(text);
      };
      tick();
    }, delayMs);
    return () => { clearTimeout(t); cancelAnimationFrame(raf); };
  }, [text, delayMs]);
  return out;
}

/* ── Typewriter ────────────────────────────────────── */
const ROLES = [
  "Freelance Web Developer",
  "AI Researcher",
  "Unity Developer",
  "Design Science Researcher",
];

export default function Hero() {
  /* Mouse parallax */
  const sectionRef = useRef<HTMLElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const textX  = useSpring(useTransform(rx, [-1, 1], [-14, 14]),  { stiffness: 80, damping: 18 });
  const textY  = useSpring(useTransform(ry, [-1, 1], [-8,  8]),   { stiffness: 80, damping: 18 });
  const orbX   = useSpring(useTransform(rx, [-1, 1], [-40, 40]),  { stiffness: 40, damping: 14 });
  const orbY   = useSpring(useTransform(ry, [-1, 1], [-25, 25]),  { stiffness: 40, damping: 14 });

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      rx.set((e.clientX / window.innerWidth)  * 2 - 1);
      ry.set((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [rx, ry]);

  /* Typewriter */
  const [idx, setIdx]           = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting]  = useState(false);
  useEffect(() => {
    const target = ROLES[idx];
    let tm: ReturnType<typeof setTimeout>;
    if (!deleting && displayed === target) {
      tm = setTimeout(() => setDeleting(true), 2800);
    } else if (deleting && displayed === "") {
      setDeleting(false);
      setIdx((i) => (i + 1) % ROLES.length);
    } else if (deleting) {
      tm = setTimeout(() => setDisplayed((d) => d.slice(0, -1)), 36);
    } else {
      tm = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 72);
    }
    return () => clearTimeout(tm);
  }, [displayed, deleting, idx]);

  /* Scramble */
  const first = useScramble("ASLIDDIN", 300);
  const last  = useScramble("ERGASHEV", 600);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
    >
      <CosmosCanvas />

      {/* Nebula orbs — deep parallax */}
      <motion.div style={{ x: orbX, y: orbY }}
        className="absolute top-[20%] left-[35%] w-[600px] h-[600px] rounded-full bg-accent/6 blur-[130px] pointer-events-none" />
      <motion.div style={{ x: orbX, y: orbY }}
        className="absolute bottom-[15%] right-[20%] w-[500px] h-[500px] rounded-full bg-secondary/7 blur-[120px] pointer-events-none" />
      <div className="absolute top-[60%] left-[10%] w-[300px] h-[300px] rounded-full bg-nebula/4 blur-[100px] pointer-events-none float-slow" />

      {/* Content — shallow parallax */}
      <motion.div style={{ x: textX, y: textY }}
        className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="font-mono text-xs tracking-[0.45em] uppercase text-accent mb-10"
        >
          ∗&nbsp;&nbsp;Portfolio&nbsp;&nbsp;∗
        </motion.p>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="mb-10 select-none"
        >
          <h1 className="font-serif leading-[0.88] font-bold" aria-label="Asliddin Ergashev">
            <span
              className="block font-mono text-foreground/15 tracking-widest"
              style={{ fontSize: "clamp(70px, 13.5vw, 210px)", WebkitTextStroke: "1px rgba(232,232,255,0.18)", color: "transparent" }}
            >
              {first}
            </span>
            <span
              className="block gradient-text glow-text"
              style={{ fontSize: "clamp(70px, 13.5vw, 210px)" }}
            >
              {last}
            </span>
          </h1>
        </motion.div>

        {/* Divider line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
          className="origin-left h-px w-40 bg-gradient-to-r from-accent/50 to-transparent mb-8"
        />

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.4 }}
          className="flex flex-wrap items-baseline gap-x-3 mb-14"
        >
          <span className="text-xl font-sans font-light text-foreground/50">Student &amp;</span>
          <span className="text-xl font-mono text-accent">
            {displayed}<span className="cursor-blink">_</span>
          </span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link href="#projects"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-accent text-background font-mono text-sm font-bold tracking-widest hover:bg-accent/80 transition-all duration-300 glow-accent">
            VIEW PROJECTS
            <span className="group-hover:translate-x-1.5 transition-transform duration-200">→</span>
          </Link>
          <Link href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 border border-white/15 text-foreground/75 font-mono text-sm tracking-widest hover:border-accent/40 hover:text-accent hover:bg-accent/5 transition-all duration-300">
            CONTACT ME
          </Link>
        </motion.div>

        {/* University tag */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.5 }}
          className="mt-24 flex items-center gap-4"
        >
          <div className="w-8 h-px bg-accent/30" />
          <p className="font-mono text-[10px] text-foreground/32 tracking-[0.3em] uppercase">
            Otto-Friedrich-Universität Bamberg
          </p>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[9px] text-foreground/32 tracking-[0.35em]">SCROLL</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-accent/40 to-transparent"
        />
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
