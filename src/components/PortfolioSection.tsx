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

const projects = [
  { name: "Autonomous Capitalism", tagline: "Autonomous news about autonomous news", url: "https://autonomouscapitalism.com/", src: portfolioAutonomousCapitalism },
  { name: "Breaking Muse", tagline: "News powered business ideas", url: "https://breakingmuse.ai/", src: portfolioBreakingMuse },
  { name: "Lazy Canvas", tagline: "Design content for anything", url: "https://lazycanvas.com/", src: portfolioLazyCanvas },
  { name: "Lazy Decacorn", tagline: "The prediction game for solo founders", url: "https://lazydecacorn.com/", src: portfolioLazyDecacorn },
  { name: "Lazy Cloud", tagline: "Enterprise brains", url: "https://lazycloud.ai/", src: portfolioLazyCloud },
  { name: "Lazy Exit", tagline: "The marketplace for autonomous businesses", url: "https://lazyexit.com/", src: portfolioLazyExit },
  { name: "Lazy Sands", tagline: "Diamond-rated Lovable agency", url: "https://lazysands.com/", src: portfolioLazySands },
  { name: "Lazy Tones", tagline: "Mood boards in 60 seconds", url: "https://lazytones.com/", src: portfolioLazyTones },
  { name: "Lazy Rent-A-Biz", tagline: "Rent a business, skip the build", url: "https://lazyrentabiz.com/", src: portfolioLazyRentabiz },
  { name: "Lazy Unicorn", tagline: "Launch your autonomous business on Lovable", url: "https://www.lazyunicorn.ai/", src: portfolioLazyUnicorn },
  { name: "Jordan Future Labs", tagline: "Startup ideas worth building in Jordan", url: "https://jordanfuturelabs.com/", src: portfolioJordanFutureLabs },
  { name: "Solo Unicorn League", tagline: "The leaderboard for solo founders racing to $1 billion", url: "https://solounicornleague.com/", src: portfolioSoloUnicornLeague },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 md:py-32 relative z-10">
      <div className="container">
        <div className="text-center mb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-heading mb-5">Recent builds</h2>
          <p className="text-muted-foreground font-light">Apps and platforms we've shipped.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-xl border border-border/50 bg-card/40 backdrop-blur-sm overflow-hidden hover:border-primary/20 hover:bg-card/70 transition-all duration-500"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.src}
                  alt={project.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <p className="text-sm font-heading mb-1">{project.name}</p>
                <p className="text-xs text-muted-foreground font-light">{project.tagline}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
