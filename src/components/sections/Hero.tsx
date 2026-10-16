"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { ArrowLeft, Search, Sparkles } from "lucide-react";
import { Container, ButtonLink } from "@/components/ui/primitives";

const suggestions = ["مسار وظيفي", "مشروع ناشئ", "ميزانية", "مذاكرة", "منتج رقمي"];

export function Hero() {
  const [q, setQ] = useState("");
  const router = useRouter();

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const query = q.trim();
    router.push(query ? `/consultants?q=${encodeURIComponent(query)}` : "/consultants");
  };

  return (
    <section className="relative overflow-hidden bg-[var(--color-hero)] text-white">
      <div className="hero-pattern absolute inset-0" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="absolute -top-24 left-1/4 size-[420px] rounded-full bg-[#1C6B62]/40 blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 size-[300px] rounded-full bg-[#D88B63]/20 blur-[100px]"
      />
      <Container className="relative grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-24">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[13px] font-semibold text-white/85">
            <Sparkles size={15} aria-hidden="true" className="text-[#D88B63]" />
            استشارة أوضح، وخطوة أهدى
          </p>
          <h1 className="mt-5 text-4xl font-bold leading-[1.5] text-white sm:text-5xl sm:leading-[1.45]">
            كل سؤال مهم…
            <br />
            يستحق <span className="text-[#E8B48F]">الشخص المناسب.</span>
          </h1>
          <p className="mt-5 max-w-xl text-[16px] leading-9 text-white/75">
            اكتشف مستشارين في مجالات متعددة، وتواصل بالطريقة التي تناسبك — بخطوات واضحة وتجربة
            بسيطة، دون تعقيد أو التزامات خفية.
          </p>

          <form onSubmit={submit} role="search" aria-label="البحث عن مستشار" className="mt-8 max-w-xl">
            <div className="flex items-center gap-2 rounded-2xl bg-white p-2 shadow-xl">
              <Search size={20} aria-hidden="true" className="ms-3 shrink-0 text-[var(--color-muted)]" />
              <label htmlFor="hero-search" className="sr-only">
                ابحث باسم المستشار أو المجال
              </label>
              <input
                id="hero-search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="جرّب: مسار وظيفي، مشروع ناشئ، ميزانية…"
                className="min-w-0 flex-1 bg-transparent py-2.5 text-[15px] text-[var(--color-ink)] placeholder:text-[var(--color-muted)] focus:outline-none"
              />
              {q && (
                <button
                  type="button"
                  onClick={() => setQ("")}
                  className="shrink-0 rounded-full px-3 py-1 text-sm text-[var(--color-muted)] hover:text-[var(--color-ink)]"
                  aria-label="مسح البحث"
                >
                  مسح
                </button>
              )}
              <button
                type="submit"
                className="shrink-0 rounded-xl bg-[var(--color-primary)] px-5 py-3 text-sm font-bold text-white transition hover:bg-[var(--color-primary-hover)]"
              >
                ابحث
              </button>
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-2 text-[13px] text-white/65">
              <span>اقتراحات:</span>
              {suggestions.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => {
                    setQ(s);
                    router.push(`/consultants?q=${encodeURIComponent(s)}`);
                  }}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 transition hover:border-white/40 hover:text-white"
                >
                  {s}
                </button>
              ))}
            </div>
          </form>

          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/consultants">
              اكتشف المستشارين <ArrowLeft size={17} aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="/join" variant="light">
              انضم كمستشار
            </ButtonLink>
          </div>
          <p className="mt-5 text-xs leading-6 text-white/50">
            الملفات المعروضة حاليًا بيانات تجريبية خيالية لأغراض العرض — ليست مستشارين حقيقيين.
          </p>
        </div>

        <div className="relative hidden lg:block" aria-hidden="true">
          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur">
            <div className="dot-grid rounded-2xl bg-[#F8F6F1] p-6">
              {[
                { n: "مستشارة مسار وظيفي", t: "سيرة ذاتية ومقابلات", c: "#1C6B62", i: "لح" },
                { n: "مستشار مشاريع ناشئة", t: "نموذج عمل وتسعير", c: "#D88B63", i: "عف" },
                { n: "مستشارة منتجات رقمية", t: "أدوات وتحول رقمي", c: "#2F7E79", i: "سر" },
              ].map((p) => (
                <div key={p.n} className="mb-3 flex items-center gap-3 rounded-2xl border border-[var(--color-line)] bg-white p-3.5 last:mb-0">
                  <span className="grid size-11 place-items-center rounded-xl text-sm font-bold text-white" style={{ background: p.c }}>
                    {p.i}
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-[var(--color-ink)]">{p.n}</span>
                    <span className="block text-xs text-[var(--color-muted)]">{p.t}</span>
                  </span>
                  <span className="ms-auto rounded-full bg-[var(--color-primary-soft)] px-3 py-1 text-[11px] font-bold text-[var(--color-primary)]">
                    متاح عن بُعد
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between rounded-2xl bg-[#122A30] px-5 py-4">
              <div>
                <p className="text-sm font-bold text-white">خطوات واضحة</p>
                <p className="text-xs text-white/60">اختر المجال ← اقرأ الملف ← تواصل مباشرة</p>
              </div>
              <span className="grid size-11 place-items-center rounded-full bg-[#D88B63] text-xl font-bold text-white">
                ←
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
