"use client";

import { useState } from "react";
import Link from "next/link";
import { articles, getAllTags, type Article } from "@/data/articles";
import FadeIn from "@/components/FadeIn";

export default function LearnPage() {
  const [selectedCategory, setSelectedCategory] = useState<Article["category"] | "All">("All");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const categories: Array<Article["category"] | "All"> = [
    "All",
    "AI Engineering",
    "Software Development",
    "Language Learning",
    "Tutorial"
  ];

  const allTags = getAllTags();

  const filteredArticles = articles.filter(article => {
    const categoryMatch = selectedCategory === "All" || article.category === selectedCategory;
    const tagMatch = !selectedTag || article.tags.includes(selectedTag);
    return categoryMatch && tagMatch;
  });

  return (
    <main className="min-h-screen bg-background pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <FadeIn>
          <div className="mb-16">
            <Link
              href="/"
              className="inline-flex items-center text-sm text-muted/70 hover:text-accent transition-colors duration-200 mb-8"
            >
              ← Back to Home
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Learning Hub
            </h1>
            <p className="text-xl text-muted/80 max-w-3xl">
              Practical guides, tutorials, and insights on AI Engineering, Software Development, and more.
              Learn from real-world experiences and implementation details.
            </p>
          </div>
        </FadeIn>

        {/* Category Filter */}
        <FadeIn delay={0.1}>
          <div className="mb-8">
            <p className="text-xs font-mono tracking-wider uppercase text-muted mb-4">
              Filter by Category
            </p>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setSelectedTag(null);
                  }}
                  className={`px-4 py-2 rounded-lg border-2 text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? "border-accent bg-accent text-background"
                      : "border-muted/30 text-foreground/70 hover:border-accent/50 hover:text-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Tag Filter */}
        {allTags.length > 0 && (
          <FadeIn delay={0.15}>
            <div className="mb-12">
              <p className="text-xs font-mono tracking-wider uppercase text-muted mb-4">
                Filter by Tag
              </p>
              <div className="flex flex-wrap gap-2">
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                    className={`px-3 py-1.5 rounded text-xs font-medium transition-all duration-200 ${
                      selectedTag === tag
                        ? "bg-accent text-background"
                        : "bg-surface border border-muted/20 text-foreground/70 hover:border-accent/40 hover:text-accent"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
                {selectedTag && (
                  <button
                    onClick={() => setSelectedTag(null)}
                    className="px-3 py-1.5 rounded text-xs font-medium bg-surface border border-muted/20 text-muted/70 hover:text-foreground transition-colors duration-200"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>
          </FadeIn>
        )}

        {/* Articles Grid */}
        <div className="space-y-8">
          {filteredArticles.length === 0 ? (
            <FadeIn delay={0.2}>
              <div className="text-center py-16">
                <p className="text-muted/60 text-lg">
                  No articles found. Check back soon for new content!
                </p>
              </div>
            </FadeIn>
          ) : (
            filteredArticles.map((article, index) => (
              <FadeIn key={article.slug} delay={index * 0.08}>
                <Link href={`/learn/${article.slug}`}>
                  <article className="group bg-surface border border-muted/20 p-8 hover:border-accent/30 transition-all duration-300 cursor-pointer">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <span className="text-xs font-medium text-accent/80 uppercase tracking-wider">
                        {article.category}
                      </span>
                      <span className="text-xs text-muted/60">•</span>
                      <time className="text-xs text-muted/60">
                        {new Date(article.publishedAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric"
                        })}
                      </time>
                      <span className="text-xs text-muted/60">•</span>
                      <span className="text-xs text-muted/60">{article.readTime}</span>
                      {article.featured && (
                        <>
                          <span className="text-xs text-muted/60">•</span>
                          <span className="text-xs font-medium text-accent">Featured</span>
                        </>
                      )}
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                      {article.title}
                    </h2>

                    <div className="w-12 h-px bg-accent/50 mb-6 group-hover:w-20 transition-all duration-300" />

                    <p className="text-base text-muted/80 leading-relaxed mb-6">
                      {article.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {article.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium text-foreground/70 bg-background border border-muted/20 px-3 py-1.5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-sm font-medium text-accent group-hover:gap-3 transition-all duration-200">
                      Read article
                      <span className="transition-transform duration-200 group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </article>
                </Link>
              </FadeIn>
            ))
          )}
        </div>
      </div>
    </main>
  );
}
