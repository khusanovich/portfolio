# Article Writing Template & Guide

This document provides templates and best practices for creating educational content for your Learning Hub.

## Table of Contents
1. [Article Structure Template](#article-structure-template)
2. [Adding Sources & References](#adding-sources--references)
3. [Content Types Reference](#content-types-reference)
4. [Writing Best Practices](#writing-best-practices)
5. [LinkedIn Post Template](#linkedin-post-template)
6. [Example Workflow](#example-workflow)

---

## Article Structure Template

### Basic Article Object

```typescript
{
  slug: "your-article-slug",              // URL-friendly version of title
  title: "Your Article Title",            // Clear, specific, compelling
  description: "Brief overview...",       // 1-2 sentences, shown on listing page
  category: "AI Engineering",             // Choose from predefined categories
  publishedAt: "2024-03-15",             // ISO date format (YYYY-MM-DD)
  readTime: "8 min read",                // Approximate reading time
  tags: ["Tag1", "Tag2", "Tag3"],        // 3-5 relevant tags
  featured: false,                        // Set to true for featured articles
  content: [
    // Article content blocks go here
  ],
  sources: [
    // Optional: Add your sources/references here
  ]
}
```

### Categories
Choose one:
- `"AI Engineering"` - LLMs, RAG, embeddings, AI architecture
- `"Software Development"` - Full-stack, APIs, frameworks, databases
- `"Language Learning"` - German, language tips, technical vocabulary
- `"Tutorial"` - Step-by-step guides, how-tos

---

## Adding Sources & References

Adding sources makes your content more credible and helps readers dive deeper into topics. Sources appear in a dedicated section at the end of each article.

### Source Types

You can add 7 different types of sources:
- `"repository"` 🔗 - GitHub repos, code projects
- `"article"` 📄 - Blog posts, online articles
- `"book"` 📚 - Books, ebooks
- `"documentation"` 📖 - Official docs, API references
- `"paper"` 📝 - Research papers, academic publications
- `"video"` 🎥 - YouTube videos, courses
- `"code"` 💻 - Code snippets, gists

### Source Structure

```typescript
{
  title: string;           // Name of the source
  url: string;             // Full URL to the resource
  type: "repository" | "article" | "book" | "documentation" | "paper" | "video" | "code";
  author?: string;         // Optional: Author or creator name
  description?: string;    // Optional: Brief description of the source
}
```

### Example: Adding Sources to an Article

```typescript
{
  slug: "understanding-transformers",
  title: "Understanding Transformers in Simple Terms",
  // ... other fields ...
  content: [
    // ... your content ...
  ],
  sources: [
    {
      title: "Attention Is All You Need",
      url: "https://arxiv.org/abs/1706.03762",
      type: "paper",
      author: "Vaswani et al.",
      description: "The original Transformer paper that revolutionized NLP. Essential reading for understanding the architecture."
    },
    {
      title: "The Illustrated Transformer",
      url: "https://jalammar.github.io/illustrated-transformer/",
      type: "article",
      author: "Jay Alammar",
      description: "Visual and intuitive explanation of how Transformers work, perfect for beginners."
    },
    {
      title: "Hugging Face Transformers",
      url: "https://github.com/huggingface/transformers",
      type: "repository",
      author: "Hugging Face",
      description: "State-of-the-art Natural Language Processing for PyTorch and TensorFlow 2.0."
    },
    {
      title: "Transformers Documentation",
      url: "https://huggingface.co/docs/transformers/index",
      type: "documentation",
      description: "Comprehensive documentation for using pre-trained transformers in your projects."
    }
  ]
}
```

### Best Practices for Sources

1. **Prioritize Quality**: Choose authoritative, well-maintained sources
2. **Mix Source Types**: Combine papers, code, and articles for different learning styles
3. **Add Context**: Use the description field to explain why the source is useful
4. **Check Links**: Verify all URLs work before publishing
5. **Give Credit**: Always include authors when known
6. **Stay Current**: Link to the latest versions of documentation

### When to Add Sources

- **Always**: For technical implementations and code examples
- **Important**: When referencing research or specific methodologies
- **Helpful**: When readers might want to learn more
- **Optional**: For general knowledge or basic concepts

---

## Content Types Reference

### 1. Heading
```typescript
{
  type: "heading",
  level: 2,                    // 1, 2, or 3
  content: "Your Heading"
}
```

**When to use:**
- Level 1: Main article title (rarely used in content array)
- Level 2: Major sections
- Level 3: Subsections

### 2. Paragraph
```typescript
{
  type: "paragraph",
  content: "Your paragraph text goes here. Keep it clear and concise."
}
```

**Best practices:**
- Keep paragraphs 2-4 sentences
- One idea per paragraph
- Use simple, direct language

### 3. Code Block
```typescript
{
  type: "code",
  language: "typescript",      // typescript, python, bash, etc.
  content: `const example = "code here";
console.log(example);`
}
```

**Best practices:**
- Always specify the language
- Include comments for complex code
- Keep examples runnable and practical
- Use realistic variable names

### 4. List (Bullet Points)
```typescript
{
  type: "list",
  content: [
    "First point",
    "Second point",
    "Third point"
  ]
}
```

**When to use:**
- Multiple related items
- Steps in a process
- Features or benefits
- Key takeaways

### 5. Quote
```typescript
{
  type: "quote",
  content: "An important quote or key insight to emphasize"
}
```

**When to use:**
- Emphasizing key insights
- Expert opinions
- Important definitions

### 6. Callout (Pro Tips)
```typescript
{
  type: "callout",
  content: "Pro tip: This is important advice that readers should pay attention to."
}
```

**When to use:**
- Important warnings
- Pro tips
- Common mistakes to avoid
- Key insights

### 7. Image
```typescript
{
  type: "image",
  content: "/images/article-name/diagram.png",
  caption: "Optional caption describing the image"
}
```

**Best practices:**
- Use descriptive captions
- Optimize images for web
- Store in `/public/images/article-slug/`

---

## Writing Best Practices

### Article Structure
1. **Hook (First paragraph)**: Grab attention, state the problem
2. **Context**: Why this matters, who it's for
3. **Main Content**: Teach the concept with examples
4. **Practical Application**: Show how to use it
5. **Common Pitfalls**: What to avoid
6. **Conclusion**: Summary and next steps

### Writing Style
- **Be conversational**: Write like you're explaining to a colleague
- **Be specific**: Use concrete examples, not abstractions
- **Be practical**: Focus on real-world application
- **Be honest**: Share what works AND what doesn't

### Technical Content
- **Define terms**: Don't assume knowledge
- **Show, don't tell**: Use code examples
- **Explain why**: Not just what and how
- **Link to resources**: Help readers learn more

### Length Guidelines
- **Short articles**: 600-1000 words (3-5 min read) - Quick tips, single concepts
- **Medium articles**: 1000-1500 words (5-8 min read) - Most tutorials
- **Long articles**: 1500-2500 words (8-12 min read) - Deep dives, comprehensive guides

---

## LinkedIn Post Template

### Short Version (150-200 words)

```
[HOOK - 1 sentence that grabs attention]

[PROBLEM - What challenge does this solve?]

[KEY INSIGHT #1]

[KEY INSIGHT #2]

[KEY INSIGHT #3]

[CALL TO ACTION]
Read the full guide on my website: fullaiengineer.com/learn/[article-slug]

[HASHTAGS]
#AIEngineering #MachineLearning #SoftwareDevelopment
```

### Example LinkedIn Post

```
Just spent 6 months building RAG systems in production. Here's what I learned:

Most developers make the same 3 mistakes that kill RAG performance:

1. Chunking documents without considering semantic boundaries
   → Results in incomplete context and hallucinations

2. Ignoring retrieval quality metrics
   → You can't improve what you don't measure

3. Using the wrong embedding model for their domain
   → Generic embeddings miss domain-specific nuance

The fix? Start with proper chunking strategy, implement hybrid search, and actually measure your retrieval accuracy.

I wrote a detailed guide on building production-ready RAG systems.

Read it here: fullaiengineer.com/learn/understanding-rag-systems

#AIEngineering #RAG #LLM #MachineLearning
```

---

## Example Workflow

### 1. Choose Your Topic
- Pick ONE specific concept
- Ask: "Can I explain this in 5-10 minutes?"
- Research: What are people asking about this?

### 2. Create an Outline
```
Title: Understanding Vector Databases for AI Applications

Hook: Vector databases are everywhere in AI, but most explanations are too technical

Structure:
1. What is a vector database? (analogy)
2. Why we need them for AI
3. Simple implementation example
4. When to use vs. traditional DB
5. Common mistakes
6. Conclusion
```

### 3. Write the Article
- Write the entire article in your code editor or notion
- Follow the content structure
- Add code examples
- Review and edit

### 4. Add to Your Website
1. Open `/src/data/articles.ts`
2. Copy the template
3. Fill in metadata
4. Convert your content to the content array format
5. Add to the articles array

### 5. Create LinkedIn Post
- Extract key insights
- Write hook
- Add link to full article
- Include relevant hashtags

### 6. Publish & Share
1. Commit and deploy your website
2. Post on LinkedIn
3. Engage with comments
4. Track what resonates

---

## Quick Reference: Adding a New Article

1. **Edit** `/src/data/articles.ts`
2. **Add** new article object to the `articles` array
3. **Test** locally: `npm run dev` and visit `/learn`
4. **Deploy** your changes
5. **Share** on LinkedIn with link to article

---

## Content Ideas

### AI Engineering
- "How to Choose the Right Embedding Model"
- "Understanding Token Limits and Context Windows"
- "Building Your First RAG System"
- "Prompt Engineering Patterns That Actually Work"
- "LLM Cost Optimization Strategies"

### Software Development
- "Next.js App Router vs Pages Router: When to Use Each"
- "TypeScript Generics Explained Simply"
- "Building Scalable APIs with Node.js"
- "Database Design for Modern Web Apps"

### Tutorial Series
- "AI Engineering from Scratch" (multi-part series)
- "Build a Production RAG System" (step-by-step)
- "German for Developers" (weekly lessons)

---

## Tips for Consistency

1. **Write weekly**: Set a schedule (e.g., every Friday)
2. **Keep a ideas list**: Note topics when inspiration strikes
3. **Batch similar topics**: Easier to write related content
4. **Repurpose content**: Turn code from projects into tutorials
5. **Listen to questions**: What are people asking you?

---

## Need Help?

- Check existing articles in `/src/data/articles.ts` for examples
- Start with shorter articles (600-800 words)
- Focus on topics you've recently worked on
- Share experiences, not just theory

Remember: Your unique perspective and real-world experience is what makes your content valuable!
