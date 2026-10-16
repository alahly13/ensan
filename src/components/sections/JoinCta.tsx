"use client";

import { useState } from "react";
import { CheckCircle2, Clock } from "lucide-react";
import { Container } from "@/components/ui/primitives";

export function JoinCta() {
  const [demo, setDemo] = useState<null | { name: string; field: string }>(null);
  const [name, setName] = useState("");
  const [field, setField] = useState("");

  return (
    <section id="join" aria-labelledby="join-title" className="scroll-mt-20">
      <Container className="py-16 sm:py-20">
        <div className="grid overflow-hidden rounded-[1.75rem] bg-[var(--color-hero)] text-white lg:grid-cols-2">
          <div className="relative p-8 sm:p-12">
            <div className="hero-pattern absolute inset-0" aria-hidden="true" />
            <div className="relative">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-[13px] font-semibold text-white/85">
                <Clock size={15} aria-hidden="true" /> التسجيل الكامل قريبًا
              </p>
              <h2 id="join-title" className="mt-4 text-2xl font-bold leading-10 text-white sm:text-3xl sm:leading-[1.7]">
                محترف في مجالك؟
                <br />
                مكانك معنا.
              </h2>
              <p className="mt-4 max-w-md text-[15px] leading-8 text-white/70">
                نجهّز حاليًا آلية انضمام المستشارين: ملف مهني واضح، وقنوات تواصل من اختيارك،
                وجمهور يبحث فعلًا عن إجابات. سجّل اهتمامك التجريبي أدناه — دون أي حفظ حقيقي بعد.
              </p>
              <ul className="mt-6 space-y-2.5 text-sm text-white/75">
                {["ملف يعرض تخصصك ولغاتك بوضوح", "أنت تختار قنوات التواصل المنشورة", "لا عمولات ولا التزامات في هذه المرحلة"].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <CheckCircle2 size={17} aria-hidden="true" className="shrink-0 text-[#E8B48F]" /> {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-white p-8 sm:p-12">
            <h3 className="text-lg font-bold">سجّل اهتمامك (عرض تجريبي)</h3>
            <p className="mt-1.5 text-[13px] leading-7 text-[var(--color-muted)]">
              هذا النموذج للعرض فقط — لا يُرسل البيانات إلى أي خادم ولا يحفظها. عند الإطلاق سنعلن
              طريقة التسجيل الرسمية هنا.
            </p>
            {demo ? (
              <div role="status" className="mt-6 rounded-2xl border border-[var(--color-line)] bg-[var(--color-cream)] p-6 text-center">
                <CheckCircle2 size={30} aria-hidden="true" className="mx-auto text-[var(--color-primary)]" />
                <p className="mt-3 font-bold text-[var(--color-ink)]">شكرًا {demo.name || "لك"}!</p>
                <p className="mt-1 text-sm leading-7 text-[var(--color-muted)]">
                  سجلنا اهتمامك بمجال «{demo.field || "عام"}» <strong>داخل هذه الصفحة فقط</strong> —
                  لم يُرسل شيء إلى أي مكان. هذه تجربة واجهة لا أكثر.
                </p>
                <button
                  type="button"
                  onClick={() => { setDemo(null); setName(""); setField(""); }}
                  className="mt-4 rounded-full border border-[var(--color-line)] px-5 py-2 text-sm font-bold hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                >
                  تجربة اسم آخر
                </button>
              </div>
            ) : (
              <form
                className="mt-6 space-y-4"
                onSubmit={(e) => { e.preventDefault(); setDemo({ name: name.trim(), field: field.trim() }); }}
              >
                <div>
                  <label htmlFor="join-name" className="mb-1.5 block text-sm font-bold text-[var(--color-ink)]">الاسم</label>
                  <input
                    id="join-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="مثال: أحمد سمير"
                    className="w-full rounded-xl border border-[var(--color-line)] bg-[var(--color-cream)] px-4 py-3 text-[15px] focus:border-[var(--color-primary)] focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="join-field" className="mb-1.5 block text-sm font-bold text-[var(--color-ink)]">مجال الاستشارة</label>
                  <input
                    id="join-field"
                    value={field}
                    onChange={(e) => setField(e.target.value)}
                    placeholder="مثال: تخطيط مالي"
                    className="w-full rounded-xl border border-[var(--color-line)] bg-[var(--color-cream)] px-4 py-3 text-[15px] focus:border-[var(--color-primary)] focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-[var(--color-primary)] py-3.5 text-[15px] font-bold text-white transition hover:bg-[var(--color-primary-hover)]"
                >
                  سجّل اهتمامي (تجريبي)
                </button>
                <p className="text-center text-xs text-[var(--color-muted)]">بالضغط أنت تجرّب الواجهة فقط — لا يتم إرسال أي بيانات.</p>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
