import { useEffect, useState } from "react";
import { BrandMark } from "@/components/site/brand-mark";
import { Button } from "@/components/ui/button";
import { NAV_ITEMS } from "@/lib/nav";
import { cn } from "@/lib/utils";

export function TopNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-[background-color,border-color,box-shadow] duration-200",
        scrolled
          ? "nav-glass border-b border-gold/20 shadow-border"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 md:px-8">
        <BrandMark />
        <nav className="hidden items-center gap-1 md:flex" aria-label="التنقل الرئيسي">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="inline-flex min-h-11 items-center px-3 text-sm text-muted transition-colors duration-200 hover:text-yellow"
            >
              {item.label}
            </a>
          ))}
          <Button asChild size="default" className="ms-2">
            <a href="#booking">احجز جلستك</a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
