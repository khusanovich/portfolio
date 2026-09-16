"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-background overflow-hidden"
    >
      {/* Multiple background glows for more light */}
      <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] right-[15%] w-[400px] h-[400px] rounded-full bg-secondary/4 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[30%] w-[350px] h-[350px] rounded-full bg-accent/3 blur-[90px] pointer-events-none" />

      {/* Animated flash lines */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Diagonal line 1 */}
        <motion.div
          className="absolute top-[10%] -left-[50%] w-[150%] h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent"
          style={{ transform: 'rotate(-15deg)' }}
          animate={{
            opacity: [0, 1, 0],
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 0.5,
            ease: "easeInOut"
          }}
        />
        {/* Diagonal line 2 */}
        <motion.div
          className="absolute top-[60%] -left-[50%] w-[150%] h-[1px] bg-gradient-to-r from-transparent via-secondary/25 to-transparent"
          style={{ transform: 'rotate(12deg)' }}
          animate={{
            opacity: [0, 1, 0],
            x: ['100%', '-100%'],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 0.5,
            ease: "easeInOut",
            delay: 0.7
          }}
        />
        {/* Vertical flash line */}
        <motion.div
          className="absolute left-[25%] -top-[50%] w-[1px] h-[200%] bg-gradient-to-b from-transparent via-accent/20 to-transparent"
          animate={{
            opacity: [0, 0.8, 0],
            y: ['-50%', '50%'],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 0.5,
            ease: "easeInOut",
            delay: 1.4
          }}
        />
      </div>

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
                Full Stack AI Engineer | AI Integration Specialist
              </p>
              <p className="text-base text-muted/70 mt-4 leading-relaxed">
                Bringing AI innovation into real-world business solutions. Specializing in LLM-powered document intelligence, RAG systems, and production-ready AI applications.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border-2 border-accent text-accent font-sans text-sm font-semibold tracking-wide hover:bg-accent hover:text-background transition-all duration-200"
              >
                View Projects
                <span className="group-hover:translate-x-1 transition-transform duration-200">
                  →
                </span>
              </Link>
              <a
                href="https://calendly.com/a-khusanovich/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-accent text-background font-sans text-sm font-semibold tracking-wide hover:bg-accent/90 transition-all duration-200"
              >
                📅 Book a Call
              </a>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-muted/30 text-foreground font-sans text-sm font-medium tracking-wide hover:border-accent hover:text-accent transition-all duration-200"
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
            <div className="relative aspect-square max-w-md mx-auto lg:max-w-lg">
              {/* Glow effect behind photo */}
              <div className="absolute inset-0 opacity-30 blur-[80px]" style={{
                background: 'radial-gradient(ellipse 50% 50% at 50% 40%, rgba(230, 0, 0, 0.15), transparent 70%)'
              }} />
              {/* Photo container */}
              <div className="relative w-full h-full group">
                <Image
                  src="/foto.png"
                  alt="Asliddin Ergashev"
                  fill
                  className="object-cover object-top grayscale brightness-90 contrast-110 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500 scale-125"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{
                    objectPosition: '50% 15%',
                    opacity: 0.8,
                    maskImage: 'radial-gradient(ellipse 65% 60% at 50% 40%, black 20%, transparent 70%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 65% 60% at 50% 40%, black 20%, transparent 70%)'
                  }}
                />
              </div>
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
