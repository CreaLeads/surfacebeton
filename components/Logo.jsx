export default function Logo({ className = '', variant = 'dark' }) {
  const textColor = variant === 'light' ? '#FFFFFF' : '#0A0E1A';
  const accent = '#EA580C';

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        className="logo-mark shrink-0"
        width="34"
        height="34"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect x="1" y="1" width="38" height="38" rx="4" stroke={textColor} strokeWidth="1.5" />
        <path
          d="M11 26 Q 15 21, 20 24 Q 25 27, 29 22"
          stroke={accent}
          strokeWidth="2.4"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M11 18 Q 15 13, 20 16 Q 25 19, 29 14"
          stroke={textColor}
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="none"
          opacity="0.85"
        />
      </svg>
      <span className="font-display text-[19px] font-semibold tracking-[-0.02em] leading-none" style={{ color: textColor }}>
        Surface<span style={{ color: accent, fontStyle: 'italic', fontWeight: 500 }}>Béton</span>
      </span>
    </span>
  );
}
