type CoverProps = {
  variant: "flow" | "grid" | "signal";
  className?: string;
};

/**
 * Abstract cover art standing in for real project screenshots. Drawn on the
 * site's dark surface with the neon accent so it reads as part of the system.
 * Swap for an <img> / next/image once real artwork exists.
 */
export default function CaseStudyCover({ variant, className = "" }: CoverProps) {
  return (
    <div className={`relative overflow-hidden bg-surface ${className}`}>
      <svg viewBox="0 0 400 300" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id={`g-${variant}`} width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(237,237,237,0.05)" strokeWidth="1" />
          </pattern>
          <radialGradient id={`glow-${variant}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#C6F73C" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#C6F73C" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="400" height="300" fill={`url(#g-${variant})`} />

        {variant === "flow" && (
          <g fill="none" strokeLinecap="round" strokeLinejoin="round">
            <ellipse cx="200" cy="150" rx="150" ry="110" fill={`url(#glow-${variant})`} />
            <rect x="40" y="128" width="76" height="44" rx="6" stroke="#EDEDED" strokeOpacity="0.5" />
            <path d="M116 150 H166" stroke="#C6F73C" strokeWidth="2" />
            <rect x="166" y="106" width="76" height="44" rx="6" stroke="#EDEDED" strokeOpacity="0.5" />
            <path d="M204 106 V66" stroke="#EDEDED" strokeOpacity="0.28" />
            <path d="M242 128 H292" stroke="#C6F73C" strokeWidth="2" />
            <rect x="292" y="104" width="76" height="52" rx="6" stroke="#C6F73C" strokeWidth="1.5" />
            <circle cx="78" cy="150" r="3" fill="#EDEDED" />
            <circle cx="330" cy="130" r="3" fill="#C6F73C" />
          </g>
        )}

        {variant === "grid" && (
          <>
            <ellipse cx="200" cy="150" rx="160" ry="115" fill={`url(#glow-${variant})`} />
            <g fill="none">
              {[0, 1, 2, 3].map((row) =>
                [0, 1, 2, 3, 4].map((col) => {
                  const accent = (row === 1 && col === 2) || (row === 2 && col === 3);
                  return (
                    <rect
                      key={`${row}-${col}`}
                      x={38 + col * 68}
                      y={34 + row * 60}
                      width="50"
                      height="36"
                      rx="6"
                      stroke={accent ? "#C6F73C" : "#EDEDED"}
                      strokeOpacity={accent ? 1 : 0.32}
                      strokeWidth={accent ? 2 : 1}
                    />
                  );
                })
              )}
            </g>
          </>
        )}

        {variant === "signal" && (
          <g fill="none">
            <ellipse cx="230" cy="150" rx="150" ry="100" fill={`url(#glow-${variant})`} />
            <path
              d="M20 150 Q60 92 100 150 T180 150 T260 150"
              stroke="#EDEDED"
              strokeOpacity="0.25"
              strokeWidth="1.5"
            />
            <path d="M180 150 Q220 64 260 150 T340 150" stroke="#C6F73C" strokeWidth="2.5" />
            <circle cx="260" cy="150" r="5" fill="#C6F73C" />
            <line x1="260" y1="150" x2="260" y2="204" stroke="#C6F73C" strokeOpacity="0.5" strokeWidth="1" strokeDasharray="3 4" />
          </g>
        )}
      </svg>
    </div>
  );
}
