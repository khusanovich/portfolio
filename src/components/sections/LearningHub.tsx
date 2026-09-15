"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";

interface Resource {
  category: string;
  title: string;
  description: string;
  topics?: string[];
}

interface Course {
  status: "coming-soon" | "active";
  title: string;
  description: string;
  topics: string[];
  level?: string;
}

const RESOURCES: Resource[] = [
  {
    category: "AI & Machine Learning",
    title: "LLM Integration Best Practices",
    description: "Common questions and answers about integrating Large Language Models into production applications, covering API design, prompt engineering, and cost optimization.",
    topics: ["Prompt Engineering", "API Design", "Cost Management", "Error Handling"],
  },
  {
    category: "Software Engineering",
    title: "Full-Stack Development Q&A",
    description: "Practical questions and solutions for building modern web applications with Next.js, TypeScript, and backend frameworks.",
    topics: ["Next.js", "TypeScript", "API Development", "Database Design"],
  },
  {
    category: "Language Learning",
    title: "German Learning Resources",
    description: "Curated materials and strategies for learning German, from A1 to C1 level, with focus on technical vocabulary.",
    topics: ["Grammar", "Vocabulary", "Technical German", "Exam Preparation"],
  },
];

const COURSES: Course[] = [
  {
    status: "coming-soon",
    title: "Building AI-Powered Applications",
    description: "Learn to build production-ready AI applications from scratch. Cover RAG systems, document intelligence, and LLM integration with real-world projects.",
    topics: ["RAG Systems", "Vector Databases", "LLM APIs", "Production Deployment"],
    level: "Intermediate",
  },
  {
    status: "coming-soon",
    title: "German for Software Engineers",
    description: "Accelerated German language course designed specifically for tech professionals working in Germany or German-speaking companies.",
    topics: ["Technical Vocabulary", "Business Communication", "Cultural Context", "Interview Prep"],
    level: "Beginner to Advanced",
  },
];

export default function LearningHub() {
  const [activeTab, setActiveTab] = useState<"resources" | "courses">("resources");

  return (
    <section id="learning-hub" className="py-24 md:py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <FadeIn>
          <div className="mb-16">
            <p className="font-mono text-xs tracking-widest uppercase text-muted mb-4">
              Learning Hub
            </p>
            <div className="w-16 h-px bg-accent/50" />
            <p className="text-sm text-muted/70 mt-6">
              Knowledge resources and structured courses for AI, software engineering, and language learning.
            </p>
          </div>
        </FadeIn>

        {/* Tabs */}
        <FadeIn delay={0.1}>
          <div className="flex gap-4 mb-12 border-b border-muted/20">
            <button
              onClick={() => setActiveTab("resources")}
              className={`pb-4 px-2 font-semibold text-sm transition-all duration-200 border-b-2 ${
                activeTab === "resources"
                  ? "border-accent text-accent"
                  : "border-transparent text-muted/70 hover:text-foreground"
              }`}
            >
              Resources
            </button>
            <button
              onClick={() => setActiveTab("courses")}
              className={`pb-4 px-2 font-semibold text-sm transition-all duration-200 border-b-2 ${
                activeTab === "courses"
                  ? "border-accent text-accent"
                  : "border-transparent text-muted/70 hover:text-foreground"
              }`}
            >
              Courses
            </button>
          </div>
        </FadeIn>

        {/* Resources Tab */}
        {activeTab === "resources" && (
          <div className="space-y-8">
            {RESOURCES.map((resource, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <article className="group bg-background border border-muted/20 p-8 hover:border-accent/30 transition-all duration-300">
                  <div className="mb-4">
                    <span className="text-xs font-medium text-accent/80 uppercase tracking-wider">
                      {resource.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                    {resource.title}
                  </h3>

                  <div className="w-12 h-px bg-accent/50 mb-6 group-hover:w-20 transition-all duration-300" />

                  <p className="text-base text-muted/80 leading-relaxed mb-6">
                    {resource.description}
                  </p>

                  {resource.topics && (
                    <div className="flex flex-wrap gap-2">
                      {resource.topics.map((topic) => (
                        <span
                          key={topic}
                          className="text-xs font-medium text-foreground/70 bg-surface border border-muted/20 px-3 py-1.5 hover:border-accent/40 hover:text-accent transition-all duration-200"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="mt-6">
                    <span className="text-sm text-muted/50 italic">Content coming soon</span>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        )}

        {/* Courses Tab */}
        {activeTab === "courses" && (
          <div className="grid md:grid-cols-2 gap-8">
            {COURSES.map((course, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <article className="group bg-background border border-muted/20 p-8 flex flex-col hover:border-accent/30 transition-all duration-300 relative">
                  {course.status === "coming-soon" && (
                    <div className="absolute top-4 right-4">
                      <span className="text-xs font-medium text-muted/60 bg-surface border border-muted/20 px-3 py-1 rounded-full">
                        Coming Soon
                      </span>
                    </div>
                  )}

                  {course.level && (
                    <div className="mb-4">
                      <span className="text-xs font-medium text-accent/80 uppercase tracking-wider">
                        {course.level}
                      </span>
                    </div>
                  )}

                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                    {course.title}
                  </h3>

                  <div className="w-12 h-px bg-accent/50 mb-6 group-hover:w-20 transition-all duration-300" />

                  <p className="text-base text-muted/80 leading-relaxed mb-6 flex-1">
                    {course.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {course.topics.map((topic) => (
                      <span
                        key={topic}
                        className="text-xs font-medium text-foreground/70 bg-surface border border-muted/20 px-3 py-1.5"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>

                  {course.status === "coming-soon" && (
                    <div className="pt-4 border-t border-muted/20">
                      <p className="text-sm text-muted/60">
                        Sign up for updates when this course launches
                      </p>
                    </div>
                  )}
                </article>
              </FadeIn>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
