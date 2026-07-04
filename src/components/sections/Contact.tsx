"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";

const LINKS = [
  { label: "Email",    display: "a.khusanovich@gmail.com",        href: "mailto:a.khusanovich@gmail.com" },
  { label: "GitHub",   display: "github.com/khusanovich",          href: "https://github.com/khusanovich" },
  { label: "LinkedIn", display: "linkedin.com/in/asliddin-ergashev", href: "https://linkedin.com/in/asliddin-ergashev" },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // TODO: Replace this with your actual form submission endpoint
    // Example: EmailJS, Formspree, or your own backend API
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // For now, this will just open the default email client with pre-filled data
      const subject = encodeURIComponent(`Service Request: ${formData.service}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:a.khusanovich@gmail.com?subject=${subject}&body=${body}`;

      setStatus("success");
      setFormData({ name: "", email: "", service: "", message: "" });
    } catch (error) {
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
              conversations. Fill out the form or reach out directly.
            </p>
          </FadeIn>
        </div>

        {/* Two column layout: Form + Links */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <FadeIn delay={0.15}>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Request a Service
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-muted/30 text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors duration-200"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-muted/30 text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Service Type */}
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground/80 mb-2">
                    Service Type *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-muted/30 text-foreground focus:outline-none focus:border-accent/50 transition-colors duration-200"
                  >
                    <option value="">Select a service</option>
                    <option value="Web Development">Web Development</option>
                    <option value="AI/ML Consulting">AI/ML Consulting</option>
                    <option value="Research Collaboration">Research Collaboration</option>
                    <option value="Game Development">Game Development</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-muted/30 text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors duration-200 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full px-8 py-4 bg-accent text-background font-semibold tracking-wide hover:bg-accent/90 disabled:bg-accent/50 disabled:cursor-not-allowed transition-all duration-200"
                >
                  {status === "sending" ? "Sending..." : status === "success" ? "Sent!" : "Send Request"}
                </button>

                {status === "success" && (
                  <p className="text-sm text-accent">
                    Thank you! I'll get back to you soon.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-sm text-accent">
                    Something went wrong. Please try again or email me directly.
                  </p>
                )}
              </form>
            </div>
          </FadeIn>

          {/* Contact Links */}
          <FadeIn delay={0.2}>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Direct Contact
              </h3>
              <div className="space-y-0">
                {LINKS.map((link, i) => (
                  <div key={link.label} className="border-t border-muted/20 last:border-b last:border-muted/20">
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
                ))}
              </div>
            </div>
          </FadeIn>
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
