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
    <article className="gradient-border bg-white/6 backdrop-blur-sm flex flex-col group hover:bg-white/8 transition-colors duration-300">
      <div className="relative w-full aspect-video bg-white/7 overflow-hidden">
        {entry.youtubeId ? (
          <>
            <Image src={`https://img.youtube.com/vi/${entry.youtubeId}/hqdefault.jpg`}
              alt={entry.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width:768px) 100vw, 50vw" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/50">
              <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center glow-accent">
                <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor" className="text-background ml-1" aria-hidden="true">
                  <path d="M3 2.5l10 5.5-10 5.5V2.5z" />
                </svg>
              </div>
            </div>
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full border border-accent/40 flex items-center justify-center float">
              <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor" className="text-accent/55 ml-1" aria-hidden="true">
                <path d="M3 2.5l10 5.5-10 5.5V2.5z" />
              </svg>
            </div>
          </div>
        )}
      </div>
      <div className="p-7 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs text-foreground/40">{entry.date}</span>
          <span className="font-mono text-xs text-accent/75 border border-accent/35 px-2 py-0.5">{entry.tag}</span>
        </div>
        <h3 className="font-serif text-xl font-bold text-foreground leading-snug mb-2 group-hover:gradient-text transition-all duration-300">{entry.title}</h3>
        <p className="text-sm font-sans font-light text-foreground/60 leading-relaxed mb-4 flex-1">{entry.description}</p>
        {href
          ? <span className="inline-flex items-center gap-1.5 text-xs font-mono text-accent">Watch on YouTube →</span>
          : <span className="text-xs font-mono text-foreground/35 italic">Coming soon</span>}
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
    <section id="vlog" className="py-32 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent mb-6">Vlog</p>
          <hr className="border-0 border-t border-white/12 mb-4" />
          <p className="text-sm font-sans font-light text-foreground/50 mb-16">
            Videos from events, conferences, and moments worth sharing.
          </p>
        </FadeIn>
        <div className="grid sm:grid-cols-2 gap-6">
          {VIDEOS.map((e, i) => <VideoCard key={i} entry={e} index={i} />)}
        </div>
      </div>
    </section>
  );
}
