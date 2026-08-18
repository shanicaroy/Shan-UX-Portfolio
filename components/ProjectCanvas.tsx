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
export default function ProjectCanvas({ index, alt }: { index: number; alt: string }) {
  const variant = index % 4;

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
        <rect width="1600" height="900" fill="#171715" />

        {variant === 0 && (
          <g>
            <rect x="200" y="150" width="1200" height="600" fill="#1C1C19" />
            <rect x="200" y="150" width="1200" height="1" fill="#292925" />
            <rect x="640" y="150" width="1" height="600" fill="#232320" />
          </g>
        )}

        {variant === 1 && (
          <g>
            <rect x="120" y="120" width="760" height="660" fill="#1C1C19" />
            <rect x="940" y="300" width="540" height="300" fill="#1F1F1B" />
            <rect x="120" y="780" width="1360" height="1" fill="#292925" />
          </g>
        )}

        {variant === 2 && (
          <g>
            <rect x="0" y="240" width="1600" height="420" fill="#1C1C19" />
            <rect x="380" y="240" width="1" height="420" fill="#242421" />
            <rect x="1220" y="240" width="1" height="420" fill="#242421" />
          </g>
        )}

        {variant === 3 && (
          <g>
            <rect x="260" y="90" width="1080" height="720" fill="#1C1C19" />
            <rect x="260" y="450" width="1080" height="1" fill="#282825" />
            <rect x="800" y="90" width="1" height="720" fill="#222220" />
          </g>
        )}
      </svg>
    </div>
  );
}
