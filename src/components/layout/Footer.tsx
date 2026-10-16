import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-[var(--color-hero)] text-white">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <span className="inline-flex items-center gap-2.5">
            <span
              aria-hidden="true"
              className="grid size-10 place-items-center rounded-2xl bg-white/10"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="7" r="3.2" fill="#F8F6F1" />
                <path
                  d="M5 20c1.2-3.8 3.9-5.6 7-5.6s5.8 1.8 7 5.6"
                  stroke="#D88B63"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span className="leading-tight">
              <span className="block text-xl font-bold text-white">إنسان</span>
              <span className="ltr block text-[11px] font-semibold tracking-[0.22em] text-white/60">
                ENSAN
              </span>
            </span>
          </span>
          <p className="mt-4 max-w-xs text-sm leading-7 text-white/70">
            استشارة أوضح، وخطوة أهدى. منصة عربية تساعدك على اكتشاف المستشار المناسب والتواصل معه
            بالطريقة التي تناسبه.
          </p>
          <p className="mt-4 rounded-xl bg-white/5 px-4 py-3 text-xs leading-6 text-white/60">
            جميع الملفات المعروضة حاليًا بيانات تجريبية لأغراض العرض والتطوير.
          </p>
        </div>

        <nav aria-label="روابط المنصة">
          <h3 className="mb-4 text-sm font-bold text-white">المنصة</h3>
          <ul className="space-y-2.5 text-sm text-white/75">
            <li><Link className="hover:text-white" href="/">الرئيسية</Link></li>
            <li><Link className="hover:text-white" href="/#categories">مجالات الاستشارات</Link></li>
            <li><Link className="hover:text-white" href="/consultants">المستشارون</Link></li>
            <li><Link className="hover:text-white" href="/join">انضم كمستشار</Link></li>
          </ul>
        </nav>

        <nav aria-label="عن إنسان">
          <h3 className="mb-4 text-sm font-bold text-white">إنسان</h3>
          <ul className="space-y-2.5 text-sm text-white/75">
            <li><Link className="hover:text-white" href="/about">عن إنسان</Link></li>
            <li><Link className="hover:text-white" href="/#how">كيف تعمل المنصة؟</Link></li>
            <li><Link className="hover:text-white" href="/#faq">الأسئلة الشائعة</Link></li>
          </ul>
        </nav>

        <nav aria-label="روابط قانونية">
          <h3 className="mb-4 text-sm font-bold text-white">قانوني</h3>
          <ul className="space-y-2.5 text-sm text-white/75">
            <li><Link className="hover:text-white" href="/privacy">الخصوصية</Link></li>
            <li><Link className="hover:text-white" href="/terms">الشروط والأحكام</Link></li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© 2026 إنسان ENSAN — جميع الحقوق محفوظة.</p>
          <p>صُنع بعناية لخدمة المحتوى العربي.</p>
        </div>
      </div>
    </footer>
  );
}

// re-export default Logo usage parity (kept for tree-shaking clarity)
export { Logo };
