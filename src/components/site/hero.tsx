import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden"
      aria-labelledby="hero-title"
    >
      <div className="hero-backdrop" aria-hidden="true">
        <img
          src="/captain-ahmed.png"
          alt=""
          width={912}
          height={1136}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl items-end px-5 pb-28 pt-24 md:items-center md:px-8 md:pb-24 md:pt-20">
        <div className="hero-copy flex max-w-xl flex-col items-start">
          <p className="mb-4 text-xs font-medium tracking-[0.22em] text-yellow">
            كابتن أحمد العلاوي
          </p>
          <h1
            id="hero-title"
            className="title-shine font-display text-5xl font-semibold leading-[1.15] md:text-6xl lg:text-7xl"
          >
            راحتك في بيتك
          </h1>
          <p className="mt-4 max-w-md text-lg text-muted md:text-xl">
            جلسات مساج منزلية برايفت للرجال
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <Badge>للرجال فقط</Badge>
            <Badge>زيارات منزلية فقط</Badge>
          </div>
          <Button asChild size="lg" className="gold-cta mt-8 min-w-44">
            <a href="#booking">احجز جلستك</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
