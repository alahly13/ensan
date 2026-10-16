export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5" aria-label="إنسان ENSAN">
      <span
        aria-hidden="true"
        className="grid size-10 shrink-0 place-items-center rounded-2xl text-white"
        style={{ background: "linear-gradient(135deg,#1C6B62,#122A30)" }}
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
      {!compact && (
        <span className="leading-tight">
          <span className="block text-xl font-bold text-[var(--color-ink)]">إنسان</span>
          <span className="ltr block text-[11px] font-semibold tracking-[0.22em] text-[var(--color-muted)]">
            ENSAN
          </span>
        </span>
      )}
    </span>
  );
}
