/** Small uppercase label that opens each major section. */
export default function SectionHeading({ children }: { children: string }) {
  return (
    <h2 className="border-t border-rule pt-6 font-sans text-xs uppercase tracking-label text-muted">
      {children}
    </h2>
  );
}
