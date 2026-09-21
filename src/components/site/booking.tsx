import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { sendBooking } from "@/lib/booking";
import { cn } from "@/lib/utils";

type Status = "idle" | "sending" | "success" | "error";

const DEFAULT_SERVICE = "مساج سويدي";

const BUTTON_LABEL: Record<Status, string> = {
  idle: "إرسال طلب الحجز",
  sending: "جاري الإرسال...",
  success: "تم تأكيد الحجز",
  error: "إرسال طلب الحجز",
};

export function Booking() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const resetTimer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimer.current) window.clearTimeout(resetTimer.current);
    };
  }, []);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    setMessage("");

    try {
      await sendBooking();
      setStatus("success");
      setMessage("تم تأكيد الحجز");
      form.reset();
      const service = form.querySelector<HTMLSelectElement>("#service_type");
      if (service) service.value = DEFAULT_SERVICE;
      resetTimer.current = window.setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 16000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
      setMessage("حدث خطأ أثناء الإرسال، يرجى المحاولة لاحقاً.");
    }
  }

  return (
    <section id="booking" className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-xl">
        <Reveal>
          <SectionHeading kicker="الحجز" title="احجز جلستك" />
        </Reveal>
        <Reveal delay={80}>
          <form
            id="booking-form"
            onSubmit={onSubmit}
            className="glass-card rounded-2xl p-5 md:p-6"
          >
            <div className="space-y-5">
              <Field>
                <Label htmlFor="user_name">الاسم</Label>
                <Input
                  id="user_name"
                  name="user_name"
                  required
                  autoComplete="name"
                  placeholder="اكتب اسمك بالكامل"
                />
              </Field>

              <Field>
                <Label htmlFor="user_phone">رقم الموبايل / واتساب</Label>
                <Input
                  id="user_phone"
                  name="user_phone"
                  type="tel"
                  inputMode="numeric"
                  required
                  autoComplete="tel"
                  placeholder="01xxxxxxxxx"
                />
              </Field>

              <Field>
                <Label htmlFor="user_location">المنطقة / المحافظة</Label>
                <Input
                  id="user_location"
                  name="user_location"
                  required
                  autoComplete="address-level2"
                  placeholder="اكتب منطقتك أو محافظتك"
                />
              </Field>

              <Field>
                <Label htmlFor="service_type">نوع الجلسة</Label>
                <div className="relative">
                  <select
                    id="service_type"
                    name="service_type"
                    required
                    defaultValue={DEFAULT_SERVICE}
                    className={cn(
                      "flex h-12 w-full appearance-none rounded-md border border-border bg-bg-elevated px-4 pe-10 text-base text-fg shadow-border",
                      "transition-[border-color,box-shadow] duration-200 ease-out",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/45",
                    )}
                  >
                    <option value="مساج سويدي">مساج سويدي</option>
                    <option value="مساج علاجي">مساج علاجي</option>
                    <option value="Deep Tissue">Deep Tissue</option>
                    <option value="حجامة">حجامة</option>
                    <option value="غير متأكد / أحتاج المساعدة">
                      غير متأكد / أحتاج المساعدة
                    </option>
                  </select>
                  <ChevronDown
                    className="pointer-events-none absolute start-auto end-3 top-1/2 size-4 -translate-y-1/2 text-gold"
                    aria-hidden="true"
                  />
                </div>
              </Field>

              <Field>
                <Label htmlFor="session_date">أفضل يوم للحجز (اختياري)</Label>
                <Input
                  id="session_date"
                  name="session_date"
                  type="date"
                  placeholder="اختر اليوم المناسب لك"
                />
              </Field>

              <Field>
                <Label htmlFor="user_notes">الملاحظات (اختياري)</Label>
                <Textarea
                  id="user_notes"
                  name="user_notes"
                  rows={4}
                  placeholder="اكتب احتياجك أو أي ملاحظة أو استفسار"
                />
              </Field>
            </div>

            <Button
              id="submit-btn"
              type="submit"
              size="full"
              className="gold-cta mt-7"
              disabled={status === "sending"}
            >
              {BUTTON_LABEL[status]}
            </Button>

            <p
              id="status-message"
              role="status"
              aria-live="polite"
              className={cn(
                "mt-4 min-h-6 text-base font-medium transition-opacity duration-300",
                status === "success" &&
                  "rounded-lg border border-success/35 bg-success/15 px-4 py-3 text-success",
                status === "error" &&
                  "rounded-lg border border-danger/35 bg-danger/15 px-4 py-3 text-danger",
              )}
            >
              {message}
            </p>

            <div className="mt-4 space-y-1 text-sm leading-relaxed text-subtle">
              <p>سعر الجلسة: 1200 جنيه داخل نطاق القاهرة</p>
              <p>وتضاف تكلفة مواصلات حسب المسافة خارج نطاق القاهرة.</p>
              <p>الحجز يتم بعربون مسبق لتأكيد الموعد.</p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ children }: { children: ReactNode }) {
  return <div className="space-y-2">{children}</div>;
}
