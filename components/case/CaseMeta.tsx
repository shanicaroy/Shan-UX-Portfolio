/**
 * Structured project metadata beneath the hero, matched to the Figma final
 * structure: a single row of fields — Role, Timeline, System, Scope — with
 * small uppercase Inter labels and serif values. Scope takes the widest
 * column. Hairline rules above and below (border-y). Stacks to two columns,
 * then one, on smaller screens. Values are real, approved facts, never invented.
 */
export type MetaItem = { label: string; value: string };

export default function CaseMeta({ items }: { items: readonly MetaItem[] }) {
  return (
    <dl className="grid grid-cols-2 gap-x-8 gap-y-7 border-y border-rule py-8 lg:grid-cols-[1.15fr_1fr_0.7fr_2.1fr] lg:gap-x-10">
      {items.map((it) => (
        <div key={it.label} className="min-w-0">
          <dt className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-[#9a9a9a]">
            {it.label}
          </dt>
          <dd className="mt-3 font-serif text-[18px] leading-[1.4] text-[#2b2b2e]">{it.value}</dd>
        </div>
      ))}
    </dl>
  );
}
