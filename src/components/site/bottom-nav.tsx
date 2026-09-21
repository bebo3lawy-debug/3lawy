import { CalendarCheck, LayoutGrid, UserRound } from "lucide-react";
import { useEffect, useState } from "react";
import { NAV_ITEMS } from "@/lib/nav";
import { cn } from "@/lib/utils";

const ICONS = {
  about: UserRound,
  services: LayoutGrid,
  booking: CalendarCheck,
} as const;

export function BottomNav() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const ids = NAV_ITEMS.map((item) => item.id);
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-25% 0px -45% 0px", threshold: [0.15, 0.35, 0.55] },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <nav
      aria-label="التنقل السفلي"
      className="pointer-events-none fixed inset-x-0 bottom-0 z-40 flex justify-center md:hidden"
      style={{ paddingBottom: "calc(1.1rem + env(safe-area-inset-bottom))" }}
    >
      <ul className="pointer-events-auto flex items-end gap-3">
        {NAV_ITEMS.map((item) => {
          const Icon = ICONS[item.id];
          const isActive = active === item.id;
          return (
            <li key={item.id} className="float-btn">
              <a
                href={item.href}
                className={cn(
                  "flex size-[4.25rem] flex-col items-center justify-center gap-1 rounded-full border backdrop-blur-xl",
                  isActive
                    ? "border-yellow bg-yellow text-gold-fg shadow-glow"
                    : "border-yellow/55 bg-bg/65 text-yellow shadow-border",
                )}
              >
                <Icon className="size-5" strokeWidth={isActive ? 2.3 : 1.8} />
                <span className="text-[10px] font-medium leading-none">{item.label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
