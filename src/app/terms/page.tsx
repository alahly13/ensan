import type { Metadata } from "next";
import { Container, SectionHeading } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "الشروط والأحكام", description: "أساس شروط استخدام منصة إنسان في مرحلة العرض." };

export default function TermsPage() {
  return (
    <Container className="max-w-3xl py-12 sm:py-16">
      <SectionHeading eyebrow="قانوني" title="الشروط والأحكام" description="آخر تحديث: أكتوبر 2026. صفحة تأسيسية — ليست استشارة قانونية." />
      <div className="mt-8 space-y-5 text-[15px] leading-9">
        <p>باستخدامك موقع إنسان فأنت توافق على أن النسخة الحالية للعرض والاكتشاف فقط، وأن جميع الملفات بيانات تجريبية خيالية لا تمثل أشخاصًا حقيقيين أو خدمات حقيقية.</p>
        <h2 className="text-lg font-bold text-[var(--color-ink)]">حدود المسؤولية</h2>
        <ul className="list-disc space-y-2 pr-6">
          <li>لا نقدم حجوزات أو مدفوعات أو ضمانات جودة في هذه المرحلة.</li>
          <li>المجالات الحساسة (القانونية والنفسية) لأغراض الثقافة العامة — ليست بديلًا عن مختص مرخّص.</li>
          <li>لا نعرض شارات تحقق أو تراخيص — وأي تحقق مستقبلي سيُوثّق بآليته.</li>
        </ul>
        <h2 className="text-lg font-bold text-[var(--color-ink)]">الاستخدام المقبول</h2>
        <p>يُمنع إساءة استخدام الموقع أو محاولة استخراج بيانات أو انتحال صفة. نحتفظ بتطوير هذه الشروط مع كل مرحلة جديدة من المنصة.</p>
      </div>
    </Container>
  );
}
