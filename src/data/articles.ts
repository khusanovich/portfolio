export interface Source {
  title: string;
  url: string;
  type: "repository" | "article" | "book" | "documentation" | "paper" | "video" | "code";
  author?: string;
  description?: string;
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  category: "AI Engineering" | "Software Development" | "Language Learning" | "Tutorial";
  publishedAt: string; // ISO date string
  readTime: string; // e.g., "5 min read"
  tags: string[];
  content: ArticleContent[];
  sources?: Source[]; // Add sources/references
  featured?: boolean;
}

export interface ArticleContent {
  type: "heading" | "paragraph" | "code" | "list" | "image" | "quote" | "callout";
  content: string | string[];
  language?: string; // for code blocks
  caption?: string; // for images
  level?: 1 | 2 | 3; // for headings
}

// Sample articles - replace with your real content
export const articles: Article[] = [
  {
    slug: "understanding-rag-systems",
    title: "Understanding RAG Systems: A Practical Guide",
    description: "Learn how Retrieval-Augmented Generation (RAG) works and how to implement it in your AI applications.",
    category: "AI Engineering",
    publishedAt: "2024-03-15",
    readTime: "8 min read",
    tags: ["RAG", "LLM", "Vector Databases", "AI"],
    featured: true,
    content: [
      {
        type: "paragraph",
        content: "Retrieval-Augmented Generation (RAG) has become one of the most important patterns in AI engineering. In this guide, we'll explore what RAG is, why it matters, and how to implement it effectively."
      },
      {
        type: "heading",
        level: 2,
        content: "What is RAG?"
      },
      {
        type: "paragraph",
        content: "RAG is a technique that combines the power of large language models with external knowledge retrieval. Instead of relying solely on the model's training data, RAG systems retrieve relevant information from a knowledge base and use it to generate more accurate, contextual responses."
      },
      {
        type: "heading",
        level: 2,
        content: "Key Components"
      },
      {
        type: "list",
        content: [
          "Document Chunking: Breaking documents into manageable pieces",
          "Embeddings: Converting text into vector representations",
          "Vector Database: Storing and searching embeddings efficiently",
          "Retrieval: Finding relevant context for a given query",
          "Generation: Using retrieved context to generate responses"
        ]
      },
      {
        type: "heading",
        level: 2,
        content: "Simple Implementation Example"
      },
      {
        type: "code",
        language: "typescript",
        content: `import { OpenAI } from "openai";
import { createEmbedding, searchVectorDB } from "./utils";

async function ragQuery(query: string) {
  // 1. Create embedding for the query
  const queryEmbedding = await createEmbedding(query);

  // 2. Search vector database for relevant documents
  const relevantDocs = await searchVectorDB(queryEmbedding, topK: 3);

  // 3. Build context from retrieved documents
  const context = relevantDocs.map(doc => doc.content).join("\\n\\n");

  // 4. Generate response using context
  const openai = new OpenAI();
  const response = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: "Answer based on the provided context."
      },
      {
        role: "user",
        content: \`Context: \${context}\\n\\nQuestion: \${query}\`
      }
    ]
  });

  return response.choices[0].message.content;
}`
      },
      {
        type: "callout",
        content: "Pro tip: Always validate that your retrieved documents are actually relevant to the query. Irrelevant context can confuse the model and lead to hallucinations."
      },
      {
        type: "heading",
        level: 2,
        content: "Best Practices"
      },
      {
        type: "list",
        content: [
          "Chunk your documents intelligently - consider semantic boundaries",
          "Use appropriate embedding models for your domain",
          "Implement hybrid search (combining vector and keyword search)",
          "Monitor retrieval quality and iterate on your chunking strategy",
          "Add metadata to chunks for better filtering and routing"
        ]
      },
      {
        type: "heading",
        level: 2,
        content: "Common Pitfalls"
      },
      {
        type: "paragraph",
        content: "Many developers make these mistakes when implementing RAG:"
      },
      {
        type: "list",
        content: [
          "Chunks that are too large or too small",
          "Not considering chunk overlap for context preservation",
          "Ignoring the quality of source documents",
          "Not monitoring retrieval accuracy",
          "Overlooking the cost implications of embeddings at scale"
        ]
      },
      {
        type: "heading",
        level: 2,
        content: "Conclusion"
      },
      {
        type: "paragraph",
        content: "RAG is a powerful technique that can significantly improve the accuracy and reliability of your AI applications. Start simple, measure your results, and iterate based on real-world performance."
      }
    ]
  },
  {
    slug: "how-agentic-memory-works",
    title: "How Agentic Memory Works: Building AI Agents That Remember",
    description: "Understanding memory systems in AI agents - from short-term context to long-term knowledge persistence. Learn how agents remember conversations, learn from interactions, and retrieve relevant information.",
    category: "AI Engineering",
    publishedAt: "2024-03-20",
    readTime: "10 min read",
    tags: ["AI Agents", "Memory Systems", "LLM", "Vector Databases"],
    featured: false,
    content: [
      {
        type: "paragraph",
        content: "AI agents need memory to be truly useful. Without memory, every conversation starts from scratch. With it, agents can learn from past interactions, maintain context, and provide personalized experiences. Let's explore how agentic memory actually works."
      },
      {
        type: "heading",
        level: 2,
        content: "What is Agentic Memory?"
      },
      {
        type: "paragraph",
        content: "Agentic memory refers to the ability of AI agents to store, retrieve, and utilize information from past interactions. Think of it like human memory - we have short-term memory for current conversations and long-term memory for experiences and knowledge."
      },
      {
        type: "paragraph",
        content: "In AI systems, memory enables agents to:"
      },
      {
        type: "list",
        content: [
          "Maintain context across multiple interactions",
          "Learn user preferences and behavior patterns",
          "Recall specific facts and details from previous conversations",
          "Build upon past decisions and outcomes",
          "Provide personalized and contextual responses"
        ]
      },
      {
        type: "heading",
        level: 2,
        content: "Types of Agent Memory"
      },
      {
        type: "heading",
        level: 3,
        content: "1. Short-Term Memory (Working Memory)"
      },
      {
        type: "paragraph",
        content: "This is the context window of the LLM - the immediate conversation history. It's fast but limited by token constraints (typically 4K-128K tokens depending on the model)."
      },
      {
        type: "code",
        language: "typescript",
        content: `// Simple short-term memory implementation
interface Message {
  role: "user" | "assistant" | "system";
  content: string;
  timestamp: Date;
}

class ShortTermMemory {
  private messages: Message[] = [];
  private maxTokens: number = 4000;

  addMessage(role: Message["role"], content: string) {
    this.messages.push({
      role,
      content,
      timestamp: new Date()
    });

    // Trim old messages if we exceed token limit
    this.trimToTokenLimit();
  }

  getContext(): Message[] {
    return this.messages;
  }

  private trimToTokenLimit() {
    // Keep removing oldest messages until under limit
    while (this.estimateTokens() > this.maxTokens) {
      this.messages.shift();
    }
  }

  private estimateTokens(): number {
    // Rough estimate: ~4 chars per token
    const totalChars = this.messages
      .map(m => m.content.length)
      .reduce((a, b) => a + b, 0);
    return Math.ceil(totalChars / 4);
  }
}`
      },
      {
        type: "heading",
        level: 3,
        content: "2. Long-Term Memory (Persistent Memory)"
      },
      {
        type: "paragraph",
        content: "Long-term memory stores information beyond the current session. This typically uses vector databases to store and retrieve memories based on semantic similarity."
      },
      {
        type: "code",
        language: "typescript",
        content: `// Long-term memory with vector storage
import { OpenAI } from "openai";

interface Memory {
  id: string;
  content: string;
  embedding: number[];
  timestamp: Date;
  importance: number; // 0-1 scale
  metadata?: Record<string, any>;
}

class LongTermMemory {
  private openai = new OpenAI();
  private memories: Memory[] = [];

  async addMemory(content: string, importance: number = 0.5) {
    // Create embedding for the memory
    const embedding = await this.createEmbedding(content);

    const memory: Memory = {
      id: crypto.randomUUID(),
      content,
      embedding,
      timestamp: new Date(),
      importance,
    };

    this.memories.push(memory);

    // In production, save to vector database (Pinecone, Weaviate, etc.)
    // await vectorDB.upsert(memory);
  }

  async recall(query: string, topK: number = 5): Promise<Memory[]> {
    // Create embedding for query
    const queryEmbedding = await this.createEmbedding(query);

    // Find most similar memories
    const scored = this.memories.map(memory => ({
      memory,
      similarity: this.cosineSimilarity(queryEmbedding, memory.embedding)
    }));

    // Sort by similarity and importance
    scored.sort((a, b) => {
      const scoreA = a.similarity * a.memory.importance;
      const scoreB = b.similarity * b.memory.importance;
      return scoreB - scoreA;
    });

    return scored.slice(0, topK).map(s => s.memory);
  }

  private async createEmbedding(text: string): Promise<number[]> {
    const response = await this.openai.embeddings.create({
      model: "text-embedding-3-small",
      input: text,
    });
    return response.data[0].embedding;
  }

  private cosineSimilarity(a: number[], b: number[]): number {
    const dotProduct = a.reduce((sum, val, i) => sum + val * b[i], 0);
    const magA = Math.sqrt(a.reduce((sum, val) => sum + val * val, 0));
    const magB = Math.sqrt(b.reduce((sum, val) => sum + val * val, 0));
    return dotProduct / (magA * magB);
  }
}`
      },
      {
        type: "heading",
        level: 3,
        content: "3. Entity Memory"
      },
      {
        type: "paragraph",
        content: "Entity memory tracks specific information about users, objects, or concepts. It's structured data that's easy to query and update."
      },
      {
        type: "code",
        language: "typescript",
        content: `// Entity memory for tracking user information
interface UserEntity {
  userId: string;
  preferences: Record<string, any>;
  facts: Map<string, string>;
  lastInteraction: Date;
}

class EntityMemory {
  private entities = new Map<string, UserEntity>();

  updateEntity(userId: string, key: string, value: any) {
    let entity = this.entities.get(userId);

    if (!entity) {
      entity = {
        userId,
        preferences: {},
        facts: new Map(),
        lastInteraction: new Date(),
      };
      this.entities.set(userId, entity);
    }

    entity.facts.set(key, value);
    entity.lastInteraction = new Date();
  }

  getEntityFacts(userId: string): Map<string, string> | undefined {
    return this.entities.get(userId)?.facts;
  }

  // Example: Track user preferences
  setPreference(userId: string, preference: string, value: any) {
    const entity = this.entities.get(userId);
    if (entity) {
      entity.preferences[preference] = value;
    }
  }
}`
      },
      {
        type: "heading",
        level: 2,
        content: "Putting It All Together"
      },
      {
        type: "paragraph",
        content: "A complete agent memory system combines all three types:"
      },
      {
        type: "code",
        language: "typescript",
        content: `class AgentMemory {
  private shortTerm: ShortTermMemory;
  private longTerm: LongTermMemory;
  private entity: EntityMemory;

  constructor() {
    this.shortTerm = new ShortTermMemory();
    this.longTerm = new LongTermMemory();
    this.entity = new EntityMemory();
  }

  async processUserMessage(userId: string, message: string) {
    // 1. Add to short-term memory
    this.shortTerm.addMessage("user", message);

    // 2. Recall relevant long-term memories
    const relevantMemories = await this.longTerm.recall(message, 3);

    // 3. Get user entity data
    const userFacts = this.entity.getEntityFacts(userId);

    // 4. Build context for LLM
    const context = this.buildContext(
      this.shortTerm.getContext(),
      relevantMemories,
      userFacts
    );

    return context;
  }

  async saveImportantInfo(content: string, importance: number) {
    // Store important information in long-term memory
    await this.longTerm.addMemory(content, importance);
  }

  private buildContext(
    shortTerm: Message[],
    longTerm: Memory[],
    entities: Map<string, string> | undefined
  ): string {
    let context = "## Conversation History\\n";
    context += shortTerm.map(m => \`\${m.role}: \${m.content}\`).join("\\n");

    if (longTerm.length > 0) {
      context += "\\n\\n## Relevant Past Memories\\n";
      context += longTerm.map(m => m.content).join("\\n");
    }

    if (entities && entities.size > 0) {
      context += "\\n\\n## User Information\\n";
      entities.forEach((value, key) => {
        context += \`\${key}: \${value}\\n\`;
      });
    }

    return context;
  }
}`
      },
      {
        type: "heading",
        level: 2,
        content: "Best Practices"
      },
      {
        type: "list",
        content: [
          "Prioritize memories by importance - not everything needs to be remembered",
          "Implement memory decay - older, less relevant memories should have lower priority",
          "Use metadata for filtering - add tags, categories, or timestamps to memories",
          "Compress memories - summarize long conversations before storing",
          "Consider privacy - implement memory deletion and user control",
          "Monitor costs - embeddings and vector storage add up at scale"
        ]
      },
      {
        type: "callout",
        content: "Pro tip: Start simple with just short-term memory, then add long-term memory only when you have a clear use case. Many applications don't need complex memory systems."
      },
      {
        type: "heading",
        level: 2,
        content: "Common Challenges"
      },
      {
        type: "paragraph",
        content: "Building memory systems comes with challenges:"
      },
      {
        type: "list",
        content: [
          "Memory relevance: Not all retrieved memories are useful for the current context",
          "Conflicting information: Old memories might contradict new information",
          "Scale: Managing millions of memories requires careful architecture",
          "Privacy: Storing user data requires proper security and compliance",
          "Cost: Embeddings and vector database operations can be expensive"
        ]
      },
      {
        type: "heading",
        level: 2,
        content: "Conclusion"
      },
      {
        type: "paragraph",
        content: "Agentic memory is essential for building AI agents that feel intelligent and personalized. By combining short-term context, long-term semantic memory, and structured entity data, you can create agents that truly remember and learn from interactions. Start with the basics and iterate based on your specific use case."
      }
    ],
    sources: [
      {
        title: "MemGPT: Towards LLMs as Operating Systems",
        url: "https://arxiv.org/abs/2310.08560",
        type: "paper",
        author: "Charles Packer et al.",
        description: "Research paper on managing memory in LLM-based agents, introducing hierarchical memory management inspired by operating systems."
      },
      {
        title: "LangChain Memory Documentation",
        url: "https://python.langchain.com/docs/modules/memory/",
        type: "documentation",
        description: "Official documentation covering various memory implementations in LangChain, including conversation buffer, summary, and vector store memory."
      },
      {
        title: "Building LLM-Powered Applications - Memory Patterns",
        url: "https://github.com/openai/openai-cookbook/blob/main/examples/How_to_build_an_agent_with_the_node_sdk.ipynb",
        type: "repository",
        author: "OpenAI",
        description: "OpenAI Cookbook examples showing practical implementations of memory in agent systems."
      },
      {
        title: "Mem0: Memory Layer for AI Agents",
        url: "https://github.com/mem0ai/mem0",
        type: "repository",
        author: "Mem0",
        description: "Open-source memory layer for AI applications with support for user, session, and entity memory management."
      },
      {
        title: "Generative Agents: Interactive Simulacra of Human Behavior",
        url: "https://arxiv.org/abs/2304.03442",
        type: "paper",
        author: "Joon Sung Park et al.",
        description: "Influential paper on creating agents with memory and reflection capabilities, demonstrating emergent social behaviors."
      }
    ]
  },
  // Add more sample articles here as you write them
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(article => article.slug === slug);
}

export function getArticlesByCategory(category: Article["category"]): Article[] {
  return articles.filter(article => article.category === category);
}

export function getFeaturedArticles(): Article[] {
  return articles.filter(article => article.featured);
}

export function getAllTags(): string[] {
  const tagSet = new Set<string>();
  articles.forEach(article => {
    article.tags.forEach(tag => tagSet.add(tag));
  });
  return Array.from(tagSet).sort();
}
