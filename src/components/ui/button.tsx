import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "ghost" | "outline";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  children: ReactNode;
  withArrow?: boolean;
};

export function Button({
  variant = "primary",
  className,
  children,
  withArrow,
  ...props
}: Props) {
  const base =
    "group inline-flex items-center gap-3 text-xs tracking-[0.22em] uppercase transition-all duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold";
  const styles = {
    primary:
      "bg-ink text-ivory px-7 py-4 hover:bg-brown hover:shadow-lg hover:shadow-ink/20",
    ghost: "text-ink hover:text-brown",
    outline:
      "border border-ink/30 text-ink px-7 py-4 hover:border-ink hover:bg-ink hover:text-ivory",
  }[variant];
  return (
    <button className={cn(base, styles, className)} {...props}>
      <span>{children}</span>
      {withArrow && (
        <span className="inline-block transition-transform duration-500 group-hover:translate-x-1.5">
          →
        </span>
      )}
    </button>
  );
}
