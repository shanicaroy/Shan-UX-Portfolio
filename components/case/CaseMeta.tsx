/**
 * Structured project metadata beneath the hero. Composition follows the Tyler
 * Berg "Pockets" reference: clear field labels paired with their values, in a
 * tidy editorial grid. Fields map to Role / Timeline / Scope (plus an optional
 * approved extra such as System). Values are real, approved project facts,
 * never invented. Stacks to a single column on small screens.
 */
export type MetaItem = { label: string; value: string };

export default function CaseMeta({ items }: { items: readonly MetaItem[] }) {
  return (
    <dl className="grid grid-cols-1 gap-x-10 gap-y-6 border-y border-rule py-7 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((it) => (
        <div key={it.label} className="min-w-0">
          <dt className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-[#9a9a9a]">
            {it.label}
          </dt>
          <dd className="mt-2 font-sans text-[15px] leading-[1.5] text-ink">{it.value}</dd>
        </div>
      ))}
    </dl>
  );
}
