import FadeIn from "@/components/FadeIn";

interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

const SERVICES: Service[] = [
  {
    icon: "🤖",
    title: "AI Integration & Development",
    description: "Build intelligent systems powered by LLMs, RAG, and custom AI models tailored to your business needs.",
    features: [
      "LLM-powered applications (GPT, Claude, Gemini)",
      "RAG systems for document intelligence",
      "AI chatbots and conversational interfaces",
      "Custom AI model integration",
      "Prompt engineering and optimization",
    ],
  },
  {
    icon: "🌐",
    title: "Website Development",
    description: "Modern, responsive websites built with cutting-edge technologies for optimal performance and user experience.",
    features: [
      "Custom website design and development",
      "Responsive and mobile-first design",
      "SEO optimization and performance tuning",
      "E-commerce solutions",
      "Content management systems",
    ],
  },
  {
    icon: "⚡",
    title: "Web Application Development",
    description: "Full-stack web applications with robust backends, intuitive frontends, and scalable architecture.",
    features: [
      "Next.js, React, and TypeScript applications",
      "RESTful and GraphQL APIs",
      "Database design and optimization",
      "Authentication and authorization systems",
      "Real-time features and WebSockets",
    ],
  },
  {
    icon: "🎮",
    title: "Game Development",
    description: "Interactive games and gamified applications with engaging mechanics and polished user experiences.",
    features: [
      "Unity game development (2D/3D)",
      "Mobile game development",
      "Gamification for apps and platforms",
      "Educational and training games",
      "Game UI/UX design",
    ],
  },
  {
    icon: "📱",
    title: "Mobile App Development",
    description: "Cross-platform mobile applications for iOS and Android with native-like performance.",
    features: [
      "React Native development",
      "Expo framework applications",
      "Cross-platform compatibility",
      "App store deployment",
      "Push notifications and analytics",
    ],
  },
  {
    icon: "🔧",
    title: "Technical Consulting",
    description: "Expert guidance on technology choices, architecture design, and AI implementation strategies.",
    features: [
      "Technology stack selection",
      "System architecture design",
      "AI feasibility assessment",
      "Code review and optimization",
      "Training and knowledge transfer",
    ],
  },
  {
    icon: "⚙️",
    title: "Process Automation",
    description: "Streamline workflows and eliminate repetitive tasks with intelligent automation solutions that save time and reduce errors.",
    features: [
      "Business process automation (BPA)",
      "Workflow optimization and design",
      "API integrations and data pipelines",
      "Automated reporting and analytics",
      "Custom scripts and automation tools",
    ],
  },
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <FadeIn delay={index * 0.08}>
      <article className="group bg-background border border-muted/20 p-8 hover:border-accent/30 transition-all duration-300 flex flex-col h-full">
        {/* Icon */}
        <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
          {service.icon}
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
          {service.title}
        </h3>

        {/* Divider */}
        <div className="w-12 h-px bg-accent/50 mb-6 group-hover:w-20 transition-all duration-300" />

        {/* Description */}
        <p className="text-base text-muted/80 leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Features List */}
        <ul className="space-y-3 flex-1">
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-muted/70">
              <span className="text-accent mt-1 flex-shrink-0">✓</span>
              <span className="group-hover:text-foreground/80 transition-colors duration-200">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-8 pt-6 border-t border-muted/20">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent/80 transition-colors duration-200"
          >
            Get Started →
          </a>
        </div>
      </article>
    </FadeIn>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-background relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <FadeIn>
          <div className="mb-16">
            <p className="font-mono text-xs tracking-widest uppercase text-muted mb-4">
              Services
            </p>
            <div className="w-16 h-px bg-accent/50" />
            <div className="mt-8 max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What I Can Build For You
              </h2>
              <p className="text-lg text-muted/80 leading-relaxed">
                From AI-powered intelligent systems to modern web applications and games,
                I deliver production-ready solutions tailored to your business needs.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <FadeIn delay={0.5}>
          <div className="mt-20 text-center">
            <div className="inline-block bg-surface border border-muted/20 p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-base text-muted/80 mb-8 max-w-2xl mx-auto">
                Let's discuss how I can help bring your ideas to life with cutting-edge technology and AI integration.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border-2 border-accent text-accent font-semibold hover:bg-accent hover:text-background transition-all duration-200"
              >
                Contact Me
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
