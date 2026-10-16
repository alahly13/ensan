"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui/primitives";
import { cn } from "@/lib/cn";

const faqs = [
  {
    q: "ما هي منصة إنسان؟",
    a: "إنسان منصة عربية تساعدك على اكتشاف مستشارين في مجالات متعددة وقراءة ملفاتهم، ثم التواصل معهم عبر القنوات التي ينشرونها. النسخة الحالية تركّز على الاكتشاف والعرض الواضح.",
  },
  {
    q: "كيف أجد المستشار المناسب؟",
    a: "ابدأ من المجال الأقرب لسؤالك، ثم استخدم البحث بالاسم أو التخصص أو الكلمات المفتاحية في صفحة المستشارين. اقرأ الملف كاملًا — التخصص واللغات وقنوات التواصل — قبل أن تبدأ المحادثة.",
  },
  {
    q: "ما وسائل التواصل المتاحة؟",
    a: "تختلف من مستشار لآخر: قد تشمل البريد الإلكتروني أو الموقع الشخصي أو لينكدإن أو رابط حجز، حسب ما ينشره كل مستشار. لا نعرض أي قناة لم ينشرها صاحب الملف، وإذا لم تُنشر قناة نعرض حالة «غير متاحة» بوضوح.",
  },
  {
    q: "هل يمكنني الانضمام كمستشار؟",
    a: "نعم — نرحب بالمهتمين. التسجيل الكامل لم يُفتح بعد، لكن يمكنك تجربة نموذج إبداء الاهتمام في قسم «انضم كمستشار». سنعلن آلية التسجيل الرسمية عند جاهزيتها.",
  },
  {
    q: "هل جميع الاستشارات مجانية؟",
    a: "لا نحدد ذلك مسبقًا. كل مستشار يوضح شروطه الخاصة في ملفه وقنوات التواصل الخاصة به. إنسان في هذه المرحلة لا تدير حجوزات أو مدفوعات، ولا تفرض سعرًا موحدًا.",
  },
  {
    q: "هل المستشارون المعروضون حقيقيون؟",
    a: "لا — جميع الملفات الحالية بيانات تجريبية خيالية لأغراض تصميم وتطوير المنصة، ولا تمثل أشخاصًا حقيقيين ولا تحمل أي تقييمات أو اعتمادات حقيقية.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" aria-label="الأسئلة الشائعة" className="scroll-mt-20 border-t border-[var(--color-line)] bg-white">
      <Container className="max-w-3xl py-16 sm:py-20">
        <SectionHeading
          align="center"
          eyebrow="الأسئلة الشائعة"
          title="إجابات واضحة من البداية"
        />
        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className={cn("rounded-2xl border transition", isOpen ? "border-[var(--color-primary)] bg-[var(--color-cream)]" : "border-[var(--color-line)] bg-white")}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-button-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-start text-[15px] font-bold text-[var(--color-ink)]"
                  >
                    <span>{f.q}</span>
                    <ChevronDown size={19} aria-hidden="true" className={cn("shrink-0 transition-transform", isOpen && "rotate-180")} />
                  </button>
                </h3>
                <div id={`faq-panel-${i}`} role="region" aria-labelledby={`faq-button-${i}`} hidden={!isOpen}>
                  <p className="px-5 pb-5 text-[14px] leading-8 text-[var(--color-body)]">{f.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
