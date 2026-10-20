# How to Add a New Article - Quick Guide

## Step-by-Step Process

### 1. Open the Articles File
Open `/src/data/articles.ts` in your code editor.

### 2. Add Your New Article
Scroll to the bottom of the `articles` array (before the closing `]` and after the comment "Add more sample articles here").

Add your new article:

```typescript
{
  slug: "your-article-url",
  title: "Your Article Title",
  description: "Brief 1-2 sentence description that appears on the listing page",
  category: "AI Engineering", // or "Software Development", "Language Learning", "Tutorial"
  publishedAt: "2024-03-20", // Today's date in YYYY-MM-DD format
  readTime: "7 min read",
  tags: ["Tag1", "Tag2", "Tag3"],
  featured: false, // Set to true to feature on homepage
  content: [
    // Your content blocks go here
  ],
  sources: [
    // Optional: Your sources go here
  ]
},
```

### 3. Add Content Blocks

Inside the `content` array, add your article content using these block types:

#### Paragraph
```typescript
{
  type: "paragraph",
  content: "Your text here..."
}
```

#### Heading
```typescript
{
  type: "heading",
  level: 2, // 1, 2, or 3
  content: "Section Title"
}
```

#### Code Block
```typescript
{
  type: "code",
  language: "typescript", // or "python", "javascript", etc.
  content: `const example = "your code here";
console.log(example);`
}
```

#### List
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

#### Callout (Pro Tip)
```typescript
{
  type: "callout",
  content: "Pro tip: Important advice or key insight here"
}
```

#### Quote
```typescript
{
  type: "quote",
  content: "Important statement to emphasize"
}
```

### 4. Add Sources (Optional but Recommended)

Inside the `sources` array, add your references:

```typescript
sources: [
  {
    title: "MemGPT: Towards LLMs as Operating Systems",
    url: "https://arxiv.org/abs/2310.08560",
    type: "paper", // repository | article | book | documentation | paper | video | code
    author: "Charles Packer et al.", // Optional
    description: "Brief description of what this source provides" // Optional
  },
  {
    title: "LangChain Memory Documentation",
    url: "https://python.langchain.com/docs/modules/memory/",
    type: "documentation",
    description: "Official docs for memory implementations"
  }
]
```

**Source types:**
- `"repository"` 🔗 - GitHub repos
- `"article"` 📄 - Blog posts
- `"book"` 📚 - Books
- `"documentation"` 📖 - Official docs
- `"paper"` 📝 - Research papers
- `"video"` 🎥 - Videos/courses
- `"code"` 💻 - Code snippets

### 5. Test Your Article

```bash
npm run dev
```

Visit: `http://localhost:3000/learn/your-article-url`

Check:
- ✓ Article appears in the listing
- ✓ Content renders correctly
- ✓ Code blocks display properly
- ✓ Sources appear at the bottom
- ✓ All links work

### 6. Deploy

Once everything looks good:
```bash
git add .
git commit -m "Add article: Your Article Title"
git push
```

---

## Complete Example

Here's a complete article with sources:

```typescript
{
  slug: "how-agentic-memory-works",
  title: "How Agentic Memory Works: Building AI Agents That Remember",
  description: "Understanding memory systems in AI agents - from short-term context to long-term knowledge persistence.",
  category: "AI Engineering",
  publishedAt: "2024-03-20",
  readTime: "10 min read",
  tags: ["AI Agents", "Memory Systems", "LLM", "Vector Databases"],
  featured: false,
  content: [
    {
      type: "paragraph",
      content: "AI agents need memory to be truly useful. Without memory, every conversation starts from scratch."
    },
    {
      type: "heading",
      level: 2,
      content: "What is Agentic Memory?"
    },
    {
      type: "paragraph",
      content: "Agentic memory refers to the ability of AI agents to store, retrieve, and utilize information from past interactions."
    },
    {
      type: "list",
      content: [
        "Maintain context across multiple interactions",
        "Learn user preferences and behavior patterns",
        "Recall specific facts from previous conversations"
      ]
    },
    {
      type: "code",
      language: "typescript",
      content: \`class ShortTermMemory {
  private messages: Message[] = [];

  addMessage(role: string, content: string) {
    this.messages.push({ role, content });
  }
}\`
    },
    {
      type: "callout",
      content: "Pro tip: Start simple with just short-term memory, then add long-term memory only when you have a clear use case."
    }
  ],
  sources: [
    {
      title: "MemGPT: Towards LLMs as Operating Systems",
      url: "https://arxiv.org/abs/2310.08560",
      type: "paper",
      author: "Charles Packer et al.",
      description: "Research paper on managing memory in LLM-based agents."
    },
    {
      title: "LangChain Memory Documentation",
      url: "https://python.langchain.com/docs/modules/memory/",
      type: "documentation",
      description: "Official documentation covering various memory implementations."
    },
    {
      title: "Mem0: Memory Layer for AI Agents",
      url: "https://github.com/mem0ai/mem0",
      type: "repository",
      author: "Mem0",
      description: "Open-source memory layer for AI applications."
    }
  ]
}
```

---

## Tips

1. **Write in simple language** - Explain like you're talking to a colleague
2. **Use code examples** - Show, don't just tell
3. **Add real sources** - Link to actual repos, papers, and docs
4. **Keep it focused** - One clear topic per article
5. **Test thoroughly** - View your article before deploying

## Need More Help?

- See `ARTICLE_TEMPLATE.md` for detailed writing guidelines
- See `GETTING_STARTED_WITH_CONTENT.md` for workflow tips
- Check existing articles in `/src/data/articles.ts` for examples

---

**Ready to write?** Open `/src/data/articles.ts` and start adding your article!
