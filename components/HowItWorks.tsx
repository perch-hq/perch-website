import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { copy } from "@/lib/copy";
import { site } from "@/lib/site";

function TrustIcon({ kind }: { kind: "inventory" | "halt" | "leave" }) {
  const paths = {
    inventory: (
      <>
        <path d="M8 2.75 13.25 5.5v5L8 13.25 2.75 10.5v-5L8 2.75Z" />
        <path d="M2.75 5.5 8 8l5.25-2.5M8 8v5.25" />
      </>
    ),
    halt: (
      <>
        <rect x="3.25" y="3.25" width="9.5" height="9.5" rx="2.25" />
        <path d="M6.5 6.25v3.5M9.5 6.25v3.5" />
      </>
    ),
    leave: (
      <>
        <path d="M9.75 2.75H5.5v10.5h4.25" />
        <path d="M7.5 8h6M11 5.5 13.5 8 11 10.5" />
      </>
    ),
  } as const;

  return (
    <span
      aria-hidden="true"
      className="flex size-9 flex-none items-center justify-center rounded-lg border border-hairline bg-bg text-copper"
    >
      <svg
        viewBox="0 0 16 16"
        className="size-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {paths[kind]}
      </svg>
    </span>
  );
}

export function HowItWorks() {
  const trustRows = [
    { kind: "inventory", title: copy.trust.inventory.title, body: copy.trust.inventory.body },
    { kind: "halt", title: copy.trust.halt.title, body: copy.trust.halt.body },
    { kind: "leave", title: copy.trust.leave.title, body: copy.trust.leave.body },
  ] as const;

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
            <li key={step.title} className="border-t border-hairline pt-7">
              <Reveal delay={i * 90}>
                <p className="flex size-8 items-center justify-center rounded-md border border-hairline bg-bg-raised font-mono text-[0.7rem] tracking-wider text-copper">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-lg">{step.title}</h3>
                <p className="mt-3 max-w-md text-[0.95rem] leading-relaxed text-ink-muted">
                  {step.body}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>

      <div className="site mt-20">
        <Reveal>
          <div className="stage grid overflow-hidden lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
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
                className="link-arrow text-sm text-ink transition-colors hover:text-copper"
              >
                {copy.trust.cta}
                <span aria-hidden="true" className="arrow">→</span>
              </Link>
            </p>
          </div>
          <div className="grid grid-rows-3">
            {trustRows.map((row, i) => (
              <p
                key={row.kind}
                className={`flex items-start gap-4 px-8 py-6 text-sm leading-relaxed text-ink-muted sm:px-10 ${
                  i < trustRows.length - 1 ? "border-b border-hairline" : ""
                }`}
              >
                <TrustIcon kind={row.kind} />
                <span>
                  <span className="block font-medium text-ink">{row.title}</span>
                  {row.body}
                </span>
              </p>
            ))}
          </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
