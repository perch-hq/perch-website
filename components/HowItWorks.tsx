import Link from "next/link";
import { copy } from "@/lib/copy";
import { site } from "@/lib/site";

export function HowItWorks() {
  return (
    <section id="how" className="scroll-mt-20 pb-20 sm:pb-28">
      <div className="site">
        <div className="max-w-2xl">
          <p className="eyebrow">{copy.how.eyebrow}</p>
          <h2 className="mt-4 text-3xl leading-snug tracking-tight sm:text-4xl">
            {copy.how.h2}
          </h2>
        </div>
        <ol className="mt-14 grid gap-x-16 gap-y-12 sm:grid-cols-2">
          {copy.how.steps.map((step, i) => (
            <li key={step.title}>
              <p className="font-mono text-[0.7rem] tracking-[0.16em] text-copper">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-lg">{step.title}</h3>
              <p className="mt-3 max-w-md text-[0.95rem] leading-relaxed text-ink-muted">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>

      <div className="site mt-20">
        <div className="stage grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="border-b border-hairline p-8 sm:p-10 lg:border-b-0 lg:border-r">
            <p className="eyebrow">{copy.trust.eyebrow}</p>
            <h3 className="mt-4 font-serif text-3xl leading-snug">
              {copy.trust.h2}
            </h3>
            <p className="mt-6 max-w-lg text-[0.95rem] leading-relaxed text-ink-muted">
              {copy.trust.lede}
            </p>
            <p className="mt-8">
              <Link
                href={`${site.docs}/trust`}
                className="text-sm text-ink hover:text-copper"
              >
                {copy.trust.cta}
              </Link>
            </p>
          </div>
          <div className="grid grid-rows-3">
            <p className="border-b border-hairline px-8 py-6 text-sm leading-relaxed text-ink-muted sm:px-10">
              <span className="block font-medium text-ink">
                {copy.trust.inventory.title}
              </span>
              {copy.trust.inventory.body}
            </p>
            <p className="border-b border-hairline px-8 py-6 text-sm leading-relaxed text-ink-muted sm:px-10">
              <span className="block font-medium text-ink">
                {copy.trust.halt.title}
              </span>
              {copy.trust.halt.body}
            </p>
            <p className="px-8 py-6 text-sm leading-relaxed text-ink-muted sm:px-10">
              <span className="block font-medium text-ink">
                {copy.trust.leave.title}
              </span>
              {copy.trust.leave.body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
