import { ArrowLeft } from "lucide-react";
import { featuredConsultants } from "@/features/consultants/data";
import { ConsultantCard } from "@/components/consultants/ConsultantCard";
import { Container, SectionHeading, ButtonLink } from "@/components/ui/primitives";

export function Featured() {
  return (
    <section aria-label="ملفات مميزة" className="border-y border-[var(--color-line)] bg-white">
      <Container className="py-16 sm:py-20">
        <SectionHeading
          eyebrow="ملفات مميزة"
          title="تعرّف على نمط ملفات المستشارين"
          description="نماذج عرض تجريبية توضح شكل الملف: التخصص، اللغات، وقنوات التواصل المتاحة فعلًا — دون تقييمات أو شارات مختلقة."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {featuredConsultants.map((c) => (
            <ConsultantCard key={c.slug} consultant={c} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <ButtonLink href="/consultants" variant="secondary">
            استكشف جميع المستشارين <ArrowLeft size={17} aria-hidden="true" />
          </ButtonLink>
          <p className="mt-3 text-xs text-[var(--color-muted)]">بيانات تجريبية خيالية لأغراض العرض.</p>
        </div>
      </Container>
    </section>
  );
}
