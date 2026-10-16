import Link from "next/link";
import {
  Briefcase, Compass, Cpu, GraduationCap, HeartHandshake, Rocket, Scale, Wallet,
  type LucideIcon,
} from "lucide-react";
import { categories } from "@/features/consultants/categories";
import { Container, SectionHeading } from "@/components/ui/primitives";

const icons: Record<string, LucideIcon> = {
  briefcase: Briefcase,
  graduation: GraduationCap,
  rocket: Rocket,
  cpu: Cpu,
  scale: Scale,
  wallet: Wallet,
  compass: Compass,
  heart: HeartHandshake,
};

export function Categories() {
  return (
    <section id="categories" aria-label="مجالات الاستشارات" className="scroll-mt-20">
      <Container className="py-16 sm:py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="مجالات الاستشارات"
            title="ابدأ من المجال الأقرب لسؤالك"
            description="ثمانية مجالات جاهزة للاستكشاف الآن، والقائمة مصممة للتوسع دون إعادة بناء الصفحة."
          />
          <Link
            href="/consultants"
            className="rounded-full border border-[var(--color-line)] bg-white px-5 py-2.5 text-sm font-bold text-[var(--color-primary)] transition hover:border-[var(--color-primary)]"
          >
            عرض كل المستشارين
          </Link>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => {
            const Icon = icons[c.icon] ?? Compass;
            return (
              <Link
                key={c.id}
                href={`/consultants?category=${c.id}`}
                className="card-shadow group rounded-[1.25rem] border border-[var(--color-line)] bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[var(--color-primary)]"
              >
                <span className="grid size-12 place-items-center rounded-2xl bg-[var(--color-primary-soft)] text-[var(--color-primary)] transition group-hover:bg-[var(--color-primary)] group-hover:text-white">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-[16px] font-bold leading-7">
                  {c.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-7 text-[var(--color-muted)]">{c.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-[var(--color-primary)]">
                  استكشف المجال <span aria-hidden="true" className="transition group-hover:-translate-x-1">←</span>
                </span>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
