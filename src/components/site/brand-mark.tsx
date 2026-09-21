import { cn } from "@/lib/utils";

export function BrandMark({ className }: { className?: string }) {
  return (
    <a
      href="#top"
      className={cn(
        "flex min-h-11 items-center gap-2.5 text-fg",
        className,
      )}
    >
      <span className="grid size-8 place-items-center rounded-md border border-yellow/70 bg-surface shadow-glow">
        <span className="font-display text-sm font-semibold leading-none text-yellow">
          ع
        </span>
      </span>
      <span className="font-display text-sm font-semibold tracking-wide md:text-base">
        كابتن أحمد العلاوي
      </span>
    </a>
  );
}
