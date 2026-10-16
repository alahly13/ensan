import { Eye, LayoutGrid, MessagesSquare, Sprout, SlidersHorizontal } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui/primitives";

const items = [
  { icon: LayoutGrid, t: "تخصصات متعددة في مكان واحد", d: "من المسار المهني إلى التخطيط المالي — اكتشاف منظم بدل البحث المشتت." },
  { icon: Eye, t: "ملف واضح قبل التواصل", d: "التخصص واللغات وطريقة الخدمة معروضة أولًا، لتقرر بثقة." },
  { icon: MessagesSquare, t: "قنوات التواصل الحقيقية فقط", d: "ترى الوسائل التي نشرها المستشار فعلًا، ولا نعرض قنوات غير متاحة." },
  { icon: SlidersHorizontal, t: "تجربة اكتشاف بسيطة", d: "بحث عربي ذكي وفلترة بالمجال وروابط قابلة للمشاركة." },
  { icon: Sprout, t: "مصممة للتوسع", d: "بنية نظيفة تسمح بإضافة مجالات وحجوزات وتقييمات لاحقًا دون إعادة بناء." },
];

export function WhyEnsan() {
  return (
    <section aria-label="لماذا إنسان؟" className="bg-white border-y border-[var(--color-line)]">
      <Container className="grid gap-10 py-16 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="لماذا إنسان؟"
            title="وضوح يسبق التواصل"
          />
          <p className="mt-4 text-[15px] leading-8 text-[var(--color-body)]">
            لا نعد بتقييمات أو اعتمادات لم نبنِها بعد. ما نقدمه اليوم: طريقة هادئة ومنظمة لفهم من
            أمامك قبل أن تبدأ المحادثة — وهذا وحده يصنع فرقًا كبيرًا في جودة الاستشارة.
          </p>
          <div className="mt-6 rounded-2xl bg-[var(--color-hero)] p-6 text-white">
            <p className="text-lg font-bold leading-8">«استشارة أوضح، وخطوة أهدى.»</p>
            <p className="mt-1 text-sm text-white/60">وعد إنسان الأساسي — بلا مبالغة.</p>
          </div>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {items.map((it) => (
            <li key={it.t} className="rounded-[1.25rem] border border-[var(--color-line)] bg-[var(--color-cream)] p-5">
              <span className="grid size-11 place-items-center rounded-xl bg-white text-[var(--color-primary)] shadow-sm">
                <it.icon size={20} aria-hidden="true" />
              </span>
              <h3 className="mt-3 text-[15px] font-bold">{it.t}</h3>
              <p className="mt-1.5 text-[13px] leading-7 text-[var(--color-muted)]">{it.d}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
