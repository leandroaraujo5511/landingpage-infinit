export function HeroVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <svg viewBox="0 0 520 400" className="hero-visual__svg" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C9A24D" stopOpacity="0.95" />
            <stop offset="55%" stopColor="#C9A24D" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#C9A24D" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="g2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
          <filter id="blur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="24" result="b" />
          </filter>
        </defs>
        <rect width="520" height="400" fill="url(#g2)" />
        <circle cx="420" cy="72" r="120" fill="url(#g1)" filter="url(#blur)" opacity="0.55" />
        <g className="hero-visual__grid" stroke="#C9A24D" strokeOpacity="0.22" fill="none">
          {Array.from({ length: 12 }).map((_, i) => (
            <line key={`v${i}`} x1={40 + i * 40} y1="24" x2={40 + i * 40} y2="376" strokeWidth="1" />
          ))}
          {Array.from({ length: 9 }).map((_, i) => (
            <line key={`h${i}`} x1="24" y1={40 + i * 40} x2="496" y2={40 + i * 40} strokeWidth="1" />
          ))}
        </g>
        <g stroke="#C9A24D" strokeWidth="2" fill="none" strokeLinecap="round" className="hero-visual__lines">
          <path d="M48 292 C140 220 200 320 280 200 S420 120 472 88" opacity="0.85" />
          <path d="M56 120 C120 180 180 96 248 152 S380 200 468 168" opacity="0.45" />
          <path d="M72 340 C160 300 220 360 300 300 S420 260 480 300" opacity="0.35" />
        </g>
        <g className="hero-visual__nodes" fill="#C9A24D">
          <circle cx="280" cy="200" r="5" opacity="0.95" />
          <circle cx="472" cy="88" r="4" opacity="0.85" />
          <circle cx="248" cy="152" r="4" opacity="0.7" />
        </g>
        <g transform="translate(52 48)" className="hero-visual__panel">
          <rect width="200" height="132" rx="14" fill="#0B0B0B" stroke="#C9A24D" strokeOpacity="0.35" />
          <rect x="16" y="16" width="120" height="10" rx="4" fill="#C9A24D" opacity="0.35" />
          <rect x="16" y="36" width="168" height="6" rx="3" fill="#ffffff" opacity="0.08" />
          <rect x="16" y="50" width="140" height="6" rx="3" fill="#ffffff" opacity="0.06" />
          <rect x="16" y="72" width="168" height="44" rx="10" fill="#ffffff" opacity="0.05" />
          <rect x="24" y="84" width="48" height="20" rx="6" fill="#C9A24D" opacity="0.22" />
          <rect x="80" y="84" width="48" height="20" rx="6" fill="#C9A24D" opacity="0.14" />
          <rect x="136" y="84" width="40" height="20" rx="6" fill="#C9A24D" opacity="0.1" />
        </g>
        <g transform="translate(268 220)" className="hero-visual__panel hero-visual__panel--2">
          <rect width="200" height="132" rx="14" fill="#0B0B0B" stroke="#C9A24D" strokeOpacity="0.28" />
          <rect x="16" y="16" width="90" height="10" rx="4" fill="#C9A24D" opacity="0.28" />
          <rect x="16" y="38" width="168" height="78" rx="10" fill="#ffffff" opacity="0.04" />
          <path
            d="M28 98 L52 74 L76 88 L108 56 L132 70 L164 48"
            stroke="#C9A24D"
            strokeOpacity="0.55"
            strokeWidth="2"
            fill="none"
          />
        </g>
      </svg>
    </div>
  )
}
