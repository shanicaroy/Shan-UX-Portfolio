"use client";

import { useEffect, useRef, useState } from "react";

export default function CoordinateReadout() {
  const [coords, setCoords] = useState<{ x: number; y: number } | null>(null);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    function handleMove(e: MouseEvent) {
      if (frame.current) cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        setCoords({ x: Math.round(e.clientX), y: Math.round(e.clientY) });
      });
    }
    window.addEventListener("mousemove", handleMove);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="hidden sm:flex items-center gap-4 font-mono text-xs text-paper/50 tabular-nums"
    >
      <span>X&nbsp;{coords ? String(coords.x).padStart(4, "0") : "----"}</span>
      <span>Y&nbsp;{coords ? String(coords.y).padStart(4, "0") : "----"}</span>
    </div>
  );
}
