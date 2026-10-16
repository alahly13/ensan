import { categoryTitle } from "./categories";
import type { Consultant } from "./types";

/** Accept only explicit international digits (7–15 digits, E.164 style). */
export function isValidE164(digits: string | undefined): boolean {
  if (!digits) return false;
  return /^[1-9]\d{6,14}$/.test(digits.trim());
}

/** Build a wa.me link only from an explicitly configured valid number. */
export function whatsappUrl(digits: string | undefined): string | null {
  const d = digits?.trim();
  if (!d || !isValidE164(d)) return null;
  return `https://wa.me/${d}`;
}

export function ensureHttp(url: string | undefined): string | null {
  if (!url) return null;
  const t = url.trim();
  if (t.startsWith("http://") || t.startsWith("https://")) return t;
  if (t.startsWith("mailto:")) return t;
  return `https://${t}`;
}

const norm = (s: string) =>
  s
    .toLowerCase()
    .replace(/[أإآ]/g, "ا")
    .replace(/ة/g, "ه")
    .replace(/ى/g, "ي")
    .trim();

export function searchConsultants(list: Consultant[], query: string): Consultant[] {
  const q = norm(query);
  if (!q) return list;
  return list.filter((c) => {
    const hay = [
      c.name,
      c.title,
      c.specialty,
      c.bio,
      c.location,
      ...c.tags,
      ...c.languages,
      ...c.categoryIds.map(categoryTitle),
    ]
      .join(" ")
      .toLowerCase();
    const hayNorm = norm(hay);
    return q.split(/\s+/).every((w) => hayNorm.includes(w));
  });
}

export function filterByCategory(list: Consultant[], categoryId: string | null): Consultant[] {
  if (!categoryId) return list;
  return list.filter((c) => c.categoryIds.includes(categoryId));
}
