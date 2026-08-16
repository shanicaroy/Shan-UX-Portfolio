type GridBackdropProps = {
  variant?: "paper" | "ink";
  className?: string;
};

export default function GridBackdrop({ variant = "paper", className = "" }: GridBackdropProps) {
  const lineColor = variant === "ink" ? "rgba(251,250,246,0.06)" : "rgba(20,33,61,0.07)";
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{
        backgroundImage: `linear-gradient(to right, ${lineColor} 1px, transparent 1px), linear-gradient(to bottom, ${lineColor} 1px, transparent 1px)`,
        backgroundSize: "48px 48px",
      }}
    />
  );
}
