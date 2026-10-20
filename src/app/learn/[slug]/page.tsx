import { notFound } from "next/navigation";
import Link from "next/link";
import { getArticleBySlug, articles, type ArticleContent } from "@/data/articles";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${article.title} | Learning Hub`,
    description: article.description,
  };
}

function renderContent(block: ArticleContent, index: number) {
  switch (block.type) {
    case "heading":
      const HeadingTag = `h${block.level || 2}` as keyof JSX.IntrinsicElements;
      const headingClasses = {
        1: "text-4xl md:text-5xl font-bold text-foreground mb-6 mt-12",
        2: "text-3xl md:text-4xl font-bold text-foreground mb-4 mt-10",
        3: "text-2xl md:text-3xl font-bold text-foreground mb-4 mt-8",
      };
      return (
        <HeadingTag
          key={index}
          className={headingClasses[block.level || 2]}
        >
          {block.content as string}
        </HeadingTag>
      );

    case "paragraph":
      return (
        <p key={index} className="text-lg text-muted/90 leading-relaxed mb-6">
          {block.content as string}
        </p>
      );

    case "code":
      return (
        <div key={index} className="mb-8">
          <div className="bg-surface border border-muted/20 rounded-lg overflow-hidden">
            {block.language && (
              <div className="bg-background border-b border-muted/20 px-4 py-2">
                <span className="text-xs font-mono text-accent uppercase tracking-wider">
                  {block.language}
                </span>
              </div>
            )}
            <pre className="p-6 overflow-x-auto">
              <code className="text-sm font-mono text-foreground/90">
                {block.content as string}
              </code>
            </pre>
          </div>
        </div>
      );

    case "list":
      return (
        <ul key={index} className="space-y-3 mb-8 ml-6">
          {(block.content as string[]).map((item, i) => (
            <li key={i} className="text-lg text-muted/90 leading-relaxed flex gap-3">
              <span className="text-accent mt-1.5">•</span>
              <span className="flex-1">{item}</span>
            </li>
          ))}
        </ul>
      );

    case "quote":
      return (
        <blockquote
          key={index}
          className="border-l-4 border-accent pl-6 py-2 mb-8 italic text-lg text-foreground/80"
        >
          {block.content as string}
        </blockquote>
      );

    case "callout":
      return (
        <div
          key={index}
          className="bg-accent/10 border-l-4 border-accent p-6 mb-8 rounded-r-lg"
        >
          <p className="text-base text-foreground/90 leading-relaxed">
            <span className="font-bold text-accent mr-2">💡</span>
            {block.content as string}
          </p>
        </div>
      );

    case "image":
      return (
        <figure key={index} className="mb-8">
          <img
            src={block.content as string}
            alt={block.caption || "Article image"}
            className="w-full rounded-lg border border-muted/20"
          />
          {block.caption && (
            <figcaption className="text-sm text-muted/60 text-center mt-3 italic">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );

    default:
      return null;
  }
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background pt-32 pb-24">
      <article className="max-w-4xl mx-auto px-6">
        {/* Back link */}
        <Link
          href="/learn"
          className="inline-flex items-center text-sm text-muted/70 hover:text-accent transition-colors duration-200 mb-8"
        >
          ← Back to Learning Hub
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="text-xs font-medium text-accent/80 uppercase tracking-wider">
              {article.category}
            </span>
            <span className="text-xs text-muted/60">•</span>
            <time className="text-xs text-muted/60">
              {new Date(article.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span className="text-xs text-muted/60">•</span>
            <span className="text-xs text-muted/60">{article.readTime}</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            {article.title}
          </h1>

          <div className="w-20 h-1 bg-accent mb-8" />

          <p className="text-xl text-muted/80 leading-relaxed">
            {article.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-8">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium text-foreground/70 bg-surface border border-muted/20 px-3 py-1.5"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          {article.content.map((block, index) => renderContent(block, index))}
        </div>

        {/* Sources & References */}
        {article.sources && article.sources.length > 0 && (
          <section className="mt-16 pt-8 border-t border-muted/20">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Sources & References
            </h2>
            <div className="space-y-4">
              {article.sources.map((source, index) => {
                const getSourceIcon = (type: string) => {
                  switch (type) {
                    case "repository": return "🔗";
                    case "article": return "📄";
                    case "book": return "📚";
                    case "documentation": return "📖";
                    case "paper": return "📝";
                    case "video": return "🎥";
                    case "code": return "💻";
                    default: return "🔗";
                  }
                };

                return (
                  <div
                    key={index}
                    className="bg-surface border border-muted/20 p-4 rounded-lg hover:border-accent/30 transition-all duration-200"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl mt-0.5">{getSourceIcon(source.type)}</span>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <a
                            href={source.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-base font-semibold text-accent hover:underline"
                          >
                            {source.title}
                          </a>
                          <span className="text-xs text-muted/60 uppercase tracking-wider">
                            {source.type}
                          </span>
                        </div>
                        {source.author && (
                          <p className="text-sm text-muted/70 mb-1">
                            by {source.author}
                          </p>
                        )}
                        {source.description && (
                          <p className="text-sm text-muted/80 leading-relaxed">
                            {source.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-muted/20">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <div>
              <p className="text-sm text-muted/70 mb-2">Share this article</p>
              <div className="flex gap-4">
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(`https://fullaiengineer.com/learn/${article.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted/70 hover:text-accent transition-colors duration-200"
                >
                  Twitter
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://fullaiengineer.com/learn/${article.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted/70 hover:text-accent transition-colors duration-200"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <Link
              href="/learn"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:gap-3 transition-all duration-200"
            >
              ← Back to all articles
            </Link>
          </div>
        </footer>
      </article>
    </main>
  );
}
