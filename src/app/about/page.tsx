import type { Metadata } from "next";
import { Container, SectionHeading } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "عن إنسان", description: "تعرّف على فكرة منصة إنسان ومبادئها وحدود النسخة الحالية." };

export default function AboutPage() {
  return (
    <Container className="max-w-3xl py-12 sm:py-16">
      <SectionHeading eyebrow="عن إنسان" title="منصة عربية تبدأ من الوضوح" description="إنسان ENSAN مشروع منصة استشارات عربية: اكتشاف منظم، وملفات واضحة، وتواصل مباشر." />
      <div className="prose-ar mt-8 space-y-5 text-[15px] leading-9">
        <p>بدأت إنسان من سؤال بسيط: لماذا يصعب العثور على الشخص المناسب عندما نحتاج نصيحة؟ بين معارف متفرقة وإعلانات غير واضحة، تضيع الخطوة الأولى. صممنا إنسان لتكون تلك الخطوة أهدأ: مجال واضح، ملف مقروء، وقناة تواصل معلنة.</p>
        <h2 className="text-lg font-bold text-[var(--color-ink)]">مبادئنا في هذه المرحلة</h2>
        <ul className="list-disc space-y-2 pr-6">
          <li>الوضوح قبل الوعود — لا نعرض تقييمات أو شارات أو إحصاءات لم نبنِها.</li>
          <li>التواصل المعلن فقط — لا نخترع أرقامًا أو روابط لملء الفراغ.</li>
          <li>التجريبي معلن — كل الملفات الحالية خيالية ومميزة بوضوح.</li>
          <li>التوسع بهدوء — حجوزات وحسابات ومدفوعات لاحقًا، عندما تنضج.</li>
        </ul>
        <h2 className="text-lg font-bold text-[var(--color-ink)]">حدود النسخة الحالية</h2>
        <p>هذه النسخة واجهة عرض واكتشاف فقط: لا حسابات، ولا حجوزات حقيقية، ولا مدفوعات، ولا تحقق من المؤهلات. أي توسع مستقبلي سيُعلن بوضوح مع آليته وبياناته الحقيقية.</p>
      </div>
    </Container>
  );
}
