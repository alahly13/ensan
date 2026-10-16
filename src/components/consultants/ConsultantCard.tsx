import Link from "next/link";
import { ArrowLeft, MapPin, Video } from "lucide-react";
import type { Consultant } from "@/features/consultants/types";
import { categoryTitle } from "@/features/consultants/categories";

export function ConsultantCard({ consultant }: { consultant: Consultant }) {
  return (
    <article className="card-shadow flex h-full flex-col rounded-[1.25rem] border border-[var(--color-line)] bg-white p-6 transition-all duration-200 hover:-translate-y-1">
      <div className="flex items-start gap-4">
        <span
          aria-hidden="true"
          className="grid size-14 shrink-0 place-items-center rounded-2xl text-lg font-bold text-white"
          style={{ background: consultant.accent }}
        >
          {consultant.initials}
        </span>
        <div className="min-w-0">
          <h3 className="text-lg font-bold leading-7">
            <Link href={`/consultants/${consultant.slug}`} className="hover:text-[var(--color-primary)]">
              {consultant.name}
            </Link>
          </h3>
          <p className="text-sm font-medium text-[var(--color-primary)]">{consultant.title}</p>
          <p className="mt-0.5 text-[13px] text-[var(--color-muted)]">{consultant.specialty}</p>
        </div>
      </div>

      <p className="mt-4 line-clamp-3 text-[14px] leading-7 text-[var(--color-body)]">{consultant.bio}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {consultant.categoryIds.slice(0, 2).map((id) => (
          <span
            key={id}
            className="rounded-full bg-[var(--color-primary-soft)] px-3 py-1 text-xs font-semibold text-[var(--color-primary)]"
          >
            {categoryTitle(id)}
          </span>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] text-[var(--color-muted)]">
        <span className="inline-flex items-center gap-1.5">
          <MapPin size={15} aria-hidden="true" /> {consultant.location}
        </span>
        {consultant.remote && (
          <span className="inline-flex items-center gap-1.5">
            <Video size={15} aria-hidden="true" /> عن بُعد متاح
          </span>
        )}
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-[var(--color-line)] pt-4">
        <span className="text-xs text-[var(--color-muted)]">{consultant.languages.join(" · ")}</span>
        <Link
          href={`/consultants/${consultant.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-bold text-[var(--color-primary)] hover:gap-2.5 hover:text-[var(--color-primary-hover)]"
        >
          عرض الملف <ArrowLeft size={16} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
