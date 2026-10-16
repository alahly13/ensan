import Link from "next/link";
import { Container } from "@/components/ui/primitives";

export default function ConsultantNotFound() {
  return (
    <Container className="py-20 text-center">
      <p className="text-sm font-bold text-[var(--color-primary)]">404</p>
      <h1 className="mt-2 text-2xl font-bold">هذا الملف غير موجود</h1>
      <p className="mx-auto mt-3 max-w-md text-[15px] leading-8 text-[var(--color-muted)]">
        ربما تغيّر الرابط أو كُتب بشكل غير صحيح. عُد إلى الدليل واكتشف الملفات التجريبية المتاحة.
      </p>
      <Link
        href="/consultants"
        className="mt-6 inline-flex rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-bold text-white hover:bg-[var(--color-primary-hover)]"
      >
        العودة إلى المستشارين
      </Link>
    </Container>
  );
}
