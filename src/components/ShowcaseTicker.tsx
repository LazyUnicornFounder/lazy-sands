import showcaseLazyUnicorn from "@/assets/showcase-lazy-unicorn.png";
import showcaseBreakingMuse from "@/assets/showcase-breaking-muse.png";
import showcaseSoloUnicorn from "@/assets/showcase-solo-unicorn.png";
import showcaseAutonomousCapitalism from "@/assets/showcase-autonomous-capitalism.png";
import showcaseLazyCloud from "@/assets/showcase-lazy-cloud.png";

const sites = [
  { src: showcaseLazyUnicorn, alt: "Lazy Unicorn" },
  { src: showcaseBreakingMuse, alt: "Breaking Muse" },
  { src: showcaseSoloUnicorn, alt: "Solo Unicorn League" },
  { src: showcaseAutonomousCapitalism, alt: "Autonomous Capitalism" },
  { src: showcaseLazyCloud, alt: "Lazy Cloud" },
];

const ShowcaseTicker = () => {
  const doubled = [...sites, ...sites];

  return (
    <div className="w-full overflow-hidden">
      <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">
        Websites I've built
      </p>
      <div className="relative">
        <div className="flex gap-4 animate-ticker">
          {doubled.map((site, i) => (
            <div
              key={`${site.alt}-${i}`}
              className="shrink-0 w-72 md:w-80 rounded-lg overflow-hidden border border-border shadow-sm"
            >
              <img
                src={site.src}
                alt={site.alt}
                className="w-full h-auto block"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
      </div>
    </div>
  );
};

export default ShowcaseTicker;
