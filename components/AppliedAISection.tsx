import Link from "next/link";
import { appliedAI } from "@/content/applied-ai";
import Shell from "./Shell";
import SixStepFlow from "./SixStepFlow";
import EvalTabs from "./EvalTabs";

/**
 * Full-bleed navy Applied AI practice section, replicating the reference
 * block by block: intro + status strip, the product contract, interaction
 * study 01 (six-step flow), designed failure states, interaction study 02
 * (the evaluation), and the current-limit row.
 */
export default function AppliedAISection() {
  const { contract, flow, failures, evaluation, limit } = appliedAI;

  return (
    <section id="applied-ai" className="scroll-mt-[var(--nav-height)] bg-navy">
      <Shell className="py-20 lg:py-28">
        {/* 4a — intro */}
        <p className="type-eyebrow text-lime">{appliedAI.eyebrow}</p>
        <div className="mt-8 grid grid-cols-12 gap-y-8 lg:gap-x-8">
          <h2 className="type-hero col-span-12 max-w-[16ch] text-ground lg:col-span-7">
            {appliedAI.heading}
          </h2>
          <p className="col-span-12 self-end text-base leading-relaxed text-muted-dark lg:col-span-5 lg:col-start-8">
            {appliedAI.intro}
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-px border border-rule-dark bg-rule-dark sm:grid-cols-2 lg:grid-cols-4">
          {appliedAI.status.map((item, i) => (
            <li
              key={item}
              className="flex items-center gap-2.5 bg-navy px-5 py-5 text-sm text-ground"
            >
              {i === 0 && <span aria-hidden className="text-lime">&#9679;</span>}
              {item}
            </li>
          ))}
        </ul>

        {/* 4b — the product contract */}
        <div className="mt-16 grid grid-cols-1 lg:mt-20 lg:grid-cols-2">
          <div className="bg-lime p-8 sm:p-10 lg:p-14">
            <p className="type-eyebrow text-ink">{contract.eyebrow}</p>
            <h3 className="type-section mt-8 max-w-[22ch] text-ink lg:mt-12">
              {contract.headline}
            </h3>
          </div>
          <div className="bg-ground p-8 sm:p-10 lg:p-14">
            <dl>
              {contract.rows.map((row, i) => (
                <div key={row.label} className={`py-5 ${i > 0 ? "border-t border-rule" : ""}`}>
                  <dt className="type-eyebrow text-muted">{row.label}</dt>
                  <dd className="mt-2 max-w-xl text-[17px] leading-relaxed text-ink">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* 4c — interaction study 01: the six-step review flow */}
        <div className="mt-16 lg:mt-20">
          <p className="type-eyebrow text-lime">{flow.eyebrow}</p>
          <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
            <h3 className="type-section text-ground">{flow.heading}</h3>
            <p className="type-eyebrow border border-rule-dark px-4 py-2 text-ground">
              {flow.tag}
            </p>
          </div>
          <div className="mt-10">
            <SixStepFlow />
          </div>
        </div>

        {/* 4d — designed failure states */}
        <div className="mt-16 grid grid-cols-1 gap-px border border-rule-dark bg-rule-dark sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          <div className="bg-navy p-8 sm:col-span-2 lg:p-10">
            <p className="type-eyebrow text-lime">{failures.eyebrow}</p>
            <h3 className="type-statement mt-8 max-w-[20ch] text-ground lg:mt-12">
              {failures.heading}
            </h3>
          </div>
          {failures.cells.map((cell, i) => (
            <div key={cell.title} className="flex min-h-[14rem] flex-col justify-between bg-navy p-8">
              <p className="type-eyebrow text-lime tabular-nums">0{i + 1}</p>
              <div className="pt-10">
                <h4 className="text-xl font-medium text-ground">{cell.title}</h4>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-dark">{cell.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 4e — interaction study 02: the evaluation */}
        <div className="mt-16 lg:mt-20">
          <div className="bg-accent p-8 sm:p-10 lg:p-12">
            <p className="type-eyebrow text-ground/80">{evaluation.eyebrow}</p>
            <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
              <h3 className="type-section max-w-[24ch] text-ground">{evaluation.heading}</h3>
              <p className="type-eyebrow border border-ground/60 px-4 py-2 text-ground">
                {evaluation.tag}
              </p>
            </div>
          </div>

          <ul className="grid grid-cols-1 gap-px border-x border-rule bg-rule sm:grid-cols-2 lg:grid-cols-4">
            {evaluation.stats.map((stat) => (
              <li key={stat.label} className="bg-ground px-6 py-8">
                <p className="display text-[2.75rem] leading-none text-ink">{stat.value}</p>
                <p className="type-eyebrow mt-4 text-muted">{stat.label}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{stat.note}</p>
              </li>
            ))}
          </ul>

          <EvalTabs />

          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-dark">
            {evaluation.footnote}
          </p>
        </div>

        {/* 4f — current limit */}
        <div className="mt-16 grid grid-cols-1 gap-6 border border-rule-dark p-8 lg:mt-20 lg:grid-cols-[12rem_1fr] lg:p-10">
          <p className="type-eyebrow text-lime">{limit.label}</p>
          <p className="max-w-3xl text-[17px] leading-relaxed text-ground">{limit.text}</p>
        </div>

        <Link
          href={appliedAI.link.href}
          className="mt-12 inline-block text-[15px] font-medium text-ground underline-offset-4 transition-opacity duration-200 hover:underline hover:opacity-80"
        >
          {appliedAI.link.label} <span aria-hidden>&rarr;</span>
        </Link>
      </Shell>
    </section>
  );
}
