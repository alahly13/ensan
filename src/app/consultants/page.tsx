import { Suspense } from "react";
import type { Metadata } from "next";
import { Container, SectionHeading } from "@/components/ui/primitives";
import { DirectoryClient } from "@/components/consultants/DirectoryClient";

export const metadata: Metadata = {
  title: "المستشارون",
  description: "ابحث واكتشف المستشارين التجريبيين حسب المجال والكلمات المفتاحية.",
};

export default function ConsultantsPage() {
  return (
    <div className="border-t border-[var(--color-line)]">
      <Container className="py-12 sm:py-16">
        <SectionHeading
          eyebrow="دليل المستشارين"
          title="اكتشف المستشار المناسب لسؤالك"
          description="ابحث بالاسم أو التخصص، وفلتر حسب المجال. جميع الملفات بيانات تجريبية خيالية لأغراض العرض."
        />
        <div className="mt-8">
          <Suspense fallback={<p className="text-sm text-[var(--color-muted)]">جارٍ تحميل الدليل…</p>}>
            <DirectoryClient />
          </Suspense>
        </div>
      </Container>
    </div>
  );
}
