import Image from "next/image";
import FadeIn from "@/components/FadeIn";

interface VideoEntry {
  date: string;
  tag: string;
  title: string;
  description: string;
  // Set this to the ID from the YouTube URL to activate the card
  // e.g. youtube.com/watch?v=dQw4w9WgXcQ  →  youtubeId: "dQw4w9WgXcQ"
  youtubeId?: string;
}

const VIDEOS: VideoEntry[] = [
  {
    date: "2025",
    tag: "Event",
    title: "First event video",
    description: "Add a youtubeId to this entry to activate the thumbnail and link.",
    youtubeId: undefined,
  },
  {
    date: "2025",
    tag: "Event",
    title: "Second event video",
    description: "Conferences, demos, presentations — anything worth sharing from the events you attend.",
    youtubeId: undefined,
  },
];

function VideoCard({ entry, index }: { entry: VideoEntry; index: number }) {
  const href = entry.youtubeId
    ? `https://www.youtube.com/watch?v=${entry.youtubeId}`
    : undefined;

  const content = (
    <article className="group flex flex-col">
      {/* Thumbnail */}
      <div className="relative w-full aspect-video bg-foreground/8 overflow-hidden mb-5">
        {entry.youtubeId ? (
          <>
            <Image
              src={`https://img.youtube.com/vi/${entry.youtubeId}/hqdefault.jpg`}
              alt={entry.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Play overlay on hover */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-foreground/25">
              <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor" className="text-foreground ml-1" aria-hidden="true">
                  <path d="M3 2.5l10 5.5-10 5.5V2.5z" />
                </svg>
              </div>
            </div>
          </>
        ) : (
          /* Placeholder thumbnail */
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full border border-foreground/15 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="text-foreground/25 ml-0.5" aria-hidden="true">
                <path d="M3 2.5l10 5.5-10 5.5V2.5z" />
              </svg>
            </div>
          </div>
        )}
      </div>

      {/* Meta */}
      <div className="flex items-center gap-3 mb-3">
        <span className="text-xs font-sans text-foreground/35">{entry.date}</span>
        <span className="text-xs font-sans text-accent/60 border border-accent/25 px-2 py-0.5">
          {entry.tag}
        </span>
      </div>

      <h3 className="font-serif text-xl font-bold text-foreground leading-snug mb-2 group-hover:text-accent transition-colors duration-200">
        {entry.title}
      </h3>
      <p className="text-sm font-sans font-light text-foreground/55 leading-relaxed mb-4 flex-1">
        {entry.description}
      </p>

      {href ? (
        <span className="inline-flex items-center gap-1.5 text-xs font-sans text-accent">
          Watch on YouTube <span aria-hidden="true">→</span>
        </span>
      ) : (
        <span className="text-xs font-sans text-foreground/25 italic">Coming soon</span>
      )}
    </article>
  );

  return (
    <FadeIn delay={`${index * 0.08}s`}>
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="block">
          {content}
        </a>
      ) : (
        content
      )}
    </FadeIn>
  );
}

export default function Vlog() {
  return (
    <section id="vlog" className="py-32">
      <div className="max-w-5xl mx-auto px-6">

        <FadeIn>
          <p className="text-xs tracking-[0.2em] uppercase text-accent font-sans mb-6">
            Vlog
          </p>
          <hr className="border-0 border-t border-foreground/15 mb-4" />
          <p className="text-sm font-sans font-light text-foreground/40 mb-16">
            Videos from events, conferences, and moments worth sharing.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-10">
          {VIDEOS.map((entry, i) => (
            <VideoCard key={i} entry={entry} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
