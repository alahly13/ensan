import Link from "next/link";
import { Container } from "@/components/ui/primitives";

export default function NotFound() {
  return (
    <Container className="py-20 text-center">
      <p className="text-sm font-bold text-[var(--color-primary)]">404</p>
      <h1 className="mt-2 text-2xl font-bold">الصفحة غير موجودة</h1>
      <p className="mx-auto mt-3 max-w-md text-[15px] leading-8 text-[var(--color-muted)]">
        يبدو أن الرابط غير صحيح أو أن الصفحة نُقلت. عُد إلى الرئيسية أو دليل المستشارين.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link href="/" className="rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-bold text-white">
          الرئيسية
        </Link>
        <Link href="/consultants" className="rounded-full border border-[var(--color-line)] bg-white px-6 py-3 text-sm font-bold">
          المستشارون
        </Link>
      </div>
    </Container>
  );
}
