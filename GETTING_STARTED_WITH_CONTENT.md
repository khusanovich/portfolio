# Getting Started with Your Learning Content

## What Was Created

### 1. Learning Hub Pages
- **`/learn`** - Main page listing all your articles with category and tag filters
- **`/learn/[slug]`** - Individual article pages with full content

### 2. Article Management
- **`/src/data/articles.ts`** - Central file where all articles are stored
- Sample article included to show the structure

### 3. Templates & Guides
- **`ARTICLE_TEMPLATE.md`** - Complete guide for writing articles
- Content types, best practices, LinkedIn templates, and workflows

### 4. Navigation
- Added "Learn" link to your navbar (replaces "Learning Hub" hash link)

---

## Quick Start: Writing Your First Article

### Step 1: Plan Your Topic
Choose a specific, focused topic you can teach in 5-10 minutes. For example:
- "How to implement RAG with OpenAI embeddings"
- "Understanding LLM token limits"
- "Building your first AI agent"

### Step 2: Write Your Content
Use the template in `ARTICLE_TEMPLATE.md` to structure your article.

### Step 3: Add to Your Website
1. Open `/src/data/articles.ts`
2. Copy this template and add to the `articles` array:

```typescript
{
  slug: "your-url-friendly-title",
  title: "Your Article Title",
  description: "Brief 1-2 sentence overview of what readers will learn",
  category: "AI Engineering", // or "Software Development", "Language Learning", "Tutorial"
  publishedAt: "2024-03-20", // Today's date in YYYY-MM-DD format
  readTime: "5 min read",
  tags: ["Tag1", "Tag2", "Tag3"],
  featured: false,
  content: [
    // Your content blocks go here
  ]
}
```

### Step 4: Build Content Blocks
Use the content types from `ARTICLE_TEMPLATE.md`:

```typescript
content: [
  {
    type: "paragraph",
    content: "Your introduction paragraph..."
  },
  {
    type: "heading",
    level: 2,
    content: "Main Section"
  },
  {
    type: "code",
    language: "typescript",
    content: `const example = "code here";`
  },
  {
    type: "list",
    content: [
      "Point 1",
      "Point 2",
      "Point 3"
    ]
  }
]
```

### Step 5: Test Locally
```bash
npm run dev
```
Visit: `http://localhost:3000/learn`

### Step 6: Create LinkedIn Post
Use the template in `ARTICLE_TEMPLATE.md` to create a short teaser:

```
[Hook - 1 sentence]

[Problem statement]

[Key insight 1]
[Key insight 2]
[Key insight 3]

Read the full guide: fullaiengineer.com/learn/your-article-slug

#AIEngineering #YourTags
```

---

## File Structure

```
my-portfolio/
├── src/
│   ├── app/
│   │   └── learn/
│   │       ├── page.tsx          # Article listing page
│   │       └── [slug]/
│   │           └── page.tsx      # Individual article page
│   ├── data/
│   │   └── articles.ts           # All your articles
│   └── components/
│       ├── Navbar.tsx            # Updated with /learn link
│       └── ...
├── ARTICLE_TEMPLATE.md           # Your writing guide
└── GETTING_STARTED_WITH_CONTENT.md  # This file
```

---

## Content Types Reference

### Paragraph
```typescript
{ type: "paragraph", content: "Your text..." }
```

### Heading
```typescript
{ type: "heading", level: 2, content: "Section Title" }
```

### Code
```typescript
{ type: "code", language: "typescript", content: `code here` }
```

### List
```typescript
{ type: "list", content: ["Item 1", "Item 2"] }
```

### Callout
```typescript
{ type: "callout", content: "Pro tip: Important advice here" }
```

### Quote
```typescript
{ type: "quote", content: "Important statement to emphasize" }
```

---

## Example Workflow

1. **Monday**: Choose topic and create outline
2. **Tuesday-Wednesday**: Write full article
3. **Thursday**: Add to `/src/data/articles.ts` and test
4. **Friday**: Deploy and create LinkedIn post
5. **Weekend**: Engage with comments and feedback

---

## Tips for Success

1. **Start small**: 600-800 words is perfect
2. **Be specific**: One clear concept per article
3. **Show code**: Real examples are more valuable than theory
4. **Share experience**: What worked/didn't work for you
5. **Be consistent**: Weekly publishing builds audience

---

## Common Questions

### How do I add images?
1. Save images to `/public/images/article-slug/`
2. Use the image content type:
```typescript
{
  type: "image",
  content: "/images/article-slug/diagram.png",
  caption: "Description of the image"
}
```

### How do I change the URL?
Change the `slug` field. The URL will be `/learn/your-slug`

### How do I feature an article?
Set `featured: true` in the article object

### How do I delete an article?
Remove it from the `articles` array in `/src/data/articles.ts`

---

## Next Steps

1. Read through `ARTICLE_TEMPLATE.md` completely
2. Pick your first topic
3. Write a simple 600-word article
4. Add it to `/src/data/articles.ts`
5. Test with `npm run dev`
6. Deploy and share!

---

## Need Inspiration?

Check these topic ideas in `ARTICLE_TEMPLATE.md`:
- AI Engineering topics
- Software Development tutorials
- Real problems you've solved
- Tools and techniques you use

Remember: Your unique experience is what makes your content valuable. Don't try to be comprehensive - be practical and authentic!
