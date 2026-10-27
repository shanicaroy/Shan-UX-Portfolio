"use client";

import { useEffect, useRef } from "react";

/**
 * A looping cover video that reliably autoplays on mobile. React's `muted`
 * prop doesn't always set the DOM property, and mobile browsers refuse to
 * autoplay anything they consider unmuted — so we force `muted` on the element
 * and kick off play() ourselves. `playsInline` keeps iOS from going fullscreen.
 */
export default function AutoVideo({
  src,
  className,
  ariaLabel,
}: {
  src: string;
  className?: string;
  ariaLabel?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    v.defaultMuted = true;
    const tryPlay = () => {
      const p = v.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    };
    tryPlay();
    v.addEventListener("loadeddata", tryPlay);
    v.addEventListener("canplay", tryPlay);
    return () => {
      v.removeEventListener("loadeddata", tryPlay);
      v.removeEventListener("canplay", tryPlay);
    };
  }, [src]);

  return (
    <video
      ref={ref}
      src={src}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-label={ariaLabel}
      className={className}
    />
  );
}
