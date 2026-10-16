import { ArrowLeft } from "lucide-react";
import { Container, ButtonLink } from "@/components/ui/primitives";

export function FinalCta() {
  return (
    <section aria-label="دعوة أخيرة">
      <Container className="pb-16 sm:pb-20">
        <div className="relative overflow-hidden rounded-[1.75rem] bg-[var(--color-hero)] px-8 py-14 text-center text-white sm:px-12">
          <div className="hero-pattern absolute inset-0" aria-hidden="true" />
          <div className="relative mx-auto max-w-2xl">
            <p className="text-sm font-semibold text-[#E8B48F]">جاهز لخطوة أهدى؟</p>
            <h2 className="mt-3 text-2xl font-bold leading-10 text-white sm:text-3xl">
              سؤالك يستحق أن يُسمع…
              <br />
              ابدأ الاكتشاف الآن.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[15px] leading-8 text-white/70">
              تصفح المجالات والمستشارين، واقرأ الملفات بهدوء — ثم تواصل بالطريقة الأنسب لك.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <ButtonLink href="/consultants">
                اكتشف المستشارين <ArrowLeft size={17} aria-hidden="true" />
              </ButtonLink>
              <ButtonLink href="/join" variant="light">
                انضم كمستشار
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
