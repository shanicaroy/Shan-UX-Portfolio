/** Shared section opening: small uppercase label, display heading, support copy. */
export default function SectionIntro({
  label,
  heading,
  support,
}: {
  label: string;
  heading: string;
  support?: string;
}) {
  return (
    <header>
      <p className="border-t border-rule pt-5 text-[12px] uppercase tracking-label text-muted">
        {label}
      </p>
      <h2 className="display mt-8 max-w-3xl text-[2rem] leading-[1.12] text-ink sm:text-[2.75rem] lg:text-[3.25rem]">
        {heading}
      </h2>
      {support && (
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{support}</p>
      )}
    </header>
  );
}
