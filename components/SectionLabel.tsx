type SectionLabelProps = {
  children: string;
  tone?: "ink" | "paper";
};

export default function SectionLabel({ children, tone = "ink" }: SectionLabelProps) {
  const textColor = tone === "paper" ? "text-paper/70" : "text-ink-soft";
  const lineColor = tone === "paper" ? "bg-paper/30" : "bg-ink/15";

  return (
    <div className="flex items-center gap-3 mb-6">
      <span className={`font-mono text-xs tracking-[0.18em] uppercase ${textColor}`}>
        {children}
      </span>
      <span className={`h-px flex-1 origin-left animate-draw-line ${lineColor}`} />
    </div>
  );
}
