import Image from "next/image";
import FadeIn from "@/components/FadeIn";

interface VideoEntry { date: string; tag: string; title: string; description: string; youtubeId?: string; }

const VIDEOS: VideoEntry[] = [
  { date: "2025", tag: "Event", title: "First event video",
    description: "Add a youtubeId to this entry to activate the thumbnail and link.",
    youtubeId: undefined },
  { date: "2025", tag: "Event", title: "Second event video",
    description: "Conferences, demos, presentations — anything worth sharing from the events you attend.",
    youtubeId: undefined },
];

function VideoCard({ entry, index }: { entry: VideoEntry; index: number }) {
  const href = entry.youtubeId ? `https://www.youtube.com/watch?v=${entry.youtubeId}` : undefined;

  const card = (
    <article className="bg-surface border border-muted/20 flex flex-col group hover:border-accent/30 transition-all duration-300">
      <div className="relative w-full aspect-video bg-background/50 overflow-hidden">
        {entry.youtubeId ? (
          <>
            <Image src={`https://img.youtube.com/vi/${entry.youtubeId}/hqdefault.jpg`}
              alt={entry.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width:768px) 100vw, 50vw" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/60">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor" className="text-background ml-1" aria-hidden="true">
                  <path d="M3 2.5l10 5.5-10 5.5V2.5z" />
                </svg>
              </div>
            </div>
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full border-2 border-muted/30 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor" className="text-muted/50 ml-1" aria-hidden="true">
                <path d="M3 2.5l10 5.5-10 5.5V2.5z" />
              </svg>
            </div>
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs text-muted/60">{entry.date}</span>
          <span className="text-muted/40">·</span>
          <span className="text-xs font-medium text-accent/80 uppercase tracking-wider">{entry.tag}</span>
        </div>
        <h3 className="text-xl font-bold text-foreground leading-tight mb-2 group-hover:text-accent transition-colors duration-300">{entry.title}</h3>
        <p className="text-sm text-muted/80 leading-relaxed mb-4 flex-1">{entry.description}</p>
        {href
          ? <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent">Watch on YouTube →</span>
          : <span className="text-sm text-muted/50 italic">Coming soon</span>}
      </div>
    </article>
  );

  return (
    <FadeIn delay={index * 0.08}>
      {href ? <a href={href} target="_blank" rel="noopener noreferrer" className="block">{card}</a> : card}
    </FadeIn>
  );
}

export default function Vlog() {
  return (
    <section id="vlog" className="py-24 md:py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <FadeIn>
          <div className="mb-16">
            <p className="font-mono text-xs tracking-widest uppercase text-muted mb-4">
              Video
            </p>
            <div className="w-16 h-px bg-accent/50" />
            <p className="text-sm text-muted/70 mt-6">
              Videos from events, conferences, and moments worth sharing.
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-8">
          {VIDEOS.map((e, i) => <VideoCard key={i} entry={e} index={i} />)}
        </div>
      </div>
    </section>
  );
}
