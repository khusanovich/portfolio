"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-background"
    >
      {/* Subtle background glow */}
      <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] rounded-full bg-accent/3 blur-[120px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Label */}
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-muted mb-8">
              Portfolio
            </p>

            {/* Name */}
            <h1 className="font-sans mb-6">
              <span className="block text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-2">
                Asliddin
              </span>
              <span className="block text-5xl md:text-6xl lg:text-7xl font-bold gradient-text">
                Ergashev
              </span>
            </h1>

            {/* Subtitle */}
            <div className="max-w-xl mb-12">
              <p className="text-xl md:text-2xl text-muted font-light leading-relaxed">
                Student & Freelance Web Developer
              </p>
              <p className="text-base text-muted/70 mt-4 leading-relaxed">
                CS/IS student at University of Bamberg building at the intersection
                of academic research and technical craft.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-background font-sans text-sm font-semibold tracking-wide hover:bg-accent/90 transition-all duration-200"
              >
                View Projects
                <span className="group-hover:translate-x-1 transition-transform duration-200">
                  →
                </span>
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-muted/30 text-foreground font-sans text-sm font-medium tracking-wide hover:border-accent/50 hover:text-accent transition-all duration-200"
              >
                Get in Touch
              </Link>
            </div>

            {/* University tag */}
            <div className="flex items-center gap-4 text-muted/50">
              <div className="w-12 h-px bg-muted/30" />
              <p className="font-mono text-xs tracking-wider uppercase">
                Otto-Friedrich-Universität Bamberg
              </p>
            </div>
          </motion.div>

          {/* Right Column - Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="relative lg:order-last order-first"
          >
            <div className="relative aspect-square max-w-md mx-auto lg:max-w-none">
              {/* Photo container with border */}
              <div className="relative w-full h-full border border-muted/20 overflow-hidden group">
                <Image
                  src="/84868316.png"
                  alt="Asliddin Ergashev"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Overlay gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Decorative accent border */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-accent/30 -z-10" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] text-muted/50 tracking-widest">
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-muted/40 to-transparent"
        />
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
