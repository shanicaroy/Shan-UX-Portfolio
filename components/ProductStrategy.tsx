import { productStrategy } from "@/content/leadership";
import Shell from "./Shell";
import SectionIntro from "./SectionIntro";

export default function ProductStrategy() {
  return (
    <Shell as="section" className="pt-24 lg:pt-32">
      <SectionIntro
        label={productStrategy.label}
        heading={productStrategy.heading}
        support={productStrategy.support}
      />
      <ul className="mt-10 flex max-w-3xl flex-wrap gap-x-10 gap-y-3">
        {productStrategy.areas.map((a) => (
          <li key={a} className="text-[15px] text-ink/85">
            {a}
          </li>
        ))}
      </ul>
    </Shell>
  );
}
