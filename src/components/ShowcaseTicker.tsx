import showcaseLazyUnicorn from "@/assets/showcase-lazy-unicorn.png";
import showcaseBreakingMuse from "@/assets/showcase-breaking-muse.png";
import showcaseSoloUnicorn from "@/assets/showcase-solo-unicorn.png";
import showcaseAutonomousCapitalism from "@/assets/showcase-autonomous-capitalism.png";
import showcaseLazyCloud from "@/assets/showcase-lazy-cloud.png";
import showcaseLazyCanvas from "@/assets/showcase-lazy-canvas.png";
import showcaseLazyExit from "@/assets/showcase-lazy-exit.png";
import showcaseLazySands from "@/assets/showcase-lazy-sands.png";

const sites = [
  { src: showcaseAutonomousCapitalism, name: "Autonomous Capitalism", tagline: "Autonomous news about autonomous news", url: "https://lazyfactoryventures.com" },
  { src: showcaseBreakingMuse, name: "Breaking Muse", tagline: "News powered business ideas", url: "https://breakingmuse.ai" },
  { src: showcaseLazyCanvas, name: "Lazy Canvas", tagline: "Design content for anything", url: "https://lazycanvas.com" },
  { src: showcaseLazyCloud, name: "Lazy Cloud", tagline: "Enterprise brains", url: "https://lazycloud.com" },
  { src: showcaseLazyExit, name: "Lazy Exit", tagline: "The marketplace for autonomous businesses", url: "https://lazyexit.com" },
  { src: showcaseLazySands, name: "Lazy Sands", tagline: "Diamond-rated Lovable agency", url: "https://lazysands.com" },
  { src: showcaseLazyUnicorn, name: "Lazy Unicorn", tagline: "Launch your autonomous business on Lovable", url: "https://lazyunicorn.ai" },
  { src: showcaseSoloUnicorn, name: "Solo Unicorn League", tagline: "The leaderboard for solo founders racing to $1 billion", url: "https://solounicornleague.com/" },
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
              className="shrink-0 w-72 md:w-80 aspect-[1920/1057] rounded-lg overflow-hidden border border-border/40 ring-0 ring-transparent ring-inset relative group block transition-all duration-500 hover:border-foreground/50 hover:ring-1 hover:ring-foreground/50"
            >
              <img
                src={site.src}
                alt={site.name}
                width={1920}
                height={1057}
                className="w-full h-full object-cover block"
                loading={i < sites.length ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-black backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-400 flex flex-col items-center justify-center text-center p-4">
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
