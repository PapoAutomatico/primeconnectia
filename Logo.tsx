interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  light?: boolean;
}

export function Logo({ className = '', size = 'md', showTagline = true, light = false }: LogoProps) {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-13 h-13',
    xl: 'w-16 h-16',
  };

  const titleSizes = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl',
  };

  const taglineSizes = {
    sm: 'text-[9px] tracking-wider',
    md: 'text-[10px] tracking-widest',
    lg: 'text-xs tracking-widest',
    xl: 'text-sm tracking-widest',
  };

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Robot Speech Bubble Icon replica from uploaded photo */}
      <div className={`relative ${iconSizes[size]} flex-shrink-0 group`}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-[0_4px_12px_rgba(0,150,255,0.35)] transition-transform duration-300 group-hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="bubbleGrad" x1="10" y1="10" x2="90" y2="90" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#00E5FF" />
              <stop offset="50%" stopColor="#0088FF" />
              <stop offset="100%" stopColor="#0052D4" />
            </linearGradient>
            <linearGradient id="screenGrad" x1="20" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0B1528" />
              <stop offset="100%" stopColor="#050B14" />
            </linearGradient>
            <linearGradient id="eyeGlow" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#00FFC2" />
              <stop offset="100%" stopColor="#00D2FF" />
            </linearGradient>
          </defs>

          {/* Speech Bubble Base */}
          <path
            d="M20 16C13.3726 16 8 21.3726 8 28V68C8 74.6274 13.3726 80 20 80H34L26 94L50 80H80C86.6274 80 92 74.6274 92 68V28C92 21.3726 86.6274 16 80 16H20Z"
            fill="url(#bubbleGrad)"
          />

          {/* Inner Robot Screen */}
          <rect x="22" y="26" width="56" height="42" rx="12" fill="url(#screenGrad)" stroke="#38BDF8" strokeWidth="2.5" />

          {/* Robot Antenna / Head Accents */}
          <circle cx="50" cy="20" r="3.5" fill="#00E5FF" />
          <line x1="50" y1="23" x2="50" y2="26" stroke="#00E5FF" strokeWidth="2" strokeLinecap="round" />

          {/* Ears / Side Pins */}
          <rect x="18" y="38" width="4" height="18" rx="2" fill="#00D2FF" />
          <rect x="78" y="38" width="4" height="18" rx="2" fill="#00D2FF" />

          {/* Cute Robot Glowing Eyes */}
          <rect x="33" y="39" width="10" height="9" rx="3.5" fill="url(#eyeGlow)" />
          <rect x="57" y="39" width="10" height="9" rx="3.5" fill="url(#eyeGlow)" />

          {/* Eye shine dots */}
          <circle cx="35.5" cy="41.5" r="1.5" fill="#FFFFFF" />
          <circle cx="59.5" cy="41.5" r="1.5" fill="#FFFFFF" />

          {/* Cute Robot Nose/Cheeks/Mouth */}
          <line x1="47" y1="44" x2="53" y2="44" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
          <path
            d="M44 54C47 57 53 57 56 54"
            stroke="#00FFC2"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col">
        <div className={`font-extrabold tracking-tight leading-none ${titleSizes[size]}`}>
          <span className={light ? 'text-white' : 'text-slate-900'}>
            Prime<span className="text-blue-600">Connect</span>
          </span>
          <span className="ml-1.5 px-1.5 py-0.5 text-xs font-bold rounded bg-gradient-to-r from-blue-600 to-cyan-500 text-white uppercase tracking-wider inline-block">
            IA
          </span>
        </div>
        {showTagline && (
          <span
            className={`font-semibold uppercase ${taglineSizes[size]} ${
              light ? 'text-cyan-300' : 'text-blue-600'
            } mt-0.5`}
          >
            CONECTE. AUTOMATIZE. SIMPLIFIQUE
          </span>
        )}
      </div>
    </div>
  );
}
