import showcaseLazyUnicorn from "@/assets/showcase-lazy-unicorn.png";
import showcaseBreakingMuse from "@/assets/showcase-breaking-muse.png";
import showcaseSoloUnicorn from "@/assets/showcase-solo-unicorn.png";
import showcaseAutonomousCapitalism from "@/assets/showcase-autonomous-capitalism.png";
import showcaseLazyCloud from "@/assets/showcase-lazy-cloud.png";

const sites = [
  { src: showcaseLazyUnicorn, name: "Lazy Unicorn", tagline: "Launch your autonomous business on Lovable", url: "https://lazyunicorn.ai" },
  { src: showcaseBreakingMuse, name: "Breaking Muse", tagline: "Turn today's news into your next startup idea", url: "https://breakingmuse.ai" },
  { src: showcaseSoloUnicorn, name: "Solo Unicorn League", tagline: "The leaderboard for solo founders racing to $1 billion", url: "https://solounicornleague.com/" },
  { src: showcaseAutonomousCapitalism, name: "Autonomous Capitalism", tagline: "Follow the autonomous revolution in real time", url: "https://lazyfactoryventures.com" },
  { src: showcaseLazyCloud, name: "Lazy Cloud", tagline: "Bring your file server to life", url: "https://lazycloud.com" },
];

const ShowcaseTicker = () => {
  const doubled = [...sites, ...sites];

  return (
    <div className="w-full overflow-hidden">
      <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-5">
        Recent builds
      </p>
      <div className="relative">
        <div className="flex gap-5 animate-ticker">
          {doubled.map((site, i) => (
            <a
              key={`${site.name}-${i}`}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 w-72 md:w-80 rounded-lg overflow-hidden border border-border/40 relative group block transition-all duration-500 hover:border-foreground/30"
            >
              <img
                src={site.src}
                alt={site.name}
                className="w-full h-auto block"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-background/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-400 flex flex-col items-center justify-center text-center p-4">
                <p className="font-heading text-foreground text-lg mb-1">{site.name}</p>
                <p className="text-muted-foreground text-xs font-light leading-relaxed">{site.tagline}</p>
              </div>
            </a>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
      </div>
    </div>
  );
};

export default ShowcaseTicker;
