import portfolioAutonomousCapitalism from "@/assets/portfolio-autonomous-capitalism.png";
import portfolioBreakingMuse from "@/assets/portfolio-breaking-muse.png";
import portfolioLazyCanvas from "@/assets/portfolio-lazy-canvas.png";
import portfolioLazyDecacorn from "@/assets/portfolio-lazy-decacorn.png";
import portfolioLazyCloud from "@/assets/portfolio-lazy-cloud.png";
import portfolioLazyExit from "@/assets/portfolio-lazy-exit.png";
import portfolioLazySands from "@/assets/portfolio-lazy-sands.png";
import portfolioLazyTones from "@/assets/portfolio-lazy-tones.png";
import portfolioLazyRentabiz from "@/assets/portfolio-lazy-rentabiz.png";
import portfolioLazyUnicorn from "@/assets/portfolio-lazy-unicorn.png";
import portfolioJordanFutureLabs from "@/assets/portfolio-jordan-future-labs.png";
import portfolioSoloUnicornLeague from "@/assets/portfolio-solo-unicorn-league.png";

const sites = [
  { src: portfolioAutonomousCapitalism, name: "Autonomous Capitalism", tagline: "Autonomous news about autonomous news", url: "https://autonomouscapitalism.com/" },
  { src: portfolioBreakingMuse, name: "Breaking Muse", tagline: "News powered business ideas", url: "https://breakingmuse.ai/" },
  { src: portfolioLazyCanvas, name: "Lazy Canvas", tagline: "Design content for anything", url: "https://lazycanvas.com/" },
  { src: portfolioLazyDecacorn, name: "Lazy Decacorn", tagline: "The prediction game for solo founders", url: "https://lazydecacorn.com/" },
  { src: portfolioLazyCloud, name: "Lazy Cloud", tagline: "Enterprise brains", url: "https://lazycloud.ai/" },
  { src: portfolioLazyExit, name: "Lazy Exit", tagline: "The marketplace for autonomous businesses", url: "https://lazyexit.com/" },
  { src: portfolioLazySands, name: "Lazy Sands", tagline: "Diamond-rated Lovable agency", url: "https://lazysands.com/" },
  { src: portfolioLazyTones, name: "Lazy Tones", tagline: "Mood boards in 60 seconds", url: "https://lazytones.com/" },
  { src: portfolioLazyRentabiz, name: "Lazy Rent-A-Biz", tagline: "Rent a business, skip the build", url: "https://lazyrentabiz.com/" },
  { src: portfolioLazyUnicorn, name: "Lazy Unicorn", tagline: "Launch your autonomous business on Lovable", url: "https://www.lazyunicorn.ai/" },
  { src: portfolioJordanFutureLabs, name: "Jordan Future Labs", tagline: "Startup ideas worth building in Jordan", url: "https://jordanfuturelabs.com/" },
  { src: portfolioSoloUnicornLeague, name: "Solo Unicorn League", tagline: "The leaderboard for solo founders racing to $1 billion", url: "https://solounicornleague.com/" },
];

const ShowcaseTicker = () => {
  return (
    <div className="w-full">
      <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-5">
        Recent builds
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {sites.map((site) => (
          <a
            key={site.name}
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            className="aspect-[1920/1057] rounded-lg overflow-hidden border border-border/40 relative group block transition-all duration-500 hover:border-foreground/50 hover:ring-1 hover:ring-foreground/50"
          >
            <img
              src={site.src}
              alt={site.name}
              width={1920}
              height={1057}
              className="w-full h-full object-cover block"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-400 flex flex-col items-center justify-center text-center p-4">
              <p className="font-heading text-foreground text-lg mb-1">{site.name}</p>
              <p className="text-muted-foreground text-xs font-light leading-relaxed">{site.tagline}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ShowcaseTicker;