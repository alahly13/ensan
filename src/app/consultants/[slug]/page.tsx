import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRight, Languages, MapPin, Tag, Video } from "lucide-react";
import { getConsultant, consultants } from "@/features/consultants/data";
import { categoryTitle } from "@/features/consultants/categories";
import { ContactList } from "@/components/consultants/ContactList";
import { ConsultantCard } from "@/components/consultants/ConsultantCard";
import { Container } from "@/components/ui/primitives";

export function generateStaticParams() {
  return consultants.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = getConsultant(slug);
  if (!c) return { title: "ملف غير موجود" };
  return {
    title: `${c.name} — ${c.title}`,
    description: c.bio.slice(0, 150),
  };
}

export default async function ProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getConsultant(slug);
  if (!c) notFound();

  const related = consultants.filter(
    (x) => x.slug !== c.slug && x.categoryIds.some((id) => c.categoryIds.includes(id))
  ).slice(0, 3);

  return (
    <div className="border-t border-[var(--color-line)]">
      <Container className="py-10 sm:py-14">
        <Link
          href="/consultants"
          className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-white px-4 py-2 text-sm font-bold hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
        >
          <ArrowRight size={16} aria-hidden="true" /> العودة إلى الدليل
        </Link>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="rounded-[1.5rem] border border-[var(--color-line)] bg-white p-7 sm:p-9">
            <div className="flex flex-wrap items-start gap-5">
              <span
                aria-hidden="true"
                className="grid size-20 place-items-center rounded-3xl text-2xl font-bold text-white"
                style={{ background: c.accent }}
              >
                {c.initials}
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold text-[var(--color-primary)]">{c.title}</p>
                <h1 className="mt-1 text-2xl font-bold sm:text-3xl">{c.name}</h1>
                <p className="mt-1 text-[15px] text-[var(--color-muted)]">{c.specialty}</p>
              </div>
            </div>

            <p className="mt-6 rounded-2xl bg-[var(--color-cream)] px-5 py-4 text-[12px] leading-6 text-[var(--color-muted)]">
              ملف تجريبي خيالي لأغراض العرض — ليس شخصًا حقيقيًا، ولا يحمل تقييمات أو اعتمادات حقيقية.
            </p>

            <h2 className="mt-7 text-lg font-bold">نبذة</h2>
            <p className="mt-2 text-[15px] leading-9">{c.bio}</p>

            <h2 className="mt-7 text-lg font-bold">المجالات</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {c.categoryIds.map((id) => (
                <Link
                  key={id}
                  href={`/consultants?category=${id}`}
                  className="rounded-full bg-[var(--color-primary-soft)] px-4 py-1.5 text-[13px] font-bold text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white"
                >
                  {categoryTitle(id)}
                </Link>
              ))}
            </div>

            <h2 className="mt-7 text-lg font-bold">تفاصيل التواصل والخدمة</h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-center gap-2 text-[var(--color-body)]">
                <MapPin size={16} aria-hidden="true" className="text-[var(--color-primary)]" /> {c.location}
              </li>
              <li className="flex items-center gap-2 text-[var(--color-body)]">
                <Languages size={16} aria-hidden="true" className="text-[var(--color-primary)]" /> اللغات: {c.languages.join("، ")}
              </li>
              {c.remote && (
                <li className="flex items-center gap-2 text-[var(--color-body)]">
                  <Video size={16} aria-hidden="true" className="text-[var(--color-primary)]" /> الخدمة عن بُعد متاحة
                </li>
              )}
              <li className="flex flex-wrap items-center gap-2 text-[var(--color-body)]">
                <Tag size={16} aria-hidden="true" className="text-[var(--color-primary)]" />
                {c.tags.map((t) => (
                  <span key={t} className="rounded-full border border-[var(--color-line)] px-3 py-0.5 text-xs">{t}</span>
                ))}
              </li>
            </ul>
          </article>

          <aside className="h-fit rounded-[1.5rem] border border-[var(--color-line)] bg-white p-7 lg:sticky lg:top-24">
            <h2 className="text-lg font-bold">قنوات التواصل المتاحة</h2>
            <p className="mt-1 text-[13px] leading-7 text-[var(--color-muted)]">
              تظهر هنا فقط القنوات التي نشرها هذا الملف التجريبي.
            </p>
            <div className="mt-4">
              <ContactList contact={c.contact} />
            </div>
          </aside>
        </div>

        {related.length > 0 && (
          <section aria-label="ملفات مشابهة" className="mt-12">
            <h2 className="text-xl font-bold">ملفات مشابهة في نفس المجال</h2>
            <div className="mt-5 grid gap-5 md:grid-cols-3">
              {related.map((r) => (
                <ConsultantCard key={r.slug} consultant={r} />
              ))}
            </div>
          </section>
        )}
      </Container>
    </div>
  );
}
