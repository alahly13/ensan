"use client";

import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { RotateCcw, Search, SearchX } from "lucide-react";
import { categories } from "@/features/consultants/categories";
import { consultants } from "@/features/consultants/data";
import { filterByCategory, searchConsultants } from "@/features/consultants/utils";
import { ConsultantCard } from "./ConsultantCard";
import { cn } from "@/lib/cn";

export function DirectoryClient() {
  const params = useSearchParams();
  const router = useRouter();
  const initialQ = params.get("q") ?? "";
  const initialCat = params.get("category") ?? "";
  const [q, setQ] = useState(initialQ);
  const [cat, setCat] = useState(initialCat);

  const results = useMemo(() => {
    return searchConsultants(filterByCategory(consultants, cat || null), q);
  }, [q, cat]);

  const syncUrl = (nextQ: string, nextCat: string) => {
    const sp = new URLSearchParams();
    if (nextQ.trim()) sp.set("q", nextQ.trim());
    if (nextCat) sp.set("category", nextCat);
    const qs = sp.toString();
    router.replace(qs ? `/consultants?${qs}` : "/consultants", { scroll: false });
  };

  const setCatAndSync = (c: string) => {
    setCat(c);
    syncUrl(q, c);
  };

  const reset = () => {
    setQ("");
    setCat("");
    router.replace("/consultants", { scroll: false });
  };

  return (
    <div>
      <div className="rounded-[1.5rem] border border-[var(--color-line)] bg-white p-5 sm:p-6">
        <form role="search" aria-label="البحث في المستشارين" onSubmit={(e) => e.preventDefault()}>
          <div className="flex items-center gap-2 rounded-2xl border border-[var(--color-line)] bg-[var(--color-cream)] px-4 py-1.5 focus-within:border-[var(--color-primary)]">
            <Search size={19} aria-hidden="true" className="shrink-0 text-[var(--color-muted)]" />
            <label htmlFor="dir-search" className="sr-only">ابحث بالاسم أو التخصص أو الكلمة المفتاحية</label>
            <input
              id="dir-search"
              value={q}
              onChange={(e) => {
                setQ(e.target.value);
                syncUrl(e.target.value, cat);
              }}
              placeholder="ابحث بالاسم، التخصص، أو كلمة مفتاحية…"
              className="min-w-0 flex-1 bg-transparent py-2.5 text-[15px] focus:outline-none"
            />
            {q && (
              <button
                type="button"
                onClick={() => { setQ(""); syncUrl("", cat); }}
                className="shrink-0 rounded-full px-3 py-1 text-sm font-semibold text-[var(--color-muted)] hover:text-[var(--color-ink)]"
                aria-label="مسح البحث"
              >
                مسح
              </button>
            )}
          </div>
        </form>

        <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="فلترة حسب المجال">
          <button
            type="button"
            onClick={() => setCatAndSync("")}
            aria-pressed={cat === ""}
            className={cn(
              "rounded-full px-4 py-2 text-[13px] font-bold transition",
              cat === "" ? "bg-[var(--color-hero)] text-white" : "border border-[var(--color-line)] bg-white hover:border-[var(--color-primary)]"
            )}
          >
            الكل
          </button>
          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setCatAndSync(cat === c.id ? "" : c.id)}
              aria-pressed={cat === c.id}
              className={cn(
                "rounded-full px-4 py-2 text-[13px] font-bold transition",
                cat === c.id ? "bg-[var(--color-primary)] text-white" : "border border-[var(--color-line)] bg-white hover:border-[var(--color-primary)]"
              )}
            >
              {c.title}
            </button>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm">
          <p aria-live="polite" className="text-[var(--color-muted)]">
            {results.length === 0
              ? "لا توجد نتائج مطابقة"
              : `${results.length} ${results.length === 1 ? "مستشار" : "مستشارين"}`}
            {q && <> عن «{q}»</>}
          </p>
          {(q || cat) && (
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-line)] px-4 py-1.5 text-[13px] font-bold hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
            >
              <RotateCcw size={14} aria-hidden="true" /> إعادة الضبط
            </button>
          )}
        </div>
      </div>

      {results.length === 0 ? (
        <div className="mt-8 rounded-[1.5rem] border border-dashed border-[var(--color-line)] bg-white px-6 py-14 text-center">
          <SearchX size={34} aria-hidden="true" className="mx-auto text-[var(--color-muted)]" />
          <h2 className="mt-4 text-lg font-bold">لا توجد نتائج مطابقة</h2>
          <p className="mx-auto mt-2 max-w-md text-sm leading-7 text-[var(--color-muted)]">
            جرّب كلمة مختلفة، أو أزل الفلتر الحالي، أو تصفح جميع المستشارين التجريبيين.
          </p>
          <button
            type="button"
            onClick={reset}
            className="mt-6 rounded-full bg-[var(--color-primary)] px-6 py-2.5 text-sm font-bold text-white hover:bg-[var(--color-primary-hover)]"
          >
            عرض الكل
          </button>
        </div>
      ) : (
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {results.map((c) => (
            <ConsultantCard key={c.slug} consultant={c} />
          ))}
        </div>
      )}
    </div>
  );
}
