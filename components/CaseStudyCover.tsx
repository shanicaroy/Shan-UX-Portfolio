type CoverProps = {
  variant: "flow" | "grid" | "signal";
  className?: string;
};

/**
 * Abstract schematic cover art standing in for a real project screenshot.
 * Swap the <CaseStudyCover variant=... /> usage for an <img> once real
 * artwork exists — see content/projects.ts.
 */
export default function CaseStudyCover({ variant, className = "" }: CoverProps) {
  return (
    <div className={`relative overflow-hidden bg-ink ${className}`}>
      <svg viewBox="0 0 400 300" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id={`grid-${variant}`} width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(251,250,246,0.07)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="400" height="300" fill={`url(#grid-${variant})`} />

        {variant === "flow" && (
          <g fill="none" strokeLinecap="round" strokeLinejoin="round">
            <rect x="30" y="130" width="70" height="40" rx="2" stroke="#FBFAF6" strokeOpacity="0.55" />
            <path d="M100 150 H160" stroke="#FF4E1F" strokeWidth="2" />
            <rect x="160" y="110" width="70" height="40" rx="2" stroke="#FBFAF6" strokeOpacity="0.55" />
            <path d="M195 110 V70" stroke="#FBFAF6" strokeOpacity="0.35" />
            <path d="M230 130 H300" stroke="#FF4E1F" strokeWidth="2" />
            <rect x="300" y="105" width="70" height="50" rx="2" stroke="#38B6A6" strokeWidth="1.5" />
            <circle cx="65" cy="150" r="2.5" fill="#FBFAF6" />
            <circle cx="335" cy="130" r="2.5" fill="#38B6A6" />
          </g>
        )}

        {variant === "grid" && (
          <g fill="none" stroke="#FBFAF6" strokeOpacity="0.5">
            {[0, 1, 2, 3].map((row) =>
              [0, 1, 2, 3, 4].map((col) => {
                const isAccent = (row === 1 && col === 2) || (row === 2 && col === 3);
                return (
                  <rect
                    key={`${row}-${col}`}
                    x={40 + col * 68}
                    y={30 + row * 62}
                    width="48"
                    height="34"
                    rx="2"
                    stroke={isAccent ? "#FF4E1F" : undefined}
                    strokeOpacity={isAccent ? 1 : 0.4}
                    strokeWidth={isAccent ? 2 : 1}
                  />
                );
              })
            )}
          </g>
        )}

        {variant === "signal" && (
          <g fill="none">
            <path
              d="M20 150 Q60 90 100 150 T180 150 T260 150"
              stroke="#FBFAF6"
              strokeOpacity="0.3"
              strokeWidth="1.5"
            />
            <path
              d="M180 150 Q220 60 260 150 T340 150"
              stroke="#FF4E1F"
              strokeWidth="2.5"
            />
            <circle cx="260" cy="150" r="4" fill="#FF4E1F" />
            <line x1="260" y1="150" x2="260" y2="200" stroke="#38B6A6" strokeWidth="1" strokeDasharray="3 4" />
            <text x="264" y="212" fill="#38B6A6" fontSize="9" fontFamily="monospace">
              signal isolated
            </text>
          </g>
        )}
      </svg>
    </div>
  );
}
