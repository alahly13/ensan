import type { Metadata } from "next";
import { Container, SectionHeading } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "الخصوصية", description: "أساس سياسة الخصوصية لمنصة إنسان في مرحلة العرض." };

export default function PrivacyPage() {
  return (
    <Container className="max-w-3xl py-12 sm:py-16">
      <SectionHeading eyebrow="قانوني" title="الخصوصية" description="آخر تحديث: أكتوبر 2026. هذه صفحة تأسيسية — ليست استشارة قانونية." />
      <div className="mt-8 space-y-5 text-[15px] leading-9">
        <p>موقع إنسان في نسخته الحالية موقع عرض واكتشاف. لا نطلب إنشاء حساب، ولا نجمع بيانات شخصية عبر نماذج إرسال حقيقية. نموذج «إبداء الاهتمام» تجريبي ولا يُرسل أي بيانات إلى أي خادم.</p>
        <h2 className="text-lg font-bold text-[var(--color-ink)]">ما الذي لا نجمعه؟</h2>
        <ul className="list-disc space-y-2 pr-6">
          <li>لا حسابات ولا كلمات مرور.</li>
          <li>لا مدفوعات ولا بيانات بنكية.</li>
          <li>لا رسائل خاصة عبر المنصة في هذه المرحلة.</li>
        </ul>
        <h2 className="text-lg font-bold text-[var(--color-ink)]">روابط خارجية</h2>
        <p>قد تقودك قنوات التواصل في الملفات التجريبية إلى مواقع مثال (example.com) لأغراض العرض. عند إطلاق قنوات حقيقية ستخضع كل قناة لسياسة صاحبها.</p>
        <h2 className="text-lg font-bold text-[var(--color-ink)]">التواصل</h2>
        <p>عند إطلاق قنوات رسمية للمنصة سننشرها هنا مع طريقة التواصل المعتمدة.</p>
      </div>
    </Container>
  );
}
