"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { cn } from "@/lib/cn";

const links = [
  { href: "/#categories", label: "المجالات" },
  { href: "/consultants", label: "المستشارون" },
  { href: "/#how", label: "كيف تعمل المنصة؟" },
  { href: "/about", label: "عن إنسان" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    panelRef.current?.querySelector("a")?.focus();
    return () => document.removeEventListener("keydown", onKey);
  }, [open ]);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-[var(--color-cream)]/90 backdrop-blur">
      <div className="mx-auto flex h-[72px] w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link href="/" aria-label="إنسان — الرئيسية">
          <Logo />
        </Link>

        <nav aria-label="التنقل الرئيسي" className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[15px] font-medium text-[var(--color-body)] transition-colors hover:text-[var(--color-primary)]"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/consultants"
            className="rounded-full bg-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--color-primary-hover)]"
          >
            اكتشف المستشارين
          </Link>
          <Link
            href="/join"
            className="rounded-full border border-[var(--color-line)] bg-white px-5 py-2.5 text-sm font-semibold text-[var(--color-ink)] transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
          >
            انضم كمستشار
          </Link>
        </div>

        <button
          ref={buttonRef}
          type="button"
          className="grid size-11 place-items-center rounded-xl border border-[var(--color-line)] bg-white lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div ref={panelRef} id="mobile-menu" onClick={() => setOpen(false)} className="border-t border-[var(--color-line)] bg-white lg:hidden">
          <nav aria-label="قائمة الجوال" className="mx-auto max-w-6xl space-y-1 px-5 py-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "block rounded-xl px-4 py-3 text-[15px] font-medium text-[var(--color-ink)] hover:bg-[var(--color-cream)]"
                )}
              >
                {l.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-3">
              <Link
                href="/consultants"
                className="rounded-full bg-[var(--color-primary)] px-5 py-3 text-center text-sm font-semibold text-white"
              >
                اكتشف المستشارين
              </Link>
              <Link
                href="/join"
                className="rounded-full border border-[var(--color-line)] px-5 py-3 text-center text-sm font-semibold"
              >
                انضم كمستشار
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
