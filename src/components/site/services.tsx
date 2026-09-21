import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";

const SERVICES = [
  {
    num: "01",
    title: "المساج السويدي",
    body: "مساج متوازن بضغط خفيف إلى متوسط، مناسب للاسترخاء وتخفيف الإجهاد.",
  },
  {
    num: "02",
    title: "المساج العلاجي",
    body: "مناسب للشد والإجهاد العضلي، مع اختيار الأسلوب والضغط بما يناسب احتياج العميل.",
  },
  {
    num: "03",
    title: "Deep Tissue",
    body: "مساج عميق بضغط أقوى لمن يفضل المساج القوي والعميق.",
  },
  {
    num: "04",
    title: "الحجامة",
    body: "جلسات حجامة بأساليب مختلفة حسب احتياج العميل.",
    types: ["جافة", "تشريطيّة", "منزلقة"],
  },
] as const;

export function Services() {
  return (
    <section id="services" className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading kicker="الخدمات" title="خدماتي" />
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {SERVICES.map((service, i) => (
            <Reveal key={service.num} delay={i * 70}>
              <article className="service-card glass-card h-full rounded-2xl p-5 md:p-6">
                <p className="font-display text-sm tracking-[0.18em] text-yellow">
                  {service.num}
                </p>
                <h3 className="title-shine mt-3 font-display text-xl font-semibold">
                  {service.title}
                </h3>
                <p className="mt-3 text-muted">{service.body}</p>
                {"types" in service ? (
                  <p className="mt-4 text-sm text-gold/90">
                    الأنواع المتاحة: {service.types.join(" — ")}
                  </p>
                ) : null}
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120}>
          <p className="glass-card mt-6 rounded-xl px-5 py-4 text-sm text-muted md:text-base">
            <span className="font-medium text-yellow">مش عارف تختار؟</span>{" "}
            اكتب احتياجك في الملاحظات، وسيتم مساعدتك في اختيار الأنسب.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
