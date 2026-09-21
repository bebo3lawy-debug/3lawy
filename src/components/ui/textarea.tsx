import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

function Textarea({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "flex min-h-28 w-full rounded-md border border-border bg-bg-elevated px-4 py-3 text-base text-fg shadow-border",
        "placeholder:text-subtle",
        "transition-[border-color,box-shadow] duration-150 ease-out",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/45",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
