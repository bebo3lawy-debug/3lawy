import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";

export function About() {
  return (
    <section id="about" className="relative px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading kicker="نبذة" title="من أنا" />
        </Reveal>
        <Reveal delay={80}>
          <div className="glass-card max-w-3xl rounded-2xl p-5 md:p-6">
            <div className="flex flex-row items-start gap-4">
              <div className="size-24 shrink-0 overflow-hidden rounded-xl border-2 border-yellow shadow-glow sm:size-32">
                <img
                  src="/captain-ahmed.png"
                  alt="كابتن أحمد العلاوي"
                  width={912}
                  height={1136}
                  className="size-full object-cover object-[center_12%]"
                />
              </div>
              <div className="min-w-0 flex-1 text-start">
                <h3 className="title-shine font-display text-xl font-semibold sm:text-2xl">
                  كابتن أحمد العلاوي
                </h3>
                <ul className="mt-3 space-y-1.5 text-sm text-muted sm:text-base">
                  <li>🎓 بكالوريوس علوم الرياضة</li>
                  <li>🏅 مدرب معتمد من نقابة المهن الرياضية</li>
                </ul>
              </div>
            </div>
            <p className="mt-5 max-w-prose text-fg/90">
              جلسات مساج منزلية برايفت للرجال، مع اختيار أسلوب وضغط المساج المناسب
              حسب احتياجك وراحتك، بهدف الاسترخاء وتخفيف الشد والإجهاد.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
