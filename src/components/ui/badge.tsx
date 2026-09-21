import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex min-h-9 items-center rounded-full border border-yellow/70 bg-yellow/12 px-3.5 text-sm font-medium text-yellow-hot",
        className,
      )}
      {...props}
    />
  );
}

export { Badge };
