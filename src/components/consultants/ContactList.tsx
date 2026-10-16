import type { ReactNode } from "react";
import { CalendarCheck, Globe, Linkedin, Mail, MessageCircle, Phone } from "lucide-react";
import { ensureHttp, whatsappUrl } from "@/features/consultants/utils";
import type { ContactChannels } from "@/features/consultants/types";

function Row({
  icon,
  label,
  href,
  hint,
  ltr = false,
}: {
  icon: ReactNode;
  label: string;
  href?: string | null;
  hint?: string;
  ltr?: boolean;
}) {
  if (!href) return null;
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="flex items-center gap-3 rounded-2xl border border-[var(--color-line)] bg-white px-4 py-3.5 transition hover:border-[var(--color-primary)] hover:bg-[var(--color-primary-soft)]/40"
    >
      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[var(--color-primary-soft)] text-[var(--color-primary)]">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-bold text-[var(--color-ink)]">{label}</span>
        {hint && (
          <span className={`block truncate text-xs text-[var(--color-muted)] ${ltr ? "ltr text-left" : ""}`}>
            {hint}
          </span>
        )}
      </span>
    </a>
  );
}

export function ContactList({ contact }: { contact: ContactChannels }) {
  const wa = whatsappUrl(contact.whatsappE164);
  const entries = [
    wa ? { key: "wa" } : null,
    contact.phone ? { key: "phone" } : null,
    contact.email ? { key: "email" } : null,
    contact.website ? { key: "web" } : null,
    contact.linkedin ? { key: "in" } : null,
    contact.bookingUrl ? { key: "book" } : null,
  ].filter(Boolean);

  if (entries.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-[var(--color-line)] bg-[var(--color-cream)] px-5 py-6 text-center">
        <p className="text-sm font-semibold text-[var(--color-ink)]">لا توجد قناة تواصل منشورة بعد</p>
        <p className="mt-1 text-[13px] leading-6 text-[var(--color-muted)]">
          لم ينشر هذا الملف التجريبي أي وسيلة تواصل. تصفّح مستشارين آخرين أو عُد لاحقًا.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {wa && (
        <Row icon={<MessageCircle size={19} />} label="واتساب" href={wa} hint="محادثة مباشرة" ltr />
      )}
      {contact.phone && (
        <Row
          icon={<Phone size={19} />}
          label="اتصال هاتفي"
          href={`tel:${contact.phone.replace(/\s/g, "")}`}
          hint={contact.phone}
          ltr
        />
      )}
      {contact.email && (
        <Row icon={<Mail size={19} />} label="بريد إلكتروني" href={`mailto:${contact.email}`} hint={contact.email} ltr />
      )}
      {contact.website && (
        <Row icon={<Globe size={19} />} label="الموقع الشخصي" href={ensureHttp(contact.website)} hint="زيارة الموقع" ltr />
      )}
      {contact.linkedin && (
        <Row icon={<Linkedin size={19} />} label="لينكدإن" href={ensureHttp(contact.linkedin)} hint="الملف المهني" ltr />
      )}
      {contact.bookingUrl && (
        <Row icon={<CalendarCheck size={19} />} label="رابط الحجز" href={ensureHttp(contact.bookingUrl)} hint="احجز موعدًا" ltr />
      )}
    </div>
  );
}
