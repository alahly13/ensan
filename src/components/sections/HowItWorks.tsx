import { Container, SectionHeading } from "@/components/ui/primitives";

const steps = [
  { n: "١", t: "اختر المجال المناسب", d: "تصفح المجالات الثمانية واختر الأقرب لسؤالك الحالي." },
  { n: "٢", t: "اكتشف المستشارين واقرأ ملفاتهم", d: "قارن التخصص واللغات وطريقة تقديم الاستشارة قبل أي تواصل." },
  { n: "٣", t: "اختر وسيلة التواصل المتاحة", d: "كل مستشار يعرض القنوات التي يفضلها فعلًا — لا قنوات مفترضة." },
  { n: "٤", t: "تواصل مباشرة بوضوح", d: "ابدأ المحادثة وفق الشروط الموضحة في الملف، بخطوة هادئة." },
];

export function HowItWorks() {
  return (
    <section id="how" aria-label="كيف تعمل المنصة؟" className="scroll-mt-20">
      <Container className="py-16 sm:py-20">
        <SectionHeading
          align="center"
          eyebrow="كيف تعمل المنصة؟"
          title="أربع خطوات… بلا تعقيد"
          description="لا حجوزات وهمية ولا مدفوعات في هذه النسخة — فقط اكتشاف واضح وتواصل مباشر."
        />
        <ol className="mt-12 grid gap-4 md:grid-cols-4">
          {steps.map((s, i) => (
            <li
              key={s.n}
              className="relative rounded-[1.25rem] border border-[var(--color-line)] bg-white p-6"
            >
              <span className="grid size-11 place-items-center rounded-full bg-[var(--color-hero)] text-lg font-bold text-white">
                {s.n}
              </span>
              <h3 className="mt-4 text-[16px] font-bold">{s.t}</h3>
              <p className="mt-2 text-[13.5px] leading-7 text-[var(--color-muted)]">{s.d}</p>
              {i < steps.length - 1 && (
                <span aria-hidden="true" className="absolute top-1/2 -left-3 hidden size-6 place-items-center rounded-full border border-[var(--color-line)] bg-[var(--color-cream)] text-[var(--color-primary)] md:grid">
                  ←
                </span>
              )}
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
