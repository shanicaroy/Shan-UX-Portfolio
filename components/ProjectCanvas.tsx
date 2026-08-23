/**
 * Stand-in cover art.
 *
 * Real case-study imagery has not been supplied, so rather than exposing a
 * filename or a "placeholder" label this renders a quiet tonal composition in
 * the site's own surface values. Four variants keep the run of projects from
 * reading as identical without introducing decoration.
 *
 * To use real artwork, drop the file at the project's `image` path and replace
 * this component's body with:
 *
 *   <Image src={src} alt={alt} fill sizes="100vw"
 *          className="object-cover transition-transform duration-700
 *                     ease-editorial group-hover:scale-[1.01]" />
 *
 * The surrounding frame and aspect ratio stay the same, so no layout changes.
 */
export default function ProjectCanvas({
  index,
  alt,
  locked,
}: {
  index: number;
  alt: string;
  locked?: boolean;
}) {
  const variant = locked ? -1 : index % 4;

  return (
    <div
      role="img"
      aria-label={alt}
      className="h-full w-full bg-surface transition-transform duration-700 ease-editorial group-hover:scale-[1.01]"
    >
      <svg
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
        aria-hidden="true"
        focusable="false"
      >
        <rect width="1600" height="900" fill="#FFFFFF" />

        {locked && (
          <g stroke="#5C5C55" strokeWidth="6" fill="none" opacity="0.8">
            <rect x="742" y="432" width="116" height="92" rx="10" />
            <path d="M766 432v-26a34 34 0 0 1 68 0v26" />
          </g>
        )}

        {variant === 0 && (
          <g>
            <rect x="200" y="150" width="1200" height="600" fill="#F5F3EE" />
            <rect x="200" y="150" width="1200" height="1" fill="#E3E1DB" />
            <rect x="640" y="150" width="1" height="600" fill="#EAE8E1" />
          </g>
        )}

        {variant === 1 && (
          <g>
            <rect x="120" y="120" width="760" height="660" fill="#F5F3EE" />
            <rect x="940" y="300" width="540" height="300" fill="#F1EFE9" />
            <rect x="120" y="780" width="1360" height="1" fill="#E3E1DB" />
          </g>
        )}

        {variant === 2 && (
          <g>
            <rect x="0" y="240" width="1600" height="420" fill="#F5F3EE" />
            <rect x="380" y="240" width="1" height="420" fill="#EAE8E1" />
            <rect x="1220" y="240" width="1" height="420" fill="#EAE8E1" />
          </g>
        )}

        {variant === 3 && (
          <g>
            <rect x="260" y="90" width="1080" height="720" fill="#F5F3EE" />
            <rect x="260" y="450" width="1080" height="1" fill="#282825" />
            <rect x="800" y="90" width="1" height="720" fill="#222220" />
          </g>
        )}
      </svg>
    </div>
  );
}
