import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";

const DETAILS = [
  "🏠 جلسات منزلية برايفت",
  "👤 للرجال فقط",
  "⏱️ مدة الجلسة من ساعة إلى ساعة ونصف",
  "💳 الحجز بعربون مسبق",
] as const;

export function SessionDetails() {
  return (
    <section className="px-5 py-10 md:px-8 md:py-16" aria-labelledby="session-details-title">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading title="تفاصيل الجلسة" />
        </Reveal>
        <Reveal delay={80}>
          <ul className="grid gap-3 sm:grid-cols-2">
            {DETAILS.map((item) => (
              <li
                key={item}
                className="glass-card rounded-xl px-4 py-4 text-sm text-fg md:text-base"
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
