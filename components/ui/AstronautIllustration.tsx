export default function AstronautIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Glow effect */}
      <defs>
        <radialGradient id="glowGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FF6B35" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#FF6B35" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="visorGrad" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#1E3A8A" />
          <stop offset="100%" stopColor="#0A0A1A" />
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="8" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Background glow */}
      <ellipse cx="200" cy="280" rx="160" ry="180" fill="url(#glowGrad)" />

      {/* Jetpack */}
      <rect x="145" y="230" width="35" height="80" rx="8" fill="#1E1E30" stroke="#FF6B35" strokeWidth="1.5" />
      <rect x="220" y="230" width="35" height="80" rx="8" fill="#1E1E30" stroke="#FF6B35" strokeWidth="1.5" />
      {/* Jetpack flames */}
      <ellipse cx="162" cy="318" rx="10" ry="18" fill="#FF6B35" opacity="0.9" filter="url(#glow)" />
      <ellipse cx="237" cy="318" rx="10" ry="18" fill="#FF6B35" opacity="0.9" filter="url(#glow)" />
      <ellipse cx="162" cy="322" rx="6" ry="12" fill="#FFD166" opacity="0.7" />
      <ellipse cx="237" cy="322" rx="6" ry="12" fill="#FFD166" opacity="0.7" />

      {/* Body / Suit */}
      <rect x="148" y="220" width="104" height="110" rx="30" fill="#E8E8F0" />
      <rect x="155" y="225" width="90" height="100" rx="26" fill="#F0F0F8" />

      {/* Suit details */}
      <rect x="168" y="255" width="64" height="4" rx="2" fill="#FF6B35" opacity="0.8" />
      <rect x="168" y="265" width="44" height="4" rx="2" fill="#FF6B35" opacity="0.5" />
      {/* Chest badge */}
      <rect x="185" y="280" width="30" height="22" rx="5" fill="#0A0A2A" stroke="#FF6B35" strokeWidth="1" />
      <text x="200" y="294" textAnchor="middle" fontSize="8" fill="#FF6B35" fontFamily="monospace" fontWeight="bold">SEO</text>

      {/* Arms */}
      {/* Left arm */}
      <rect x="108" y="225" width="44" height="28" rx="14" fill="#E8E8F0" transform="rotate(-25, 130, 239)" />
      <circle cx="100" cy="265" r="18" fill="#E8E8F0" />
      <circle cx="100" cy="265" r="12" fill="#D0D0E0" />
      {/* Right arm */}
      <rect x="248" y="225" width="44" height="28" rx="14" fill="#E8E8F0" transform="rotate(25, 270, 239)" />
      <circle cx="300" cy="265" r="18" fill="#E8E8F0" />
      <circle cx="300" cy="265" r="12" fill="#D0D0E0" />

      {/* Legs */}
      <rect x="163" y="320" width="32" height="60" rx="16" fill="#E8E8F0" />
      <rect x="205" y="320" width="32" height="60" rx="16" fill="#E8E8F0" />
      {/* Boots */}
      <rect x="157" y="368" width="44" height="24" rx="12" fill="#C0C0D0" />
      <rect x="199" y="368" width="44" height="24" rx="12" fill="#C0C0D0" />

      {/* Helmet */}
      <ellipse cx="200" cy="175" rx="65" ry="70" fill="#E8E8F0" />
      {/* Visor */}
      <ellipse cx="200" cy="178" rx="48" ry="50" fill="url(#visorGrad)" />
      {/* Visor reflection */}
      <ellipse cx="182" cy="158" rx="12" ry="18" fill="white" opacity="0.15" transform="rotate(-20, 182, 158)" />
      <ellipse cx="175" cy="152" rx="5" ry="8" fill="white" opacity="0.25" transform="rotate(-20, 175, 152)" />

      {/* Stars around */}
      {[
        [60, 80, 3], [340, 120, 2], [50, 200, 2], [350, 250, 3],
        [80, 350, 2], [320, 380, 2], [120, 420, 3], [280, 60, 2],
      ].map(([x, y, r], i) => (
        <circle key={i} cx={x} cy={y} r={r} fill="#FF6B35" opacity="0.6" />
      ))}

      {/* Floating search icon */}
      <g transform="translate(310, 140)" opacity="0.9">
        <circle cx="14" cy="14" r="14" fill="#FF6B35" opacity="0.15" />
        <circle cx="12" cy="12" r="7" stroke="#FF6B35" strokeWidth="2" fill="none" />
        <line x1="17" y1="17" x2="22" y2="22" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" />
      </g>

      {/* Floating rank up icon */}
      <g transform="translate(55, 150)" opacity="0.8">
        <circle cx="14" cy="14" r="14" fill="#FF6B35" opacity="0.15" />
        <polyline points="7,19 11,13 14,16 18,9" stroke="#FF6B35" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="16,9 18,9 18,11" stroke="#FF6B35" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}
