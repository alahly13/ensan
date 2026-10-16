import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}>{children}</div>;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "start",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "start" | "center";
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && (
        <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-white px-4 py-1.5 text-sm font-semibold text-[var(--color-primary)]">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>
      {description && <p className="mt-3 text-base leading-8 text-[var(--color-body)]">{description}</p>}
    </div>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "light";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[15px] font-semibold transition-all duration-200 focus-visible:outline-3";
  const styles = {
    primary:
      "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] hover:-translate-y-px",
    secondary: "border border-[var(--color-line)] bg-white text-[var(--color-ink)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]",
    ghost: "text-[var(--color-primary)] hover:bg-[var(--color-primary-soft)]",
    light: "bg-white text-[var(--color-hero)] hover:bg-[var(--color-cream)]",
  } as const;
  return (
    <Link href={href} className={cn(base, styles[variant], className)}>
      {children}
    </Link>
  );
}
